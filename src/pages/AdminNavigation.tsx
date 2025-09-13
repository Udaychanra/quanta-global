import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  ChevronDown, 
  ChevronRight,
  FileText,
  Lightbulb,
  Settings,
  Users,
  Tag
} from 'lucide-react';

interface NavigationCategory {
  id: number;
  label: string;
  slug: string;
  url: string;
  sort_order: number;
  is_active: boolean;
}

interface NavigationSubcategory {
  id: number;
  category_id: number;
  label: string;
  slug: string;
  url: string;
  sort_order: number;
  is_active: boolean;
}

interface NavigationThirdLevel {
  id: number;
  subcategory_id: number;
  label: string;
  slug: string;
  url: string;
  sort_order: number;
  is_active: boolean;
}

interface NavigationItem {
  id: number;
  third_level_id: number;
  label: string;
  slug: string;
  url: string;
  sort_order: number;
  is_active: boolean;
}

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author_id: number;
  category_id: number;
  subcategory_id: number;
  third_level_id: number;
  navigation_item_id: number;
  is_published: boolean;
  published_at: string;
  created_at: string;
}

interface Insight {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author_id: number;
  insight_type: string;
  insight_category: string;
  is_published: boolean;
  published_at: string;
  created_at: string;
}

interface Author {
  id: number;
  name: string;
  email: string;
  bio: string;
  is_active: boolean;
}

interface Tag {
  id: number;
  name: string;
  description: string;
  color: string;
}

