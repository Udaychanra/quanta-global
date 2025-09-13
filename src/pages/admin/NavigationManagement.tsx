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
  ChevronDown, 
  ChevronRight,
  GripVertical,
  Eye,
  EyeOff
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { supabase, hasSupabaseEnv } from '@/lib/supabaseClient';

interface NavigationSection {
  id: number;
  label: string;
  slug: string;
  url: string;
  display_order: number;
  is_active: boolean;
  categories?: NavigationCategory[];
}

interface NavigationCategory {
  id: number;
  section_id: number;
  label: string;
  slug: string;
  url: string;
  display_order: number;
  is_active: boolean;
  items?: NavigationItem[];
}

interface NavigationItem {
  id: number;
  category_id: number;
  label: string;
  slug: string;
  url: string;
  description?: string;
  display_order: number;
  is_active: boolean;
  subitems?: NavigationSubItem[];
}

interface NavigationSubItem {
  id: number;
  item_id: number;
  label: string;
  slug: string;
  url: string;
  description?: string;
  display_order: number;
  is_active: boolean;
}

const NavigationManagement = () => {
  const [sections, setSections] = useState<NavigationSection[]>([]);
  const [selectedSection, setSelectedSection] = useState<NavigationSection | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<NavigationCategory | null>(null);
  const [isSectionDialogOpen, setIsSectionDialogOpen] = useState(false);
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);
  const [isItemDialogOpen, setIsItemDialogOpen] = useState(false);
  const [isSubItemDialogOpen, setIsSubItemDialogOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<NavigationSection | null>(null);
  const [editingCategory, setEditingCategory] = useState<NavigationCategory | null>(null);
  const [editingItem, setEditingItem] = useState<NavigationItem | null>(null);
  const [editingSubItem, setEditingSubItem] = useState<NavigationSubItem | null>(null);
  const [selectedItem, setSelectedItem] = useState<NavigationItem | null>(null);

  const slugify = (s: string) => s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  // Form states
  const [sectionForm, setSectionForm] = useState({
    label: '',
    slug: '',
    url: '',
    display_order: 0,
    is_active: true
  });

  const [categoryForm, setCategoryForm] = useState({
    section_id: 0,
    label: '',
    slug: '',
    url: '',
    display_order: 0,
    is_active: true
  });

  const [itemForm, setItemForm] = useState({
    category_id: 0,
    label: '',
    slug: '',
    url: '',
    description: '',
    display_order: 0,
    is_active: true
  });

  const [subItemForm, setSubItemForm] = useState({
    item_id: 0,
    label: '',
    slug: '',
    url: '',
    description: '',
    display_order: 0,
    is_active: true
  });

  useEffect(() => {
    const fetchNavigation = async () => {
      if (!hasSupabaseEnv) {
        return;
      }
      const { data, error } = await supabase
        .from('navigation_structure')
        .select('*')
        .order('section_id', { ascending: true });
      if (error) {
        console.warn('Failed to load navigation_structure:', error.message);
        return;
      }
      setSections(buildSections(data || []));
    };
    fetchNavigation();
  }, []);

  const buildSections = (rows: any[]): NavigationSection[] => {
    const sectionMap = new Map<number, NavigationSection>();
    rows.forEach((row: any) => {
      if (!sectionMap.has(row.section_id)) {
        sectionMap.set(row.section_id, {
          id: row.section_id,
          label: row.section_label,
          slug: row.section_slug,
          url: row.section_url,
          display_order: 0,
          is_active: true,
          categories: []
        });
      }
      const section = sectionMap.get(row.section_id)!;
      if (row.category_id) {
        let category = section.categories!.find(c => c.id === row.category_id);
        if (!category) {
          category = {
            id: row.category_id,
            section_id: row.section_id,
            label: row.category_label,
            slug: row.category_slug,
            url: row.category_url,
            display_order: 0,
            is_active: true,
            items: []
          };
          section.categories!.push(category);
        }
        if (row.item_id) {
          const exists = category.items!.some(i => i.id === row.item_id);
          if (!exists) {
            category.items!.push({
              id: row.item_id,
              category_id: row.category_id,
              label: row.item_label,
              slug: row.item_slug,
              url: row.item_url,
              description: row.item_description ?? undefined,
              display_order: 0,
              is_active: true,
              subitems: []
            });
          }
          const itemRef = category.items!.find(i => i.id === row.item_id)!;
          if (row.subitem_id) {
            const subExists = itemRef.subitems!.some(si => si.id === row.subitem_id);
            if (!subExists) {
              itemRef.subitems!.push({
                id: row.subitem_id,
                item_id: row.item_id,
                label: row.subitem_label,
                slug: row.subitem_slug,
                url: row.subitem_url,
                description: row.subitem_description ?? undefined,
                display_order: 0,
                is_active: true
              });
            }
          }
        }
      }
    });
    return Array.from(sectionMap.values());
  };

  const refreshNavigation = async () => {
    if (!hasSupabaseEnv) return;
    const { data } = await supabase.from('navigation_structure').select('*');
    setSections(buildSections(data || []));
  };

  const handleSectionSubmit = async () => {
    if (!hasSupabaseEnv) {
      setIsSectionDialogOpen(false);
      return;
    }
    if (editingSection) {
      const { error } = await supabase
        .from('navigation_sections')
        .update({
          label: sectionForm.label,
          slug: sectionForm.slug,
          url: sectionForm.url,
          display_order: sectionForm.display_order,
          is_active: sectionForm.is_active
        })
        .eq('id', editingSection.id);
      if (error) console.warn('Update section failed:', error.message);
    } else {
      const { error } = await supabase.from('navigation_sections').insert([
        {
          label: sectionForm.label,
          slug: sectionForm.slug,
          url: sectionForm.url,
          display_order: sectionForm.display_order,
          is_active: sectionForm.is_active
        }
      ]);
      if (error) console.warn('Create section failed:', error.message);
    }
    setIsSectionDialogOpen(false);
    setEditingSection(null);
    setSectionForm({ label: '', slug: '', url: '', display_order: 0, is_active: true });
    await refreshNavigation();
  };

  const handleCategorySubmit = async () => {
    if (!hasSupabaseEnv || !selectedSection) {
      setIsCategoryDialogOpen(false);
      return;
    }
    if (editingCategory) {
      const { error } = await supabase
        .from('navigation_categories')
        .update({
          label: categoryForm.label,
          slug: categoryForm.slug,
          url: categoryForm.url,
          display_order: categoryForm.display_order,
          is_active: categoryForm.is_active
        })
        .eq('id', editingCategory.id);
      if (error) console.warn('Update category failed:', error.message);
    } else {
      const { error } = await supabase.from('navigation_categories').insert([
        {
          section_id: selectedSection.id,
          label: categoryForm.label,
          slug: categoryForm.slug,
          url: categoryForm.url,
          display_order: categoryForm.display_order,
          is_active: categoryForm.is_active
        }
      ]);
      if (error) console.warn('Create category failed:', error.message);
    }
    setIsCategoryDialogOpen(false);
    setEditingCategory(null);
    setCategoryForm({ section_id: 0, label: '', slug: '', url: '', display_order: 0, is_active: true });
    await refreshNavigation();
  };

  const handleItemSubmit = async () => {
    if (!hasSupabaseEnv || !selectedCategory) {
      setIsItemDialogOpen(false);
      return;
    }
    if (editingItem) {
      const { error } = await supabase
        .from('navigation_items')
        .update({
          label: itemForm.label,
          slug: itemForm.slug,
          url: itemForm.url,
          description: itemForm.description,
          display_order: itemForm.display_order,
          is_active: itemForm.is_active
        })
        .eq('id', editingItem.id);
      if (error) console.warn('Update item failed:', error.message);
    } else {
      const { error } = await supabase.from('navigation_items').insert([
        {
          category_id: selectedCategory.id,
          label: itemForm.label,
          slug: itemForm.slug,
          url: itemForm.url,
          description: itemForm.description,
          display_order: itemForm.display_order,
          is_active: itemForm.is_active
        }
      ]);
      if (error) console.warn('Create item failed:', error.message);
    }
    setIsItemDialogOpen(false);
    setEditingItem(null);
    setItemForm({ category_id: 0, label: '', slug: '', url: '', description: '', display_order: 0, is_active: true });
    await refreshNavigation();
  };

  const toggleSection = (section: NavigationSection) => {
    setSelectedSection(selectedSection?.id === section.id ? null : section);
  };

  const toggleCategory = (category: NavigationCategory) => {
    setSelectedCategory(selectedCategory?.id === category.id ? null : category);
  };

  const startEditSection = (section: NavigationSection) => {
    setEditingSection(section);
    setSectionForm({
      label: section.label,
      slug: section.slug,
      url: section.url,
      display_order: section.display_order,
      is_active: section.is_active
    });
    setIsSectionDialogOpen(true);
  };

  const deleteSection = async (section: NavigationSection) => {
    if (!hasSupabaseEnv) return;
    const { error } = await supabase.from('navigation_sections').delete().eq('id', section.id);
    if (error) console.warn('Delete section failed:', error.message);
    await refreshNavigation();
  };

  const startEditCategory = (category: NavigationCategory) => {
    setEditingCategory(category);
    setCategoryForm({
      section_id: category.section_id,
      label: category.label,
      slug: category.slug,
      url: category.url,
      display_order: category.display_order,
      is_active: category.is_active
    });
    setIsCategoryDialogOpen(true);
  };

  const deleteCategory = async (category: NavigationCategory) => {
    if (!hasSupabaseEnv) return;
    const { error } = await supabase.from('navigation_categories').delete().eq('id', category.id);
    if (error) console.warn('Delete category failed:', error.message);
    await refreshNavigation();
  };

  const startEditItem = (item: NavigationItem) => {
    setEditingItem(item);
    setItemForm({
      category_id: item.category_id,
      label: item.label,
      slug: item.slug,
      url: item.url,
      description: item.description || '',
      display_order: item.display_order,
      is_active: item.is_active
    });
    setIsItemDialogOpen(true);
  };

  const startEditSubItem = (subItem: NavigationSubItem) => {
    setEditingSubItem(subItem);
    setSubItemForm({
      item_id: subItem.item_id,
      label: subItem.label,
      slug: subItem.slug,
      url: subItem.url,
      description: subItem.description || '',
      display_order: subItem.display_order,
      is_active: subItem.is_active
    });
    setIsSubItemDialogOpen(true);
  };

  const deleteItem = async (item: NavigationItem) => {
    if (!hasSupabaseEnv) return;
    const { error } = await supabase.from('navigation_items').delete().eq('id', item.id);
    if (error) console.warn('Delete item failed:', error.message);
    await refreshNavigation();
  };

  const deleteSubItem = async (subItem: NavigationSubItem) => {
    if (!hasSupabaseEnv) return;
    const { error } = await supabase.from('navigation_subitems').delete().eq('id', subItem.id);
    if (error) console.warn('Delete subitem failed:', error.message);
    await refreshNavigation();
  };

  const handleSubItemSubmit = async () => {
    if (!hasSupabaseEnv || (!selectedItem && !editingSubItem)) {
      setIsSubItemDialogOpen(false);
      return;
    }
    if (editingSubItem) {
      const { error } = await supabase
        .from('navigation_subitems')
        .update({
          label: subItemForm.label,
          slug: subItemForm.slug,
          url: subItemForm.url,
          description: subItemForm.description,
          display_order: subItemForm.display_order,
          is_active: subItemForm.is_active
        })
        .eq('id', editingSubItem.id);
      if (error) console.warn('Update subitem failed:', error.message);
    } else if (selectedItem) {
      const { error } = await supabase.from('navigation_subitems').insert([
        {
          item_id: selectedItem.id,
          label: subItemForm.label,
          slug: subItemForm.slug,
          url: subItemForm.url,
          description: subItemForm.description,
          display_order: subItemForm.display_order,
          is_active: subItemForm.is_active
        }
      ]);
      if (error) console.warn('Create subitem failed:', error.message);
    }
    setIsSubItemDialogOpen(false);
    setEditingSubItem(null);
    setSelectedItem(null);
    setSubItemForm({ item_id: 0, label: '', slug: '', url: '', description: '', display_order: 0, is_active: true });
    await refreshNavigation();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Navigation Management</h1>
            <p className="text-gray-600 mt-2">Manage your three-layer navigation structure</p>
          </div>
          <Dialog open={isSectionDialogOpen} onOpenChange={setIsSectionDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Section
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Navigation Section</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="label" className="text-right">Label</Label>
                  <Input
                    id="label"
                    value={sectionForm.label}
                    onChange={(e) => {
                      const label = e.target.value;
                      const slug = slugify(label);
                      setSectionForm({ ...sectionForm, label, slug, url: `/${slug}` });
                    }}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="slug" className="text-right">Slug</Label>
                  <Input
                    id="slug"
                    value={sectionForm.slug}
                    onChange={(e) => setSectionForm({ ...sectionForm, slug: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="url" className="text-right">URL</Label>
                  <Input
                    id="url"
                    value={sectionForm.url}
                    onChange={(e) => setSectionForm({ ...sectionForm, url: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="order" className="text-right">Order</Label>
                  <Input
                    id="order"
                    type="number"
                    value={sectionForm.display_order}
                    onChange={(e) => setSectionForm({ ...sectionForm, display_order: parseInt(e.target.value) })}
                    className="col-span-3"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsSectionDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSectionSubmit}>Save Section</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Navigation Structure */}
      <div className="space-y-4">
        {sections.map((section) => (
          <Card key={section.id}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection(section)}
                  >
                    {selectedSection?.id === section.id ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                  <CardTitle className="text-lg">{section.label}</CardTitle>
                  <Badge variant={section.is_active ? "default" : "secondary"}>
                    {section.is_active ? "Active" : "Inactive"}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={() => startEditSection(section)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => deleteSection(section)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Dialog open={isCategoryDialogOpen} onOpenChange={setIsCategoryDialogOpen}>
                    <DialogTrigger asChild>
                      <Button size="sm" onClick={() => setSelectedSection(section)}>
                        <Plus className="h-4 w-4 mr-1" />
                        Add Category
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Add Category to {section.label}</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="cat-label" className="text-right">Label</Label>
                          <Input
                            id="cat-label"
                            value={categoryForm.label}
                            onChange={(e) => {
                              const label = e.target.value;
                              const slug = slugify(label);
                              const secSlug = (selectedSection?.slug || section.slug);
                              setCategoryForm({ ...categoryForm, label, slug, url: `/${secSlug}/${slug}` });
                            }}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="cat-slug" className="text-right">Slug</Label>
                          <Input
                            id="cat-slug"
                            value={categoryForm.slug}
                            onChange={(e) => setCategoryForm({ ...categoryForm, slug: e.target.value })}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="cat-url" className="text-right">URL</Label>
                          <Input
                            id="cat-url"
                            value={categoryForm.url}
                            onChange={(e) => setCategoryForm({ ...categoryForm, url: e.target.value })}
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={() => setIsCategoryDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleCategorySubmit}>Save Category</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardHeader>
            
            {selectedSection?.id === section.id && section.categories && (
              <CardContent className="pt-0">
                <div className="space-y-4 ml-8">
                  {section.categories.map((category) => (
                    <Card key={category.id} className="border-l-4 border-l-blue-500">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleCategory(category)}
                            >
                              {selectedCategory?.id === category.id ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                            </Button>
                            <CardTitle className="text-md">{category.label}</CardTitle>
                            <Badge variant={category.is_active ? "default" : "secondary"}>
                              {category.is_active ? "Active" : "Inactive"}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" onClick={() => startEditCategory(category)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => deleteCategory(category)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                            <Dialog open={isItemDialogOpen} onOpenChange={setIsItemDialogOpen}>
                              <DialogTrigger asChild>
                                <Button size="sm" onClick={() => setSelectedCategory(category)}>
                                  <Plus className="h-4 w-4 mr-1" />
                                  Add Item
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle>Add Item to {category.label}</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="item-label" className="text-right">Label</Label>
                                    <Input
                                      id="item-label"
                                      value={itemForm.label}
                                      onChange={(e) => {
                                        const label = e.target.value;
                                        const slug = slugify(label);
                                        const secSlug = (selectedSection?.slug || section.slug);
                                        const catSlug = (selectedCategory?.slug || category.slug);
                                        setItemForm({ ...itemForm, label, slug, url: `/${secSlug}/${catSlug}/${slug}` });
                                      }}
                                      className="col-span-3"
                                    />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="item-slug" className="text-right">Slug</Label>
                                    <Input
                                      id="item-slug"
                                      value={itemForm.slug}
                                      onChange={(e) => setItemForm({ ...itemForm, slug: e.target.value })}
                                      className="col-span-3"
                                    />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="item-url" className="text-right">URL</Label>
                                    <Input
                                      id="item-url"
                                      value={itemForm.url}
                                      onChange={(e) => setItemForm({ ...itemForm, url: e.target.value })}
                                      className="col-span-3"
                                    />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="item-description" className="text-right">Description</Label>
                                    <Textarea
                                      id="item-description"
                                      value={itemForm.description}
                                      onChange={(e) => setItemForm({ ...itemForm, description: e.target.value })}
                                      className="col-span-3"
                                    />
                                  </div>
                                </div>
                                <div className="flex justify-end space-x-2">
                                  <Button variant="outline" onClick={() => setIsItemDialogOpen(false)}>
                                    Cancel
                                  </Button>
                                  <Button onClick={handleItemSubmit}>Save Item</Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </CardHeader>
                      
                      {selectedCategory?.id === category.id && category.items && (
                        <CardContent className="pt-0">
                          <div className="space-y-2 ml-8">
                            {category.items.map((item) => (
                              <div key={item.id} className="p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-3">
                                    <GripVertical className="h-4 w-4 text-gray-400" />
                                    <div>
                                      <p className="font-medium text-gray-900">{item.label}</p>
                                      {item.description && (
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                      )}
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Badge variant={item.is_active ? "default" : "secondary"}>
                                      {item.is_active ? "Active" : "Inactive"}
                                    </Badge>
                                    <Dialog open={isSubItemDialogOpen} onOpenChange={setIsSubItemDialogOpen}>
                                      <DialogTrigger asChild>
                                        <Button size="sm" onClick={() => { setSelectedItem(item); setSelectedCategory(category); setSelectedSection(section); setEditingSubItem(null); }}>
                                          <Plus className="h-4 w-4 mr-1" />
                                          Add Subitem
                                        </Button>
                                      </DialogTrigger>
                                      <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                          <DialogTitle>Add Subitem to {item.label}</DialogTitle>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                          <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="subitem-label" className="text-right">Label</Label>
                                            <Input
                                              id="subitem-label"
                                              value={subItemForm.label}
                                              onChange={(e) => {
                                                const label = e.target.value;
                                                const slug = slugify(label);
                                                const secSlug = (selectedSection?.slug || section.slug);
                                                const catSlug = (selectedCategory?.slug || category.slug);
                                                const itemSlug = (selectedItem?.slug || item.slug);
                                                setSubItemForm({ ...subItemForm, label, slug, url: `/${secSlug}/${catSlug}/${itemSlug}/${slug}` });
                                              }}
                                              className="col-span-3"
                                            />
                                          </div>
                                          <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="subitem-slug" className="text-right">Slug</Label>
                                            <Input
                                              id="subitem-slug"
                                              value={subItemForm.slug}
                                              onChange={(e) => setSubItemForm({ ...subItemForm, slug: e.target.value })}
                                              className="col-span-3"
                                            />
                                          </div>
                                          <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="subitem-url" className="text-right">URL</Label>
                                            <Input
                                              id="subitem-url"
                                              value={subItemForm.url}
                                              onChange={(e) => setSubItemForm({ ...subItemForm, url: e.target.value })}
                                              className="col-span-3"
                                            />
                                          </div>
                                          <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="subitem-description" className="text-right">Description</Label>
                                            <Textarea
                                              id="subitem-description"
                                              value={subItemForm.description}
                                              onChange={(e) => setSubItemForm({ ...subItemForm, description: e.target.value })}
                                              className="col-span-3"
                                            />
                                          </div>
                                        </div>
                                        <div className="flex justify-end space-x-2">
                                          <Button variant="outline" onClick={() => setIsSubItemDialogOpen(false)}>
                                            Cancel
                                          </Button>
                                          <Button onClick={handleSubItemSubmit}>Save Subitem</Button>
                                        </div>
                                      </DialogContent>
                                    </Dialog>
                                    <Button variant="outline" size="sm" onClick={() => startEditItem(item)}>
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="sm" onClick={() => deleteItem(item)}>
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                {item.subitems && item.subitems.length > 0 && (
                                  <div className="mt-3 ml-8 space-y-2">
                                    {item.subitems.map((si) => (
                                      <div key={si.id} className="flex items-center justify-between p-2 bg-white rounded-md border">
                                        <div>
                                          <p className="text-sm font-medium text-gray-900">{si.label}</p>
                                          {si.description && (
                                            <p className="text-xs text-gray-600">{si.description}</p>
                                          )}
                                        </div>
                                        <div className="flex items-center space-x-2">
                                          <Badge variant={si.is_active ? "default" : "secondary"}>
                                            {si.is_active ? "Active" : "Inactive"}
                                          </Badge>
                                          <Button variant="outline" size="sm" onClick={() => startEditSubItem(si)}>
                                            <Edit className="h-4 w-4" />
                                          </Button>
                                          <Button variant="outline" size="sm" onClick={() => deleteSubItem(si)}>
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
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
      {/* Edit Subitem Dialog */}
      <Dialog open={isSubItemDialogOpen && !!editingSubItem} onOpenChange={setIsSubItemDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Subitem</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="subitem-label-edit" className="text-right">Label</Label>
              <Input
                id="subitem-label-edit"
                value={subItemForm.label}
                onChange={(e) => setSubItemForm({ ...subItemForm, label: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="subitem-slug-edit" className="text-right">Slug</Label>
              <Input
                id="subitem-slug-edit"
                value={subItemForm.slug}
                onChange={(e) => setSubItemForm({ ...subItemForm, slug: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="subitem-url-edit" className="text-right">URL</Label>
              <Input
                id="subitem-url-edit"
                value={subItemForm.url}
                onChange={(e) => setSubItemForm({ ...subItemForm, url: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="subitem-description-edit" className="text-right">Description</Label>
              <Textarea
                id="subitem-description-edit"
                value={subItemForm.description}
                onChange={(e) => setSubItemForm({ ...subItemForm, description: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsSubItemDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubItemSubmit}>Save</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavigationManagement;
