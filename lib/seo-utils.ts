import type { Metadata } from "next"

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}

export function generateSeoMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = "/android-chrome-512x512.png",
    url,
    type = "website",
    publishedTime,
    modifiedTime,
    author,
    section,
  } = config

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title,
      description,
      type: type === "article" ? "article" : "website",
      url,
      images: [
        {
          url: image,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
      siteName: "Dr. Interested",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@DrInterested",
    },
  }

  if (type === "article" && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined,
      section,
    }
  }

  if (url) {
    metadata.alternates = {
      canonical: url,
    }
  }

  return metadata
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dr. Interested",
    alternateName: ["Dr Interested", "Doctor Interested", "Dr. Int"],
    description:
      "A youth-led global pre-med community helping students explore the vast world of healthcare, research, and advocacy. We support youth in finding their unique 'spark' in medicine through interactive programs, publishing opportunities, and leadership development.",
    url: "https://www.drinterested.org",
    logo: "https://www.drinterested.org/android-chrome-512x512.png",
    image: "https://www.drinterested.org/websitebanner.jpg",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Adil Mukhi",
      jobTitle: "Founder & Executive Director",
    },
    sameAs: [
      "https://www.instagram.com/dr.interested/",
      "https://www.linkedin.com/company/dr-interested/",
      "https://www.youtube.com/@Dr.Interested",
      "https://open.spotify.com/show/6SLlRUL6co6fPxckAdrigf",
      "https://discord.gg/pzbGRgsGXY",
      "https://www.facebook.com/profile.php?id=61572438387454",
      "https://www.threads.com/@dr.interested",
      "https://bsky.app/profile/drinterested.org",
      "https://x.com/Dr_Interested_",
      "https://www.tiktok.com/@dr.interested",
      "https://mastodon.social/@drinterested",
      "https://news.drinterested.org/",
      "https://impact2025.drinterested.org/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "General Inquiry",
        email: "admin@drinterested.org",
      },
      {
        "@type": "ContactPoint",
        contactType: "Human Resources",
        email: "hr@drinterested.org",
      },
      {
        "@type": "ContactPoint",
        contactType: "Finance & Sponsorships",
        email: "finance@drinterested.org",
      },
      {
        "@type": "ContactPoint",
        contactType: "Outreach",
        email: "outreach@drinterested.org",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Global",
    },
    slogan: "Inspiring the Next Generation of Healthcare Professionals",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 90,
    },
    memberOf: {
      "@type": "Organization",
      name: "Healthcare Education Community",
    },
    knowsAbout: [
      "Healthcare Education",
      "Medical Careers",
      "Student Mentorship",
      "Healthcare Research",
      "Medical Technology",
      "Healthcare Leadership",
      "Pre-Medical Education",
      "Youth Healthcare Programs",
      "Medical Volunteering",
      "Healthcare Advocacy",
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "High School Students",
    },
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  author: string
  publishedDate: string
  modifiedDate?: string
  image?: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Interested",
      logo: {
        "@type": "ImageObject",
        url: "https://www.drinterested.org/android-chrome-512x512.png",
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    image: article.image || "https://www.drinterested.org/android-chrome-512x512.png",
    url: article.url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
