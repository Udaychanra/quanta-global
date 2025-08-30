# Supabase Setup Guide

## Environment Variables

To enable blog and insight functionality, you need to set up the following environment variables:

1. Create a `.env` file in the root directory
2. Add the following variables:

```bash
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Database Schema

Create the following tables in your Supabase database:

### Blogs Table
```sql
CREATE TABLE blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image_url TEXT,
  slug TEXT NOT NULL UNIQUE,
  section TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access" ON blogs
  FOR SELECT USING (true);
```

### Insights Table
```sql
CREATE TABLE insights (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image_url TEXT,
  slug TEXT NOT NULL UNIQUE,
  section TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE insights ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access" ON insights
  FOR SELECT USING (true);
```

## Sample Data

Insert some sample data to test the functionality:

```sql
-- Sample blog posts
INSERT INTO blogs (title, excerpt, content, slug, section) VALUES
('SAP ERP Transformation Best Practices', 'Learn the key strategies for successful SAP ERP transformations', 'This is the full content of the SAP ERP transformation blog post...', 'sap-erp-transformation', 'services'),
('Cloud Migration Strategies', 'Essential considerations for moving to the cloud', 'Cloud migration requires careful planning...', 'cloud-migration-strategies', 'services'),
('Digital Transformation Insights', 'How to navigate digital transformation challenges', 'Digital transformation is reshaping industries...', 'digital-transformation-insights', 'solutions');

-- Sample insights
INSERT INTO insights (title, excerpt, content, slug, section) VALUES
('Industry 4.0 Trends', 'Key trends shaping the future of manufacturing', 'Industry 4.0 is revolutionizing manufacturing...', 'industry-4-trends', 'industries'),
('AI in Business', 'Practical applications of AI in modern business', 'Artificial Intelligence is transforming business...', 'ai-in-business', 'technologies');
```

## Features

With this setup, you'll have:

- **Blogs page** (`/blogs`) - Shows all blog sections and recent posts
- **Insights page** (`/insights`) - Shows all insight sections and recent insights
- **Section pages** (`/blogs/services`, `/insights/industries`) - Shows content filtered by section
- **Detail pages** (`/blogs/services/sap-erp-transformation`) - Shows individual blog/insight content
- **Admin interface** (`/admin/content`) - For managing content (requires proper RLS policies)

## Troubleshooting

### 401 Unauthorized Error
If you see a "401 Unauthorized" error when trying to access blogs or insights:

1. **Check RLS Policies**: Make sure you have the "Allow public read access" policy on your blogs and insights tables
2. **Run this SQL in your Supabase SQL editor**:
   ```sql
   -- Check if RLS is enabled
   SELECT schemaname, tablename, rowsecurity 
   FROM pg_tables 
   WHERE tablename IN ('blogs', 'insights');
   
   -- Check existing policies
   SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
   FROM pg_policies 
   WHERE tablename IN ('blogs', 'insights');
   
   -- If no policies exist, create them:
   CREATE POLICY "Allow public read access" ON blogs FOR SELECT USING (true);
   CREATE POLICY "Allow public read access" ON insights FOR SELECT USING (true);
   ```

3. **Verify Environment Variables**: Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set correctly
4. **Check Supabase Project Status**: Make sure your project is active and not paused

### General Issues
If you see "Failed to load blog" errors:

1. Check that your environment variables are set correctly
2. Verify your Supabase project is active
3. Ensure the database tables exist and have the correct schema
4. Check that RLS policies allow public read access
5. Verify your network can reach Supabase (no firewall issues)
