-- Supabase Schema for Laryaa aOS
-- Run this in your Supabase SQL Editor to set up the database

-- Create enum for submission status
CREATE TYPE submission_status AS ENUM ('pending', 'contacted', 'converted', 'rejected');

-- Create early_access_submissions table
CREATE TABLE IF NOT EXISTS early_access_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  company TEXT,
  industry TEXT NOT NULL,
  primary_use_case TEXT NOT NULL,
  estimated_monthly_actions TEXT,
  status submission_status DEFAULT 'pending' NOT NULL,
  notes TEXT,
  contacted_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_early_access_email ON early_access_submissions(email);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_early_access_status ON early_access_submissions(status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_early_access_created ON early_access_submissions(created_at DESC);

-- Create index on industry for analytics
CREATE INDEX IF NOT EXISTS idx_early_access_industry ON early_access_submissions(industry);

-- Enable Row Level Security
ALTER TABLE early_access_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON early_access_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to read all submissions
CREATE POLICY "Allow authenticated read" ON early_access_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to update submissions
CREATE POLICY "Allow authenticated update" ON early_access_submissions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to auto-update updated_at
CREATE TRIGGER update_early_access_updated_at
  BEFORE UPDATE ON early_access_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- View for submission analytics
CREATE OR REPLACE VIEW submission_analytics AS
SELECT
  industry,
  status,
  COUNT(*) as count,
  DATE_TRUNC('day', created_at) as date
FROM early_access_submissions
GROUP BY industry, status, DATE_TRUNC('day', created_at)
ORDER BY date DESC;

-- Grant access to the view
GRANT SELECT ON submission_analytics TO authenticated;
