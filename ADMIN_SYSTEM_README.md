# Quanta Website Admin System

## Overview

This is a comprehensive admin management system for the Quanta website, featuring a three-layer navigation structure with blogs and insights management capabilities.

## Database Schema

### Core Tables

#### Navigation Structure
- **`navigation_sections`** - Main navigation sections (Who we are, What we do, Blogs, Insights, etc.)
- **`navigation_categories`** - Second level categories (Offerings, Enablers, Products, Industries, etc.)
- **`navigation_items`** - Third level specific items (SAP, Finance, Supply Chain, etc.)

#### Content Management
- **`authors`** - Content authors with profiles and social links
- **`content_categories`** - Content organization categories
- **`content_tags`** - Content tagging system
- **`media_files`** - Media file management

#### Content Tables
- **`blog_posts`** - Blog post content with full metadata
- **`insights_content`** - Thought leadership content with multiple types
- **`blog_post_tags`** - Many-to-many relationship for blog tags
- **`insights_content_tags`** - Many-to-many relationship for insights tags

### Key Features

#### Three-Layer Navigation
1. **Sections** - Main navigation areas (Who we are, What we do, Blogs, Insights)
2. **Categories** - Sub-sections within each main area (Offerings, Enablers, Products, Industries)
3. **Items** - Specific offerings or content areas (SAP, Finance, Supply Chain, Cloud)

#### Content Types
- **Blog Posts** - Regular blog content with author, category, and navigation mapping
- **Insights Content** - Multiple content types:
  - Articles
  - Videos
  - Podcasts
  - Surveys
  - Explainers
  - Case Studies
  - Quarterly publications
  - Live Events

## Admin Management Pages

### 1. Dashboard (`/admin`)
- Overview statistics
- Quick actions for all management areas
- Recent activity feed
- Content status overview

### 2. Navigation Management (`/admin/navigation`)
- **Three-layer structure management**
- Add/Edit/Delete sections, categories, and items
- Drag-and-drop reordering
- Active/Inactive status management
- URL and slug management

### 3. Blog Management (`/admin/blogs`)
- **Complete blog post management**
- Rich text editor for content
- Author assignment
- Category and navigation mapping
- Tag management
- SEO metadata
- Publishing workflow (Draft → Published → Archived)
- Featured and pinned post management

### 4. Insights Management (`/admin/insights`)
- **Thought leadership content management**
- Multiple content type support
- Video and podcast URL management
- External link management
- Duration tracking for media content
- Trending and featured content flags
- Advanced filtering by content type

### 5. Additional Management Pages (To be implemented)
- **Authors Management** (`/admin/authors`)
- **Categories & Tags** (`/admin/categories`)
- **Media Library** (`/admin/media`)

## Database Setup

### 1. Run the SQL Schema
```bash
# Execute the complete database schema
psql -d your_database -f database_schema.sql
```

### 2. Sample Data
The schema includes sample data for:
- Navigation structure (sections, categories, items)
- Sample authors
- Content categories and tags
- Sample blog posts and insights content

### 3. Database Views
The system includes optimized views for:
- **`navigation_structure`** - Complete navigation hierarchy
- **`published_blog_posts`** - Published blog posts with navigation info
- **`published_insights_content`** - Published insights with navigation info

## Features

### Navigation Management
- ✅ Three-layer hierarchical structure
- ✅ Drag-and-drop reordering
- ✅ Active/Inactive status management
- ✅ URL and slug generation
- ✅ Real-time preview

### Blog Management
- ✅ Rich content editor
- ✅ Author assignment
- ✅ Category and navigation mapping
- ✅ Tag system
- ✅ SEO metadata
- ✅ Publishing workflow
- ✅ Featured and pinned posts
- ✅ Search and filtering

### Insights Management
- ✅ Multiple content types
- ✅ Media URL management
- ✅ External link support
- ✅ Duration tracking
- ✅ Trending and featured flags
- ✅ Advanced filtering
- ✅ Content type icons

