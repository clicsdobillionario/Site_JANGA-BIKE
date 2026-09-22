import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const USERNAME = "jangabike";

async function fetchInstagramFollowers(): Promise<number | null> {
  try {
    const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${USERNAME}&hl=pt`;
    const headers: Record<string, string> = {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept": "application/json",
      "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
      "Referer": `https://www.instagram.com/${USERNAME}/`,
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
    };

    const resp = await fetch(url, { headers });

    if (!resp.ok) {
      console.error(`Instagram API returned ${resp.status}`);
      return null;
    }

    const data = await resp.json();
    const followers = data?.data?.user?.edge_followed_by?.count;

    if (typeof followers === "number") {
      return followers;
    }

    return null;
  } catch (err) {
    console.error("Error fetching Instagram followers:", err);
    return null;
  }
}

async function updateDatabase(supabase: any, followers: number) {
  const { error } = await supabase
    .from("instagram_stats")
    .update({ followers, updated_at: new Date().toISOString() })
    .eq("username", USERNAME);

  if (error) {
    console.error("Database update error:", error);
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const followers = await fetchInstagramFollowers();

    let storedFollowers: number | null = null;

    if (followers !== null) {
      await updateDatabase(supabase, followers);
      storedFollowers = followers;
    } else {
      const { data } = await supabase
        .from("instagram_stats")
        .select("followers")
        .eq("username", USERNAME)
        .maybeSingle();

      if (data) {
        storedFollowers = data.followers;
      }
    }

    return new Response(
      JSON.stringify({
        username: USERNAME,
        followers: storedFollowers ?? 0,
        updated_at: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
