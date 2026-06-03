CREATE TABLE public.blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  topic TEXT NOT NULL,
  reading_time TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  author_id UUID REFERENCES public.members(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Allow public read access to blogs
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to blogs" 
ON public.blogs FOR SELECT 
USING (true);

-- Allow all operations for authenticated users (your admin page)
CREATE POLICY "Allow all operations for authenticated users on blogs" 
ON public.blogs FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);
