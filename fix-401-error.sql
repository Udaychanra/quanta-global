-- Fix 401 Unauthorized Error - Allow FULL PUBLIC ACCESS (No Auth Required)
-- Run this in your Supabase SQL Editor

-- First, check if RLS is enabled and what policies exist
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename IN ('blogs', 'insights');

SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('blogs', 'insights');

-- Add subcategory column to blogs table if it doesn't exist
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS subcategory TEXT;

-- Add subcategory column to insights table if it doesn't exist  
ALTER TABLE insights ADD COLUMN IF NOT EXISTS subcategory TEXT;

-- Drop ALL existing policies to start fresh
DROP POLICY IF EXISTS "Allow public read access" ON blogs;
DROP POLICY IF EXISTS "Allow public read access" ON insights;
DROP POLICY IF EXISTS "Allow authenticated users to manage blogs" ON blogs;
DROP POLICY IF EXISTS "Allow authenticated users to manage insights" ON insights;

-- Create policies that allow FULL PUBLIC ACCESS (no auth required)
-- This allows anyone to read, insert, update, and delete

-- Blogs table - FULL PUBLIC ACCESS
CREATE POLICY "Allow full public access to blogs" ON blogs
  FOR ALL USING (true);

-- Insights table - FULL PUBLIC ACCESS  
CREATE POLICY "Allow full public access to insights" ON insights
  FOR ALL USING (true);

-- Create content_subcategories table for admin dashboard (if it doesn't exist)
CREATE TABLE IF NOT EXISTS content_subcategories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section TEXT NOT NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on content_subcategories
ALTER TABLE content_subcategories ENABLE ROW LEVEL SECURITY;

-- Create policy for full public access to subcategories
CREATE POLICY "Allow full public access to subcategories" ON content_subcategories
  FOR ALL USING (true);

-- Add AI Services and Enterprise Orchestration subcategories to services section
INSERT INTO content_subcategories (section, name, slug) VALUES
('services', 'AI Services', 'ai'),
('services', 'Enterprise Orchestration (EO)', 'enterprise-orchestration')
ON CONFLICT (slug) DO NOTHING;

-- Verify the policies were created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('blogs', 'insights', 'content_subcategories');

-- Test: This should now work without any authentication
-- SELECT * FROM blogs LIMIT 1;
-- SELECT * FROM insights LIMIT 1;
-- SELECT * FROM content_subcategories ORDER BY section, name;
