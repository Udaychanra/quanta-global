import React, { useEffect, useMemo, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase, hasSupabaseEnv } from '@/lib/supabaseClient';

type ContentType = 'blogs' | 'insights';
type Section = 'services' | 'solutions' | 'products' | 'industries';

type ContentRow = {
  id?: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content?: string | null;
  cover_image_url?: string | null;
  section: Section;
  subcategory?: string | null; // optional column if present in DB
};

const sections: Section[] = ['services', 'solutions', 'products', 'industries'];

type SubcategoryRow = {
  id: string;
  section: Section;
  name: string;
  slug: string;
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

const emptyForm: ContentRow = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  cover_image_url: '',
  section: 'services',
  subcategory: ''
};

async function fetchList(type: ContentType, section?: string, subcategory?: string) {
  if (!hasSupabaseEnv) return [] as ContentRow[];
  let q = supabase.from(type).select('*').order('created_at', { ascending: false });
  if (section) q = q.eq('section', section);
  if (subcategory) q = q.eq('subcategory', subcategory);
  const { data, error } = await q;
  if (error) throw error;
  return (data as unknown) as ContentRow[];
}

async function fetchSubcategories() {
  if (!hasSupabaseEnv) return [] as SubcategoryRow[];
  const { data, error } = await supabase
    .from('content_subcategories')
    .select('*')
    .order('section', { ascending: true })
    .order('name', { ascending: true });
  if (error) throw error;
  return (data as unknown) as SubcategoryRow[];
}

async function upsertRow(type: ContentType, values: ContentRow) {
  if (!hasSupabaseEnv) throw new Error('Supabase not configured');
  const { data, error } = await supabase.from(type).upsert(values).select('*').single();
  if (error) throw error;
  return data as ContentRow;
}

async function deleteRow(type: ContentType, id: string) {
  if (!hasSupabaseEnv) throw new Error('Supabase not configured');
  const { error } = await supabase.from(type).delete().eq('id', id);
  if (error) throw error;
}

