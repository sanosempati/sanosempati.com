import { L, type Bilingual } from "./i18n";

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

export const ui = {
  link: L("Link", "Tautan"),
  page: L("Page", "Halaman"),
  of: L("of", "dari"),
  phone: L("Phone", "Telepon"),
  email: L("E-Mail", "Email"),
  social: L("Social", "Sosial"),
  graph: L("Graph", "Grafik"),
  list: L("List", "Daftar"),
  present: L("present", "sekarang"),
};

export const navLinks: { href: string; label: Bilingual }[] = [
  { href: "#pengalaman", label: L("Experience", "Pengalaman") },
  { href: "#proyek", label: L("Projects", "Proyek") },
  { href: "#speaking", label: L("Speaking", "Pembicara") },
  { href: "#tulisan", label: L("Writings", "Tulisan") },
  { href: "#skill", label: L("Skills", "Keahlian") },
  { href: "#sertifikat", label: L("Certificates", "Sertifikat") },
];

export const hero = {
  role: L("Product Manager", "Product Manager"),
  company: "Talentlytica",
  companyUrl: "http://talentlytica.com/",
  bio: L(
    "Hi, I'm Sano.\n\nFor 6+ years, I’ve been working remotely as a Product Manager at Talentlytica, helping companies make strategic talent decisions through data, analytics, and technology.\n\nPassionate about AI, Design Interaction, and Modern Tech, I constantly apply cutting-edge tools to real-world workflows. Beyond my main role, I collaborate with businesses on side projects—building high-converting company profile websites, hosting practical AI & product workshops, and helping teams innovate and scale faster.",
    "Hai, saya Sano.\n\nSelama 6+ tahun, saya bekerja remote sebagai Product Manager di Talentlytica, membantu perusahaan mengambil keputusan talenta strategis lewat data, analitik, dan teknologi.\n\nBersemangat pada AI, Design Interaction, dan Modern Tech, saya terus menerapkan tools mutakhir ke workflow nyata. Di luar peran utama, saya kolaborasi dengan bisnis untuk side project—membangun website company profile, mengadakan workshop AI & product, dan membantu tim berinovasi lebih cepat.",
  ),
  cta: L("Get in touch", "Hubungi saya"),
  linkedinCta: L("View LinkedIn", "Lihat LinkedIn"),
  backgroundImage: "/hero-background.png",
  facts: [
    { label: L("Role", "Peran"), value: "Product Manager" },
    { label: L("Company", "Perusahaan"), value: "Talentlytica" },
    { label: L("Since", "Sejak"), value: "Jan 2021" },
  ],
};

export const speakingIntro = {
  label: L("speaking", "pembicara"),
  heading: L("Talks and sessions I've led.", "Sesi dan panggung yang pernah saya isi."),
  description: L(
    "I speak at events and workshops on practical AI integration, product management workflows, and remote team execution.",
    "Saya berbicara di event dan workshop tentang integrasi AI praktis, workflow product management, dan eksekusi tim remote.",
  ),
};

export type SpeakingItem = {
  title: Bilingual | string;
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
    title: L(
      "Graph-Based Customer Insights for Product Decision-Making",
      "Graph-Based Customer Insights untuk Keputusan Produk",
    ),
    subtitle: "RevoU AI Community",
    year: "2026",
    org: "RevoU AI Community",
    domain: "revou.co",
    image: "/speaking/revou-graph-customer-insights.png",
  },
  {
    title: L(
      "Create Slide Decks Fast with AI: From Theory to Practice with Gemini & NotebookLM",
      "Bikin Slidedeck Sat-Set Pakai AI: Dari Teori ke Praktek Bareng Gemini & NotebookLM",
    ),
    subtitle: "Taman Mini Indonesia Indah",
    year: "2026",
    org: "Taman Mini Indonesia Indah (TMII)",
    domain: "tamanmini.com",
    image: "/speaking/tmii-slidedeck-ai.png",
  },
];

