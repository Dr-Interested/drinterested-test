import type { Metadata } from "next"
import ContactClientPage from "./contact-client-page"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dr. Interested for questions about our events, collaborations, or joining our team. We're here to help aspiring healthcare professionals.",
  keywords: [
    "contact Dr. Interested",
    "healthcare education contact",
    "medical mentorship inquiry",
    "student organization contact",
    "healthcare events questions",
  ],
  openGraph: {
    title: "Contact Us | Dr. Interested",
    description:
      "Get in touch with Dr. Interested for questions about our events, collaborations, or joining our team.",
    url: "https://www.drinterested.org/contact",
    siteName: "Dr. Interested",
    type: "website",
    images: [
      {
        url: "/websitebanner.jpg",
        width: 1920,
        height: 1080,
        alt: "Contact Dr. Interested",
      },
    ],
  },
  alternates: {
    canonical: "https://www.drinterested.org/contact",
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}
