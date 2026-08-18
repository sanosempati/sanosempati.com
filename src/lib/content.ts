export const site = {
  name: "Sano Sempati",
  nameCompact: "SANOSEMPATI",
  title: "Sano Sempati – Product Manager | Assessment tools for HR & talent",
  description:
    "Product Manager at Talentlytica. Building HR assessment products with data, design, and GenAI — LLM, RAG, and GraphRAG.",
  location: "Lombok, Indonesia",
  email: "sanosempati@gmail.com",
  phone: "+62 877 7566 7704",
  instagram: "https://www.instagram.com/sanosempati/",
  linkedin: "https://www.linkedin.com/in/sanosempati",
  year: 2026,
};

export const navLinks = [
  { href: "#pengalaman", label: "Experience" },
  { href: "#proyek", label: "Projects" },
  { href: "#speaking", label: "Speaking" },
  { href: "#tulisan", label: "Writings" },
  { href: "#skill", label: "Skills" },
  { href: "#sertifikat", label: "Certificates" },
];

export const hero = {
  role: "Product Manager",
  company: "Talentlytica",
  bio: "Hi, I'm Sano.\n\nFor 6+ years, I’ve been working remotely as a Product Manager at PT Global Talentlytica Indonesia, helping companies make strategic talent decisions through data, analytics, and technology.\n\nPassionate about AI, UX design, and modern tech, I constantly apply cutting-edge tools to real-world workflows. Beyond my main role, I collaborate with businesses on side projects—building high-converting company profile websites, hosting practical AI & product workshops, and helping teams innovate and scale faster.",
  cta: "Get in touch",
  linkedinCta: "View LinkedIn",
  backgroundImage: "/hero-background.png",
  facts: [
    { label: "Role", value: "Product Manager" },
    { label: "Company", value: "Talentlytica" },
    { label: "Since", value: "Jan 2021" },
  ],
};

export const speakingIntro = {
  label: "speaking",
  heading: "Talks and sessions I've led.",
  description:
    "I speak at events and workshops on practical AI integration, product management workflows, and remote team execution.",
};

export type SpeakingItem = {
  title: string;
  subtitle: string;
  year: string;
  org: string;
  domain?: string;
  badge?: string;
  image?: string;
  url?: string;
};

export const speaking: SpeakingItem[] = [
  {
    title:
      "Graph-Based Customer Insights for Product Decision-Making",
    subtitle: "RevoU AI Community",
    year: "2026",
    org: "RevoU AI Community",
    domain: "revou.co",
    image: "/speaking/revou-graph-customer-insights.png",
  },
  {
    title:
      "Bikin Slidedeck Sat-Set Pakai AI: Dari Teori ke Praktek Bareng Gemini & NotebookLM",
    subtitle: "Taman Mini Indonesia Indah",
    year: "2026",
    org: "Taman Mini Indonesia Indah (TMII)",
    domain: "tamanmini.com",
    image: "/speaking/tmii-slidedeck-ai.png",
  },
];

export const writings = {
  label: "writings",
  heading: "Notes from Medium.",
  viewAll: "View on Medium",
  empty: "No writing is available to display yet.",
};

export const experienceIntro = {
  label: "experience",
  heading: "Where I've worked so far.",
};

export const experience = [
  {
    role: "Product Manager",
    org: "Talentlytica",
    domain: "talentlytica.com",
    badge: "talentlytica",
    period: "Jan 2021 — present",
    summary:
      "Orchestrating the product team to stay aligned with company goals. Building assessment tools for talent decisions — from hiring and development to promotion — for 100+ companies.",
  },
  {
    role: "UX Designer",
    org: "Talentlytica",
    domain: "talentlytica.com",
    badge: "talentlytica",
    period: "Oct 2019 — Dec 2020",
    summary:
      "Designed admin dashboard UI, redesigned talentlytica.com, collaborated cross-functionally on flows and design insights, and prototyped VANIA (Virtual Assistant & Integration Assessment).",
  },
  {
    role: "UI/UX Design",
    org: "PT Gagas Daya Imaji",
    domain: "gagasimaji.com",
    badge: "gagas-daya-imaji",
    period: "Sep 2018 — Aug 2019",
    summary:
      "User interface development for Mayora banking pages: designing screens, gathering insights, and helping communicate design decisions to the team.",
  },
  {
    role: "UI UX Engineer",
    org: "PT NMx Indonesia",
    domain: "qiu.id",
    badge: "nmx-indonesia",
    period: "Aug 2017 — Mar 2018",
    summary:
      "Designed QIU app UI for iOS and Android, UX analysis, test scenario and bug documentation, QIU website (HTML/CSS/JS), and admin panel with Vue.",
  },
  {
    role: "Web Designer",
    org: "UKMSISTEM",
    domain: "ukmsistem.id",
    badge: "ukmsistem",
    period: "2016 — 2017",
    summary:
      "Designed ukmsistem.id, ERP app UI, business flows, and marketing kits for SMEs.",
  },
];

