// Types for our events data
export type EventType = {
  title: string
  date: string
  time?: string
  location: string
  description: string
  image: string
  status: "open" | "full" | "completed" | "closed"
  link: string
  featured?: boolean
}

// Upcoming events data
export const upcomingEvents: EventType[] = [
  {
    title: "From Classroom to Career: Expanding Pathways in a Changing World",
    date: "January 27, 2026",
    time: "18:00 EST",
    location: "Virtual",
    description:
      "Held for the Learning Planet Festival by Dr. Interested in partnership with UNESCO and the Learning Planet Institute. This policy-focused session examines how education systems can better support young people's transition from learning to work in an era of rapidly changing careers. Traditional education pathways have often been designed around linear progressions, yet today's labour markets increasingly demand flexibility, early exposure, and interdisciplinary skill development.",
    image: "/unesco-webinar.png",
    status: "open",
    link: "https://discord.com/events/1321261267482312775/1464478936527274212",
  },
  {
    title: "Beyond the White Coat",
    date: "February 1 - 14, 2026",
    time: "Ongoing",
    location: "Virtual",
    description:
      "Explore diverse medical fields and discover hidden, lesser-known healthcare professions in this interactive 2-week event. Participants engage in three sequential activities: first, review informative sheets and short videos about unique healthcare careers; next, solve puzzles and navigate a virtual escape room themed around these professions; finally, choose a healthcare profession, select a related myth to debunk, and create a one-page resource to submit. Top submissions will be featured and celebrated!",
    image: "/Logos/Logo.png",
    status: "open",
    link: "TBD",
  },
  {
    title: "Power of Opportunity: Research",
    date: "February 7, 2026",
    time: "TBD",
    location: "Virtual",
    description:
      "In partnership with ColdMatchAI, Dr. Interested announces an upcoming webinar on how youth can break into research and shape their future outcomes. Through mentorship, research competitions, webinars, talks, and more, we're helping high school and young people explore and pursue specific medical careers.",
    image: "/Logos/Logo.png",
    status: "open",
    link: "TBD",
  },
  {
    title: "Importance of Words in Medicine",
    date: "March 7, 2026",
    time: "TBD",
    location: "Virtual",
    description:
      "In partnership with The Kindness and Smile Zone, Dr. Interested presents a webinar on medical literacy focused on the importance of proper communication in healthcare. This workshop helps families understand and navigate the healthcare system more confidently, featuring Muhammad Awais speaking on effective communication and logistical planning with medical professionals. A Q&A session will be offered at the end for questions and follow-ups.",
    image: "/Logos/Logo.png",
    status: "open",
    link: "TBD",
  },
  {
    title: "Office Hours",
    date: "June - Ongoing",
    time: "Whenever you need help",
    location: "Virtual",
    description:
      "Join our office hours for personalized support and guidance on your healthcare journey. Whether you have questions about our programs or need advice on your medical career path or even just life in general, we're here to help! Join our discord and go to #office-hours to book a time slot.",
    image: "/office-hours.png",
    status: "open",
    link: "https://discord.gg/pzbGRgsGXY",
  },
]

