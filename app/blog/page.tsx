import type { Metadata } from "next"
import { generateSeoMetadata } from "@/lib/seo-utils"
import BlogClientPage from "./BlogClientPage"
import { createClient } from "@supabase/supabase-js"

export const revalidate = 0; // Don't statically cache, fetch dynamically

export const metadata: Metadata = generateSeoMetadata({
  title: "Blog",
  description:
    "Explore articles on healthcare careers, medical advancements, and educational opportunities for high school students interested in medicine. Find resources for volunteer hours and healthcare education.",
  url: "https://www.drinterested.org/blog",
  tags: [
    "healthcare blog",
    "medical education",
    "high school healthcare",
    "volunteer opportunities",
    "healthcare careers",
    "medical research",
    "student healthcare resources",
  ],
})

export default async function BlogPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data: blogsData, error: blogsError } = await supabase
    .from("blogs")
    .select(`
      *,
      author:members (
        name,
        bio,
        image,
        socials
      )
    `)
    .order("created_at", { ascending: false })

  let formattedBlogs = []
  
  if (!blogsError && blogsData) {
    // Map database shape to the shape expected by BlogClientPage
    formattedBlogs = blogsData.map(blog => {
      let authorData = blog.author || {}
      if (Array.isArray(authorData)) authorData = authorData[0] || {}

      return {
        slug: blog.slug,
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        coverImage: blog.cover_image,
        topic: blog.topic,
        readingTime: blog.reading_time,
        featured: blog.featured,
        date: new Date(blog.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        author: {
          name: authorData.name || "Unknown Author",
          image: authorData.image || "/logo.png",
          bio: authorData.bio || "",
          linkedIn: authorData.socials?.linkedin || "",
          twitter: authorData.socials?.github || "", // Twitter was mapped to github previously
          instagram: authorData.socials?.instagram || "",
        }
      }
    })
  } else if (blogsError) {
    console.error("Error fetching blogs:", blogsError)
  }

  return <BlogClientPage initialBlogs={formattedBlogs} />
}
