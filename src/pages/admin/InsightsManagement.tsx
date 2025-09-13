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
  Search,
  Filter,
  Calendar,
  User,
  Tag,
  Video,
  Headphones,
  FileText,
  TrendingUp,
  Star,
  Clock
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { supabase, hasSupabaseEnv } from '@/lib/supabaseClient';

type TagRow = { id:number; name:string; slug:string; layer?:number; parent_tag_id?:number|null };

interface InsightsContent {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  content_type: 'article' | 'video' | 'podcast' | 'survey' | 'explainer' | 'case_study' | 'quarterly' | 'live_event';
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
  is_trending: boolean;
  external_url?: string;
  video_url?: string;
  podcast_url?: string;
  duration_minutes?: number;
  tags: string[];
  created_at: string;
  updated_at: string;
}

type InsightsEditFormState = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  content_type: 'article' | 'video' | 'podcast' | 'survey' | 'explainer' | 'case_study' | 'quarterly' | 'live_event';
  author_id: string;
  category_id: string;
  navigation_item_id: string;
  status: 'draft' | 'published' | 'archived';
  is_featured: boolean;
  is_trending: boolean;
  external_url: string;
  video_url: string;
  podcast_url: string;
  duration_minutes: number;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  tags: string[];
};

const InsightsManagement = () => {
  const [insightsContent, setInsightsContent] = useState<InsightsContent[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [contentTypeFilter, setContentTypeFilter] = useState<string>('all');
  const [selectedContent, setSelectedContent] = useState<InsightsContent | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  // Edit image state (upload only, but preload existing URL for preview)
  const [editImageUrl, setEditImageUrl] = useState<string>('');
  const [editImageFile, setEditImageFile] = useState<File | null>(null);
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false);
  const [previewImageUrl, setPreviewImageUrl] = useState<string>('');
  const [insightsEditForm, setInsightsEditForm] = useState<InsightsEditFormState>({
    id: 0,
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    content_type: 'article',
    author_id: '',
    category_id: '',
    navigation_item_id: '',
    status: 'draft',
    is_featured: false,
    is_trending: false,
    external_url: '',
    video_url: '',
    podcast_url: '',
    duration_minutes: 0,
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

  // Cascading navigation selection for Insights (section 'insights')
  const [insSectionId, setInsSectionId] = useState<number | null>(null);
  const [insNavCategories, setInsNavCategories] = useState<{ id:number; label:string; slug:string }[]>([]);
  const [insNavItems, setInsNavItems] = useState<{ id:number; label:string; slug:string; category_id:number }[]>([]);
  const [insNavSubitems, setInsNavSubitems] = useState<{ id:number; label:string; item_id:number; slug:string }[]>([]);
  const [selectedInsNavCategoryId, setSelectedInsNavCategoryId] = useState<string>('');
  const [selectedInsNavItemId, setSelectedInsNavItemId] = useState<string>('');
  const [selectedInsNavSubitemId, setSelectedInsNavSubitemId] = useState<string>('');
  // Image input state (upload only)
  const [imageFile, setImageFile] = useState<File | null>(null);
  const storageBucket = (import.meta as any)?.env?.VITE_SUPABASE_STORAGE_BUCKET || 'media';

  const [insightsForm, setInsightsForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    content_type: 'article' as const,
    author_id: '',
    category_id: '',
    navigation_item_id: '',
    status: 'draft',
    is_featured: false,
    is_trending: false,
    external_url: '',
    video_url: '',
    podcast_url: '',
    duration_minutes: 0,
    tags: [] as string[],
    meta_title: '',
    meta_description: '',
    meta_keywords: ''
  });

  useEffect(() => {
    const fetchInsights = async () => {
      if (!hasSupabaseEnv) return;
      const [insRes, authorsRes, catsRes, navsRes, tagsRes] = await Promise.all([
        supabase.from('insights_content').select('*').order('updated_at', { ascending: false }),
        supabase.from('authors').select('id,name'),
        supabase.from('content_categories').select('id,name'),
        supabase.from('navigation_items').select('id,label'),
        supabase.from('content_tags').select('id,name,slug,layer,parent_tag_id').order('name')
      ]);
      if (insRes.error) {
        console.warn('Failed to load insights:', insRes.error.message);
        return;
      }
      const authorMap = new Map((authorsRes.data||[]).map((a:any)=>[a.id,a.name]));
      const catMap = new Map((catsRes.data||[]).map((c:any)=>[c.id,c.name]));
      const navMap = new Map((navsRes.data||[]).map((n:any)=>[n.id,n.label]));
      const mapped: InsightsContent[] = (insRes.data || []).map((row: any) => ({
        id: row.id,
        title: row.title,
        slug: row.slug,
        excerpt: row.excerpt,
        content: row.content,
        content_type: row.content_type,
        author: { id: row.author_id, name: authorMap.get(row.author_id) || 'Unknown' },
        category: { id: row.category_id, name: catMap.get(row.category_id) || 'Uncategorized' },
        navigation_item: { id: row.navigation_item_id, label: navMap.get(row.navigation_item_id) || 'General' },
        status: row.status,
        published_at: row.published_at,
        view_count: row.view_count,
        is_featured: row.is_featured,
        is_trending: row.is_trending,
        external_url: row.external_url || undefined,
        video_url: row.video_url || undefined,
        podcast_url: row.podcast_url || undefined,
        duration_minutes: row.duration_minutes || undefined,
        tags: [],
        created_at: row.created_at,
        updated_at: row.updated_at
      }));
      setInsightsContent(mapped);
      setAuthorOptions((authorsRes.data||[]).map((a:any)=>({ value:String(a.id), label:a.name })));
      setCategoryOptions((catsRes.data||[]).map((c:any)=>({ value:String(c.id), label:c.name })));
      setNavItemOptions((navsRes.data||[]).map((n:any)=>({ value:String(n.id), label:n.label })));
      setAllTags((tagsRes.data||[]) as TagRow[]);
      setTagOptions((tagsRes.data||[]).map((t:any)=>({ value:String(t.id), label:t.name })));
    };
    fetchInsights();
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
    const loadInsNav = async () => {
      if (!hasSupabaseEnv) return;
      const { data: sections } = await supabase.from('navigation_sections').select('id,slug').eq('slug','insights').limit(1);
      const section = sections && sections[0];
      if (!section) return;
      setInsSectionId(section.id);
      const { data: cats } = await supabase.from('navigation_categories').select('id,label,slug').eq('section_id', section.id).order('display_order');
      setInsNavCategories((cats||[]).map((c:any)=>({ id:c.id, label:c.label, slug:c.slug })));
    };
    loadInsNav();
  }, []);

  // Load items when insights category changes
  useEffect(() => {
    const loadItems = async () => {
      if (!hasSupabaseEnv || !selectedInsNavCategoryId) { setInsNavItems([]); setSelectedInsNavItemId(''); return; }
      const { data: items } = await supabase.from('navigation_items').select('id,label,slug,category_id').eq('category_id', Number(selectedInsNavCategoryId)).order('display_order');
      setInsNavItems((items||[]).map((i:any)=>({ id:i.id, label:i.label, slug:i.slug, category_id:i.category_id })));
      setSelectedInsNavItemId('');
      setInsNavSubitems([]);
      setSelectedInsNavSubitemId('');
    };
    loadItems();
  }, [selectedInsNavCategoryId]);

  // Load subitems when insights item changes
  useEffect(() => {
    const loadSubitems = async () => {
      if (!hasSupabaseEnv || !selectedInsNavItemId) { setInsNavSubitems([]); setSelectedInsNavSubitemId(''); return; }
      const { data: subitems } = await supabase.from('navigation_subitems').select('id,label,item_id,slug').eq('item_id', Number(selectedInsNavItemId)).order('display_order');
      setInsNavSubitems((subitems||[]).map((s:any)=>({ id:s.id, label:s.label, item_id:s.item_id, slug:s.slug })));
      setSelectedInsNavSubitemId('');
    };
    loadSubitems();
  }, [selectedInsNavItemId]);

  const refreshInsights = async () => {
    if (!hasSupabaseEnv) return;
    const { data } = await supabase
      .from('published_insights_content')
      .select('*')
      .order('published_at', { ascending: false });
    if (data) {
      const mapped: InsightsContent[] = data.map((row: any) => ({
        id: row.id,
        title: row.title,
        slug: row.slug,
        excerpt: row.excerpt,
        content: row.content,
        content_type: row.content_type,
        author: { id: row.author_id, name: row.author_name || 'Unknown' },
        category: { id: row.category_id, name: row.category_name || 'Uncategorized' },
        navigation_item: { id: row.navigation_item_id, label: row.item_label || 'General' },
        status: row.status,
        published_at: row.published_at,
        view_count: row.view_count,
        is_featured: row.is_featured,
        is_trending: row.is_trending,
        external_url: row.external_url || undefined,
        video_url: row.video_url || undefined,
        podcast_url: row.podcast_url || undefined,
        duration_minutes: row.duration_minutes || undefined,
        tags: [],
        created_at: row.created_at,
        updated_at: row.updated_at
      }));
      setInsightsContent(mapped);
    }
  };

  const filteredContent = insightsContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || content.status === statusFilter;
    const matchesType = contentTypeFilter === 'all' || content.content_type === contentTypeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleCreateInsight = async () => {
    if (!hasSupabaseEnv) {
      setIsCreateDialogOpen(false);
      return;
    }
    const chosenNavItemId = selectedInsNavItemId ? Number(selectedInsNavItemId) : null;
    // Upload image if provided
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
      console.warn('Image upload handling failed:', e);
    }

    // create media_files row if we have an image
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
            alt_text: insightsForm.title,
            caption: null,
            uploaded_by: null
          }
        ]).select('id').single();
        if (!mediaErr && mediaRow) featuredImageId = mediaRow.id as number;
      }
    } catch (e) {
      console.warn('Failed to create media_files record:', e);
    }

    const { data: created, error } = await supabase.from('insights_content').insert([
      {
        title: insightsForm.title,
        slug: insightsForm.slug,
        excerpt: insightsForm.excerpt,
        content: insightsForm.content,
        content_type: insightsForm.content_type,
        author_id: null,
        category_id: null,
        navigation_item_id: chosenNavItemId,
        featured_image_id: featuredImageId,
        status: 'published',
        published_at: new Date().toISOString(),
        is_featured: false,
        is_trending: false,
        external_url: insightsForm.external_url || null,
        video_url: insightsForm.video_url || null,
        podcast_url: insightsForm.podcast_url || null,
        duration_minutes: insightsForm.duration_minutes || null,
        meta_title: null,
        meta_description: null,
        meta_keywords: null
      }
    ]).select('id').single();
    if (error) console.warn('Create insight failed:', error.message);
    if (created) {
      // Attach tags for category, item, and optional subitem
      const cat = insNavCategories.find(c => String(c.id) === selectedInsNavCategoryId);
      const item = insNavItems.find(i => String(i.id) === selectedInsNavItemId);
      const slugs: string[] = [];
      if (cat?.slug) slugs.push(cat.slug);
      if (item?.slug) slugs.push(item.slug);
      if (selectedInsNavSubitemId) {
        const sub = insNavSubitems.find(s => String(s.id) === selectedInsNavSubitemId);
        if (sub?.slug) slugs.push(sub.slug);
      }
      const { data: tagRows } = slugs.length > 0
        ? await supabase.from('content_tags').select('id,slug').in('slug', slugs)
        : { data: [] as any } as any;
      const tagIds = (tagRows||[]).map((t:any)=>t.id as number);
      if (tagIds.length > 0) {
        const rows = tagIds.map((tid) => ({ insights_content_id: created.id, tag_id: Number(tid) }));
      const { error: tagErr } = await supabase.from('insights_content_tags').insert(rows);
      if (tagErr) console.warn('Tag mapping failed:', tagErr.message);
      }
    }
    setIsCreateDialogOpen(false);
    setInsightsForm({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      content_type: 'article',
      author_id: '',
      category_id: '',
      navigation_item_id: '',
      status: 'draft',
      is_featured: false,
      is_trending: false,
      external_url: '',
      video_url: '',
      podcast_url: '',
      duration_minutes: 0,
      tags: [],
      meta_title: '',
      meta_description: '',
      meta_keywords: ''
    });
    
    setImageFile(null);
    await refreshInsights();
  };

  const openEdit = (item: InsightsContent) => {
    setSelectedContent(item);
    setInsightsEditForm({
      id: item.id,
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt || '',
      content: item.content || '',
      content_type: item.content_type,
      author_id: String(item.author.id || ''),
      category_id: String(item.category.id || ''),
      navigation_item_id: String(item.navigation_item.id || ''),
      status: item.status,
      is_featured: item.is_featured,
      is_trending: item.is_trending,
      external_url: item.external_url || '',
      video_url: item.video_url || '',
      podcast_url: item.podcast_url || '',
      duration_minutes: item.duration_minutes || 0,
      meta_title: '',
      meta_description: '',
      meta_keywords: '',
      tags: []
    });
    setIsEditDialogOpen(true);
    setEditImageUrl('');
    setEditImageFile(null);
    // Prefill edit image from featured_image_id
    (async () => {
      try {
        if (!hasSupabaseEnv) return;
        const { data: row } = await supabase.from('insights_content').select('featured_image_id').eq('id', item.id).maybeSingle();
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
        console.warn('Failed to preload edit image (insight):', e);
      }
    })();
  };

  const openPreview = (item: InsightsContent) => {
    setSelectedContent(item);
    setIsPreviewDialogOpen(true);
    (async () => {
      try {
        setPreviewImageUrl('');
        if (!hasSupabaseEnv) return;
        // Try published view first to leverage cover_image_url
        const { data: pubRow } = await supabase.from('published_insights_content').select('id,cover_image_url').eq('id', item.id).maybeSingle();
        const cover = (pubRow as any)?.cover_image_url as string | undefined;
        if (cover) {
          setPreviewImageUrl(cover);
          return;
        }
        // Fallback: resolve via featured_image_id → media_files
        const { data: row } = await supabase.from('insights_content').select('featured_image_id').eq('id', item.id).maybeSingle();
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
        console.warn('Failed to resolve insight preview image:', e);
      }
    })();
  };

  const handleUpdateInsight = async () => {
    if (!hasSupabaseEnv || !insightsEditForm.id) {
      setIsEditDialogOpen(false);
      return;
    }
    const payload:any = {
      title: insightsEditForm.title,
      slug: insightsEditForm.slug,
      excerpt: insightsEditForm.excerpt,
      content: insightsEditForm.content,
      content_type: insightsEditForm.content_type,
      author_id: Number(insightsEditForm.author_id) || null,
      category_id: Number(insightsEditForm.category_id) || null,
      navigation_item_id: Number(insightsEditForm.navigation_item_id) || null,
      status: insightsEditForm.status,
      is_featured: insightsEditForm.is_featured,
      is_trending: insightsEditForm.is_trending,
      external_url: insightsEditForm.external_url || null,
      video_url: insightsEditForm.video_url || null,
      podcast_url: insightsEditForm.podcast_url || null,
      duration_minutes: insightsEditForm.duration_minutes || null,
      meta_title: insightsEditForm.meta_title,
      meta_description: insightsEditForm.meta_description,
      meta_keywords: insightsEditForm.meta_keywords
    };
    if (insightsEditForm.status === 'published') {
      payload.published_at = new Date().toISOString();
    } else if (insightsEditForm.status === 'draft') {
      payload.published_at = null;
    }
    // If image was changed in edit, upload/record media and set featured_image_id
    try {
      let newFeaturedId: number | null = null;
      if (editImageFile) {
        const ext = editImageFile.name.split('.').pop() || 'jpg';
        const path = `uploads/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error: upErr } = await supabase.storage.from(storageBucket).upload(path, editImageFile, { upsert: true, contentType: editImageFile.type });
        if (!upErr) {
          const { data: pub } = supabase.storage.from(storageBucket).getPublicUrl(path);
          const { data: mediaRow } = await supabase.from('media_files').insert([
            { filename: editImageFile.name, original_filename: editImageFile.name, file_path: path, file_size: editImageFile.size || 0, mime_type: editImageFile.type || 'image/jpeg', alt_text: insightsEditForm.title, caption: null, uploaded_by: Number(insightsEditForm.author_id) || null }
          ]).select('id').single();
          if (mediaRow) newFeaturedId = mediaRow.id as number;
        }
      }
      if (newFeaturedId) payload.featured_image_id = newFeaturedId;
    } catch (e) { console.warn('Edit image handling failed:', e); }

    const { error } = await supabase.from('insights_content').update(payload).eq('id', insightsEditForm.id);
    if (error) console.warn('Update insight failed:', error.message);
    const { error: delErr } = await supabase.from('insights_content_tags').delete().eq('insights_content_id', insightsEditForm.id);
    if (delErr) console.warn('Delete tags failed:', delErr.message);
    if (insightsEditForm.tags && insightsEditForm.tags.length > 0) {
      const rows = insightsEditForm.tags.map((tid) => ({ insights_content_id: insightsEditForm.id, tag_id: Number(tid) }));
      const { error: insErr } = await supabase.from('insights_content_tags').insert(rows);
      if (insErr) console.warn('Insert tags failed:', insErr.message);
    }
    setIsEditDialogOpen(false);
    await refreshInsights();
  };

  const unpublishInsight = async (id: number) => {
    if (!hasSupabaseEnv) return;
    const { error } = await supabase
      .from('insights_content')
      .update({ status: 'draft', published_at: null })
      .eq('id', id);
    if (error) console.warn('Unpublish failed:', error.message);
    await refreshInsights();
  };

  const deleteInsight = async (id: number) => {
    if (!hasSupabaseEnv) return;
    const { error } = await supabase
      .from('insights_content')
      .delete()
      .eq('id', id);
    if (error) console.warn('Delete failed:', error.message);
    await refreshInsights();
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

  const getContentTypeIcon = (contentType: string) => {
    switch (contentType) {
      case 'video':
        return <Video className="h-4 w-4" />;
      case 'podcast':
        return <Headphones className="h-4 w-4" />;
      case 'survey':
        return <TrendingUp className="h-4 w-4" />;
      case 'explainer':
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getContentTypeBadgeVariant = (contentType: string) => {
    switch (contentType) {
      case 'video':
        return 'default';
      case 'podcast':
        return 'secondary';
      case 'survey':
        return 'outline';
      case 'explainer':
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

  const formatDuration = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Insights Management</h1>
            <p className="text-gray-600 mt-2">Manage thought leadership and research content</p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Insight
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Insight</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
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
                      value={insightsForm.title}
                      onChange={(e) => setInsightsForm({ ...insightsForm, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={insightsForm.slug}
                      onChange={(e) => setInsightsForm({ ...insightsForm, slug: e.target.value })}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={insightsForm.excerpt}
                    onChange={(e) => setInsightsForm({ ...insightsForm, excerpt: e.target.value })}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={insightsForm.content}
                    onChange={(e) => setInsightsForm({ ...insightsForm, content: e.target.value })}
                    rows={10}
                  />
                </div>

                {/* Cover Image (Upload only) */}
                <div>
                  <Label htmlFor="image_file">Upload Image</Label>
                  <Input id="image_file" type="file" accept="image/*" onChange={(e)=> setImageFile(e.target.files?.[0] || null)} />
                </div>

                {/* Navigation selection (Insights) */}
                <div className="grid grid-cols-3 gap-4 mb-2">
                  <div>
                    <Label>Category</Label>
                    <Select value={selectedInsNavCategoryId} onValueChange={(v)=>{ setSelectedInsNavCategoryId(v); }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category (e.g., Trending)" />
                      </SelectTrigger>
                      <SelectContent>
                        {insNavCategories.map(c => (
                          <SelectItem key={c.id} value={String(c.id)}>{c.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Item</Label>
                    <Select value={selectedInsNavItemId} onValueChange={(v)=>{ setSelectedInsNavItemId(v); }} disabled={!selectedInsNavCategoryId}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select item" />
                      </SelectTrigger>
                      <SelectContent>
                        {insNavItems.map(i => (
                          <SelectItem key={i.id} value={String(i.id)}>{i.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Subitem</Label>
                    <Select value={selectedInsNavSubitemId} onValueChange={(v)=>{ setSelectedInsNavSubitemId(v); }} disabled={!selectedInsNavItemId || insNavSubitems.length===0}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subitem (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        {insNavSubitems.map(s => (
                          <SelectItem key={s.id} value={String(s.id)}>{s.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Tags are attached automatically based on your selection above.</div>

                {/* Simplified: hide author/status/category/meta in create */}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="video_url">Video URL</Label>
                    <Input
                      id="video_url"
                      value={insightsForm.video_url}
                      onChange={(e) => setInsightsForm({ ...insightsForm, video_url: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="podcast_url">Podcast URL</Label>
                    <Input
                      id="podcast_url"
                      value={insightsForm.podcast_url}
                      onChange={(e) => setInsightsForm({ ...insightsForm, podcast_url: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="external_url">External URL</Label>
                    <Input
                      id="external_url"
                      value={insightsForm.external_url}
                      onChange={(e) => setInsightsForm({ ...insightsForm, external_url: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Input
                      id="duration"
                      type="number"
                      value={insightsForm.duration_minutes}
                      onChange={(e) => setInsightsForm({ ...insightsForm, duration_minutes: parseInt(e.target.value) })}
                    />
                  </div>
                </div>

                {/* Removed manual tag fields; tags are auto-attached from selection above. */}
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateInsight}>Create Insight</Button>
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
                placeholder="Search insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
            <Select value={contentTypeFilter} onValueChange={setContentTypeFilter}>
              <SelectTrigger className="w-[150px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="article">Article</SelectItem>
                <SelectItem value="video">Video</SelectItem>
                <SelectItem value="podcast">Podcast</SelectItem>
                <SelectItem value="survey">Survey</SelectItem>
                <SelectItem value="explainer">Explainer</SelectItem>
                <SelectItem value="case_study">Case Study</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="live_event">Live Event</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Insights Content List */}
      <div className="space-y-4">
        {filteredContent.map((content) => (
          <Card key={content.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {getContentTypeIcon(content.content_type)}
                    <h3 className="text-lg font-semibold text-gray-900">{content.title}</h3>
                    {content.is_featured && (
                      <Badge variant="default" className="bg-yellow-500">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {content.is_trending && (
                      <Badge variant="default" className="bg-red-500">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-3">{content.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{content.author.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(content.created_at)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{content.view_count} views</span>
                    </div>
                    {content.duration_minutes && (
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{formatDuration(content.duration_minutes)}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Badge variant={getContentTypeBadgeVariant(content.content_type)}>
                      {content.content_type.replace('_', ' ')}
                    </Badge>
                    <Badge variant="outline">{content.category.name}</Badge>
                    <Badge variant="outline">{content.navigation_item.label}</Badge>
                    {content.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Badge variant={getStatusBadgeVariant(content.status)}>
                    {content.status.charAt(0).toUpperCase() + content.status.slice(1)}
                  </Badge>
                  {content.status === 'published' ? (
                    <Button variant="outline" size="sm" onClick={() => unpublishInsight(content.id)}>
                      Unpublish
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" onClick={() => openEdit(content)}>
                      Edit / Publish
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => openPreview(content)}>
                    Preview
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => deleteInsight(content.id)}>
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
            <DialogTitle>Edit Insight</DialogTitle>
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
                <Label>Title</Label>
                <Input value={insightsEditForm.title} onChange={(e)=>setInsightsEditForm({...insightsEditForm,title:e.target.value})} />
              </div>
              <div>
                <Label>Slug</Label>
                <Input value={insightsEditForm.slug} onChange={(e)=>setInsightsEditForm({...insightsEditForm,slug:e.target.value})} />
              </div>
            </div>
            <div>
              <Label htmlFor="edit_image_file">Upload Image</Label>
              <Input id="edit_image_file" type="file" accept="image/*" onChange={(e)=> setEditImageFile(e.target.files?.[0] || null)} />
              {editImageUrl ? (
                <p className="text-xs text-gray-500 mt-1">Current image will be kept unless you upload a new one.</p>
              ) : null}
            </div>
            <div>
              <Label>Excerpt</Label>
              <Textarea value={insightsEditForm.excerpt} onChange={(e)=>setInsightsEditForm({...insightsEditForm,excerpt:e.target.value})} rows={3} />
            </div>
            <div>
              <Label>Content</Label>
              <Textarea value={insightsEditForm.content} onChange={(e)=>setInsightsEditForm({...insightsEditForm,content:e.target.value})} rows={10} />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>Type</Label>
                <Select value={insightsEditForm.content_type} onValueChange={(value)=>setInsightsEditForm({...insightsEditForm,content_type:value as any})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="article">Article</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="podcast">Podcast</SelectItem>
                    <SelectItem value="survey">Survey</SelectItem>
                    <SelectItem value="explainer">Explainer</SelectItem>
                    <SelectItem value="case_study">Case Study</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="live_event">Live Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Author</Label>
                <Select value={insightsEditForm.author_id} onValueChange={(value)=>setInsightsEditForm({...insightsEditForm,author_id:value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select author" />
                  </SelectTrigger>
                  <SelectContent>
                    {authorOptions.map(opt => (<SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Status</Label>
                <Select value={insightsEditForm.status} onValueChange={(value)=>setInsightsEditForm({...insightsEditForm,status:value as any})}>
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
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Navigation Item</Label>
                <Select value={insightsEditForm.navigation_item_id} onValueChange={(value)=>setInsightsEditForm({...insightsEditForm,navigation_item_id:value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select navigation item" />
                  </SelectTrigger>
                  <SelectContent>
                    {navItemOptions.map(opt => (<SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>External URL</Label>
                <Input value={insightsEditForm.external_url} onChange={(e)=>setInsightsEditForm({...insightsEditForm,external_url:e.target.value})} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Video URL</Label>
                <Input value={insightsEditForm.video_url} onChange={(e)=>setInsightsEditForm({...insightsEditForm,video_url:e.target.value})} />
              </div>
              <div>
                <Label>Podcast URL</Label>
                <Input value={insightsEditForm.podcast_url} onChange={(e)=>setInsightsEditForm({...insightsEditForm,podcast_url:e.target.value})} />
              </div>
            </div>
            <div>
              <Label>Duration (minutes)</Label>
              <Input type="number" value={insightsEditForm.duration_minutes} onChange={(e)=>setInsightsEditForm({...insightsEditForm,duration_minutes:parseInt(e.target.value) || 0})} />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={()=>setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleUpdateInsight}>Save</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={isPreviewDialogOpen} onOpenChange={setIsPreviewDialogOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Preview Insight</DialogTitle>
          </DialogHeader>
          {selectedContent && (
            <div className="space-y-4">
              {previewImageUrl ? (
                <div className="w-full h-48 bg-gray-100 rounded overflow-hidden">
                  <img src={previewImageUrl} alt={selectedContent.title} className="w-full h-full object-cover" />
                </div>
              ) : null}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedContent.title}</h2>
                <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600">
                  <span>By {selectedContent.author.name}</span>
                  <span>•</span>
                  <span>{selectedContent.published_at ? new Date(selectedContent.published_at).toLocaleString() : 'Unpublished'}</span>
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <Badge variant="outline">{selectedContent.category.name}</Badge>
                  <Badge variant="outline">{selectedContent.navigation_item.label}</Badge>
                  <Badge variant={getStatusBadgeVariant(selectedContent.status)}>
                    {selectedContent.status.charAt(0).toUpperCase() + selectedContent.status.slice(1)}
                  </Badge>
                </div>
              </div>
              {selectedContent.excerpt && (
                <p className="text-gray-700 italic">{selectedContent.excerpt}</p>
              )}
              <div className="prose max-w-none whitespace-pre-wrap">
                {selectedContent.content}
              </div>
              {selectedContent.video_url && (
                <div className="mt-4">
                  <a className="text-blue-600 underline" href={selectedContent.video_url} target="_blank" rel="noreferrer">Open Video</a>
                </div>
              )}
              {selectedContent.podcast_url && (
                <div className="mt-2">
                  <a className="text-blue-600 underline" href={selectedContent.podcast_url} target="_blank" rel="noreferrer">Open Podcast</a>
                </div>
              )}
              {selectedContent.external_url && (
                <div className="mt-2">
                  <a className="text-blue-600 underline" href={selectedContent.external_url} target="_blank" rel="noreferrer">Open External</a>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {filteredContent.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500">No insights content found matching your criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default InsightsManagement;
