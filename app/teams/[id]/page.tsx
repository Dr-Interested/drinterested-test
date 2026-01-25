import type { Metadata } from "next";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { Globe, Instagram, Linkedin, Link2 } from "lucide-react";
import {
  getAllMembers,
  getMemberByIdOrSlug,
  getMemberSlug,
} from "@/data/members";

const baseUrl = "https://www.drinterested.org";

const buildDescription = (bio: string, fallback: string) => {
  const clean = bio.trim();
  if (!clean) return fallback;
  if (clean.length <= 160) return clean;
  return `${clean.slice(0, 157)}...`;
};

export const generateStaticParams = () =>
  getAllMembers().map((member) => ({ id: getMemberSlug(member) }));

export async function generateMetadata({
  params,
}: {
  params?: { id?: string } | Promise<{ id?: string }>;
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const memberId = resolvedParams?.id;
  if (!memberId) {
    return {
      title: "Member Not Found | Dr. Interested",
      robots: { index: false, follow: false },
    };
  }
  const member = getMemberByIdOrSlug(memberId);
  if (!member) {
    return {
      title: "Member Not Found | Dr. Interested",
      robots: { index: false, follow: false },
    };
  }

  const title = `${member.name} - ${member.role} | Dr. Interested`;
  const description = buildDescription(
    member.bio,
    `Meet ${member.name}, ${member.role} at Dr. Interested.`
  );
  const url = `${baseUrl}/teams/${getMemberSlug(member)}`;
  const imageUrl = `${baseUrl}${member.image || "/websitebanner.jpg"}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Dr. Interested",
      type: "profile",
      images: [
        {
          url: imageUrl,
          alt: member.name,
        },
      ],
    },
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params?: { id?: string } | Promise<{ id?: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const memberId = resolvedParams?.id;
  if (!memberId) {
    notFound();
  }
  const member = getMemberByIdOrSlug(memberId);
  if (!member) {
    notFound();
  }

  const canonicalSlug = getMemberSlug(member);
  if (memberId !== canonicalSlug) {
    redirect(`/teams/${canonicalSlug}`);
  }

  const memberUrl = `${baseUrl}/teams/${canonicalSlug}`;
  const sameAs = member.socialLinks
    ? Object.values(member.socialLinks).filter(Boolean)
    : [];
  const socialEntries = Object.entries(member.socialLinks ?? {})
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => ({
      key,
      label:
        key === "linkedin"
          ? "LinkedIn"
          : key === "instagram"
            ? "Instagram"
            : key === "website"
              ? "Website"
              : "Other",
      url: value as string,
    }));
  const iconForKey = (key: string) => {
    if (key === "linkedin") return Linkedin;
    if (key === "instagram") return Instagram;
    if (key === "website") return Globe;
    return Link2;
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${memberUrl}#person`,
    name: member.name,
    jobTitle: member.role,
    image: `${baseUrl}${member.image || "/websitebanner.jpg"}`,
    url: memberUrl,
    affiliation: {
      "@type": "Organization",
      name: "Dr. Interested",
      url: baseUrl,
    },
    sameAs: sameAs.length ? sameAs : undefined,
  };

  return (
    <div className="bg-[#f5f1eb] min-h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="py-10">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-[240px_1fr] items-start">
            <div className="flex justify-center md:justify-start">
              <div className="relative h-48 w-48 rounded-2xl overflow-hidden border border-[#405862]/15 bg-white shadow-sm">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#405862]">
                {member.name}
              </h1>
              <p className="text-lg md:text-xl text-[#405862]/80 mt-1">
                {member.role}
              </p>
              <p className="text-sm md:text-base text-[#405862] mt-4 leading-relaxed">
                {member.bio}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm md:text-base">
                {socialEntries.map((entry) => {
                  const Icon = iconForKey(entry.key);
                  return (
                    <a
                      key={entry.key}
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#405862]/20 px-3 py-1 text-[#405862] hover:border-[#4ecdc4] hover:text-[#4ecdc4] transition-colors"
                      aria-label={entry.label}
                    >
                      <Icon className="h-4 w-4" />
                      {entry.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
