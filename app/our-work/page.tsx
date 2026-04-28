import type { Metadata } from "next"
import OurWorkClient from "./OurWorkClient"

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Discover how Dr. Interested is empowering 55,000+ youth across 50+ countries through innovative healthcare education programs, mentorship, research competitions, and community building. View our impact, events, and initiatives.",
  keywords: [
    "Dr. Interested impact",
    "youth healthcare programs",
    "medical education initiatives",
    "healthcare mentorship",
    "research competitions",
    "Resilient Minds Project",
    "Cards for Nurses",
    "pre-med community",
    "healthcare advocacy",
    "youth leadership",
    "medical research",
    "healthcare events",
  ],
  openGraph: {
    title: "Our Work | Dr. Interested",
    description:
      "Discover how Dr. Interested is empowering 55,000+ youth across 50+ countries through innovative healthcare education programs, mentorship, and community building.",
    url: "https://www.drinterested.org/our-work",
    siteName: "Dr. Interested",
    images: [
      {
        url: "/websitebanner.jpg",
        width: 1920,
        height: 1080,
        alt: "Dr. Interested Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Dr. Interested",
    description:
      "Discover how Dr. Interested is empowering 55,000+ youth across 50+ countries through innovative healthcare education programs and mentorship.",
    images: ["https://www.drinterested.org/og-image.png"],
  },
  alternates: {
    canonical: "https://www.drinterested.org/our-work",
  },
}

export default function OurWorkPage() {
  return <OurWorkClient />
}
