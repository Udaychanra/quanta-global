import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Lightbulb, 
  Navigation, 
  Users, 
  Tag, 
  Image,
  Plus,
  Settings,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase, hasSupabaseEnv } from '@/lib/supabaseClient';

interface DashboardStats {
  totalBlogPosts: number;
  totalInsights: number;
  totalAuthors: number;
  totalTags: number;
  totalMediaFiles: number;
  publishedContent: number;
  draftContent: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalBlogPosts: 0,
    totalInsights: 0,
    totalAuthors: 0,
    totalTags: 0,
    totalMediaFiles: 0,
    publishedContent: 0,
    draftContent: 0
  });

  useEffect(() => {
    const loadStats = async () => {
      if (!hasSupabaseEnv) return;
      try {
        const [blogCountRes, insightsCountRes, authorsCountRes, tagsCountRes, mediaCountRes, publishedBlogCountRes, draftBlogCountRes, publishedInsightsCountRes, draftInsightsCountRes] = await Promise.all([
          supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
          supabase.from('insights_content').select('id', { count: 'exact', head: true }),
          supabase.from('authors').select('id', { count: 'exact', head: true }),
          supabase.from('content_tags').select('id', { count: 'exact', head: true }),
          supabase.from('media_files').select('id', { count: 'exact', head: true }),
          supabase.from('blog_posts').select('id', { count: 'exact', head: true }).eq('status','published'),
          supabase.from('blog_posts').select('id', { count: 'exact', head: true }).eq('status','draft'),
          supabase.from('insights_content').select('id', { count: 'exact', head: true }).eq('status','published'),
          supabase.from('insights_content').select('id', { count: 'exact', head: true }).eq('status','draft')
        ]);

        const totalBlogPosts = blogCountRes.count || 0;
        const totalInsights = insightsCountRes.count || 0;
        const totalAuthors = authorsCountRes.count || 0;
        const totalTags = tagsCountRes.count || 0;
        const totalMediaFiles = mediaCountRes.count || 0;
        const publishedContent = (publishedBlogCountRes.count || 0) + (publishedInsightsCountRes.count || 0);
        const draftContent = (draftBlogCountRes.count || 0) + (draftInsightsCountRes.count || 0);

        setStats({
          totalBlogPosts,
          totalInsights,
          totalAuthors,
          totalTags,
          totalMediaFiles,
          publishedContent,
          draftContent
        });
      } catch (e) {
        console.warn('Failed to load dashboard stats:', e);
      }
    };
    loadStats();
  }, []);

  const quickActions = [
    {
      title: 'Navigation Management',
      description: 'Manage three-layer navigation structure',
      icon: Navigation,
      href: '/admin/navigation',
      color: 'bg-blue-500'
    },
    {
      title: 'Blog Posts',
      description: 'Create and manage blog content',
      icon: FileText,
      href: '/admin/blogs',
      color: 'bg-green-500'
    },
    {
      title: 'Insights Content',
      description: 'Manage thought leadership content',
      icon: Lightbulb,
      href: '/admin/insights',
      color: 'bg-purple-500'
    },
    // {
    //   title: 'Authors',
    //   description: 'Manage content authors',
    //   icon: Users,
    //   href: '/admin/authors',
    //   color: 'bg-orange-500'
    // },
    // {
    //   title: 'Categories & Tags',
    //   description: 'Organize content with categories and tags',
    //   icon: Tag,
    //   href: '/admin/categories',
    //   color: 'bg-red-500'
    // },
    // {
    //   title: 'Media Library',
    //   description: 'Manage images and media files',
    //   icon: Image,
    //   href: '/admin/media',
    //   color: 'bg-indigo-500'
    // }
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your Quanta website content and navigation</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Blog Posts</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalBlogPosts}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Insights</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalInsights}</p>
              </div>
              <Lightbulb className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Published Content</p>
                <p className="text-2xl font-bold text-gray-900">{stats.publishedContent}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Draft Content</p>
                <p className="text-2xl font-bold text-gray-900">{stats.draftContent}</p>
              </div>
              <Settings className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link to={action.href}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${action.color}`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                    <Plus className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentBlogs />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentInsights />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const RecentBlogs: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => {
    const run = async () => {
      if (!hasSupabaseEnv) return;
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id,title,created_at,published_at,status,author_id')
        .order('updated_at', { ascending: false })
        .limit(5);
      if (error) { console.warn('Recent blogs load failed:', error.message); return; }
      let authorMap = new Map<number, string>();
      const authorIds = Array.from(new Set((data||[]).map(r => r.author_id).filter(Boolean)));
      if (authorIds.length > 0) {
        const { data: authors } = await supabase.from('authors').select('id,name').in('id', authorIds as number[]);
        authorMap = new Map((authors||[]).map((a:any)=>[a.id,a.name]));
      }
      setRows((data||[]).map(r => ({
        id: r.id,
        title: r.title,
        status: r.status,
        author: authorMap.get(r.author_id as number) || 'Unknown',
        timeLabel: r.published_at ? new Date(r.published_at).toLocaleString() : new Date(r.created_at).toLocaleString()
      })));
    };
    run();
  }, []);
  return (
    <div className="space-y-4">
      {rows.map(row => (
        <div key={row.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">{row.title}</p>
            <p className="text-sm text-gray-600">By {row.author} • {row.timeLabel}</p>
          </div>
          <span className={`px-2 py-1 text-xs rounded-full ${row.status === 'published' ? 'bg-green-100 text-green-800' : row.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>{row.status.charAt(0).toUpperCase()+row.status.slice(1)}</span>
        </div>
      ))}
      {rows.length === 0 && (
        <div className="text-sm text-gray-500">No recent blog posts.</div>
      )}
    </div>
  );
};

const RecentInsights: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => {
    const run = async () => {
      if (!hasSupabaseEnv) return;
      const { data, error } = await supabase
        .from('insights_content')
        .select('id,title,content_type,created_at,published_at,status,author_id')
        .order('updated_at', { ascending: false })
        .limit(5);
      if (error) { console.warn('Recent insights load failed:', error.message); return; }
      let authorMap = new Map<number, string>();
      const authorIds = Array.from(new Set((data||[]).map(r => r.author_id).filter(Boolean)));
      if (authorIds.length > 0) {
        const { data: authors } = await supabase.from('authors').select('id,name').in('id', authorIds as number[]);
        authorMap = new Map((authors||[]).map((a:any)=>[a.id,a.name]));
      }
      setRows((data||[]).map(r => ({
        id: r.id,
        title: r.title,
        status: r.status,
        contentType: r.content_type,
        author: authorMap.get(r.author_id as number) || 'Unknown',
        timeLabel: r.published_at ? new Date(r.published_at).toLocaleString() : new Date(r.created_at).toLocaleString()
      })));
    };
    run();
  }, []);
  return (
    <div className="space-y-4">
      {rows.map(row => (
        <div key={row.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">{row.title}</p>
            <p className="text-sm text-gray-600">{row.contentType ? (row.contentType.charAt(0).toUpperCase()+row.contentType.slice(1).replace('_',' ')) : 'Content'} • By {row.author} • {row.timeLabel}</p>
          </div>
          <span className={`px-2 py-1 text-xs rounded-full ${row.status === 'published' ? 'bg-purple-100 text-purple-800' : row.status === 'draft' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>{row.status.charAt(0).toUpperCase()+row.status.slice(1)}</span>
        </div>
      ))}
      {rows.length === 0 && (
        <div className="text-sm text-gray-500">No recent insights.</div>
      )}
    </div>
  );
};

export default AdminDashboard;
