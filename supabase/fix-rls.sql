-- Run this in Supabase SQL Editor to fix RLS policies
-- Go to: https://supabase.com/dashboard/project/vxywrvfbrronkbkvksid/sql

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON early_access_submissions;
DROP POLICY IF EXISTS "Allow service role full access" ON early_access_submissions;

-- Create policy that allows anonymous inserts
CREATE POLICY "Enable insert for anonymous users" ON early_access_submissions
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy for service role to read all
CREATE POLICY "Enable read for service role" ON early_access_submissions
  FOR SELECT
  TO service_role
  USING (true);

-- Create policy for service role to update
CREATE POLICY "Enable update for service role" ON early_access_submissions
  FOR UPDATE
  TO service_role
  USING (true);
