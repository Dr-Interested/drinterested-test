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
  members: MemberType[]
}

// Executive Director data
export const executiveDirector: MemberType = {
  id: "executive-director",
  name: "Adil Mukhi",
  role: "Executive Director & Founder",
  image: "/adil.png",
  bio: "I started Dr. Interested after seeing too many youth struggle to navigate med school paths or build core skills like research and public speaking. This platform exists to change that—by giving students the tools and guidance they need to thrive. Beyond this, I’m a public speaker, youth advocate & changemaker! I lead initiatives that empower tens of thousands of young people, including founding Dr. Interested and contributing to the Play-to-Heal movement. I’ve supported youth-focused research and policy, including a CIHR grant with SickKids for the OPTIMAL Project and recommendations presented to the Future of Sport in Canada Commission. Passionate about mentorship, research, and leadership, I aim to create opportunities for youth to innovate and lead. If you want to learn more about me, feel free to check out my website, which I am sure is linked somewhere",
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
    name: "Velan Mangai Sivakumar",
    role: "Deputy Executive Director",
    bio: "Velan Mangai Sivakumar is a Grade 10 student in Glenforest Secondary School. He is extremely passionate about STEM and biological sciences in particular. He has volunteered for many STEM organizations such as the Rosalind Franklin Institute. He is a trainer for HOSA (Health Occupation Students of America). His best result in STEM contests would be getting top 25 nationally and qualifying for the national camp in the Junior Science Olympiad of Canada. He also plays chess and his best results include qualifying for the Canadian Youth Chess Championship U16 twice and getting 4th in the Canadian Chess League Twice.",
    image: "/velan.png",
    socialLinks: {},
  },
  {
    id: "deputyexec2",
    name: "Kishan Suhirthan",
    role: "Deputy Executive Director",
    bio: "Kishan Suhirthan is a Grade 11 student in the IB Program at Glenforest Secondary School with a strong passion for engineering and technology. As a Flight Sergeant in the Royal Canadian Air Cadet Program, he has developed strong leadership and organizational skills. His involvement with Innovire and FRC Team 1325 “Inverse Paradox” highlights his teamwork, creativity, and technical expertise. Proficient in both software development and electrical systems, Kishan is a dedicated and well-rounded individual committed to excellence in every project he undertakes.",
    image: "/kishan-headshot.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/kishansuhirthan",
      instagram: "https://instagram.com/k1shxnsuh1",
      website: "https://kishansuhi.acelabsai.tech",
    },
  },
]