export const writings = {
  label: L("writings", "tulisan"),
  heading: L("Notes from Medium.", "Catatan dari Medium."),
  viewAll: L("View on Medium", "Lihat di Medium"),
  empty: L(
    "No writing is available to display yet.",
    "Belum ada tulisan yang bisa ditampilkan.",
  ),
};

export const experienceIntro = {
  label: L("experience", "pengalaman"),
  heading: L("Where I've worked so far.", "Perjalanan kerja sejauh ini."),
};

export const projectsIntro = {
  label: L("projects", "proyek"),
};

export const experience = [
  {
    role: L("Product Manager", "Product Manager"),
    org: "Talentlytica",
    domain: "talentlytica.com",
    badge: "talentlytica",
    period: L("Jan 2021 — present", "Jan 2021 — sekarang"),
    summary: L(
      "Orchestrating the product team to stay aligned with company goals. Building assessment tools for talent decisions — from hiring and development to promotion — for 100+ companies.",
      "Mengorkestrasi tim produk agar selaras dengan tujuan perusahaan. Membangun tools asesmen untuk keputusan talent — dari rekrutmen, development, hingga promosi — untuk 100+ perusahaan.",
    ),
  },
  {
    role: L("UX Designer", "UX Designer"),
    org: "Talentlytica",
    domain: "talentlytica.com",
    badge: "talentlytica",
    period: L("Oct 2019 — Dec 2020", "Okt 2019 — Des 2020"),
    summary: L(
      "Designed admin dashboard UI, redesigned talentlytica.com, collaborated cross-functionally on flows and design insights, and prototyped VANIA (Virtual Assistant & Integration Assessment).",
      "Merancang UI dashboard admin, meredesain talentlytica.com, berkolaborasi lintas tim untuk alur dan insight desain, serta memprototipe VANIA (Virtual Assistant & Integration Assessment).",
    ),
  },
  {
    role: L("UI/UX Design", "UI/UX Design"),
    org: "PT Gagas Daya Imaji",
    domain: "gagasimaji.com",
    badge: "gagas-daya-imaji",
    period: L("Sep 2018 — Aug 2019", "Sep 2018 — Agu 2019"),
    summary: L(
      "User interface development for Mayora banking pages: designing screens, gathering insights, and helping communicate design decisions to the team.",
      "Pengembangan antarmuka untuk halaman perbankan Mayora: merancang tampilan, menggali insight, dan membantu komunikasi keputusan desain ke tim.",
    ),
  },
  {
    role: L("UI UX Engineer", "UI UX Engineer"),
    org: "PT NMx Indonesia",
    domain: "qiu.id",
    badge: "nmx-indonesia",
    period: L("Aug 2017 — Mar 2018", "Agu 2017 — Mar 2018"),
    summary: L(
      "Designed QIU app UI for iOS and Android, UX analysis, test scenario and bug documentation, QIU website (HTML/CSS/JS), and admin panel with Vue.",
      "Merancang UI aplikasi QIU di iOS dan Android, analisis UX, dokumentasi skenario uji dan bug, website QIU (HTML/CSS/JS), serta admin panel dengan Vue.",
    ),
  },
  {
    role: L("Web Designer", "Web Designer"),
    org: "UKMSISTEM",
    domain: "ukmsistem.id",
    badge: "ukmsistem",
    period: L("2016 — 2017", "2016 — 2017"),
    summary: L(
      "Designed ukmsistem.id, ERP app UI, business flows, and marketing kits for SMEs.",
      "Merancang ukmsistem.id, UI aplikasi ERP, alur bisnis, dan marketing kit untuk UKM.",
    ),
  },
];

