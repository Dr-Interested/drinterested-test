// Types for our data
export type MemberType = {
  id: string
  name: string
  role: string
  image: string
  bio: string
  socialLinks?: {
    linkedin?: string
    instagram?: string
    website?: string
    other?: string
  }
}

export type DepartmentType = {
  id: string
  name: string
  description: string
  director: MemberType | MemberType[]
  deputyDirectors?: MemberType[]
  coordinators: MemberType[]
}

const placeholderBio = "Bio coming soon."

// Executive Director data
export const executiveDirector: MemberType = {
  id: "executive-director",
  name: "Adil Mukhi",
  role: "Executive Director",
  image: "/adil.png",
  bio: "I started Dr. Interested after seeing too many youth struggle to navigate med school paths or build core skills like research and public speaking. This platform exists to change that--by giving students the tools and guidance they need to thrive. Beyond this, I'm a public speaker, youth advocate & changemaker! I lead initiatives that empower tens of thousands of young people, including founding Dr. Interested and contributing to the Play-to-Heal movement. I've supported youth-focused research and policy, including a CIHR grant with SickKids for the OPTIMAL Project and recommendations presented to the Future of Sport in Canada Commission. Passionate about mentorship, research, and leadership, I aim to create opportunities for youth to innovate and lead. If you want to learn more about me, feel free to check out my website, which I am sure is linked somewhere",
  socialLinks: {
    website: "https://adilmukhi.vercel.app/",
    linkedin: "https://www.linkedin.com/in/adil-mukhi-6aba27246/",
    instagram: "https://www.instagram.com/adilm.0/",
  },
}

// Deputy Executive Directors data
export const deputyexecdir: MemberType[] = [
  {
    id: "deputyexec1",
    name: "Velan Mangai",
    role: "Deputy Executive Director",
    bio: "Velan Mangai Sivakumar is extremely passionate about STEM and biological sciences in particular. He has volunteered for many STEM organizations such as the Rosalind Franklin Institute. He is a trainer for HOSA (Health Occupation Students of America). His best result in STEM contests would be getting top 25 nationally and qualifying for the national camp in the Junior Science Olympiad of Canada. He also plays chess and his best results include qualifying for the Canadian Youth Chess Championship U16 twice and getting 4th in the Canadian Chess League Twice.",
    image: "/velan.png",
    socialLinks: {},
  },
  {
    id: "deputyexec2",
    name: "Kishan Suhirthan",
    role: "Deputy Executive Director",
    bio: "Kishan Suhirthan is a student with a strong passion for engineering and technology. As a Flight Sergeant in the Royal Canadian Air Cadet Program, he has developed strong leadership and organizational skills. His involvement with Innovire and FRC Team 1325 \"Inverse Paradox\" highlights his teamwork, creativity, and technical expertise. Proficient in both software development and electrical systems, Kishan is a dedicated and well-rounded individual committed to excellence in every project he undertakes.",
    image: "/kishan-headshot.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/kishansuhirthan",
      instagram: "https://instagram.com/k1shxnsuh1",
      website: "https://kishansuhi.acelabsai.tech",
    },
  },
]

// Executive Assistants data
export const executiveAssistants: MemberType[] = [
  {
    id: "exec-assistant-anish-kurra",
    name: "Anish Kurra",
    role: "Executive Assistant",
    bio: placeholderBio,
    image: "/logo.png",
  },
  {
    id: "exec-assistant-calvin-lin",
    name: "Calvin Lin",
    role: "Executive Assistant",
    bio: placeholderBio,
    image: "/logo.png",
  },
  {
    id: "exec-assistant-mehjabin-majid",
    name: "Mehjabin Majid",
    role: "Executive Assistant",
    bio: placeholderBio,
    image: "/logo.png",
  },
]

