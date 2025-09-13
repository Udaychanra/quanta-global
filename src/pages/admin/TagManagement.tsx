import React, { useEffect, useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, ChevronDown, ChevronRight } from 'lucide-react';
import { supabase, hasSupabaseEnv } from '@/lib/supabaseClient';

type TagRow = {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  layer: number;
  parent_tag_id?: number | null;
};

const TagManagement = () => {
  const [tags, setTags] = useState<TagRow[]>([]);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editTag, setEditTag] = useState<TagRow | null>(null);

  const [form, setForm] = useState({
    name: '',
    slug: '',
    description: '',
    layer: 1,
    parent_tag_id: '' as string
  });

  const layer1 = useMemo(() => tags.filter(t => t.layer === 1), [tags]);
  const layer2 = useMemo(() => tags.filter(t => t.layer === 2), [tags]);
  const layer3 = useMemo(() => tags.filter(t => t.layer === 3), [tags]);

  const childrenOf = (parentId: number) => tags.filter(t => t.parent_tag_id === parentId);

  useEffect(() => {
    const load = async () => {
      if (!hasSupabaseEnv) return;
      const { data, error } = await supabase
        .from('content_tags')
        .select('id,name,slug,description,layer,parent_tag_id')
        .order('layer')
        .order('name');
      if (error) {
        console.warn('Failed to load tags:', error.message);
        return;
      }
      setTags(data || []);
    };
    load();
  }, []);

  const refresh = async () => {
    if (!hasSupabaseEnv) return;
    const { data } = await supabase
      .from('content_tags')
      .select('id,name,slug,description,layer,parent_tag_id')
      .order('layer')
      .order('name');
    setTags(data || []);
  };

  const handleCreate = async () => {
    if (!hasSupabaseEnv) {
      setIsCreateOpen(false);
      return;
    }
    const payload: any = {
      name: form.name,
      slug: form.slug,
      description: form.description || null,
      layer: form.layer,
      parent_tag_id: form.layer === 1 ? null : Number(form.parent_tag_id) || null
    };
    const { error } = await supabase.from('content_tags').insert([payload]);
    if (error) console.warn('Create tag failed:', error.message);
    setIsCreateOpen(false);
    setForm({ name: '', slug: '', description: '', layer: 1, parent_tag_id: '' });
    await refresh();
  };

  const openEdit = (tag: TagRow) => {
    setEditTag(tag);
    setForm({
      name: tag.name,
      slug: tag.slug,
      description: tag.description || '',
      layer: tag.layer,
      parent_tag_id: tag.parent_tag_id ? String(tag.parent_tag_id) : ''
    });
    setIsEditOpen(true);
  };

  const handleUpdate = async () => {
    if (!hasSupabaseEnv || !editTag) {
      setIsEditOpen(false);
      return;
    }
    const payload: any = {
      name: form.name,
      slug: form.slug,
      description: form.description || null,
      layer: form.layer,
      parent_tag_id: form.layer === 1 ? null : Number(form.parent_tag_id) || null
    };
    const { error } = await supabase.from('content_tags').update(payload).eq('id', editTag.id);
    if (error) console.warn('Update tag failed:', error.message);
    setIsEditOpen(false);
    setEditTag(null);
    await refresh();
  };

  const handleDelete = async (tagId: number) => {
    if (!hasSupabaseEnv) return;
    // Delete children first (simple cascade emulation)
    const grandChildren = tags.filter(t => t.parent_tag_id === tagId).map(t => t.id);
    if (grandChildren.length) {
      await supabase.from('content_tags').delete().in('id', grandChildren);
    }
    const { error } = await supabase.from('content_tags').delete().eq('id', tagId);
    if (error) console.warn('Delete tag failed:', error.message);
    await refresh();
  };

  const TagNode: React.FC<{ tag: TagRow }> = ({ tag }) => {
    const child = childrenOf(tag.id);
    const isExpanded = expanded[tag.id] || false;
    return (
      <div className="pl-4 py-2 border-l">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {child.length > 0 && (
              <Button variant="ghost" size="sm" onClick={() => setExpanded({ ...expanded, [tag.id]: !isExpanded })}>
                {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </Button>
            )}
            <span className="text-sm font-medium">{tag.name}</span>
            <Badge variant="secondary">{tag.slug}</Badge>
            <Badge>{`Layer ${tag.layer}`}</Badge>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => openEdit(tag)}>
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleDelete(tag.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {isExpanded && child.length > 0 && (
          <div className="ml-4">
            {child.map(c => (
              <TagNode key={c.id} tag={c} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderForm = (isEdit = false) => (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right">Name</Label>
        <Input value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right">Slug</Label>
        <Input value={form.slug} onChange={(e)=>setForm({ ...form, slug: e.target.value })} className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right">Description</Label>
        <Input value={form.description} onChange={(e)=>setForm({ ...form, description: e.target.value })} className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right">Layer</Label>
        <Select value={String(form.layer)} onValueChange={(v)=>setForm({ ...form, layer: parseInt(v), parent_tag_id: '' })}>
          <SelectTrigger className="col-span-3">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Layer 1 (Offerings/Enablers/…)</SelectItem>
            <SelectItem value="2">Layer 2 (Finance/AI/…)</SelectItem>
            <SelectItem value="3">Layer 3 (close-automation/…)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {form.layer > 1 && (
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right">Parent</Label>
          <Select value={form.parent_tag_id} onValueChange={(v)=>setForm({ ...form, parent_tag_id: v })}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder={form.layer === 2 ? 'Select a layer 1 tag' : 'Select a layer 2 tag'} />
            </SelectTrigger>
            <SelectContent>
              {(form.layer === 2 ? layer1 : layer2).map(p => (
                <SelectItem key={p.id} value={String(p.id)}>{p.name} ({p.slug})</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tag Management</h1>
          <p className="text-gray-600 mt-2">Manage layered tags (Layer 1 → Layer 2 → Layer 3) for routing and navigation.</p>
        </div>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Tag
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[520px]">
            <DialogHeader>
              <DialogTitle>Create Tag</DialogTitle>
            </DialogHeader>
            {renderForm(false)}
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={()=>setIsCreateOpen(false)}>Cancel</Button>
              <Button onClick={handleCreate}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tag Hierarchy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {layer1.map(t => (
              <div key={t.id} className="py-2">
                <TagNode tag={t} />
              </div>
            ))}
            {layer1.length === 0 && (
              <p className="text-sm text-gray-600">No tags found. Use "Add Tag" to create layer 1 tags first.</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="sm:max-w-[520px]">
          <DialogHeader>
            <DialogTitle>Edit Tag</DialogTitle>
          </DialogHeader>
          {renderForm(true)}
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={()=>setIsEditOpen(false)}>Cancel</Button>
            <Button onClick={handleUpdate}>Save</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TagManagement;


