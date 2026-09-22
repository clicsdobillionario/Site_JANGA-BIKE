/*
# Create instagram_stats table for live follower count

1. New Tables
- `instagram_stats`
  - `id` (uuid, primary key)
  - `followers` (integer, not null) — current follower count from Instagram
  - `username` (text, not null) — Instagram username being tracked
  - `updated_at` (timestamptz, default now()) — when the count was last refreshed
2. Security
- Enable RLS on `instagram_stats`.
- Allow anon + authenticated SELECT so the public site can read the follower count.
- No INSERT/UPDATE/DELETE from the anon key — only the edge function (service role) writes.
3. Notes
- This is a single-row table (one row per username). The edge function upserts the latest count.
- The frontend reads this table to display the live follower count.
*/

CREATE TABLE IF NOT EXISTS instagram_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  followers integer NOT NULL DEFAULT 0,
  username text NOT NULL DEFAULT 'jangabike',
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE instagram_stats ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_instagram_stats" ON instagram_stats;
CREATE POLICY "anon_read_instagram_stats"
ON instagram_stats FOR SELECT
TO anon, authenticated USING (true);

-- Seed with the known baseline count
INSERT INTO instagram_stats (followers, username)
VALUES (5600, 'jangabike')
ON CONFLICT DO NOTHING;
