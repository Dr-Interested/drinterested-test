import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (typeof window !== "undefined") {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      "⚠️ Supabase URL or Anon Key is missing from your environment variables! " +
      "Database connections will fail. Check your .env.local file."
    )
  }
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder-url.supabase.co",
  supabaseAnonKey || "placeholder-key"
)