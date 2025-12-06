import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Type for early access submissions
export type EarlyAccessSubmission = {
  id?: string
  created_at?: string
  full_name: string
  email: string
  company?: string
  industry: string
  primary_use_case: string
  estimated_monthly_actions?: string
  status?: 'pending' | 'contacted' | 'converted' | 'rejected'
}
