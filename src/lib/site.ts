/** Swap this file when real portfolio content arrives. */

export const SITE = {
  name: "Shafa Naura",
  /** Brand mark in header / footer / menu */
  mark: "ship.",
  shortName: "ship.",
  watermark: "SHIP",
  title: "Shafa Naura — Fullstack Developer",
  description:
    "Fullstack developer building products end to end — interfaces, APIs, and the systems underneath.",
  tagline: "Ship the whole loop.",
  role: "Fullstack Developer",
  location: "Remote · Asia / Worldwide",
  workingSince: 2019,
  email: "shafanaura48@gmail.com",
  social: {
    github: "https://github.com/shafanaura",
    linkedin: "https://www.linkedin.com/in/shafanaura",
    upwork: "https://www.upwork.com/freelancers/~01055851b3296d5c11",
    instagram: "https://www.instagram.com/shafanaura",
  },
} as const;

export const HERO = {
  eyebrow: "Available for projects",
  brandLine: "Shafa Naura",
  headline: "I build products from the first pixel to the last deploy.",
  support:
    "Fullstack developer who owns UI, APIs, data, and delivery — with quiet craft and clear systems.",
  ctaPrimary: "Start a project",
  ctaSecondary: "See selected work",
  statusLeft: `Since ${SITE.workingSince}`,
  statusCenter: SITE.location,
  statusRight: "Scroll",
  stack: [
    "Next.js",
    "TypeScript",
    "Node",
    "Postgres",
    "React",
    "Tailwind",
    "Hono",
    "Design Systems",
  ] as const,
};

export type ProjectScreenshot = {
  src?: string;
  alt: string;
  caption?: string;
  /** Used when no image — abstract cover */
  tone?: [string, string];
};

export type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  role: string;
  tech: string[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  cover: [string, string];
  screenshots: ProjectScreenshot[];
};

export const PROJECTS: Project[] = [
  {
    id: "aster-labs",
    name: "Aster Labs",
    category: "SaaS",
    year: "2025",
    summary:
      "Research workspace with realtime collab, auth, and a shared design system.",
    description:
      "End-to-end product for a research startup: marketing site, authenticated app, realtime collaboration, billing hooks, and a component system shared across surfaces.",
    role: "Fullstack — architecture, UI, API, deploy",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "tRPC", "Vercel"],
    tags: ["Next.js", "Realtime", "Systems"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/",
    cover: ["#0f1c2e", "#12b886"],
    screenshots: [
      {
        alt: "Dashboard overview",
        caption: "Dashboard",
        tone: ["#0f1c2e", "#12b886"],
      },
      {
        alt: "Collaboration canvas",
        caption: "Realtime canvas",
        tone: ["#12243a", "#6b8cff"],
      },
      {
        alt: "Team settings",
        caption: "Permissions",
        tone: ["#0b1020", "#3ee0b0"],
      },
    ],
  },
  {
    id: "nova-finance",
    name: "Nova Finance",
    category: "Fintech",
    year: "2024",
    summary: "Calm finance UI with clear data density and trustworthy flows.",
    description:
      "Consumer finance web app with transaction insights, budgeting, and secure auth — focused on readable density and accessible charts.",
    role: "Fullstack — frontend lead, API integration",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    tags: ["React", "API", "Data"],
    liveUrl: "https://example.com",
    cover: ["#1a1428", "#6b8cff"],
    screenshots: [
      {
        alt: "Home balance",
        caption: "Home",
        tone: ["#1a1428", "#6b8cff"],
      },
      {
        alt: "Spending insights",
        caption: "Insights",
        tone: ["#12141c", "#3ee0b0"],
      },
    ],
  },
  {
    id: "helio-studio",
    name: "Helio Studio",
    category: "Marketing",
    year: "2023",
    summary: "CMS-driven case studies and a motion-led marketing site.",
    description:
      "Marketing site with animated case studies, CMS content, and performance-first image pipelines.",
    role: "Fullstack — architecture, motion, CMS",
    tech: ["Next.js", "Sanity", "TypeScript", "Vercel"],
    tags: ["CMS", "Motion", "SEO"],
    liveUrl: "https://example.com",
    cover: ["#102018", "#3ee0b0"],
    screenshots: [
      {
        alt: "Landing",
        caption: "Landing",
        tone: ["#102018", "#3ee0b0"],
      },
      {
        alt: "Case study",
        caption: "Case study",
        tone: ["#0b1020", "#6b8cff"],
      },
    ],
  },
  {
    id: "pulse-health",
    name: "Pulse Health",
    category: "Mobile",
    year: "2023",
    summary: "Wellness app shipped from concept through store release.",
    description:
      "Cross-platform wellness product with habit tracking and a coach dashboard — prototypes to App Store.",
    role: "Fullstack — mobile UI, backend, release",
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
    tags: ["Mobile", "Supabase", "UX"],
    liveUrl: "https://example.com",
    cover: ["#1c1510", "#e8a87c"],
    screenshots: [
      {
        alt: "App home",
        caption: "App home",
        tone: ["#1c1510", "#e8a87c"],
      },
      {
        alt: "Coach dashboard",
        caption: "Coach view",
        tone: ["#0b1020", "#12b886"],
      },
    ],
  },
];

export const SKILLS = [
  {
    index: "01",
    title: "Interfaces",
    description: "React & Next.js UIs that stay fast and intentional.",
  },
  {
    index: "02",
    title: "Systems",
    description: "APIs, models, and auth that stay maintainable.",
  },
  {
    index: "03",
    title: "Product craft",
    description: "Design systems, DX, and tooling teams can grow with.",
  },
  {
    index: "04",
    title: "Delivery",
    description: "CI, observability, and the last mile to production.",
  },
] as const;

export const STATS = [
  { value: 18, suffix: "+", label: "Projects shipped" },
  { value: 3, suffix: "+", label: "Years shipping" },
  { value: 9, suffix: "+", label: "Core tools" },
  { value: 100, suffix: "%", label: "Owner mindset" },
] as const;

export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Work", id: "works" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
] as const;

export const ABOUT = {
  eyebrow: "About",
  statementLead: "I care about the whole product loop — ",
  statementMuted:
    "from the interface people touch to the data and deploys that keep it honest.",
  distributed: "Remote-friendly. Clear async. Full ownership.",
  findOnline: "Elsewhere",
} as const;

export const PROCESS = [
  { code: "01", label: "Discover" },
  { code: "02", label: "Design" },
  { code: "03", label: "Build" },
  { code: "04", label: "Ship" },
  { code: "05", label: "Iterate" },
] as const;

export const FOOTER = {
  ctaLines: ["Got a product in mind?", "Let's build it properly."] as const,
  ctaButton: "Start a project",
  tagline:
    "Fullstack developer — interfaces, platforms, and the systems connecting them.",
  columns: {
    Navigate: [
      { label: "About", id: "about" },
      { label: "Work", id: "works" },
      { label: "Skills", id: "skills" },
      { label: "Contact", id: "contact" },
    ],
    Focus: [
      { label: "Interfaces", id: "skills" },
      { label: "Systems", id: "skills" },
      { label: "Product craft", id: "skills" },
      { label: "Delivery", id: "skills" },
    ],
  },
  legal: `© ${new Date().getFullYear()} ${SITE.name}`,
};
