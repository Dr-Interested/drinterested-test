export interface Webinar {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  date: string
  views: number
  duration: string
  videoPath: string // Path to video file in public folder
  thumbnailPath: string // Path to thumbnail in public folder
  youtubeUrl: string
  spotifyUrl?: string
  tags: string[]
  host?: string
  speaker?: string
  transcript?: string
}

export const webinars: Webinar[] = [
  {
    id: "5",
    slug: "demystifying-research-papers",
    title: "Dr. Interested Webinar Series #5: Demystifying Research Papers From Literature Review to Publication",
    description:
      "Watch the full recording of our fifth Dr. Interested Webinar, featuring Chinthala Trisha Goud. In this session, Trisha breaks down the research process step by step — from reviewing existing literature to writing and publishing your own paper.",
    longDescription:
      "Perfect for students, early researchers, and anyone curious about how academic research really works. Learn the complete research paper process from literature review to publication, including practical tips for writing, formatting, and submitting your work to journals. Hosted by Dr. Interested — empowering youth to explore health, science, and research.",
    date: "October 10, 2025",
    views: 19,
    duration: "25:25",
    videoPath: "/drintresearchwebinar.mp4", // UPDATE THIS PATH
    thumbnailPath: "/drintthumbnaildemistifiyingreasearch.png", // UPDATE THIS PATH
    youtubeUrl: "https://youtu.be/8G57EJFUZzE?si=JInq2f-H9BpM1_vb",
    spotifyUrl: "https://open.spotify.com/episode/4Z4UkUTF7AldXtoyujxzdK?si=86b5ed24a7194b10",
    tags: ["ResearchPaper", "MedicalResearch", "ScienceEducation", "AcademicWriting", "Publication"],
    speaker: "Chinthala Trisha Goud",
    host: "Dr. Interested Webinar Series",
  },
  {
    id: "4",
    slug: "pathways-to-med-school",
    title: "Dr. Interested Webinar Series #4: Pathways to Med School: Master's, PhD, and Gap Year Options",
    description:
      "Youth exploring medicine, this one's for you! In this webinar, Kate Tucker breaks down the different pathways to medical school, including pursuing a Master's, a PhD, or taking a gap year.",
    longDescription:
      "Learn the pros and cons of each path, how to prepare effectively, and tips for making decisions that align with your goals. Whether you're planning your pre-med journey, considering research opportunities, or curious about gap year strategies, this session gives practical advice and inspiration to navigate your next steps confidently.",
    date: "October 6, 2025",
    views: 31,
    duration: "32:31",
    videoPath: "/drintpathwaystomedwebinar.mp4", // UPDATE THIS PATH
    thumbnailPath: "/drintthumbnailpathwaystomed.png", // UPDATE THIS PATH
    youtubeUrl: "https://youtu.be/dZj0Oi0aKPw?si=7nOnJz1coLZG5356",
    spotifyUrl: "https://open.spotify.com/episode/5ru345a1LG0AUHKYonqqvM?si=cc04b6676d1e4efe",
    tags: ["PreMed", "Education", "StudentSuccess", "MedicalSchool", "GapYear", "GraduateSchool"],
    speaker: "Kate Tucker",
    host: "Dr. Interested Webinar Series",
  },
  {
    id: "3",
    slug: "premed-competitions",
    title: "Dr. Interested Webinar Series: #3 Premed Competitions — How to Find, Prepare, and Excel",
    description:
      "Thinking about entering premed competitions? Whether it's science fairs, Olympiads, medical journalism, or research challenges — this session breaks down how to discover the right opportunities, prepare strategically, and excel in the process.",
    longDescription:
      "Hosted by Dr. Interested with insights from youth leaders and aspiring medical professionals, this webinar is designed to support high school and undergraduate students on their premed journey. Learn proven strategies for competition success and how to make your applications stand out.",
    date: "September 14, 2025",
    views: 28,
    duration: "29:48",
    videoPath: "/drintpremedcompwebinar.mp4", // UPDATE THIS PATH
    thumbnailPath: "/drintthumbnailpremedcomps.png", // UPDATE THIS PATH
    youtubeUrl: "https://youtu.be/3YPxHLOdsOU?si=giCeC-MCk0R7JlOK",
    spotifyUrl: "https://open.spotify.com/episode/2ZajhQT5piThDtwZgdk1dX?si=9550ca993e8d4c8c",
    tags: ["Premed", "MedicalSchool", "FutureDoctors", "Competitions", "ScienceFair"],
    host: "Dr. Interested Webinar Series",
  },
  {
    id: "2",
    slug: "youth-impact-health-policy",
    title: "Dr. Interested Webinar Series: #2 How Youth Can Impact Health Policy w/ our Exec Dir Adil Mukhi",
    description:
      "Youth voices matter in shaping the future of healthcare. In this webinar, our Executive Director Adil Mukhi shares insights on how young people can influence policy, advocate for change, and contribute meaningfully to health systems.",
    longDescription:
      "Whether you're a student, aspiring leader, or passionate about advocacy, this session will give you tools and inspiration to get started in health policy. Learn about real-world examples of youth-led policy initiatives and discover pathways to make your voice heard in healthcare decision-making.",
    date: "September 7, 2025",
    views: 109,
    duration: "28:55",
    videoPath: "/drintpolicywebinar.mp4", // UPDATE THIS PATH
    thumbnailPath: "/drintthumbnailpolicy.png", // UPDATE THIS PATH
    youtubeUrl: "https://youtu.be/8Mp9ulR7L4Y?si=eyAZF1DVFzO9uscQ",
    spotifyUrl: "https://open.spotify.com/episode/4CwnZwJufNXRcB7iGzrObO?si=2e5148b845e94246",
    tags: ["YouthLeadership", "HealthPolicy", "DrInterested", "Advocacy", "Healthcare", "Adil Mukhi"],
    speaker: "Adil Mukhi",
    host: "Dr. Interested Webinar Series",
  },
  {
    id: "1",
    slug: "exploring-medicine-early",
    title: "Dr Interested Webinar Series: #1 Exploring Medicine Early & Choosing the Right Major for You",
    description:
      "Join us for the Dr. Interested Webinar Series as we explore how to get a head start in medicine and choose the right major for your future career!",
    longDescription:
      "In this session, you'll learn how to explore medicine early as a high school or college student, tips for choosing a major that aligns with your career goals, and insights from medical students and professionals. Perfect for students just starting their pre-med journey.",
    date: "August 31, 2025",
    views: 44,
    duration: "29:56",
    videoPath: "/drintexploremed-chossemajorwebinar.mp4", // UPDATE THIS PATH
    thumbnailPath: "/drintthumbnailmedearly-majors.png", // UPDATE THIS PATH
    youtubeUrl: "https://youtu.be/al1ybYrlMi4?si=ZJHEYbNNyA4td7ss",
    spotifyUrl: "https://open.spotify.com/episode/5cmZdrgxarbyCci9DeBdzD?si=c8d6f3256a5e41d3",
    tags: ["PreMed", "MedicalSchool", "CollegeMajor", "CareerPlanning", "HighSchool"],
    host: "Dr. Interested Webinar Series",
  },
]

export function getWebinarBySlug(slug: string): Webinar | undefined {
  return webinars.find((webinar) => webinar.slug === slug)
}

export function getAllWebinarSlugs(): string[] {
  return webinars.map((webinar) => webinar.slug)
}
