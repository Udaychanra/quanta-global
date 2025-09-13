import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  X,
  Search,
  Filter,
  Calendar,
  User,
  Tag
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { supabase, hasSupabaseEnv } from '@/lib/supabaseClient';

type TagRow = { id:number; name:string; slug:string; layer?:number; parent_tag_id?:number|null };

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
  };
  navigation_item: {
    id: number;
    label: string;
  };
  status: 'draft' | 'published' | 'archived';
  published_at: string | null;
  view_count: number;
  is_featured: boolean;
  is_pinned: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
}

type BlogEditFormState = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author_id: string;
  category_id: string;
  navigation_item_id: string;
  status: 'draft' | 'published' | 'archived';
  is_featured: boolean;
  is_pinned: boolean;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  tags: string[];
};

const BlogManagement = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogEditForm, setBlogEditForm] = useState<BlogEditFormState>({
    id: 0,
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author_id: '',
    category_id: '',
    navigation_item_id: '',
    status: 'draft',
    is_featured: false,
    is_pinned: false,
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
    tags: []
  });

  const [authorOptions, setAuthorOptions] = useState<{value:string,label:string}[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<{value:string,label:string}[]>([]);
  const [navItemOptions, setNavItemOptions] = useState<{value:string,label:string}[]>([]);
  const [allTags, setAllTags] = useState<TagRow[]>([]);
  const [tagOptions, setTagOptions] = useState<{value:string,label:string}[]>([]);
  const [tagL1, setTagL1] = useState<string>('');
  const [tagL2, setTagL2] = useState<string>('');
  const [tagL3, setTagL3] = useState<string>('');

  // Cascading navigation selection for Blogs (section 'blogs')
  const [blogSectionId, setBlogSectionId] = useState<number | null>(null);
  const [blogNavCategories, setBlogNavCategories] = useState<{ id:number; label:string; slug:string }[]>([]);
  const [blogNavItems, setBlogNavItems] = useState<{ id:number; label:string; slug:string; category_id:number }[]>([]);
  const [blogNavSubitems, setBlogNavSubitems] = useState<{ id:number; label:string; item_id:number; slug:string }[]>([]);
  const [selectedBlogNavCategoryId, setSelectedBlogNavCategoryId] = useState<string>('');
  const [selectedBlogNavItemId, setSelectedBlogNavItemId] = useState<string>('');
  const [selectedBlogNavSubitemId, setSelectedBlogNavSubitemId] = useState<string>('');

  // Image input state (upload only)
  const [imageFile, setImageFile] = useState<File | null>(null);
  const storageBucket = (import.meta as any)?.env?.VITE_SUPABASE_STORAGE_BUCKET || 'media';

  // Edit cascading state
  const [selectedEditBlogNavCategoryId, setSelectedEditBlogNavCategoryId] = useState<string>('');
  const [editBlogNavItems, setEditBlogNavItems] = useState<{ id:number; label:string; slug:string; category_id:number }[]>([]);
  const [selectedEditBlogNavItemId, setSelectedEditBlogNavItemId] = useState<string>('');
  const [editBlogNavSubitems, setEditBlogNavSubitems] = useState<{ id:number; label:string; item_id:number; slug:string }[]>([]);
  const [selectedEditBlogNavSubitemId, setSelectedEditBlogNavSubitemId] = useState<string>('');
  // Edit image state
  const [editImageSource, setEditImageSource] = useState<'url' | 'upload'>('url');
  const [editImageUrl, setEditImageUrl] = useState<string>('');
  const [editImageFile, setEditImageFile] = useState<File | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string>('');

  const [blogForm, setBlogForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author_id: '',
    category_id: '',
    navigation_item_id: '',
    status: 'draft',
    is_featured: false,
    is_pinned: false,
    tags: [] as string[],
    meta_title: '',
    meta_description: '',
    meta_keywords: ''
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!hasSupabaseEnv) return;
      const [postsRes, authorsRes, catsRes, navsRes, tagsRes] = await Promise.all([
        supabase.from('blog_posts').select('*').order('updated_at', { ascending: false }),
        supabase.from('authors').select('id,name').order('name'),
        supabase.from('content_categories').select('id,name').order('name'),
        supabase.from('navigation_items').select('id,label').order('label'),
        supabase.from('content_tags').select('id,name,slug,layer,parent_tag_id').order('name')
      ]);
      if (postsRes.error) {
        console.warn('Failed to load blog posts:', postsRes.error.message);
        return;
      }
      const authorMap = new Map((authorsRes.data||[]).map((a:any)=>[a.id,a.name]));
      const catMap = new Map((catsRes.data||[]).map((c:any)=>[c.id,c.name]));
      const navMap = new Map((navsRes.data||[]).map((n:any)=>[n.id,n.label]));
      const mapped: BlogPost[] = (postsRes.data || []).map((row: any) => ({
        id: row.id,
        title: row.title,
        slug: row.slug,
        excerpt: row.excerpt,
        content: row.content,
        author: { id: row.author_id, name: authorMap.get(row.author_id) || 'Unknown' },
        category: { id: row.category_id, name: catMap.get(row.category_id) || 'Uncategorized' },
        navigation_item: { id: row.navigation_item_id, label: navMap.get(row.navigation_item_id) || 'General' },
        status: row.status,
        published_at: row.published_at,
        view_count: row.view_count,
        is_featured: row.is_featured,
        is_pinned: row.is_pinned,
        tags: [],
        created_at: row.created_at,
        updated_at: row.updated_at
      }));
      setBlogPosts(mapped);
      setAuthorOptions((authorsRes.data||[]).map((a:any)=>({ value:String(a.id), label:a.name })));
      setCategoryOptions((catsRes.data||[]).map((c:any)=>({ value:String(c.id), label:c.name })));
      setNavItemOptions((navsRes.data||[]).map((n:any)=>({ value:String(n.id), label:n.label })));
      setAllTags((tagsRes.data||[]) as TagRow[]);
      setTagOptions((tagsRes.data||[]).map((t:any)=>({ value:String(t.id), label:t.name })));
    };
    fetchBlogs();
    const fetchDropdowns = async () => {
      if (!hasSupabaseEnv) return;
      const [{ data: authors }, { data: cats }, { data: navs }] = await Promise.all([
        supabase.from('authors').select('id,name').order('name'),
        supabase.from('content_categories').select('id,name').order('name'),
        supabase.from('navigation_items').select('id,label').order('label')
      ]);
      setAuthorOptions((authors||[]).map((a:any)=>({ value:String(a.id), label:a.name })));
      setCategoryOptions((cats||[]).map((c:any)=>({ value:String(c.id), label:c.name })));
      setNavItemOptions((navs||[]).map((n:any)=>({ value:String(n.id), label:n.label })));
    };
    fetchDropdowns();
    const loadBlogNav = async () => {
      if (!hasSupabaseEnv) return;
      const { data: sections } = await supabase.from('navigation_sections').select('id,slug').eq('slug','blogs').limit(1);
      const section = sections && sections[0];
      if (!section) return;
      setBlogSectionId(section.id);
      const { data: cats } = await supabase.from('navigation_categories').select('id,label,slug').eq('section_id', section.id).order('display_order');
      setBlogNavCategories((cats||[]).map((c:any)=>({ id:c.id, label:c.label, slug:c.slug })));
    };
    loadBlogNav();
  }, []);

  // Load items when blog category changes
  useEffect(() => {
    const loadItems = async () => {
      if (!hasSupabaseEnv || !selectedBlogNavCategoryId) { setBlogNavItems([]); setSelectedBlogNavItemId(''); return; }
      const { data: items } = await supabase.from('navigation_items').select('id,label,slug,category_id').eq('category_id', Number(selectedBlogNavCategoryId)).order('display_order');
      setBlogNavItems((items||[]).map((i:any)=>({ id:i.id, label:i.label, slug:i.slug, category_id:i.category_id })));
      setSelectedBlogNavItemId('');
      setBlogNavSubitems([]);
      setSelectedBlogNavSubitemId('');
    };
    loadItems();
  }, [selectedBlogNavCategoryId]);

  // Load subitems when blog item changes
  useEffect(() => {
    const loadSubitems = async () => {
      if (!hasSupabaseEnv || !selectedBlogNavItemId) { setBlogNavSubitems([]); setSelectedBlogNavSubitemId(''); return; }
      const { data: subitems } = await supabase.from('navigation_subitems').select('id,label,item_id,slug').eq('item_id', Number(selectedBlogNavItemId)).order('display_order');
      setBlogNavSubitems((subitems||[]).map((s:any)=>({ id:s.id, label:s.label, item_id:s.item_id, slug:s.slug })));
      setSelectedBlogNavSubitemId('');
    };
    loadSubitems();
  }, [selectedBlogNavItemId]);

  // Edit loaders
  useEffect(() => {
    const loadEditItems = async () => {
      if (!hasSupabaseEnv || !selectedEditBlogNavCategoryId) { setEditBlogNavItems([]); setSelectedEditBlogNavItemId(''); return; }
      const { data: items } = await supabase.from('navigation_items').select('id,label,slug,category_id').eq('category_id', Number(selectedEditBlogNavCategoryId)).order('display_order');
      setEditBlogNavItems((items||[]).map((i:any)=>({ id:i.id, label:i.label, slug:i.slug, category_id:i.category_id })));
      // keep existing selected item if still valid
    };
    loadEditItems();
  }, [selectedEditBlogNavCategoryId]);

  useEffect(() => {
    const loadEditSubitems = async () => {
      if (!hasSupabaseEnv || !selectedEditBlogNavItemId) { setEditBlogNavSubitems([]); setSelectedEditBlogNavSubitemId(''); return; }
      const { data: subitems } = await supabase.from('navigation_subitems').select('id,label,item_id,slug').eq('item_id', Number(selectedEditBlogNavItemId)).order('display_order');
      setEditBlogNavSubitems((subitems||[]).map((s:any)=>({ id:s.id, label:s.label, item_id:s.item_id, slug:s.slug })));
    };
    loadEditSubitems();
  }, [selectedEditBlogNavItemId]);

  const refreshBlogs = async () => {
    if (!hasSupabaseEnv) return;
    const [postsRes, authorsRes, catsRes, navsRes] = await Promise.all([
      supabase.from('blog_posts').select('*').order('updated_at', { ascending: false }),
      supabase.from('authors').select('id,name'),
      supabase.from('content_categories').select('id,name'),
      supabase.from('navigation_items').select('id,label')
    ]);
    const authorMap = new Map((authorsRes.data||[]).map((a:any)=>[a.id,a.name]));
    const catMap = new Map((catsRes.data||[]).map((c:any)=>[c.id,c.name]));
    const navMap = new Map((navsRes.data||[]).map((n:any)=>[n.id,n.label]));
    const mapped: BlogPost[] = (postsRes.data || []).map((row: any) => ({
      id: row.id,
      title: row.title,
      slug: row.slug,
      excerpt: row.excerpt,
      content: row.content,
      author: { id: row.author_id, name: authorMap.get(row.author_id) || 'Unknown' },
      category: { id: row.category_id, name: catMap.get(row.category_id) || 'Uncategorized' },
      navigation_item: { id: row.navigation_item_id, label: navMap.get(row.navigation_item_id) || 'General' },
      status: row.status,
      published_at: row.published_at,
      view_count: row.view_count,
      is_featured: row.is_featured,
      is_pinned: row.is_pinned,
      tags: [],
      created_at: row.created_at,
      updated_at: row.updated_at
    }));
    setBlogPosts(mapped);
  };

  const filteredBlogPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateBlog = async () => {
    if (!hasSupabaseEnv) {
      setIsCreateDialogOpen(false);
      return;
    }
    // Resolve image URL
    let coverImageUrl: string | null = null;
    let uploadedPath: string | null = null;
    let uploadedMime: string | null = null;
    let uploadedSize: number | null = null;
    let originalFilename: string | null = null;
    try {
      if (imageFile) {
        const ext = imageFile.name.split('.').pop() || 'jpg';
        const path = `uploads/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error: upErr } = await supabase.storage.from(storageBucket).upload(path, imageFile, { upsert: true, contentType: imageFile.type });
        if (!upErr) {
          const { data: pub } = supabase.storage.from(storageBucket).getPublicUrl(path);
          coverImageUrl = pub?.publicUrl || null;
          uploadedPath = path;
          uploadedMime = imageFile.type || null;
          uploadedSize = imageFile.size || null;
          originalFilename = imageFile.name;
        }
      }
    } catch (e) {
      console.warn('Image upload/URL handling failed:', e);
    }
    // Choose a default author to satisfy NOT NULL. Take first author if available.
    const defaultAuthorId = authorOptions[0]?.value ? Number(authorOptions[0].value) : null;
    // Determine navigation item (third level) from selection
    const chosenNavItemId = selectedBlogNavItemId ? Number(selectedBlogNavItemId) : null;
    // If we have an image, create a media_files row and capture its id
    let featuredImageId: number | null = null;
    try {
      if (coverImageUrl) {
        const { data: mediaRow, error: mediaErr } = await supabase.from('media_files').insert([
          {
            filename: originalFilename || 'image.jpg',
            original_filename: originalFilename || 'image.jpg',
            file_path: uploadedPath || coverImageUrl,
            file_size: uploadedSize || 0,
            mime_type: uploadedMime || 'image/jpeg',
            alt_text: blogForm.title,
            caption: null,
            uploaded_by: defaultAuthorId
          }
        ]).select('id').single();
        if (!mediaErr && mediaRow) featuredImageId = mediaRow.id as number;
      }
    } catch (e) {
      console.warn('Failed to create media_files record:', e);
    }

    const { data: created, error } = await supabase.from('blog_posts').insert([
      {
        title: blogForm.title,
        slug: blogForm.slug,
        excerpt: blogForm.excerpt,
        content: blogForm.content,
        author_id: defaultAuthorId,
        category_id: null,
        navigation_item_id: chosenNavItemId,
        featured_image_id: featuredImageId,
        status: 'published',
        published_at: new Date().toISOString(),
        is_featured: false,
        is_pinned: false,
        meta_title: null,
        meta_description: null,
        meta_keywords: null
      }
    ]).select('id').single();
    if (error) console.warn('Create blog failed:', error.message);
    if (created) {
      // Attach tags for category, item, and optional subitem
      const cat = blogNavCategories.find(c => String(c.id) === selectedBlogNavCategoryId);
      const item = blogNavItems.find(i => String(i.id) === selectedBlogNavItemId);
      const slugs: string[] = [];
      if (cat?.slug) slugs.push(cat.slug);
      if (item?.slug) slugs.push(item.slug);
      if (selectedBlogNavSubitemId) {
        const sub = blogNavSubitems.find(s => String(s.id) === selectedBlogNavSubitemId);
        if (sub?.slug) slugs.push(sub.slug);
      }
      const { data: slugTags } = slugs.length > 0
        ? await supabase.from('content_tags').select('id,slug').in('slug', slugs)
        : { data: [] as any } as any;
      const tagIds = (slugTags||[]).map((t:any)=>t.id as number);
      if (tagIds.length > 0) {
        const tagRows = tagIds.map((tid) => ({ blog_post_id: created.id, tag_id: Number(tid) }));
        const { error: tagErr } = await supabase.from('blog_post_tags').insert(tagRows);
        if (tagErr) console.warn('Tag mapping failed:', tagErr.message);
      }
    }
    setIsCreateDialogOpen(false);
    setBlogForm({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      author_id: '',
      category_id: '',
      navigation_item_id: '',
      status: 'draft',
      is_featured: false,
      is_pinned: false,
      tags: [],
      meta_title: '',
      meta_description: '',
      meta_keywords: ''
    });
    
    setImageFile(null);
    // Refresh list (published view only shows published)
    await refreshBlogs();
  };

  const openEdit = (post: BlogPost) => {
    setSelectedPost(post);
    setBlogEditForm({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || '',
      content: post.content || '',
      author_id: String(post.author.id || ''),
      category_id: String(post.category.id || ''),
      navigation_item_id: String(post.navigation_item.id || ''),
      status: post.status,
      is_featured: post.is_featured,
      is_pinned: post.is_pinned,
      meta_title: '',
      meta_description: '',
      meta_keywords: '',
      tags: []
    });
    setIsEditDialogOpen(true);
    setEditImageSource('url');
    setEditImageUrl('');
    setEditImageFile(null);
    // Prefill edit cascading from navigation_item_id
    (async () => {
      if (!hasSupabaseEnv || !post.navigation_item.id) return;
      const { data: itemRow } = await supabase.from('navigation_items').select('id,category_id,slug').eq('id', post.navigation_item.id).maybeSingle();
      if (itemRow) {
        setSelectedEditBlogNavCategoryId(String(itemRow.category_id));
        setSelectedEditBlogNavItemId(String(itemRow.id));
        // attempt to infer subitem: not tracked on post; leave empty
      }
    })();
    // Prefill edit image from featured_image_id
    (async () => {
      try {
        if (!hasSupabaseEnv) return;
        const { data: row } = await supabase.from('blog_posts').select('featured_image_id').eq('id', post.id).maybeSingle();
        const fid = (row as any)?.featured_image_id as number | undefined;
        if (fid) {
          const { data: media } = await supabase.from('media_files').select('file_path').eq('id', fid).maybeSingle();
          const fp = media?.file_path as string | undefined;
          if (fp) {
            if (fp.startsWith('http')) setEditImageUrl(fp);
            else {
              const { data: pub } = supabase.storage.from(storageBucket).getPublicUrl(fp);
              setEditImageUrl(pub?.publicUrl || '');
            }
          }
        }
      } catch (e) {
        console.warn('Failed to preload edit image (blog):', e);
      }
    })();
  };

  const openPreview = (post: BlogPost) => {
    setSelectedPost(post);
    setIsPreviewDialogOpen(true);
    (async () => {
      try {
        setPreviewImageUrl('');
        if (!hasSupabaseEnv) return;
        const { data: row } = await supabase.from('blog_posts').select('featured_image_id').eq('id', post.id).maybeSingle();
        const fid = (row as any)?.featured_image_id as number | undefined;
        if (fid) {
          const { data: media } = await supabase.from('media_files').select('file_path').eq('id', fid).maybeSingle();
          const fp = media?.file_path as string | undefined;
          if (fp) {
            if (fp.startsWith('http')) setPreviewImageUrl(fp);
            else {
              const { data: pub } = supabase.storage.from(storageBucket).getPublicUrl(fp);
              setPreviewImageUrl(pub?.publicUrl || '');
            }
          }
        }
      } catch (e) {
        console.warn('Failed to resolve blog preview image:', e);
      }
    })();
  };

  const handleUpdateBlog = async () => {
    if (!hasSupabaseEnv || !blogEditForm.id) {
      setIsEditDialogOpen(false);
      return;
    }
    const payload:any = {
      title: blogEditForm.title,
      slug: blogEditForm.slug,
      excerpt: blogEditForm.excerpt,
      content: blogEditForm.content,
      author_id: Number(blogEditForm.author_id) || null,
      category_id: Number(blogEditForm.category_id) || null,
      navigation_item_id: selectedEditBlogNavItemId ? Number(selectedEditBlogNavItemId) : (Number(blogEditForm.navigation_item_id) || null),
      status: blogEditForm.status,
      is_featured: blogEditForm.is_featured,
      is_pinned: blogEditForm.is_pinned,
      meta_title: blogEditForm.meta_title,
      meta_description: blogEditForm.meta_description,
      meta_keywords: blogEditForm.meta_keywords
    };
    if (blogEditForm.status === 'published') {
      payload.published_at = new Date().toISOString();
    } else if (blogEditForm.status === 'draft') {
      payload.published_at = null;
    }
    // If image was changed in edit, upload/record media and set featured_image_id
    try {
      let newFeaturedId: number | null = null;
      if (editImageSource === 'url' && editImageUrl) {
        const filename = editImageUrl.split('/').pop() || 'image.jpg';
        const { data: mediaRow } = await supabase.from('media_files').insert([
          { filename, original_filename: filename, file_path: editImageUrl, file_size: 0, mime_type: 'image/jpeg', alt_text: blogEditForm.title, caption: null, uploaded_by: Number(blogEditForm.author_id) || null }
        ]).select('id').single();
        if (mediaRow) newFeaturedId = mediaRow.id as number;
      } else if (editImageSource === 'upload' && editImageFile) {
        const ext = editImageFile.name.split('.').pop() || 'jpg';
        const path = `uploads/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error: upErr } = await supabase.storage.from(storageBucket).upload(path, editImageFile, { upsert: true, contentType: editImageFile.type });
        if (!upErr) {
          const { data: pub } = supabase.storage.from(storageBucket).getPublicUrl(path);
          const { data: mediaRow } = await supabase.from('media_files').insert([
            { filename: editImageFile.name, original_filename: editImageFile.name, file_path: path, file_size: editImageFile.size || 0, mime_type: editImageFile.type || 'image/jpeg', alt_text: blogEditForm.title, caption: null, uploaded_by: Number(blogEditForm.author_id) || null }
          ]).select('id').single();
          if (mediaRow) newFeaturedId = mediaRow.id as number;
        }
      }
      if (newFeaturedId) payload.featured_image_id = newFeaturedId;
    } catch (e) { console.warn('Edit image handling failed:', e); }

    const { error } = await supabase.from('blog_posts').update(payload).eq('id', blogEditForm.id);
    if (error) console.warn('Update blog failed:', error.message);
    // Replace tags mapping with category/item/subitem slugs
    const { error: delErr } = await supabase.from('blog_post_tags').delete().eq('blog_post_id', blogEditForm.id);
    if (delErr) console.warn('Delete tags failed:', delErr.message);
    const editCat = blogNavCategories.find(c => String(c.id) === selectedEditBlogNavCategoryId);
    const editItem = editBlogNavItems.find(i => String(i.id) === selectedEditBlogNavItemId);
    const editSub = editBlogNavSubitems.find(s => String(s.id) === selectedEditBlogNavSubitemId);
    const slugs: string[] = [];
    if (editCat?.slug) slugs.push(editCat.slug);
    if (editItem?.slug) slugs.push(editItem.slug);
    if (editSub?.slug) slugs.push(editSub.slug);
    if (slugs.length > 0) {
      const { data: tagRows } = await supabase.from('content_tags').select('id,slug').in('slug', slugs);
      const rows = (tagRows||[]).map((t:any)=>({ blog_post_id: blogEditForm.id, tag_id: Number(t.id) }));
      if (rows.length > 0) {
        const { error: insErr } = await supabase.from('blog_post_tags').insert(rows);
        if (insErr) console.warn('Insert tags failed:', insErr.message);
      }
    }
    setIsEditDialogOpen(false);
    await refreshBlogs();
  };

  const unpublishPost = async (id: number) => {
    if (!hasSupabaseEnv) return;
    const { error } = await supabase
      .from('blog_posts')
      .update({ status: 'draft', published_at: null })
      .eq('id', id);
    if (error) console.warn('Unpublish failed:', error.message);
    await refreshBlogs();
  };

  const deletePost = async (id: number) => {
    if (!hasSupabaseEnv) return;
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);
    if (error) console.warn('Delete failed:', error.message);
    await refreshBlogs();
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'published':
        return 'default';
      case 'draft':
        return 'secondary';
      case 'archived':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
            <p className="text-gray-600 mt-2">Create and manage blog content</p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Blog Post
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Blog Post</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {/* Preview */}
                {imageFile ? (
                  <div>
                    <Label>Preview</Label>
                    <div className="mt-2 w-full h-40 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                      {imageFile ? <img src={URL.createObjectURL(imageFile)} alt="preview" className="h-full object-contain" /> : null}
                    </div>
                  </div>
                ) : null}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={blogForm.title}
                      onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={blogForm.slug}
                      onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={blogForm.excerpt}
                    onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={blogForm.content}
                    onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                    rows={10}
                  />
                </div>

                {/* Cover Image (Upload only) */}
                <div>
                  <Label htmlFor="image_file">Upload Image</Label>
                  <Input id="image_file" type="file" accept="image/*" onChange={(e)=> setImageFile(e.target.files?.[0] || null)} />
                </div>

                {/* Navigation selection (Blogs) */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label>Category</Label>
                    <Select value={selectedBlogNavCategoryId} onValueChange={(v)=>{ setSelectedBlogNavCategoryId(v); }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category (e.g., Offerings)" />
                      </SelectTrigger>
                      <SelectContent>
                        {blogNavCategories.map(c => (
                          <SelectItem key={c.id} value={String(c.id)}>{c.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Item</Label>
                    <Select value={selectedBlogNavItemId} onValueChange={(v)=>{ setSelectedBlogNavItemId(v); }} disabled={!selectedBlogNavCategoryId}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select item (e.g., SAP)" />
                      </SelectTrigger>
                      <SelectContent>
                        {blogNavItems.map(i => (
                          <SelectItem key={i.id} value={String(i.id)}>{i.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Subitem</Label>
                    <Select value={selectedBlogNavSubitemId} onValueChange={(v)=>{ setSelectedBlogNavSubitemId(v); }} disabled={!selectedBlogNavItemId || blogNavSubitems.length===0}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subitem (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        {blogNavSubitems.map(s => (
                          <SelectItem key={s.id} value={String(s.id)}>{s.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Simplified form: remove author/category/status/meta fields */}
                {/* Tags are derived automatically from your selection above (category, item, subitem). */}
                <div className="text-xs text-gray-500">Tags are attached automatically based on your selection above.</div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateBlog}>Create Blog Post</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Blog Posts List */}
      <div className="space-y-4">
        {filteredBlogPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                    {post.is_featured && (
                      <Badge variant="default" className="bg-yellow-500">Featured</Badge>
                    )}
                    {post.is_pinned && (
                      <Badge variant="default" className="bg-blue-500">Pinned</Badge>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-3">{post.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.created_at)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{post.view_count} views</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{post.category.name}</Badge>
                    <Badge variant="outline">{post.navigation_item.label}</Badge>
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Badge variant={getStatusBadgeVariant(post.status)}>
                    {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                  </Badge>
                  {post.status === 'published' ? (
                    <Button variant="outline" size="sm" onClick={() => unpublishPost(post.id)}>
                      Unpublish
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" onClick={() => openEdit(post)}>
                      Edit / Publish
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => openPreview(post)}>
                    Preview
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => deletePost(post.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Blog Post</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Image edit/preview */}
            {editImageUrl || editImageFile ? (
              <div>
                <Label>Preview</Label>
                <div className="mt-2 w-full h-40 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                  {editImageFile ? (
                    <img src={URL.createObjectURL(editImageFile)} alt="preview" className="h-full object-contain" />
                  ) : (
                    editImageUrl ? <img src={editImageUrl} alt="preview" className="h-full object-contain" /> : null
                  )}
                </div>
              </div>
            ) : null}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" value={blogEditForm.title} onChange={(e) => setBlogEditForm({ ...blogEditForm, title: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input id="slug" value={blogEditForm.slug} onChange={(e) => setBlogEditForm({ ...blogEditForm, slug: e.target.value })} />
              </div>
            </div>
            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea id="excerpt" value={blogEditForm.excerpt} onChange={(e) => setBlogEditForm({ ...blogEditForm, excerpt: e.target.value })} rows={3} />
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" value={blogEditForm.content} onChange={(e) => setBlogEditForm({ ...blogEditForm, content: e.target.value })} rows={10} />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>Status</Label>
                <Select value={blogEditForm.status} onValueChange={(value) => setBlogEditForm({ ...blogEditForm, status: value as any })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Category</Label>
                <Select value={selectedEditBlogNavCategoryId} onValueChange={(v)=>{ setSelectedEditBlogNavCategoryId(v); setSelectedEditBlogNavItemId(''); setSelectedEditBlogNavSubitemId(''); }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {blogNavCategories.map(c => (<SelectItem key={c.id} value={String(c.id)}>{c.label}</SelectItem>))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Item</Label>
                <Select value={selectedEditBlogNavItemId} onValueChange={(v)=>{ setSelectedEditBlogNavItemId(v); setSelectedEditBlogNavSubitemId(''); }} disabled={!selectedEditBlogNavCategoryId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select item" />
                  </SelectTrigger>
                  <SelectContent>
                    {editBlogNavItems.map(i => (<SelectItem key={i.id} value={String(i.id)}>{i.label}</SelectItem>))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Subitem</Label>
                <Select value={selectedEditBlogNavSubitemId} onValueChange={(v)=> setSelectedEditBlogNavSubitemId(v)} disabled={!selectedEditBlogNavItemId || editBlogNavSubitems.length===0}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subitem (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {editBlogNavSubitems.map(s => (<SelectItem key={s.id} value={String(s.id)}>{s.label}</SelectItem>))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="edit_image_file">Upload Image</Label>
              <Input id="edit_image_file" type="file" accept="image/*" onChange={(e)=> setEditImageFile(e.target.files?.[0] || null)} />
              {editImageUrl ? (
                <p className="text-xs text-gray-500 mt-1">Current image will be kept unless you upload a new one.</p>
              ) : null}
            </div>
            <div className="text-xs text-gray-500">Tags will be regenerated from your selection above.</div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleUpdateBlog}>Save</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={isPreviewDialogOpen} onOpenChange={setIsPreviewDialogOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Preview Blog Post</DialogTitle>
          </DialogHeader>
          {selectedPost && (
            <div className="space-y-4">
              {previewImageUrl ? (
                <div className="w-full h-48 bg-gray-100 rounded overflow-hidden">
                  <img src={previewImageUrl} alt={selectedPost.title} className="w-full h-full object-cover" />
                </div>
              ) : null}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedPost.title}</h2>
                <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600">
                  <span>By {selectedPost.author.name}</span>
                  <span>•</span>
                  <span>{selectedPost.published_at ? new Date(selectedPost.published_at).toLocaleString() : 'Unpublished'}</span>
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <Badge variant="outline">{selectedPost.category.name}</Badge>
                  <Badge variant="outline">{selectedPost.navigation_item.label}</Badge>
                  <Badge variant={getStatusBadgeVariant(selectedPost.status)}>
                    {selectedPost.status.charAt(0).toUpperCase() + selectedPost.status.slice(1)}
                  </Badge>
                </div>
              </div>
              {selectedPost.excerpt && (
                <p className="text-gray-700 italic">{selectedPost.excerpt}</p>
              )}
              <div className="prose max-w-none whitespace-pre-wrap">
                {selectedPost.content}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {filteredBlogPosts.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500">No blog posts found matching your criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BlogManagement;