const AdminContent: React.FC = () => {
  const qc = useQueryClient();
  const [type, setType] = useState<ContentType>('blogs');
  const [section, setSection] = useState<Section | ''>('');
  const [subcategory, setSubcategory] = useState<string>('');
  const [editing, setEditing] = useState<ContentRow | null>(null);
  const [autoSlug, setAutoSlug] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const { data, isLoading, error } = useQuery({
    queryKey: ['admin-list', type, section, subcategory],
    queryFn: () => fetchList(type, section || undefined, subcategory || undefined)
  });

  const { data: subcats } = useQuery({
    queryKey: ['content-subcategories'],
    queryFn: fetchSubcategories
  });

  const saveMutation = useMutation({
    mutationFn: (payload: ContentRow) => upsertRow(type, payload),
    onSuccess: () => {
      setMessage('Saved');
      setErrorMsg('');
      setEditing(null);
      qc.invalidateQueries({ queryKey: ['admin-list', type] });
    },
    onError: (err: any) => {
      setErrorMsg(err.message || 'Save failed');
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteRow(type, id),
    onSuccess: () => {
      setMessage('Deleted');
      setErrorMsg('');
      qc.invalidateQueries({ queryKey: ['admin-list', type] });
    },
    onError: (err: any) => setErrorMsg(err.message || 'Delete failed')
  });

  const list = useMemo(() => data || [], [data]);
  const subcatOptions = useMemo(() => (subcats || []) as SubcategoryRow[], [subcats]);
  const subcatsForFilter = useMemo(() => {
    if (!section) return subcatOptions;
    return subcatOptions.filter(s => s.section === section);
  }, [subcatOptions, section]);
  const subcatsForForm = useMemo(() => {
    const sec = editing?.section || 'services';
    return subcatOptions.filter(s => s.section === sec);
  }, [subcatOptions, editing?.section]);

  // If the filter section changes and current subcategory is not valid, clear it
  useEffect(() => {
    if (!subcategory) return;
    const stillValid = subcatOptions.some(sc => (!section || sc.section === section) && sc.slug === subcategory);
    if (!stillValid) setSubcategory('');
  }, [section, subcategory, subcatOptions]);

  // If the editing form's section changes, ensure subcategory is valid; otherwise clear it
  useEffect(() => {
    if (!editing) return;
    const current = editing.subcategory || '';
    if (!current) return;
    const validForEdit = subcatOptions.some(sc => sc.section === editing.section && sc.slug === current);
    if (!validForEdit) {
      setEditing(prev => (prev ? { ...prev, subcategory: '' } : prev));
    }
  }, [editing?.section, subcatOptions]);

  // Reset form and filters when content type changes to reduce confusion
  useEffect(() => {
    setEditing(null);
    setMessage('');
    setErrorMsg('');
  }, [type]);

  const startCreate = () => {
    // Default to the currently selected filter section (if any)
    const defaultSection = (section as Section) || 'services';
    setEditing({ ...emptyForm, slug: '', section: defaultSection, subcategory: '' });
    setAutoSlug(true);
  };

  const startEdit = (row: ContentRow) => {
    setEditing({ ...row });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    const payload: ContentRow = {
      ...editing,
      slug: (editing.slug && editing.slug.trim()) ? editing.slug.trim() : slugify(editing.title),
      subcategory: editing.subcategory ? editing.subcategory : null
    } as ContentRow;
    saveMutation.mutate(payload);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container">
          <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Content Admin</h1>
              {!hasSupabaseEnv && (
                <p className="text-sm text-amber-700 bg-amber-100 inline-block px-3 py-1 rounded mt-2">Configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY for writes. Ensure RLS allows your admin user to write.</p>
              )}
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <select value={type} onChange={(e) => setType(e.target.value as ContentType)} className="border rounded px-3 py-2 bg-white">
                <option value="blogs">Blogs</option>
                <option value="insights">Insights</option>
              </select>
              <select value={section} onChange={(e) => setSection(e.target.value as Section | '')} className="border rounded px-3 py-2 bg-white">
                <option value="">All Sections</option>
                {sections.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <select value={subcategory} onChange={(e) => setSubcategory(e.target.value)} className="border rounded px-3 py-2 bg-white">
                <option value="">All Subcategories</option>
                {subcatsForFilter.map(sc => (
                  <option key={sc.id} value={sc.slug}>{sc.section} · {sc.name}</option>
                ))}
              </select>
              <button onClick={startCreate} className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2">New {type.slice(0, -1)}</button>
            </div>
          </div>

          {message && <div className="text-green-700 bg-green-100 rounded px-3 py-2 mb-4">{message}</div>}
          {(errorMsg || error) && <div className="text-red-700 bg-red-100 rounded px-3 py-2 mb-4">{errorMsg || (error as any)?.message}</div>}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              {isLoading ? (
                <div className="text-gray-600">Loading…</div>
              ) : (
                <div className="overflow-x-auto bg-white rounded-lg shadow">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-50 text-left">
                      <tr>
                        <th className="px-3 py-2">Title</th>
                        <th className="px-3 py-2">Section</th>
                        <th className="px-3 py-2">Subcategory</th>
                        <th className="px-3 py-2">Slug</th>
                        <th className="px-3 py-2 w-32">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((row) => (
                        <tr key={row.id} className="border-t">
                          <td className="px-3 py-2">{row.title}</td>
                          <td className="px-3 py-2">{row.section}</td>
                          <td className="px-3 py-2">{(row as any).subcategory || ''}</td>
                          <td className="px-3 py-2 text-gray-500">{row.slug}</td>
                          <td className="px-3 py-2">
                            <div className="flex gap-2">
                              <button onClick={() => startEdit(row)} className="px-2 py-1 rounded bg-blue-600 text-white">Edit</button>
                              {row.id && <button onClick={() => row.id && deleteMutation.mutate(row.id)} className="px-2 py-1 rounded bg-red-600 text-white">Delete</button>}
                            </div>
                          </td>
                        </tr>
                      ))}
                      {list.length === 0 && (
                        <tr><td className="px-3 py-4 text-gray-500" colSpan={5}>No items found.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Editor */}
            {editing ? (
            <div className="bg-white rounded-lg shadow p-4 sticky top-24 h-fit">
              <h2 className="font-semibold mb-3">{editing?.id ? 'Edit' : 'Create'} {type.slice(0, -1)}</h2>
              <form onSubmit={handleSave} className="space-y-3">
                <div>
                  <label className="block text-sm mb-1">Title</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    value={editing?.title || ''}
                    onChange={(e) => setEditing(prev => {
                      if (!prev) return prev;
                      const next = { ...prev, title: e.target.value };
                      if (autoSlug && (!next.slug || next.slug === slugify(prev.title))) {
                        next.slug = slugify(e.target.value);
                      }
                      return next;
                    })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Slug</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    value={editing?.slug || ''}
                    onChange={(e) => setEditing(prev => prev ? { ...prev, slug: e.target.value } : prev)}
                    placeholder="auto from title if empty"
                  />
                  <label className="mt-2 inline-flex items-center gap-2 text-xs text-gray-600">
                    <input type="checkbox" checked={autoSlug} onChange={(e) => setAutoSlug(e.target.checked)} />
                    Auto update slug from title
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm mb-1">Section</label>
                    <select
                      className="w-full border rounded px-3 py-2 bg-white"
                      value={editing?.section || 'services'}
                      onChange={(e) => setEditing(prev => prev ? { ...prev, section: e.target.value as Section } : prev)}
                    >
                      {sections.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Subcategory</label>
                    <select
                      className="w-full border rounded px-3 py-2 bg-white"
                      value={editing?.subcategory || ''}
                      onChange={(e) => setEditing(prev => prev ? { ...prev, subcategory: e.target.value || null } : prev)}
                    >
                      <option value="">None</option>
                      {subcatsForForm.map(sc => (
                        <option key={sc.id} value={sc.slug}>{sc.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1">Cover Image URL</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    value={editing?.cover_image_url || ''}
                    onChange={(e) => setEditing(prev => prev ? { ...prev, cover_image_url: e.target.value } : prev)}
                    placeholder="/path/in/public or https://..."
                  />
                  {editing?.cover_image_url && (
                    <div className="mt-2 rounded overflow-hidden border">
                      <img src={editing.cover_image_url} alt="cover preview" className="w-full h-40 object-cover" />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm mb-1">Excerpt</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    rows={3}
                    value={editing?.excerpt || ''}
                    onChange={(e) => setEditing(prev => prev ? { ...prev, excerpt: e.target.value } : prev)}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Content (HTML or plain text)</label>
                  <textarea
                    className="w-full border rounded px-3 py-2 font-mono"
                    rows={10}
                    value={editing?.content || ''}
                    onChange={(e) => setEditing(prev => prev ? { ...prev, content: e.target.value } : prev)}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 disabled:opacity-50" disabled={saveMutation.isPending || !editing?.title || !editing?.section}>
                    {saveMutation.isPending ? 'Saving…' : 'Save'}
                  </button>
                  <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded px-4 py-2" onClick={() => setEditing(null)}>Cancel</button>
                  {editing && (
                    <a
                      href={`/${type}/${editing.section}/${editing.slug || slugify(editing.title)}`}
                      target="_blank"
                      className="text-blue-700 hover:underline text-sm"
                    >
                      Preview
                    </a>
                  )}
                </div>
              </form>
            </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center text-gray-500 min-h-[200px]">
                <div className="text-center">
                  <p className="mb-3">Select an item to edit, or create a new one.</p>
                  <button onClick={startCreate} className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2">New {type.slice(0, -1)}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminContent;