export const advisors: MemberType[] = [
  {
    id: "Chinthala-Trisha-goud",
    name: "Chinthala Trisha Goud",
    role: "Medical Student Advisor",
    bio: "Joined Dr. Interested to help students find clarity and confidence in their journey whether that's through research, academics, or figuring out where they belong in the world of medicine. As a medical student at Can Tho University of Medicine and Pharmacy, I've taken on leadership roles, mentored peers, and worked on creative and academic projects that fuel both growth and collaboration. I'm passionate about making things easier for others whether it's guiding them through research opportunities, academic planning, or just sharing what I've learned along the way. If you're trying to do something meaningful, feel free to reach out I'm always happy to help.",
    image: "/chinthala.png",
    socialLinks: {},
  },
  {
    id: "akeer-kuol-malual",
    name: "Akeer Kuol Malual",
    role: "Medical Student Advisor",
    bio: "Hi, I'm Akeer Kuol Malual Nyok, a student at the University of Juba, where I'm currently pursuing my Bachelor of Medicine and Surgery. I'm especially passionate about  the human brain and hope to explore fields like neurosurgery, neurology, or even general surgery. I am also a research writer and an advocate for accessible healthcare and education, especially for underrepresented communities. I believe in learning with purpose, leading with compassion, and growing alongside the people I get to support. I also deeply care about making space for others, listening deeply, and showing up with intention in everything I pursue.  I'm excited to be part of Dr. Interested and look forward to learning, growing, and contributing within such a meaningful community.",
    image: "/akeer-med.png",
    socialLinks: {
      linkedin: 'http://linkedin.com/in/akeer-kuol-malual-nyok-94a388272',
      instagram: 'https://www.instagram.com/lifeof.akm/',
    },
  },
  {
    id: "muhammad-shamoon-umerani",
    name: "Muhammad Shamoon Umerani",
    role: "Medical Student Advisor",
    bio: "I joined Dr. Interested to help students bridge the gap between ambition and direction--whether it's navigating research, understanding medicine, or finding where they fit in this field. Having mentored peers, led academic teams, and worked on multiple research projects, I know how much of a difference the right guidance can make. Outside of this, I'm a medical student at Al Faisal University, involved in systematic reviews, peer tutoring, and student leadership. I'm always up to support anyone who's trying to do something meaningful--just reach out.",
    image: "/shamoon.png",
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/muhammad-shamoon-umerani-8593701b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/shamoon._03?igsh=Yjh1emZmbDE0dDJs&utm_source=qr'
    },
  },
  {
    id: "kate-tucker",
    name: "Kate Tucker",
    role: "Medical Student Advisor",
    bio: "Kate Tucker (she/her) is a second-year medical student at the Northern Ontario School of Medicine University. Prior to studying medicine, Kate completed a Bachelor of Philosophy in Interdisciplinary Leadership and Masters of Applied Health Services Research at the University of New Brunswick. Her graduate research explored the experiences of older adults without primary care providers and she worked closely with a palliative care research team. Kate greatly enjoys working with high school and undergraduate students with an interest in traditional and untraditional paths to medicine and can often be found on an active outdoor adventure when she is not studying. Kate can be reached by email at ktucker@nosm.ca",
    image: "/katetucker.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kate-tucker2001/",
    },
  },
  {
    id: "saleha-jadoon",
    name: "Saleha Jadoon",
    role: "Medical Student Advisor",
    bio: "Saleha serves as a medical student advisor, offering insights into medical education pathways and career development.",
    image: "/logo.png",
    socialLinks: {},
  },
]

