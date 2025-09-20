-- Supabase Function to Fix RLS Policies
-- This function will disable RLS on all navigation tables

CREATE OR REPLACE FUNCTION fix_navigation_rls()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    result TEXT := '';
BEGIN
    -- Disable RLS on all navigation tables
    ALTER TABLE navigation_sections DISABLE ROW LEVEL SECURITY;
    result := result || 'Disabled RLS on navigation_sections. ';
    
    ALTER TABLE navigation_categories DISABLE ROW LEVEL SECURITY;
    result := result || 'Disabled RLS on navigation_categories. ';
    
    ALTER TABLE navigation_items DISABLE ROW LEVEL SECURITY;
    result := result || 'Disabled RLS on navigation_items. ';
    
    ALTER TABLE navigation_subitems DISABLE ROW LEVEL SECURITY;
    result := result || 'Disabled RLS on navigation_subitems. ';
    
    RETURN result;
END;
$$;

-- Run the function
SELECT fix_navigation_rls();

-- Clean up the function
DROP FUNCTION IF EXISTS fix_navigation_rls();
