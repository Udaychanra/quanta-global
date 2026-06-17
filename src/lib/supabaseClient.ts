import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

const isValidUrl = (value: string | undefined) => {
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' && url.hostname.includes('supabase.co');
  } catch {
    return false;
  }
};

export const hasSupabaseEnv = Boolean(isValidUrl(supabaseUrl) && supabaseAnonKey);

// Log environment status for debugging
if (!hasSupabaseEnv) {
  console.warn('Supabase environment variables not configured:');
  console.warn('VITE_SUPABASE_URL:', isValidUrl(supabaseUrl) ? 'Set' : 'Missing or invalid');
  console.warn('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Set' : 'Missing');
}

export const supabase = hasSupabaseEnv
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : (null as any);

