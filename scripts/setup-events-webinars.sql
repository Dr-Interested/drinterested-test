-- Create events table
CREATE TABLE IF NOT EXISTS public.events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT,
  location TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('open', 'full', 'completed', 'closed')),
  link TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  is_past BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Allow public read access to events
CREATE POLICY "Allow public to see events" 
ON public.events FOR SELECT 
TO anon
USING (true);

-- Allow authenticated admins to manage events
CREATE POLICY "Allow admins to manage events" 
ON public.events FOR ALL 
TO authenticated
USING (true);

-- Create webinars table
CREATE TABLE IF NOT EXISTS public.webinars (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  speaker TEXT NOT NULL,
  speaker_title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  video_url TEXT,
  status TEXT NOT NULL CHECK (status IN ('upcoming', 'completed')),
  registration_link TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.webinars ENABLE ROW LEVEL SECURITY;

-- Allow public read access to webinars
CREATE POLICY "Allow public to see webinars" 
ON public.webinars FOR SELECT 
TO anon
USING (true);

-- Allow authenticated admins to manage webinars
CREATE POLICY "Allow admins to manage webinars" 
ON public.webinars FOR ALL 
TO authenticated
USING (true);