export const advisors: MemberType[] = [
  {
    id: "Chinthala-Trisha-goud",
    name: "Chinthala Trisha Goud",
    role: "Medical Student Advisor",
    bio: "Joined Dr. Interested to help students find clarity and confidence in their journey whether that’s through research, academics, or figuring out where they belong in the world of medicine. As a medical student at Can Tho University of Medicine and Pharmacy, I’ve taken on leadership roles, mentored peers, and worked on creative and academic projects that fuel both growth and collaboration. I’m passionate about making things easier for others whether it’s guiding them through research opportunities, academic planning, or just sharing what I’ve learned along the way. If you’re trying to do something meaningful, feel free to reach out I’m always happy to help.",
    image: "/chinthala.png",
    socialLinks: {},
  },
  {
    id: "akeer-kuol-malual",
    name: "Akeer Kuol Malual",
    role: "Medical Student Advisor",
    bio: "Hi, I’m Akeer Kuol Malual Nyok, a student at the University of Juba, where I’m currently pursuing my Bachelor of Medicine and Surgery. I’m especially passionate about  the human brain and hope to explore fields like neurosurgery, neurology, or even general surgery. I am also a research writer and an advocate for accessible healthcare and education, especially for underrepresented communities. I believe in learning with purpose, leading with compassion, and growing alongside the people I get to support. I also deeply care about making space for others, listening deeply, and showing up with intention in everything I pursue.  I’m excited to be part of Dr. Interested and look forward to learning, growing, and contributing within such a meaningful community.",
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
    bio: "I joined Dr. Interested to help students bridge the gap between ambition and direction—whether it’s navigating research, understanding medicine, or finding where they fit in this field. Having mentored peers, led academic teams, and worked on multiple research projects, I know how much of a difference the right guidance can make. Outside of this, I’m a medical student at Al Faisal University, involved in systematic reviews, peer tutoring, and student leadership. I’m always up to support anyone who’s trying to do something meaningful—just reach out.",
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
    director: [
      {
        id: "tech-dir1",
        name: "Arghya Vyas",
        role: "Director of Technology",
        image: "/arghya.jpg", 
        bio: "An aspiring tech innovator and Grade 10 MYP IB student at Glenforest Secondary School, Arghya brings 2-3 years of robotics experience along with a strong understanding of programming languages such as JavaScript and TypeScript. Arghya's experience extends to working with libraries like discord.py and Next.js through personal projects and organizational development initiatives. As the founder of CalcIB, Arghya maintains a 95%+ average while leading collaborative efforts, including UX and graphic design, as well as the web development team at FutureMD. Arghya also actively competes in the Vex Robotics Competition as a member of team 31331. Proficient in Microsoft Office and Google Workspace, Arghya is driven by a passion for technology and a commitment to excelling in every endeavor.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/arghya-vyas-2a40a72b1/",
          instagram: "https://www.instagram.com/arghyavarfet/",
          website: "https://arghyav.vercel.app",
        },
      },
    ],
    members: [
      {
        id: "tech-mem1",
        name: "Bhavish Mehta",
        role: "Technology Member",
        image: "/Bhavish.jpg",
        bio: "Supporting the technology team with expertise in frontend development and user experience design.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/bhavish-mehta ",
          instagram: "https://www.instagram.com/bhavishmehta_371/",
        },
      },
      {
        id: "tech-mem2",
        name: "Madina Behbod",
        role: "Technology Member",
        image: "/madina.jpg",
        bio: "I’m Madina Behbod, a Grade 10 student at 21K School, currently studying online from Afghanistan. Despite the challenges in my environment, I’m dedicated to my education and passionate about science — especially medicine and space. My dream is to become a heart surgeon and, one day, an astronaut. I’m preparing for my IGCSE exams in 2026 and enjoy working on creative science projects, such as innovative biology and physics models. I’ve passed the first round of the Space Olympiad and continue preparing for the next stages. I’ve also taken part in cultural exchange programs to connect with students from around the world and share perspectives beyond borders.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/madina-behboode-88a334270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
          instagram: "https://www.instagram.com/madina_ ",
        },
      },
      {
        id: "tech-mem3",
        name: "Ouedraogo Boukary",
        role: "Technology Member",
        image: "/logo.png",
        bio: "Supporting the technology team with expertise in frontend development and user experience design..",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/madina-behboode-88a334270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
          instagram: "https://www.instagram.com/madina_ ",
        },
      },
    ],
  },

  {
    id: "marketing",
    name: "Marketing Department",
    description:
      "The Marketing Department creates engaging content, manages our social media presence, and develops promotional materials to increase awareness of our mission and events.",
    director: [
      {
        id: "marketing-dir1",
        name: "Hasaan Qidwai",
        role: "Director of Marketing",
        image: "/hasaan.png",
        bio: "Hasaan is a dedicated Grade 10 student enrolled in the IB MYP Programme at Glenforest Secondary School, where he excels in academics with an overall average of 95%+. Passionate about mathematics and design, Hasaan combines his enthusiasm with leadership skills through active participation as a COY Peer Helper, supporting Grade 9 and 10 students in mastering mathematics. Proficient in both Office 365 and Google Suite software, he demonstrates strong technical skills that complement his academic and mentoring pursuits.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/hasaan-ahmed-qidwai-890478346/",
        },
      },
    ],
    members: [
      {
        id: "marketing-mem10",
        name: "Chetna Prabhu",
        role: "Marketing Member",
        image: "/ChetnaPrabhu_marketing.jpg",
        bio: "Chetna Prabhu is a dedicated grade 11 AP student taking AP French and AP Physics at St. Joseph’s Secondary School. She loves content designing and digital creation, researching, learning new languages, and studying both science and mathematics. At school, she is part of the student council as Minister of Public Relations, DECA, HOSA, and the school’s newspaper club. To Chetna, the youth has such a powerful role in being able to make change and am so excited to support the next generation of medical students who aspire to find opportunities and programs in medicine. She is a passionate student interested in pursuing biomedical engineering in the future and hopes to gain experience in healthcare, research, and marketing through this amazing opportunity with Dr. Interested as a marketing executive.",
      },
      {
        id: "marketing-mem1",
        name: "Jawwad Ahmad",
        role: "Marketing Member",
        image: "/Jawwad_marketing.png",
        bio: "Hi, my name is Jawwad. I’m a Grade 11 IB student who has an interest in Engineering, Robotics and STEM. I have participated in many volunteering activities like Peer Helpers and at the YMCA. I have also participated in clubs like DECA and Peer Helpers. I look forward to collaborating on cutting edge ideas that push the boundaries of what's possible.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/jawwad-ahmad-15197b32a/",
          instagram: "https://www.instagram.com/jawwad0806/",
        },
      },
      {
        id: "marketing-mem3",
        name: "Hasnain Ali",
        role: "Marketing Member",
        image: "/logo.png",
        bio: "Hasnain Ali is a Motivated and adaptable high school student with proven experience in digital marketing and content creation through roles such as content creation and digital marketing at Dr. Interested. Adept at developing innovative campaigns through effective team collaboration and strong communication skills. In addition to marketing experience, contributed as a dedicated volunteer at Seva Food Bank, assisting with customer service, food distribution, and inventory support. Committed to delivering high-quality projects on time, maintaining consistent branding, and providing reliable, hands-on support in fast-paced environments. Passionate about leveraging both creativity and customer-focused service to drive engagement and make a meaningful impact.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/hasnain-ali-891b26315/",
          instagram: "https://www.instagram.com/h2znain/",
        },
      },
      {
        id: "marketing-mem6",
        name: "Keyaan Wali Chowdhury",
        role: "Marketing Member",
        image: "/logo.png",
        bio: "Keyaan Wali Chowdhury is a Grade 12 student at TL Kennedy Secondary School in Mississauga, Ontario, with a strong background in academics, leadership, advocacy, and technology. He has led his school’s science club, contributed to environmental action through HNP Canada, and championed international development as an advocate with Results Canada by engaging policymakers and publishing letters in support of global health equity. He also has a passion for education and community service, having volunteered as a math tutor with the Global Share Support Youth Association (GSSYA), where he helped students build confidence and improve their skills. With a keen interest in innovation, he has built a small computer network using Raspberry Pi and is currently developing Triviabot, an interactive trivia chatbot. His work reflects a commitment to using technology, education, and civic engagement to create a meaningful impact.",
        socialLinks: {
          linkedin: "www.linkedin.com/in/keyaan-chowdhury-46487936a"
        },
        
      },
      {
        id: "marketing-mem7",
        name: "Ganesh Kartik Nagasubramanian",
        role: "Marketing Member",
        image: "/GaneshKartik_marketing.png",
        bio: "Ganesh Kartik is a Grade 11 DP IB student at Glenforest Secondary School, an outgoing and communicative person who is always ready to lend a helping hand. He has a strong interest in history, technology, and building, while also being a keen learner in anything STEM related. Being an active member of Dr. Interested, Ganesh Kartik helps run events which elevate the medicinal understanding of all those who participate, through his clear commitment and sheer hard work. ",
        socialLinks: {
          linkedin: "http://www.linkedin.com/in/ganeshknagasubramanian"
        },
        
      },
      {
        id: "marketing-mem8",
        name: "Saanvi Somani",
        role: "Marketing Member",
        image: "/Saanvi_marketing.png",
        bio: "Saanvi is a dedicated high school student at the Texas Academy of Math and Science with a strong interest in psychology and creative problem-solving. She likes to pair her academic drive with leadership through her involvement in classes at the college level with volunteering at multiple institutes. Being a member of Dr. Intersted, Saanvi contributes to student-led initiatives that help highschoolers explore healthcare pathways by using her editing skills and creating engaging reels. ",
        socialLinks: {
          instagram: "https://www.instagram.com/saanvi_s08/"
        },
        
      },
      {
        id: "marketing-mem9",
        name: "Shiwali Gupta",
        role: "Marketing Member",
        image: "/logo.png",
        bio: "Hi! I’m Shiwali Gupta, a 9th grader in Ohio. I was born in India, and moved to the US at 7 years old. I’m really interested in helping people in any way I can. I love to make everyone smile. Outside of school, I am in dance, taekwondo and many clubs for school.",
        
        
      },
    ],
  },
  {
    id: "publications",
    name: "Publications Department",
    description:
      "The Publications Department produces educational content, newsletters, and research publications to share knowledge and showcase the work of our members.",
    director: {
      id: "publications-dir",
      name: "Muhammad Ibrahim Lari",
      role: "Director of Publications",
      image: "/lari.png", 
      bio: "Hi, I’m Muhammad Lari, a future engineer driven by curiosity and a desire to create meaningful change. I love exploring how things work and finding ways to improve them, whether through hands-on problem-solving or leading youth projects. I’m constantly looking for opportunities to learn, innovate, and build ideas that matter.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/muhammad-ibrahim-lari-67564230a/",
      },
    },
    members: [
      {
        id: "publications-mem6",
        name: "Dabosmita Parial",
        role: "Publications Member",
        image: "/Dabosmita.png",
        bio: "Hi, I’m Dabosmita! A student who loves psychology and medicine, I hope to pursue a career in either one of those or maybe both combined! Other than that, I am an avid public speaker who loves to partake in debates especially those involving ethics and childhood. In addition to all of this, I am always looking forward to opportunities to research and volunteer as I aspire to improve my skills over the next few years.",
        socialLinks: {},
      },
      {
        id: "publications-mem7",
        name: "Aiza Rasheed",
        role: "Publications Member",
        image: "/aiza.png", 
        bio: " Hi, I’m Aiza! I'm a student looking to pursue Psychology and Philosophy in university as I have an immense passion for both subjects. I’m hoping to become a psychologist when I am older and eventually teach as a professor! Additionally, I absolutely love reading, mostly I read classics, philosophy, psychology and medical papers.",
      },
      {
        id: "publications-mem9",
        name: "Nashto Mohammed",
        role: "Publications Member",
        image: "/nashto.png", 
        bio: "Hi, my name is Nastaho Mohamed. I’m passionate about health science and aspiring to become a pediatrician. I’ve always been interested in understanding how the body works and how medical care can change someone’s life, especially for children. Helping my community is important to me, and I want to use my future career to support families, improve access to care, and make a positive difference. I’m motivated to keep learning, gaining experience, and building the skills I need to reach my goals.",
        socialLinks: {},
      },
    ],
  },
  {
    id: "hr",
    name: "Human Resources Department",
    description:
      "The Human Resources Department manages recruitment, onboarding, and member engagement to foster a collaborative and supportive community.",
    director: {
        id: "hr-dir",
        name: "Yumeth Wickramasinghe",
        role: "Director of Human Resources",
        image: "/yumeth.png",
        bio: "Yumeth Wickramasinghe is a grade 10 IB student at Glenforest Secondary School. He has been a part of many volunteering activities around the community,  such as the Egyptian Coptic festival and making cards for Kids during the Christmas season. He also volunteers in his school every week, helping out some of his peers with Mathematics and sometimes English. Some of his hobbies include reading, playing tennis and badminton as well as playing board games. He has been involved in the Junior Tennis Team at Glenforest and won Junior Athlete of the Month. He looks forward to continuing to develop his leadership skills and to succeed in new adventures in the future.",
        socialLinks: {
          linkedin: "http://www.linkedin.com/in/yumeth-w",
        },
    },
    members: [
      {
        id: "3-deputy-dir",
        name: "Vicky Shi",
        role: "Deputy Director",
        image: "/logo.png", 
        bio: "Hi! I’m a Grade 10 Pre-IB student at St.Roberts CHS. I’m passionate about creating inclusive, supportive environments where people can truly grow. Outside of work, I love reading, curating playlists that match every mood, and finding new ways to express myself creatively. I care deeply about personal development, mental wellness, and building real, meaningful connections with the people around me. Whether I’m helping someone navigate a tough situation or just being a sounding board, I try to bring thoughtfulness and intention to everything I do. I’m always looking for new ways to grow, learn, and make a positive impact, both in my work and in my everyday life.",
        socialLinks: {},
      },
      {
        id: "hr-mem1",
        name: "Chloe Young",
        role: "Human Resources Member",
        image: "/chloey.png", 
        bio: "Hello, I am a grade 11 student in Ontario, Canada and I want to become a surgeon in the future. Some of my hobbies include building model kits, alpine skiing, and creative writing. I joined Dr. Interested because I love what they do and how they help youth along their pathway into medicine. ",
        socialLinks: {},
      },
      {
        id: "hr-mem2",
        name: "Grasen Menns",
        role: "Human Resources Member",
        image: "/grasen.png",
        bio: "Hello there, my name is Grasen, but everyone calls me Gray. I’m a Grade 9 RAP Student in Ontario, Canada. I am super excited to be part of the Dr. Interested team and learn from youth across the world. I have always been interested in medicine and Healthcare. And believe this will be a wonderful experience. My interests are Music, Writing, and Nature. I hope to work in Law or Trauma Medicine. I hope to meet everyone here as a part of Dr Interested and get to know everyone's experiences!",
        socialLinks: {
          linkedin: "http://www.linkedin.com/in/grasen-menns-8980aa358",
          instagram: "https://www.instagram.com/grasen2025/",
        },
      },
      {
        id: "hr-mem3",
        name: "Dwarakamaye Bolla",
        role: "Human Resources Member",
        image: "/logo.png",
        bio: "Hi! I’m a student that has an interesting schedule. Multiple classes from multiple years so I just like to call myself a high schooler! I’m motivated to change the environment around me and find new hobbies dear to me. Being organized but going with the flow is my thing. Having a passion for biotechnology and advancing science, I’ll always partake in new opportunities! I’m a hopeless romantic obsessed with books, dramas, fantasies and so much more! I might be too happy or boring, but I’ll always match your mood (most of the time). So with my interests and love for many things, I’ll always be ready to help make a change whether it being my work or through a simple act.  So, “live life to experience it!” ",
        socialLinks: {},
      },
      {
        id: "hr-mem4",
        name: "Megha Ashish",
        role: "Human Resources Member",
        image: "/logo.png",
        bio: "Maintaining clear communication between leadership and team members.",
        socialLinks: {},
      },
      {
        id: "hr-mem5",
        name: "Chinthala Trisha Goud ",
        role: "Human Resources Member",
        image: "/chintala.png",
        bio: "Hello everyone! My name is Trisha, and I’m thrilled to be part of the Dr. Interested community. I’ve always been passionate about medicine and healthcare, and I’m excited to learn from youth around the world who share the same curiosity. My interests include fitness, music, writing, and exploring new ideas. I’m especially drawn to medical fields and creative work, and I hope to build a future that blends both knowledge and purpose. I’m looking forward to meeting all of you and hearing about your journeys and experiences!",
        socialLinks: {},
      },
      {
        id: "hr-mem6",
        name: "Tanisha Singh",
        role: "Human Resources Member",
        image: "/tanisha.png",
        bio: "Hi I'm Tanisha. I'm a 15 year old Indian, currently in 11th. I like singing, dancing, reading and listening to music. ",
        socialLinks: {
          instagram: "https://www.instagram.com/tapioca.567/",
        },
        
      },
      {
        id: "hr-mem8",
        name: "Maliha Metla",
        role: "Human Resources Member",
        image: "/maliha.png",
        bio: "Hi! I’m Maliha Metla, a junior in high school passionate about medicine, community service, and creating meaningful change. Whether through my nonprofit work, medical internships, or local volunteering, I strive to help others and inspire hope in the communities I serve. ",
        
      },
    ],
  },
  {
    id: "events",
    name: "Events Department",
    description:
      "The Events Department plans and executes webinars, workshops, and networking events to provide valuable learning experiences for our members.",
    director: {
      id: "outreach-dir",
      name: "Ali Salman",
      role: "Director of Events",
      image: "/ali-salman.jpeg", 
      bio: "Ali Salman is a Grade 10 student at Glenforest Secondary School pursuing the IB program. He is deeply passionate about engineering, robotics, and computer science, demonstrated through his involvement in school and external initiatives. At school, he serves as the Secretary and Trainer of the Computer Science Club and was part of the pit-crew team for the FRC Robotics Club before it disbanded. Outside of school, he is a logistics member at a STEM nonprofit, writes for prominent student-led science journals, and is part of the mechanical sub-team for one of Ontario's top 10 ranked FRC robotics teams. His most prominent achievements include being recognized as a global finalist at the prestigious New York Academy of Sciences Junior Academy Ethical AI competition.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/ali-salman-569975294/",
      },
    },
    members: [
      {
        id: "4-deputy-dir",
        name: "Jessica Elizabeth Philips ",
        role: "Deputy Director of Events",
        image: "/logo.png",
        bio: "Hi, my name is Jessica Philips. I’m a student currently living in Dubai, and I’m passionate about science and pursuing a future in Medicine. I’m hardworking, curious, and always looking for ways to improve myself, whether it’s through academics, projects, or building new skills. I enjoy learning, staying organised, and challenging myself to grow.",
        socialLinks: {},
      },
    ],
  },
  {
    id: "grants",
    name: "Finance Department",
    description:
      "The Finance Department secures funding through grants and sponsorships to support our initiatives and expand our impact.",
    director: {
      id: "grants-dir",
      name: "Liam Lacey",
      role: "Director of Finance",
      image: "/liam.png",
      bio: " Liam is a grade 11 IB DP student at Glenforest Secondary School who's interested in learning more about the financial workings of healthcare, and its subsectors, ultimately to pursue his own goal of heading into the business world and its many avenues. He has volunteered in several events as a prominent member of the Athletic Council within Glenforest SS, in addition to other clubs including the Rock Band and DECA. He aims to further improve my own leadership skills, while also focusing on expanding his repertoire of financial knowledge, and its workings within different industries. He is looking forward to continuing his pursuit of learning more about the finance and business space, while being a strong contributor to Dr.Interested",
      socialLinks: {},
    },
    members: [
      {
        id: "grants-mem1",
        name: "Dhruv Solanki",
        role: "Finance Member",
        image: "/dhruv.png",
        bio: "I am a Grade 11 IB student at Glenforest Secondary School with a strong interest in business and technology. I actively volunteer in my community, including at local food banks such as Seva. I am also a finance member in Dr. Interested, where I continue to build my skills in financial analysis and leadership. I am committed to exploring the intersection of business and tech while growing as a dedicated student, volunteer, and future innovator.",
        socialLinks: {},
      },
    ],
  },
]
