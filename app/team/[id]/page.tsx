import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  getAllMembers,
  getMemberById,
} from "@/data/members"
import SeoSchema from "@/components/seo-schema"

const baseUrl = "https://www.drinterested.org"

const truncate = (text: string, maxLength = 160) =>
  text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text

export async function generateStaticParams() {
  return getAllMembers().map((member) => ({ id: member.id }))
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const member = getMemberById(params.id)

  if (!member) {
    return {
      title: "Member Not Found | Dr. Interested",
      robots: { index: false, follow: false },
    }
  }

  const description = truncate(member.bio)
  const imageUrl = `${baseUrl}${member.image}`
  const url = `${baseUrl}/team/${member.id}`

  return {
    title: `${member.name} | ${member.role}`,
    description,
    keywords: [member.name, member.role, "Dr. Interested"],
    openGraph: {
      title: `${member.name} | ${member.role}`,
      description,
      url,
      siteName: "Dr. Interested",
      type: "profile",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: `${member.name} - ${member.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${member.name} | ${member.role}`,
      description,
      images: [imageUrl],
      creator: "@DrInterested",
    },
    alternates: {
      canonical: url,
    },
  }
}

export default function MemberPage({ params }: { params: { id: string } }) {
  const member = getMemberById(params.id)

  if (!member) {
    notFound()
  }

  const sameAs = member.socialLinks
    ? Object.values(member.socialLinks).filter(Boolean)
    : []
  const memberUrl = `${baseUrl}/team/${member.id}`
  const memberImage = `${baseUrl}${member.image}`

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${memberUrl}#person`,
    name: member.name,
    jobTitle: member.role,
    image: memberImage,
    url: memberUrl,
    description: member.bio,
    affiliation: {
      "@type": "Organization",
      name: "Dr. Interested",
      url: baseUrl,
    },
    worksFor: {
      "@type": "Organization",
      name: "Dr. Interested",
      url: baseUrl,
    },
    sameAs: sameAs.length ? sameAs : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": memberUrl,
    },
  }

  return (
    <div>
      <SeoSchema schema={personSchema} />
      <section className="hero-section bg-[#f5f1eb] py-10 md:py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-sm border border-[#405862]/10">
                <Image
                  src={member.image || "/logo.png"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-[#405862]/70 mb-2">
                Dr. Interested Team Member
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#405862] mb-2">
                {member.name}
              </h1>
              <p className="text-lg text-[#405862]/80 mb-4">{member.role}</p>
              <p className="text-[#405862]/80">{member.bio}</p>
              {member.socialLinks && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {member.socialLinks.linkedin && (
                    <Link
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#405862] hover:text-[#4ecdc4] underline"
                    >
                      LinkedIn
                    </Link>
                  )}
                  {member.socialLinks.instagram && (
                    <Link
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#405862] hover:text-[#4ecdc4] underline"
                    >
                      Instagram
                    </Link>
                  )}
                  {member.socialLinks.website && (
                    <Link
                      href={member.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#405862] hover:text-[#4ecdc4] underline"
                    >
                      Website
                    </Link>
                  )}
                  {member.socialLinks.other && (
                    <Link
                      href={member.socialLinks.other}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#405862] hover:text-[#4ecdc4] underline"
                    >
                      More
                    </Link>
                  )}
                </div>
              )}
              <div className="mt-6">
                <Link
                  href="/members"
                  className="inline-flex items-center text-[#405862] hover:text-[#4ecdc4] transition-colors"
                >
                  Back to members
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