const projectsData = [
  {
    title: "PT Omnitera Indonesia",
    subtitle: L("Web Company Profile", "Website Profil Perusahaan"),
    year: "2026",
    url: "https://www.omnitera.co.id/",
    domain: "omnitera.co.id",
    badge: "omnitera",
    image: "/projects/omnitera.png",
  },
  {
    title: "PT Sonar Nusantara Indonesia",
    subtitle: L("Web Company Profile", "Website Profil Perusahaan"),
    year: "2026",
    url: "https://www.sonar-nusantara.co.id/",
    domain: "sonar-nusantara.co.id",
    badge: "sonar-nusantara",
    image: "/projects/sonar-nusantara-2026.png",
  },
  {
    title: "PT ATS Subsea Indonesia",
    subtitle: L("Web Company Profile", "Website Profil Perusahaan"),
    year: "2026",
    url: "https://www.atssubsea.co.id/",
    domain: "atssubsea.co.id",
    badge: "ats-subsea",
    image: "/projects/ats-subsea.png",
  },
  {
    title: "PT Atlantis Subsea Indonesia",
    subtitle: L("Web Company Profile", "Website Profil Perusahaan"),
    year: "2021",
    url: "http://atlantissubsea.com/",
    domain: "atlantissubsea.com",
    badge: "atlantis-subsea",
    image: "/projects/atlantis-subsea.png",
  },
  {
    title: "PT Armada Gema Nusantara",
    subtitle: L("Web Company Profile", "Website Profil Perusahaan"),
    year: "2022",
    url: "https://www.armadagemanusantara.co.id/",
    domain: "armadagemanusantara.co.id",
    badge: "armada-gema",
    image: "/projects/armada-gema-nusantara.png",
  },
  {
    title: "PT Kompas Navigasi Indonesia",
    subtitle: L("Web Company Profile", "Website Profil Perusahaan"),
    year: "2021",
    domain: "kompasnavigasi.co.id",
    badge: "kompas-navigasi",
    image: "/projects/kompas-navigasi.png",
  },
  {
    title: "PT Sonar Nusantara Indonesia v.1",
    subtitle: L("Web Company Profile", "Website Profil Perusahaan"),
    year: "2021",
    domain: "sonar-nusantara.co.id",
    badge: "sonar-nusantara",
    image: "/projects/sonar-nusantara-2023.png",
  },
  {
    title: "PT Georama Karya Indonesia",
    subtitle: L("Web Company Profile", "Website Profil Perusahaan"),
    year: "2021",
    domain: "georama.co.id",
    badge: "georama",
    image: "/projects/georama.png",
  },
  {
    title: "PT Asia Sinergi Solusindo",
    subtitle: L("Web Company Profile", "Website Profil Perusahaan"),
    year: "2023",
    url: "https://www.assindo.co.id/",
    domain: "assindo.co.id",
    badge: "assindo",
    image: "/projects/assindo.png",
  },
  {
    title: "PT Insan Teknologi Semesta",
    subtitle: L("Web Company Profile", "Website Profil Perusahaan"),
    year: "2023",
    url: "https://its.co.id/",
    domain: "its.co.id",
    badge: "its",
    image: "/projects/insan.png",
  },
  {
    title: "PT Karya Inovasi Sakti",
    subtitle: L("Web Company Profile", "Website Profil Perusahaan"),
    year: "2023",
    url: "https://www.karyainovasisakti.co.id/",
    domain: "karyainovasisakti.co.id",
    badge: "karya-inovasi-sakti",
    image: "/projects/karya-inovasi-sakti.png",
  },
  {
    title: "Bank Mayora",
    subtitle: L(
      "UI / UX Design Mobile Banking Feat Gagas Daya Imaji",
      "Desain UI/UX Mobile Banking feat Gagas Daya Imaji",
    ),
    year: "2020",
    domain: "bankmayora.com",
    badge: "bank-mayora",
    image: "/projects/bank-mayora.png",
  },
  {
    title: "Local Sayur",
    subtitle: L("Design Icon", "Desain Ikon"),
    year: "2019",
    domain: "lokalsayur.com",
    badge: "lokal-sayur",
    image: "/projects/lokal-sayur.png",
  },
  {
    title: "Sakura Manggarai",
    subtitle: L("Design Mascot & Brand Guideline", "Desain Maskot & Brand Guideline"),
    year: "2019",
    domain: "sakura-hotel.com",
    badge: "sakura-manggarai",
    image: "/projects/sakura-manggarai.png",
  },
];

