import type { Metadata } from "next"
import TermsClient from "./terms-client"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read Dr. Interested's Terms and Conditions to understand the terms governing your use of our website and services.",
  keywords: ["terms and conditions", "terms of service", "legal terms", "user agreement", "liability disclaimer"],
  openGraph: {
    title: "Terms & Conditions | Dr. Interested",
    description:
      "Read Dr. Interested's Terms and Conditions to understand the terms governing your use of our website and services.",
    url: "https://www.drinterested.org/terms",
    siteName: "Dr. Interested",
    type: "website",
    images: [
      {
        url: "/websitebanner.jpg",
        width: 1920,
        height: 1080,
        alt: "Dr. Interested Terms & Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Dr. Interested",
    description:
      "Read Dr. Interested's Terms and Conditions to understand the terms governing your use of our website and services.",
    images: {
      url: "/websitebanner.jpg",
      alt: "Dr. Interested Terms & Conditions",
    },
  },
  alternates: {
    canonical: "https://www.drinterested.org/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return <TermsClient />
}