### Content Organization
- ✅ Hierarchical categories
- ✅ Tag system
- ✅ Navigation mapping
- ✅ Author profiles
- ✅ Media library integration

## API Integration

### Required API Endpoints

#### Navigation
```
GET /api/navigation/structure
POST /api/navigation/sections
PUT /api/navigation/sections/:id
DELETE /api/navigation/sections/:id
POST /api/navigation/categories
PUT /api/navigation/categories/:id
DELETE /api/navigation/categories/:id
POST /api/navigation/items
PUT /api/navigation/items/:id
DELETE /api/navigation/items/:id
```

#### Blog Posts
```
GET /api/blog-posts
POST /api/blog-posts
PUT /api/blog-posts/:id
DELETE /api/blog-posts/:id
GET /api/blog-posts/:id
```

#### Insights Content
```
GET /api/insights
POST /api/insights
PUT /api/insights/:id
DELETE /api/insights/:id
GET /api/insights/:id
```

#### Authors
```
GET /api/authors
POST /api/authors
PUT /api/authors/:id
DELETE /api/authors/:id
```

#### Categories & Tags
```
GET /api/categories
POST /api/categories
PUT /api/categories/:id
DELETE /api/categories/:id
GET /api/tags
POST /api/tags
PUT /api/tags/:id
DELETE /api/tags/:id
```

## File Structure

```
src/
├── pages/
│   └── admin/
│       ├── Dashboard.tsx
│       ├── NavigationManagement.tsx
│       ├── BlogManagement.tsx
│       └── InsightsManagement.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── textarea.tsx
│       └── badge.tsx
└── lib/
    └── supabaseClient.ts
```

## Usage

### 1. Access Admin Dashboard
Navigate to `/admin` to access the main dashboard.

### 2. Manage Navigation
- Go to `/admin/navigation`
- Expand sections to see categories
- Expand categories to see items
- Use the "+" buttons to add new elements
- Use edit/delete buttons to modify existing elements

### 3. Manage Blog Posts
- Go to `/admin/blogs`
- Click "Create Blog Post" to add new content
- Use search and filters to find existing posts
- Edit, preview, or delete posts as needed

### 4. Manage Insights
- Go to `/admin/insights`
- Click "Create Insight" to add new content
- Select content type (article, video, podcast, etc.)
- Add media URLs and external links as needed
- Use filters to organize content by type and status

## Security Considerations

### Authentication
- Implement proper authentication for admin access
- Use role-based access control (RBAC)
- Secure API endpoints with JWT tokens

### Data Validation
- Validate all form inputs
- Sanitize content to prevent XSS
- Implement CSRF protection

### File Upload Security
- Validate file types and sizes
- Store files in secure locations
- Use CDN for media delivery

## Performance Optimization

### Database
- All tables include proper indexes
- Views for common queries
- Efficient foreign key relationships

### Frontend
- Lazy loading for large content lists
- Debounced search functionality
- Optimized re-renders with React.memo

### Caching
- Implement Redis caching for navigation structure
- Cache published content
- Use CDN for static assets

## Future Enhancements

### Planned Features
- **Rich Text Editor** - WYSIWYG editor for content
- **Media Library** - File upload and management
- **Workflow Management** - Content approval workflows
- **Analytics Dashboard** - Content performance metrics
- **SEO Tools** - Automated SEO optimization
- **Multi-language Support** - Internationalization
- **API Documentation** - Swagger/OpenAPI docs
- **Bulk Operations** - Mass edit and delete
- **Content Scheduling** - Future publish dates
- **Version Control** - Content versioning

### Technical Improvements
- **Real-time Updates** - WebSocket integration
- **Offline Support** - PWA capabilities
- **Advanced Search** - Full-text search with Elasticsearch
- **Image Optimization** - Automatic image processing
- **Content Import/Export** - CSV/JSON data exchange

## Support

For technical support or questions about the admin system, please refer to the development team or create an issue in the project repository.

## License

This admin system is part of the Quanta website project and follows the same licensing terms.
