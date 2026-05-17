import { createClient } from "@supabase/supabase-js"
import { notFound } from "next/navigation"
import BlogPostClient from "./BlogPostClient"
import { Metadata } from "next"

export const revalidate = 0;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data: blog } = await supabase
    .from("blogs")
    .select("title, excerpt, cover_image")
    .eq("slug", params.slug)
    .single()

  if (!blog) {
    return { title: "Post Not Found" }
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      images: blog.cover_image ? [blog.cover_image] : ["/websitebanner.jpg"],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data: post, error } = await supabase
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
    .eq("slug", params.slug)
    .single()

  if (error || !post) {
    notFound()
  }

  // Fetch related posts (same topic, excluding current)
  const { data: relatedData } = await supabase
    .from("blogs")
    .select(`
      slug, title, excerpt, cover_image, topic, reading_time, created_at
    `)
    .eq("topic", post.topic)
    .neq("slug", post.slug)
    .limit(3)

  let authorData = post.author || {}
  if (Array.isArray(authorData)) authorData = authorData[0] || {}

  const formattedPost = {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: post.cover_image,
    topic: post.topic,
    readingTime: post.reading_time,
    date: new Date(post.created_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    author: {
      name: authorData.name || "Unknown Author",
      image: authorData.image || "/logo.png",
      bio: authorData.bio || "",
      linkedIn: authorData.socials?.linkedin || "",
      twitter: authorData.socials?.twitter || "",
      instagram: authorData.socials?.instagram || "",
      github: authorData.socials?.github || "",
    }
  }

  const formattedRelated = (relatedData || []).map(r => ({
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    coverImage: r.cover_image,
    topic: r.topic,
    readingTime: r.reading_time,
    date: new Date(r.created_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }))

  return <BlogPostClient post={formattedPost} relatedPosts={formattedRelated} />
}
