import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const EDGE_FUNCTION_URL = supabaseUrl
  ? `${supabaseUrl}/functions/v1/instagram-followers`
  : null;

const headers = {
  Authorization: `Bearer ${supabaseAnonKey ?? ''}`,
  'Content-Type': 'application/json',
};

export function useInstagramFollowers() {
  const [followers, setFollowers] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!supabase || !EDGE_FUNCTION_URL) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await supabase
          .from('instagram_stats')
          .select('followers')
          .eq('username', 'jangabike')
          .maybeSingle();

        if (data) {
          setFollowers(data.followers);
        }

        fetch(EDGE_FUNCTION_URL, { headers })
          .then((res) => res.ok ? res.json() : null)
          .then((result) => {
            if (result?.followers != null) {
              setFollowers(result.followers);
            }
          })
          .catch(() => {});
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { followers, loading };
}

export function formatFollowers(count: number | null): string {
  if (count == null) return '5.600+';
  if (count >= 1000) {
    const formatted = (count / 1000).toFixed(count >= 10000 ? 0 : 1).replace('.', ',');
    return `${formatted}+`;
  }
  return `${count}+`;
}
