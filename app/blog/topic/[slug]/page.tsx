import type { Metadata } from "next"
import { blogTopics as topics } from "@/data/blog"
import BlogTopicClientPage from "./blog-topic-client"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = params
  const topic = topics.find((t) => t.slug === slug)

  if (!topic) {
    return {
      title: "Topic Not Found",
    }
  }

  const baseUrl = "https://www.drinterested.org"
  const topicUrl = `${baseUrl}/blog/topic/${topic.slug}`

  return {
    title: `${topic.name} | Dr. Interested Blog`,
    description: topic.description,
    keywords: [
      topic.name,
      "Dr. Interested",
      "blog",
      "healthcare",
      "medical education",
      "articles",
      ...topic.name.split(" "),
    ],
    openGraph: {
      title: `${topic.name} | Dr. Interested Blog`,
      description: topic.description,
      url: topicUrl,
      type: "website",
      siteName: "Dr. Interested",
      images: [
        {
          url: `${baseUrl}${topic.image}`,
          width: 1280,
          height: 720,
          alt: topic.name,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${topic.name} | Dr. Interested Blog`,
      description: topic.description,
      images: {
        url: `${baseUrl}${topic.image}`,
        alt: topic.name,
      },
    },
    alternates: {
      canonical: topicUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function BlogTopicPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  return <BlogTopicClientPage slug={slug} />
}
