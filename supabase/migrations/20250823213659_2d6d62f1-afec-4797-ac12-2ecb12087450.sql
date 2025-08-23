-- Add additional columns to waitlist table to capture all form data
ALTER TABLE public.waitlist ADD COLUMN company_name TEXT;
ALTER TABLE public.waitlist ADD COLUMN industry TEXT;
ALTER TABLE public.waitlist ADD COLUMN company_size TEXT;
ALTER TABLE public.waitlist ADD COLUMN role TEXT;
ALTER TABLE public.waitlist ADD COLUMN revenue_range TEXT;
ALTER TABLE public.waitlist ADD COLUMN primary_channel TEXT;
ALTER TABLE public.waitlist ADD COLUMN location TEXT;
ALTER TABLE public.waitlist ADD COLUMN website_url TEXT;
ALTER TABLE public.waitlist ADD COLUMN whatsapp TEXT;
ALTER TABLE public.waitlist ADD COLUMN alt_email TEXT;
ALTER TABLE public.waitlist ADD COLUMN needs TEXT;