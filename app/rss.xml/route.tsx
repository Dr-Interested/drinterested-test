import { supabase } from "@/lib/supabase-client"

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  if (!unsafe) return ""
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export async function GET() {
  const baseUrl = "https://www.drinterested.org"

  const imageDescriptions: Record<string, string> = {
    "/logo.png": "Dr. Interested official logo",
  }

  const items: string[] = []

  // Fetch blogs
  const { data: blogs } = await supabase.from("blogs").select("*")
  const blogPosts = blogs || []

  // Fetch webinars
  const { data: webinarsData } = await supabase.from("webinars").select("*")
  const webinars = webinarsData || []

  // Fetch events
  const { data: eventsData } = await supabase.from("events").select("*")
  const events = eventsData || []

  // Fetch members
  const { data: allMembers } = await supabase.from('members').select('*').eq('approved', true)

  blogPosts.forEach((post) => {
    const postUrl = `${baseUrl}/blog/${post.slug}`
    const imageUrl = `${baseUrl}${post.cover_image}`
    const pubDate = new Date(post.created_at || new Date()).toUTCString()

    items.push(`
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${escapeXml(postUrl)}</link>
      <guid isPermaLink="true">${escapeXml(postUrl)}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(post.topic || "Blog")}</category>
      <media:content url="${escapeXml(imageUrl)}" medium="image" type="image/jpeg">
        <media:title><![CDATA[${post.title} - Cover Image]]></media:title>
        <media:description><![CDATA[Cover image for ${post.title}]]></media:description>
      </media:content>
      <content:encoded><![CDATA[
        <img src="${escapeXml(imageUrl)}" alt="${escapeXml(post.title)}" />
        <p>${post.excerpt}</p>
      ]]></content:encoded>
    </item>`)
  })

  webinars.forEach((webinar) => {
    const webinarUrl = `${baseUrl}/watch/${webinar.id}`
    const thumbnailUrl = webinar.image?.startsWith('http') ? webinar.image : `${baseUrl}${webinar.image}`
    const pubDate = new Date(webinar.created_at || new Date()).toUTCString()

    items.push(`
    <item>
      <title><![CDATA[${webinar.title}]]></title>
      <link>${escapeXml(webinarUrl)}</link>
      <guid isPermaLink="true">${escapeXml(webinarUrl)}</guid>
      <description><![CDATA[${webinar.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>Webinar</category>
      <category>Medical Education</category>
      ${webinar.speaker ? `<author><![CDATA[${webinar.speaker}]]></author>` : ""}
      <media:content url="${escapeXml(thumbnailUrl)}" medium="image" type="image/jpeg">
        <media:title><![CDATA[${webinar.title} - Thumbnail]]></media:title>
      </media:content>
      <content:encoded><![CDATA[
        <img src="${escapeXml(thumbnailUrl)}" alt="${escapeXml(webinar.title)}" />
        <p>${webinar.description}</p>
        ${webinar.speaker ? `<p><strong>Speaker:</strong> ${escapeXml(webinar.speaker)}</p>` : ""}
      ]]></content:encoded>
    </item>`)
  })

// ===== Add Members =====
  ;(allMembers || []).forEach((member) => {
    const memberUrl = `${baseUrl}/team/${member.id}`
    const imageUrl = member.image?.startsWith('http') ? member.image : `${baseUrl}${member.image || '/logo.png'}`
    const memberImageDescription = `${member.name}, ${member.role}`
    const pubDate = new Date(member.created_at || "2025-01-01T00:00:00Z").toUTCString()

    items.push(`
    <item>
      <title><![CDATA[${member.name} - ${member.role}]]></title>
      <link>${escapeXml(memberUrl)}</link>
      <guid isPermaLink="true">${escapeXml(memberUrl)}</guid>
      <description><![CDATA[${member.bio || ''}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>Team Member</category>
      <media:content url="${escapeXml(imageUrl)}" medium="image" type="image/jpeg">
        <media:title><![CDATA[${member.name} - Headshot]]></media:title>
        <media:description><![CDATA[${memberImageDescription}]]></media:description>
      </media:content>
      <content:encoded><![CDATA[
        <img src="${escapeXml(imageUrl)}" alt="${escapeXml(member.name)}" />
        <p><strong>${escapeXml(member.role)}</strong></p>
        <p>${member.bio || ''}</p>
      ]]></content:encoded>
    </item>`)
  })

  // ===== Add Events =====
  events.forEach((event) => {
    const isExternalLink = event.link?.startsWith('http://') || event.link?.startsWith('https://')
    const eventUrl = isExternalLink ? event.link : `${baseUrl}${event.link || '/events'}`
    
    if (isExternalLink) {
      return
    }
    
    const imageUrl = event.image?.startsWith('http') ? event.image : `${baseUrl}${event.image}`
    const pubDate = new Date(event.created_at || new Date()).toUTCString()

    items.push(`
    <item>
      <title><![CDATA[${event.title}]]></title>
      <link>${escapeXml(eventUrl)}</link>
      <guid isPermaLink="true">${escapeXml(eventUrl)}</guid>
      <description><![CDATA[${event.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>Event</category>
      <media:content url="${escapeXml(imageUrl)}" medium="image" type="image/jpeg">
        <media:title><![CDATA[${event.title} - Event Image]]></media:title>
      </media:content>
      <content:encoded><![CDATA[
        <img src="${escapeXml(imageUrl)}" alt="${escapeXml(event.title)}" />
        <p>${event.description}</p>
        <p><strong>Date:</strong> ${escapeXml(event.date)}</p>
        <p><strong>Location:</strong> ${escapeXml(event.location)}</p>
      ]]></content:encoded>
    </item>`)
  })

  Object.entries(imageDescriptions).forEach(([imagePath, description]) => {
    const imageUrl = `${baseUrl}${imagePath}`
    const imageName =
      imagePath
        .split("/")
        .pop()
        ?.replace(/\.(jpg|jpeg|png|webp|svg)$/, "") || "image"
    const title = imageName
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    items.push(`
    <item>
      <title><![CDATA[${title} - Dr. Interested]]></title>
      <link>${escapeXml(imageUrl)}</link>
      <guid isPermaLink="true">${escapeXml(imageUrl)}</guid>
      <description><![CDATA[${description}]]></description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <category>Image</category>
      <category>Medical Education</category>
      <media:content url="${escapeXml(imageUrl)}" medium="image">
        <media:title><![CDATA[${title}]]></media:title>
        <media:description><![CDATA[${description}]]></media:description>
      </media:content>
      <content:encoded><![CDATA[
        <img src="${escapeXml(imageUrl)}" alt="${escapeXml(title)}" />
        <p>${description}</p>
      ]]></content:encoded>
    </item>`)
  })

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dr. Interested - Empowering Youth in Healthcare</title>
    <link>${escapeXml(baseUrl)}</link>
    <description>Dr. Interested is a youth-led organization dedicated to inspiring the next generation of healthcare professionals through research, education, and mentorship. Explore medical topics, career guidance, and opportunities in healthcare.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(baseUrl)}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${escapeXml(baseUrl)}/logo.png</url>
      <title>Dr. Interested</title>
      <link>${escapeXml(baseUrl)}</link>
    </image>
    ${items.join("\n    ")}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
