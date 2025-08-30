import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase, hasSupabaseEnv } from '@/lib/supabaseClient';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

type ContentItem = {
  id: string;
  title: string;
  excerpt?: string;
  cover_image_url?: string;
  slug: string;
  section: string;
  subcategory?: string; // Added subcategory
  created_at: string;
};

async function fetchInsightSections() {
  if (!hasSupabaseEnv) return [];
  const { data, error } = await supabase
    .from('insights')
    .select('section')
    .order('section');
  
  if (error) throw error;
  
  // Filter out sections that conflict with service routes
  const serviceSections = ['ai', 'finance-transformation', 'cloud-platforms', 'supply-chain-transformation', 'sap-erp-transformation', 'enterprise-orchestration'];
  const solutionSections = ['transformation-control-tower', 'partner-ecosystem-strategy', 'ai-data-tactical'];
  
  const filteredSections = data
    .map(item => item.section)
    .filter(section => !serviceSections.includes(section) && !solutionSections.includes(section));
  
  // Get unique sections
  const sections = [...new Set(filteredSections)];
  console.log('Insight sections after filtering:', sections);
  return sections;
}

async function fetchRecentInsights() {
  if (!hasSupabaseEnv) return [];
  const { data, error } = await supabase
    .from('insights')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(6);
  
  if (error) throw error;
  
  // Filter out insights that conflict with service routes
  const serviceSections = ['ai', 'finance-transformation', 'cloud-platforms', 'supply-chain-transformation', 'sap-erp-transformation', 'enterprise-orchestration'];
  const solutionSections = ['transformation-control-tower', 'partner-ecosystem-strategy', 'ai-data-tactical'];
  
  const filteredInsights = data.filter(item => 
    !serviceSections.includes(item.section) && !solutionSections.includes(item.section)
  );
  
  console.log(`Fetched ${data?.length || 0} insights, filtered to ${filteredInsights?.length || 0} insights`);
  return filteredInsights as ContentItem[];
}

const InsightCard: React.FC<{ insight: ContentItem }> = ({ insight }) => {
  return (
    <Link
      to={`/insights/${insight.section}/${insight.subcategory || 'general'}/${insight.slug}`}
      className="group block rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow bg-white"
    >
      <div className="h-48 w-full bg-gray-100 overflow-hidden">
        {insight.cover_image_url ? (
          <img src={insight.cover_image_url} alt={insight.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">No image</div>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-blue-600 mb-2">{insight.section}{insight.subcategory ? ` · ${insight.subcategory}` : ''}</div>
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 line-clamp-2 mb-2">{insight.title}</h3>
        {insight.excerpt && <p className="text-sm text-gray-600 line-clamp-3">{insight.excerpt}</p>}
        <time className="text-xs text-gray-500">{new Date(insight.created_at).toLocaleDateString()}</time>
      </div>
    </Link>
  );
};

const SectionCard: React.FC<{ section: string }> = ({ section }) => {
  return (
    <Link
      to={`/insights/${section}`}
      className="group block p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
    >
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 mb-2">
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </h3>
        <p className="text-gray-600 text-sm">View all insights in {section}</p>
      </div>
    </Link>
  );
};

const Insights = () => {
  const { data: sections, isLoading: sectionsLoading } = useQuery({
    queryKey: ['insight-sections'],
    queryFn: fetchInsightSections,
  });

  const { data: recentInsights, isLoading: insightsLoading } = useQuery({
    queryKey: ['recent-insights'],
    queryFn: fetchRecentInsights,
  });

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Insights</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
              Discover strategic insights, industry analysis, and thought leadership content
            </p>
            <div className="text-sm text-gray-500 max-w-2xl mx-auto">
              <p>Looking for specific services? Visit our <a href="/services" className="text-blue-600 hover:text-blue-800 underline">Services page</a> for detailed information about our offerings.</p>
            </div>
          </div>

          {!hasSupabaseEnv && (
            <div className="mb-8 text-center">
              <div className="text-sm text-amber-700 bg-amber-100 inline-block px-4 py-2 rounded-md">
                Supabase keys not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to load content.
              </div>
              <div className="mt-2 text-xs text-gray-600">
                Check the browser console for more debugging information.
              </div>
            </div>
          )}

          {/* Insight Sections */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Category</h2>
            {sectionsLoading ? (
              <div className="text-center text-gray-500">Loading sections...</div>
            ) : sections && sections.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.map((section: string) => (
                  <SectionCard key={section} section={section} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>No insight sections found.</p>
                <p className="text-sm mt-2">Make sure you have insights in your Supabase database.</p>
              </div>
            )}
          </div>

          {/* Recent Insights */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recent Insights</h2>
            {insightsLoading ? (
              <div className="text-center text-gray-500">Loading recent insights...</div>
            ) : recentInsights && recentInsights.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentInsights.map((insight) => (
                  <InsightCard key={insight.id} insight={insight} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>No recent insights found.</p>
                <p className="text-sm mt-2">Make sure you have insights in your Supabase database.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;