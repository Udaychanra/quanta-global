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

async function fetchBlogSections() {
  if (!hasSupabaseEnv) return [];
  const { data, error } = await supabase
    .from('blogs')
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
  console.log('Blog sections after filtering:', sections);
  return sections;
}

async function fetchRecentBlogs() {
  if (!hasSupabaseEnv) return [];
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(6);
  
  if (error) throw error;
  
  // Filter out blogs that conflict with service routes
  const serviceSections = ['ai', 'finance-transformation', 'cloud-platforms', 'supply-chain-transformation', 'sap-erp-transformation', 'enterprise-orchestration'];
  const solutionSections = ['transformation-control-tower', 'partner-ecosystem-strategy', 'ai-data-tactical'];
  
  const filteredBlogs = data.filter(item => 
    !serviceSections.includes(item.section) && !solutionSections.includes(item.section)
  );
  
  console.log(`Fetched ${data?.length || 0} blogs, filtered to ${filteredBlogs?.length || 0} blogs`);
  return filteredBlogs as ContentItem[];
}

const BlogCard: React.FC<{ blog: ContentItem }> = ({ blog }) => {
  return (
    <Link
      to={`/blogs/${blog.section}/${blog.subcategory || 'general'}/${blog.slug}`}
      className="group block rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow bg-white"
    >
      <div className="h-48 w-full bg-gray-100 overflow-hidden">
        {blog.cover_image_url ? (
          <img src={blog.cover_image_url} alt={blog.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">No image</div>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-blue-600 mb-2">{blog.section}{blog.subcategory ? ` · ${blog.subcategory}` : ''}</div>
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 line-clamp-2 mb-2">{blog.title}</h3>
        {blog.excerpt && <p className="text-sm text-gray-600 line-clamp-3">{blog.excerpt}</p>}
        <time className="text-xs text-gray-500">{new Date(blog.created_at).toLocaleDateString()}</time>
      </div>
    </Link>
  );
};

const SectionCard: React.FC<{ section: string }> = ({ section }) => {
  return (
    <Link
      to={`/blogs/${section}`}
      className="group block p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
    >
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 mb-2">
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </h3>
        <p className="text-gray-600 text-sm">View all blogs in {section}</p>
      </div>
    </Link>
  );
};

const Blogs = () => {
  const { data: sections, isLoading: sectionsLoading } = useQuery({
    queryKey: ['blog-sections'],
    queryFn: fetchBlogSections,
  });

  const { data: recentBlogs, isLoading: blogsLoading } = useQuery({
    queryKey: ['recent-blogs'],
    queryFn: fetchRecentBlogs,
  });

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blogs</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
              Explore our latest insights, industry trends, and expert perspectives across various domains
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

          {/* Blog Sections */}
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
                <p>No blog sections found.</p>
                <p className="text-sm mt-2">Make sure you have blogs in your Supabase database.</p>
              </div>
            )}
          </div>

          {/* Recent Blogs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recent Posts</h2>
            {blogsLoading ? (
              <div className="text-center text-gray-500">Loading recent blogs...</div>
            ) : recentBlogs && recentBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>No recent blogs found.</p>
                <p className="text-sm mt-2">Make sure you have blogs in your Supabase database.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;