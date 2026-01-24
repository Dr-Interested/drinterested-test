import type { Metadata } from "next"
import MembersClient from "./MembersClient"
import {
  getAllMembers,
} from "@/data/members"

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the talented team behind Dr. Interested, including leadership, directors, coordinators, and advisors inspiring the next generation of healthcare professionals.",
  keywords: [
    "Dr. Interested team",
    "healthcare education leaders",
    "medical student advisors",
    "youth healthcare mentors",
    "student organization executives",
    "Adil Mukhi",
  ],
  openGraph: {
    title: "Our Team | Dr. Interested",
    description:
      "Meet the talented team behind Dr. Interested, including leadership, directors, coordinators, and advisors inspiring the next generation of healthcare professionals.",
    url: "https://www.drinterested.org/members",
    siteName: "Dr. Interested",
    type: "website",
    images: [
      {
        url: "/websitebanner.jpg",
        width: 1920,
        height: 1080,
        alt: "Dr. Interested Team",
      },
    ],
  },
  alternates: {
    canonical: "https://www.drinterested.org/members",
  },
}

export default function MembersPage() {
  const baseUrl = "https://www.drinterested.org"
  const allMembers = getAllMembers()

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": allMembers.map((member) => {
      const sameAs = member.socialLinks
        ? Object.values(member.socialLinks).filter(Boolean)
        : []
      const url = `${baseUrl}/team/${member.id}`

      return {
        "@type": "Person",
        "@id": `${url}#person`,
        name: member.name,
        jobTitle: member.role,
        image: `${baseUrl}${member.image}`,
        url,
        affiliation: {
          "@type": "Organization",
          name: "Dr. Interested",
          url: baseUrl,
        },
        sameAs: sameAs.length ? sameAs : undefined,
      }
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MembersClient />
    </>
  )
}