// Past events data
export const pastEvents: EventType[] = [
  {
    title: "Dr. Interested Simmon Chang Chess (Against Cancer) Club",
    date: "December 28, 2025",
    location: "Virtual",
    description:
      "Registration Open for Weiss Open (CFC Rated). Hosted by The Dr. Interested Simmon Chang Chess (Against Cancer) Club. Entry Fee: $15. Complete the registration form and send an Interac e-transfer with your Lichess username, name, and CFC-ID to redlory23@gmail.com. All proceeds benefit PCRF — 100% of tournament proceeds are donated to the Pediatric Cancer Research Foundation.",
    image: "/chessdrint.png",
    status: "completed",
    link: "https://chess.drinterested.org",
  },
  {
    title: "Cards for Doctors",
    date: "Dec 1st, 2025 - Dec 19th, 2025",
    location: "Virtual",
    description:
      "Join us in celebrating doctors for their dedication and care! 💙 Help spread gratitude by designing appreciation cards that will be distributed to doctors across the Greater Toronto Area by our team. Cards may be handwritten or digitally designed, and messages should be positive and professional. Volunteer Hours: 0.5 hours per card. Maximum of 20 cards per person (up to 10 hours).",
    image: "/cardsfordoctors.png",
    status: "completed",
    link: "https://www.instagram.com/p/DSgEZpyjh1k/",
  },
  {
    title: "EXPLORE³ Case Competition",
    date: "November 22, 2025",
    time: "9 AM – 4 PM",
    location: "TMU Ted Rogers School of Business",
    description:
      "Tackle real-world innovation challenges, receive mentorship from industry leaders, and present your ideas to expert judges. Includes case package, light refreshments, networking, and early access perks. Fee: $10. Spots are limited! Learn more: https://www.instagram.com/explore3comp/",
    image: "/ex3-logo.png",
    status: "completed",
    link: "https://www.instagram.com/p/DRk9lNagPR9/",
  },
  {
    title: "First Chess Against Cancer Tournament Complete!",
    date: "November 2025",
    location: "Virtual",
    description:
      "We’re excited to share that our first Chess Against Cancer tournament is officially done, and together we raised $105 CAD for the Pediatric Cancer Research Foundation! In honor of Simmon Chang, a remarkable young man who unfortunately passed away from osteosarcoma shortly after registering for the tournament, we have renamed our initiative the Simmon Chang Chess (Against Cancer) Club, with permission from his family. His courage and love for chess continue to inspire us and drive our mission to fight childhood cancer. Thank you to everyone who participated, donated, and helped make this first tournament a success!",
    image: "/chessdrint.png",
    status: "completed",
    link: "https://chess.drinterested.org",
  },
  {
    title: "Culture & Psychology Conference",
    date: "October 11, 2025",
    time: "1:30 PM - 5:30 PM EST",
    location: "York University, 169 Enterprise Blvd 3rd floor, Markham, ON L6G 0E7",
    description:
      "Join us for the Culture & Psychology Conference, hosted in partnership with the Bridge of Culture, on October 18, 2025, at York University’s YSpace (Markham Campus). This exciting event brings together experts, students, and professionals for a day of talks, workshops, and discussions exploring the intersection of culture, psychology, and mental health.",
    image: "/psych-conference.png",
    status: "closed",
    link: "/events/psychology-conference",
  },
  {
    title: "Dr. Interested Webinar Series Recap",
    date: "August - November 2025",
    location: "Virtual",
    description:
      "A recap of the Dr. Interested Webinar Series, featuring discussions on research, pre-med pathways, and health policy. Watch full recordings and explore key takeaways from each session.",
    image: "/webinarrecap.jpg",
    status: "completed",
    link: "/events/webinar-series-recap",
    featured: true,
  }, 
  {
    title: "Research Proposal Competition",
    date: "July 1 to September 1",
    time: "Independent",
    location: "Virtual",
    description:
      "Compete with students around the world to pitch a real research idea — no experience needed! Top 3 win mentorship and publication (Dr. Interested covers the $200 DOI cost). All participants receive certificates. Deadline: July 23.",
    image: "/RCPRecap.png",
    status: "closed",
    link: "https://www.instagram.com/p/DO_Peudgriv/",
  },
  {
    title: "Podcast Collaboration with BioMedizone",
    date: "June 2025",
    location: "Virtual",
    description: "Join our exciting podcast collaboration with BioMedizone to explore cutting-edge topics in healthcare and medical innovation. Sign-ups to make the podcast with us are now open!",
    image: "/biomedpodcast.png",
    status: "completed",
    link: "https://open.spotify.com/show/6SLlRUL6co6fPxckAdrigf",
  },
  {
    title: "Healthcare Media Promotion Event",
    date: "March 2025 - Ongoing",
    time: "Ongoing",
    location: "Virtual & Social Media Platforms",
    description: "Promoting healthcare-related media to spread awareness on medical topics and innovations.",
    image: "/media-event.png",
    status: "closed",
    link: "https://www.instagram.com/p/DLN6eRTvJZc/m",
  },
  {
    title: "Podcast Collaboration with Health Beyond Borders",
    date: "May 2025",
    location: "Virtual",
    description:
      "A collaborative podcast with Health Beyond Borders, featuring discussions on youth engagement in global health equity. Check out the recap!",
    image: "/hbbpodcast.png",
    status: "completed",
    link: "https://open.spotify.com/show/6SLlRUL6co6fPxckAdrigf",
  },
  {
    title: "The Resilient Minds Project",
    date: "April 27, 2025",
    time: "2:00 PM - 4:00 PM EST",
    location: "Google Meet",
    description:
      "A virtual initiative aimed at empowering youth with practical strategies to improve mental, emotional, and physical well-being. Through engaging workshops, interactive activities, and expert insights, participants will gain valuable skills in stress management, resilience-building, and self-care.",
    image: "/mindsproject.png",
    status: "completed",
    link: "https://www.instagram.com/p/DI9yuL0u8SK/?img_index=1",
  },
  {
    title: "Dr. Interested Medical-Technological Compitition",
    date: "March 2025",
    location: "Virtual Event",
    description:
      "Participants worked on research projects and technological innovations in medicine, culminating in final presentations.",
    image: "/research.png",
    status: "completed",
    link: "/events/internship-recap",
  },
  {
    title: "Dr. Interested Creative Contest",
    date: "February 2025",
    location: "Virtual Event",
    description:
      "Encouraged students to creatively express their passion for healthcare through art, writing, and multimedia projects.",
    image: "/competition.png",
    status: "completed",
    link: "https://www.instagram.com/p/DHBvw9WOyKj/?img_index=1",
  },
  {
    title: "Virtual Cards for Nurses",
    date: "January 2025 - February 2025",
    location: "Virtual Event",
    description:
      "Participants created over 375 virtual appreciation cards for nurses to recognize their dedication and hard work.",
    image: "/cards.png",
    status: "completed",
    link: "https://www.instagram.com/p/DGjvbTNup3c/",
  },
]

// Helper function to get the latest ongoing event
export const getLatestOngoingEvent = (): EventType | undefined => {
  return upcomingEvents.find(
    (event) =>
      event.featured ||
      event.date.toLowerCase().includes("ongoing") ||
      new Date(event.date.split(" - ")[1] || event.date) >= new Date(),
  )
}