// Departments data
export const departments: DepartmentType[] = [
  {
    id: "tech",
    name: "Technology Department",
    description:
      "The Technology Department manages our digital presence, website development, and technical infrastructure to ensure seamless communication and engagement with our community.",
    director: {
      id: "tech-director-arghya-vyas",
      name: "Arghya Vyas",
      role: "Director - Technology",
      image: "/arghya.jpg",
      bio: "An aspiring tech innovator, Arghya brings 2-3 years of robotics experience along with a strong understanding of programming languages such as JavaScript and TypeScript. Arghya's experience extends to working with libraries like discord.py and Next.js through personal projects and organizational development initiatives. As the founder of CalcIB, Arghya maintains a 95%+ average while leading collaborative efforts, including UX and graphic design, as well as the web development team at FutureMD. Arghya also actively competes in the Vex Robotics Competition as a member of team 31331. Proficient in Microsoft Office and Google Workspace, Arghya is driven by a passion for technology and a commitment to excelling in every endeavor.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/arghya-vyas-2a40a72b1/",
        instagram: "https://www.instagram.com/arghyavarfet/",
        website: "https://arghyav.vercel.app",
      },
    },
    deputyDirectors: [
      {
        id: "tech-deputy-ryan-rawal",
        name: "Ryan Rawal",
        role: "Deputy Director - Technology (Systems & Automation (Blogs + AI) Team)",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "tech-deputy-lucia-adams",
        name: "Lucia Adams",
        role: "Deputy Director - Technology (Website Management Team)",
        image: "/logo.png",
        bio: placeholderBio,
      },
    ],
    coordinators: [
      {
        id: "tech-coordinator-bhavish-mehta",
        name: "Bhavish Mehta",
        role: "Coordinator - Technology",
        image: "/Bhavish.jpg",
        bio: "Supporting the technology team with expertise in frontend development and user experience design.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/bhavish-mehta ",
          instagram: "https://www.instagram.com/bhavishmehta_371/",
        },
      },
      {
        id: "tech-coordinator-tathya-garg",
        name: "Tathya Garg",
        role: "Coordinator - Technology",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "tech-coordinator-orlando-chimankpa",
        name: "Orlando Chimankpa",
        role: "Coordinator - Technology",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "tech-coordinator-justin-luong",
        name: "Justin Luong",
        role: "Coordinator - Technology",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "tech-coordinator-fleur-larsen",
        name: "Fleur Larsen",
        role: "Coordinator - Technology",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "tech-coordinator-alaa-tayara",
        name: "Alaa Tayara",
        role: "Coordinator - Technology",
        image: "/logo.png",
        bio: placeholderBio,
      },
    ],
  },
  {
    id: "marketing",
    name: "Marketing Department",
    description:
      "The Marketing Department creates engaging content, manages our social media presence, and develops promotional materials to increase awareness of our mission and events.",
    director: {
      id: "marketing-director-hasaan-qidwai",
      name: "Hasaan Qidwai",
      role: "Director - Marketing",
      image: "/hasaan.png",
      bio: "Hasaan is a dedicated Grade 11 student enrolled in the IB DP Programme, where he excels in academics with an overall average of 95%+. Passionate about mathematics and design, Hasaan combines his enthusiasm with leadership skills through active participation as a COY Peer Helper, supporting Grade 9 and 10 students in mastering mathematics. Proficient in both Office 365 and Google Suite software, he demonstrates strong technical skills that complement his academic and mentoring pursuits.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/hasaan-ahmed-qidwai-890478346/",
      },
    },
    deputyDirectors: [
      {
        id: "marketing-deputy-ganesh-kartik-nagasubramanian",
        name: "Ganesh Kartik Nagasubramanian",
        role: "Deputy Director - Marketing (Posts: Creative & Design Team)",
        image: "/GaneshKartik_marketing.png",
        bio: "Ganesh Kartik is a Grade 11 DP IB student at Glenforest Secondary School, an outgoing and communicative person who is always ready to lend a helping hand. He has a strong interest in history, technology, and building, while also being a keen learner in anything STEM related. Being an active member of Dr. Interested, Ganesh Kartik helps run events which elevate the medicinal understanding of all those who participate, through his clear commitment and sheer hard work.",
        socialLinks: {
          linkedin: "http://www.linkedin.com/in/ganeshknagasubramanian",
        },
      },
      {
        id: "marketing-deputy-keenan-johnson",
        name: "Keenan Johnson",
        role: "Deputy Director - Marketing (Reels: Media & Engagement Team)",
        image: "/keenan.jpg",
        bio: placeholderBio,
      },
    ],
    coordinators: [
      {
        id: "marketing-coordinator-hasnain-ali",
        name: "Hasnain Ali",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: "Hasnain Ali is a Motivated and adaptable high school student with proven experience in digital marketing and content creation through roles such as content creation and digital marketing at Dr. Interested. Adept at developing innovative campaigns through effective team collaboration and strong communication skills. In addition to marketing experience, contributed as a dedicated volunteer at Seva Food Bank, assisting with customer service, food distribution, and inventory support. Committed to delivering high-quality projects on time, maintaining consistent branding, and providing reliable, hands-on support in fast-paced environments. Passionate about leveraging both creativity and customer-focused service to drive engagement and make a meaningful impact.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/hasnain-ali-891b26315/",
          instagram: "https://www.instagram.com/h2znain/",
        },
      },
      {
        id: "marketing-coordinator-david-santoso",
        name: "David Santoso",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-chetna-prabhu",
        name: "Chetna Prabhu",
        role: "Coordinator - Marketing & Ambassador",
        image: "/ChetnaPrabhu_marketing.jpg",
        bio: "Chetna Prabhu is a dedicated grade 11 AP student taking AP French and AP Physics at St. Joseph's Secondary School. She loves content designing and digital creation, researching, learning new languages, and studying both science and mathematics. At school, she is part of the student council as Minister of Public Relations, DECA, HOSA, and the school's newspaper club. To Chetna, the youth has such a powerful role in being able to make change and am so excited to support the next generation of medical students who aspire to find opportunities and programs in medicine. She is a passionate student interested in pursuing biomedical engineering in the future and hopes to gain experience in healthcare, research, and marketing through this amazing opportunity with Dr. Interested as a marketing executive.",
      },
      {
        id: "marketing-coordinator-shiwali-gupta",
        name: "Shiwali Gupta",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: "Hi! I'm Shiwali Gupta, a 9th grader in Ohio. I was born in India, and moved to the US at 7 years old. I'm really interested in helping people in any way I can. I love to make everyone smile. Outside of school, I am in dance, taekwondo and many clubs for school.",
      },
      {
        id: "marketing-coordinator-kevin-dai",
        name: "Kevin Dai",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-raya-mohammad-ali",
        name: "Raya Mohammad",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-ugbath-abokor",
        name: "Ugbath Abokor",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-iris-chan",
        name: "Iris Chan",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-shreya-shobankumar",
        name: "Shreya S.",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-zahra-shaikh",
        name: "Zahra Shaikh",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-josephine-gyan",
        name: "Josephine Gyan",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-amna-bawany",
        name: "Amna Bawany",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-kaobichukwuha-kalunta",
        name: "Kaobichukwuha K.",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-ahana-chanda",
        name: "Ahana Chanda",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-selina-yu",
        name: "Selina Yu",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-melody-horoufi",
        name: "Melody Horoufi",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-natalie-lum",
        name: "Natalie Lum",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-sheza-sarfraz",
        name: "Sheza Sarfraz",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-rizky-febriyanto-saputra",
        name: "Rizky Febriyanto",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "marketing-coordinator-rachel-lum",
        name: "Rachel Lum",
        role: "Coordinator - Marketing",
        image: "/logo.png",
        bio: placeholderBio,
      },
    ],
  },
  {
    id: "publications",
    name: "Publications Department",
    description:
      "The Publications Department produces educational content, newsletters, and research publications to share knowledge and showcase the work of our coordinators.",
    director: {
      id: "publications-director-muhammad-lari",
      name: "Muhammad Lari",
      role: "Director - Publications",
      image: "/lari.png",
      bio: "Hi, I'm Muhammad Lari, a future engineer driven by curiosity and a desire to create meaningful change. I love exploring how things work and finding ways to improve them, whether through hands-on problem-solving or leading youth projects. I'm constantly looking for opportunities to learn, innovate, and build ideas that matter.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/muhammad-ibrahim-lari-67564230a/",
      },
    },
    deputyDirectors: [
      {
        id: "publications-deputy-manmeet-singh",
        name: "Manmeet Singh",
        role: "Deputy Director - Publications (Research & Production Team)",
        image: "/manmeet.png",
        bio: placeholderBio,
      },
      {
        id: "publications-deputy-olivia-mcintosh",
        name: "Olivia McIntosh",
        role: "Deputy Director - Publications (Review & Editing Team)",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "publications-deputy-adhi-ammanath",
        name: "Adhi Ammanath",
        role: "Deputy Director - Publications (Podcast Production Team)",
        image: "/logo.png",
        bio: placeholderBio,
      },
    ],
    coordinators: [
      {
        id: "publications-coordinator-dabosmita-parial",
        name: "Dabosmita Parial",
        role: "Coordinator - Publications",
        image: "/Dabosmita.png",
        bio: "Hi, I'm Dabosmita! A student who loves psychology and medicine, I hope to pursue a career in either one of those or maybe both combined! Other than that, I am an avid public speaker who loves to partake in debates especially those involving ethics and childhood. In addition to all of this, I am always looking forward to opportunities to research and volunteer as I aspire to improve my skills over the next few years.",
      },
      {
        id: "publications-coordinator-nastaho-mohamed",
        name: "Nastaho Mohamed",
        role: "Coordinator - Publications",
        image: "/nashto.png",
        bio: "Hi, my name is Nastaho Mohamed. I'm passionate about health science and aspiring to become a pediatrician. I've always been interested in understanding how the body works and how medical care can change someone's life, especially for children. Helping my community is important to me, and I want to use my future career to support families, improve access to care, and make a positive difference. I'm motivated to keep learning, gaining experience, and building the skills I need to reach my goals.",
      },
      {
        id: "publications-coordinator-manha-atiq",
        name: "Manha Atiq",
        role: "Coordinator - Publications",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "publications-coordinator-aiza-rasheed",
        name: "Aiza Rasheed",
        role: "Coordinator - Publications",
        image: "/aiza.png",
        bio: " Hi, I'm Aiza! I'm a student looking to pursue Psychology and Philosophy in university as I have an immense passion for both subjects. I'm hoping to become a psychologist when I am older and eventually teach as a professor! Additionally, I absolutely love reading, mostly I read classics, philosophy, psychology and medical papers.",
      },
      {
        id: "publications-coordinator-shaan-sharma",
        name: "Shaan Sharma",
        role: "Coordinator - Publications",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "publications-coordinator-ishanshi-vegad",
        name: "Ishanshi Vegad",
        role: "Coordinator - Publications",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "publications-coordinator-maqhawe-bonginkosi-larona-qame",
        name: "Maqhawe Bonginkosi",
        role: "Coordinator - Publications",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "publications-coordinator-chloe-jhazmynne-t-co",
        name: "Chloe Jhazmynne",
        role: "Coordinator - Publications",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "publications-coordinator-oliver-novysedlak",
        name: "Oliver Novysedlák",
        role: "Coordinator - Publications",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "publications-coordinator-asiya-farooqi",
        name: "Asiya Farooqi",
        role: "Coordinator - Publications",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "publications-coordinator-dwarka",
        name: "Dwarka",
        role: "Coordinator - Publications (Graphic Designer)",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "publications-coordinator-sarra-da",
        name: "Sarra Da",
        role: "Coordinator - Publications",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "publications-coordinator-sanaya",
        name: "Sanaya",
        role: "Coordinator - Publications",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "publications-coordinator-areebah-butool",
        name: "Areebah Butool",
        role: "Coordinator - Publications",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "publications-coordinator-alka-meena",
        name: "Alka Meena",
        role: "Coordinator - Publications",
        image: "/logo.png",
        bio: placeholderBio,
      },
    ],
  },
  {
    id: "hr",
    name: "Human Resources Department",
    description:
      "The Human Resources Department manages recruitment, onboarding, and member engagement to foster a collaborative and supportive community.",
    director: {
      id: "hr-director-yumeth-wickramasinghe",
      name: "Yumeth Wickramasinghe",
      role: "Director - Human Resources",
      image: "/yumeth.png",
      bio: "Yumeth Wickramasinghe is a student at Glenforest Secondary School. He has been a part of many volunteering activities around the community,  such as the Egyptian Coptic festival and making cards for Kids during the Christmas season. He also volunteers in his school every week, helping out some of his peers with Mathematics and sometimes English. Some of his hobbies include reading, playing tennis and badminton as well as playing board games. He has been involved in the Junior Tennis Team at Glenforest and won Junior Athlete of the Month. He looks forward to continuing to develop his leadership skills and to succeed in new adventures in the future.",
      socialLinks: {
        linkedin: "http://www.linkedin.com/in/yumeth-w",
      },
    },
    deputyDirectors: [
      {
        id: "hr-deputy-vicky-shi",
        name: "Vicky Shi",
        role: "Deputy Director - Human Resources (Ambassadors Team)",
        image: "/logo.png",
        bio: "Hi! I'm a Grade 10 Pre-IB student at St.Roberts CHS. I'm passionate about creating inclusive, supportive environments where people can truly grow. Outside of work, I love reading, curating playlists that match every mood, and finding new ways to express myself creatively. I care deeply about personal development, mental wellness, and building real, meaningful connections with the people around me. Whether I'm helping someone navigate a tough situation or just being a sounding board, I try to bring thoughtfulness and intention to everything I do. I'm always looking for new ways to grow, learn, and make a positive impact, both in my work and in my everyday life.",
      },
      {
        id: "hr-deputy-chloe-young",
        name: "Chloe Young",
        role: "Deputy Director - Human Resources (Voluntime Management Team) & Ambassador",
        image: "/chloey.png",
        bio: "Hello, I am a grade 11 student in Ontario, Canada and I want to become a surgeon in the future. Some of my hobbies include building model kits, alpine skiing, and creative writing. I joined Dr. Interested because I love what they do and how they help youth along their pathway into medicine.",
      },
      {
        id: "hr-deputy-grasen-menns",
        name: "Grasen Menns",
        role: "Deputy Director - Human Resources (Culture & Recognition Team)",
        image: "/grasen.png",
        bio: "Hello there, my name is Grasen, but everyone calls me Gray. I'm a Grade 9 RAP Student in Ontario, Canada. I am super excited to be part of the Dr. Interested team and learn from youth across the world. I have always been interested in medicine and Healthcare. And believe this will be a wonderful experience. My interests are Music, Writing, and Nature. I hope to work in Law or Trauma Medicine. I hope to meet everyone here as a part of Dr Interested and get to know everyone's experiences!",
        socialLinks: {
          linkedin: "http://www.linkedin.com/in/grasen-menns-8980aa358",
          instagram: "https://www.instagram.com/grasen2025/",
        },
      },
      {
        id: "hr-deputy-charis-tsang",
        name: "Charis Tsang",
        role: "Deputy Director - Human Resources (Onboarding Team)",
        image: "/logo.png",
        bio: placeholderBio,
      },
    ],
    coordinators: [
      {
        id: "hr-coordinator-sayuri-tharun",
        name: "Sayuri Tharun",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-hamsini-punukollu",
        name: "Hamsini Punukollu",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-chinthala-trisha-goud",
        name: "Chinthala Trisha",
        role: "Coordinator - Human Resources",
        image: "/chinthala.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-maliha-metla",
        name: "Maliha Metla",
        role: "Coordinator - Human Resources",
        image: "/maliha.png",
        bio: "Hi! I'm Maliha Metla, a junior in high school passionate about medicine, community service, and creating meaningful change. Whether through my nonprofit work, medical internships, or local volunteering, I strive to help others and inspire hope in the communities I serve.",
      },
      {
        id: "hr-coordinator-gayathri-sriramula",
        name: "Gayathri Sriramula",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-hasini-pateel",
        name: "Hasini Pateel",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-nevin-rosario-baskar",
        name: "Nevin Rosario",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-jiyafarheen-shaik",
        name: "Jiyafarheen Shaik",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-sanad-rahman",
        name: "Sanad Rahman",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-mairah-amir",
        name: "Mairah Amir",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-esosa-oghide",
        name: "Esosa Oghide",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-arpita-solanki",
        name: "Arpita Solanki",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-payton-ford",
        name: "Payton Ford",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-lana-asiri",
        name: "Lana Asiri",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-elvis-wang",
        name: "Elvis Wang",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-shivani-ramesh-kanna",
        name: "Shivani Ramesh",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-simranjeet-kaur",
        name: "Simranjeet kaur",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-aishani-kola",
        name: "Aishani Kola",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-connie-lu",
        name: "Connie Lu",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "hr-coordinator-hirannya-kumaresan",
        name: "Hirannya kumaresan",
        role: "Coordinator - Human Resources",
        image: "/logo.png",
        bio: placeholderBio,
      },
    ],
  },
  {
    id: "events",
    name: "Events Department",
    description:
      "The Events Department plans and executes webinars, workshops, and networking events to provide valuable learning experiences for our coordinators.",
    director: {
      id: "events-director-ali-salman",
      name: "Ali Salman",
      role: "Director - Events",
      image: "/ali-salman.jpeg",
      bio: "Ali Salman is a student pursuing the IB program. He is deeply passionate about engineering, robotics, and computer science, demonstrated through his involvement in school and external initiatives. At school, he serves as the Secretary and Trainer of the Computer Science Club and was part of the pit-crew team for the FRC Robotics Club before it disbanded. Outside of school, he is a logistics member at a STEM nonprofit, writes for prominent student-led science journals, and is part of the mechanical sub-team for one of Ontario's top 10 ranked FRC robotics teams. His most prominent achievements include being recognized as a global finalist at the prestigious New York Academy of Sciences Junior Academy Ethical AI competition.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/ali-salman-569975294/",
      },
    },
    deputyDirectors: [
      {
        id: "events-deputy-cienna-thames",
        name: "Cienna Thames",
        role: "Deputy Director - Events (Logistics Team)",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "events-deputy-jawwad-ahmad",
        name: "Jawwad Ahmad",
        role: "Deputy Director - Events (Planning Team)",
        image: "/Jawwad_marketing.png",
        bio: "Hi, my name is Jawwad. I'm a Grade 11 IB student who has an interest in Engineering, Robotics and STEM. I have participated in many volunteering activities like Peer Helpers and at the YMCA. I have also participated in clubs like DECA and Peer Helpers. I look forward to collaborating on cutting edge ideas that push the boundaries of what's possible.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/jawwad-ahmad-15197b32a/",
          instagram: "https://www.instagram.com/jawwad0806/",
        },
      },
      {
        id: "events-deputy-lalit-sai",
        name: "Lalit Sai",
        role: "Deputy Director - Events (Outreach Team)",
        image: "/logo.png",
        bio: placeholderBio,
      },
    ],
    coordinators: [
      {
        id: "events-coordinator-meerab-murtaza",
        name: "Meerab Murtaza",
        role: "Coordinator - Events",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "events-coordinator-adrina-kaylee-manojhkumar",
        name: "Adrina Kaylee",
        role: "Coordinator - Events",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "events-coordinator-fadumo",
        name: "Fadumo",
        role: "Coordinator - Events",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "events-coordinator-swasthikaa-sree",
        name: "Swasthikaa Sree",
        role: "Coordinator - Events",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "events-coordinator-maryam-sadat",
        name: "Maryam Sadat",
        role: "Coordinator - Events",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "events-coordinator-esther-nnaji",
        name: "Esther Nnaji",
        role: "Coordinator - Events",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "events-coordinator-ayanna-javier",
        name: "Ayanna Javier",
        role: "Coordinator - Events",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "events-coordinator-prithi-balaji",
        name: "Prithi Balaji",
        role: "Coordinator - Events",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "events-coordinator-tarek-osama-mohamed-amin",
        name: "Tarek Osama",
        role: "Coordinator - Events",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "events-coordinator-farheen-amir",
        name: "Farheen Amir",
        role: "Coordinator - Events",
        image: "/logo.png",
        bio: placeholderBio,
      },
    ],
  },
  {
    id: "grants",
    name: "Finance Department",
    description:
      "The Finance Department secures funding through grants and sponsorships to support our initiatives and expand our impact.",
    director: {
      id: "finance-director-liam-lacey",
      name: "Liam Lacey",
      role: "Director - Finance",
      image: "/liam.png",
      bio: "Liam is a student who's interested in learning more about the financial workings of healthcare, and its subsectors, ultimately to pursue his own goal of heading into the business world and its many avenues. He has volunteered in several events as a prominent member of the Athletic Council within Glenforest SS, in addition to other clubs including the Rock Band and DECA. He aims to further improve my own leadership skills, while also focusing on expanding his repertoire of financial knowledge, and its workings within different industries. He is looking forward to continuing his pursuit of learning more about the finance and business space, while being a strong contributor to Dr.Interested",
    },
    deputyDirectors: [
      {
        id: "finance-deputy-vedanshi-raheja",
        name: "Vedanshi Raheja",
        role: "Deputy Director - Finance (Donations & Sponsorships Team)",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-deputy-dhruv-solanki",
        name: "Dhruv Solanki",
        role: "Deputy Director - Finance (Grants & Reporting Team)",
        image: "/dhruv.png",
        bio: "I am a Grade 11 IB student at Glenforest Secondary School with a strong interest in business and technology. I actively volunteer in my community, including at local food banks such as Seva. I am also a finance member in Dr. Interested, where I continue to build my skills in financial analysis and leadership. I am committed to exploring the intersection of business and tech while growing as a dedicated student, volunteer, and future innovator.",
      },
      {
        id: "finance-deputy-soham-somani",
        name: "Soham Somani",
        role: "Deputy Director - Finance (Budgeting & Planning Team)",
        image: "/soham.png",
        bio: placeholderBio,
      },
    ],
    coordinators: [
      {
        id: "finance-coordinator-zainab-azeem",
        name: "Zainab Azeem",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-kaitlin-lall",
        name: "Kaitlin Lall",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-candace-hei-lam-hon",
        name: "Candace Hei",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-neah-john",
        name: "Neah John",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-haniah-saeed",
        name: "Haniah Saeed",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-ayona-jaswal",
        name: "Ayona Jaswal",
        role: "Coordinator - Finance & Ambassador",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-christine-li",
        name: "Christine Li",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-ben-zhang",
        name: "Ben Zhang",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-jaden-kang",
        name: "Jaden Kang",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-jinosha-jeyaprasanth",
        name: "Jinosha Jeyaprasanth",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-sanvi-kandi",
        name: "Sanvi Kandi",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-abdulroheem-kehinde-idris",
        name: "Abdulroheem Kehinde",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-elio-sllogu",
        name: "Elio Sllogu",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-emily-wang",
        name: "Emily Wang",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-vishal-venkat-krishnan",
        name: "Vishal Venkat",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
      {
        id: "finance-coordinator-sakshi-patil",
        name: "Sakshi Patil",
        role: "Coordinator - Finance",
        image: "/logo.png",
        bio: placeholderBio,
      },
    ],
  },
]

