import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase, hasSupabaseEnv } from '@/lib/supabaseClient';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

type ContentType = 'blogs' | 'insights';

type ContentItem = {
  id: string;
  title: string;
  excerpt?: string;
  cover_image_url?: string;
  slug: string;
  section: string; // e.g., services | solutions | products | industries
  created_at: string;
};

async function fetchContent(type: ContentType, section?: string) {
  if (!hasSupabaseEnv) return [] as ContentItem[];
  let query = supabase.from(type).select('*').order('created_at', { ascending: false });
  if (section) query = query.eq('section', section);
  const { data, error } = await query;
  if (error) throw error;
  return (data as unknown) as ContentItem[];
}

const Card: React.FC<{ item: ContentItem; basePath: string }> = ({ item, basePath }) => {
  return (
    <a
      href={`/${basePath}/${item.section}/${item.slug}`}
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
        <div className="text-xs uppercase tracking-wide text-blue-600 mb-1">{item.section}</div>
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 line-clamp-2">{item.title}</h3>
        {item.excerpt && <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.excerpt}</p>}
      </div>
    </a>
  );
};

const ContentHub: React.FC<{ type: ContentType }> = ({ type }) => {
  const basePath = type;
  const params = useParams();
  const section = (params.section as string | undefined) || undefined;
  const { data, isLoading, error } = useQuery({
    queryKey: ['content', type, section],
    queryFn: () => fetchContent(type, section),
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
          </div>

          {isLoading && <div className="text-center text-gray-500">Loading…</div>}
          {error && <div className="text-center text-red-600">Failed to load content.</div>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((item) => (
              <Card key={item.id} item={item} basePath={basePath} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContentHub;


