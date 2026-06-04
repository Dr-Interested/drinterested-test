import type { Metadata } from "next"
import { notFound } from "next/navigation"
import WatchPageClient from "@/components/watch/WatchPageClient"
import { supabase } from "@/lib/supabase-client"

export const revalidate = 0; // Don't statically cache

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params

  if (!id) {
    notFound()
  }

  const { data: webinar } = await supabase.from("webinars").select("*").eq("id", id).single()

  if (!webinar) {
    return { title: "Webinar Not Found" }
  }

  const baseUrl = "https://www.drinterested.org"
  const watchUrl = `${baseUrl}/watch/${webinar.id}`

  return {
    title: webinar.title,
    description: webinar.description,

    keywords: [
      "Dr. Interested",
      "webinar",
      "medical education",
      "premed",
      "healthcare careers",
    ],

    authors: [{ name: "Dr. Interested" }],
    creator: "Dr. Interested",
    publisher: "Dr. Interested",

    openGraph: {
      type: "video.other",
      locale: "en_US",
      url: watchUrl,
      title: webinar.title,
      description: webinar.description,
      siteName: "Dr. Interested",
      videos: webinar.video_url ? [
        {
          url: webinar.video_url.startsWith('http') ? webinar.video_url : `${baseUrl}${webinar.video_url}`,
          width: 1920,
          height: 1080,
          type: "video/mp4",
        },
      ] : [],
      images: [
        {
          url: webinar.image.startsWith('http') ? webinar.image : `${baseUrl}${webinar.image}`,
          width: 1280,
          height: 720,
          alt: webinar.title,
          type: "image/jpeg",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: webinar.title,
      description: webinar.description,
      images: [webinar.image.startsWith('http') ? webinar.image : `${baseUrl}${webinar.image}`],
    },

    alternates: {
      canonical: watchUrl,
    },

    robots: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default async function WatchPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const { data: webinar } = await supabase.from("webinars").select("*").eq("id", id).single()

  if (!webinar) {
    notFound()
  }

  return <WatchPageClient webinar={webinar} />
}
