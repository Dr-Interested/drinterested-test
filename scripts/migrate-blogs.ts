import { createClient } from "@supabase/supabase-js"
import * as dotenv from "dotenv"
import { readFileSync } from "fs"
import { resolve } from "path"

dotenv.config({ path: ".env.local" })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // Use anon key since RLS currently allows it

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase environment variables.")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

// We use dynamic import for the blog posts so we can read the JS/TS file
async function migrateBlogs() {
  console.log("Starting blogs migration...")

  // We need to use Next.js or ts-node to run this, or we can just read the data statically if we compile it.
  // For simplicity, I'll require the user to run this with ts-node or tsx: `npx tsx migrate-blogs.ts`
  
  const { blogPosts, authors } = await import("./data/blog.js").catch(async () => {
    // If it fails, we try the ts extension
    return await import("./data/blog.ts")
  })

  // Fetch existing members to match authors
  const { data: existingMembers, error: membersError } = await supabase.from("members").select("*")
  if (membersError) {
    console.error("Error fetching members:", membersError)
    return
  }

  for (const post of blogPosts) {
    // Try to find the author in the members table by name
    let authorId = null
    const matchedMember = existingMembers.find(m => m.name.toLowerCase() === post.author.name.toLowerCase())
    
    if (matchedMember) {
      authorId = matchedMember.id
    } else {
      // Author doesn't exist in members table! Let's create them as a "Blog Author"
      console.log(`Author ${post.author.name} not found in members table. Creating them...`)
      
      const newMemberId = `author-${post.author.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
      
      const { data: newMemberData, error: insertMemberError } = await supabase.from("members").insert({
        name: post.author.name,
        role: "Blog Author",
        department: "Publications",
        bio: post.author.bio || "Guest Author",
        image: post.author.image || "/logo.png",
        approved: true, // Auto approve so they show up
        socials: {
          linkedin: post.author.linkedIn || "",
          instagram: post.author.instagram || "",
          github: post.author.twitter || "" // mapping twitter to github temporarily as we only have 3 slots
        }
      }).select()

      if (insertMemberError) {
        console.error("Failed to create missing author:", insertMemberError)
      } else {
        authorId = newMemberData?.[0]?.id
        existingMembers.push({ id: authorId, name: post.author.name }) // Add to local cache
      }
    }

    console.log(`Migrating blog post: ${post.title}`)
    const { error: insertError } = await supabase.from("blogs").insert({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      cover_image: post.coverImage,
      topic: post.topic,
      reading_time: post.readingTime,
      featured: post.featured || false,
      author_id: authorId,
      // Date conversion: parse "February 2, 2026" to an ISO string
      created_at: new Date(post.date).toISOString()
    })

    if (insertError) {
      if (insertError.code === '23505') {
        console.log(`Blog ${post.slug} already exists, skipping.`)
      } else {
        console.error("Error inserting blog:", insertError)
      }
    } else {
      console.log(`Successfully migrated: ${post.slug}`)
    }
  }

  console.log("Blog migration complete!")
}

migrateBlogs()
