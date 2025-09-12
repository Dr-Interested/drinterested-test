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

// President data
export const president: MemberType = {
  id: "president",
  name: "Adil Mukhi",
  role: "President",
  image: "/adil.png", // Updated image path
  bio: "I started Dr. Interested after seeing too many youth struggle to navigate med school paths or build core skills like research and public speaking. This platform exists to change that—by giving students the tools and guidance they need to thrive. Beyond this, I have worked with Drs. Alene Toulany and Ashley Vandermorris on applying for a CIHR grant for a SickKids project to develop national guidelines on healthy youth social media use. I also supported the Future of Sport in Canada Commission by signing onto key policy recommendations aimed at making sports safer and more inclusive. I am passionate about turning ideas into impact—and helping youth lead the way. If you want to learn more about me, feel free to check out my website, which I am sure is linked somewhere",
  socialLinks: {
    website: "https://adilmukhi.vercel.app/",
    linkedin: "https://www.linkedin.com/in/adil-mukhi-6aba27246/",
    instagram: "https://www.instagram.com/adilm.0/",
  },
}

// Vice Presidents data
export const vicePresidents: MemberType[] = [
  {
    id: "vp1",
    name: "Velan Mangai Sivakumar",
    role: "Vice President",
    bio: "Velan Mangai Sivakumar is a Grade 10 student in Glenforest Secondary School. He is extremely passionate about STEM and biological sciences in particular. He has volunteered for many STEM organizations such as the Rosalind Franklin Institute. He is a trainer for HOSA (Health Occupation Students of America). His best result in STEM contests would be getting top 25 nationally and qualifying for the national camp in the Junior Science Olympiad of Canada. He also plays chess and his best results include qualifying for the Canadian Youth Chess Championship U16 twice and getting 4th in the Canadian Chess League Twice.",
    image: "/velan.png",
    socialLinks: {},
  },
  {
    id: "vp2",
    name: "Kishan Suhirthan",
    role: "Vice President",
    bio: "Kishan Suhirthan is a Grade 10 Student in the IB Program at Glenforest Secondary School. With a passion for Engineering and Technology, he delivers 100% effort to all his interactions and projects. He is also a proven leader in his skills as a Sergeant in the Royal Air Cadet Program. He shows teamwork and collaboration through his time with Innovire. Proficient in Development and Electrical work, he shows that he is a well rounded individual set for any task at hand.",
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
    image: "/shamoon.jpg",
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/muhammad-shamoon-umerani-8593701b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/shamoon._03?igsh=Yjh1emZmbDE0dDJs&utm_source=qr'
    },
  },
  {
    id: "kate-tucker",
    name: "Kate Tucker",
    role: "Medical Student Advisor",
    bio: "Kate serves as a medical student advisor, offering insights into medical education pathways and career development.",
    image: "/logo.png",
    socialLinks: {},
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
        id: "marketing-mem1",
        name: "Jawwad Ahmad",
        role: "Marketing Member",
        image: "/logo.png",
        bio: "Hi, my name is Jawwad. I’m a Grade 11 IB student who has an interest in Engineering, Robotics and STEM. I have participated in many volunteering activities like Peer Helpers and at the YMCA. I have also participated in clubs like DECA and Peer Helpers. I look forward to collaborating on cutting edge ideas that push the boundaries of what's possible.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/jawwad-ahmad-15197b32a/",
          instagram: "https://www.instagram.com/jawwad0806/",
        },
      },
      {
        id: "marketing-mem2",
        name: "David Santoso",
        role: "Marketing Member",
        image: "/logo.png",
        bio: "Developing marketing strategies to increase engagement with our target audience.",
        socialLinks: {},
      },
      {
        id: "marketing-mem3",
        name: "Hasnain Ali",
        role: "Marketing Member",
        image: "/logo.png",
        bio: "Managing our social media presence and creating content that resonates with high school students.",
        socialLinks: {},
      },
      {
        id: "marketing-mem4",
        name: "Paulina Arenas",
        role: "Marketing Member",
        image: "/Paulina.png",
        bio: "Paulina Arenas is a dedicated student at Southeast Career Technical Academy in Las Vegas, majoring in Sports Medicine. As a bilingual leader involved in DECA, HOSA, the Student Organization of Latino, and the Chick-fil-A Lead Academy, she thrives in roles that combine leadership, service, and collaboration. Paulina is a multi-sport athlete, competing in soccer and archery,, She’s passionate about improving access to healthcare in underserved communities and aspires to develop programs that make a lasting impact.",
        socialLinks: {},
      },
      {
        id: "marketing-mem5",
        name: "Avishi Jain",
        role: "Marketing Member",
        image: "/logo.png",
        bio: "Hi, I’m Avishi. 16. I build soulful things—from startups to podcasts to midnight Canva brainstorms powered by banana chips. Obsessed with creativity, emotional truth, and mango season metaphors (I might’ve compared love to Alphonso pulp once. No regrets). Purpose is my vibe. Impact is my goal. I’ve accidentally created aesthetic spreadsheets that made people cry (in a good way). I believe in journaling under trees, healing through memes, and occasionally naming my Notion pages like they’re characters in a fantasy novel.🥭✨🧃",
        socialLinks: {
          instagram: "https://www.instagram.com/selfmade_avi/",
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
        name: "Emily Do",
        role: "Marketing Member",
        image: "/logo.png",
        bio: "Hi! My name is Emily, I am a senior in high school with plans to pursue a career in dentistry in the future. I’m someone who naturally cares about people and likes to create a comfortable space for others to feel heard and supported. I’m curious, hardworking, and open to challenges, especially when they help me grow or make a positive difference in someone’s life. Whether it’s through academics, volunteering, or mentorship, I’m always looking for ways to connect with others and contribute to something meaningful.",
        socialLinks: {},
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
      bio: "Muhammad Lari is a dedicated high school student currently enrolled at Glenforest Secondary School. With a strong academic background, particularly in science and mathematics, Muhammad has honed critical thinking and problem-solving skills through both independent learning and hands-on experiences. Their organizational and leadership abilities are evident through their involvement in managing logistics for school events and tutoring peers in mathematics. Additionally, Muhammad  is passionate about astronomy and health education, contributing to student initiatives that empower the community with valuable wellness insights. Their commitment to academics, extracurriculars, and personal growth highlights their perseverance, adaptability, and drive for excellence.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/muhammad-ibrahim-lari-67564230a/",
      },
    },
    members: [
      {
      id: "1-deputy-dir",
      name: "Manmeet Singh",
      role: "Assistant Director of Publications (Research)",
      image: "/manmeet.png", 
      bio: "Manmeet Singh is a highly motivated highschool student currently enrolled in the IB program at Glenforest Secondary School. Through hands-on learning experiences in the IBT and IB programs, Manmeet has developed a strong foundation in science and mathematics allowing for critical thinking and complex problem solving skills. Manmeet’s creative and entrepreneurial mindset has led to the development of two business models showcasing his ability to innovate and adapt. Overall, Manmeet’s dedication to both academics and sports has driven Manmeet to excel in various leadership roles, demonstrating perseverance, discipline, and commitment.",
      socialLinks: {},
      },
      {
      id: "2-deputy-dir",
      name: "Adhi Ammanath",
      role: "Assistant Director of Publications (Podcast)",
      image: "/logo.png", 
      bio: "Adhi Ammanath helps lead the podcast team, focusing on creating engaging audio content that explores various medical topics and career paths.",
      socialLinks: {},
      },
      {
        id: "publications-mem1",
        name: "Maliha Metla",
        role: "Publications Member",
        image: "/Maliha.JPG",
        bio: "Maliha Metla is a 10th grade student from New York who is actively involved in her community. She is a publications team member of Dr. Interested. Maliha joined Dr. Interested after noticing a lack of accessible resources for students to explore different medical career options and develop essential skills. She is passionate about education, science, the medical field,and giving back to her community. Maliha is also working on publishing research related to medical and technological advancements, demonstrating her dedication to both academics and making a meaningful impact.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/maliha-metla-a71650343/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
      },
      {
        id: "publications-mem2",
        name: "Manha Atiq",
        role: "Publications Member",
        image: "/logo.png",
        bio: "Developing educational resources to help students understand medical concepts and career paths.",
        socialLinks: {},
      },
      {
        id: "publications-mem4",
        name: "Iosef Isaac Perez",
        role: "Publications Member",
        image: "/logo.png",
        bio: "Ensuring consistent tone, style, and accuracy in all materials.",
        socialLinks: {
          instagram: "https://www.instagram.com/b.iird/",
        },
      },
      {
        id: "publications-mem5",
        name: "Gaeun Lee",
        role: "Publications Member",
        image: "/logo.png", // Need Image
        bio: "Supporting research projects and mentorship programs for aspiring medical researchers.",
        socialLinks: {},
      },
      {
        id: "publications-mem6",
        name: "Dabosmita Parial",
        role: "Publications Member",
        image: "/Dabosmita.jpg",
        bio: "Dabosmita is a year 12 student who is curious and excited to learn new things all the time- whether it be about the latest developments in tech, medicine, or random contemplative philosophical ideas. She is passionate about leadership and public speaking- which she demonstrates at her school by being a prefect and also being part of the school's debate team that regularly takes part in interschool debates organised by Qatar Debate. Alongside debate, she takes part in MUN conferences and speech competitions within and outside her school. She is a member of publications at Cosmic-Us, a student-led organization and works as a research team member at Dr.Interested. Dabosmita will always look forward to future projects to develop her skills and discover her potential further!",
        socialLinks: {},
      },
      {
        id: "publications-mem7",
        name: "Prithi Balaji",
        role: "Publications Member",
        image: "/logo.png", // Need Image
        bio: "Prithi brings a unique blend of STEM and medicinal knowledge to the mix of strengths here at the FireGuard cause. Currently a 10th grader in Charlotte, NC, Prithi is ranked 1st in a class of 686 students, with a weighted GPA of 4.55. She is deeply involved in both academics and extracurricular activities, showcasing leadership in various roles. Prithi's academic focus spans subjects like AP Computer Science, Honors Biomedical Sciences, and AP Psychology, with a particular interest in the application of AI in healthcare. She is currently working on a research paper exploring the use of CNN-LSTM AI models for diagnosing melanoma, combining her technical skills and passion for medical innovation. She also placed Gold for NCSO Regionals, and continues to compete in events related to disease detection, anatomy, and experimental design. As an intern with ThinkNeuro, Prithi has had the opportunity to engage in various professional development initiatives, including contributing to the development of neurologic curriculum reforms and working on complex marketing logistics. Finally, she has had the opportunity to represent her impact on her community by giving back to the middle schoolers through volunteering, committing to a subcommittee of 4H where she actively volunteers, and being a proofreader for a global set of users at Project Gutenberg. Ultimately, these experiences have all led Prithi to become a motivated, inspired, and resilient individual, who will strive to improve her knowledge whilst contributing to the excellent atmosphere that is the Academy of Sciences.",
      },
      {
        id: "publications-mem9",
        name: "Avika Tyagi",
        role: "Publications Member",
        image: "/logo.png", // Need Image
        bio: "Producing articles, blogs, and printed materials for distribution.",
        socialLinks: {},
      },
      {
        id: "publications-mem10",
        name: "Saniyah Sajjad",
        role: "Publications Member",
        image: "/logo.png", // Need Image
        bio: "Hi, I am an incoming first-year Psychology student at Western with an AEO status. I am passionate about business and psychology, and I aim to enter the marketing field in the future. ",
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
        role: "Assistant Director of HR (Ambassador Program)",
        image: "/logo.png", 
        bio: "Handling team feedback, conflict resolution, and peer support.",
        socialLinks: {},
      },
      {
        id: "hr-mem1",
        name: "Aayan Shivji",
        role: "Human Resources Member",
        image: "/logo.png", 
        bio: "Aayan Shivji is a hardworking high school student at St. Francis Xavier Secondary School with a passion for learning and community involvement. He enjoys exploring science and mathematics, constantly challenging himself with new concepts and problem-solving opportunities. Beyond academics, Aayan is deeply involved in extracurricular activities and loves volunteering. Whether organizing school events, mentoring younger students, or participating in community service, he is always eager to make a positive impact. His enthusiasm extends to sports, where he really enjoys table tennis and tennis, embracing both the competitive and team aspects of the game. With a strong work ethic and a drive to grow, Aayan continues to seek new experiences that shape his skills and character. He is truly looking forward to working with Dr. Interested and having a meaningful learning experience that will help him grow both academically and professionally.",
        socialLinks: {},
      },
      {
        id: "hr-mem2",
        name: "Koraya Whyte-Smith",
        role: "Human Resources Member",
        image: "/logo.png",
        bio: "Supporting the onboarding process and creating resources for new members.",
        socialLinks: {},
      },
      {
        id: "hr-mem3",
        name: "Dwarakamaye Bolla",
        role: "Human Resources Member",
        image: "/logo.png",
        bio: "Managing member information and departmental records.",
        socialLinks: {},
      },
      {
        id: "hr-mem4",
        name: "Srikar Reddy",
        role: "Human Resources Member",
        image: "/logo.png",
        bio: "Maintaining clear communication between leadership and team members.",
        socialLinks: {},
      },
      {
        id: "hr-mem5",
        name: "Joanne Lee",
        role: "Human Resources Member",
        image: "/logo.png",
        bio: "Coordinating recruitment, onboarding, and internal communications.",
        socialLinks: {},
      },
      {
        id: "hr-mem6",
        name: "Mariam Azzam",
        role: "Human Resources Member",
        image: "/logo.png",
        bio: "Promoting a positive and inclusive team culture.",
        socialLinks: {},
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
        name: "Rameen Usman",
        role: "Deputy Director of Events",
        image: "/logo.png",
        bio: "Hello, I'm Rameen Usman, a Year 11 student currently living in Lahore- Pakistan. I have a strong passion for STEM and love working behind the scenes to organize and manage events. I am a three-time scholarship recipient from institutions like Dartmouth, Harvard and Polygence which have allowed me to explore more within the pre-med field and gain exposure to real-world applications of science. In my free time I enjoy writing as a creative outlet. I’m deeply committed to closing the gender gap in STEM and helping create space for more women to lead in this field.",
        socialLinks: {},
      },
      {
        id: "5-deputy-dir",
        name: "Amina Assanova",
        role: "Deputy Director of Events",
        image: "/logo.png",
        bio: "Planning and executing workshops that provide hands-on learning experiences.",
        socialLinks: {},
      },
      {
        id: "events-mem1",
        name: "Andrew Wang",
        role: "Events Member",
        image: "/logo.png",
        bio: "Planning and executing workshops that provide hands-on learning experiences.",
        socialLinks: {},
      },
      {
        id: "events-mem2",
        name: "Soham Somani",
        role: "Events Member",
        image: "/soham.png", 
        bio: "Developing networking opportunities to help students build connections in the healthcare field.",
        socialLinks: {},
      },
      {
        id: "events-mem3",
        name: "Keenan Johnson",
        role: "Events Member",
        image: "/keenan.jpg", // Need Image
        bio: "Hi! I'm Keenan! I am a dedicated high school student with a passion for leadership, STEM exploration, and community engagement. Through my involvement in extracurricular activities such as the Athletic Council and STEM Fellowship programs, I have developed strong communication, teamwork, and problem-solving skills. I am committed to fostering positive, inclusive environments and inspiring young children to grow through creative activities. My curiosity and initiative drive me to explore various fields of knowledge, from physics to graphic design and video editing.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/keenan2009/",
        },
      },
      {
        id: "events-mem4",
        name: "Ganesh Kartik Nagasubramanian",
        role: "Events Member",
        image: "/logo.png", // Need Image
        bio: "Ganesh Kartik Nagasubramanian is a Grade 10 student at Glenforest enrolled in the IB Program at Glenforest Secondary School.",
        socialLinks: {
        },
      },
      {
        id: "events-mem5",
        name: "Maria Mohamed",
        role: "Events Member",
        image: "/logo.png", // Need Image
        bio: "Hi, I am Maria Mohamed. I am a high school student with a passion for medicine and a dream of becoming a surgeon. I joined Dr. Interested as a member of the outreach team because I want to help others learn about healthcare and connect with opportunities that can shape their future.",
        socialLinks: {},
      },
      {
        id: "events-mem6",
        name: "Ajitesh Sankara Narayanan",
        role: "Events Member",
        image: "/logo.png", // Need Image
        bio: "Planning engaging events that align with our mission and goals.",
        socialLinks: {},
      },
      {
        id: "events-mem7",
        name: "Olivia McIntosh",
        role: "Events Member",
        image: "/logo.png", // Need Image
        bio: "Developing creative themes and ideas for upcoming events.",
        socialLinks: {},
      },
      {
        id: "events-mem8",
        name: "Cindy Cao",
        role: "Events Member",
        image: "/logo.png", // Need Image
        bio: "Collecting feedback and analyzing success post-event.",
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
      image: "/logo.png", 
      bio: "Leading our Finance Department, Sai Raghav Ganesh is a dedicated student and he has a strong interest in finance and economics. Sai Raghav has been involved in various extracurricular activities, including volunteering for community service projects and participating in school clubs. His leadership skills and commitment to excellence make him an invaluable asset to our team.",
      socialLinks: {},
    },
    members: [
      {
        id: "grants-mem1",
        name: "Akeer Kuol Malual Nyok",
        role: "Finance Member",
        image: "/akeer.png",
        bio: "Researching grant opportunities and developing compelling proposals.",
        socialLinks: {},
      },
      {
        id: "grants-mem2",
        name: "Agathiya Ramalingam",
        role: "Finance Member",
        image: "/logo.png",
        bio: "Preparing and overseeing budgets for various initiatives.",
        socialLinks: {},
      },
      {
        id: "grants-mem3",
        name: "Priyansh Sharma",
        role: "Finance Member",
        image: "/logo.png",
        bio: "Tracking expenses and managing reimbursements.",
        socialLinks: {},
      },
      {
        id: "grants-mem4",
        name: "Vedanshi Raheja",
        role: "Finance Member",
        image: "/logo.png",
        bio: "Ensuring financial transparency through regular reporting.",
        socialLinks: {},
      },
      {
        id: "grants-mem6",
        name: "Nidhish Vijaya Ragavan",
        role: "Finance Member",
        image: "/logo.png",
        bio: "Coordinating funding requests and approval processes.",
        socialLinks: {},
      },
    ],
  },
]
