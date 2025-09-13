import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase, hasSupabaseEnv } from '@/lib/supabaseClient';
const storageBucket = (import.meta as any)?.env?.VITE_SUPABASE_STORAGE_BUCKET || 'media';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

type ContentType = 'blogs' | 'insights';

type ContentItem = {
  id: string;
  title: string;
  excerpt?: string;
  cover_image_url?: string;
  featured_image_id?: number;
  slug: string;
  created_at: string;
};

async function fetchContent(type: ContentType, section?: string, subcategory?: string, subitem?: string) {
  if (!hasSupabaseEnv) return [] as ContentItem[];
  
  console.log(`Fetching ${type} content for section: ${section || 'all'}, subcategory: ${subcategory || 'all'}`);
  
  const baseTable = type === 'blogs' ? 'blog_posts' : 'insights_content';
  const mappingTable = type === 'blogs' ? 'blog_post_tags' : 'insights_content_tags';
  const idColumn = type === 'blogs' ? 'blog_post_id' : 'insights_content_id';

  // Resolve navigation scope from URL (category/item/subitem)
  let navItemIds: number[] | null = null;
  let itemIdForPath: number | null = null;
  {
    const sectionSlug = type; // 'blogs' or 'insights'
    const { data: sections } = await supabase.from('navigation_sections').select('id,slug').eq('slug', sectionSlug).limit(1);
    const sec = sections && sections[0];
    if (sec && section) {
      const { data: cats } = await supabase.from('navigation_categories').select('id,slug').eq('section_id', sec.id).eq('slug', section).limit(1);
      const cat = cats && cats[0];
      if (cat) {
        if (subcategory) {
          const { data: items } = await supabase.from('navigation_items').select('id,slug').eq('category_id', cat.id).eq('slug', subcategory).limit(1);
          const it = items && items[0];
          if (it) {
            itemIdForPath = it.id as number;
            navItemIds = [it.id as number];
          }
        } else {
          const { data: items } = await supabase.from('navigation_items').select('id').eq('category_id', cat.id);
          navItemIds = (items || []).map((r:any)=>r.id as number);
        }
      }
    }
  }

  // Build required tag slugs based on URL (only subitem strictly required for 3-level URLs)
  const requiredTagSlugs = [subitem].filter(Boolean) as string[];
  let allowedIdsByTags: Set<number> | null = null;
  for (const tagSlug of requiredTagSlugs) {
    const { data: tagRows } = await supabase.from('content_tags').select('id').eq('slug', tagSlug as string).maybeSingle();
    const tagId = tagRows?.id as number | undefined;
    if (!tagId) { allowedIdsByTags = null; break; }
    const { data: mapRows } = await supabase.from(mappingTable).select(idColumn).eq('tag_id', tagId);
    const ids = new Set<number>((mapRows || []).map((r: any) => r[idColumn] as number));
    allowedIdsByTags = allowedIdsByTags ? new Set([...allowedIdsByTags].filter(x => ids.has(x))) : ids;
    if (allowedIdsByTags.size === 0) { allowedIdsByTags = null; break; }
  }

  let contentQuery = supabase
    .from(baseTable)
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });
  if (navItemIds && navItemIds.length > 0) contentQuery = contentQuery.in('navigation_item_id', navItemIds);
  if (allowedIdsByTags && allowedIdsByTags.size > 0) contentQuery = contentQuery.in('id', Array.from(allowedIdsByTags));
  const { data, error } = await contentQuery;
  if (error) throw error;
  const items = (data || []) as unknown as ContentItem[];

  // Attach cover_image_url from media_files if featured_image_id is present
  const mediaIds = Array.from(new Set((items as any[])
    .map((i:any)=>i.featured_image_id)
    .filter((x:any)=>typeof x === 'number')));
  if (mediaIds.length > 0) {
    const { data: media } = await supabase.from('media_files').select('id,file_path');
    const map = new Map((media||[]).map((m:any)=>[m.id, m.file_path]));
    (items as any[]).forEach((i:any)=>{
      if (i.featured_image_id && map.has(i.featured_image_id)) {
        const fp = map.get(i.featured_image_id) as string;
        if (fp.startsWith('http')) i.cover_image_url = fp;
        else {
          const { data: pub } = supabase.storage.from(storageBucket).getPublicUrl(fp);
          i.cover_image_url = pub?.publicUrl || undefined;
        }
      }
    });
  }
  return items;
}

const Card: React.FC<{ item: ContentItem; basePath: string; section?: string; subcategory?: string; subitem?: string }> = ({ item, basePath, section, subcategory, subitem }) => {
  return (
    <Link
      to={subitem
        ? `/${basePath}/${section || 'all'}/${subcategory || 'all'}/${subitem}/${item.slug}`
        : `/${basePath}/${section || 'all'}/${subcategory || 'all'}/p/${item.slug}`}
      className="group relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow bg-white"
    >
      <div className="h-40 w-full bg-gray-100 overflow-hidden">
        {item.cover_image_url ? (
          <img src={item.cover_image_url} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">No image</div>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-blue-600 mb-1">{section}{subcategory ? ` · ${subcategory}` : ''}{subitem ? ` · ${subitem}` : ''}</div>
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 line-clamp-2">{item.title}</h3>
        {item.excerpt && <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.excerpt}</p>}
      </div>
    </Link>
  );
};

const ContentHub: React.FC<{ type: ContentType }> = ({ type }) => {
  const basePath = type;
  const params = useParams();
  const section = (params.section as string | undefined) || undefined;
  const subcategory = (params.subcategory as string | undefined) || undefined;
  const subitem = (params.subitem as string | undefined) || undefined;
  
  console.log(`ContentHub: type=${type}, section=${section}, subcategory=${subcategory}, params=`, params);
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['content', type, section, subcategory, subitem],
    queryFn: () => fetchContent(type, section, subcategory, subitem),
  });

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {type === 'blogs' ? 'Blogs' : 'Insights'}{section ? ` · ${section}` : ''}
            </h1>
            {!hasSupabaseEnv && (
              <p className="text-sm text-amber-700 bg-amber-100 inline-block px-3 py-1 rounded-md mt-3">
                Supabase keys not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to load content.
              </p>
            )}
            {!hasSupabaseEnv && (
              <p className="text-xs text-gray-600 mt-2">
                Check the browser console for more debugging information.
              </p>
            )}
          </div>

          {isLoading && <div className="text-center text-gray-500">Loading…</div>}
          {error && (
            <div className="text-center text-red-600 bg-red-50 p-4 rounded-lg border border-red-200 max-w-md mx-auto">
              <h3 className="font-semibold mb-2">Failed to load content</h3>
              <p className="text-sm text-red-700 mb-2">
                Error: {error instanceof Error ? error.message : 'Unknown error occurred'}
              </p>
              <p className="text-sm text-red-600">
                Please check your connection and try again.
              </p>
            </div>
          )}
          {data && data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((item) => (
                <Card key={item.id} item={item} basePath={basePath} section={section} subcategory={subcategory} subitem={subitem} />
              ))}
            </div>
          ) : !isLoading && !error ? (
            <div className="text-center text-gray-500 py-12">
              <p className="text-lg mb-2">No {type} found in this section.</p>
              <p className="text-sm">Try browsing other sections or check back later for new content.</p>
            </div>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContentHub;


