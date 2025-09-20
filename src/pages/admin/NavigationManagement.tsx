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
      console.log('Fetching navigation, hasSupabaseEnv:', hasSupabaseEnv);
      if (!hasSupabaseEnv) {
        // If no Supabase, create default sections for management
        console.log('Creating default sections for management');
        const defaultSections: NavigationSection[] = [
          {
            id: 1,
            label: 'Who we are',
            slug: 'who-we-are',
            url: '#',
            display_order: 1,
            is_active: true,
            categories: [
              {
                id: 1,
                section_id: 1,
                label: 'Our Story',
                slug: 'our-story',
                url: '/our-story',
                display_order: 1,
                is_active: true,
                items: []
              },
              {
                id: 2,
                section_id: 1,
                label: 'Enterprise Orchestration (EO)',
                slug: 'enterprise-orchestration',
                url: '/enterprise-orchestration',
                display_order: 2,
                is_active: true,
                items: []
              },
              {
                id: 3,
                section_id: 1,
                label: 'Leadership',
                slug: 'leadership',
                url: '/leadership',
                display_order: 3,
                is_active: true,
                items: []
              }
            ]
          },
          {
            id: 2,
            label: 'What we do',
            slug: 'what-we-do',
            url: '#',
            display_order: 2,
            is_active: true,
            categories: [
              {
                id: 4,
                section_id: 2,
                label: 'Offerings',
                slug: 'offerings',
                url: '/offerings',
                display_order: 1,
                is_active: true,
                items: []
              },
              {
                id: 5,
                section_id: 2,
                label: 'Enablers',
                slug: 'enablers',
                url: '/enablers',
                display_order: 2,
                is_active: true,
                items: []
              },
              {
                id: 6,
                section_id: 2,
                label: 'Industries',
                slug: 'industries',
                url: '/industries',
                display_order: 3,
                is_active: true,
                items: []
              }
            ]
          }
        ];
        console.log('Setting default sections:', defaultSections);
        setSections(defaultSections);
        return;
      }
      console.log('Loading from Supabase database');
      const { data, error } = await supabase
        .from('navigation_structure')
        .select('*')
        .order('section_id', { ascending: true });
      if (error) {
        console.warn('Failed to load navigation_structure:', error.message);
        return;
      }
      console.log('Database data loaded:', data);
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
      // For default sections, update local state
      if (editingSection) {
        setSections(prev => prev.map(section => {
          if (section.id === editingSection.id) {
            return {
              ...section,
              label: sectionForm.label,
              slug: sectionForm.slug,
              url: sectionForm.url,
              display_order: sectionForm.display_order,
              is_active: sectionForm.is_active
            };
          }
          return section;
        }));
      } else {
        // Add new section
        const newSection: NavigationSection = {
          id: Date.now(), // Simple ID generation for demo
          label: sectionForm.label,
          slug: sectionForm.slug,
          url: sectionForm.url,
          display_order: sectionForm.display_order,
          is_active: sectionForm.is_active,
          categories: []
        };
        setSections(prev => [...prev, newSection]);
      }
      setIsSectionDialogOpen(false);
      setEditingSection(null);
      setSectionForm({ label: '', slug: '', url: '', display_order: 0, is_active: true });
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
      if (!hasSupabaseEnv && selectedSection) {
        // For default categories, update local state
        if (editingCategory) {
          setSections(prev => prev.map(section => {
            if (section.id === selectedSection.id) {
              return {
                ...section,
                categories: section.categories?.map(category => {
                  if (category.id === editingCategory.id) {
                    return {
                      ...category,
                      label: categoryForm.label,
                      slug: categoryForm.slug,
                      url: categoryForm.url,
                      display_order: categoryForm.display_order,
                      is_active: categoryForm.is_active
                    };
                  }
                  return category;
                }) || []
              };
            }
            return section;
          }));
        } else {
          // Add new category
          const newCategory: NavigationCategory = {
            id: Date.now(), // Simple ID generation for demo
            section_id: selectedSection.id,
            label: categoryForm.label,
            slug: categoryForm.slug,
            url: categoryForm.url,
            display_order: categoryForm.display_order,
            is_active: categoryForm.is_active,
            items: []
          };
          setSections(prev => prev.map(section => {
            if (section.id === selectedSection.id) {
              return {
                ...section,
                categories: [...(section.categories || []), newCategory]
              };
            }
            return section;
          }));
        }
        setIsCategoryDialogOpen(false);
        setEditingCategory(null);
        setCategoryForm({ section_id: 0, label: '', slug: '', url: '', display_order: 0, is_active: true });
        return;
      }
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
    console.log('HANDLE ITEM SUBMIT CALLED!');
    console.log('Editing item:', editingItem);
    console.log('Selected category:', selectedCategory);
    console.log('Item form:', itemForm);
    
    if (editingItem) {
      console.log('Updating existing item');
      alert(`Updating item: ${itemForm.label}`);
      
      // Update existing item in local state
      setSections(prev => prev.map(section => {
        return {
          ...section,
          categories: section.categories?.map(category => {
            return {
              ...category,
              items: category.items?.map(item => {
                if (item.id === editingItem.id) {
                  return {
                    ...item,
                    label: itemForm.label,
                    slug: itemForm.slug,
                    url: itemForm.url,
                    description: itemForm.description,
                    display_order: itemForm.display_order,
                    is_active: itemForm.is_active
                  };
                }
                return item;
              }) || []
            };
          }) || []
        };
      }));
      
      alert('Item updated in UI!');
    } else {
      console.log('Creating new item');
      alert(`Creating new item: ${itemForm.label}`);
      
      // Add new item to local state
      const newItem: NavigationItem = {
        id: Date.now(),
        category_id: selectedCategory?.id || 0,
        label: itemForm.label,
        slug: itemForm.slug,
        url: itemForm.url,
        description: itemForm.description,
        display_order: itemForm.display_order,
        is_active: itemForm.is_active,
        subitems: []
      };
      
      setSections(prev => prev.map(section => {
        return {
          ...section,
          categories: section.categories?.map(category => {
            if (category.id === selectedCategory?.id) {
              return {
                ...category,
                items: [...(category.items || []), newItem]
              };
            }
            return category;
          }) || []
        };
      }));
      
      alert('Item added to UI!');
    }
    
    setIsItemDialogOpen(false);
    setEditingItem(null);
    setItemForm({ category_id: 0, label: '', slug: '', url: '', description: '', display_order: 0, is_active: true });
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
    console.log('DELETE SECTION FUNCTION CALLED!');
    console.log('Section:', section.label);
    
    const confirmed = window.confirm(`Are you sure you want to delete the section "${section.label}"? This will permanently remove it from the database.`);
    if (!confirmed) return;
    
    // Remove from UI immediately for better UX
    setSections(prev => prev.filter(s => s.id !== section.id));
    console.log('Section removed from UI');
    
    // If no Supabase, we're done
    if (!hasSupabaseEnv) {
      console.log('No Supabase - deletion complete');
      alert('Section deleted from UI (no database connection)');
      return;
    }
    
    // Delete from database
    try {
      console.log('Deleting section from database...');
      console.log('Section ID to delete:', section.id);
      
      // First, let's check if the section exists in the database
      const { data: existingSection, error: checkError } = await supabase
        .from('navigation_sections')
        .select('*')
        .eq('id', section.id)
        .single();
      
      console.log('Existing section check:', existingSection, 'Check error:', checkError);
      
      if (checkError && checkError.code !== 'PGRST116') {
        console.error('Error checking existing section:', checkError);
        alert(`Error checking section: ${checkError.message}`);
        setSections(prev => [...prev, section]);
        return;
      }
      
      if (!existingSection) {
        console.log('Section not found in database, treating as success');
        alert('Section was not found in database (may have been deleted already)');
        return;
      }
      
      // Now try to delete
      const { error, count } = await supabase
        .from('navigation_sections')
        .delete({ count: 'exact' })
        .eq('id', section.id);
      
      console.log('Delete result:', { error, count });
      
      if (error) {
        console.error('Database delete failed:', error);
        console.error('Error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        // Restore to UI if database delete failed
        setSections(prev => [...prev, section]);
        alert(`Failed to delete from database: ${error.message}\nError Code: ${error.code}\nDetails: ${error.details || 'No details available'}`);
      } else {
        console.log(`Section deleted from database successfully. Rows affected: ${count}`);
        alert(`Section deleted successfully from both UI and database! (${count} row(s) affected)`);
      }
    } catch (error) {
      console.error('Database delete error:', error);
      // Restore to UI if database delete failed
      setSections(prev => [...prev, section]);
      alert(`Database error: ${error}. Section restored to UI.`);
    }
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
    console.log('DELETE CATEGORY FUNCTION CALLED!');
    console.log('Category:', category.label);
    
    const confirmed = window.confirm(`Are you sure you want to delete the category "${category.label}"? This will permanently remove it from the database.`);
    if (!confirmed) return;
    
    // Remove from UI immediately for better UX
    setSections(prev => prev.map(section => {
      if (section.id === category.section_id) {
        return {
          ...section,
          categories: section.categories?.filter(c => c.id !== category.id) || []
        };
      }
      return section;
    }));
    console.log('Category removed from UI');
    
    // If no Supabase, we're done
    if (!hasSupabaseEnv) {
      console.log('No Supabase - deletion complete');
      alert('Category deleted from UI (no database connection)');
      return;
    }
    
    // Delete from database
    try {
      console.log('Deleting category from database...');
      const { error } = await supabase
        .from('navigation_categories')
        .delete()
        .eq('id', category.id);
      
      if (error) {
        console.error('Database delete failed:', error);
        // Restore to UI if database delete failed
        setSections(prev => prev.map(section => {
          if (section.id === category.section_id) {
            return {
              ...section,
              categories: [...(section.categories || []), category]
            };
          }
          return section;
        }));
        alert(`Failed to delete from database: ${error.message}. Category restored to UI.`);
      } else {
        console.log('Category deleted from database successfully');
        alert('Category deleted successfully from both UI and database!');
      }
    } catch (error) {
      console.error('Database delete error:', error);
      // Restore to UI if database delete failed
      setSections(prev => prev.map(section => {
        if (section.id === category.section_id) {
          return {
            ...section,
            categories: [...(section.categories || []), category]
          };
        }
        return section;
      }));
      alert(`Database error: ${error}. Category restored to UI.`);
    }
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
    console.log('DELETE ITEM FUNCTION CALLED!');
    console.log('Item:', item.label);
    
    const confirmed = window.confirm(`Are you sure you want to delete the item "${item.label}"? This will permanently remove it from the database.`);
    if (!confirmed) return;
    
    // Remove from UI immediately for better UX
    setSections(prev => prev.map(section => {
      return {
        ...section,
        categories: section.categories?.map(category => {
          if (category.id === item.category_id) {
            return {
              ...category,
              items: category.items?.filter(i => i.id !== item.id) || []
            };
          }
          return category;
        }) || []
      };
    }));
    console.log('Item removed from UI');
    
    // If no Supabase, we're done
    if (!hasSupabaseEnv) {
      console.log('No Supabase - deletion complete');
      alert('Item deleted from UI (no database connection)');
      return;
    }
    
    // Delete from database
    try {
      console.log('Deleting item from database...');
      const { error } = await supabase
        .from('navigation_items')
        .delete()
        .eq('id', item.id);
      
      if (error) {
        console.error('Database delete failed:', error);
        // Restore to UI if database delete failed
        setSections(prev => prev.map(section => {
          return {
            ...section,
            categories: section.categories?.map(category => {
              if (category.id === item.category_id) {
                return {
                  ...category,
                  items: [...(category.items || []), item]
                };
              }
              return category;
            }) || []
          };
        }));
        alert(`Failed to delete from database: ${error.message}. Item restored to UI.`);
      } else {
        console.log('Item deleted from database successfully');
        alert('Item deleted successfully from both UI and database!');
      }
    } catch (error) {
      console.error('Database delete error:', error);
      // Restore to UI if database delete failed
      setSections(prev => prev.map(section => {
        return {
          ...section,
          categories: section.categories?.map(category => {
            if (category.id === item.category_id) {
              return {
                ...category,
                items: [...(category.items || []), item]
              };
            }
            return category;
          }) || []
        };
      }));
      alert(`Database error: ${error}. Item restored to UI.`);
    }
  };

  const deleteSubItem = async (subItem: NavigationSubItem) => {
    console.log('DELETE SUBITEM FUNCTION CALLED!');
    console.log('SubItem:', subItem.label);
    
    const confirmed = window.confirm(`Are you sure you want to delete the subitem "${subItem.label}"? This will permanently remove it from the database.`);
    if (!confirmed) return;
    
    // Remove from UI immediately for better UX
    setSections(prev => prev.map(section => {
      return {
        ...section,
        categories: section.categories?.map(category => {
          return {
            ...category,
            items: category.items?.map(item => {
              if (item.id === subItem.item_id) {
                return {
                  ...item,
                  subitems: item.subitems?.filter(si => si.id !== subItem.id) || []
                };
              }
              return item;
            }) || []
          };
        }) || []
      };
    }));
    console.log('SubItem removed from UI');
    
    // If no Supabase, we're done
    if (!hasSupabaseEnv) {
      console.log('No Supabase - deletion complete');
      alert('SubItem deleted from UI (no database connection)');
      return;
    }
    
    // Delete from database
    try {
      console.log('Deleting subitem from database...');
      const { error } = await supabase
        .from('navigation_subitems')
        .delete()
        .eq('id', subItem.id);
      
      if (error) {
        console.error('Database delete failed:', error);
        // Restore to UI if database delete failed
        setSections(prev => prev.map(section => {
          return {
            ...section,
            categories: section.categories?.map(category => {
              return {
                ...category,
                items: category.items?.map(item => {
                  if (item.id === subItem.item_id) {
                    return {
                      ...item,
                      subitems: [...(item.subitems || []), subItem]
                    };
                  }
                  return item;
                }) || []
              };
            }) || []
          };
        }));
        alert(`Failed to delete from database: ${error.message}. SubItem restored to UI.`);
      } else {
        console.log('SubItem deleted from database successfully');
        alert('SubItem deleted successfully from both UI and database!');
      }
    } catch (error) {
      console.error('Database delete error:', error);
      // Restore to UI if database delete failed
      setSections(prev => prev.map(section => {
        return {
          ...section,
          categories: section.categories?.map(category => {
            return {
              ...category,
              items: category.items?.map(item => {
                if (item.id === subItem.item_id) {
                  return {
                    ...item,
                    subitems: [...(item.subitems || []), subItem]
                  };
                }
                return item;
              }) || []
            };
          }) || []
        };
      }));
      alert(`Database error: ${error}. SubItem restored to UI.`);
    }
  };

  const handleSubItemSubmit = async () => {
    console.log('HANDLE SUBITEM SUBMIT CALLED!');
    console.log('Editing subitem:', editingSubItem);
    console.log('Selected item:', selectedItem);
    console.log('SubItem form:', subItemForm);
    
    if (editingSubItem) {
      console.log('Updating existing subitem');
      alert(`Updating subitem: ${subItemForm.label}`);
      
      // Update existing subitem in local state
      setSections(prev => prev.map(section => {
        return {
          ...section,
          categories: section.categories?.map(category => {
            return {
              ...category,
              items: category.items?.map(item => {
                return {
                  ...item,
                  subitems: item.subitems?.map(subitem => {
                    if (subitem.id === editingSubItem.id) {
                      return {
                        ...subitem,
                        label: subItemForm.label,
                        slug: subItemForm.slug,
                        url: subItemForm.url,
                        description: subItemForm.description,
                        display_order: subItemForm.display_order,
                        is_active: subItemForm.is_active
                      };
                    }
                    return subitem;
                  }) || []
                };
              }) || []
            };
          }) || []
        };
      }));
      
      alert('SubItem updated in UI!');
    } else {
      console.log('Creating new subitem');
      alert(`Creating new subitem: ${subItemForm.label}`);
      
      // Add new subitem to local state
      const newSubItem: NavigationSubItem = {
        id: Date.now(),
        item_id: selectedItem?.id || 0,
        label: subItemForm.label,
        slug: subItemForm.slug,
        url: subItemForm.url,
        description: subItemForm.description,
        display_order: subItemForm.display_order,
        is_active: subItemForm.is_active
      };
      
      setSections(prev => prev.map(section => {
        return {
          ...section,
          categories: section.categories?.map(category => {
            return {
              ...category,
              items: category.items?.map(item => {
                if (item.id === selectedItem?.id) {
                  return {
                    ...item,
                    subitems: [...(item.subitems || []), newSubItem]
                  };
                }
                return item;
              }) || []
            };
          }) || []
        };
      }));
      
      alert('SubItem added to UI!');
    }
    
    setIsSubItemDialogOpen(false);
    setEditingSubItem(null);
    setSelectedItem(null);
    setSubItemForm({ item_id: 0, label: '', slug: '', url: '', description: '', display_order: 0, is_active: true });
  };

  console.log('NavigationManagement rendering, sections:', sections.length);

  // Simple test functions
  const testButtonClick = () => {
    console.log('TEST BUTTON CLICKED!');
    alert('Test button works!');
  };

  const testDelete = () => {
    console.log('TEST DELETE CLICKED!');
    alert('Test delete works!');
  };

  const testDatabasePermissions = async () => {
    console.log('=== TESTING DATABASE PERMISSIONS ===');
    
    if (!hasSupabaseEnv) {
      alert('No Supabase connection available');
      return;
    }

    try {
      // Test read permissions
      console.log('Testing read permissions...');
      const { data: readData, error: readError } = await supabase
        .from('navigation_sections')
        .select('*')
        .limit(1);
      
      console.log('Read test result:', { readData, readError });
      
      // Test insert permissions
      console.log('Testing insert permissions...');
      const testSection = {
        label: 'TEST_SECTION_' + Date.now(),
        slug: 'test-section-' + Date.now(),
        url: '/test-section',
        display_order: 999,
        is_active: true
      };
      
      const { data: insertData, error: insertError } = await supabase
        .from('navigation_sections')
        .insert([testSection])
        .select();
      
      console.log('Insert test result:', { insertData, insertError });
      
      if (insertData && insertData.length > 0) {
        const testId = insertData[0].id;
        
        // Test update permissions
        console.log('Testing update permissions...');
        const { error: updateError } = await supabase
          .from('navigation_sections')
          .update({ label: testSection.label + '_UPDATED' })
          .eq('id', testId);
        
        console.log('Update test result:', { updateError });
        
        // Test delete permissions
        console.log('Testing delete permissions...');
        const { error: deleteError, count } = await supabase
          .from('navigation_sections')
          .delete({ count: 'exact' })
          .eq('id', testId);
        
        console.log('Delete test result:', { deleteError, count });
        
        let result = `Database Permission Test Results:\n\n`;
        result += `READ: ${readError ? 'FAILED - ' + readError.message : 'SUCCESS'}\n`;
        result += `INSERT: ${insertError ? 'FAILED - ' + insertError.message : 'SUCCESS'}\n`;
        result += `UPDATE: ${updateError ? 'FAILED - ' + updateError.message : 'SUCCESS'}\n`;
        result += `DELETE: ${deleteError ? 'FAILED - ' + deleteError.message : `SUCCESS (${count} rows affected)`}\n`;
        
        alert(result);
      } else {
        alert(`Insert test failed: ${insertError?.message || 'No data returned'}`);
      }
      
    } catch (error) {
      console.error('Permission test error:', error);
      alert(`Permission test failed: ${error}`);
    }
    
    console.log('=== PERMISSION TEST COMPLETE ===');
  };

  return (
    <div className="container mx-auto p-6">
      {/* TEST SECTION */}
      <div className="mb-8 p-4 bg-yellow-100 border-2 border-yellow-400 rounded">
        <h2 className="text-xl font-bold mb-4">DEBUG TEST SECTION</h2>
        <div className="flex gap-4">
          <Button onClick={testButtonClick} className="bg-green-500 hover:bg-green-600">
            TEST CLICK
          </Button>
          <Button onClick={testDelete} className="bg-red-500 hover:bg-red-600">
            TEST DELETE
          </Button>
          <Button onClick={() => console.log('Sections:', sections)} className="bg-blue-500 hover:bg-blue-600">
            LOG SECTIONS
          </Button>
          <Button onClick={testDatabasePermissions} className="bg-purple-500 hover:bg-purple-600">
            TEST DB PERMISSIONS
          </Button>
        </div>
        <p className="mt-2 text-sm">If these buttons work, the issue is with the navigation buttons. If they don't work, there's a deeper problem.</p>
      </div>

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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => {
                      console.log('Edit button clicked for section:', section.label);
                      startEditSection(section);
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => {
                      console.log('DELETE BUTTON CLICKED FOR:', section.label);
                      deleteSection(section);
                    }}
                  >
                    DELETE
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
                            <Button 
                              variant="destructive" 
                              size="sm" 
                              onClick={() => {
                                console.log('DELETE CATEGORY CLICKED FOR:', category.label);
                                deleteCategory(category);
                              }}
                            >
                              DELETE
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
                                    <Button 
                                      variant="destructive" 
                                      size="sm" 
                                      onClick={() => {
                                        console.log('DELETE ITEM CLICKED FOR:', item.label);
                                        deleteItem(item);
                                      }}
                                    >
                                      DELETE
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
                                          <Button 
                                            variant="destructive" 
                                            size="sm" 
                                            onClick={() => {
                                              console.log('DELETE SUBITEM CLICKED FOR:', si.label);
                                              deleteSubItem(si);
                                            }}
                                          >
                                            DELETE
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
