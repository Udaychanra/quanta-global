import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase, hasSupabaseEnv } from '@/lib/supabaseClient';
const storageBucket = (import.meta as any)?.env?.VITE_SUPABASE_STORAGE_BUCKET || 'media';

type ContentType = 'blogs' | 'insights';

type ContentRecord = {
  id: string;
  title: string;
  excerpt?: string;
  cover_image_url?: string;
  slug: string;
  content?: string | null;
  created_at: string;
  section?: string;
  subcategory?: string;
};

async function fetchOne(type: ContentType, section: string, subcategory: string, slug: string, subitem?: string) {
  if (!hasSupabaseEnv) return null;
  
  console.log(`Fetching ${type} with section: ${section}, subcategory: ${subcategory}, subitem: ${subitem || 'none'}, slug: ${slug}`);
  
  const publishedView = type === 'blogs' ? 'published_blog_posts' : 'published_insights_content';
  const baseTable = type === 'blogs' ? 'blog_posts' : 'insights_content';
  // Resolve navigation item from section/category/item slugs
  const sectionSlug = type; // 'blogs' or 'insights'
  const { data: sections } = await supabase.from('navigation_sections').select('id,slug').eq('slug', sectionSlug).limit(1);
  const sec = sections && sections[0];
  if (!sec) return null;
  const { data: cats } = await supabase.from('navigation_categories').select('id,slug').eq('section_id', sec.id).eq('slug', section).limit(1);
  const cat = cats && cats[0];
  if (!cat) return null;
  const { data: items } = await supabase.from('navigation_items').select('id,slug').eq('category_id', cat.id).eq('slug', subcategory).limit(1);
  const it = items && items[0];
  if (!it) return null;

  // Try published view first, then fallback to base table
  let data: any | null = null;
  try {
    const pubRes = await supabase
      .from(publishedView)
      .select('*')
      .eq('slug', slug)
      .eq('navigation_item_id', it.id)
      .maybeSingle();
    if (!pubRes.error && pubRes.data) {
      data = pubRes.data;
    }
  } catch (e) {
    console.warn('Published view lookup failed:', e);
  }
  if (!data) {
    const baseRes = await supabase
      .from(baseTable)
      .select('*')
      .eq('slug', slug)
      .eq('navigation_item_id', it.id)
      .maybeSingle();
    if (baseRes.error) {
      console.error('Supabase query error:', baseRes.error);
      throw baseRes.error;
    }
    data = baseRes.data as any;
  }
  // If subitem provided, attempt to verify tag but do not block rendering
  if (data && subitem) {
    try {
      const { data: tagRow } = await supabase.from('content_tags').select('id').eq('slug', subitem).maybeSingle();
      if (tagRow?.id) {
        const mapTable = type === 'blogs' ? 'blog_post_tags' : 'insights_content_tags';
        const idColumn = type === 'blogs' ? 'blog_post_id' : 'insights_content_id';
        const { data: hasMap } = await supabase.from(mapTable).select('*').eq('tag_id', tagRow.id).eq(idColumn, (data as any).id).limit(1);
        if (!hasMap || hasMap.length === 0) {
          console.warn('Subitem tag not found for this record; continuing to render.');
        }
      }
    } catch (e) {
      console.warn('Subitem verification skipped due to error:', e);
    }
  }

  // Resolve cover image URL from published view first, then featured_image_id if present
  let coverImageUrl: string | undefined = undefined;
  try {
    const publishedCover = (data as any)?.cover_image_url as string | undefined;
    if (publishedCover) {
      coverImageUrl = publishedCover;
    } else {
      const featuredId = (data as any)?.featured_image_id as number | null | undefined;
      if (featuredId) {
        const { data: media } = await supabase.from('media_files').select('file_path').eq('id', featuredId).maybeSingle();
        const filePath = media?.file_path as string | undefined;
        if (filePath) {
          if (filePath.startsWith('http')) coverImageUrl = filePath;
          else {
            const { data: pub } = supabase.storage.from(storageBucket).getPublicUrl(filePath);
            coverImageUrl = pub?.publicUrl || undefined;
          }
        }
      }
    }
  } catch (e) {
    console.warn('Failed to resolve cover image URL:', e);
  }

  console.log('Fetched data:', data);
  return { ...(data as any), cover_image_url: coverImageUrl } as unknown as ContentRecord;
}

const ContentDetail: React.FC<{ type: ContentType }> = ({ type }) => {
  const params = useParams();
  const section = (params.section as string) || '';
  const subcategory = (params.subcategory as string) || '';
  const subitem = (params.subitem as string | undefined) || undefined;
  const slug = (params.slug as string) || '';

  console.log(`ContentDetail: type=${type}, section=${section}, subcategory=${subcategory}, slug=${slug}, params=`, params);

  const { data, isLoading, error } = useQuery({
    queryKey: ['content-detail', type, section, subcategory, subitem, slug],
    queryFn: () => fetchOne(type, section, subcategory, slug, subitem),
    enabled: Boolean(section && subcategory && slug),
  });

  const heading = type === 'blogs' ? 'Blog' : 'Insight';

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container max-w-4xl">
          {!hasSupabaseEnv && (
            <div className="mb-4 text-sm text-amber-700 bg-amber-100 inline-block px-3 py-1 rounded-md">
              Supabase keys not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.
            </div>
          )}
          {!hasSupabaseEnv && (
            <div className="mb-4 text-xs text-gray-600">
              Check the browser console for more debugging information.
            </div>
          )}

          {isLoading && <div className="text-gray-600">Loading {heading}…</div>}
          {error && (
            <div className="text-red-600 bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold mb-2">Failed to load {heading}</h3>
              <p className="text-sm text-red-700 mb-2">
                Error: {error instanceof Error ? error.message : 'Unknown error occurred'}
              </p>
              <p className="text-sm text-red-600">
                Please check that the blog post exists and try again.
              </p>
            </div>
          )}

          {data && (
            <article className="bg-white rounded-2xl shadow overflow-hidden">
              {data.cover_image_url && (
                <div className="w-full h-64 md:h-80 bg-gray-100 overflow-hidden">
                  <img src={data.cover_image_url} alt={data.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  {section || subcategory ? (
                    <span className="inline-block text-xs uppercase tracking-wider bg-blue-600 text-white px-3 py-1 rounded-full">
                      {section}{subcategory ? ` · ${subcategory}` : ''}
                    </span>
                  ) : null}
                  <time className="text-xs text-gray-500">{new Date(data.created_at).toLocaleDateString()}</time>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>
                {data.excerpt && (
                  <p className="text-gray-700 text-lg mb-6">{data.excerpt}</p>
                )}

                {/* Content rendering: supports plain text or basic HTML */}
                {data.content ? (
                  <div className="prose prose-blue max-w-none">
                    {/* If content contains HTML, render as HTML; otherwise show as text */}
                    {/<[a-z][\s\S]*>/i.test(data.content) ? (
                      <div dangerouslySetInnerHTML={{ __html: data.content }} />
                    ) : (
                      data.content.split(/\n\n+/).map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500">No content available.</p>
                )}
              </div>
            </article>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContentDetail;


