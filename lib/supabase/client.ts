import { createClient } from "@supabase/supabase-js";

const getSupabaseKeys = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Missing Supabase environment variables. Provide NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
  }

  return { url, anonKey };
};

export const createSupabaseBrowserClient = () => {
  const { url, anonKey } = getSupabaseKeys();
  return createClient(url, anonKey, {
    auth: {
      persistSession: true,
    },
  });
};
