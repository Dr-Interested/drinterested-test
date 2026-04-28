import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // server-only
)

export async function getDepartmentsFromDB() {
  const { data, error } = await supabase
    .from("departments")
    .select(`
      id,
      name,
      description,
      members (
        id,
        name,
        role,
        bio,
        image_url,
        is_director,
        linkedin
      )
    `)
    .eq("members.status", "approved")

  if (error) {
    console.error(error)
    return []
  }

  return data ?? []
}
