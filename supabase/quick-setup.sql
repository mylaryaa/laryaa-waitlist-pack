-- Quick Setup for Laryaa aOS
-- Copy this entire script and paste it in Supabase SQL Editor
-- Go to: https://supabase.com/dashboard/project/vxywrvfbrronkbkvksid/sql

-- Create the table
CREATE TABLE IF NOT EXISTS early_access_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  company TEXT,
  industry TEXT NOT NULL,
  primary_use_case TEXT NOT NULL,
  estimated_monthly_actions TEXT,
  status TEXT DEFAULT 'pending' NOT NULL
);

-- Enable Row Level Security
ALTER TABLE early_access_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for form submissions)
CREATE POLICY "Allow public inserts" ON early_access_submissions
  FOR INSERT TO anon WITH CHECK (true);

-- Allow service role to do everything
CREATE POLICY "Allow service role full access" ON early_access_submissions
  FOR ALL TO service_role USING (true);
