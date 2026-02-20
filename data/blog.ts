export type Author = {
  name: string
  image: string
  bio: string
  linkedIn?: string
  instagram?: string
  twitter?: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  author: Author
  topic: string
  readingTime: string
  featured?: boolean
}

export type BlogTopic = {
  name: string
  slug: string
  description: string
  image: string
}

// Authors
export const authors: Record<string, Author> = {
  "adil-mukhi": {
    name: "Adil Mukhi",
    image: "/adil.png",
    bio: "I started Dr. Interested after seeing too many youth struggle to navigate med school paths or build core skills like research and public speaking. This platform exists to change that—by giving students the tools and guidance they need to thrive.",
    linkedIn: "https://adilmukhi.vercel.app/",
    instagram: "https://instagram.com/adilm.0",
  },
  "muhammad-lari": {
    name: "Muhammad Ibrahim Lari",
    image: "/lari.png",
    bio: "Muhammad Lari is a dedicated high school student with a strong academic background, particularly in science and mathematics. He is passionate about astronomy and health education, contributing to student initiatives that empower the community with valuable wellness insights.",
    linkedIn: "https://linkedin.com/in/muhammad-lari",
  },
  "shaza-ali": {
    name: "Shaza Ali",
    image: "/shaza-ali.jpg",
    bio: "Shaza is a 9th grade student with a deep interest in STEM, particularly neurology and cardiology. She has won several STEM competitions and is part of her school's green initiative club. She also hosts a true crime podcast called 'The Killer Instinct'.",
    instagram: "https://instagram.com/shaza.ali",
  },
  "maliha-metla": {
    name: "Maliha Metla",
    image: "/Maliha.JPG",
    bio: "Developing educational resources to help students understand medical concepts and career paths.",
    linkedIn:
      "https://www.linkedin.com/in/maliha-metla-a71650343/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  "manha-atiq": {
    name: "Manha Atiq",
    image: "/logo.png",
    bio: "Creating content that highlights the achievements and experiences of our members.",
    twitter: "https://twitter.com/manha",
  },
  "velan-mangai": {
    name: "Velan Mangai Sivakumar",
    image: "/velan.png",
    bio: "Velan Mangai Sivakumar is a Grade 10 student in Glenforest Secondary School. He is extremely passionate about STEM and biological sciences in particular. He has volunteered for many STEM organizations such as the Rosalind Franklin Institute. He is a trainer for HOSA (Health Occupation Students of America). His best result in STEM contests would be getting top 25 nationally and qualifying for the national camp in the Junior Science Olympiad of Canada. He also plays chess and his best results include qualifying for the Canadian Youth Chess Championship U16 twice and getting 4th in the Canadian Chess League Twice.",
    linkedIn: "https://linkedin.com",
  },
  "manasvi-kale": {
    name: "Manasvi Kale",
    image: "/logo.png",
    bio: "Manasvi is a 10th-grade student based in India. She the founder of a Gen Z-focused digital platform 'Her Vogue Grid' exploring fashion, business, and cultural trends. Her platform is attracting members from multiple countries. Focused on trends, strategy, and youth-led innovation, her initiative is quickly becoming a space where aspiring minds collaborate and create. Beyond fashion and entrepreneurship, she's a proud member of Research Department at Dr. Interested, driven by a strong passion for medicine and emerging technologies. Her long-term vision is to pioneer innovation at the intersection of AI, healthcare, and business—merging her analytical mindset with a love for impactful change. An all-rounder at heart, she has actively participated in various school events, from organizing initiatives to representing her peers. She's also a Bharatanatyam dancer with two years of classical training, and a skilled artist with a special talent for perspective drawing.",
    linkedIn:
      "https://www.linkedin.com/in/manasvi-kale-2124002a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  "dabosmita-das": {
    name: "Dabosmita Das",
    image: "/Dabosmita.jpg",
    bio: "Dabosmita is a Year 12 student who is endlessly curious and excited to explore new ideas. She actively engages with the latest developments in technology and medicine, while also enjoying deep, contemplative discussions in philosophy. Her interdisciplinary mindset and passion for learning drive her to seek knowledge beyond the classroom.",
    linkedIn: "https://linkedin.com",
  },
  "manasvi-bobade": {
    name: "Manasvi Bobade",
    image: "/Manasvi.jpg",
    bio: "Manasvi Bobade is a sophomore at Alliance Academy for Innovation with a strong passion for business and a growing interest in healthcare. She writes to explore the intersection of science, innovation, and youth engagement.",
    linkedIn: "https://www.linkedin.com/in/manasvi-bobade-6695a0330/",
},
"raine-waverka": {
  name: "Raine Waverka",
  image: "/raine.jpg", 
  bio: "Raine Waverka is a budding phage researcher exploring CRISPR and oncology through elite science programs at Vanderbilt and Boston University."
},
"iosef-isaac-perez": {
  name: "Iosef Isaac Perez",
  image: "/logo.png", 
  bio: "Iosef is an undergraduate passionate about neuroscience, medicine, and the research of pain and addiction at their intersection."
},
"gaeun-lee": {
  name: "Gaeun Lee",
  image: "/logo.png", 
  bio: "Gaeun Lee is a Korean high school student passionate about society, healthcare, and environmental issues, with a growing interest in economics and investment."
},
  "prithi-balaji": {
  name: "Prithi Balaji",
  image: "/logo.png",
  bio: "Prithi is a high school junior exploring genomic biochemistry and medicine, passionate about making science accessible through writing."
},
  "avika-tyagi": {
  name: "Avika Tyagi",
  image: "/logo.png",
  bio: "Avika is a rising sophomore in Maryland passionate about neuroscience, pediatrics, and pursuing a future in medicine and research."
},
  "nashto-mohammed": {
  name: "Nashto Mohammed",
  image: "/logo.png",
  bio: "Nashto is an aspiring medical student and researcher with a keen interest in microbiology and virology, dedicated to exploring the intricate relationships between microbes and human health."
},
"evan-wright": {
  name: "Evan Wright",
  image: "/logo.png",
  bio: " "
},
}

// Blog Topics
export const blogTopics: BlogTopic[] = [
  {
    name: "Op-Eds",
    slug: "op-ed",
    description:
      "Explore personal perspectives and youth-driven thought leadership on healthcare, policy, and innovation.",
    image: "/logo.png",
  },
  {
    name: "Types of Nurses",
    slug: "nurses",
    description:
      "Explore the diverse roles and specializations within the nursing profession, from pediatric care to elder care and beyond.",
    image: "/logo.png",
  },
  {
    name: "Types of Doctors",
    slug: "doctors",
    description:
      "Learn about the various medical specialties and the doctors who practice them, from general practitioners to specialized consultants.",
    image: "/logo.png",
  },
  {
    name: "Healthcare Law",
    slug: "healthcare-law",
    description: "Dive into the legal aspects of medicine, from malpractice to medical ethics and patients' rights.",
    image: "/logo.png",
  },
  {
    name: "Cancer",
    slug: "cancer",
    description:
      "Discover the latest research, treatments, and insights into cancer, one of the most challenging medical conditions of our time.",
    image: "/logo.png",
  },
  {
  name: "Medical Innovation",
  slug: "medical-innovation",
  description: "Explore groundbreaking research, futuristic treatments, and the technologies shaping the next era of healthcare.",
  image: "/logo.png"
  },
  {
  name: "Recent News",
  slug: "recent-news",
  description: "Stay informed with the latest developments, discoveries, and updates from the world of healthcare and medical science.",
  image: "/logo.png"
  },
  {
  name: "Mental Health",
  slug: "mental-health",
  description:
    "Explore articles focused on mental wellness, psychology, and the impact of modern life on our minds — from stress and anxiety to mindfulness and recovery.",
  image: "/logo.png",
},

]

