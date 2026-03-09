
-- Create a table to store contact form submissions
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only service role can read messages
CREATE POLICY "Service role can read messages"
  ON public.contact_messages
  FOR SELECT
  TO service_role
  USING (true);
