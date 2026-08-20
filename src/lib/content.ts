import { L, type Bilingual } from "./i18n";

export const site = {
  name: "Sano Sempati",
  nameCompact: "SANOSEMPATI",
  title: "Sano Sempati – Product Manager | Assessment tools for HR & talent",
  description:
    "Product Manager at Talentlytica. Building HR assessment products with data, design, and GenAI — LLM, RAG, and GraphRAG.",
  location: "Lombok, Indonesia",
  email: "sanosempati@gmail.com",
  phone: "+62 851 5543 6708",
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

/** Product Manager role at Talentlytica, used to compute the live "X+" years copy. */
export const productManagerStart = { year: 2021, month: 1 } as const;

export function yearsAsProductManager(now = new Date()) {
  const startMonthIndex = productManagerStart.month - 1;
  let years = now.getFullYear() - productManagerStart.year;
  if (now.getMonth() < startMonthIndex) years -= 1;
  return Math.max(1, years);
}

export const hero = {
  role: L("Product Manager", "Product Manager"),
  company: "Talentlytica",
  companyUrl: "http://talentlytica.com/",
  bio: L(
    "Hi, I'm Sano.\n\nFor {years}+ years, I’ve been working remotely as a Product Manager at Talentlytica, helping companies make strategic talent decisions through data, analytics, and technology.\n\nPassionate about AI, Design Interaction, and Modern Tech, I constantly apply cutting-edge tools to real-world workflows. Beyond my main role, I collaborate with businesses on side projects—building high-converting company profile websites, hosting practical AI & product workshops, and helping teams innovate and scale faster.",
    "Hai, saya Sano.\n\nSelama {years}+ tahun, saya bekerja remote sebagai Product Manager di Talentlytica, membantu perusahaan mengambil keputusan talenta strategis lewat data, analitik, dan teknologi.\n\nBersemangat pada AI, Design Interaction, dan Modern Tech, saya terus menerapkan tools mutakhir ke workflow nyata. Di luar peran utama, saya kolaborasi dengan bisnis untuk side project—membangun website company profile, mengadakan workshop AI & product, dan membantu tim berinovasi lebih cepat.",
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
    role: L("UI UX Designer", "UI UX Designer"),
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

export type SkillItem = {
  id: string;
  label: Bilingual;
  graphLabel?: string;
  relatedCertificates?: string[];
};

export type SkillGroup = {
  group: Bilingual;
  graphLabel: string;
  summary: Bilingual;
  items: SkillItem[];
};

export const skills: SkillGroup[] = [
  {
    group: L("Product Management & Strategy", "Product Management & Strategi"),
    graphLabel: "Product",
    summary: L(
      "Product strategy, discovery, AIPM, stakeholder management, and project management — from RICE and STP through design and process improvement.",
      "Strategi produk, discovery, AIPM, manajemen stakeholder, dan manajemen proyek — dari RICE dan STP sampai desain dan perbaikan proses.",
    ),
    items: [
      {
        id: "product-management",
        label: L("Product Management", "Product Management"),
        graphLabel: "PM",
      },
      {
        id: "stakeholder-management",
        label: L("Stakeholder Management", "Manajemen Stakeholder"),
        graphLabel: "Stakeholders",
      },
      {
        id: "product-strategy",
        label: L("Product Strategy", "Product Strategy"),
        graphLabel: "Strategy",
        relatedCertificates: [
          "Product Discovery Workshop",
          "Product Discovery Micro-Certification (PDC)™️",
        ],
      },
      {
        id: "product-design",
        label: L("Product Design", "Product Design"),
        graphLabel: "Product design",
        relatedCertificates: ["Product Discovery Workshop"],
      },
      {
        id: "product-development",
        label: L("Product Development", "Pengembangan Produk"),
        relatedCertificates: [
          "Product Discovery Micro-Certification (PDC)™️",
        ],
      },
      {
        id: "product-discovery",
        label: L("Product discovery", "Product discovery"),
        graphLabel: "Discovery",
      },
      {
        id: "aipm",
        label: L("AIPM", "AIPM"),
        graphLabel: "AIPM",
        relatedCertificates: [
          "Google Cloud GenAI Hackathon APAC Edition 2024",
        ],
      },
      {
        id: "project-management",
        label: L("Project Management", "Manajemen Proyek"),
        graphLabel: "Projects",
      },
      {
        id: "creative-problem-solving",
        label: L("Creative Problem Solving", "Pemecahan Masalah Kreatif"),
      },
      {
        id: "business-process-improvement",
        label: L(
          "Business Process Improvement",
          "Perbaikan Proses Bisnis",
        ),
      },
      {
        id: "communication",
        label: L("Communication", "Komunikasi"),
        relatedCertificates: ["Product Discovery Workshop"],
      },
      { id: "rice", label: L("RICE", "RICE") },
      { id: "stp", label: L("STP", "STP") },
      {
        id: "cost-benefit",
        label: L("Cost-benefit", "Analisis cost-benefit"),
      },
    ],
  },
  {
    group: L("AI & GenAI Engineering", "AI & GenAI Engineering"),
    graphLabel: "GenAI",
    summary: L(
      "AI and GenAI work: LLMs, RAG, agents, prompting, and API integration.",
      "Kerja AI dan GenAI: LLM, RAG, agent, prompting, dan integrasi API.",
    ),
    items: [
      {
        id: "artificial-intelligence",
        label: L(
          "Artificial Intelligence (AI)",
          "Kecerdasan Buatan (AI)",
        ),
        graphLabel: "AI",
        relatedCertificates: [
          "Google Cloud GenAI Hackathon APAC Edition 2024",
          "Build and Deploy an Agent with Reasoning Engine in Vertex AI",
        ],
      },
      {
        id: "genai",
        label: L("GenAI", "GenAI"),
        graphLabel: "GenAI",
        relatedCertificates: [
          "Google Cloud GenAI Hackathon APAC Edition 2024",
          "Build and Deploy an Agent with Reasoning Engine in Vertex AI",
        ],
      },
      {
        id: "llm",
        label: L(
          "Large Language Models (LLM)",
          "Large Language Models (LLM)",
        ),
        graphLabel: "LLM",
        relatedCertificates: ["Neo4j & GenerativeAI Fundamentals"],
      },
      {
        id: "rag",
        label: L(
          "Retrieval-Augmented Generation (RAG)",
          "Retrieval-Augmented Generation (RAG)",
        ),
        graphLabel: "RAG",
        relatedCertificates: ["Neo4j Fundamentals"],
      },
      {
        id: "ai-agents",
        label: L("AI agents", "AI agents"),
        graphLabel: "Agents",
      },
      {
        id: "agentic-workflows",
        label: L("Agentic workflows", "Agentic workflows"),
      },
      {
        id: "prompting",
        label: L("Prompting", "Prompting"),
        graphLabel: "Prompting",
      },
      { id: "api", label: L("API", "API") },
    ],
  },
  {
    group: L(
      "Database & Knowledge Representation",
      "Database & Knowledge Representation",
    ),
    graphLabel: "Graph DB",
    summary: L(
      "Graph databases, Neo4j, Cypher, GraphRAG, and knowledge graphs.",
      "Graph database, Neo4j, query Cypher, GraphRAG, dan knowledge graph.",
    ),
    items: [
      {
        id: "graphrag",
        label: L("GraphRAG", "GraphRAG"),
        graphLabel: "GraphRAG",
        relatedCertificates: [
          "Neo4j Fundamentals",
          "Neo4j & GenerativeAI Fundamentals",
        ],
      },
      {
        id: "knowledge-graphs",
        label: L("Knowledge Graphs", "Knowledge Graphs"),
        graphLabel: "KG",
        relatedCertificates: [
          "Neo4j Fundamentals",
          "Neo4j & GenerativeAI Fundamentals",
        ],
      },
      {
        id: "neo4j",
        label: L("Neo4j", "Neo4j"),
        graphLabel: "Neo4j",
      },
      {
        id: "cypher",
        label: L("Cypher", "Cypher"),
        graphLabel: "Cypher",
      },
    ],
  },
  {
    group: L("Design & UX", "Design & UX"),
    graphLabel: "Design",
    summary: L(
      "Design thinking, UX research, Figma, and visual craft for product and web.",
      "Design thinking, riset UX, Figma, dan kerajinan visual untuk produk dan web.",
    ),
    items: [
      {
        id: "design-thinking",
        label: L("Design Thinking", "Design Thinking"),
        graphLabel: "Design thinking",
        relatedCertificates: [
          "Product Discovery Micro-Certification (PDC)™️",
        ],
      },
      {
        id: "ux-research",
        label: L("UX Research", "Riset UX"),
        graphLabel: "UX research",
      },
      {
        id: "user-experience-design",
        label: L("User Experience Design", "Desain Pengalaman Pengguna"),
        graphLabel: "UX",
      },
      {
        id: "figma",
        label: L("Figma", "Figma"),
        graphLabel: "Figma",
      },
      {
        id: "empathy-mapping",
        label: L("Empathy Mapping", "Pemetaan Empati"),
        graphLabel: "Empathy",
      },
      {
        id: "web-design",
        label: L("Web Design", "Desain Web"),
        graphLabel: "Web design",
      },
      {
        id: "vector-illustration",
        label: L("Vector Illustration", "Ilustrasi Vektor"),
      },
    ],
  },
  {
    group: L("Full-Stack & Technical Building", "Full-Stack & Technical Building"),
    graphLabel: "Build",
    summary: L(
      "Shipping surfaces with Next.js, Vercel, Supabase, n8n, Webflow, and HTML.",
      "Membangun permukaan dengan Next.js, Vercel, Supabase, n8n, Webflow, dan HTML.",
    ),
    items: [
      {
        id: "vercel",
        label: L("Vercel", "Vercel"),
        graphLabel: "Vercel",
      },
      {
        id: "supabase",
        label: L("Supabase", "Supabase"),
        graphLabel: "Supabase",
      },
      {
        id: "n8n",
        label: L("n8n", "n8n"),
        graphLabel: "n8n",
      },
      {
        id: "webflow",
        label: L("Webflow", "Webflow"),
        graphLabel: "Webflow",
      },
      {
        id: "nextjs",
        label: L("Next.js", "Next.js"),
        graphLabel: "Next.js",
      },
      {
        id: "html5",
        label: L("HTML 5", "HTML 5"),
        graphLabel: "HTML",
      },
      {
        id: "document-management",
        label: L("Document Management", "Manajemen Dokumen"),
      },
    ],
  },
  {
    group: L("Domain Expertise", "Domain Expertise"),
    graphLabel: "Domain",
    summary: L(
      "Deep experience in HR technology, assessment frameworks, and B2B markets.",
      "Pengalaman mendalam di HR technology, assessment framework, dan pasar B2B.",
    ),
    items: [
      {
        id: "hr-tech",
        label: L("HR Tech", "HR Tech"),
        graphLabel: "HR Tech",
      },
      {
        id: "assessment-framework",
        label: L("Assessment Framework", "Assessment Framework"),
        graphLabel: "Assessment",
      },
      {
        id: "b2b-field",
        label: L("B2B Field", "B2B Field"),
        graphLabel: "B2B",
      },
    ],
  },
];

const EXTRA_RELATED_SKILL_IDS: [string, string][] = [
  ["rag", "graphrag"],
  ["llm", "rag"],
  ["ai-agents", "n8n"],
  ["product-discovery", "rag"],
  ["hr-tech", "product-strategy"],
  ["hr-tech", "product-discovery"],
  ["stakeholder-management", "product-strategy"],
  ["stakeholder-management", "communication"],
  ["assessment-framework", "hr-tech"],
  ["b2b-field", "product-strategy"],
  ["supabase", "vercel"],
  ["prompting", "llm"],
  ["cypher", "neo4j"],
  ["design-thinking", "product-discovery"],
];

function uniqueSkillPairs(pairs: [string, string][]): [string, string][] {
  const seen = new Set<string>();
  const out: [string, string][] = [];
  for (const [a, b] of pairs) {
    if (a === b) continue;
    const key = a < b ? `${a}|${b}` : `${b}|${a}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push([a, b]);
  }
  return out;
}

export const relatedSkillGraphPairs: [string, string][] = (() => {
  const graphIds = new Set(
    skills.flatMap((group) =>
      group.items.filter((item) => item.graphLabel).map((item) => item.id),
    ),
  );
  const byCert = new Map<string, string[]>();
  for (const group of skills) {
    for (const item of group.items) {
      if (!item.graphLabel) continue;
      for (const cert of item.relatedCertificates ?? []) {
        const list = byCert.get(cert) ?? [];
        list.push(item.id);
        byCert.set(cert, list);
      }
    }
  }
  const fromCerts: [string, string][] = [];
  for (const ids of byCert.values()) {
    for (let i = 0; i < ids.length; i += 1) {
      for (let j = i + 1; j < ids.length; j += 1) {
        fromCerts.push([ids[i], ids[j]]);
      }
    }
  }
  const extras = EXTRA_RELATED_SKILL_IDS.filter(
    ([a, b]) => graphIds.has(a) && graphIds.has(b),
  );
  return uniqueSkillPairs([...fromCerts, ...extras]);
})();

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
    skills: [
      "GraphRAG",
      "Knowledge Graphs",
      "Large Language Models (LLM)",
    ],
  },
  {
    title: "Neo4j Fundamentals",
    issuer: "Neo4j",
    issueDate: "Oct 2025",
    credentialId: "bbf7af71-5c6d-4fdc-a730-8feee139c3f7",
    credentialUrl: "https://www.linkedin.com/in/sanosempati/details/certifications/",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "GraphRAG",
      "Knowledge Graphs",
    ],
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
    skills: ["Artificial Intelligence (AI)", "GenAI", "AIPM"],
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
    skills: ["Design Thinking", "Product Strategy", "Product Development"],
  },
  {
    title: "Product Discovery Workshop",
    issuer: "Crafters",
    issueDate: "Jul 2023",
    credentialUrl: "https://www.linkedin.com/in/sanosempati/details/certifications/",
    skills: ["Communication", "Product Design", "Product Strategy"],
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