// Blog Posts (Ordered from Most Recent to Oldest)
export const blogPosts: BlogPost[] = [
  {
  slug: "the-burnout-pipeline-how-students-lose-interest-in-healthcare-before-they-even-start",
  title: "The Burnout Pipeline: How Students Lose Interest in Healthcare Before They Even Start",
  excerpt: "The idea of a “healthcare dream” for example becoming a nurse, doctor, surgeon, inspires many students, but unfortunately, the growing reality is that too many students lose interest in healthcare before they ever even begin. ",
  content: `
# Introduction

The idea of a *“healthcare dream”* — for example becoming a nurse, doctor, or surgeon — inspires many students, but unfortunately, the growing reality is that too many students lose interest in healthcare before they ever even begin. This is because of burnout, stress, and declining motivation. Research shows that burnout isn’t only a problem for practicing healthcare professionals; rather, it begins early in training. A study of pre-medical undergraduates found that higher burnout levels directly correlate with a drop in interest in medical careers, not because students lacked passion, but because stress and mental health struggles destroyed their aspirations over time. This problem threatens the future workforce at a time when healthcare systems are already dealing with staffing shortages.

# Academic Pressure and Early Burnout

Medical and healthcare education is well known to be notoriously demanding, and that intensity contributes to early burnout before students even get close to reaching the clinical stage. Burnout is characterized by emotional exhaustion and reduced self-efficacy. Studies find that burnout rates among medical students are driven by heavy workloads, exams, and psychological stressors inherent in healthcare training environments. When students start to feel overwhelmed by these expectations, many rethink their future in the field.

# Mental Health Struggles Reduce Career Interest

The connection between burnout and declining interest in healthcare careers is measurable. In another study of undergraduate pre-medical students, those reporting higher burnout scores and depressive symptoms were significantly more likely to say they were less interested in pursuing medicine over time. This means that the problem begins long before actual clinical training and affects students who may have otherwise become doctors or nurses. It also shows how mental health struggles don’t just make students unhappy — they can destroy passion and long-term career aspirations.

# Retention and Pipeline Threats in Healthcare

Burnout affects more than just medical students. Nursing students and many other allied health students show the same trends. Research on nursing student burnout directly relates to high academic pressure, low future professional confidence, and mental fatigue. When students feel unsupported or overwhelmed, they are more likely to disengage academically and reconsider their commitment to healthcare work. Therefore, providing students with a positive, engaging learning environment — along with strong mental health support and more realistic academic expectations — is essential.

# Conclusion: Preventing Burnout to Preserve the Healthcare Workforce

Ultimately, the evidence is clear: higher burnout and depressive symptoms among students pursuing healthcare correspond with declining interest in healthcare careers, especially among women. To preserve the future workforce, educators and institutions must address this issue. Providing students with a positive, engaging environment to learn in — with strong mental health support and more realistic academic expectations — is a necessary solution.

# Works Cited

Grace, Matthew K. “Depressive Symptoms, Burnout, and Declining Medical Career Interest among Undergraduate Pre-Medical Students.” *International Journal of Medical Education*, vol. 9, 2018, pp. 302–308.  
https://doi.org/10.5116/ijme.5be5.8131  
Accessed 2 Feb. 2026.

Kiss, Hedvig, and Bettina F. Pikó. “Risk and Protective Factors of Student Burnout among Medical Students: A Multivariate Analysis.” *BMC Medical Education*, vol. 25, no. 56, 2025.  
https://bmcmededuc.biomedcentral.com/articles/10.1186/s12909-025-06956-8  
Accessed 2 Feb. 2026.

“Medical Student Distress Rises amid Overall Healthcare Burnout Improvement.” *OR Manager*, 2025.  
https://www.ormanager.com/briefs/report-medical-student-distress-rises-amid-overall-healthcare-burnout-improvement/  
Accessed 2 Feb. 2026.

Zhang, Yanan, et al. “Status and Influencing Factors of Academic Burnout among Undergraduate Nursing Students.” *BMC Nursing*, vol. 24, no. 102, 2025.  
https://bmcnurs.biomedcentral.com/articles/10.1186/s12912-025-04036-2  
Accessed 2 Feb. 2026.
  `,
  coverImage: "/burnout.png",
  date: "February 2, 2026",
  author: authors["manha-atiq"],
  topic: "Health",
  readingTime: "5 min read",
  featured: false
},
{
  slug: "personalized-medicine-why-one-treatment-doesnt-fit-all",
  title: "Personalized Medicine: Why One Treatment Doesn’t Fit All",
  excerpt:"For most of modern history, medicine has been based on the idea of the average patient. Doctors used standard drug doses and treatment plans and expected them to work for most people.",
  content: `# Introduction

For most of modern history, medicine has been based on the idea of the *average patient*. Doctors used standard drug doses and treatment plans and expected them to work for most people. This approach can help in emergencies or simple infections, but it often does not work well for chronic diseases, cancer, or mental health conditions. People with the same diagnosis can react very differently to the same treatment.

*Personalized medicine*, also called *precision medicine*, focuses on what will work best for a specific person instead of what usually works for everyone. It recognizes that differences in genetics, lifestyle, and environment affect how diseases develop and how treatments work. As genetic testing and data tools improve, personalized medicine is becoming more common in hospitals and clinics.

# Genetics and Treatment Differences

One big reason treatments do not work the same for everyone is genetics. Small differences in DNA can affect how the body processes medications. *Pharmacogenomics* studies how these genetic differences change how drugs work and what side effects they cause. A normal drug dose can be too weak for one person and too strong for another.

For example, about 30 percent of people have a genetic variant that makes the blood thinner *clopidogrel* less effective, which can increase the risk of blood clots. Another example is *warfarin*, a drug used to prevent clots. Some people are very sensitive to it because of their genes, so a standard dose can cause dangerous bleeding. Because of this, the FDA recommends considering genetic testing before using warfarin.

In cancer treatment, drugs like *trastuzumab* are only effective in patients whose tumors have high levels of the *HER2* protein. These examples show that without genetic information, doctors may give treatments that do not work well or may even be harmful.

# Lifestyle and Environmental Factors

Genes are important, but they are not the whole story. People with similar DNA can still have very different health outcomes because of lifestyle and environment. Diet, exercise, stress, sleep, pollution, and exposure to toxins all affect how diseases develop and how the body responds to medicine.

For example, two people with high blood pressure may need different treatments if one’s condition is mainly caused by stress and diet while the other has kidney problems. Personalized medicine looks at the full picture by combining genetic data with medical records, lab results, and patient habits. This allows doctors to adjust medications, recommend specific lifestyle changes, and focus on mental and social health instead of using the same plan for everyone.

# Benefits and Challenges

Personalized medicine has clear benefits. Matching the right treatment to the right person can reduce side effects and improve how well treatments work. In cancer care, patients who receive treatments based on their tumor’s genetics often respond better than those who receive standard treatments.

However, there are challenges:

- Genetic testing can be expensive  
- Doctors need training to understand the results  
- There are privacy concerns with storing genetic data  
- Access may be limited to wealthier patients or large medical centers  

Unless access improves, personalized medicine may not benefit everyone equally.

# Conclusion

Personalized medicine changes the idea that one treatment works for everyone with the same disease. By using genetic information along with lifestyle, environment, and personal health history, it treats patients as individuals instead of averages.

Examples like *clopidogrel*, *warfarin*, and *HER2-targeted cancer treatments* already show how personalized care can be safer and more effective. As technology continues to improve, medical care will likely become more personal and better suited to each individual.

# Sources / References

The Jackson Laboratory. “What Is Personalized Medicine?” *The Jackson Laboratory*, www.jax.org/personalized-medicine/precision-medicine-and-you/what-is-precision-medicine. Accessed 1 Feb. 2026.

“Innovative Health Dallas: Personalized Medicine – Why One-Size-Fits-All Doesn’t Work Anymore.” *Innovative Health Dallas*, www.innovativehealthdallas.com/personalized-medicine-why-one-size-fits-all-doesnt-work-anymore. Accessed 1 Feb. 2026.

“Why One-Size-Fits-All Doesn’t Work: How Personalized Medicine Is Changing Healthcare.” *Prime Direct Health*, primedirecthealth.com/personalized-medicine-in-healthcare. Accessed 1 Feb. 2026.

Ingle, James N., et al. “Cancer Pharmacogenomics.” *Cancer*, U.S. National Library of Medicine, pmc.ncbi.nlm.nih.gov/articles/PMC3646359. Accessed 1 Feb. 2026.

“Table of Pharmacogenomic Biomarkers in Drug Labeling.” *U.S. Food and Drug Administration*, www.fda.gov. Accessed 1 Feb. 2026.
  `,
  coverImage: "/pmed.png",
  date: "February 1, 2026",
  author: authors["evan-wright"],
  topic: "Health",
  readingTime: "6 min read",
  featured: false
},
{
  slug: "phages-in-your-gut",
  title: "Phages in Your Gut: The Invisible Viruses That Shape Your Health",
  excerpt:
    "The idea of a “healthcare dream” for example becoming a nurse, doctor, surgeon, inspires many students, but unfortunately, the growing reality is that too many students lose interest in healthcare before they ever even begin. ",
  content: `
## Phages in Your Gut: The Invisible Viruses That Shape Your Health

Hidden deep in the human intestine is a secret universe ruled by **bacteriophages**, or “phages.” These are viruses that infect bacteria, with an estimated ten phages for each bacterial cell in the gut. Though invisible and often overlooked, phages are crucial for maintaining a healthy gut ecosystem. They control which bacteria survive, how bacteria interact, and how our bodies respond to infection and inflammation.

---

## Role of Phages in the Gut Microbiome

Phages are essential regulators of the **microbiome**, the vast community of bacteria in our intestines. By infecting and lysing pathogenic bacteria, phages help maintain balance in the gut, supporting both **digestion** and **immune function** (Clokie et al., 2011). When this balance is disrupted—a state called **dysbiosis**—it can lead to gut disorders and chronic ailments like **inflammatory bowel disease (IBD)**. Research shows phages naturally target problematic bacterial strains, helping restore microbial balance (Shkoporov & Hill, 2019).

---

## Phages in Modern Medicine

Phages are emerging as a promising tool in **phage therapy**, which uses specific phages to target antibiotic-resistant bacteria (Kortright et al., 2019). Unlike broad-spectrum antibiotics, phages can attack harmful bacteria while leaving beneficial bacteria intact. This precision offers a potential revolution in treating infectious diseases, especially those no longer responsive to traditional drugs, and could transform how we manage gut-related illnesses and microbial diseases.

---

## The Future of Phage Research

Though phage science is still in its infancy, their potential is enormous. These tiny viruses act as **invisible protectors**, policing microbial balance to maintain health. Understanding how phages influence immunity, digestion, and disease prevention could unlock new ways to enhance human health.

---

## References

- Clokie, M. R. J., Millard, A. D., Letarov, A. V., & Heaphy, S. (2011). *Phages in nature.* Bacteriophage, 1(1), 31–45.  
- Shkoporov, A. N., & Hill, C. (2019). *Bacteriophages of the human gut: The "known unknown" of the microbiome.* Cell Host & Microbe, 25(2), 195–209.  
- Kortright, K. E., Chan, B. K., Koff, J. L., & Turner, P. E. (2019). *Phage therapy: A renewed approach to combat antibiotic-resistant bacteria.* Cell Host & Microbe, 25(2), 219–232.
  `,
  coverImage: "/gut-phages.png",
  date: "November 25, 2025",
  author: authors["nashto-mohammed"],
  topic: "Health",
  readingTime: "6 min read",
  featured: false
},

{
  slug: "measles-resurgence-canada",
  title: "Measles Resurging in Canada – Why Vaccination Matters",
  excerpt:
    "Measles has resurged in Canada after decades of elimination. Learn how gaps in vaccination coverage contributed to outbreaks, and why the MMR vaccine remains critical.",
  content: `
## Measles Resurging in Canada – Why Vaccination Matters

Measles returning in Canada may feel unreal, but the events of 2024–2025 showed that viruses don’t disappear simply because we assume they’re gone. The outbreak spread across multiple provinces, leading Canada to lose its measles-free status in late 2025. Thousands of cases were documented, including severe infections and infant deaths. These tragedies were preventable, highlighting the importance of vaccination and immunity maintenance.

---

## How Measles Resurged

Vaccine coverage is key. Rates had been slipping in certain regions, worsened by the COVID-19 pandemic. School closures, healthcare disruptions, and misinformation contributed to missed vaccinations. Measles requires extremely high coverage—around 95% with two MMR doses—to prevent outbreaks. Its contagiousness is unmatched: one infected person can spread it to 12–18 others, and the virus can linger in the air for hours.

---

## Misconceptions About Measles

Some viewed measles as “just a rash” or “something everyone got.” In reality, before vaccines, measles was a leading global killer. Complications include pneumonia, dehydration, encephalitis, blindness, hearing loss, long-term neurological damage, and SSPE—a fatal condition appearing years after infection. During Canada’s 2024–2025 outbreaks, infants too young for vaccination suffered preventable harm.

---

## The Role of the MMR Vaccine

The MMR vaccine is one of the safest and most studied vaccines globally. Two doses provide about 97% protection. Vaccination not only protects individuals but also shields vulnerable populations such as infants, pregnant people, and immunocompromised individuals—creating herd immunity.

---

## Public Health Response

Canadian public health agencies responded with:

- Extended-hour vaccination clinics and mobile immunization vans  
- Emergency catch-up programs  
- Temporary lowering of the minimum MMR vaccination age in outbreak areas  
- School-based immunization checks and notifications  
- New procedures in hospitals and clinics to prevent ER exposures  

---

## Challenges and Long-Term Solutions

Rebuilding immunity requires:

- Stable funding for routine immunization programs  
- Modernized, real-time immunization registries with reminders  
- Community-focused, culturally aware outreach  
- Increased access to primary care, especially in rural and Indigenous communities  
- Clear, consistent, and trustworthy public health communication  

Global trends also impact Canada, as measles outbreaks elsewhere can quickly spread via travel. Strengthened international coordination, outreach, and reliable vaccination systems are critical to prevent future outbreaks.

---

## Key Takeaways

- Measles resurgence in Canada was driven by small gaps in vaccination, worsened by the pandemic  
- The MMR vaccine is safe, effective, and essential for individual and community protection  
- Public health systems need stable funding, accessible services, and trusted communication  
- Preventing measles is achievable; rebuilding immunity is a matter of consistent vaccination and community engagement  

---

## References

- [Associated Press, 2025](https://apnews.com/news-highlights/spotlights/2025/canada-loses-measles-elimination-status-after-ongoing-outbreaks/)  
- [Bloomberg, 2025](https://www.bloomberg.com/news/articles/2025-11-10/canada-loses-measles-free-status-with-outbreak-passing-one-year-mark)  
- [Canadian Medical Association Journal, 2024](https://www.cmaj.ca/content/197/3/E101)  
- [Durham Region Public Health, 2025](https://www.durham.ca/en/health-and-wellness/resources/Documents/ResourcesforHealthCareProviders/FaxAbout/2025/Measles-Preparedness-June-12-2025.pdf)  
- [Gavi, The Vaccine Alliance, 2025](https://www.gavi.org/vaccineswork/why-measles-surging-worldwide)  
- [Government of Manitoba, 2025](https://www.gov.mb.ca/health/publichealth/cdc/docs/hcp/2025/travel-related-measles-confirmed-cases.pdf)  
- [Pan American Health Organization, 2025](https://www.paho.org/sites/default/files/2025-05/2025-may-2-phe-epi-update-measles-final.pdf)  
- [Public Health Agency of Canada, 2025](https://www.canada.ca/en/public-health/services/publications/diseases-conditions/measles-rubella-surveillance.html)  
- [Public Health Ontario, 2025](https://www.publichealthontario.ca/-/media/Documents/E/2025/enhanced-epi-summary-measles-2024-25.pdf)  
- [Reuters, 2025](https://www.reuters.com/world/americas/canada-has-lost-its-measles-elimination-status-says-ottawa-2025-11-10/)  
- [The Guardian, 2025](https://www.theguardian.com/world/2025/nov/11/canada-loses-measles-free-elimination-status)  
- [World Health Organization – Disease Outbreak News, 2025](https://www.who.int/emergencies/disease-outbreak-news/item/2025-DON565)  
- [World Health Organization – Measles Fact Sheet, 2025](https://www.who.int/news-room/fact-sheets/detail/measles)
  `,
  coverImage: "/measels_cover.png",
  date: "November 25, 2025",
  author: authors["manha-atiq"],
  topic: "Health",
  readingTime: "10 min read",
  featured: false
},

{
  slug: "asthma-understanding-causes-triggers-and-management",
  title: "What is Asthma? Understanding Causes, Triggers, and Management",
  excerpt:
    "Asthma is a common chronic condition affecting the lungs and airways. Learn about its causes, triggers, and practical ways to manage symptoms effectively.",
  content: `
## What is Asthma?

Asthma is a condition that affects the lungs and airways in our body. It causes problems with breathing and includes symptoms such as coughing and wheezing. It is one of the most common chronic conditions worldwide. In 2019 alone, around 262 million people were affected by asthma, and 455,000 people died from it.

While there is no cure for asthma, it can be managed with medications prescribed by doctors and by understanding triggers that can start an asthma attack. In this article, we explain how asthma occurs and discuss common triggers that can be managed to reduce attacks.

---

## The Mechanism Behind Asthma

In asthma, irritants or triggers can cause inflammation of the airways (bronchial tubes), making them narrow. This results in shortness of breath, wheezing, and chest tightness due to reduced airflow to the lungs.

Some contributing factors for asthma include:

- Family history of asthma  
- History of allergic conditions  
- Exposure to irritants like air pollution, which increases risk

---

## Common Triggers and Management

Asthma triggers vary by person, but many fall into similar categories:

### 1. Allergies
Exposure to allergens like dust mites can trigger asthma.  
**Management tips:**
- Avoid contact with allergens  
- Declutter living spaces  
- Remove carpets that trap dust  

### 2. Airborne Irritants
Smoke and dust can irritate the airways.  
**Management tips:**
- Use masks outdoors  
- Check air quality before outdoor activities  
- Install air filters indoors  

### 3. Emotional Stress
Strong emotions (anger, fear, excitement) or anxiety can trigger symptoms.  
**Management tips:**
- Practice mindful breathing (slow, controlled breaths)  
- Focus on a single object for a short time to relax  

### 4. Certain Medications
Medications such as aspirin and beta blockers may trigger asthma attacks.  
**Management tip:**
- Discuss any new medications with your healthcare provider
  `,
  coverImage: "/asthma-feature.png",
  date: "November 25, 2025",
  author: authors["dabosmita-das"],
  topic: "Health",
  readingTime: "5 min read",
  featured: false
},
{
  slug: "dr-galina-gheihman-profile",
  title: "Dr. Galina Gheihman: Advancing Medical Education in Neurology",
  excerpt:
    "Dr. Galina Gheihman, a neurologist at Brigham and Women’s Hospital and advisor at Harvard Medical School, is reshaping how neuroscience and neurology are taught through innovative programs and publications.",
  content: `
## Dr. Galina Gheihman: Advancing Medical Education in Neurology

![Dr. Galina Gheihman](/dr_gheihman_cover.jpg)

*Image source: [Brigham and Women’s Hospital Physician Directory](https://physiciandirectory.brighamandwomens.org/details/16852/?pk_vid=e042e8051a5503991760325443ada98c)*


## Who Is Dr. Gheihman?

**Dr. Galina Gheihman** is a practicing neurologist and resident supervisor at **Brigham and Women’s Hospital**. She leads the *NeuEJM Medical Journal*, and is a developer of the *Outpatient Neurology Series*, which introduced mental health and well-being surveys and services into medical curricula. 

She serves as a **PCE advisor for Harvard Medical School**, **co-director of a Non-Neurologist CME Course**, and **member of the HMS Taskforce for Teacher Faculty Experience**. Her writing includes academic articles and conference proceedings that explore innovative ways of teaching neuroscience in universities and medical programs.


## Education and Early Career

Originally from **Toronto, Ontario**, Dr. Gheihman completed her undergraduate studies at the **University of Toronto** before attending **Harvard Medical School**, where she earned her M.D. She completed her neurology residency at **Brigham and Women’s Hospital**, serving as **chief resident from 2023–2024**.  

She is now a **board-certified neurologist** in Massachusetts and continues to advise and mentor medical students at Harvard Medical School.


## Work in Medical Education and Curriculum

Dr. Gheihman has founded and directed multiple initiatives that transform how neurology is taught and practiced.

### Neuroscience Simulation Program
She founded a **neuroscience simulation program** at Brigham and Women’s Hospital for aspiring neuroscientists and medical students. This program offers early, hands-on exposure to neurology and patient care — promoting active learning before residency.

### BRAINS Program
Dr. Gheihman co-founded **BRAINS**, a program that encourages **bedside near-peer teaching** among internal medicine residents. Junior students benefit from learning directly from residents who have recently gone through similar academic challenges, helping bridge the gap between theory and practice.

### Educational Leadership
She is also the **leader and co-founder of NeuFJM**, a monthly medical education journal club, and the creator of **Well-Rounded Wednesdays** within the *Outpatient Neurology Series*. As the director of the **CME (Continuing Medical Education)** program, she focuses on supporting both medical students and faculty through innovative and empathetic curriculum design.


## Publications and Articles

Dr. Gheihman is a **prolific author**, publishing numerous works that make medical education more accessible and effective for students and educators alike.  

Some of her most recognized publications include:

- *Teaching Neurology Amid an Ever-Changing Field* (Gheihman, 2024)  
- *Critical Values and Characteristics in a Successful Neurology Educator* (Gheihman, 2024)  

Her work has been featured in interviews on **YouTube**, and cited by other physicians, neuroscientists, and general practitioners. Beyond education, she has published studies on **post-neurointensive care** and **recovery following major surgeries** — merging clinical practice with academic innovation.


## In Summary

Dr. Galina Gheihman continues to **redefine how neuroscience and neurology are taught**, fostering environments where both medical students and educators thrive. Her programs, mentorship, and research are shaping the future of neurology education — blending compassion, innovation, and rigorous science.


## Links to Her Work

- [Brigham and Women’s Hospital Physician Directory](https://physiciandirectory.brighamandwomens.org/details/16852/?pk_vid=e042e8051a5503991760325443ada98c)  
- [NeurologyLive – Dr. Galina Gheihman](https://www.neurologylive.com/authors/galina-gheihman-md)
  `,
  coverImage: "/dr_gheihman_cover.jpg",
  date: "October 12, 2025",
  author: authors["avika-tyagi"],
  topic: "Medical Education",
  readingTime: "6 min read",
  featured: false
},
{
  slug: "genetic-factors-in-stroke-recovery",
  title: "How Genetics Influence Stroke Recovery",
  excerpt:
    "Stroke recovery isn’t only about age or treatment — genetics play a crucial role too. Learn how genes like BDNF, APOE e4, and PATJ impact neuroplasticity, inflammation, and healing outcomes after a stroke.",
  content: `
## How Genetics Influence Stroke Recovery

![Stroke research image](/stroke_research_cover.jpg)

*Image source: [Keck School of Medicine, USC](https://keck.usc.edu/news/usc-researcher-uses-mammal-dna-to-zoom-into-the-human-genome-with-unprecedented-resolution/)*


## What Is a Stroke?

A stroke is a condition that affects the arteries within the brain and those leading to it. It occurs when one of the blood vessels ruptures or becomes blocked by a blood clot, preventing oxygen from reaching brain cells — which then begin to die.

There are two main types of stroke: **ischemic** and **hemorrhagic**.

- **Ischemic stroke** is the most common type, accounting for about **90% of all cases**. It happens when a blood vessel is blocked by a clot, cutting off oxygen flow to the brain.  
- **Hemorrhagic stroke**, on the other hand, occurs when a blood vessel ruptures in the brain, causing bleeding that exerts pressure on surrounding cells and damages them.


## Common Treatments for Stroke

The usual treatment for ischemic strokes is **tPA (tissue plasminogen activator)** — a drug that helps dissolve clots and restore blood flow. If tPA is not available, medications such as **clopidogrel** and **blood pressure drugs** are used to reduce vessel strain and prevent new clots.

Rehabilitation also plays a vital role in recovery. This can include **physical therapy, speech therapy, and cognitive training**. Most recovery progress occurs soon after the stroke, so early intervention is key once the patient is medically stable.


## How Genetics Affect Stroke Recovery

While age and lifestyle are known predictors of stroke recovery, **genetic factors** also play an important role in how well patients regain function. Genes can influence inflammation, neural repair, and response to medication — making recovery outcomes highly individual.


### 1. The BDNF val66met Variant

The **BDNF (Brain-Derived Neurotrophic Factor)** gene supports neuroplasticity and memory formation. However, the **val66met variant** has been linked to poorer recovery outcomes, especially in cognitive and motor functions after a stroke.


### 2. The APOE e4 Gene

The **APOE e4** gene, more commonly associated with Alzheimer’s disease, has also been tied to **worse stroke recovery outcomes**. Carriers often show higher inflammation in the brain, which hampers healing and neuroregeneration.


### 3. The PATJ Gene

A 2019 study found that the **G allele** in the **PATJ gene** correlates with poorer recovery outcomes. Since PATJ affects **neurovascular repair** in damaged brain areas, the G allele’s reduced activity can slow healing. Genetic screening for this variant could help tailor personalized rehabilitation plans in the future.


## Looking Ahead

Understanding how genetics affect stroke recovery opens the door to **personalized medicine** — where treatments and therapies are adjusted based on a patient’s genetic profile. Though research is still evolving, genetic insights may soon allow doctors to predict recovery outcomes more accurately and improve rehabilitation strategies.


## References

- American Stroke Association. (n.d.-a). *About stroke.* American Stroke Association. Retrieved from [https://www.stroke.org/en/about-stroke](https://www.stroke.org/en/about-stroke)  
- National Heart, Lung, and Blood Institute. (n.d.). *Stroke—What is a stroke?* NHLBI, NIH. [https://www.nhlbi.nih.gov/health/stroke](https://www.nhlbi.nih.gov/health/stroke)  
- American Stroke Association. (n.d.-b). *Effects of stroke.* American Stroke Association. [https://www.stroke.org/en/about-stroke/effects-of-stroke](https://www.stroke.org/en/about-stroke/effects-of-stroke)  
- The STRONG Study Investigators & Shah, S. C. (2025). *Genetic variation and stroke recovery: The STRONG Study.* *Stroke.* Advance online publication. [https://www.ahajournals.org/doi/10.1161/STROKEAHA.124.047643](https://www.ahajournals.org/doi/10.1161/STROKEAHA.124.047643)  
- Balkaya, M., & Cho, S. (2019). *Genetics of stroke recovery: BDNF val66met polymorphism in stroke recovery and its interaction with aging.* *Neurobiology of Disease, 126,* 36–46. [https://doi.org/10.1016/j.nbd.2018.08.009](https://doi.org/10.1016/j.nbd.2018.08.009)  
- Bathina, S., & Das, U. N. (2015). *Brain-derived neurotrophic factor and its clinical implications.* *Archives of Medical Science, 11(6),* 1164–1178. [https://pmc.ncbi.nlm.nih.gov/articles/PMC4697050](https://pmc.ncbi.nlm.nih.gov/articles/PMC4697050)  
- Mola-Caminal, M., Ni, L., Scott, L., Campbell, H. M., Pan, X., Alsina, K. M., Reynolds, J., Philippen, L. E., Hulsurkar, M., & Williams, S. M. (2019). *PATJ low-frequency variants are associated with worse functional outcome after ischemic stroke.* *Circulation Research, 124(1),* 114–124. [https://doi.org/10.1161/CIRCRESAHA.118.313533](https://doi.org/10.1161/CIRCRESAHA.118.313533) 
  `,
  coverImage: "/stroke_research_cover.jpg",
  date: "October 27, 2025",
  author: authors["dabosmita-das"],
  topic: "Genetics & Neurology",
  readingTime: "6 min read",
  featured: false
},
 {
  slug: "social-media-damaging-teen-mental-health",
  title: "How Social Media Is Damaging Teens’ Mental Health",
  excerpt:
    "With nearly all teens using social media daily, platforms like TikTok and Instagram are reshaping youth mental health — often for the worse. Explore the rising concerns about anxiety, depression, and body image linked to excessive screen time.",
  content: `
## How Social Media Is Damaging Teens’ Mental Health

Social media is all around us and literally everywhere we go. But social media is particularly more popular among young adults and teenagers, especially teenagers in this day and age. For the record, around 95% of youth aged 13–17 say they use social media platforms, and almost one-third report using it almost continuously. An average teen in the US reports spending nearly **5 hours daily** on apps such as TikTok, YouTube, and Instagram — and only a small 20% of teens spend less than 2 hours!



## Why Teens?

Why do they fall victim to spending long hours on it?

One of the main reasons why teens become attached to social media is because they get to connect almost instantly with others, particularly their peers. Around **81% of teens say that social media helps them feel connected** to their friends' lives, reducing FOMO (fear of missing out). Peer pressure also plays a major role, making teens almost desperate to connect through social media. Many also find communities that share similar opinions or lifestyles.

Another reason is that a lot of teens get most of their news from social media as well, believing it helps them broaden their viewpoints by being exposed to different types of opinions and engaging in issues relevant to them.



## Behind the Long Hours — The Real Impact

Despite teens loving social media, many struggle with its effects. **1 in 10 adolescents** show signs of problematic social media behavior, often struggling to control their use and experiencing detrimental mental health issues. **41% of teens** with the highest social media usage rate their mental health as *very poor*, and **22% report suicidal or self-harming thoughts.**

Moreover, children and adolescents who spend more than **3 hours a day** on social media face *twice the risk* of depression, anxiety, or other mental health disorders. There has even been a **188% rise in eating disorders** among youth aged 10–21 — largely linked to social media body comparisons, as **46% of teens** say that social media tends to make them feel worse about their bodies.

Worse academic performance, poor sleep schedules, and social isolation are just some of the consequences of problematic social media use. All of these factors can further demotivate teens and cause them to spiral.


## A Call for Awareness

Hence, we must remain cautious when using social media and support anyone we see struggling with similar issues. Setting screen-time boundaries, taking digital detoxes, and engaging in offline hobbies can all help in creating a healthier balance.


## References

- Anderson, M., & Jiang, J. (2018, November 28). *Teens and their experiences on social media.* Pew Research Center. Retrieved September 21, 2025, from https://www.pewresearch.org/internet/2018/11/28/teens-and-their-experiences-on-social-media/  
- DeAngelis, T. (2024, April 1). *Teens are spending nearly 5 hours daily on social media. Here are the mental health outcomes.* American Psychological Association. Retrieved September 21, 2025, from https://www.apa.org/monitor/2024/04/teen-social-use-mental-health  
- *How Social Media is Impacting Teens.* (2023, June 23). The REACH Institute. Retrieved September 21, 2025, from https://thereachinstitute.org/mind-over-minutes-how-youths-screen-habits-are-impacting-their-mental-health/  
- Rothwell, J. (2023, October 27). *Parenting Mitigates Social Media-Linked Mental Health Issues.* Gallup. Retrieved September 21, 2025, from https://news.gallup.com/poll/513248/parenting-mitigates-social-media-linked-mental-health-issues.aspx  
- *Teens, screens, and mental health.* (2024, September 25). World Health Organization (WHO). Retrieved September 21, 2025, from https://www.who.int/europe/news/item/25-09-2024-teens--screens-and-mental-health  
- US Department of Health and Human Services. (n.d.). *Social Media and Youth Mental Health.* NCBI. Retrieved September 21, 2025, from https://www.ncbi.nlm.nih.gov/books/NBK594759/  
  `,
  coverImage: "/social_media_teens_cover.jpg", 
  date: "October 4, 2025",
  author: authors["dabosmita-das"],
  topic: "Mental Health",
  readingTime: "5 min read",
  featured: false
},
  
  {
  slug: "recognizing-dr-georgios-karagiannis",
  title: "More Than A Doctor: Recognizing Dr. Karagiannis’s Work",
  excerpt:
    "Dr. Georgios Karagiannis, a distinguished cardiologist and researcher, continues to shape the field of heart failure and preventive cardiology through his medical expertise and academic dedication.",
  content: `
## More Than A Doctor: Recognizing Dr. Karagiannis’s Work

Doctors are truly amazing, aren’t they? Some of them deserve to be recognized for their continuous efforts to improve human lives, either directly through treatment or indirectly through groundbreaking research. One such doctor is **Dr. Georgios Karagiannis**, a cardiologist renowned for his specialization in the field of heart failure.



## A Lifelong Commitment to Cardiology

Dr. Karagiannis currently practices at **Harefield Hospital** in the UK, where he treats patients from both private and NHS sectors, as well as at **Hillingdon Hospital** in the cardiology department. His dedication to education and medicine is evident through his roles as a **lecturer at Imperial College London** and **Brunel University London**, and as a **tutor at the Royal College of Physicians**.  
His clinical interests include **heart failure**, **preventive cardiology**, and **acute cardiac care**.



## Educational Background and Credentials

Dr. Karagiannis completed his medical degree at the **Aristotle University of Thessaloniki** in Greece and went on to receive advanced training in cardiology there. His academic qualifications include both **MD** and **PhD** degrees, demonstrating his strong commitment to clinical practice and medical research.



## Research and Contributions

Beyond his hospital work, Dr. Karagiannis is recognized for his impactful **research publications** in cardiology. Some of his notable contributions include:

- **A score for risk classification for heart failure patients**, designed to help physicians assess patient conditions based on key complications and factors.  
- **“The sympathetic nervous system in heart failure: physiology, pathophysiology, and clinical implications,”** which explores the underlying mechanisms of heart failure and informs therapeutic strategies targeting the sympathetic nervous system (SNS).

His research continues to guide clinicians and researchers toward improved treatment approaches and better patient outcomes.



## Recognitions and Professional Distinctions

For his excellence in cardiology, Dr. Karagiannis has been awarded several prestigious titles:

- **FESC (Fellow of the European Society of Cardiology)**  
- **FHFA (Fellow of the Heart Failure Association)**  
- **FRCP (Fellow of the Royal College of Physicians)**  

These honors reflect not only his expertise but also his contributions to advancing the global understanding of cardiovascular health.



## Final Thoughts

Dr. Georgios Karagiannis’s career reflects both **passion and perseverance**. Whether treating patients with compassion or contributing to medical literature, his work stands as a beacon of excellence in cardiology. His commitment to research, education, and patient care makes him much more than a doctor—he is a true pioneer of heart health.



## References

- Butler, J. (2009, November 3). *The sympathetic nervous system in heart failure: physiology, pathophysiology, and clinical implications.* PubMed. Retrieved October 8, 2025, from [https://pubmed.ncbi.nlm.nih.gov/19874988/](https://pubmed.ncbi.nlm.nih.gov/19874988/)  
- Circle Health Group. (n.d.). *Dr Georgios Karagiannis.* Retrieved October 8, 2025, from [https://www.circlehealthgroup.co.uk/consultants/georgios-karagiannis](https://www.circlehealthgroup.co.uk/consultants/georgios-karagiannis)  
- *Dr Georgios Karagiannis | Consultant Cardiologist.* (n.d.). Spire Healthcare. Retrieved October 8, 2025, from [https://www.spirehealthcare.com/consultant-profiles/dr-georgios-karagiannis-c7459666/](https://www.spirehealthcare.com/consultant-profiles/dr-georgios-karagiannis-c7459666/)  
- HCA Healthcare UK. (n.d.). *Dr Georgios Karagiannis.* Retrieved October 8, 2025, from [https://www.hcahealthcare.co.uk/finder/stepconsultantprofile/dr-georgios-karagiannis](https://www.hcahealthcare.co.uk/finder/stepconsultantprofile/dr-georgios-karagiannis)  
- Royal Brompton and Harefield Education. (n.d.). *Dr Georgios Karagiannis.* Retrieved October 8, 2025, from [https://www.rbhh-education.co.uk/instructor/dr-georgios-karagiannis/](https://www.rbhh-education.co.uk/instructor/dr-georgios-karagiannis/)
  `,
  coverImage: "/dr_karagiannis_cover.jpg", 
  date: "September 19, 2025",
  author: authors["dabosmita-das"],
  topic: "Medical Innovation",
  readingTime: "5 min read",
  featured: true
},
  {
  slug: "sleep-deprivation-affects-stress-and-anxiety",
  title: "How Sleep Deprivation Affects Teen Stress and Anxiety",
  excerpt:
    "Do you sleep well? If you are a teenager, your answer will be no-day. The recommended daily amount of sleep is **8 to 10 hours**. However, teens actually sleep **less than 6 hours**. Would this be a problem if most teens don't get enough sleep? ",
  content: `
## Introduction
Do you sleep well? If you are a teenager, your answer will be no-day. The recommended daily amount of sleep is **8 to 10 hours**. However, teens actually sleep **less than 6 hours**. Would this be a problem if most teens don't get enough sleep?  

The answer is that it's a problem.  

## Problem 1: Increased Stress
Lack of sleep is one of the biggest reasons for raising stress levels in adolescents. Sleeping properly doubles the pressure on academic achievement and makes them easily sensitive to trivial matters.  

- **53%** of teenagers said they felt lethargic or lazy when they did not get enough sleep.  
- **42%** said they were annoyed.  
- **32%** said they were less focused.  
- **23%** said they were not motivated to fulfill their responsibilities.  

Adolescents who had less stress during the last school year reported more hours of sleep at night than those who had more stress (**7.8 hours vs. 6.9 hours**).  

- **90%** of teenagers who reported low stress levels during the last school year said they got enough sleep.  
- Less than **48%** of those with higher stress levels reported getting enough sleep.  
- Adolescents with low stress were more likely to report very good sleep quality (**59% vs. 22%**).  

Teenagers with high stress levels were more likely to report trouble sleeping well.  
- **43%** said they could not get enough sleep because of a complicated head.  
- Only **9%** of low-stress teenagers reported the same.  

In short, adolescents who slept less than 8 hours on a school night were found to be more stressed than those who slept at least 8 hours.  



## Problem 2: Deepening Anxiety
Teenagers also experience **greater anxiety** if they don't get enough sleep.  

It is common for students to suffer from greater anxiety in the examination room. Palmer and Dr. Joanne Bower from the University of East Anglia analyzed **154 studies spanning 50 years**. They found that all three types of sleep deprivation increased anxiety symptoms among participants, including:  

- Decreased positive emotions (joy, happiness, satisfaction)  
- Faster heart rates  
- Higher anxiety  

> “This has happened even after a short period of sleep, such as staying up an hour or two later than usual or not sleeping for just a few hours,” Palmer said.  
> “Also, sleep deprivation has been shown to exacerbate anxiety symptoms and slow the arousal of emotional stimuli.”  

Results for depressive symptoms were small and inconsistent, as were outcomes for negative emotions such as sadness, worry, and stress.  



## Conclusion
Lack of sleep can adversely affect both **stress** and **anxiety**.  
Therefore, it is important for teens to **develop healthy sleep habits**.  



## References
- Columbia University Department of Psychiatry. *How Sleep Deprivation Impacts Mental Health.* Columbia Psychiatry.  
- British Psychological Society. *Lack of Sleep Causes Anxiety – Don’t Worry About It.* BPS Research Digest.  
- Banner Health. *How Sleep Can Affect Stress.* Banner Health Blog.  
- American Psychological Association. *Stress in America: Are Teens Adopting Adults’ Stress Habits?* APA News Release, 2013.  
- Johns Hopkins Medicine. *The Effects of Sleep Deprivation.* Johns Hopkins Medicine Health Library.  

  `,
  coverImage: "/sleep-deprivation.png",
  date: "September 17, 2025",
  author: authors["gaeun-lee"],
  topic: "Wellness",
  readingTime: "6 min read",
  featured: false
},
 {
  slug: "exercise-hobbies-teens-wellness",
  title: "How Exercise and Hobbies Boost Teen’s Wellness",
  excerpt:
    "Balancing school with hobbies and exercise isn’t just fun—it’s essential. Discover how physical activity and creative outlets can reduce stress, boost mood, and improve teen mental health.",
  content: `
## How Exercise and Hobbies Boost Teen’s Wellness

As teenagers, we often get told that “Academics Come First,” which usually means that everything else we’re passionate about has to take a backseat. With each grade, responsibilities pile up, and it can get harder to find time for the things we love. Being a teen comes with so much stress—that’s why it’s vital to have relaxing hobbies and make time for exercise!

## How Does Exercise Affect Mental Wellness?

Exercise isn’t just about fitness—it’s also fuel for your brain. Running, walking, lifting weights, or playing sports releases **endorphins**, the chemicals that boost your mood and relieve stress. With less stress, teens often sleep better, stay focused, and feel more motivated.


## How Do Hobbies Affect Mental Wellness?

Hobbies give students a productive outlet to relax and express themselves. Whether it’s art, music, sports, or cooking, hobbies build confidence, discipline, and joy. They also help teens detach from school pressures, making life feel more balanced.

## What Happens Without Exercise or Hobbies?

Without physical or mentally engaging activities, teens risk poor mental health. Burnout, anxiety, and depression become more likely when academics are the only focus. Hobbies and exercise refresh both mind and body, protecting against these risks.

## The Social Benefits

Exercising or pursuing hobbies connects you with others who share your interests. Friendships formed through gyms, sports teams, art clubs, or even cooking groups can become powerful support systems.

Examples include:

- Staying active (gym, running, walking)  
- Playing sports  
- Singing or songwriting  
- Cooking or baking  
- Drawing or painting  
- Solving puzzles  

These shared passions foster belonging and happiness.
## Final Thoughts

Taking breaks to exercise and explore hobbies isn’t a distraction—it’s self-care. Whether it’s music, biking, or painting, dedicating time to what makes you happy can transform your well-being and open doors you never imagined.
## Sources

- Parkhurst, Emma. *How Hobbies Improve Mental Health.* Mental Health Education, USU Extension, 25 Oct. 2021. [extension.usu.edu/mentalhealth/articles/how-hobbies-improve-mental-health](https://extension.usu.edu/mentalhealth/articles/how-hobbies-improve-mental-health)  
- Mayo Clinic Staff. *Exercise and Stress: Get Moving to Manage Stress.* Mayo Clinic, 3 July 2025. [www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/exercise-and-stress/art-20044469](https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/exercise-and-stress/art-20044469)
  `,
  coverImage: "/exercise_hobbies_cover.jpg",
  date: "September 17, 2025",
  author: authors["avika-tyagi"],
  topic: "Wellness",
  readingTime: "6 min read",
  featured: false
},

  {
   
  slug: "who-are-operational-nurses",
  title: "Who Are Operational Nurses and Why They Matter",
  excerpt:
    "Explore the vital roles of operational (perioperative) nurses before, during, and after surgery — including their types, training, and impact on patient care.",
  content: `
## Who are operational nurses?

Operational nurses, or perioperative nurses, are healthcare professionals who assist doctors during surgeries. They monitor patients and care for them before, during, and after operations. These nurses must remain calm under stress and handle complex tasks with focus and care.


## Common responsibilities

While specific tasks may vary by role, operational nurses typically:

- Collaborate with doctors and communicate with patients  
- Ensure consent forms are signed  
- Answer pre-surgery questions  
- Sterilize and manage surgical tools  
- Monitor vitals and give medications before and after surgery  

## What are the educational qualifications?

To become an operational nurse:

- Earn a **BSN** (Bachelor of Science in Nursing) or **ADN** (Associate Degree in Nursing)  
- Pass the **NCLEX-RN**  
- Become a licensed Registered Nurse (RN)  
- Complete a perioperative certification or surgical nursing specialization  

## What are the different types of operational nurses?

### → Scrub Nurses  
Prepare tools, sterile gowns, and gloves for surgery, allowing surgeons to operate smoothly.

### → Circulating Nurses  
Work pre-operatively by gathering medical histories, checking documentation, and educating patients and families.

### → RNFA (Registered Nurse First Assistant)  
Advanced intra-operative nurses who can suture, control bleeding, and directly assist surgeons. Certifications may include RNAS-C and CRNFA.

### → PACU Nurses (Post-Anaesthesia Care Unit)  
Care for patients post-surgery, monitoring recovery and handling discharge communication.

## Why are they important?

Perioperative nurses create a sterile, safe surgical environment and ensure procedures run smoothly. Their role helps reduce complications and improve patient outcomes. With U.S. demand rising, the Bureau of Labor Statistics projects a **6% job growth** rate for nurses by 2031.
  `,
  coverImage: "/or-nurse.jpg",
  date: "August 8, 2025",
  author: authors["dabosmita-das"],
  topic: "nurses",
  readingTime: "4 min read",
  featured: false
},
 {
  slug: "emergency-room-nurses",
  title: "What It’s Like to Be an Emergency Room Nurse",
  excerpt:
    "Emergency room nurses are the first line of defense in life-threatening situations, providing critical care under pressure. Explore their intense, fast-paced world and what it takes to become one.",
  content: `
## What It’s Like to Be an Emergency Room Nurse

Working as an emergency room nurse means being prepared for anything at any time. From trauma and heart attacks to allergic reactions and broken bones, ER nurses are trained to handle it all with skill and speed.

## What Does an ER Nurse Do?

Emergency room (ER) nurses specialize in providing acute care to patients in urgent and critical conditions. They work in hospital emergency departments, often under high pressure, and must assess, stabilize, and monitor patients rapidly.

Their responsibilities include:

- **Triage:** Determining the severity of a patient’s condition and prioritizing care  
- **Administering medications and IVs**  
- **Assisting with procedures and CPR**  
- **Communicating with doctors and family members**  
- **Documenting patient care and responses**

## The Fast-Paced Nature of Emergency Nursing

ER nurses must think fast, act quickly, and stay calm under stress. They may face patients with life-threatening injuries, perform CPR, or respond to mass casualty events.

This role demands strong decision-making skills, teamwork, and emotional resilience. No two days are alike, and every shift can bring new challenges.


## How to Become an Emergency Room Nurse

To become an ER nurse, you must first:

- **Earn a nursing degree:** Associate’s Degree in Nursing (ADN) or Bachelor of Science in Nursing (BSN)  
- **Pass the NCLEX-RN exam** to become a licensed registered nurse (RN)  
- **Gain clinical experience,** often starting in medical-surgical or intensive care units  

Optional certifications include:

- **Certified Emergency Nurse (CEN)**  
- **Basic Life Support (BLS)** and **Advanced Cardiovascular Life Support (ACLS)**

## Job Outlook and Salary

Emergency room nurses are in **high demand**, especially as hospitals face nursing shortages. Salaries vary but typically range from **$75,000 to $95,000+ per year**, depending on location, experience, and certifications.


## The Human Side of ER Nursing

Beyond medical skills, ER nurses are often a comforting presence for patients in distress. They must manage not only physical emergencies but also the emotional impact on families and loved ones.

As one ER nurse puts it:  
> “We don’t just save lives—we hold hands, calm fears, and stay strong when others can’t.”


## Final Thoughts

Emergency room nursing is not for the faint of heart—but for those who thrive in intensity, crave variety, and find purpose in helping others during their worst moments, it can be one of the most meaningful careers in healthcare.
  `,
  coverImage: "/emergency_nurse_cover.jpg", 
  date: "August 8, 2025",
  author: authors["prithi-balaji"],
  topic: "nurses",
  readingTime: "5 min read",
  featured: false
},
  {
  slug: "travel-nurses-world",
  title: "The World of Travel Nurses",
  excerpt:
    "Travel nurses are dynamic healthcare professionals who take their skills on the road, filling urgent needs in hospitals across the country. Explore what it takes to become one, the benefits, and the challenges they face.",
  content: `
## The World of Travel Nurses

In today’s ever-changing healthcare landscape, Travel Nurses serve as vital responders—stepping in wherever they’re needed most. These professionals take on short-term assignments across cities, states, and even countries to solve staffing shortages and provide high-quality care during times of crisis, such as pandemics or natural disasters.


## What is a Travel Nurse?

A Travel Nurse is a registered nurse who accepts temporary nursing contracts, often through staffing agencies, in different locations. Whether it's during the COVID-19 pandemic, a hurricane, or in an underserved rural area, travel nurses are dispatched quickly to meet urgent healthcare demands. They are the steady hand in unpredictable moments, ensuring patients still receive timely and expert care.


## The Journey of a Travel Nurse

Travel nurses typically rotate through multiple healthcare facilities, working on contracts that last a few weeks to several months. Staffing agencies usually coordinate their placement, housing, and licensing, making it easier for them to adapt quickly to each new environment.

Their responsibilities are similar to hospital-based nurses:

- Monitoring patient health
- Administering medications
- Educating patients and families
- Completing documentation

The key difference? They constantly adapt to new environments, workflows, and teams—making resilience and flexibility essential qualities.


## Requirements for Becoming a Travel Nurse

While the role offers flexibility and adventure, becoming a travel nurse takes preparation:

- **Education**: An Associate Degree in Nursing (ADN) or a Bachelor of Science in Nursing (BSN) is required.
- **Experience**: Most agencies require at least one year of clinical experience.
- **Licensing**: Nurses must hold a valid license in the state they wish to work. Luckily, many U.S. states are part of the Nurse Licensure Compact (NLC), allowing easier license portability.

## Why Choose Travel Nursing?

There are many compelling reasons to consider this career path:

- **High Pay**: Travel nurses often earn more than staff nurses and may receive housing stipends, travel reimbursements, and signing bonuses.
- **Career Growth**: Exposure to diverse medical environments enhances clinical skills and builds adaptability.
- **Flexibility**: You choose when and where to work—allowing time for rest, travel, or long-term personal projects.
- **New Experiences**: Whether it's working in a bustling city hospital or a rural clinic near scenic mountains, every assignment is a new adventure.


## A Role Beyond Medicine

Travel nurses are not just filling staffing gaps—they’re providing stability, compassion, and professionalism during critical times. One travel nurse remarked, “The day I go to work, one more life has hope.”

## Challenges of Travel Nursing

While rewarding, the role is not without its difficulties:

- **Constant Mobility**: Frequent relocation can be physically and emotionally taxing.
- **Licensing Hurdles**: Navigating different state regulations requires time and administrative effort.
- **Team Dynamics**: Adapting to new coworkers and workplace cultures calls for strong interpersonal skills.

## Conclusion

Travel nursing is more than a profession—it’s a calling. These nurses are the first to respond, the fastest to adapt, and often the warmest presence in a patient’s care. Their journey across hospitals and cities reflects a deep love for life and a commitment to healing wherever they go.
  `,
  coverImage: "/travel_nurse_cover.jpg", 
  date: "August 6, 2025",
  author: authors["gaeun-lee"],
  topic: "nurses",
  readingTime: "5 min read",
  featured: false
},
{
  slug: "oncology-nurses-healthcare",
  title: "The Role of Oncology Nurses in Healthcare",
  excerpt:
    "Oncology nurses play a vital role in cancer care—administering treatments, supporting patients emotionally, and navigating specialized healthcare settings. Learn how to become one and why they matter.",
  content: `
## The Role of Oncology Nurses in Healthcare

Nurses are a critical part of a healthcare team and are essential for ensuring that a patient’s treatment plan is conducted in a timely and effective manner. In a given day, nurses may administer medications, change bedsheets, or offer emotional support. In the U.S., there are approximately 4.7 million registered nurses, with 87% remaining active in the profession. Among many specialties, oncology nurses work specifically with patients diagnosed with or at risk of developing cancer.



## How to Become an Oncology Nurse

To become an oncology nurse, you must first be a registered nurse (RN). This requires completing either an Associate’s or Bachelor’s degree in nursing from an accredited program, followed by passing the NCLEX-RN exam to earn licensure.

While specialization in oncology is available after becoming an RN, it's recommended to gain general experience first. Oncology nurses handle responsibilities like administering chemotherapy, supporting surgical recovery, and assessing the emotional and mental health of cancer patients.



## Oncology Nursing Job Outlook

Oncology nurses earn competitive salaries in the U.S., ranging from $84,768 to $97,103. Their services are in demand across various clinical environments—hospitals, outpatient clinics, hospices, and cancer centers.

They may also choose to subspecialize, working with pediatric, adult, or geriatric cancer patients. Opportunities exist in focused areas such as immunotherapy, bone marrow transplantation, and breast cancer care.



## Why They Matter

Oncology nurses are deeply involved in a patient’s journey through cancer diagnosis and treatment. They are not only healthcare professionals but emotional anchors for patients and families during some of life’s most difficult moments. As the need for cancer treatment grows, so does the need for skilled, compassionate oncology nurses.
  `,
  coverImage: "/oncology_nurse_cover.jpg", 
  date: "July 8, 2025",
  author: authors["iosef-isaac-perez"],
  topic: "nurses",
  readingTime: "4 min read",
  featured: true
},
  {
  slug: "cps1-crispr-breakthrough",
  title: "From Diagnosis to Hope: A Medical Milestone in Gene Editing",
  excerpt:
    "A historic CRISPR breakthrough gives an infant with a rare genetic disorder a second chance at life—ushering in a new era of personalized medicine.",
  content: `
## Overview of CPS1 Deficiency

Carbamoyl phosphate synthetase 1 (CPS1) deficiency is a rare, inherited genetic disorder where the body lacks a critical liver enzyme. Without it, nitrogen cannot be processed, leading to a dangerous buildup of ammonia in the bloodstream. This neurotoxin can cause severe damage to the brain and spinal cord if left untreated.

## Defying a Death Sentence

On May 15, 2025, a research team at the Children’s Hospital of Philadelphia revealed a groundbreaking personalized gene editing therapy for a critically ill infant, nicknamed “KJ,” who was diagnosed with CPS1 deficiency. Using the CRISPR gene editing platform, scientists developed a treatment customized to target only non-reproductive (somatic) cells. This marks the **first known case of CRISPR-based therapy** tailored to a specific individual and administered to a living patient—offering hope for thousands facing genetic disorders.

## Importance of the Breakthrough

Doctors and researchers around the world hailed this moment as a **milestone in modern medicine**. By treating KJ soon after birth, the team prevented irreversible neurological damage. As Dr. Rebecca Ahrens-Nicklas noted, the success came after “years and years of progress” in gene editing. Until now, liver transplant was the only possible intervention for CPS1 deficiency—one often unfeasible for newborns due to rapid ammonia accumulation.

This personalized treatment offers a new path forward for patients facing life-threatening genetic disorders once deemed untreatable.

## Ethical & Practical Challenges

While revolutionary, this development raises important questions:

- **Long-term safety**: CRISPR's precision is unmatched, but off-target edits may have unintended consequences. KJ must be closely monitored throughout life.
- **Cost and accessibility**: Custom treatments like this require months of development and millions of dollars—posing serious questions about healthcare equity.
- **Ethics of gene editing**: Although this therapy only alters somatic cells, experts warn about potential future misuse of gene editing for non-medical enhancements.
- **Delivery limitations**: The liver is relatively easy to target, but many genetic diseases affect the brain or heart—where safe delivery of gene editors remains a scientific challenge.

These concerns underscore the importance of ethical oversight, transparency, and sustained investment in equitable access.

## Outcome

This treatment is a **landmark achievement**: the first successful personalized CRISPR gene therapy in a living patient. It opens doors to future innovations in treating genetic conditions from birth. Despite challenges, it provides real hope to families like KJ’s—proof that scientific advancement can rewrite what once seemed a death sentence into a story of survival and strength.



### Works Cited

- Children’s Hospital of Philadelphia. (2025, May 15). *World’s first patient treated with personalized CRISPR gene editing therapy*. [Link](https://www.chop.edu/news/worlds-first-patient-treated-personalized-crispr-gene-editing-therapy-childrens-hospital)
- He, X., & Zhao, W. (2020). *Advances in CRISPR/Cas-based gene therapy in human genetic diseases*. Frontiers in Genetics, 11, 567. [Link](https://pmc.ncbi.nlm.nih.gov/articles/PMC7129066/)
- National Institutes of Health. (2025, May 15). *Infant with rare, incurable disease is first to successfully receive personalized gene therapy treatment*. [Link](https://www.nih.gov/news-events/news-releases/infant-rare-incurable-disease-first-successfully-receive-personalized-gene-therapy-treatment)
- Sample, I. (2025, May 15). *US doctors rewrite DNA of infant with severe genetic disorder in medical first*. The Guardian. [Link](https://www.theguardian.com/science/2025/may/15/us-doctors-rewrite-dna-of-infant-with-severe-genetic-disorder-in-medical-first)
- Roth, B. L. (2009). *DSM-IV: Diagnosis and classification of mental disorders*. Clinical Neuroscience Research, 6(3–4), 131–137. [Link](https://pubmed.ncbi.nlm.nih.gov/19104924/)
  `,
  coverImage: "/cps1-gene-editing.png", 
  date: "July 10, 2025",
  author: authors["muhammad-lari"],
  topic: "Medical Innovation", 
  readingTime: "6 min read",
  featured: true
},
  
  {
  slug: "maurice-hilleman-vaccine-legacy",
  title: "Maurice Hilleman and His Vaccine Legacy",
  excerpt:
    "Meet Maurice Hilleman, the man behind over 40 vaccines that have saved millions of lives. Discover how a boy from Montana became one of the greatest minds in medical history.",
  content: `
# Maurice Hilleman and His Vaccine Legacy

## Who Was Maurice Hilleman?

Maurice Hilleman was a scientist who changed the world of medicine with his work on vaccines. He was born in Montana in 1919 and had a tough start in life after losing both his mother and twin sister at birth. He grew up on a farm and later studied science in college. He earned his PhD and made a name for himself by figuring out that chlamydia was actually caused by bacteria, not a virus. Even though people wanted him to work at a university, he chose to work in vaccine development because he wanted to make a bigger difference in people’s lives.

## What Did Hilleman Do?

Hilleman worked on vaccines for many serious diseases. Early in his career, he helped protect soldiers in World War II from a disease called Japanese encephalitis. Later on, he studied how flu viruses change over time, which helped doctors predict and prepare for future outbreaks. When a big flu outbreak hit in 1957, he and his team worked fast to make millions of vaccine doses to stop it from spreading.

He spent most of his career at a company called Merck, where he helped create vaccines for measles, mumps, rubella, chickenpox, hepatitis A and B, pneumonia, meningitis, and more. One of his most famous moments was when he took a sample of the mumps virus from his own sick daughter, Jeryl Lynn, and turned it into a vaccine that’s still used today. He also came up with the idea to combine the measles, mumps, and rubella shots into one vaccine, which became known as the MMR shot. Later, he helped create the world’s first genetically made vaccine for hepatitis B.

## Why It Matters

Hilleman made over 40 vaccines during his lifetime. Eight of them are part of the regular set of vaccines that kids still get today. Because of his work, it’s estimated that around eight million lives are saved every year. His vaccines have helped prevent deadly illnesses and stopped major outbreaks before they could spread. Many scientists say that no one in history has saved more lives than he did.

## Later Life and Recognition

Even after retiring, Hilleman kept helping scientists around the world. He worked with global health organizations and gave advice on making new vaccines. He won a lot of big awards during his life, including the National Medal of Science. Many top scientists, including Anthony Fauci, called him one of the greatest minds in medicine.

## His Ongoing Impact

Maurice Hilleman’s work is still helping people today. His name is remembered through labs and awards dedicated to vaccine research. His mission to protect people from disease lives on in every shot that saves a life. He wasn’t in it for fame, he just wanted to stop kids from dying. And that’s exactly what he did.
  `,
  coverImage: "/maurice-hilleman.png", 
  date: "July 4, 2025",
  author: authors["manha-atiq"],
  topic: "Doctors",
  readingTime: "5 min read",
  featured: false
},
  {
  slug: "history-of-mrna-vaccines",
  title: "The History of mRNA Vaccines: From Scientific Curiosity to Global Breakthrough",
  excerpt:
    "From decades of setbacks to pandemic-defining success, this piece explores the rise of mRNA vaccines and their future potential in modern medicine.",
  content: `
# The History of mRNA Vaccines: From Scientific Curiosity to Global Breakthrough

## Setting the Foundation: Initial Discoveries and Challenges

Accomplishments in basic science by researchers in the 1960s and 1970s laid the groundwork for today's messenger RNA vaccines. Scientists established the vital role that messenger RNA plays in making proteins in living cells. They laid the intellectual and fundamental groundwork on the physics and chemistry of messenger RNA that make it a viable ingredient in making safe and effective vaccines.

However, using messenger RNA for vaccines and other medical purposes was viewed skeptically due to the problems of instability and adverse immunogenicity that were known during the 1980s and 1990s. Many early studies using messenger RNA in vitro or in animal models frequently provided unreliable and irreproducible outcomes. This tended to discourage a lot of investment and interest.

Those decades are now seen as a necessary period of time. They were years in which the scientific community made a sufficient number of not-so-smart mistakes with messenger RNA. Those mistakes, however, led the scientific community on a path to a smarter understanding and more effective use of messenger RNA.

## How Do mRNA Vaccines Work?

Things began to change in the 2000s due to several revolutionary and successful studies led by scientists Katalin Karikó and Drew Weissman. They took on the challenge of upgrading and downgrading the immunogenicity of modified messenger RNA.

In contrast to standard vaccines, mRNA vaccines operate on fundamentally different principles. Directly providing instructions (in the form of mRNA), they tell the body's cells to build a harmless part of the virus—often the spike protein. If a person is then exposed to the actual virus, their immune system will recognize it and respond rapidly.

The beauty of this is not only that an mRNA-based vaccine can be developed in weeks after identifying a virus, but also that it is far more versatile than previous types of vaccines.

## A Global Turning Point: COVID-19

The real turning point in the COVID-19 pandemic came from the new mRNA vaccines. Once the genetic code of the virus was known, companies such as Pfizer-BioNTech and Moderna developed mRNA vaccines in record time—within just a few months.

By the end of 2020, these vaccines had both been authorized for emergency use and became the major tools in the world’s defense against COVID-19. High effectiveness was seen with these new mRNA vaccines, changing how the world viewed vaccine science.

## New Horizons and Ongoing Research

Following the triumph of the COVID-19 vaccines, mRNA technology is now being explored for HIV, influenza, malaria, and even cancer.

In fact, Moderna conducted a Phase 1 clinical trial of a personalized cancer vaccine using mRNA. Despite challenges like the need for cold storage, we may be approaching a world where mRNA cancer treatments are routine and customized.

## An Enduring Legacy

One of the most significant scientific advancements of the 21st century is the development of mRNA vaccines. They began in an obscure corner of science, but are now a frontline solution for global health crises.

Even if mRNA platforms face challenges in a post-COVID world, they remain one of our best bets—especially for vulnerable populations. The rapid, adaptable, and effective nature of mRNA science secures its place in medical history.

## Works Cited

- Karikó, Katalin, et al. “Suppression of RNA Recognition by Toll-Like Receptors.” *Immunity*, 2005. [Link](https://doi.org/10.1016/j.immuni.2005.06.008)  
- Pardi, Norbert, et al. “mRNA Vaccines — A New Era in Vaccinology.” *Nature Reviews Drug Discovery*, 2018. [Link](https://doi.org/10.1038/nrd.2017.243)  
- “Emergency Use Authorization for Pfizer-BioNTech COVID-19 Vaccine.” FDA, 2020. [PDF](https://www.fda.gov/media/144416/download)  
- WHO. “mRNA Vaccines: A New Era.” *World Health Organization*, 2021.  
- Moderna. “The Science of mRNA.” *Moderna*, 2023.  
- ClinicalTrials.gov. “Study of mRNA-4157 With Pembrolizumab in Participants With High-Risk Melanoma.” 2022.  
- “mRNA Vaccines: A Turning Point in the Fight Against Disease.” *Nature*, 2021.
`,
  coverImage: "/mrna-history.png", 
  date: "June 24, 2025",
  author: authors["manasvi-bobade"],
  topic: "Healthcare Law",
  readingTime: "6 min read",
  featured: false,
},

  {
    slug: "youth-ai-healthcare-policy",
    title: "Youth in the Age of AI: Why Canada Needs a Youth-Centred AI Policy Now",
    excerpt:
      "As AI transforms education, medicine, and the future of work, youth must have a seat at the table. Read this op-ed by Adil Mukhi to learn why Canada needs a youth-driven AI policy now.",
    content: `
# Youth in the Age of AI: Why Canada Needs a Youth-Centred AI Policy Now

As a student growing up in a digital-first world, I've watched artificial intelligence go from a sci-fi buzzword to a quiet force shaping everyday life, from personalized ads and writing tools to software used in my classroom. At first, these tools felt like magic. But over time, as I engaged more with policy work and digital literacy programs, I began to notice something concerning: AI was becoming more powerful, but youth voices weren't becoming any louder in shaping how it's used.

The way that young people study, live, and work is being revolutionized by artificial intelligence. However, there isn't a distinct youth-centred approach to AI policy in Canada. We run the danger of creating a digital future that ignores the distinct experiences, difficulties, and aspirations of a whole generation if we do nothing now.

## Rethinking AI's Role in Education

The use of AI in the classroom is growing. Machine learning-powered tools can tailor material, provide teachers immediate feedback, or automate administrative duties. When used properly, these innovations have the potential to improve learning's responsiveness and engagement.

But we have to be cautious. As a high school student enrolled in a demanding academic program, I have witnessed the potential of educational AI as well as its drawbacks. While some students rely on generative tools to generate ideas for essays, others utilize AI-powered platforms to study languages or get more math support. Instructors are also beginning to experiment with lesson generators and asking quick questions. However, many of us—both students and teachers—do not completely understand how these systems operate, how much data they gather, or what biases they could have.

It's not about opposing technology here. It's about utilizing it sensibly, openly, and with well-defined boundaries. National education regulations that emphasize student privacy, guard against unintentional prejudice, and guarantee AI complements human interaction in learning rather than replacing it are necessary to govern the integration of AI into classrooms.

Additionally, we must provide young people the skills they need to think critically about AI. This entails incorporating digital literacy and AI into school curricula so that students learn how to comprehend and challenge the technologies as well as how to utilize them.

## Can AI Replace a Human Touch in Medicine?

Lately, I've heard more students at my school wonder aloud if "the next generation of doctors will just ask ChatGPT." The statement is half-joking, but below the irony is a genuine worry: To what extent will healthcare be mechanized in the future? And if AI begins to take the place of human thought or care in medicine, what will happen to empathy, clinical judgment, and trust?

As I work to develop *Dr. Interested*, a youth-led program aimed at igniting interest in the medical industry, I've seen this tension increase. The potential of AI to aid in diagnosis, simulate procedures, and even decipher medical scans intrigues students. But they are also concerned: If an app can spit out answers, would physicians cease learning how to reason through cases? Will efficiency take the place of empathy?

In actuality, artificial intelligence will be used in medicine. Although we shouldn't be afraid of it, we should intentionally prepare for it. AI usage should not be the only thing taught to aspiring doctors. They must learn to challenge it, check it, and recognize its limitations. They must also be based on human connection, cultural awareness, and moral judgment—things that technology cannot duplicate.

Policies that integrate AI ethics and literacy into high school health science curricula and pre-med programs are necessary. Opportunities to investigate the advantages and disadvantages of AI in medicine should be provided via career-focused STEM programs, not only in theory but also through actual case studies and community discussions.

We must train physicians who are fluent in both technology and dignity if we are to create a healthcare system that is both inventive and compassionate.

## The Future of Work Needs Future-Ready Youth

AI is changing the workforce more quickly than any high school curriculum can catch up. While occupations in AI, cybersecurity, and data science are expanding, entry-level positions in retail, administration, and even customer service are being automated. However, many young people lack access to the mentoring and training required to benefit from these advances, particularly those from underrepresented or low-income groups.

As someone who's worked with youth-driven organizations and observed these disparities up close, I believe it's time we bridge the AI opportunity gap. Canada needs to fund inclusive, open, and cost-free upskilling courses in digital ethics, coding, and artificial intelligence. These initiatives shouldn't be restricted to prestigious universities or big cities. Every young person deserves a chance in the future, regardless of their background or place of residence.

## Youth Must Be at the Table — Not Just Online

Despite all this, young people remain largely excluded from national conversations about AI. Although we are the main consumers of new technology, and it will be us who this technology affects as it grows in the future, we are rarely the ones influencing its regulation. This has to change.

Young people are innovators, critics, and creators in addition to being tech consumers. My personal advocacy work with research programs and non-profits has demonstrated the strength of young voices when they are included in decision-making processes. We provide real-world experiences and innovative ideas that no software business or think tank can match, whether we're voicing concerns about algorithmic fairness or offering solutions for ethical AI usage.

That's why I believe Canada should establish a **Youth Digital Advisory Panel** within Innovation, Science and Economic Development Canada (ISED). This panel would make sure that the opinions of young people are directly included in the creation of policies pertaining to digital rights, data governance, and artificial intelligence.

## Conclusion: Building a Future We Deserve

Though we have a choice in how we react, the growth of AI will not slow down. We have two options: either we create policies that embody our ideals of responsibility, empowerment, and fairness, or we passively accept new instruments without inquiry.

Even if young people cannot vote on policies just yet, we will still be affected by them. A genuinely progressive AI approach has to prioritize human experiences, safeguard our welfare, and elevate our voices.

**Artificial intelligence is about humans, not just about technology. And it is time for Canada to start listening to the generation that will live in the world AI creates.**
`,
    coverImage: "/oped-ai-adil.png",
    date: "June 11, 2025",
    author: authors["adil-mukhi"],
    topic: "Op-Eds",
    readingTime: "5 min read",
    featured: false,
  },
  {
    slug: "crispr-gene-editing-ethics-law",
    title: "CRISPR, Gene Editing, and the He Jiankui Case: A Healthcare Law Perspective",
    excerpt:
      "The controversial gene-editing experiment by Dr. He Jiankui shocked the global scientific community. This article explores the ethical, legal, and policy violations surrounding the world's first gene-edited babies and the implications for healthcare law.",
    content: `
# CRISPR, Gene Editing, and the He Jiankui Case: A Healthcare Law Perspective

## 1. Bioethics 101: Who Guards the Boundaries of Science?

Bioethics examines the moral, legal, and social questions that arise in medicine and the life sciences. It guides how we handle new technologies like gene editing, ensuring that scientific progress doesn't come at the cost of human rights.

> "The systematic study of the moral dimensions—including moral vision, decisions, conduct, and policies—of life sciences and healthcare."  
— *Beauchamp & Childress, Principles of Biomedical Ethics*

## 2. Laws That Shape Life: The Global Code Behind Genetic Research

Healthcare law and bioethics rely on global agreements and legal documents, including:

- **Nuremberg Code (1947):** Emphasizes informed consent and voluntary participation.

- **Belmont Report (1979):** Establishes principles of respect, beneficence, and justice in human subject research.

- **Oviedo Convention (1997):** Prohibits heritable genetic modification for non-therapeutic reasons.

- **China's Biosecurity Law (2020):** Enacted in direct response to gene-editing misuse, mandating ethical review and government oversight.

## 3. CRISPR Babies: The Gene-Edited Twins That Shook the World

In 2018, Chinese scientist Dr. He Jiankui announced the birth of twin girls, "Lulu" and "Nana," whose embryos had been edited using CRISPR-Cas9 to disable a gene (CCR5) associated with HIV susceptibility. Though presented as a medical breakthrough, the act sparked widespread outrage.

## 4. Crossing the Line: The Legal and Ethical Failures of Dr. He Jiankui

He Jiankui's actions violated multiple principles of healthcare law and ethics:

- **No Medical Necessity:** The children were not at direct risk of HIV; safer alternatives like sperm washing already existed.

- **Coerced Consent:** Participants were misled, documents were poorly translated, and incentives were offered.

- **Unregulated Germline Editing:** Changes were heritable and could not be consented to by future generations.

- **Unproven Technology Use:** CRISPR is not yet precise enough for safe use in human embryos, increasing the risk of unintended mutations.

## 5. From Lab Coat to Courtroom: How the Law Responded

In 2019, a Chinese court sentenced He to three years in prison for conducting illegal medical procedures. His collaborators were also penalized. In response, China enacted its **Biosecurity Law**, requiring stricter ethical approval and oversight for genetic and biomedical research.

## 6. Science vs. Ethics: Can the Law Keep Up with the Lab?

This case triggered a global re-evaluation of how law and science intersect. Key questions include:

- How do we enforce international bioethical standards?

- Who should regulate emerging technologies like CRISPR?

- What safeguards should protect future generations?

## 7. A Cautionary Tale for the Genetic Age

The He Jiankui case is a landmark example of healthcare law in action. It highlights the importance of aligning medical innovation with legal accountability and ethical integrity.

> Science without legal and ethical guardrails can lead to irreversible harm.

## 8. References & Further Reading

- [Oxford Practical Ethics Blog (2018)](https://blog.practicalethics.ox.ac.uk/2018/11/the-fundamental-ethical-flaw-in-jiankui-hes-alleged-gene-editing-experiment/)

- [Edinburgh Mason Institute (2022)](https://blogs.ed.ac.uk/mason-institute/2022/07/06/dawn-of-the-designer-baby-the-he-jiankui-affair-and-implications-for-future-ethical-editing-by-julia-corcoran/)

- [Scientific American (2019)](https://www.scientificamerican.com/article/what-crispr-baby-prison-sentences-mean-for-research/)

- [The Guardian (2024)](https://www.theguardian.com/science/2024/apr/01/crispr-cas9-he-jiankui-genome-gene-editing-babies-scientist-back-in-lab)

- [NCBI (2020)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7294836/)
`,
    coverImage: "/crispr.png",
    date: "June 2, 2025",
    author: authors["manasvi-kale"],
    topic: "Healthcare Law",
    readingTime: "8 min read",
    featured: true,
  },
  {
    slug: "medical-malpractice-canadian-cases",
    title: "Understanding Medical Malpractice: Key Concepts and Canadian Case Studies",
    excerpt:
      "Medical malpractice occurs when a healthcare provider delivers substandard care that causes harm to a patient. This post explores what qualifies as malpractice, contributing factors, and landmark cases in Canadian medical law.",
    content: `
# Understanding Medical Malpractice: Key Concepts and Canadian Case Studies

## What is Medical Malpractice?

Medical malpractice occurs when a doctor or healthcare provider neglects a patient by failing to provide appropriate treatment or delivers care that falls below the accepted standard, potentially causing harm.

## What is Medical Malpractice Law?

Medical malpractice law is a branch of *tort law* focused on negligence in healthcare. It allows patients to seek compensation for harm caused by substandard medical treatment, even in the absence of a broken contract or criminal act.

## Common Causes of Medical Malpractice

- **Delayed diagnosis** – leads to incorrect treatment and worsening conditions.

- **Medication errors** – prescribing or administering incorrect dosages.

- **Surgical mistakes** – performing wrong procedures or damaging other organs.

- **Poor communication** – between healthcare staff, causing treatment errors.

## Key Factors for a Valid Claim

- A failure to provide appropriate care.

- Harm or injury directly resulting from negligence.

- Substantial damage, such as:

  - Chronic pain

  - Loss of income

  - Permanent disability

## Landmark Case: *Sylvester v. Crits et al. (1956)*

This landmark Canadian case helped define the standard of care expected from medical professionals.

> "Every medical practitioner must bring to his task a reasonable degree of skill and knowledge and must exercise a reasonable degree of care…"

### What Happened?

- A 5-year-old patient was given anesthesia via a mixture of ether and oxygen.

- When complications arose, the mixture was stopped temporarily.

- Upon re-administering, an explosion occurred due to leaked ether-oxygen vapors and static electricity, severely injuring the child.

- Dr. Sylvester was found **negligent** for not fully stopping oxygen flow and for using a non-standard procedure.

### Ruling:

Because this technique was not proven to be a **standard hospital practice**, and appeared to be Dr. Sylvester's own approach, the court ruled in favor of the patient and awarded compensation.

## Recent Case: *Boyd et al. v. Edington et al.*

### Background

- **Danielle Boyd**, 24, visited Hanover Hospital with high blood pressure and severe headaches.

- Diagnosed with a migraine, hypertensive crisis, and alcohol use by **Dr. Richard Edington**.

- Symptoms worsened; Dr. Edington delayed re-evaluation for 3 hours.

### Diagnosis & Outcome

- Boyd had a **vertebral artery dissection (VAD)**, leading to a **massive stroke** and **paralysis below the neck**.

- VAD is rare, and its symptoms are often mistaken for migraines or alcohol intoxication.

- Dr. Edington was found **liable for negligence** and ordered to pay **$15 million** to Boyd and her family.

## Conclusion

Medical malpractice law ensures accountability in healthcare. While human error is natural, the law requires medical professionals to uphold a standard of care that prioritizes safety and proper treatment. These cases remind us of the importance of diligence, communication, and ongoing medical education.

## Sources

- Engel, K. G., & Hunt, E. A. (2009). *Medical malpractice and pediatric sedation: An overview*. [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC2628513/)

- Medical News Today. (2020, June 11). *What is medical malpractice?* [Link](https://www.medicalnewstoday.com/articles/248175)

- Morrissey Legal Group. (2024, February). *4 factors contributing to medical malpractice*. [Link](https://www.morrisseylegalgroup.com/blog/2024/02/4-factors-contributing-to-medical-malpractice/)

- CanLII Connects. (n.d.). *Medical malpractice and the standard of care*. [Link](https://canliiconnects.org/en/commentaries/73992)

- Pacific Medical Law. (2020). *Medical malpractice: An overview (Rev. 2)*. [Link](https://www.pacificmedicallaw.ca/wp-content/uploads/2020/08/165_Medical_Malpractice_REV2.pdf)

- Supreme Court of Canada. (1956). *Sylvester v. Crits*, 1956 CanLII 29 (SCC). [Link](https://www.canlii.org/en/ca/scc/doc/1956/1956canlii29/1956canlii29.html)

- Halifax Medical Malpractice Lawyer Blog. (2014, March). *Defence experts crossed the line*. [Link](https://www.halifaxmedicalmalpracticelawyerblog.com/2014/03/defence_experts_crossed_the_li/)

- Lexpert. (n.d.). *The five costliest examples of medical negligence*. [Link](https://www.lexpert.ca/news/legal-faq/the-five-costliest-examples-of-medical-negligence/378409)

- Healthy Debate. (2014, April). *Medical malpractice*. [Link](https://healthydebate.ca/2014/04/about-healthy-debate/opinions-about-healthy-debate/medical-malpractice/)
`,
    coverImage: "/malpractice-cover.png",
    date: "June 1, 2025",
    author: authors["dabosmita-das"],
    topic: "Healthcare Law",
    readingTime: "7 min read",
    featured: true,
  },
  {
    slug: "ontario-mental-health-act",
    title: "The Ontario Mental Health Act: A Pillar of Mental Health Law",
    excerpt:
      "Explore the evolution, legal framework, and patient rights embedded in Ontario's Mental Health Act—a cornerstone in balancing care and autonomy for individuals with mental illness.",
    content: `
# The Ontario Mental Health Act: A Pillar of Mental Health Law

## Historical Development and Evolution

The Ontario Mental Health Act has evolved significantly since its inception in the mid-20th century. Originally, detention in mental hospitals was based primarily on the presence of psychiatric disorders requiring observation and treatment. The 1967 Act introduced provisions for involuntary admission when hospitalization was essential for safety, either of the individual or others. A major shift came in 1978 when amendments replaced the "need to treat" philosophy with a focus on determinable risk factors. This transition marked a societal move from paternalism toward respecting individual rights and freedoms in mental health care.

## Key Provisions and Legislative Framework

The Act sets clear rules governing voluntary and involuntary admissions to psychiatric hospitals, specifying when intervention is lawful—particularly if an individual poses a danger due to a mental disorder. It also introduces Community Treatment Orders (CTOs), allowing some patients to receive treatment in the community under specific conditions instead of hospitalization.

The Mental Health Act works in tandem with other critical legislation, such as the Health Care Consent Act—which governs informed consent—and the Substitute Decisions Act, which outlines the roles of substitute decision-makers when patients lack capacity.

## Involuntary Admission Forms and Procedures

To balance crisis intervention with respect for rights, the Act uses two important forms:

- **Form 1:** Completed by a physician, it permits detention for up to 72 hours for psychiatric evaluation when the individual poses serious harm risks.

- **Form 2:** Issued by a justice of the peace, it enables police to bring an individual to hospital for assessment when the person refuses or is unable to seek help voluntarily.

These safeguards aim to respect autonomy while ensuring timely care.

## Patient Rights and Advocacy Systems

Protecting patient rights is central to the Act. Individuals detained under the Mental Health Act have the right to understand why and to appeal their detention through a review board.

Supporting this framework is the **Psychiatric Patient Advocate Office (PPAO)**, which provides education, advocacy, and legal assistance to patients and families. This helps balance the inherent power disparities in psychiatric treatment and reinforces legal protections.

## Social Significance and Contemporary Concerns

The Mental Health Act plays a critical role in balancing necessary psychiatric care with individual freedoms. As mental healthcare shifts increasingly towards community-based models, the Act clarifies when institutional intervention is justified.

Nevertheless, challenges remain—such as resource shortages that sometimes funnel individuals with mental illness into the criminal justice system rather than appropriate healthcare. This ongoing issue highlights the need for effective legislation and sufficient resources to promote care in the least restrictive settings.

## Balancing Care and Individual Autonomy

The Ontario Mental Health Act reflects a mature, balanced approach to mental health law. Moving beyond paternalistic "need to treat" philosophies, it integrates respect for individual autonomy with necessary treatment.

By establishing clear criteria and review processes, the Act provides guidance for healthcare professionals and protections for vulnerable individuals alike. Understanding these provisions is essential not only for providers but also for patients, families, and advocates navigating Ontario's mental health system.

This legislation remains a foundational pillar in preserving dignity and rights while addressing severe mental health needs.

## References & Further Reading

- [Ontario Ministry of the Attorney General. Mental Health Act, R.S.O. 1990, c. M.7](https://www.ontario.ca/laws/statute/90m07)

- [Ontario Ministry of Health. Information Guide – Rights Advice under the Mental Health Act (2024)](https://www.ontario.ca/files/2024-05/moh-information-guide-rights-advice-under-mental-health-act-en-2024-05-21.pdf)

- [Ontario Ministry of Health. Psychiatric Patient Advocate Office (PPAO)](https://www.ontario.ca/page/psychiatric-patient-advocate-office)

- [Ontario Hospital Association & Borden Ladner Gervais LLP. A Practical Guide to Mental Health and the Law in Ontario](https://www.oha.com/news/a-practical-guide-to-mental-health-and-the-law-in-ontario)

- [Centre for Addiction and Mental Health. Your Rights](https://www.camh.ca/en/patients-and-families/information-for-patients/your-rights)
`,
    coverImage: "/mental-health-act.png",
    date: "June 1, 2025",
    author: authors["muhammad-lari"],
    topic: "Healthcare Law",
    readingTime: "7 min read",
  },
  {
    slug: "history-of-cryosurgery",
    title: "The History of Cryosurgery",
    excerpt:
      "Explore how cryosurgery evolved from 19th-century ice applications to cutting-edge, image-guided treatments used across modern medicine—and even in space.",
    content: `
# The History of Cryosurgery

Cryosurgery, or cryotherapy, is a medical technique that uses extremely low temperatures to destroy abnormal or diseased tissue. Though often considered a modern advancement, its origins trace back over a century. Today, cryosurgery is widely applied in fields like dermatology, oncology, gynecology, and ophthalmology. Its journey from rudimentary ice applications to highly targeted, image-guided procedures reflects the progression of both medical science and technology.

## Early Foundations (19th Century)

The first structured use of cold in medicine began in the mid-1800s. In 1845, British physician James Arnott applied a mixture of crushed ice and salt to treat breast and uterine tumors. He observed that the cold significantly reduced pain and temporarily shrank tumor size. Arnott proposed that low temperatures might slow or even stop tumor growth. However, due to the absence of advanced refrigeration technology, cryotherapy remained limited in scope and application during this period.

## Technological Advancements (20th Century)

Cryosurgery entered a new era with the invention of liquid gases such as liquid nitrogen and liquid oxygen, which could achieve temperatures as low as -196°C. In 1961, American neurosurgeon Dr. Irving S. Cooper introduced the cryoprobe—a device capable of precisely applying extreme cold to targeted tissues while preserving surrounding healthy cells. Initially developed for brain surgery, the cryoprobe soon found broader applications across multiple specialties.

During the latter half of the 20th century, cryosurgery gained popularity for treating conditions like skin cancer, cervical lesions, prostate cancer, and retinal tumors. The ability to destroy diseased tissue without large incisions made it an ideal alternative to conventional surgery, especially for patients who were not suitable candidates for invasive procedures.

## Cryosurgery in the Modern Era

In the 21st century, cryosurgery has evolved into a highly sophisticated and reliable treatment method. The integration of medical imaging—such as ultrasound, CT scans, and MRI—has allowed doctors to monitor freezing processes in real time. This has significantly improved precision and minimized risks, especially when treating internal organs.

Today, cryosurgery is used not only in cancer treatment but also in cardiology (such as cryoablation for arrhythmia), ophthalmology, and cosmetic dermatology. In some cases, cryotherapy has even been used for pain management and nerve-related disorders.

## A Fascinating Frontier: Cryosurgery in Space and Preservation

One lesser-known yet fascinating application of cryosurgery lies in space medicine and organ preservation. NASA and other space research organizations have shown interest in using cryogenic technology to manage health problems during long-duration space missions. In environments where conventional surgery is impractical, cryosurgery offers a minimally invasive alternative that can be used in microgravity conditions.

Moreover, cryopreservation—an offshoot of cryosurgery principles—is becoming vital in preserving human organs for transplantation. Scientists are experimenting with ultra-low temperatures to safely freeze and store organs like hearts, kidneys, and lungs for extended periods without damaging their structure. This could revolutionize organ donation by drastically increasing the time available to match donors and recipients across the globe.

In the future, cryosurgery and cryopreservation may even contribute to more speculative areas such as suspended animation or long-term hibernation in space travel—concepts once limited to science fiction, now being explored through real scientific research.

## Conclusion

The history of cryosurgery is more than a story of cold—it is a story of innovation, precision, and potential. From James Arnott's ice-salt packs to the cryoprobes used in modern hospitals, the procedure has progressed rapidly in the last century. What began as a simple experiment has evolved into a vital part of modern medical practice. With continued research and cross-disciplinary applications, cryosurgery stands not only as a tool for healing, but also as a bridge between medicine, technology, and the future of human health—on Earth and beyond.
`,
    coverImage: "/cryosurgery.png",
    date: "May 17, 2025",
    author: authors["manasvi-kale"],
    topic: "Cancer",
    readingTime: "7 min read",
  },
  {
    slug: "understanding-occupational-therapist-role",
    title: "Understanding the Role of an Occupational Therapist",
    excerpt:
      "An occupational therapist (OT) is a healthcare professional who helps people of all ages improve their ability to do everyday activities. These people may have physical, mental, or developmental challenges that make daily tasks difficult. Occupational therapists work to support patients in important parts of life, such as self-care, work, school, and free time activities.",
    content: `
# Understanding the Role of an Occupational Therapist

An occupational therapist (OT) is a healthcare professional who helps people of all ages improve their ability to do everyday activities. These people may have physical, mental, or developmental challenges that make daily tasks difficult. Occupational therapists work to support patients in important parts of life, such as self-care, work, school, and free time activities.

## What Does an Occupational Therapist Do?

Occupational therapists help their patients by creating treatment plans that are designed for each person's needs. These plans help patients improve their independence and confidence. Their main tasks include:

- **Creating Treatment Plans:** The OT studies the patient's condition and decides what steps are needed to help the patient improve.

- **Communicating with the Patient:** OTs spend time listening to the patient and helping them solve problems in their daily routines.

- **Recommending Tools or Devices:** If needed, the OT may suggest special tools that make tasks easier at home, school, or work.

The overall goal is to help each patient live as independently and safely as possible.

## How to Become an Occupational Therapist

To become an occupational therapist, a person usually needs:

- A Bachelor's Degree: This is usually in a field like health sciences, psychology, or biology.

- A Master's Degree in Occupational Therapy: This degree includes both classwork and real-life training with patients.

- Clinical Placements: These are hands-on experiences during the degree, where students practice helping real patients.

- Certification or Licensing: Depending on the country, OTs must pass a test to become licensed to work.

The path to becoming an OT may change depending on where a person lives, but these steps are usually required.

## Case Study: Andrew's Story

Andrew was in a serious car accident at age 13 and experienced a major brain injury. Years later, at age 22, he was referred to an occupational therapist to help him become more independent. The OT worked with Andrew on daily routines, personal care, and skills to help him take part in the community. Through therapy, Andrew learned how to manage his time and complete tasks that made his life easier and more organized. This case shows how important occupational therapy can be. With the help of an OT, Andrew was able to improve his skills and feel more confident in his daily life.

## Conclusion

Occupational therapists make a big difference in the lives of people who face everyday challenges. They help others build independence and confidence, even after serious injuries or long-term conditions. The work they do shows how important it is to support people in living meaningful and independent lives.
`,
    coverImage: "/Internist.png",
    date: "May 13, 2025",
    author: authors["maliha-metla"],
    topic: "Types of Doctors",
    readingTime: "6 min read",
    featured: true,
  },
  {
    slug: "psychiatrists-guiding-minds-healing",
    title: "Psychiatrists: Guiding Minds Toward Healing",
    excerpt:
      "Psychiatrists are medical doctors who specialize in understanding and treating mental health disorders. Combining medicine, psychology, and neuroscience, they help individuals navigate emotional turmoil through therapy, medication, and compassionate care.",
    content: `
# Psychiatrists: Guiding Minds Toward Healing

Imagine your mind as a storm, thoughts racing, emotions overwhelming, and sleep slipping through your grasp. You may go through the motions of daily life, hiding the chaos within. This is where psychiatrists step in: not just as listeners, but as trained professionals who can untangle the mental and emotional turmoil that weighs people down.

## Who Are Psychiatrists?

Psychiatrists are medical doctors who specialize in diagnosing, treating, and preventing mental health disorders. They undergo rigorous training that combines medicine, psychology, and neuroscience to understand the complex relationship between the brain and behavior. Unlike therapists or counselors, psychiatrists can prescribe medications, offer psychotherapy, and monitor how both the mind and body respond to treatment. Whether it's anxiety, depression, obsessive-compulsive disorder (OCD), bipolar disorder, or schizophrenia, psychiatrists are equipped to treat a wide range of mental health conditions.

## What Do They Actually Do?

The role of a psychiatrist is both scientific and deeply personal. Suppose someone is experiencing panic attacks. A psychiatrist begins by having a detailed conversation to explore symptoms, triggers, and lifestyle factors. Based on their findings, they may recommend therapy, lifestyle changes, and in many cases, medication to ease symptoms. The process doesn't stop there. They continue to check in, adjust treatments, and track progress to ensure real, lasting improvement.

Psychiatrists work in various settings: hospitals, clinics, private practices, and even online platforms. Their job also involves collaboration with psychologists, social workers, and primary care physicians to offer holistic care to their patients.

## Why They Matter

Mental health still carries stigma in many societies. Phrases like "just snap out of it" or "be strong" can minimize the real struggles people face. Psychiatrists provide a safe space where individuals don't have to mask their emotions. They validate experiences, normalize seeking help, and guide patients toward healing. With rising awareness around mental health, especially in the wake of global crises, their role has become more essential than ever.

## Behind the White Coat

The work of psychiatrists is not without challenges. They often carry the emotional weight of their patients' pain, navigate shortages in the profession, and contend with societal misconceptions about therapy. Despite this, they continue to show up, driven by compassion and the hope of healing.

## A Final Thought

Psychiatrists aren't here to "fix" people. They are guides, helping individuals navigate the darkest parts of their minds, rediscover their strength, and reclaim control over their lives. In the quiet space between chaos and calm, psychiatrists help us find our way back to ourselves.
`,
    coverImage: "/Psychiatrists.png",
    date: "May 13, 2025",
    author: authors["shaza-ali"],
    topic: "Types of Doctors",
    readingTime: "6 min read",
    featured: true,
  },
  {
  slug: "bacteriophages-antimicrobial-resistance",
  title: "Bacteriophages: The Future of Antimicrobial Resistance?",
  excerpt:
    "As antibiotic resistance surges, bacteriophages—viruses that prey on bacteria—may offer a targeted, sustainable, and powerful solution to combat superbugs.",
  content: `
In the microscopic world, bacteria evolve as cunning tacticians, rapidly outpacing the drugs invented to restrain them. Antibiotic resistance has recast into a war of attrition—and the microbes are winning. Despite humanity meeting its Waterloo in the race between the tortoise and the hare, humanity's parasitic friends, bacteriophages, emerge as a promising solution to this escalating crisis.

Antibiotics have been widely recognized as a "silent pandemic," as most of the population remains oblivious to the eroding state of antibiotic care. Like Darwin's finches, bacteria quickly utilize natural selection to combat antibiotics. Prescriptions extinguish the bulk of all microorganisms, permitting the minute survivors left to mutate and acquire a defense inimical to antibiotics, forming superbugs. In addition, a study tested 137 strains of *E. coli* in UTIs, and *"the results showed widespread resistance (51.1 – 91.2%)"* (Olorunmola, et al.). There are millions of bacteria worldwide, and the pathogens will grow if unchecked. The pandemic operates as an indomitable blaze, where water only fuels the flames.

### What Are Bacteriophages?

One promising avenue is bacteriophage therapy. Derived from *bacterio-* (bacteria) and the Greek word *phagein* (to devour), bacteriophages are viruses that specifically target and destroy bacteria.

Incredibly abundant, *“it’s estimated there are more than 10³¹ bacteriophages on the planet… more than every other organism on Earth, including bacteria, combined”* (Scott and Buschman). They contain a decahedron head full of DNA, spikes to latch onto their prey, and a baseplate to inject DNA. As ubiquitous as they are plentiful, they are found in soil, water, skin, and virtually all environments.

Discovered in 1896 by Ernest Hanbury Hankin and advanced by George Eliava, phages infect bacterial cells, replicate inside, and lyse them to release their progeny. Their specificity ensures they attack only one bacterial species, leaving human cells and helpful microbes untouched.

As a master’s student in biology put it: *“These deadly viruses provide a multitude of opportunities for the scientific field; the hardest part is ensuring society recognizes it.”*

### Advantages Over Antibiotics

Unlike antibiotics, which target all bacteria indiscriminately, each phage is built to target a specific bacterial species. Unlike antibiotics, which often struggle against bacterial biofilms—fortress-like structures protecting bacteria—phages can penetrate these barriers (Sapkota).

They can clear biofilms by *“actively penetrating their way into biofilms by lysing one bacterial layer at a time, or due to the display of biofilm exopolymer-degrading depolymerases”* (Loc-Carrillo). Phages also have a natural "auto-dosing" ability, making them self-regulating treatments (Abedon).

Are phages safe? Research confirms that bacteriophages are non-toxic and have no side effects (Liu, Dan, et al.). Treatments are also up to 50% cheaper than antibiotics (Verbeken, Gilbert, et al.).

As bacteria evolve resistance, phages evolve alongside them, creating a natural arms race. Interestingly, bacteria that evade phage attacks often become more vulnerable to antibiotics—a molecular catch-22 (Li, et al.).

### Conclusion

Bacteriophages offer a sustainable, precise, and powerful response to antimicrobial resistance. As superbugs rise, phage therapy may be the key to revolutionizing healthcare and ensuring humanity stays ahead in the battle against microbial threats.



### Works Cited

- A.B. Shabbir, Muhammad, et al. “Bacteria vs. Bacteriophages: Parallel Evolution of Immune Arsenals.” *Frontiers*, 7:1292. [https://www.frontiersin.org/articles/10.3389/fmicb.2016.01292/full](https://www.frontiersin.org/articles/10.3389/fmicb.2016.01292/full)
- Liu, Dan, et al. “The Safety and Toxicity of Phage Therapy: A Review of Animal and Clinical Studies.” *Viruses*, vol. 13,7 1268. [https://www.mdpi.com/1999-4915/13/7/1268](https://www.mdpi.com/1999-4915/13/7/1268)
- Loc-Carrillo, Catherine, and Stephen T. Abedon. “Pros and cons of phage therapy.” *Bacteriophage*, vol. 1,2: 111–114. DOI:10.4161/bact.1.2.14590
- Olorunmola, Felix Oluwasola, et al. “Antibiotic resistance and virulence properties in Escherichia coli strains from cases of urinary tract infections.” *African Journal of Infectious Diseases*, vol. 7,1: 1–7. [https://www.ajol.info/index.php/ajid/article/view/85474](https://www.ajol.info/index.php/ajid/article/view/85474)
- Sapkota, Anupama. “Bacteriophage – Definition, Structure, Life Cycles, Applications, Phage Therapy.” *Microbe Notes*. [https://microbenotes.com/bacteriophage/](https://microbenotes.com/bacteriophage/)
- Verbeken, Gilbert, et al. “Taking bacteriophage therapy seriously: a moral argument.” *BioMed Research International*, 621316. [https://onlinelibrary.wiley.com/doi/10.1155/2014/621316](https://onlinelibrary.wiley.com/doi/10.1155/2014/621316)
  `,
  coverImage: "/bacteriophage-article.png",
  date: "May 7, 2025",
  author: authors["raine-waverka"],
  topic: "Medical Innovation", 
  readingTime: "6 min read",
  featured: true
},

  {
    slug: "neurosurgeon-masters-mind-spine",
    title: "Neurosurgeon",
    excerpt:
      "Neurosurgeons treat life-changing brain and spine conditions with precision and care. From years of training to complex surgeries, they stand at the crossroads of science, skill, and compassion.",
    content: `
# Neurosurgeons: Masters of the Mind and Spine

## What Are Neurosurgeons?

Neurosurgeons are highly trained medical doctors who diagnose and treat conditions affecting the brain, spinal cord, and nerves. Often referred to as "brain surgeons," they specialize in surgical solutions for complex neurological problems like strokes, tumors, and degenerative diseases. The path to becoming a neurosurgeon is long and demanding, requiring intense education, training, and dedication.

## The Journey to Becoming a Neurosurgeon

The journey to becoming a neurosurgeon typically spans about 16 years. It begins with a four-year bachelor's degree, followed by four years of medical school. Afterward, doctors complete a year-long general surgery internship and seven years of neurosurgery residency. Some neurosurgeons pursue fellowships in specialties like pediatric neurosurgery or spinal surgery. Competition is fierce; in 2020, only 74.3% of U.S. medical graduates applying for neurosurgery successfully matched into a residency program, much lower than other specialties. Despite the challenges, those who persevere are rewarded with a deeply impactful career.

## Neurologists vs. Neurosurgeons

Though they both work with the nervous system, neurologists and neurosurgeons serve different roles. Neurologists diagnose and medically manage conditions such as epilepsy, migraines, and multiple sclerosis but do not perform surgery. When surgical intervention is needed, they refer patients to neurosurgeons. Neurosurgeons are trained to operate and manage surgical cases, making the collaboration between the two specialties essential for comprehensive neurological care.

## Case Study: Bloodless Neurosurgery in a Pediatric Patient

An 11-year-old girl, part of a Jehovah's Witness family, was admitted with progressive leg weakness and abdominal pain. Imaging revealed an S1 extradural tumor pressing on her spinal nerves. Due to religious beliefs prohibiting blood transfusions, her family sought treatment at Johns Hopkins Hospital, renowned for expertise in bloodless surgery. Surgeons performed a hemilaminectomy, carefully removing part of the vertebra to access the tumor with minimal blood loss. Post-surgery, she recovered well, aided by iron supplements and medications to manage pain and nerve discomfort, successfully avoiding transfusions while respecting her family's beliefs.

## The Lasting Impact of Neurosurgeons

Neurosurgeons play an essential role in treating life-altering conditions of the nervous system. Their extensive training, surgical skill, and ability to collaborate with other specialists like neurologists ensure that patients receive the best possible care. As seen in the case of the young girl, neurosurgeons can even adapt their procedures to honor patients' cultural and religious needs, showing that medicine is not just about science but also compassion.
`,
    coverImage: "/Neurosurgeon.jpg",
    date: "April 27, 2025",
    author: authors["shaza-ali"],
    topic: "Types of Doctors",
    readingTime: "9 min read",
  },
  {
    slug: "ophthalmic-surgeons-restoring-sight",
    title: "Ophthalmic Surgeons",
    excerpt:
      "Ophthalmic surgeons diagnose and treat complex eye conditions through both medical and surgical care. From cataracts to retinal disorders, their work helps restore vision and improve quality of life. This article explores their role, the path to becoming one, and a real case of sight-saving surgery in a teen with a rare condition.",
    content: `
# Ophthalmic Surgeons: Restoring Sight Through Precision

## What is an Ophthalmic Surgeon?

An ophthalmic surgeon is a medical doctor who specializes in doing surgeries on the eyes and the visual system. They diagnose eye problems, treat them, and perform surgeries to fix or manage different eye conditions, diseases, and injuries.

## What Do Ophthalmic Surgeons Do?

Ophthalmic surgeons do eye exams to check for any issues. They perform many kinds of surgeries, including cataract removal, fixing the retina, and doing corneal transplants. They also teach patients about how to take care of their eyes and how to recover after surgery.

## How to Become an Ophthalmic Surgeon

To become an ophthalmic surgeon, a person usually starts by getting a Bachelor's Degree in a science-related field. After that, they go to medical school for four years to become a doctor. Then, they must complete an ophthalmology residency, which is three to four years of special training focused on the eyes. Some surgeons also do a fellowship, which is an extra one to two years, to get even more specialized training, like learning more about retinal surgery or oculoplastics. After all of this, they have to pass medical board exams and get a license to be a doctor in their region. They also need to become board certified in ophthalmology, like through the American Board of Ophthalmology or similar boards in other countries. The path can be a little different depending on where in the world someone is studying.

## Case Study: Persistent Fetal Vasculature (PFV) in a 15-Year-Old

### What is PFV?

Persistent Fetal Vasculature, or PFV, is a condition that happens when certain blood vessels in the eye, which are supposed to disappear before birth, don't go away as they should. These leftover vessels can cause problems inside the eye, like making the lens cloudy, which is known as a cataract.

### The Patient's Situation

In this case, a 15-year-old patient had PFV in one eye. The condition led to the development of a cataract, which made it hard for the patient to see clearly.

### The Surgical Procedure

To help the patient see better, a surgeon performed a cataract removal surgery. During the operation, the surgeon carefully took out the cloudy lens and addressed the issues caused by the persistent blood vessels.

### Outcome and Recovery

After the surgery, the patient needed time to heal and follow-up care to ensure the eye recovered properly. The goal was to improve vision and prevent any further problems related to PFV.
`,
    coverImage: "/Opthalmicsurgeon.png",
    date: "April 28, 2025",
    author: authors["maliha-metla"],
    topic: "Types of Doctors",
    readingTime: "9 min read",
  },
  {
    slug: "vascular-surgeons-lifesavers",
    title: "Vascular Surgeons",
    excerpt:
      "Vascular surgeons treat diseases of arteries and veins using medicine, surgery, or special tools. Their expertise saves lives and keeps blood flowing properly throughout the body.",
    content: `
# Vascular Surgeons: Lifesavers for Blood Vessel Health

## What Vascular Surgeons Do and Why They Are Important

A vascular surgeon is a doctor who treats problems with blood vessels. Blood vessels include arteries and veins, which carry blood throughout the body. When someone has a disease that blocks or weakens these blood vessels, it can cause serious health problems. Vascular surgeons help fix these problems. They can use medicine, do surgeries, or use special tools to treat the disease without needing to open the body.

Some of the main problems they treat are aneurysms (which are bulges in blood vessels), peripheral artery disease (PAD), carotid artery disease (which can cause strokes), and deep vein thrombosis (DVT), which are blood clots. Vascular surgeons are trained to find these problems early, treat them the best way possible, and help patients recover safely. They are the only doctors who can give all types of treatment for blood vessel diseases from medicine to open surgery.

## Training and Certification to Become a Vascular Surgeon

Becoming a vascular surgeon takes many years of school and training. First, a person has to finish college and usually take a test called the MCAT to get into medical school. Then they go to medical school for four years. After that, they do five more years of training in a hospital. Some choose to do even more training to become experts in vascular surgery. After all that, they still have to pass two hard tests, one written and one oral, to become certified. This means they are officially allowed to work as a vascular surgeon.

## Real-Life Case: Saving a Life Without Blood Transfusion

There was a case at Johns Hopkins Hospital where a vascular surgeon helped an 81-year-old woman who had a very dangerous aneurysm. She was a Jehovah's Witness, so she could not receive a blood transfusion, which made the surgery much harder. Dr. James Black used a special method called endovascular repair. It took seven hours, but he was able to fix the problem with very little blood loss. The blood she did lose was saved and put back in her body. She got better quickly and left the hospital after eight days without any problems.

## Conclusion: Why Vascular Surgeons Matter

In conclusion, vascular surgeons are very important doctors who help people with serious blood vessel problems. They have to go through a lot of training and learning to do their job. They save lives using both medicine and surgery. Thanks to them, many people with dangerous health issues can live longer and healthier lives.
`,
    coverImage: "/vascular.png",
    date: "April 27, 2025",
    author: authors["maliha-metla"],
    topic: "Types of Doctors",
    readingTime: "5 min read",
  },
  {
    slug: "paul-ehrlich-granulocytes-discovery",
    title: "Paul Ehrlich and the Discovery of Granulocytes: Pioneering Immunology",
    excerpt:
      "Paul Ehrlich's innovative dye techniques helped identify and differentiate granulocytes, key white blood cells involved in immune responses. His work laid the foundation for modern immunology and our understanding of immune cell functions.",
    content: `
# Paul Ehrlich's Contribution to Granulocyte Research

## Who was Paul Ehrlich?

Paul Ehrlich (1854–1915) was a super important scientist who helped start the field of immunology and was one of the first to work with chemotherapy. Even though he didn't like school tests and wasn't the best student, he made a huge impact in medicine. He worked in a bunch of different areas like chemistry, blood studies, and medicine. What really got him interested was how dyes stuck to body tissues, and that curiosity helped him come up with early ideas about how the immune system works.

## What are Granulocytes?

Granulocytes are the most common type of white blood cells. They have tiny dots (called granules) inside them that release chemicals when your body is under attack, like during infections, allergic reactions, or asthma. These cells are made in your bone marrow and usually only live a few days.

## What did Ehrlich do with them?

Between 1879 and 1880, Ehrlich figured out how to stain (or color) blood cells using dyes made from coal tar. This helped scientists finally tell the different types of white blood cells apart. He used acidic and basic dyes to find eosinophils and basophils; two types of granulocytes. This work built on his earlier discovery of something called mast cells, which he had written about in his PhD paper.

Later, Ehrlich made a neutral dye that helped him spot special granules inside neutrophils (another white blood cell with oddly-shaped nuclei). He also made guesses, most of which were correct, about how neutrophils and eosinophils form, what they do, and what happens to them over time.

## What came before Ehrlich?

Even though Ehrlich did a lot, other scientists had noticed some things about white blood cells before him. William Hewson studied blood and lymph. People like Alfred Donné, John Hughes Bennett, and Rudolf Virchow had already described leukemia. William Addison, Friedrich von Recklinghausen, and Julius Cohnheim had looked into how inflammation works.

Eosinophils may have even been seen earlier. In 1846, Thomas Wharton Jones talked about "granule blood-cells" in humans and animals. Julius Vogel also saw these types of cells in inflamed areas. Vogel knew about Gottlieb Gluge, who had noticed "compound inflammatory globules" in pus that looked a lot like eosinophils.

Almost 20 years before Ehrlich's staining work, Max Johann Schultze had done tests with heat and a microscope and saw that these granular cells could move and eat other things, just like immune cells do.

But even with all those earlier discoveries, it was Ehrlich's special dye work that kicked off modern research on white blood cells and how they relate to sickness.
`,
    coverImage: "/Granulocytes.png",
    date: "April 20, 2025",
    author: authors["manha-atiq"],
    topic: "Cancer",
    readingTime: "8 min read",
  },
  {
    slug: "eosinophils-cancer-battlefield",
    title:
      "Once Known Only for Fighting Allergies and Parasites, Eosinophils Are Now Emerging as Unexpected Players in the Cancer Battlefield!",
    excerpt:
      "Explore how eosinophils, once known for their role in allergies and parasites, are now influencing cancer outcomes—sometimes acting as defenders, other times as accomplices in tumor progression.",
    content: `
# Can Allergy Cells Fight Cancer? The Surprising Role of Eosinophils

The immune system is our body's first line of defense against infections and abnormal cell growth, including cancer. Among its many components are **eosinophils**, which play a crucial role not only in fighting parasites and allergens but also in influencing cancer outcomes. Recent studies have revealed their surprising involvement in the **tumor microenvironment**, positioning eosinophils as both potential defenders and accomplices in cancer progression.

## Meet Eosinophils: Tiny Cells with Big Responsibilities

Eosinophils are a type of white blood cell that belong to the **granulocyte** family, alongside neutrophils and basophils. They are characterized by bright red-orange granules filled with toxic proteins and account for about 5% of the body's white blood cells. Found in the blood, bone marrow, lungs, skin, fat, and digestive tract, eosinophils are best known for combating **parasitic infections** and participating in allergic reactions. They also help regulate inflammation by releasing **cytokines** and **signaling molecules**.

## What Is Cancer? Understanding the Basics

Cancer refers to a group of diseases characterized by the uncontrolled division of abnormal cells, which can invade nearby tissues and spread to other parts of the body. It often results from **genetic mutations** that disrupt the normal processes of cell growth and death. While some cancers form solid tumors, others, like **leukemia**, do not. Treatments vary widely and may include surgery, chemotherapy, radiation therapy, immunotherapy, or targeted drugs.

## Eosinophils and Cancer: A Complex Relationship

Though eosinophils and cancer might seem unrelated at first glance, research has revealed a **complex and dynamic relationship** between the two. Eosinophils can infiltrate tumors and directly engage with cancer cells, releasing cytotoxic proteins such as **reactive oxygen species (ROS)**, **major basic protein (MBP)**, and **eosinophil cationic protein (ECP)**. These substances can induce tumor cell death, suggesting a possible **tumor-suppressive role** for eosinophils.

## The Impact of Eosinophils on Tumor Growth

Beyond their direct attack on cancer cells, eosinophils influence the tumor environment by secreting **cytokines** and **growth factors**. Interestingly, while some of these molecules—such as **interleukin-6 (IL-6)** and **APRIL**—can promote tumor growth, others support immune activation. Eosinophils also interact with other immune cells, presenting antigens to T cells, guiding their activation, and releasing chemokines to recruit more immune cells to the tumor site. These activities can potentially strengthen the body's anti-cancer response.

Moreover, eosinophils improve **tumor blood flow** and reduce vascular leakiness, which may enhance the effectiveness of therapies. For example, in **colorectal cancer**, higher eosinophil levels within tumors have been associated with better outcomes, reinforcing their potential as key players in cancer defense.

## Conclusion: The Dual Nature of Eosinophils in Cancer

In conclusion, eosinophils are far more than simple defenders against parasites and allergens. Their involvement in cancer highlights their **dual nature**—capable of both hindering and helping tumor progression, depending on the context. As our understanding of these versatile cells deepens, eosinophils could hold promise not only as markers of prognosis but also as potential targets or tools in future cancer therapies.
`,
    coverImage: "/eosinophils.png",
    date: "April 13, 2025",
    author: authors["shaza-ali"],
    topic: "Cancer",
    readingTime: "8 min read",
  },
  {
    slug: "stereotactic-radiosurgery-cancer-treatment",
    title: "Stereotactic Radiosurgery",
    excerpt:
      "Stereotactic Radiosurgery (SRS) is a non-invasive cancer treatment that uses precise, high-dose radiation beams to target tumors, especially in the brain, spine, and lungs. It delivers focused radiation with minimal damage to healthy tissue, often in just 1–5 sessions. SRS is ideal for small, well-defined tumors and offers quick recovery, though it's not suitable for larger or widespread cancers.",
    content: `
# Diving into Various Cures for Cancer: Stereotactic Radiosurgery (SRS)

## What is Stereotactic Radiosurgery (SRS)?

Stereotactic Radiosurgery (SRS) is a non-invasive, highly precise form of radiation therapy designed to treat tumors—including specific types of cancer—by delivering concentrated, high-dose radiation directly to the target area. Unlike traditional surgery, SRS doesn't require any incisions or physical removal of tissue. Instead, it uses advanced imaging and pinpoint-accurate technology to attack tumors from the outside.

## How SRS Works

The power of SRS lies in its unmatched precision. Through detailed imaging techniques—such as CT (Computed Tomography), MRI (Magnetic Resonance Imaging), or PET (Positron Emission Tomography) scans—the exact size, shape, and location of the tumor are mapped out in three dimensions.

Once the tumor is identified, multiple radiation beams are delivered from different angles. Individually, these beams are relatively weak, which protects surrounding healthy tissue. But at the point where all the beams converge—right at the tumor—their combined intensity delivers a powerful therapeutic dose that damages cancer cells while minimizing side effects.

Unlike conventional radiation therapy, which often requires daily sessions over several weeks, SRS can typically be completed in just 1 to 5 sessions, making it far more convenient and efficient for many patients.

## Common Uses in Cancer Treatment

SRS is best suited for small, well-defined tumors in areas where traditional surgery would be risky or difficult. It is particularly useful in:

### **Brain Tumors:**

Effective against both benign (e.g., meningiomas) and malignant tumors (e.g., glioblastomas, brain metastases from lung, breast, or melanoma cancers).

### **Spinal Tumors:**

Offers precise radiation to spinal tumors while minimizing risk to the spinal cord.

### **Early-stage Lung Cancer:**

Particularly effective for small, localized tumors, especially in patients who may not tolerate surgery.

### **Liver and Other Tumors:**

Outside the brain and spine, SRS is known as Stereotactic Body Radiation Therapy (SBRT) and is used to treat various body tumors with similar precision.

## Advantages of SRS

### **Minimally Invasive:**

No incisions or hospital stays—ideal for hard-to-reach tumors and for patients not suited for surgery.

### **Highly Precise:**

Targets tumors while preserving healthy tissue, resulting in fewer side effects.

### **Fewer Treatments:**

Can often be completed in a few sessions, reducing the treatment burden.

### **Quick Recovery:**

Most patients return home the same day with minimal recovery time.

## Limitations of SRS

Despite its many benefits, SRS has its limitations. It is not suitable for large, irregular, or widespread tumors, which may require a combination of treatments such as:

### Traditional surgery

### Chemotherapy

### Immunotherapy or targeted systemic therapies

Often, SRS is used as part of a multimodal treatment plan, complementing other therapies to maximize effectiveness.
`,
    coverImage: "/stereotactic-surgery.png",
    date: "April 13, 2025",
    author: authors["muhammad-lari"],
    topic: "Cancer",
    readingTime: "5 min read",
  },
  {
    slug: "coleys-toxins-early-immunotherapy",
    title: "Coley's Toxins",
    excerpt:
      "Explore the fascinating history of Coley's Toxins, one of the earliest forms of immunotherapy, and its impact on modern cancer treatment approaches.",
    content: `
# The Origins of Cancer Immunotherapy: Coley's Toxins

In the early 19th century, Dr. William Coley pioneered a novel approach to cancer treatment with what became known as Coley's toxins. He believed that injecting killed bacteria into cancer patients could stimulate the immune system and cause tumors to shrink. Although his method faced skepticism and eventually fell out of favor, Coley's groundbreaking work laid the foundation for the development of modern cancer immunotherapy.

## Coley's Inspiration: Linking Infections to Tumor Regression

Coley's interest in bacterial immunotherapy was sparked by historical reports of cancer regression following severe infections. In the 18th and 19th centuries, physicians observed that some patients experienced tumor shrinkage after contracting bacterial illnesses. Motivated by the tragic death of a young cancer patient, Elizabeth Dashiell, Coley began researching these phenomena. He discovered several cases where cancer patients who developed bacterial infections underwent spontaneous tumor regression. Building on these findings, Coley created a bacterial cocktail containing Streptococcus pyogenes and Serratia marcescens, which he used to treat cancer patients—achieving mixed but occasionally remarkable results.

## Legacy and Impact: From Skepticism to Modern Immunotherapy

Despite showing promise in some cases, Coley's toxins were met with skepticism due to the absence of standardized clinical trials and consistent outcomes. By the mid-20th century, the rise of chemotherapy and radiation therapy overshadowed Coley's approach, leading to a decline in its use. Additionally, regulatory changes in the 1960s further restricted access to his bacterial treatments. Still, Coley's groundbreaking work laid the foundation for modern cancer immunotherapy. Today, targeted immunotherapies, such as checkpoint inhibitors and CAR-T cell therapy, reflect the same principle of harnessing the immune system to fight cancer. Ongoing research into bacterial-based treatments continues to validate Coley's early insights—revealing just how far ahead of his time he truly was.

## Conclusion

Although Coley's toxins are no longer used, their impact on cancer treatment remains significant. His innovative approach demonstrated the potential of the immune system in fighting cancer, paving the way for today's immunotherapies. While his treatment was not widely accepted in his time, it helped inspire modern breakthroughs that continue to improve cancer care.
`,
    coverImage: "/coleytoxins.png",
    date: "April 12, 2025",
    author: authors["shaza-ali"],
    topic: "Cancer",
    readingTime: "7 min read",
  },
  {
    slug: "nurses-elder-care-centers",
    title: "Nurses In Elder Care Centers",
    excerpt:
      "An in-depth look at the crucial role nurses play in elder care facilities, their responsibilities, challenges, and the impact they make on patients' lives.",
    content: `
# The Growing Importance of Nurses in Elder Care

Nurses in elder care centers play a vital role in providing comprehensive care to older adults. These specialized healthcare professionals combine clinical expertise with compassion to address the unique needs of the elderly population.

## Importance of Nurses

Nurses play a fundamental part in the hierarchy of the healthcare industry, and play an important part in ensuring the well-being of their patients, something that is commonly overlooked by most people. However, with the rise in population, the demand for skilled healthcare providers is exponentially increasing in many provinces. During 2023-2024, there has been a 40% increase for Nursing job listings in Ontario, with Alberta following with a 21% increase as well. Moreover, there are as many as 27.9 million nurses in the world, including 460,000 nurses in Canada, with an approximate annual pay of $90,000 a year. Moving on, Nurses work in many sectors of the healthcare industry, such as 'Elder Care centers'. In Eldercare Centers, nurses assess the health, administer medication, supervise the elders, and so on.

## There are 3 main types of Nurses that we will be focusing on:

- Registered Nurses(RNs)

- Licenced Practical Nurses(LPNs)

- Geriatric Nurses

## Licensed Practical Nurses (LPNs):

First of all, we have Licensed Practical Nurses (LPNs) who deliver essential patient care through direct practices which they provide, usually in elder care facilities. LPN candidates need to pursue one-year programs such as diplomas or certificates at community colleges and vocational schools to achieve their education qualification. Completing their nursing education requires LPNs to pass the Regulatory Exam – Practical Nurse (REX-PN) to get their nursing license. The duties of LPNs in elder care settings include checking vital signs while assisting with the daily activities of residents and giving medications under supervision. Healthcare facilities require LPN practitioners to work under medical oversight from Registered Nurses (RNs) and doctors as they deliver patient care. Elderly patient health support becomes possible through the educational program that prepares nurses with the required skills and knowledge. LPN healthcare professionals form an essential part of healthcare by delivering improved quality care to patients under their medical attention.

## Registered Nurses (RNs):

When cases become more complicated, the registered nurse takes over the responsibility of the Licensed Practical Nurses. Registered nurses, sometimes also known as "RNs", play an important role in maintaining & monitoring the health of elderly individuals in elder care centers. Some of their core duties include assessing patients and developing care plans, monitoring vital signs, and administering a variety of medications, treatments, and vaccines. Registered nurses are found in many healthcare sectors, and the industry has its unique responsibilities. In Canada, to work as a Registered Nurse, one must have either a 4-year Bachelor of Science in Nursing degree (BSN) or some colleges offer a 2-3 year long nursing diploma. After that, students must complete the NCLEX-RN licence Exam which tests nursing knowledge and skills at the entry-to-practice level, and then register with the provincial body they wish to practice in.

## Geriatric Nurses:

Geriatric nurses are a type of registered nurse who specialize in taking care of elderly patients and are trained to address specific health challenges that the elder population may face, such as age related diseases and chronic pain. In most healthcare settings, the most common roles for Registered nurses are; help patients with light exercises, taking and recording patients' vital signs, assisting physicians with procedures, educating patients and their families on treatment options for chronic conditions, and conducting comprehensive medical assessments. The requirements to become a Geriatric nurse are the same as a registered nurse, but the candidates will need at least 2 years of bedside nursing/ registered nursing experiences before considering a speciality area such as Gerontology. One of the most successful and popular gerontology certificate options in Canada is 'The Canadian Nurse Association Gerontology Certification. Anyone who wishes to work as a geriatric nurse is recommended to obtain this certification. Becoming such a nurse can be an exceptionally rewarding nursing career option as one can apply a mix of biological and psychological methods to study/nurture the elderly.

## Conclusion

Nursing is the largest healthcare profession in the world and is vital to any healthcare setting. Licensed practical nurses, registered nurses, and geriatric nurses, each play a critical role in providing emotional support, assistance, and medical care to the elderly population. As the elderly population grows at an exponential rate, the demand for nursing professions in long-term care settings will definitely increase, making it a viable career option to pursue. By recognizing the efforts and work of these dedicated professionals, as a society, we can foster a collaborative spirit to improve the lives of the elderly in eldercare centers.

## CITATIONS

Admin. (2022, September 14). Basics of Geriatric Nursing in Canada. INSCOL. https://inscol.com/india/blog/geriatric-nursing-in-canada/#:~:text=Most%20positions%20of%20geriatric%20nursing,based%20healthcare%2C%20pharmaceuticals%2C%20etc.

Greenall, G. (2025, January 10). Registered nurse jobs (with salaries) in Canada - 2025 look. ebs. https://ebsource.ca/registered-nurse-jobs-in-canada/

Lisa Lagace. (2024, December 10). Demand for nurses in Canada still high as talent shortage ... Indeed. https://ca.indeed.com/career-advice/news/high-demand-for-nurses#:~:text=While%20demand%20has%20slowed%20in,searched%20by%20employers%20throughout%202023.

What is a geriatric nurse?. Fortis Colleges & Institutes: Accredited Career Training Programs. (2023, December 11). https://www.fortis.edu/blog/nursing/what-is-a-geriatric-nurse-.html#:~:text=They're%20registered%20nurses%20(RNs,may%20monitor%20patients'%20daily%20mobility
`,
    coverImage: "/Elder-healthcare.png",
    date: "April 10, 2025",
    author: authors["muhammad-lari"],
    topic: "Types of Nurses",
    readingTime: "8 min read",
  },
  {
    slug: "immunotherapy-cancer-treatment",
    title: "Immunotherapy",
    excerpt:
      "Understand how modern immunotherapy harnesses the body's own immune system to fight cancer, revolutionizing treatment approaches and outcomes.",
    content: `
# Immunotherapy: A Powerful Cancer Treatment

Immunotherapy is a medical treatment that empowers the body's own immune system to fight diseases, particularly cancer. Its main goal is to strengthen or modify immune responses so the body can recognize and eliminate harmful cells more effectively. Unlike traditional treatments like chemotherapy or radiation, which directly target cancer cells, immunotherapy works by enhancing the body's natural defense mechanisms. This innovative approach has emerged as a promising option, especially for patients with specific types of cancer where other treatments may be less effective.

## Types of Immunotherapy: Different Paths to the Same Goal

There are several types of immunotherapy, each designed to boost the immune system in unique ways. Monoclonal antibodies are lab-engineered molecules that mimic the immune system's natural ability to detect harmful invaders. These antibodies attach to cancer cells and act as flags, helping the immune system identify and eliminate them. Checkpoint inhibitors work by blocking proteins that normally stop immune cells from attacking healthy tissue—proteins that some cancers exploit to avoid detection. By disabling these proteins, checkpoint inhibitors free the immune system to aggressively target cancer cells. Another approach is through cancer vaccines, which train the immune system to recognize and attack specific cancer cells, helping to prevent the disease from spreading or returning.Types of Immunotherapy: Diverse Tools for Fighting Cancer

## Conclusion

Immunotherapy offers a promising alternative to traditional cancer treatments. By enhancing the body's natural defenses, it can improve survival rates and reduce the side effects often caused by chemotherapy and radiation. As research continues, immunotherapy is expected to play an even larger role in the fight against cancer.
`,
    coverImage: "/Immunotherapy.png",
    date: "April 8, 2025",
    author: authors["maliha-metla"],
    topic: "Cancer",
    readingTime: "9 min read",
    featured: true,
  },
  {
    slug: "internist-general-care-provider",
    title: "Internist and General Care Provider",
    excerpt:
      "Explore the essential role of internists and general care providers as the foundation of the healthcare system and often the first point of contact for patients.",
    content: `
# Who Are Internal Medicine Doctors?

When people get sick, they usually visit a doctor for help. But not all doctors treat the same kinds of illnesses. Some handle common health problems, like the flu or minor injuries, while others focus on serious and complex diseases. One type of doctor that specializes in adult health is an Internal Medicine physician, also called an internist. These doctors are highly trained to deal with complicated medical conditions, especially when a patient has more than one illness at the same time.

## Difference between General Practitioners(GPs) and internists

While both general practitioners (GPs) and internists can be primary care Doctors, there are some key differences between them. General practitioners treat people of all ages from babies to the elderly. They handle everyday health concerns and refer patients to specialists if needed. Internists, on the other hand, focus only on adults and specialize in diagnosing and treating chronic and complex diseases like heart disease, diabetes, and autoimmune disorders.

## Advanced Training and Diagnostic Expertise

Internists complete a three-year residency after medical school, where they get Advanced training in adult medicine. Many of them work in hospitals, where they often handle difficult cases that other doctors can't easily solve. Doctors see thousands of patients with common illnesses every year, but sometimes they come across something extremely rare and difficult to Diagnose.

## Who Are Internal Medicine Doctors or Internists?

When people get sick, they usually visit a doctor for help. But not all doctors treat the same kinds of illnesses. Some handle common health problems, like the Flu or minor injuries, while others focus on serious and complex diseases. One type of doctor that specializes in adult health is an Internal Medicine physician, also called an internist. These doctors are highly trained to deal with complicated medical conditions, especially when a patient has more than one illness at the same time.

## Solving Medical Mysteries: A Case of Sweet's Syndrome

One case involved a patient with a high fever and a painful, itchy rash all over her body. At first, dermatologists (skin doctors) examined the patient, but they couldn't figure out the cause of the rash. So, they called in the internal medicine team for further investigation. After running tests and carefully reviewing the patient's symptoms, the internists identified the condition as Sweet's Syndrome, an uncommon inflammatory disorder that affects the skin.

One of the most shocking discoveries was that this syndrome is sometimes linked to blood cancer. Even though it's rare, certain types of blood cancer can cause skin related symptoms like rashes. Once the doctors figured out what was happening, they started chemotherapy, a treatment used to fight blood cancer. Over time, the patient's condition improved, and her rashes started to fade. Thanks to the teamwork between the internal medicine and dermatology departments, the doctors were able to correctly diagnose and treat her condition. This case highlights the critical role that internal medicine doctors play in healthcare. While general practitioners focus on common illnesses, internists are trained to diagnose and manage complex medical conditions. Sweet's Syndrome is just one example of how an internist's expertise can make a huge difference. By investigating rare diseases, connecting symptoms to hidden causes, and working with specialists, internists help patients get the right treatment even when the diagnosis is extremely challenging.
`,
    coverImage: "/Internist.png",
    date: "April 8, 2025",
    author: authors["maliha-metla"],
    topic: "Types of Doctors",
    readingTime: "9 min read",
  },
  {
    slug: "anaplastic-thyroid-cancer",
    title: "Anaplastic Thyroid Cancer",
    excerpt:
      "An in-depth look at anaplastic thyroid cancer, one of the most aggressive forms of thyroid cancer, including diagnosis, treatment options, and research developments.",
    content: `
# Anaplastic Thyroid Cancer: Understanding a Rare and Aggressive Disease

## What is Anaplastic Thyroid Cancer (ATC)?

Anaplastic Thyroid Cancer is one of the fastest growing and most aggressive of all cancers. It is also referred to as "Undifferentiated Thyroid Cancer" because it acts and looks completely unlike a normal thyroid cell. Although rare, as it accounts for less than 2% of all thyroid cancers, Anaplastic Thyroid Cancer carries one of the worst prognosis of any cancer. Most patients are diagnosed at an advanced stage, which causes the median survival time to be typically less than six months after being diagnosed.

## What causes ATCs?

Generally, there isn't an exact causation, but Anaplastic Thyroid Cancer can sometimes develop from pre-existing differentiated thyroid cancers, such as papillary or follicular thyroid cancer, especially if they go untreated or mutate over time. These differentiated thyroid cancers can destabilize and ultimately come to anaplastic thyroid cancer. The main risk factors for anaplastic cancer mainly include an age older than 65, history of radiation exposure to the chest or neck, or a long-standing goiter, which in simple terms is an enlarged thyroid.

## Diagnosis

Due to its extremely aggressive prognosis, all patients are diagnosed with stage IV of Anaplastic Thyroid Cancers. However, Stage IV is further divided into three substages based on the extent of spread. In Stage IVA, which accounts for about 10% of cases, the cancer is confined to the thyroid gland. In Stage IVB, seen in roughly 40% of cases, the cancer has spread to nearby structures such as lymph nodes in the neck. Stage IVC, the most common form at approximately 50% of cases, involves cancer that has metastasized to distant organs like the lungs, bones, or brain.

## Common Signs and Symptoms

Due to the location of ATC, Many patients with the cancer report compressive symptoms such as increased effort required for swallowing, sensation of food and pills getting stuck while being swallowed, increased pressure on trachea or shortness of breath while laying down. A rock-hard mass is often noticeable in the neck or upper chest. As the cancer progresses, it may invade surrounding structures, leading to hoarseness, further difficulty in swallowing, and the appearance of enlarged lymph nodes.

## Diagnosing the Disease

Healthcare providers perform a fine needle aspiration, also known as a needle biopsy, to diagnose ATC. First, they take a small tissue sample from the thyroid mass, using a thin needle. In some cases, they may require a core biopsy using a larger needle. Then, they look at the tissue under a microscope to see if there are cancer cells. If cancer is detected, further analysis is done to identify the specific type or classification of thyroid cancer. Once the patient has been diagnosed, doctors will ask for tests to assess your health to determine if and where the cancer will spread, with the assistance of the following scans: CT scans, MRI scans, and F-fluorodeoxyglucose PET Scans

## Management and Treatment of ATC

Anaplastic thyroid cancer is hard to treat because it is extremely aggressive and has a long metastasis, spreading quickly in your neck and to distant parts of your body. Treatments involve a combination of certain procedures, such as surgery, chemotherapy, radiotherapy, Palliative care, and a multidisciplinary team of endocrinologists, medical oncologists, radiation oncologists, surgeons, etc.

### Surgery

Surgery is the most likely recommendation to remove the tumor unless afflicted with another medical condition. Debulking surgery is the most common as it surgically removes as much of the tumor as possible, especially any part threatening your airway. It aims to keep your larynx or voice box intact. Unfortunately, surgery isn't possible due to certain complications, including if the tumor is too large, in a sensitive location or too invasive.

### Chemotherapy

Chemotherapy works by destroying cancer cells and preventing them from multiplying. It is typically used after surgery or in combination with radiation therapy to enhance its effectiveness, making the cancer more susceptible to radiation. While chemotherapy cannot cure Anaplastic Thyroid Cancer, it may help slow down or temporarily reverse tumor growth. Newer drugs are becoming more available and effective for advanced cases. Common chemotherapy drugs include taxanes (such as paclitaxel or docetaxel), anthracyclines (like doxorubicin), and platinum analogs (such as cisplatin or carboplatin).

### Radiation therapy

Radiation therapy uses high-energy beams to kill or halt the growth of cancer cells. The most commonly recommended form is External Beam Radiation Therapy (EBRT), which targets focused X-rays directly at the tumor or affected areas. Radiation can be used alongside chemotherapy or as a standalone treatment if surgery isn't possible.

### Palliative care

Palliative care focuses on relieving the pain, symptoms, and emotional stress caused by ATC. It is often recommended to manage symptoms and side effects during advanced stages of the disease. Supportive measures may include placing a tracheostomy tube in the throat to help with breathing, inserting a feeding tube in the stomach for nutrition, and using pain management medications to improve the patient's comfort and quality of life.

## Reference

Anaplastic Thyroid Cancer. American Thyroid Association. (n.d.).
https://www.thyroid.org/anaplastic-thyroid-cancer/

Anaplastic thyroid Cancer (ATC). (2025, March 19). Cleveland Clinic.
https://my.clevelandclinic.org/health/diseases/23539-anaplastic-thyroid-cancer-atc

Anaplastic Thyroid Cancer | Columbia University Department of Surgery. (n.d.). Columbiasurgery.org.
https://columbiasurgery.org/conditions-and-treatments/anaplastic-thyroid-cancer
`,
    coverImage: "/Anaplastic.png",
    date: "April 5, 2025",
    author: authors["muhammad-lari"],
    topic: "Cancer",
    readingTime: "8 min read",
  },
  {
    slug: "cancer-overview",
    title: "Cancer",
    excerpt:
      "A comprehensive overview of cancer, exploring its causes, types, diagnosis, treatment approaches, and the latest research developments.",
    content: `
# What is Cancer: A General Overview

## Overview of Cancer

Cancer is a disease characterized by the uncontrolled growth and spread of abnormal cells within the body. This condition can originate in almost any tissue or organ, as our bodies continually produce new cells. When errors occur during the process of cell division, known as mitosis, it can lead to the formation of cancerous cells. These cells can proliferate uncontrollably and invade surrounding tissues, eventually spreading to other parts of the body—a process known as Metastasis.

## Understanding Tumors

Tumors are often associated with cancer and can vary in nature. Benign tumors are generally harmless and may require minimal intervention, such as surgical removal. In contrast, malignant tumors pose more significant health risks as they invade nearby tissues and disrupt normal bodily functions. These tumors can cause complications depending on their location and the extent of their growth.

## Characteristics of Cancerous Cells

Cancerous cells exhibit several distinctive characteristics that set them apart from normal cells. They grow autonomously, disregarding signals that would typically regulate cell division or induce cell death. Moreover, they have the ability to invade surrounding tissues and promote the development of blood vessels to supply nutrients to tumors—a process known as angiogenesis. Additionally, cancer cells often display chromosomal abnormalities and rely on altered metabolic pathways to sustain their rapid growth.

## Development of Cancer

Cancer is fundamentally a genetic disease, primarily driven by mutations that disrupt the normal regulation of cell growth and division. These genetic changes can result from various factors, including errors during DNA replication, exposure to carcinogenic substances like those found in tobacco smoke or UV radiation, and inherited genetic mutations passed down through generations. While the body possesses mechanisms to repair DNA damage and suppress abnormal cell growth, these defenses can become compromised over time, contributing to the development of cancer.

## Types of Cancer

Cancers are categorized based on the specific tissues or cells from which they originate. Common types include carcinoma, arising in epithelial cells such as those lining organs; sarcoma, originating in bone and soft tissues; leukemia, affecting blood-forming tissues like bone marrow; lymphoma, starting in lymphocytes of the immune system; and melanoma, beginning in pigment-producing melanocytes. Each type of cancer has distinct characteristics and may require different approaches to treatment.

This structured overview provides a comprehensive understanding of cancer, encompassing its nature, characteristics of cancerous cells, factors contributing to its development, and the diverse types of cancer that can affect the human body.
`,
    coverImage: "/cancer.png",
    date: "April 5, 2025",
    author: authors["muhammad-lari"],
    topic: "Cancer",
    readingTime: "10 min read",
  },
  {
    slug: "history-impact-chemotherapy",
    title: "The History and Impact of Chemotherapy",
    excerpt:
      "Trace the fascinating evolution of chemotherapy from its origins in World War I to modern targeted approaches, and understand its transformative impact on cancer treatment.",
    content: `
# The History and Impact of Chemotherapy

Chemotherapy is a medical treatment that uses powerful drugs to kill rapidly growing cells in the body. It is most commonly used to treat cancer because cancer cells grow and multiply faster than most normal cells. Chemotherapy can be administered as a primary treatment, in combination with other therapies, or to relieve symptoms of cancer.

## How Chemotherapy Works

Cancer cells divide uncontrollably, which makes them different from most normal cells. Chemotherapy works by destroying these fast-growing cells and preventing them from multiplying. There are several ways in which chemotherapy is used such as adjuvant therapy which is used after surgery or radiation to eliminate any remaining cancer cells, curative therapy aim to remove cancer completely so that it does not return, neoadjuvant therapy shrinks a tumor before surgery or radiation, and palliative therapy helps shrink tumors and reduce symptoms without curing the cancer. While chemotherapy is an effective way to treat cancer, it also affects other fast-growing cells in the body, such as those in the blood, digestive system, and hair follicles. This can lead to side effects like hair loss, nausea, fatigue, and anemia.

## The Origins of Chemotherapy

Chemotherapy was first developed in the early 20th century, though not originally for cancer treatment. During World War II, scientists observed that people exposed to nitrogen mustard had lower white blood cell counts. This led researchers to investigate whether mustard agents could be used to target rapidly dividing cells, including cancer cells. In the 1940s, pharmacologists Alfred Gilman and Louis Goodman at Yale University tested the effects of nitrogen mustard on lymphoma. They found that injecting a patient with a modified form of mustard gas, called mustine, caused the tumor to shrink. Although the tumor eventually grew back, this study marked the beginning of using chemical agents to treat cancer. Their findings were published in 1946, and nitrogen mustard became a widely used treatment for lymphomas in the United States.

## Advancements in Chemotherapy

After World War II, researchers continued to search for effective chemotherapy agents. Sidney Farber, a pathologist at Harvard Medical School, studied the effects of folic acid, a vitamin needed for DNA production. He and his team developed folate analogues, such as methotrexate, which blocked the action of folic acid. These drugs successfully induced remission in children with acute lymphoblastic leukemia in 1948. During the 1950s and 1960s, further advancements were made. The pharmaceutical company Eli Lilly discovered that plant alkaloids from the periwinkle plant, Vinca rosea, were effective against leukemia. This led to the development of vinca alkaloids, such as vinblastine for Hodgkin's disease and vincristine for pediatric leukemia. Over the following decades, combination chemotherapy became popular. Using multiple drugs with different mechanisms increased survival rates and reduced mortality. Since 1990, cancer death rates have steadily declined due to early detection and the development of more effective chemotherapy treatments.

## Conclusion

Chemotherapy has a long and evolving history. From its accidental discovery during wartime to the targeted treatments used today, it has revolutionized cancer care. While chemotherapy still has side effects, continuous research has improved its effectiveness and reduced its risks. Today, chemotherapy remains a critical tool in the fight against cancer, saving and prolonging lives around the world.
`,
    coverImage: "/Chemo.png",
    date: "April 3, 2025",
    author: authors["maliha-metla"],
    topic: "Cancer",
    readingTime: "11 min read",
  },
  {
    slug: "nephrologist-kidney-specialists",
    title: "Nephrologist",
    excerpt:
      "Nephrologists are doctors who treat kidney conditions like kidney failure, stones, and chronic kidney disease. They also manage related issues like high blood pressure and help oversee dialysis and transplants.",
    content: `
# Nephrologists Explained: Experts in Kidney Disease

## What are Nephrologists?

Nephrologists are medical professionals who specialize in diagnosing and treating kidney-related conditions. These could include kidney stones, kidney failure, and chronic kidney disease. They also manage complications caused by kidney dysfunction, such as hypertension and cardiovascular diseases. Nephrologists also play a crucial role in overseeing dialysis treatments, kidney transplants, and post-treatment care. They are often confused with Urologists who also deal with kidney health along with the bladder and reproductive organs. However, Urologists are trained in surgery, whereas Nephrologists typically are not. Despite their significance in kidney health, there are just over 10,000 practicing Nephrologists in the United States, which is relatively low considering the demand for kidney care.

## Types of Nephrologists

Nephrology is a diverse field with several subspecialties. There are Pediatric Nephrologists who specialize in treating kidney-related issues in children and teenagers. As well as Interventional Nephrologists who preform minimally invasive procedures for dialysis patients, such as placing stents and removing catheters. There are multiple other types such as: transplant Nephrologists, critical care Nephrologists, Geriatric Nephrologists, Onco-Nephrologists, etc.

## How to Become a Nephrologist

The path to becoming a Nephrologists is quite extensive and requires years of training. It starts with four years of medical school, followed by a three-year residency in internal medicine, then they must complete a 2-3 year fellowship in Nephrology. To conclude their journey, they must pass a board certification exam to practice professionally.

## Case Study: Treating ICGN

A rare but serious kidney condition known as Immune Complex-Mediated Glomerulonephritis (ICGN), occurs when immune complexes become intertwined in the kidney's glomeruli (tiny filters), which causes inflammation and kidney dysfunction.

When a 57-year-old man was diagnosed with subacute bacterial endocarditis caused by Streptococcus mutans he developed ICGN. Despite receiving the standard treatment his kidney dysfunction worsened. To help treat him, the doctors introduced plasmapheresis, which is a procedure that removes immune complexes from the blood. And after seven sessions, the patients kidney health significantly improved, demonstrating the potential effectiveness of plasmapheresis in select cases.

## Conclusion

Nephrologists play a vital role in managing kidney health and preventing complications that affect other organs. Their expertise extends to various subspecialties, from pediatric care to kidney transplants. While nephrology often involves non-surgical treatments, advancements in the field continue to improve outcomes for patients with complex kidney disorders.
`,
    coverImage: "/Nephrologist.png",
    date: "April 1, 2025",
    author: authors["shaza-ali"],
    topic: "Types of Doctors",
    readingTime: "9 min read",
  },
  {
    slug: "endocrinologists-hormonal-health",
    title: "The Role of Endocrinologists",
    excerpt:
      "Delve into the specialized field of endocrinology and learn how these physicians diagnose and treat hormonal disorders affecting multiple body systems.",
    content: `
# Endocrinologists: Experts in Hormonal Health and Disease Management

The endocrine system plays a vital role in regulating various bodily functions. Hormones, which are chemical messengers produced by glands, help control metabolism, growth, reproduction, and other essential processes. When there is an imbalance in hormone levels, it can lead to serious health problems. Endocrinologists are doctors who specialize in diagnosing and treating conditions related to hormonal imbalances. They help manage diseases like diabetes, thyroid disorders, infertility, osteoporosis, and even some types of cancer.

## Educational Path to Becoming an Endocrinologist

To become an endocrinologist, a person must go through extensive education and training. First, they must earn a bachelor's degree and take the Medical College Admission Test (MCAT) to gain entry into medical school. Medical school lasts about four years and provides future doctors with the knowledge they need. After medical school, they complete a two-year residency in internal medicine or endocrinology, where they receive hands-on experience treating patients. Following residency, they must complete a two- to three-year fellowship focused on endocrinology, diabetes, and metabolism. Finally, they take an exam to become board-certified in internal medicine, and they need another certification from the American Board of Internal Medicine to specialize in endocrinology.

## Case Study: Detecting Cancer Through Hormonal Markers

A recent case study underscores the critical role endocrinologists play in identifying life-threatening conditions. An 88-year-old man was admitted to the hospital with COVID-19. While his infection eventually resolved, doctors observed that his procalcitonin (ProCT) levels were unusually elevated. Although ProCT typically rises due to bacterial infections, it can also signal the presence of medullary thyroid cancer (MTC). To delve deeper, physicians measured his serum calcitonin (CT) levels, which were found to be significantly high—prompting further investigation into a potential underlying cause.

## Diagnosis and Confirmation of Medullary Thyroid Cancer

To investigate the abnormal hormone levels, doctors conducted a CT scan, which revealed a mass in the patient's thyroid. An ultrasound provided more detail, identifying a 50mm nodule in the right thyroid lobe that extended into the mediastinum. To determine whether the nodule was cancerous, a fine needle aspiration biopsy was performed. The results confirmed the diagnosis: medullary thyroid cancer (MTC).

## Treatment and Long-Term Management

Since the cancer was already at an advanced stage, surgery was not a viable option. Instead, the patient was prescribed cabozantinib, a targeted medication used to treat medullary thyroid cancer. He began taking a daily dose of 40 mg. Sixteen months into treatment, the patient continues on the same regimen. Although his calcitonin levels remain elevated, there has been no evidence of disease progression. Most importantly, he maintains his independence and is able to carry out daily activities, highlighting the effectiveness of ongoing medical management.

## The Vital Role of Endocrinologists in Patient Outcomes

Endocrinologists play a crucial role in diagnosing and treating hormone-related diseases. The case study of the 88-year-old man underscores how an endocrinologist's expertise led to the detection of medullary thyroid cancer through abnormal hormone levels. Although surgery was not an option, ongoing treatment has successfully controlled the disease, allowing the patient to maintain his independence and quality of life. This case highlights the importance of early detection and specialized medical care in managing complex endocrine disorders.
`,
    coverImage: "/endocrinologist.png",
    date: "March 30, 2025",
    author: authors["maliha-metla"],
    topic: "Types of Doctors",
    readingTime: "8 min read",
  },
  {
  slug: "what-is-chemotherapy",
  title: "What is Chemotherapy?",
  excerpt:
    "Chemotherapy is a treatment that targets fast-growing cancer cells using powerful drugs. Learn how it works, its different types, side effects, and how it’s administered.",
  content: `
## What is Chemotherapy?

Chemotherapy is a type of **cancer treatment** that uses drugs to kill cancer cells. These drugs target cells that grow and divide quickly. Since cancer cells grow faster than most normal cells, chemotherapy focuses on stopping them. However, some healthy cells—like those in the hair, digestive system, and bone marrow—also divide quickly, so they can be affected too. This leads to side effects like **hair loss**, **nausea**, **tiredness**, and a **higher risk of infections**.



## How Chemotherapy Works

Chemotherapy drugs interfere with how cancer cells grow and divide. Since cancer cells multiply without control, these drugs are designed to **slow or stop this growth**. Unfortunately, because the drugs also affect healthy fast-dividing cells, side effects often occur in other parts of the body.



## Types of Chemotherapy

There are several classes of chemotherapy drugs, each working in unique ways:

- **Alkylating agents**: Damage DNA to stop replication (e.g., cyclophosphamide, cisplatin)
- **Antimetabolites**: Mimic cell building blocks and disrupt DNA formation (e.g., methotrexate, 5-fluorouracil)
- **Anti-tumor antibiotics**: Prevent DNA from unwinding and replicating (e.g., doxorubicin)
- **Mitotic inhibitors**: Stop cell division by targeting microtubules (e.g., paclitaxel, vincristine)
- **Topoisomerase inhibitors**: Block enzymes that help DNA replicate (e.g., etoposide, irinotecan)



## Uses of Chemotherapy

Chemotherapy is used in various ways:

- **Curative chemotherapy**: Aims to completely eliminate cancer.
- **Adjuvant chemotherapy**: Given after surgery/radiation to kill leftover cancer cells.
- **Neoadjuvant chemotherapy**: Given before surgery/radiation to shrink tumors.
- **Palliative chemotherapy**: Used to relieve symptoms and improve comfort in advanced cancer cases.



## Side Effects of Chemotherapy

Because chemotherapy impacts healthy fast-growing cells, common side effects include:

- **Hair loss** due to affected hair follicles.
- **Nausea and vomiting** from digestive tract irritation.
- **Fatigue**, often due to lower red blood cell counts.
- **Weakened immunity** from reduced white blood cells.
- **Mouth sores** and **neuropathy** (tingling or numbness in hands/feet).



## How Chemotherapy Is Given

Chemotherapy can be administered in different forms:

- **Intravenous (IV)** infusion into a vein.
- **Oral** tablets or capsules.
- **Injection** into muscles or under the skin.
- **Topical** creams for skin cancers.
- **Intrathecal** (into the spinal fluid) or **intraperitoneal** (into the abdomen) routes for certain cases.



Chemotherapy remains a powerful tool in the fight against cancer, and ongoing research continues to improve its precision and reduce its side effects.
  `,
  coverImage: "/chemotherapy-cover.jpg",
  date: "March 29, 2025",
  author: authors["manha-atiq"],
  topic: "Cancer",
  readingTime: "5 min read",
  featured: false
},
  {
    slug: "pediatric-nurses-critical-role",
    title: "Pediatric Nurses",
    excerpt:
      "Discover the specialized world of pediatric nursing, where healthcare professionals dedicate their careers to caring for children from infancy through adolescence.",
    content: `
# The Critical Role of Pediatric Nurses in Modern Healthcare

Pediatric nurses play a vital role in healthcare by providing specialized medical care to children from infancy through adolescence. Despite the presence of 1.9 million pediatric nurses in the U.S., only 3.7% of nurse practitioners hold pediatric certification, highlighting a growing demand for specialized healthcare workers. The U.S. Bureau of Labor Statistics projects a 6% growth in registered nursing positions from 2023 to 2033, emphasizing the need for pediatric nurses to ensure children's well-being. Among them, Pediatric Intensive Care Unit (PICU) nurses hold the highest specialization, managing critically ill children facing life-threatening conditions.

## Becoming a Pediatric Intensive Care Unit (PICU) Nurse

Becoming a PICU nurse requires completing a two- to four-year nursing program, earning an ADN or BSN degree, passing the NCLEX-RN exam, and undergoing extensive training. These nurses treat critical infections, trauma cases, substance overdoses, congenital conditions, and complex surgeries. Due to their expertise, PICU nurses earn a median annual salary of $114,725, with demand expected to grow by 6% from 2021 to 2031 as healthcare facilities increasingly require specialized pediatric treatments.

## Caring for the Tiniest Lives: The Work of Neonatal Nurses

Another essential area within pediatric nursing is neonatal nursing, which focuses on caring for newborns with complications such as prematurity, birth defects, and infections. While neonatal nurses primarily care for infants in their first month, they may continue treatments for children up to two years old. Their responsibilities include monitoring vital signs, performing neonatal tests, and assisting mothers in postnatal recovery. By providing specialized interventions, neonatal nurses play a crucial role in reducing infant mortality rates and improving overall newborn health outcomes.

## Expanded Roles and Responsibilities of Pediatric Nurses

Beyond direct patient care, pediatric nurses conduct developmental assessments, administer vaccinations, educate parents, and provide emotional support to families. They help guide difficult medical decisions by explaining pediatric treatment options and tailoring care to different age groups. Their ability to deliver compassionate and effective treatment makes them essential healthcare providers in hospitals, clinics, and community health settings.

## Conclusion

With the increasing demand for pediatric healthcare services, more nurses must specialize in this field to meet future needs. The profession offers competitive salaries, career growth opportunities, and the rewarding experience of helping children. Investing in pediatric nursing programs is crucial to ensure a steady pipeline of skilled professionals. Pediatric nurses not only provide critical medical care but also serve as advocates and caregivers, making a lasting impact on children's health and development.
`,
    coverImage: "/PediatricNurse.png",
    date: "March 25, 2025",
    author: authors["shaza-ali"],
    topic: "Types of Nurses",
    readingTime: "7 min read",
  },
  {
  slug: "what-do-cardiologists-do",
  title: "What Do Cardiologists Really Do?",
  excerpt:
    "From chest pain to complex procedures, cardiologists play a crucial role in diagnosing and treating heart conditions. Learn how they work and why they matter.",
  content: `
## What Is a Cardiologist?

Cardiologists are doctors who specialize in the **cardiovascular system**, which includes the heart and blood vessels. If you’ve ever had chest pain, high blood pressure, or other heart-related issues, a cardiologist is the specialist you’d likely see.

## How Cardiologists Diagnose Heart Conditions

Cardiologists use various tools to diagnose heart problems. These include:

- **Electrocardiogram (EKG)**: A test that checks your heart's electrical signals.
- **Echocardiogram**: An ultrasound of the heart that helps evaluate how well it's pumping.
- **Stress tests, CT scans, and MRIs** may also be used depending on symptoms.

Once a diagnosis is made, cardiologists might prescribe medications, recommend lifestyle changes, or in more severe cases, refer patients to **cardiothoracic surgeons**.

## Types of Cardiologists

Cardiology has many sub-specialties. Some of the most common include:

- **Pediatric Cardiologists**: Focused on heart conditions in children, including congenital heart defects.
- **Interventional Cardiologists**: Perform minimally invasive procedures like angioplasty using catheters.
- **Clinical Cardiologists**: Deal with diagnosis and ongoing treatment of heart disease.
- **Heart Failure Specialists**: Treat patients with weakened heart function.
- **Cardio-Oncologists**: Manage heart complications from cancer treatments.
- **Congenital Heart Specialists**: Focus on birth defects in the heart.
- **Cardiac Imaging Specialists**: Use advanced imaging tools to assess heart function.

## The Long Road to Becoming a Cardiologist

Becoming a board-certified cardiologist requires **at least 10 years** of post-secondary education:

1. **4 years of medical school**
2. **3 years of internal medicine residency**
3. **3 years of cardiology fellowship**
4. **Passing the Cardiovascular Disease Exam** by the American Board of Internal Medicine (ABIM)

## A Real-World Innovation: The Super GACHON Technique

Cardiologists don't just treat—they innovate. A recent case involved a man with a dangerous leg clot. Traditional clot-removal methods failed, so doctors invented a novel approach called the **"Super Grab A Clot and Hold ON (Super GACHON)"** technique to save the patient's limb. This highlights how cardiologists continuously develop **new techniques** to tackle complex cases.

## Conclusion

Cardiologists are essential to maintaining cardiovascular health. From diagnosing early-stage hypertension to performing life-saving interventions, they blend **advanced technology** with a **deep understanding of heart physiology**. With new innovations emerging regularly, cardiology remains a dynamic and vital field in modern medicine.
  `,
  coverImage: "/cardiologists.jpg",
  date: "February 20, 2025",
  author: authors["shaza-ali"],
  topic: "Doctors",
  readingTime: "5 min read",
  featured: false
},
  {
  slug: "understanding-hepatology",
  title: "Understanding Hepatology",
  excerpt:
    "Explore what hepatologists do, what conditions they treat, and how integrative approaches like Ayurveda may help manage chronic liver conditions.",
  content: `
## What Conditions Does a Hepatologist Treat?

A hepatologist is a medical specialist who focuses on diagnosing and treating diseases related to the **liver, gallbladder, bile ducts, and pancreas**. A healthcare provider may refer patients for conditions such as:

- **Viral hepatitis** (B or C)
- **Alcohol-induced hepatitis and steatohepatitis**
- **Non-alcoholic fatty liver disease (NAFLD)**
- **Cholestasis**
- **Biliary stricture**
- **Primary sclerosing cholangitis**
- **Primary biliary cholangitis**
- **Bile duct cancer**



## Education and Training of a Hepatologist

Becoming a hepatologist requires extensive medical training:

1. **4 years** in medical school (MD or DO)
2. **3 years** of internal medicine residency
3. **3 years** of gastroenterology fellowship
4. **1 year** advanced transplant hepatology fellowship *or* a **combined 3-year program**
5. Certification by the **American Board of Internal Medicine**



## Case Study: Integrative Ayurveda Treatment for Liver Cirrhosis

Liver cirrhosis causes scarring in liver tissue, and reversing it with conventional medicine is difficult. A study explored **Ayurveda**, a traditional Indian healing system, in managing this condition.

Three patients with **decompensated liver cirrhosis** received:

- Internal Ayurvedic medications
- **Panchakarma therapy** (detox and rejuvenation)
- Special diets with **salt and fluid control**

All three reported:

- Improved **quality of life**
- Less **abdominal pain**
- Reduced **fatigue and swelling**
- Better **liver function test results**

While cirrhosis may not be fully reversible, this case suggests fibrosis may improve when **Ayurvedic treatment is combined with modern monitoring**.



## Conclusion

**Hepatology** addresses some of the most critical health challenges involving the liver and digestive system. As research grows and integrative approaches like Ayurveda gain visibility, hepatologists are at the forefront of both innovation and patient care. With continued study, novel therapies could reshape how we approach chronic liver disease.
  `,
  coverImage: "/hepatology-cover.jpg", 
  date: "February 16, 2025",
  author: authors["muhammad-lari"],
  topic: "Doctors",
  readingTime: "4 min read",
  featured: false
},
  
]

// Helper functions
export const getPostsByTopic = (topic: string): BlogPost[] => {
  return blogPosts.filter((post) => post.topic === topic)
}

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter((post) => post.featured)
}

export const getRecentPosts = (count = 3): BlogPost[] => {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count)
}

export const getRelatedPosts = (currentSlug: string, count = 3): BlogPost[] => {
  const currentPost = blogPosts.find((post) => post.slug === currentSlug)
  if (!currentPost) return []

  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.topic === currentPost.topic)
    .sort(() => 0.5 - Math.random())
    .slice(0, count)
}
