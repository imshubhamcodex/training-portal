import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Access Astro environment variables safely
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY || '';

let client: SupabaseClient | null = null;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')
);

if (isSupabaseConfigured) {
  try {
    client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  } catch (err) {
    console.warn('[Supabase] Failed to initialize client, using local mock data store:', err);
  }
}

export const supabase = client;

/**
 * Returns whether the application is running in Live Supabase mode or Local Demonstration mode
 */
export function getDataSourceMode(): 'supabase' | 'local' {
  return isSupabaseConfigured ? 'supabase' : 'local';
}
