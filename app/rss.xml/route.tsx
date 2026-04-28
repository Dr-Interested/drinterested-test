import { blogPosts } from "@/data/blog"
import { webinars } from "@/data/webinars"
import {
  getAllMembers,
  MemberType,
} from "@/data/members"
import { upcomingEvents, pastEvents, EventType } from "@/data/events"

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export async function GET() {
  const baseUrl = "https://www.drinterested.org"

  const imageDescriptions: Record<string, string> = {
    // Logo and branding
    "/logo.png":
      "Dr. Interested official logo - A professional medical education organization empowering youth to explore healthcare careers through research, mentorship, and community engagement",
    "/circle-logo.png":
      "Dr. Interested circular logo variant - Round emblem representing the organization's commitment to youth medical education and healthcare advocacy",
    "/websitebanner.jpg":
      "Dr. Interested website banner - Hero image showcasing the organization's mission to inspire the next generation of healthcare professionals",
    "/pattern-bg.png":
      "Decorative background pattern - Subtle medical-themed texture used throughout the Dr. Interested website for visual depth",

    // Favicons and app icons
    "/favicon-16x16.png":
      "Dr. Interested favicon 16x16 - Small icon for browser tabs representing the medical education platform",
    "/favicon-32x32.png": "Dr. Interested favicon 32x32 - Medium icon for browser tabs and bookmarks",
    "/apple-touch-icon.png":
      "Dr. Interested Apple touch icon - iOS home screen icon for the medical education platform",
    "/android-chrome-192x192.png":
      "Dr. Interested Android icon 192x192 - Android home screen icon for mobile app experience",
    "/android-chrome-512x512.png":
      "Dr. Interested Android icon 512x512 - High-resolution Android icon for splash screens and app listings",

    // Team member photos
    "/adil.png":
      "Adil Mukhi - Executive Director and Founder of Dr. Interested, passionate advocate for youth healthcare education and medical policy reform",
    "/lari.png":
      "Muhammad Ibrahim Lari - High school student researcher specializing in medical writing, healthcare law, and cancer research at Dr. Interested",
    "/shaza-ali.jpg":
      "Shaza Ali - 9th grade STEM enthusiast with interests in neurology and cardiology, contributing medical research articles to Dr. Interested",
    "/Maliha.JPG":
      "Maliha Metla - Medical education content creator developing resources to help students understand medical concepts and career paths",
    "/velan.png":
      "Velan Mangai Sivakumar - Grade 10 biological sciences researcher, HOSA trainer, and Canadian Science Olympiad qualifier at Dr. Interested",
    "/Dabosmita.jpg":
      "Dabosmita Das - Year 12 interdisciplinary student exploring technology, medicine, and philosophy through research and writing",
    "/Manasvi.jpg":
      "Manasvi Bobade - Sophomore researcher exploring the intersection of business, healthcare innovation, and youth engagement in medicine",
    "/raine.jpg":
      "Raine Waverka - Phage researcher exploring CRISPR technology and oncology through elite science programs at Vanderbilt and Boston University",
    "/chinthala.png":
      "Chinthala Trisha Goud - Research methodology expert and webinar speaker on academic publishing and literature review processes",
    "/akeer-med.png":
      "Akeer - Medical department member contributing to Dr. Interested's research initiatives and healthcare education programs",
    "/shamoon.png":
      "Shamoon - Team member supporting Dr. Interested's mission to make medical education accessible to youth worldwide",
    "/katetucker.png":
      "Kate Tucker - Pre-medical pathway advisor and webinar speaker on Master's, PhD, and gap year options for aspiring doctors",
    "/arghya.jpg":
      "Arghya - Department director leading initiatives in medical research and youth healthcare education at Dr. Interested",
    "/Bhavish.jpg":
      "Bhavish - Team member contributing to Dr. Interested's educational content and community outreach programs",
    "/madina.jpg":
      "Madina - Healthcare education advocate working to expand Dr. Interested's reach and impact in underserved communities",
    "/hasaan.png":
      "Hasaan - Research team member supporting Dr. Interested's mission to democratize medical knowledge for students",
    "/Paulina.png":
      "Paulina - Content creator and researcher developing accessible medical education resources for youth",
    "/manmeet.png":
      "Manmeet - Team member contributing to Dr. Interested's research publications and educational initiatives",
    "/yumeth.png":
      "Yumeth - Healthcare education specialist supporting Dr. Interested's programs and community engagement",
    "/ali-salman.jpeg": "Ali Salman - Medical education advocate and team member at Dr. Interested",
    "/soham.png":
      "Soham - Research contributor supporting Dr. Interested's mission to inspire future healthcare professionals",
    "/keenan.jpg": "Keenan - Team member working on Dr. Interested's educational content and outreach programs",
    "/akeer.png":
      "Akeer - Healthcare education specialist contributing to Dr. Interested's research and mentorship initiatives",
    "/kishan-headshot.jpg":
      "Kishan - Leadership team member guiding Dr. Interested's strategic initiatives in medical education",

    // Blog post cover images - Medical topics
    "/sleep-deprivation.png":
      "Sleep deprivation effects on teens - Visual representation of how lack of sleep impacts teenage stress, anxiety, and mental health",
    "/exercise_hobbies_cover.jpg":
      "Exercise and hobbies for teen wellness - Illustration showing the mental health benefits of physical activity and creative pursuits for adolescents",
    "/or-nurse.jpg":
      "Operating room nurse in action - Perioperative nurse preparing surgical instruments and assisting during medical procedures",
    "/emergency_nurse_cover.jpg":
      "Emergency room nurse providing critical care - ER nurse responding to urgent medical situations with speed and expertise",
    "/travel_nurse_cover.jpg":
      "Travel nurse on assignment - Healthcare professional providing temporary nursing services across different medical facilities",
    "/oncology_nurse_cover.jpg":
      "Oncology nurse caring for cancer patient - Specialized nurse administering chemotherapy and providing emotional support during cancer treatment",
    "/cps1-gene-editing.png":
      "CRISPR gene editing breakthrough - Illustration of personalized gene therapy treating CPS1 deficiency in infant patient",
    "/maurice-hilleman.png":
      "Maurice Hilleman vaccine pioneer - Portrait of the scientist who developed over 40 vaccines saving millions of lives worldwide",
    "/mrna-history.png":
      "mRNA vaccine development timeline - Historical progression from basic research to COVID-19 breakthrough vaccines",
    "/oped-ai-adil.png":
      "Youth AI policy advocacy - Visual representation of young people's role in shaping artificial intelligence healthcare policy in Canada",
    "/crispr.png":
      "CRISPR gene editing ethics - Illustration of the He Jiankui case and healthcare law implications of human embryo modification",
    "/malpractice-cover.png":
      "Medical malpractice law - Visual representation of healthcare negligence cases and patient rights in Canadian medical system",
    "/mental-health-act.png":
      "Ontario Mental Health Act - Illustration of mental health legislation balancing patient rights with necessary psychiatric care",
    "/cryosurgery.png":
      "Cryosurgery medical procedure - Visualization of extreme cold temperature treatment destroying abnormal tissue in cancer therapy",
    "/Internist.png":
      "Internal medicine physician - Doctor specializing in complex adult diseases and diagnostic problem-solving in hospital setting",
    "/Psychiatrists.png":
      "Psychiatrist providing mental health care - Medical doctor treating mental health disorders through therapy and medication management",
    "/bacteriophage-article.png":
      "Bacteriophages fighting antibiotic resistance - Microscopic viruses targeting bacteria as alternative to failing antibiotics",
    "/Neurosurgeon.jpg":
      "Neurosurgeon performing brain surgery - Highly trained specialist operating on brain, spinal cord, and nervous system conditions",
    "/Opthalmicsurgeon.png":
      "Ophthalmic surgeon treating eye conditions - Specialist performing vision-saving surgeries including cataract removal and retinal repair",
    "/vascular.png":
      "Vascular surgeon treating blood vessel disease - Specialist repairing arteries and veins through surgical and minimally invasive procedures",
    "/Granulocytes.png":
      "Granulocytes white blood cells - Microscopic view of immune cells discovered by Paul Ehrlich using innovative staining techniques",
    "/eosinophils.png":
      "Eosinophils in cancer research - White blood cells playing unexpected roles in tumor microenvironment and cancer progression",
    "/stereotactic-surgery.png":
      "Stereotactic radiosurgery treatment - Precise radiation beams targeting cancer tumors without invasive surgery",
    "/coleytoxins.png":
      "Coley's toxins immunotherapy - Historical bacterial treatment pioneering modern cancer immunotherapy approaches",
    "/Elder-healthcare.png":
      "Elder care nursing - Nurses providing comprehensive care to elderly patients in long-term care facilities",
    "/Immunotherapy.png":
      "Cancer immunotherapy treatment - Visualization of immune system being enhanced to recognize and destroy cancer cells",
    "/Anaplastic.png":
      "Anaplastic thyroid cancer - Aggressive undifferentiated thyroid cancer requiring multimodal treatment approach",
    "/cancer.png":
      "Cancer cell biology - Illustration of uncontrolled cell growth and metastasis in various cancer types",
    "/Chemo.png":
      "Chemotherapy cancer treatment - Medical illustration of chemotherapy drugs targeting rapidly dividing cancer cells",
    "/Nephrologist.png":
      "Nephrologist treating kidney disease - Specialist managing chronic kidney disease, dialysis, and transplant care",
    "/endocrinologist.png":
      "Endocrinologist treating hormonal disorders - Doctor specializing in diabetes, thyroid disease, and metabolic conditions",
    "/chemotherapy-cover.jpg":
      "Chemotherapy administration - Healthcare professional preparing and administering cancer-fighting drugs to patient",
    "/PediatricNurse.png":
      "Pediatric nurse caring for children - Specialized nurse providing medical care to infants, children, and adolescents",
    "/cardiologists.jpg":
      "Cardiologist examining heart health - Cardiovascular specialist using diagnostic tools to assess and treat heart conditions",
    "/hepatology-cover.jpg":
      "Hepatologist treating liver disease - Specialist managing hepatitis, cirrhosis, and other liver-related conditions",

    // Events and programs
    "/ex3-logo.png":
      "EX3 Medical Innovation Conference - Logo for Dr. Interested's flagship event exploring cutting-edge healthcare technology and research",
    "/psych-conference.png":
      "Psychology and Mental Health Conference - Event bringing together students and professionals to discuss mental health advocacy",
    "/office-hours.png":
      "Dr. Interested office hours - Virtual mentorship sessions connecting students with medical professionals and researchers",
    "/webinar-cert.png":
      "Webinar series certificate - Official recognition for participants completing Dr. Interested's educational webinar programs",
    "/research-proposal.png":
      "Research proposal workshop - Educational event teaching students how to design and write medical research proposals",
    "/biomedpodcast.png":
      "Biomedical podcast series - Audio content exploring medical topics, research, and healthcare careers for youth",
    "/media-event.png":
      "Media and communications event - Workshop on medical journalism, science communication, and healthcare advocacy",
    "/hbbpodcast.png":
      "Healthcare Beyond Borders podcast - International perspectives on global health challenges and medical innovation",
    "/mindsproject.png":
      "MINDS Project initiative - Dr. Interested's program fostering medical research and innovation among high school students",
    "/research.png":
      "Research opportunities program - Platform connecting students with medical research projects and mentorship",
    "/competition.png":
      "Medical competitions and challenges - Opportunities for students to showcase research and clinical knowledge",
    "/cards.png":
      "Educational resource cards - Quick-reference materials covering medical topics, career paths, and study strategies",

    // Internship recap images
    "/ctscan.png":
      "CT scan medical imaging - Computed tomography technology used for detailed cross-sectional body imaging in diagnosis",
    "/ultrasound.png":
      "Ultrasound imaging procedure - Non-invasive diagnostic tool using sound waves to visualize internal organs and tissues",
    "/petscans.png":
      "PET scan nuclear medicine - Positron emission tomography revealing metabolic activity for cancer detection and staging",
    "/surgery.png":
      "Surgical procedure in operating room - Medical team performing complex operation with advanced surgical techniques",
    "/dnasquence.png":
      "DNA sequencing technology - Genetic analysis equipment used in personalized medicine and disease research",
    "/bioprinting.png":
      "3D bioprinting innovation - Cutting-edge technology creating living tissue and organs for transplantation research",

    // Merchandise
    "/tshirt.jpg": "Dr. Interested t-shirt - Official branded apparel supporting youth medical education initiatives",
    "/hoodie.jpg": "Dr. Interested hoodie - Comfortable branded clothing representing the medical education community",
    "/sticker.jpg": "Dr. Interested sticker - Collectible adhesive featuring the organization's logo and mission",
    "/mug.jpg": "Dr. Interested mug - Branded drinkware for supporters of youth healthcare education",
  }

  const items: string[] = []

  blogPosts.forEach((post) => {
    const postUrl = `${baseUrl}/blog/${post.slug}`
    const imageUrl = `${baseUrl}${post.coverImage}`
    const authorImageUrl = `${baseUrl}${post.author.image}`
    const pubDate = new Date(post.date).toUTCString()

    items.push(`
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${escapeXml(postUrl)}</link>
      <guid isPermaLink="true">${escapeXml(postUrl)}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author><![CDATA[${post.author.name}]]></author>
      <category>${escapeXml(post.topic)}</category>
      <media:content url="${escapeXml(imageUrl)}" medium="image" type="image/jpeg">
        <media:title><![CDATA[${post.title} - Cover Image]]></media:title>
        <media:description><![CDATA[${imageDescriptions[post.coverImage] || `Cover image for ${post.title} - ${post.excerpt}`}]]></media:description>
      </media:content>
      <media:content url="${escapeXml(authorImageUrl)}" medium="image" type="image/jpeg">
        <media:title><![CDATA[${post.author.name} - Author Photo]]></media:title>
        <media:description><![CDATA[${imageDescriptions[post.author.image] || `${post.author.name} - ${post.author.bio}`}]]></media:description>
      </media:content>
      <content:encoded><![CDATA[
        <img src="${escapeXml(imageUrl)}" alt="${escapeXml(post.title)}" />
        ${post.content}
      ]]></content:encoded>
    </item>`)
  })

  webinars.forEach((webinar) => {
    const webinarUrl = `${baseUrl}/watch/${webinar.slug}`
    const thumbnailUrl = `${baseUrl}${webinar.thumbnailPath}`
    const pubDate = new Date(webinar.date).toUTCString()

    items.push(`
    <item>
      <title><![CDATA[${webinar.title}]]></title>
      <link>${escapeXml(webinarUrl)}</link>
      <guid isPermaLink="true">${escapeXml(webinarUrl)}</guid>
      <description><![CDATA[${webinar.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>Webinar</category>
      <category>Medical Education</category>
      ${webinar.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("\n      ")}
      ${webinar.speaker ? `<author><![CDATA[${webinar.speaker}]]></author>` : ""}
      <media:content url="${escapeXml(thumbnailUrl)}" medium="image" type="image/jpeg">
        <media:title><![CDATA[${webinar.title} - Thumbnail]]></media:title>
        <media:description><![CDATA[${imageDescriptions[webinar.thumbnailPath] || webinar.description}]]></media:description>
      </media:content>
      <media:content url="${escapeXml(webinar.youtubeUrl)}" medium="video" type="video/mp4" duration="${escapeXml(webinar.duration)}">
        <media:title><![CDATA[${webinar.title}]]></media:title>
        <media:description><![CDATA[${webinar.longDescription}]]></media:description>
      </media:content>
      <content:encoded><![CDATA[
        <img src="${escapeXml(thumbnailUrl)}" alt="${escapeXml(webinar.title)}" />
        <p>${webinar.longDescription}</p>
        <p><strong>Duration:</strong> ${escapeXml(webinar.duration)}</p>
        <p><strong>Views:</strong> ${webinar.views}</p>
        ${webinar.speaker ? `<p><strong>Speaker:</strong> ${escapeXml(webinar.speaker)}</p>` : ""}
        <p><a href="${escapeXml(webinar.youtubeUrl)}" target="_blank">Watch on YouTube</a></p>
        ${webinar.spotifyUrl ? `<p><a href="${escapeXml(webinar.spotifyUrl)}" target="_blank">Listen on Spotify</a></p>` : ""}
      ]]></content:encoded>
    </item>`)
  })

// ===== Add Members =====
  const allMembers: MemberType[] = getAllMembers()

  allMembers.forEach((member) => {
    const memberUrl = `${baseUrl}/team/${member.id}`
    const imageUrl = `${baseUrl}${member.image}`
    const memberImageDescription =
      member.image === "/logo.png"
        ? `${member.name}, ${member.role}`
        : imageDescriptions[member.image] || `${member.name}, ${member.role}`
    // Use a fixed valid date for team members instead of current date
    const pubDate = new Date("2025-01-01T00:00:00Z").toUTCString()

    items.push(`
    <item>
      <title><![CDATA[${member.name} - ${member.role}]]></title>
      <link>${escapeXml(memberUrl)}</link>
      <guid isPermaLink="true">${escapeXml(memberUrl)}</guid>
      <description><![CDATA[${member.bio}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>Team Member</category>
      <media:content url="${escapeXml(imageUrl)}" medium="image" type="image/jpeg">
        <media:title><![CDATA[${member.name} - Headshot]]></media:title>
        <media:description><![CDATA[${memberImageDescription}]]></media:description>
      </media:content>
      <content:encoded><![CDATA[
        <img src="${escapeXml(imageUrl)}" alt="${escapeXml(member.name)}" />
        <p><strong>${escapeXml(member.role)}</strong></p>
        <p>${member.bio}</p>
        ${
          member.socialLinks
            ? Object.entries(member.socialLinks)
                .map(([key, url]) =>
                  url
                    ? `<p><a href="${escapeXml(url)}" target="_blank">${escapeXml(key)}</a></p>`
                    : ""
                )
                .join("")
            : ""
        }
      ]]></content:encoded>
    </item>`)
  })

  // ===== Add Events =====
  const events: EventType[] = [...upcomingEvents, ...pastEvents]

  events.forEach((event: EventType) => {
    // Check if the link is already an absolute URL
    const isExternalLink = event.link.startsWith('http://') || event.link.startsWith('https://')
    const eventUrl = isExternalLink ? event.link : `${baseUrl}${event.link}`
    
    // Skip external links to comply with sitemap/RSS feed standards
    // External URLs (from different domains) should not be in sitemaps
    if (isExternalLink) {
      return
    }
    
    const imageUrl = `${baseUrl}${event.image}`
    // Ensure event.date is a valid date string
    let pubDate: string
    try {
      const eventDate = new Date(event.date)
      // Check if date is valid
      if (isNaN(eventDate.getTime())) {
        pubDate = new Date("2025-01-01T00:00:00Z").toUTCString()
      } else {
        pubDate = eventDate.toUTCString()
      }
    } catch {
      pubDate = new Date("2025-01-01T00:00:00Z").toUTCString()
    }

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
        <media:description><![CDATA[${imageDescriptions[event.image] || event.description}]]></media:description>
      </media:content>
      <content:encoded><![CDATA[
        <img src="${escapeXml(imageUrl)}" alt="${escapeXml(event.title)}" />
        <p>${event.description}</p>
        <p><strong>Date:</strong> ${escapeXml(event.date)}</p>
        <p><strong>Location:</strong> ${escapeXml(event.location)}</p>
        <p><a href="${escapeXml(eventUrl)}" target="_blank">Learn more</a></p>
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
