import type { Metadata } from "next"
import EventsClientPage from "./EventsClientPage"
import SeoSchema from "@/components/seo-schema"
import { createClient } from "@supabase/supabase-js"

export const revalidate = 0; // Don't statically cache

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join Dr. Interested's engaging events and initiatives designed to educate and inspire future healthcare professionals. From webinars to research competitions, find opportunities to grow.",
  keywords: [
    "healthcare events",
    "medical webinars",
    "student research competitions",
    "healthcare workshops",
    "medical education events",
    "volunteer opportunities",
  ],
  openGraph: {
    title: "Events | Dr. Interested",
    description:
      "Join Dr. Interested's engaging events and initiatives designed to educate and inspire future healthcare professionals.",
    url: "https://www.drinterested.org/events",
    siteName: "Dr. Interested",
    type: "website",
    images: [
      {
        url: "/websitebanner.jpg",
        width: 1920,
        height: 1080,
        alt: "Dr. Interested Events",
      },
    ],
  },
  alternates: {
    canonical: "https://www.drinterested.org/events",
  },
}

export default async function EventsPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data: allEventsData } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false })

  const upcomingEvents = allEventsData?.filter(e => !e.is_past) || []
  const pastEvents = allEventsData?.filter(e => e.is_past) || []

  const weissOpenEventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Weiss Open (CFC Rated)",
    description:
      "Rapid (10+5), Swiss Format (5 Rounds). Entry Fee: $15. Complete the registration form and send an Interac e-transfer with your Lichess username, name, and CFC-ID to redlory23@gmail.com. All proceeds benefit PCRF.",
    startDate: "2025-12-28",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    url: "https://chess.drinterested.org",
    image: [
      "https://www.drinterested.org/websitebanner.jpg",
      "https://www.drinterested.org/competition.png",
    ],
    organizer: {
      "@type": "Organization",
      name: "The Dr. Interested Simmon Chang Chess (Against Cancer) Club",
      url: "https://chess.drinterested.org",
    },
    location: {
      "@type": "VirtualLocation",
      url: "https://chess.drinterested.org",
    },
    offers: {
      "@type": "Offer",
      price: "15.00",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: "https://chess.drinterested.org",
    },
  }

  return (
    <>
      <SeoSchema schema={weissOpenEventSchema} />
      <EventsClientPage upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
    </>
  )
}
