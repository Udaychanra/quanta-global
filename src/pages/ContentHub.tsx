import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase, hasSupabaseEnv } from '@/lib/supabaseClient';
import { useParams, Link } from 'react-router-dom';
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
  subcategory?: string; // Added for three-level routes
};

async function fetchContent(type: ContentType, section?: string, subcategory?: string) {
  if (!hasSupabaseEnv) return [] as ContentItem[];
  
  console.log(`Fetching ${type} content for section: ${section || 'all'}, subcategory: ${subcategory || 'all'}`);
  
  // Check if the requested section conflicts with service routes
  if (section) {
    const serviceSections = ['ai', 'finance-transformation', 'cloud-platforms', 'supply-chain-transformation', 'sap-erp-transformation', 'enterprise-orchestration'];
    const solutionSections = ['transformation-control-tower', 'partner-ecosystem-strategy', 'ai-data-tactical'];
    
    if (serviceSections.includes(section) || solutionSections.includes(subcategory || '')) {
      console.warn(`Section '${section}' or subcategory '${subcategory}' conflicts with service routes. This should not be handled by the ${type} system.`);
      throw new Error(`Section '${section}' or subcategory '${subcategory}' is not available for ${type}. Please use the appropriate service page instead.`);
    }
    
    console.log(`Filtering by section: ${section}${subcategory ? `, subcategory: ${subcategory}` : ''}`);
  }
  
  let query = supabase.from(type).select('*').order('created_at', { ascending: false });
  if (section) {
    query = query.eq('section', section);
  }
  if (subcategory) {
    query = query.eq('subcategory', subcategory);
  }
  
  const { data, error } = await query;
  
  if (error) {
    console.error('Supabase query error:', error);
    throw error;
  }
  
  // Filter out items that might conflict with service routes
  const filteredData = data?.filter(item => {
    // Don't show items with sections that are actual service routes
    const serviceSections = ['ai', 'finance-transformation', 'cloud-platforms', 'supply-chain-transformation', 'sap-erp-transformation', 'enterprise-orchestration'];
    const solutionSections = ['transformation-control-tower', 'partner-ecosystem-strategy', 'ai-data-tactical'];
    
    if (serviceSections.includes(item.section) || solutionSections.includes(item.subcategory || '')) {
      console.log(`Filtering out item with conflicting section: ${item.section} or subcategory: ${item.subcategory}`);
      return false;
    }
    return true;
  });
  
  console.log(`Fetched ${data?.length || 0} items, filtered to ${filteredData?.length || 0} items for ${type}`);
  return (filteredData as unknown) as ContentItem[];
}

const Card: React.FC<{ item: ContentItem; basePath: string }> = ({ item, basePath }) => {
  return (
    <Link
      to={`/${basePath}/${item.section}/${item.subcategory || 'general'}/${item.slug}`}
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
        <div className="text-xs uppercase tracking-wide text-blue-600 mb-1">{item.section}{item.subcategory ? ` · ${item.subcategory}` : ''}</div>
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
  
  console.log(`ContentHub: type=${type}, section=${section}, subcategory=${subcategory}, params=`, params);
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['content', type, section, subcategory],
    queryFn: () => fetchContent(type, section, subcategory),
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
                <Card key={item.id} item={item} basePath={basePath} />
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