export const projects = [
  {
    title: "PT Omnitera Indonesia",
    subtitle: "Web Company Profile",
    year: "2026",
    url: "https://www.omnitera.co.id/",
    domain: "omnitera.co.id",
    badge: "omnitera",
    image: "/projects/omnitera.png",
  },
  {
    title: "PT Sonar Nusantara Indonesia",
    subtitle: "Web Company Profile",
    year: "2026",
    url: "https://www.sonar-nusantara.co.id/",
    domain: "sonar-nusantara.co.id",
    badge: "sonar-nusantara",
    image: "/projects/sonar-nusantara-2026.png",
  },
  {
    title: "PT ATS Subsea Indonesia",
    subtitle: "Web Company Profile",
    year: "2026",
    url: "https://www.atssubsea.co.id/",
    domain: "atssubsea.co.id",
    badge: "ats-subsea",
    image: "/projects/ats-subsea.png",
  },
  {
    title: "PT Atlantis Subsea Indonesia",
    subtitle: "Web Company Profile",
    year: "2021",
    url: "http://atlantissubsea.com/",
    domain: "atlantissubsea.com",
    badge: "atlantis-subsea",
    image: "/projects/atlantis-subsea.png",
  },
  {
    title: "PT Armada Gema Nusantara",
    subtitle: "Web Company Profile",
    year: "2022",
    url: "https://www.armadagemanusantara.co.id/",
    domain: "armadagemanusantara.co.id",
    badge: "armada-gema",
    image: "/projects/armada-gema-nusantara.png",
  },
  {
    title: "PT Kompas Navigasi Indonesia",
    subtitle: "Web Company Profile",
    year: "2021",
    domain: "kompasnavigasi.co.id",
    badge: "kompas-navigasi",
    image: "/projects/kompas-navigasi.png",
  },
  {
    title: "PT Sonar Nusantara Indonesia v.1",
    subtitle: "Web Company Profile",
    year: "2021",
    domain: "sonar-nusantara.co.id",
    badge: "sonar-nusantara",
    image: "/projects/sonar-nusantara-2023.png",
  },
  {
    title: "PT Georama Karya Indonesia",
    subtitle: "Web Company Profile",
    year: "2021",
    domain: "georama.co.id",
    badge: "georama",
    image: "/projects/georama.png",
  },
  {
    title: "PT Asia Sinergi Solusindo",
    subtitle: "Web Company Profile",
    year: "2023",
    url: "https://www.assindo.co.id/",
    domain: "assindo.co.id",
    badge: "assindo",
    image: "/projects/assindo.png",
  },
  {
    title: "PT Insan Teknologi Semesta",
    subtitle: "Web Company Profile",
    year: "2023",
    url: "https://its.co.id/",
    domain: "its.co.id",
    badge: "its",
    image: "/projects/insan.png",
  },
  {
    title: "PT Karya Inovasi Sakti",
    subtitle: "Web Company Profile",
    year: "2023",
    url: "https://www.karyainovasisakti.co.id/",
    domain: "karyainovasisakti.co.id",
    badge: "karya-inovasi-sakti",
    image: "/projects/karya-inovasi-sakti.png",
  },
  {
    title: "Bank Mayora",
    subtitle: "UI / UX Design Mobile Banking Feat Gagas Daya Imaji",
    year: "2020",
    domain: "bankmayora.com",
    badge: "bank-mayora",
    image: "/projects/bank-mayora.png",
  },
  {
    title: "Local Sayur",
    subtitle: "Design Icon",
    year: "2019",
    domain: "lokalsayur.com",
    badge: "lokal-sayur",
    image: "/projects/lokal-sayur.png",
  },
  {
    title: "Sakura Manggarai",
    subtitle: "Design Mascot & Brand Guideline",
    year: "2019",
    domain: "sakura-hotel.com",
    badge: "sakura-manggarai",
    image: "/projects/sakura-manggarai.png",
  },
];

export const skillsIntro = {
  label: "skills",
  heading: "What I work on day to day.",
  graphHint: "A visual map of the tools, systems, and domains I work across.",
  listHint: "A closer look at the areas I work across.",
};

