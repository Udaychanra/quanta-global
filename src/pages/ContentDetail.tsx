import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase, hasSupabaseEnv } from '@/lib/supabaseClient';

type ContentType = 'blogs' | 'insights';

type ContentRecord = {
  id: string;
  title: string;
  excerpt?: string;
  cover_image_url?: string;
  slug: string;
  section: string;
  content?: string | null;
  created_at: string;
};

async function fetchOne(type: ContentType, section: string, slug: string) {
  if (!hasSupabaseEnv) return null;
  const { data, error } = await supabase
    .from(type)
    .select('*')
    .eq('section', section)
    .eq('slug', slug)
    .limit(1)
    .single();
  if (error) throw error;
  return data as unknown as ContentRecord;
}

const ContentDetail: React.FC<{ type: ContentType }> = ({ type }) => {
  const params = useParams();
  const section = (params.section as string) || '';
  const slug = (params.slug as string) || '';

  const { data, isLoading, error } = useQuery({
    queryKey: ['content-detail', type, section, slug],
    queryFn: () => fetchOne(type, section, slug),
    enabled: Boolean(section && slug),
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

          {isLoading && <div className="text-gray-600">Loading {heading}…</div>}
          {error && <div className="text-red-600">Failed to load {heading}.</div>}

          {data && (
            <article className="bg-white rounded-2xl shadow overflow-hidden">
              {data.cover_image_url && (
                <div className="w-full h-64 md:h-80 bg-gray-100 overflow-hidden">
                  <img src={data.cover_image_url} alt={data.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block text-xs uppercase tracking-wider bg-blue-600 text-white px-3 py-1 rounded-full">
                    {data.section}
                  </span>
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


