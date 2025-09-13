-- =====================================================
-- QUANTA WEBSITE DATABASE SCHEMA
-- Three-Layer Navigation Structure with Blogs & Insights
-- =====================================================

-- Drop existing tables if they exist
DROP TABLE IF EXISTS blog_posts CASCADE;
DROP TABLE IF EXISTS insights_content CASCADE;
DROP TABLE IF EXISTS navigation_subitems CASCADE;
DROP TABLE IF EXISTS navigation_items CASCADE;
DROP TABLE IF EXISTS navigation_categories CASCADE;
DROP TABLE IF EXISTS navigation_sections CASCADE;
DROP TABLE IF EXISTS content_categories CASCADE;
DROP TABLE IF EXISTS content_tags CASCADE;
DROP TABLE IF EXISTS blog_post_tags CASCADE;
DROP TABLE IF EXISTS insights_content_tags CASCADE;
DROP TABLE IF EXISTS authors CASCADE;
DROP TABLE IF EXISTS media_files CASCADE;

-- =====================================================
-- NAVIGATION STRUCTURE TABLES
-- =====================================================

-- Main navigation sections (Who we are, What we do, Blogs, Insights, etc.)
CREATE TABLE navigation_sections (
    id SERIAL PRIMARY KEY,
    label VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    url VARCHAR(255) NOT NULL,
    display_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Navigation categories (Offerings, Enablers, Products, Industries, etc.)
CREATE TABLE navigation_categories (
    id SERIAL PRIMARY KEY,
    section_id INTEGER REFERENCES navigation_sections(id) ON DELETE CASCADE,
    label VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    url VARCHAR(255) NOT NULL,
    display_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(section_id, slug)
);

-- Navigation items (third level - specific offerings, products, etc.)
CREATE TABLE navigation_items (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES navigation_categories(id) ON DELETE CASCADE,
    label VARCHAR(200) NOT NULL,
    slug VARCHAR(200) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    display_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(category_id, slug)
);

-- Navigation subitems (fourth level - nested under items)
CREATE TABLE navigation_subitems (
    id SERIAL PRIMARY KEY,
    item_id INTEGER REFERENCES navigation_items(id) ON DELETE CASCADE,
    label VARCHAR(200) NOT NULL,
    slug VARCHAR(200) NOT NULL,
    url VARCHAR(500) NOT NULL,
    description TEXT,
    display_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(item_id, slug)
);

-- =====================================================
-- CONTENT MANAGEMENT TABLES
-- =====================================================

-- Authors table
CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    bio TEXT,
    avatar_url VARCHAR(255),
    linkedin_url VARCHAR(255),
    twitter_url VARCHAR(255),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Content categories for blogs and insights
CREATE TABLE content_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    parent_id INTEGER REFERENCES content_categories(id) ON DELETE CASCADE,
    display_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Content tags
CREATE TABLE content_tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    slug VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Media files
CREATE TABLE media_files (
    id SERIAL PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    original_filename VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_size INTEGER NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    alt_text VARCHAR(255),
    caption TEXT,
    uploaded_by INTEGER REFERENCES authors(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- BLOG POSTS TABLE
-- =====================================================

CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image_id INTEGER REFERENCES media_files(id),
    author_id INTEGER REFERENCES authors(id) NOT NULL,
    category_id INTEGER REFERENCES content_categories(id),
    navigation_item_id INTEGER REFERENCES navigation_items(id),
    meta_title VARCHAR(255),
    meta_description TEXT,
    meta_keywords VARCHAR(500),
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    published_at TIMESTAMP,
    view_count INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT false,
    is_pinned BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog post tags relationship
CREATE TABLE blog_post_tags (
    blog_post_id INTEGER REFERENCES blog_posts(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES content_tags(id) ON DELETE CASCADE,
    PRIMARY KEY (blog_post_id, tag_id)
);

-- =====================================================
-- INSIGHTS CONTENT TABLE
-- =====================================================

CREATE TABLE insights_content (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    content_type VARCHAR(50) NOT NULL CHECK (content_type IN ('article', 'video', 'podcast', 'survey', 'explainer', 'case_study', 'quarterly', 'live_event')),
    featured_image_id INTEGER REFERENCES media_files(id),
    author_id INTEGER REFERENCES authors(id),
    category_id INTEGER REFERENCES content_categories(id),
    navigation_item_id INTEGER REFERENCES navigation_items(id),
    meta_title VARCHAR(255),
    meta_description TEXT,
    meta_keywords VARCHAR(500),
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    published_at TIMESTAMP,
    view_count INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT false,
    is_trending BOOLEAN DEFAULT false,
    external_url VARCHAR(500),
    video_url VARCHAR(500),
    podcast_url VARCHAR(500),
    duration_minutes INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insights content tags relationship
CREATE TABLE insights_content_tags (
    insights_content_id INTEGER REFERENCES insights_content(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES content_tags(id) ON DELETE CASCADE,
    PRIMARY KEY (insights_content_id, tag_id)
);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================

-- Navigation indexes
CREATE INDEX idx_navigation_sections_order ON navigation_sections(display_order);
CREATE INDEX idx_navigation_sections_active ON navigation_sections(is_active);
CREATE INDEX idx_navigation_categories_section ON navigation_categories(section_id);
CREATE INDEX idx_navigation_categories_order ON navigation_categories(display_order);
CREATE INDEX idx_navigation_categories_active ON navigation_categories(is_active);
CREATE INDEX idx_navigation_items_category ON navigation_items(category_id);
CREATE INDEX idx_navigation_items_order ON navigation_items(display_order);
CREATE INDEX idx_navigation_items_active ON navigation_items(is_active);

-- Content indexes
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_published ON blog_posts(published_at);
CREATE INDEX idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX idx_blog_posts_navigation ON blog_posts(navigation_item_id);
CREATE INDEX idx_blog_posts_featured ON blog_posts(is_featured);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);

CREATE INDEX idx_insights_content_type ON insights_content(content_type);
CREATE INDEX idx_insights_content_status ON insights_content(status);
CREATE INDEX idx_insights_content_published ON insights_content(published_at);
CREATE INDEX idx_insights_content_author ON insights_content(author_id);
CREATE INDEX idx_insights_content_category ON insights_content(category_id);
CREATE INDEX idx_insights_content_navigation ON insights_content(navigation_item_id);
CREATE INDEX idx_insights_content_featured ON insights_content(is_featured);
CREATE INDEX idx_insights_content_trending ON insights_content(is_trending);
CREATE INDEX idx_insights_content_slug ON insights_content(slug);

-- Tag indexes
CREATE INDEX idx_blog_post_tags_post ON blog_post_tags(blog_post_id);
CREATE INDEX idx_blog_post_tags_tag ON blog_post_tags(tag_id);
CREATE INDEX idx_insights_content_tags_content ON insights_content_tags(insights_content_id);
CREATE INDEX idx_insights_content_tags_tag ON insights_content_tags(tag_id);

-- =====================================================
-- SAMPLE DATA INSERTION
-- =====================================================

-- Insert navigation sections
INSERT INTO navigation_sections (label, slug, url, display_order) VALUES
('Who we are', 'who-we-are', '/who-we-are', 1),
('What we do', 'what-we-do', '/what-we-do', 2),
('Blogs', 'blogs', '/blogs', 3),
('Insights', 'insights', '/insights', 4),
('Careers', 'careers', '/careers', 5),
('Contact Us', 'contact-us', '/contact-us', 6);

-- Insert navigation categories for "What we do"
INSERT INTO navigation_categories (section_id, label, slug, url, display_order) VALUES
(2, 'Offerings', 'offerings', '/offerings', 1),
(2, 'Enablers', 'enablers', '/enablers', 2),
(2, 'Products', 'products', '/products', 3),
(2, 'Industries', 'industries', '/industries', 4);

-- Insert navigation categories for "Blogs"
INSERT INTO navigation_categories (section_id, label, slug, url, display_order) VALUES
(3, 'Offerings', 'offerings', '/blogs/offerings', 1),
(3, 'Enablers', 'enablers', '/blogs/enablers', 2),
(3, 'Products', 'products', '/blogs/products', 3),
(3, 'Industries', 'industries', '/blogs/industries', 4);

-- Insert navigation categories for "Insights"
INSERT INTO navigation_categories (section_id, label, slug, url, display_order) VALUES
(4, 'Trending Topics', 'trending', '/insights/trending', 1),
(4, 'Explore', 'explore', '/insights/explore', 2),
(4, 'Featured', 'featured', '/insights/featured', 3);

-- Insert navigation items for Offerings (What we do)
INSERT INTO navigation_items (category_id, label, slug, url, display_order) VALUES
-- SAP Offerings
(1, 'SAP', 'sap', '/offerings/sap', 1),
-- Finance Offerings
(1, 'Finance', 'finance', '/offerings/finance', 2),
-- Supply Chain Offerings
(1, 'Supply Chain', 'supply-chain', '/offerings/scm', 3),
-- Cloud Offerings
(1, 'Cloud', 'cloud', '/offerings/cloud', 4);

-- Insert navigation items for Enablers (What we do)
INSERT INTO navigation_items (category_id, label, slug, url, display_order) VALUES
-- Enterprise Navigation Office
(2, 'Enterprise Navigation Office', 'eno', '/enablers/eno', 1),
-- Program Planning and Execution
(2, 'Program Planning and Execution', 'program', '/enablers/program', 2),
-- Partner Ecosystem Strategy
(2, 'Partner Ecosystem Strategy', 'partners', '/enablers/partners', 3),
-- AI and Data for the Intelligent Enterprise
(2, 'AI and Data for the Intelligent Enterprise', 'ai-data', '/enablers/ai-data', 4);

-- Insert navigation items for Products (What we do)
INSERT INTO navigation_items (category_id, label, slug, url, display_order) VALUES
(3, 'SARAH AI', 'sarah-ai', '/products/sarah-ai', 1);

-- Insert navigation items for Industries (What we do)
INSERT INTO navigation_items (category_id, label, slug, url, display_order) VALUES
(4, 'Financial Services and Insurance', 'fsi', '/industries/fsi', 1),
(4, 'Technology, Media, and Telecom', 'tmt', '/industries/tmt', 2),
(4, 'Life Sciences and Healthcare', 'health', '/industries/health', 3),
(4, 'Manufacturing and Industrial', 'manufacturing', '/industries/manufacturing', 4),
(4, 'Consumer Goods and Retail', 'retail', '/industries/retail', 5),
(4, 'Energy and Utilities', 'energy', '/industries/energy', 6),
(4, 'Automotive and Transportation', 'auto', '/industries/auto', 7),
(4, 'Government and Public Services', 'public-sector', '/industries/public-sector', 8);

-- Insert sample authors
INSERT INTO authors (name, email, bio) VALUES
('John Smith', 'john.smith@quanta.com', 'Senior Technology Consultant with 15+ years of experience in SAP transformations'),
('Sarah Johnson', 'sarah.johnson@quanta.com', 'Finance Transformation Expert specializing in digital finance solutions'),
('Mike Chen', 'mike.chen@quanta.com', 'Supply Chain and Operations leader with expertise in digital transformation');

-- Insert sample content categories
INSERT INTO content_categories (name, slug, description) VALUES
('Technology', 'technology', 'Technology-related content'),
('Finance', 'finance', 'Finance and accounting content'),
('Supply Chain', 'supply-chain', 'Supply chain and operations content'),
('AI & Automation', 'ai-automation', 'Artificial intelligence and automation content'),
('Digital Transformation', 'digital-transformation', 'Digital transformation content');

-- Insert sample tags
INSERT INTO content_tags (name, slug, description) VALUES
('SAP', 'sap', 'SAP-related content'),
('S/4HANA', 's4hana', 'S/4HANA transformation content'),
('Cloud', 'cloud', 'Cloud computing content'),
('AI', 'ai', 'Artificial intelligence content'),
('Digital Finance', 'digital-finance', 'Digital finance content'),
('Supply Chain', 'supply-chain', 'Supply chain content'),
('Transformation', 'transformation', 'Business transformation content')
ON CONFLICT DO NOTHING;

-- =====================================================
-- TRIGGERS FOR UPDATED_AT TIMESTAMPS
-- =====================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for all tables with updated_at
CREATE TRIGGER update_navigation_sections_updated_at BEFORE UPDATE ON navigation_sections FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_navigation_categories_updated_at BEFORE UPDATE ON navigation_categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_navigation_items_updated_at BEFORE UPDATE ON navigation_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_navigation_subitems_updated_at BEFORE UPDATE ON navigation_subitems FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_authors_updated_at BEFORE UPDATE ON authors FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_content_categories_updated_at BEFORE UPDATE ON content_categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_content_tags_updated_at BEFORE UPDATE ON content_tags FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_insights_content_updated_at BEFORE UPDATE ON insights_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- VIEWS FOR COMMON QUERIES
-- =====================================================

-- View for complete navigation structure
CREATE VIEW navigation_structure AS
SELECT 
    ns.id as section_id,
    ns.label as section_label,
    ns.slug as section_slug,
    ns.url as section_url,
    nc.id as category_id,
    nc.label as category_label,
    nc.slug as category_slug,
    nc.url as category_url,
    ni.id as item_id,
    ni.label as item_label,
    ni.slug as item_slug,
    ni.url as item_url,
    ni.description as item_description,
    nsi.id as subitem_id,
    nsi.label as subitem_label,
    nsi.slug as subitem_slug,
    nsi.url as subitem_url,
    nsi.description as subitem_description
FROM navigation_sections ns
LEFT JOIN navigation_categories nc ON ns.id = nc.section_id AND nc.is_active = true
LEFT JOIN navigation_items ni ON nc.id = ni.category_id AND ni.is_active = true
LEFT JOIN navigation_subitems nsi ON ni.id = nsi.item_id AND nsi.is_active = true
WHERE ns.is_active = true
ORDER BY ns.display_order, nc.display_order, ni.display_order, nsi.display_order;

-- View for published blog posts with navigation info
CREATE VIEW published_blog_posts AS
SELECT 
    bp.*,
    a.name as author_name,
    cc.name as category_name,
    ns.label as section_label,
    nc.label as category_label,
    ni.label as item_label
FROM blog_posts bp
LEFT JOIN authors a ON bp.author_id = a.id
LEFT JOIN content_categories cc ON bp.category_id = cc.id
LEFT JOIN navigation_items ni ON bp.navigation_item_id = ni.id
LEFT JOIN navigation_categories nc ON ni.category_id = nc.id
LEFT JOIN navigation_sections ns ON nc.section_id = ns.id
WHERE bp.status = 'published' AND bp.published_at IS NOT NULL;

-- View for published insights content
CREATE VIEW published_insights_content AS
SELECT 
    ic.*,
    a.name as author_name,
    cc.name as category_name,
    ns.label as section_label,
    nc.label as category_label,
    ni.label as item_label
FROM insights_content ic
LEFT JOIN authors a ON ic.author_id = a.id
LEFT JOIN content_categories cc ON ic.category_id = cc.id
LEFT JOIN navigation_items ni ON ic.navigation_item_id = ni.id
LEFT JOIN navigation_categories nc ON ni.category_id = nc.id
LEFT JOIN navigation_sections ns ON nc.section_id = ns.id
WHERE ic.status = 'published' AND ic.published_at IS NOT NULL;

COMMIT;