const AdminNavigation = () => {
  const [activeTab, setActiveTab] = useState('navigation');
  const [categories, setCategories] = useState<NavigationCategory[]>([]);
  const [subcategories, setSubcategories] = useState<NavigationSubcategory[]>([]);
  const [thirdLevel, setThirdLevel] = useState<NavigationThirdLevel[]>([]);
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  
  const [editingCategory, setEditingCategory] = useState<NavigationCategory | null>(null);
  const [editingSubcategory, setEditingSubcategory] = useState<NavigationSubcategory | null>(null);
  const [editingThirdLevel, setEditingThirdLevel] = useState<NavigationThirdLevel | null>(null);
  const [editingItem, setEditingItem] = useState<NavigationItem | null>(null);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [editingInsight, setEditingInsight] = useState<Insight | null>(null);
  
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());
  const [expandedSubcategories, setExpandedSubcategories] = useState<Set<number>>(new Set());
  const [expandedThirdLevel, setExpandedThirdLevel] = useState<Set<number>>(new Set());

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [
        { data: categoriesData },
        { data: subcategoriesData },
        { data: thirdLevelData },
        { data: itemsData },
        { data: blogsData },
        { data: insightsData },
        { data: authorsData },
        { data: tagsData }
      ] = await Promise.all([
        supabase.from('navigation_categories').select('*').order('sort_order'),
        supabase.from('navigation_subcategories').select('*').order('sort_order'),
        supabase.from('navigation_third_level').select('*').order('sort_order'),
        supabase.from('navigation_items').select('*').order('sort_order'),
        supabase.from('blogs').select('*').order('created_at', { ascending: false }),
        supabase.from('insights').select('*').order('created_at', { ascending: false }),
        supabase.from('authors').select('*').order('name'),
        supabase.from('tags').select('*').order('name')
      ]);

      setCategories(categoriesData || []);
      setSubcategories(subcategoriesData || []);
      setThirdLevel(thirdLevelData || []);
      setNavigationItems(itemsData || []);
      setBlogs(blogsData || []);
      setInsights(insightsData || []);
      setAuthors(authorsData || []);
      setTags(tagsData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleExpanded = (type: 'category' | 'subcategory' | 'thirdLevel', id: number) => {
    if (type === 'category') {
      const newExpanded = new Set(expandedCategories);
      if (newExpanded.has(id)) {
        newExpanded.delete(id);
      } else {
        newExpanded.add(id);
      }
      setExpandedCategories(newExpanded);
    } else if (type === 'subcategory') {
      const newExpanded = new Set(expandedSubcategories);
      if (newExpanded.has(id)) {
        newExpanded.delete(id);
      } else {
        newExpanded.add(id);
      }
      setExpandedSubcategories(newExpanded);
    } else if (type === 'thirdLevel') {
      const newExpanded = new Set(expandedThirdLevel);
      if (newExpanded.has(id)) {
        newExpanded.delete(id);
      } else {
        newExpanded.add(id);
      }
      setExpandedThirdLevel(newExpanded);
    }
  };

  const saveCategory = async (category: NavigationCategory) => {
    try {
      if (category.id) {
        await supabase.from('navigation_categories').update(category).eq('id', category.id);
      } else {
        await supabase.from('navigation_categories').insert(category);
      }
      setEditingCategory(null);
      fetchData();
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  const saveSubcategory = async (subcategory: NavigationSubcategory) => {
    try {
      if (subcategory.id) {
        await supabase.from('navigation_subcategories').update(subcategory).eq('id', subcategory.id);
      } else {
        await supabase.from('navigation_subcategories').insert(subcategory);
      }
      setEditingSubcategory(null);
      fetchData();
    } catch (error) {
      console.error('Error saving subcategory:', error);
    }
  };

  const saveThirdLevel = async (thirdLevel: NavigationThirdLevel) => {
    try {
      if (thirdLevel.id) {
        await supabase.from('navigation_third_level').update(thirdLevel).eq('id', thirdLevel.id);
      } else {
        await supabase.from('navigation_third_level').insert(thirdLevel);
      }
      setEditingThirdLevel(null);
      fetchData();
    } catch (error) {
      console.error('Error saving third level:', error);
    }
  };

  const saveNavigationItem = async (item: NavigationItem) => {
    try {
      if (item.id) {
        await supabase.from('navigation_items').update(item).eq('id', item.id);
      } else {
        await supabase.from('navigation_items').insert(item);
      }
      setEditingItem(null);
      fetchData();
    } catch (error) {
      console.error('Error saving navigation item:', error);
    }
  };

  const saveBlog = async (blog: Blog) => {
    try {
      if (blog.id) {
        await supabase.from('blogs').update(blog).eq('id', blog.id);
      } else {
        await supabase.from('blogs').insert(blog);
      }
      setEditingBlog(null);
      fetchData();
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  const saveInsight = async (insight: Insight) => {
    try {
      if (insight.id) {
        await supabase.from('insights').update(insight).eq('id', insight.id);
      } else {
        await supabase.from('insights').insert(insight);
      }
      setEditingInsight(null);
      fetchData();
    } catch (error) {
      console.error('Error saving insight:', error);
    }
  };

  const deleteItem = async (table: string, id: number) => {
    try {
      await supabase.from(table).delete().eq('id', id);
      fetchData();
    } catch (error) {
      console.error(`Error deleting ${table}:`, error);
    }
  };

  const getCategorySubcategories = (categoryId: number) => {
    return subcategories.filter(sub => sub.category_id === categoryId);
  };

  const getSubcategoryThirdLevel = (subcategoryId: number) => {
    return thirdLevel.filter(third => third.subcategory_id === subcategoryId);
  };

  const getThirdLevelItems = (thirdLevelId: number) => {
    return navigationItems.filter(item => item.third_level_id === thirdLevelId);
  };

  const getCategoryName = (categoryId: number) => {
    return categories.find(cat => cat.id === categoryId)?.label || 'Unknown';
  };

  const getSubcategoryName = (subcategoryId: number) => {
    return subcategories.find(sub => sub.id === subcategoryId)?.label || 'Unknown';
  };

  const getThirdLevelName = (thirdLevelId: number) => {
    return thirdLevel.find(third => third.id === thirdLevelId)?.label || 'Unknown';
  };

  const getAuthorName = (authorId: number) => {
    return authors.find(author => author.id === authorId)?.name || 'Unknown';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Quanta Global Admin</h1>
          <p className="text-gray-600 mt-2">Manage navigation, blogs, and insights</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="navigation" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Navigation
            </TabsTrigger>
            <TabsTrigger value="blogs" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Blogs
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Insights
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Content
            </TabsTrigger>
          </TabsList>

          <TabsContent value="navigation" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Navigation Structure</CardTitle>
                  <Button onClick={() => setEditingCategory({} as NavigationCategory)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Category
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categories.map((category) => (
                    <div key={category.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleExpanded('category', category.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            {expandedCategories.has(category.id) ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </button>
                          <Badge variant={category.is_active ? "default" : "secondary"}>
                            {category.label}
                          </Badge>
                          <span className="text-sm text-gray-500">({category.slug})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingCategory(category)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingSubcategory({ category_id: category.id } as NavigationSubcategory)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {expandedCategories.has(category.id) && (
                        <div className="mt-4 ml-6 space-y-3">
                          {getCategorySubcategories(category.id).map((subcategory) => (
                            <div key={subcategory.id} className="border-l-2 border-gray-200 pl-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => toggleExpanded('subcategory', subcategory.id)}
                                    className="p-1 hover:bg-gray-100 rounded"
                                  >
                                    {expandedSubcategories.has(subcategory.id) ? (
                                      <ChevronDown className="h-4 w-4" />
                                    ) : (
                                      <ChevronRight className="h-4 w-4" />
                                    )}
                                  </button>
                                  <Badge variant={subcategory.is_active ? "default" : "secondary"}>
                                    {subcategory.label}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setEditingSubcategory(subcategory)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setEditingThirdLevel({ subcategory_id: subcategory.id } as NavigationThirdLevel)}
                                  >
                                    <Plus className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>

                              {expandedSubcategories.has(subcategory.id) && (
                                <div className="mt-3 ml-6 space-y-2">
                                  {getSubcategoryThirdLevel(subcategory.id).map((third) => (
                                    <div key={third.id} className="border-l-2 border-gray-200 pl-4">
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                          <button
                                            onClick={() => toggleExpanded('thirdLevel', third.id)}
                                            className="p-1 hover:bg-gray-100 rounded"
                                          >
                                            {expandedThirdLevel.has(third.id) ? (
                                              <ChevronDown className="h-4 w-4" />
                                            ) : (
                                              <ChevronRight className="h-4 w-4" />
                                            )}
                                          </button>
                                          <Badge variant={third.is_active ? "default" : "secondary"}>
                                            {third.label}
                                          </Badge>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setEditingThirdLevel(third)}
                                          >
                                            <Edit className="h-4 w-4" />
                                          </Button>
                                          <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setEditingItem({ third_level_id: third.id } as NavigationItem)}
                                          >
                                            <Plus className="h-4 w-4" />
                                          </Button>
                                        </div>
                                      </div>

                                      {expandedThirdLevel.has(third.id) && (
                                        <div className="mt-2 ml-6 space-y-1">
                                          {getThirdLevelItems(third.id).map((item) => (
                                            <div key={item.id} className="flex items-center justify-between py-1">
                                              <Badge variant={item.is_active ? "outline" : "secondary"}>
                                                {item.label}
                                              </Badge>
                                              <div className="flex items-center gap-2">
                                                <Button
                                                  variant="outline"
                                                  size="sm"
                                                  onClick={() => setEditingItem(item)}
                                                >
                                                  <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                  variant="outline"
                                                  size="sm"
                                                  onClick={() => deleteItem('navigation_items', item.id)}
                                                >
                                                  <Trash2 className="h-4 w-4" />
                                                </Button>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blogs" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Blog Management</CardTitle>
                  <Button onClick={() => setEditingBlog({} as Blog)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Blog
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogs.map((blog) => (
                    <div key={blog.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{blog.title}</h3>
                          <p className="text-sm text-gray-600">{blog.excerpt}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant={blog.is_published ? "default" : "secondary"}>
                              {blog.is_published ? "Published" : "Draft"}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              By {getAuthorName(blog.author_id)}
                            </span>
                            <span className="text-sm text-gray-500">
                              {new Date(blog.created_at).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingBlog(blog)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteItem('blogs', blog.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Insights Management</CardTitle>
                  <Button onClick={() => setEditingInsight({} as Insight)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Insight
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {insights.map((insight) => (
                    <div key={insight.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{insight.title}</h3>
                          <p className="text-sm text-gray-600">{insight.excerpt}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant={insight.is_published ? "default" : "secondary"}>
                              {insight.is_published ? "Published" : "Draft"}
                            </Badge>
                            <Badge variant="outline">{insight.insight_type}</Badge>
                            <span className="text-sm text-gray-500">
                              By {getAuthorName(insight.author_id)}
                            </span>
                            <span className="text-sm text-gray-500">
                              {new Date(insight.created_at).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingInsight(insight)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteItem('insights', insight.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Authors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {authors.map((author) => (
                      <div key={author.id} className="flex items-center justify-between p-2 border rounded">
                        <div>
                          <p className="font-medium">{author.name}</p>
                          <p className="text-sm text-gray-600">{author.email}</p>
                        </div>
                        <Badge variant={author.is_active ? "default" : "secondary"}>
                          {author.is_active ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tags.map((tag) => (
                      <div key={tag.id} className="flex items-center justify-between p-2 border rounded">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: tag.color }}
                          />
                          <span>{tag.name}</span>
                        </div>
                        <span className="text-sm text-gray-600">{tag.description}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Edit Modals */}
        {editingCategory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Edit Category</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Label"
                  value={editingCategory.label || ''}
                  onChange={(e) => setEditingCategory({...editingCategory, label: e.target.value})}
                />
                <Input
                  placeholder="Slug"
                  value={editingCategory.slug || ''}
                  onChange={(e) => setEditingCategory({...editingCategory, slug: e.target.value})}
                />
                <Input
                  placeholder="URL"
                  value={editingCategory.url || ''}
                  onChange={(e) => setEditingCategory({...editingCategory, url: e.target.value})}
                />
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={editingCategory.is_active}
                    onChange={(e) => setEditingCategory({...editingCategory, is_active: e.target.checked})}
                  />
                  <label>Active</label>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => saveCategory(editingCategory)}>Save</Button>
                  <Button variant="outline" onClick={() => setEditingCategory(null)}>Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Similar modals for other editing states */}
        {/* Add more edit modals for subcategories, third level, items, blogs, and insights */}
      </div>
    </div>
  );
};

export default AdminNavigation;


