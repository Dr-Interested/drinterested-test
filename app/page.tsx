import type { Metadata } from "next"
import ClientPage from "./client-page"
import { supabase } from "@/lib/supabase-client"

export const revalidate = 0; // Don't statically cache

export const metadata: Metadata = {
  title: "Dr. Interested - Inspiring Future Healthcare Leaders",
  description:
    'Dr. Interested supports youth in finding their unique "spark" in medicine through programs & opportunities. Earn volunteer hours while building your future!',
}

export default async function Page() {

  const { data: recentPostData } = await supabase
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
    .limit(1)
    .single()

  let recentPost = null;

  if (recentPostData) {
    let authorData = recentPostData.author || {}
    if (Array.isArray(authorData)) authorData = authorData[0] || {}

    recentPost = {
      slug: recentPostData.slug,
      title: recentPostData.title,
      excerpt: recentPostData.excerpt,
      content: recentPostData.content,
      coverImage: recentPostData.cover_image,
      topic: recentPostData.topic,
      readingTime: recentPostData.reading_time,
      featured: recentPostData.featured,
      date: new Date(recentPostData.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      author: {
        name: authorData.name || "Unknown Author",
        image: authorData.image || "/logo.png",
        bio: authorData.bio || "",
        linkedIn: authorData.socials?.linkedin || "",
        twitter: authorData.socials?.github || "",
        instagram: authorData.socials?.instagram || "",
      }
    }
  }

  return <ClientPage recentPost={recentPost} />
}