export const skills = [
  {
    group: "Product Management & Strategy",
    graphLabel: "Product",
    summary:
      "RICE, STP, cost-benefit analysis, end-to-end product strategy, discovery, and innovative HR solutions.",
    items: [
      "RICE",
      "STP",
      "Cost-benefit",
      "Product strategy",
      "Product discovery",
      "HR tech",
    ],
  },
  {
    group: "AI & GenAI Engineering",
    graphLabel: "GenAI",
    summary:
      "Intelligent agents, agentic workflows, RAG, LLM, API integration, and advanced prompting.",
    items: ["LLM", "RAG", "AI agents", "Agentic workflows", "Prompting", "API"],
  },
  {
    group: "Database & Knowledge Representation",
    graphLabel: "Graph DB",
    summary:
      "Graph databases, Neo4j, Cypher queries, GraphRAG, and knowledge graphs.",
    items: ["Neo4j", "Cypher", "GraphRAG", "Knowledge graphs"],
  },
  {
    group: "Full-Stack & Technical Building",
    graphLabel: "Build",
    summary: "Vercel, Supabase, n8n, Webflow, CMS, and domain management.",
    items: ["Vercel", "Supabase", "n8n", "Webflow", "Next.js"],
  },
  {
    group: "Domain Expertise",
    graphLabel: "Domain",
    summary:
      "Deep experience in HR technology, assessment frameworks, and B2B markets.",
    items: ["HR Tech", "Assessment Framework", "B2B Field"],
  },
];

export const certificatesIntro = {
  label: "certificates",
  heading: "Learning I've completed.",
};

export const certificates = [
  {
    title: "Neo4j & GenerativeAI Fundamentals",
    issuer: "Neo4j",
    issueDate: "Nov 2025",
    credentialId: "f6ce0ff9-b4c6-48a1-a1a1-996801fb9356",
    credentialUrl: "https://www.linkedin.com/in/sanosempati/details/certifications/",
    skills: ["GraphRAG", "Knowledge Graphs"],
  },
  {
    title: "Neo4j Fundamentals",
    issuer: "Neo4j",
    issueDate: "Oct 2025",
    credentialId: "bbf7af71-5c6d-4fdc-a730-8feee139c3f7",
    credentialUrl: "https://www.linkedin.com/in/sanosempati/details/certifications/",
    skills: ["Retrieval-Augmented Generation (RAG)", "GraphRAG"],
  },
  {
    title: "Build and Deploy an Agent with Reasoning Engine in Vertex AI",
    issuer: "Coursera",
    issueDate: "Feb 2025",
    credentialId: "ZF1V6L4QC2QS",
    credentialUrl: "https://www.linkedin.com/in/sanosempati/details/certifications/",
    skills: ["Artificial Intelligence (AI)", "GenAI"],
  },
  {
    title: "Artificial Intelligence Micro-Certification (AIC)™️",
    issuer: "Product School",
    issueDate: "Nov 2024",
    credentialId: "cert_3xq76d07",
    credentialUrl: "https://www.linkedin.com/in/sanosempati/details/certifications/",
    skills: [],
  },
  {
    title: "Google Cloud GenAI Hackathon APAC Edition 2024",
    issuer: "Hack2skill",
    issueDate: "Jun 2024",
    credentialId: "2024H2S02GENAI-E00148",
    credentialUrl: "https://www.linkedin.com/in/sanosempati/details/certifications/",
    skills: ["Artificial Intelligence (AI)", "GenAI"],
    description:
      "Achieved Top 59 in The Google Cloud GenAI Hackathon APAC Edition 2024. Represented Indonesia in the APAC-wide competition, presenting the idea 'AI Buddy,' an AI that actively listens, offers insightful advice, and empowers users (employees) to elevate their communication skills and overall effectiveness in their workplace.",
  },
  {
    title: "Product Discovery Micro-Certification (PDC)™️",
    issuer: "Product School",
    issueDate: "Nov 2024",
    credentialId: "cert_p0x4005v",
    credentialUrl: "https://www.linkedin.com/in/sanosempati/details/certifications/",
    skills: ["Design Thinking", "Product Strategy"],
  },
  {
    title: "Product Discovery Workshop",
    issuer: "Crafters",
    issueDate: "Jul 2023",
    credentialUrl: "https://www.linkedin.com/in/sanosempati/details/certifications/",
    skills: ["Communication", "Product Design"],
  },
  {
    title: "Full Stack Product Management",
    issuer: "RevoU",
    issueDate: "Aug 2022",
    credentialUrl: "https://www.linkedin.com/in/sanosempati/details/certifications/",
    skills: [],
  },
  {
    title: "SQL Fundamentals",
    issuer: "Gunadarma University",
    issueDate: "Jan 2015",
    credentialId: "IZO-051 : SQL Fundamentals",
    skills: [],
  },
  {
    title: "Introduction Oracle Report",
    issuer: "Gunadarma University",
    issueDate: "Mar 2013",
    skills: [],
  },
];

export const contact = {
  footerCta: "Want to chat, collaborate, or just say hi? Send a message.",
  whatsappIntro: "Hi Sano, I'd like to connect with you.",
};
