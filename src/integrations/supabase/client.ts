import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://gvszjkktmdgefpstcclb.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2c3pqa2t0bWRnZWZwc3RjY2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MTI1NjAsImV4cCI6MjA3MTQ4ODU2MH0.ypNZFottTn4tMJTvkedsSM5RmCmgctM-XSTGv80im7A";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});