export const ambassadors: MemberType[] = [
  {
    id: "ambassador-inian-siva-anand",
    name: "Inian Siva Anand",
    role: "Ambassador",
    image: "/logo.png",
    bio: placeholderBio,
  },
  {
    id: "ambassador-karis-lai",
    name: "Karis Lai",
    role: "Ambassador",
    image: "/logo.png",
    bio: placeholderBio,
  },
  {
    id: "ambassador-stephanie-wu",
    name: "Stephanie Wu",
    role: "Ambassador",
    image: "/logo.png",
    bio: placeholderBio,
  },
  {
    id: "ambassador-angela-lai",
    name: "Angela Lai",
    role: "Ambassador",
    image: "/logo.png",
    bio: placeholderBio,
  },
  {
    id: "ambassador-afsa-tassnim",
    name: "Afsa Tassnim",
    role: "Ambassador",
    image: "/logo.png",
    bio: placeholderBio,
  },
  {
    id: "ambassador-hala-ammoura",
    name: "Hala Ammoura",
    role: "Ambassador",
    image: "/logo.png",
    bio: placeholderBio,
  },
  {
    id: "ambassador-mannat-sulan",
    name: "Mannat Sulan",
    role: "Ambassador",
    image: "/logo.png",
    bio: placeholderBio,
  },
]

const getDepartmentMembers = (department: DepartmentType): MemberType[] => {
  const directors = Array.isArray(department.director)
    ? department.director
    : [department.director]
  return [
    ...directors,
    ...(department.deputyDirectors ?? []),
    ...department.coordinators,
  ]
}

export const getAllMembers = (): MemberType[] => [
  executiveDirector,
  ...deputyexecdir,
  ...executiveAssistants,
  ...advisors,
  ...departments.flatMap((department) => getDepartmentMembers(department)),
  ...ambassadors,
]

export const getMemberById = (id: string) =>
  getAllMembers().find((member) => member.id === id)
