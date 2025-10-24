-- Add has_laptop boolean column to waitlist
ALTER TABLE public.waitlist
ADD COLUMN IF NOT EXISTS has_laptop BOOLEAN NOT NULL DEFAULT false;

COMMENT ON COLUMN public.waitlist.has_laptop IS 'Whether the user has a laptop for desktop-only beta';