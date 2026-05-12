-- Temporarily allow public to insert events and webinars for migration
CREATE POLICY "TEMP Allow public to insert events" 
ON public.events FOR INSERT 
TO anon
WITH CHECK (true);

CREATE POLICY "TEMP Allow public to insert webinars" 
ON public.webinars FOR INSERT 
TO anon
WITH CHECK (true);
