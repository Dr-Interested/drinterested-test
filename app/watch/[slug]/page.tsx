import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getWebinarBySlug, getAllWebinarSlugs } from "@/data/webinars"
import WatchPageClient from "./WatchPageClient"


export const dynamic = "force-static"
export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = getAllWebinarSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = params
  const webinar = getWebinarBySlug(slug)

  if (!webinar) {
    return {
      title: "Webinar Not Found",
    }
  }

  const baseUrl = "https://drinterested.org"
  const watchUrl = `${baseUrl}/watch/${webinar.slug}`

  return {
    title: webinar.title,
    description: webinar.description,
    keywords: [
      ...webinar.tags,
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
      videos: [
        {
          url: `${baseUrl}${webinar.videoPath}`,
          width: 1920,
          height: 1080,
          type: "video/mp4",
        },
      ],
      images: [
        {
          url: `${baseUrl}${webinar.thumbnailPath}`,
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
      images: [`${baseUrl}${webinar.thumbnailPath}`],
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
  params: { slug: string }
}) {
  const { slug } = params
  const webinar = getWebinarBySlug(slug)

  if (!webinar) {
    notFound()
  }

  return <WatchPageClient webinar={webinar} />
}