export const projects = [...projectsData].sort(
  (a, b) => Number(b.year) - Number(a.year),
);

export const skillsIntro = {
  label: L("skills", "keahlian"),
  heading: L("What I work on day to day.", "Yang saya kerjakan sehari-hari."),
  graphHint: L(
    "A visual map of the tools, systems, and domains I work across.",
    "Peta visual tools, sistem, dan domain yang saya kuasai.",
  ),
  listHint: L(
    "A closer look at the areas I work across.",
    "Ringkasan area keahlian yang saya garap.",
  ),
};

export const skills = [
  {
    group: L("Product Management & Strategy", "Product Management & Strategi"),
    graphLabel: "Product",
    summary: L(
      "RICE, STP, cost-benefit analysis, end-to-end product strategy, discovery, and innovative HR solutions.",
      "RICE, STP, analisis cost-benefit, strategi produk end-to-end, discovery, dan solusi HR inovatif.",
    ),
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
    group: L("AI & GenAI Engineering", "AI & GenAI Engineering"),
    graphLabel: "GenAI",
    summary: L(
      "Intelligent agents, agentic workflows, RAG, LLM, API integration, and advanced prompting.",
      "Intelligent agents, agentic workflows, RAG, LLM, integrasi API, dan advanced prompting.",
    ),
    items: ["LLM", "RAG", "AI agents", "Agentic workflows", "Prompting", "API"],
  },
  {
    group: L("Database & Knowledge Representation", "Database & Knowledge Representation"),
    graphLabel: "Graph DB",
    summary: L(
      "Graph databases, Neo4j, Cypher queries, GraphRAG, and knowledge graphs.",
      "Graph database, Neo4j, query Cypher, GraphRAG, dan knowledge graph.",
    ),
    items: ["Neo4j", "Cypher", "GraphRAG", "Knowledge graphs"],
  },
  {
    group: L("Full-Stack & Technical Building", "Full-Stack & Technical Building"),
    graphLabel: "Build",
    summary: L(
      "Vercel, Supabase, n8n, Webflow, CMS, and domain management.",
      "Vercel, Supabase, n8n, Webflow, CMS, dan domain management.",
    ),
    items: ["Vercel", "Supabase", "n8n", "Webflow", "Next.js"],
  },
  {
    group: L("Domain Expertise", "Domain Expertise"),
    graphLabel: "Domain",
    summary: L(
      "Deep experience in HR technology, assessment frameworks, and B2B markets.",
      "Pengalaman mendalam di HR technology, assessment framework, dan pasar B2B.",
    ),
    items: ["HR Tech", "Assessment Framework", "B2B Field"],
  },
];

export const certificatesIntro = {
  label: L("certificates", "sertifikat"),
  heading: L("Learning I've completed.", "Belajar yang sudah saya selesaikan."),
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
    description: L(
      "Achieved Top 59 in The Google Cloud GenAI Hackathon APAC Edition 2024. Represented Indonesia in the APAC-wide competition, presenting the idea 'AI Buddy,' an AI that actively listens, offers insightful advice, and empowers users (employees) to elevate their communication skills and overall effectiveness in their workplace.",
      "Meraih Top 59 di Google Cloud GenAI Hackathon APAC Edition 2024. Mewakili Indonesia dalam kompetisi APAC, mempresentasikan ide 'AI Buddy'—AI yang mendengarkan, memberi saran, dan membantu pengguna (karyawan) meningkatkan komunikasi dan efektivitas di tempat kerja.",
    ),
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
  footerCta: L(
    "Want to chat, collaborate, or just say hi? Send a message.",
    "Mau ngobrol, kolaborasi, atau sekadar menyapa? Kirim pesan.",
  ),
  whatsappIntro: "Hi Sano, I'd like to connect with you.",
};
