-- Fix RLS Policies for Navigation Management
-- Run these SQL commands in your Supabase SQL Editor

-- Option 1: Disable RLS temporarily (quick fix for testing)
ALTER TABLE navigation_sections DISABLE ROW LEVEL SECURITY;
ALTER TABLE navigation_categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE navigation_items DISABLE ROW LEVEL SECURITY;
ALTER TABLE navigation_subitems DISABLE ROW LEVEL SECURITY;

-- Option 2: Create permissive policies (recommended for production)
-- Uncomment these if you want to keep RLS enabled but allow all operations

-- Drop existing policies if they exist
-- DROP POLICY IF EXISTS "Allow all operations on navigation_sections" ON navigation_sections;
-- DROP POLICY IF EXISTS "Allow all operations on navigation_categories" ON navigation_categories;
-- DROP POLICY IF EXISTS "Allow all operations on navigation_items" ON navigation_items;
-- DROP POLICY IF EXISTS "Allow all operations on navigation_subitems" ON navigation_subitems;

-- Create permissive policies
-- CREATE POLICY "Allow all operations on navigation_sections" 
-- ON navigation_sections FOR ALL 
-- USING (true) WITH CHECK (true);

-- CREATE POLICY "Allow all operations on navigation_categories" 
-- ON navigation_categories FOR ALL 
-- USING (true) WITH CHECK (true);

-- CREATE POLICY "Allow all operations on navigation_items" 
-- ON navigation_items FOR ALL 
-- USING (true) WITH CHECK (true);

-- CREATE POLICY "Allow all operations on navigation_subitems" 
-- ON navigation_subitems FOR ALL 
-- USING (true) WITH CHECK (true);

-- Option 3: Check current RLS status
-- SELECT schemaname, tablename, rowsecurity 
-- FROM pg_tables 
-- WHERE tablename LIKE 'navigation_%';
