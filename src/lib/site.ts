/** Content hub — swap placeholders (testimonials, resume, screenshots) when ready. */

import type { ExperienceEnd, ExperienceMonth } from "@/lib/experience";

export const SITE = {
  name: "Shafa Naura",
  mark: "ship.",
  shortName: "ship.",
  watermark: "SHIP",
  title: "Shafa Naura — Fullstack Developer",
  description:
    "Fullstack developer building booking platforms, data products, and commerce — Next.js, NestJS, TypeScript, Postgres, and Redis.",
  tagline: "Ship the whole loop.",
  role: "Fullstack Developer",
  location: "Remote · Asia / Worldwide",
  timezone: "UTC+7 (WIB)",
  workingSince: 2021,
  email: "shafanaura48@gmail.com",
  resumeUrl: "#resume", // replace with real PDF path later
  avatar: "/avatar.jpg",
  social: {
    github: "https://github.com/shafanaura",
    linkedin: "https://www.linkedin.com/in/shafanaura",
    upwork: "https://www.upwork.com/freelancers/shafanaura",
    instagram: "https://www.instagram.com/shafanaura",
  },
} as const;

export const HERO = {
  eyebrow: "Open for freelance · Upwork & direct",
  brandLine: "Glad you’re here.",
  headline: "I build products from the first pixel to the last deploy.",
  support:
    "Fullstack JS/TS — Next.js on the client, NestJS on the API, with Postgres and Redis underneath.",
  ctaPrimary: "Start a project",
  ctaSecondary: "See selected work",
  statusLeft: `Since ${SITE.workingSince}`,
  statusCenter: SITE.location,
  statusRight: "Scroll",
  stack: [
    "Next.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Redis",
    "React",
    "React Query",
    "Node",
  ] as const,
};

export type ProjectScreenshot = {
  src?: string;
  alt: string;
  caption?: string;
  /** Full-page capture — crop to top on cards; scroll inside modal. */
  tall?: boolean;
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
  /** Stack only — shown with TechChip / icons. */
  tech: string[];
  /** Domain / topic labels only (Migration, Booking, SEO…) — not frameworks. */
  tags: string[];
  achievements: string[];
  whyStack: { tech: string; reason: string }[];
  liveUrl?: string;
  liveLabel?: string;
  status?: "live" | "archived";
  cover: [string, string];
  screenshots: ProjectScreenshot[];
  impact?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "yeki",
    name: "Yeki",
    category: "EdTech · Booking",
    year: "2024–2025",
    summary:
      "Kids’ learning club booking — migrated from Bubble.io to Next.js for performance.",
    description:
      "Yeki was a booking platform for kids’ learning clubs (ages 5–9). Parents browsed clubs and enrolled kids into scheduled sessions. Originally on Bubble.io, it was rebuilt for performance and features Bubble couldn’t support cleanly.",
    role: "Frontend Developer",
    tech: ["Next.js", "Mantine UI", "React Query"],
    tags: ["Migration", "Booking"],
    achievements: [
      "Full migration from Bubble.io to Next.js with a major performance boost",
      "Custom features beyond no-code constraints",
      "React Query for clean booking-flow data and state",
    ],
    whyStack: [
      {
        tech: "Next.js",
        reason:
          "Bubble hit a ceiling — Next gave control over performance, routing, and custom booking UX.",
      },
      {
        tech: "React Query",
        reason:
          "Enrollment and session data needed predictable cache and mutation flows.",
      },
      {
        tech: "Mantine",
        reason:
          "Rich form and date primitives accelerated the rebuild without sacrificing polish.",
      },
    ],
    status: "archived",
    cover: ["#1c1410", "#e8a87c"],
    screenshots: [
      {
        src: "/projects/yeki-1.png",
        alt: "Yeki club browsing interface",
        caption: "Browse clubs",
      },
      {
        src: "/projects/yeki-2.png",
        alt: "Yeki enrollment and scheduling",
        caption: "Enrollment",
      },
      {
        src: "/projects/yeki-3.png",
        alt: "Yeki session detail",
        caption: "Sessions",
      },
    ],
  },
  {
    id: "energinno",
    name: "Energinno",
    category: "Marketing · Climate",
    year: "2024–2025",
    summary:
      "Marketing site for zero-energy building (ZEB) solutions in Korea.",
    description:
      "Energinno (branded Energibuild) offers zero-energy building solutions — helping clients design and plan energy-efficient buildings that meet Korea’s ZEB standards.",
    role: "Frontend Developer",
    tech: ["Next.js", "MUI", "Tailwind CSS"],
    tags: ["Landing", "Marketing"],
    achievements: [
      "Marketing and landing pages for the ZEB offering",
      "MUI + Tailwind for polished, efficient UI delivery",
      "Responsive public-facing interface across devices",
    ],
    whyStack: [
      {
        tech: "Next.js",
        reason:
          "Static/SSR marketing pages with strong SEO for a regulated industry product.",
      },
      {
        tech: "MUI + Tailwind",
        reason:
          "MUI for structured marketing sections; Tailwind for spacing and one-off layout control.",
      },
    ],
    liveUrl: "https://energinno.co.kr/ko/landing",
    status: "live",
    cover: ["#0e1a14", "#3ee0b0"],
    screenshots: [
      {
        src: "/projects/energinno.png",
        alt: "Energinno full landing page",
        caption: "Landing page",
        tall: true,
      },
    ],
  },
  {
    id: "backwater-trip",
    name: "BackwaterTrip",
    category: "Travel · Booking",
    year: "2023",
    summary:
      "Houseboat booking for Kerala’s backwaters — search, compare, and enquire in real time.",
    description:
      "BackwaterTrip is a booking platform for houseboat trips through the Backwaters of Kerala, India. Travelers search, compare, and enquire about packages by room count and trip type (family, romantic, and more), with real-time check-in / check-out and guest search.",
    role: "Frontend Developer",
    tech: ["Next.js", "React Query", "Chakra UI"],
    tags: ["Booking", "SEO"],
    achievements: [
      "Dynamic search (check-in, check-out, guests) with real-time filtering",
      "Scalable package listing + detail pages for new trip categories",
      "Enquiry form to streamline lead capture for the client",
      "SSR/SSG for SEO and performance on organic tourism traffic",
      "Fully responsive UI across devices",
    ],
    whyStack: [
      {
        tech: "Next.js",
        reason:
          "Tourism lives on organic search — SSR/SSG keeps pages fast and crawlable.",
      },
      {
        tech: "React Query",
        reason:
          "Package search and listings change often; caching keeps filters snappy without refetch noise.",
      },
      {
        tech: "Chakra UI",
        reason:
          "Accessible primitives let us ship a clean booking UI without reinventing form patterns.",
      },
    ],
    status: "archived",
    cover: ["#0c1f2e", "#1a9b7a"],
    screenshots: [
      {
        src: "/projects/backwater-trip.png",
        alt: "BackwaterTrip houseboat booking interface",
        caption: "Search & listings",
      },
    ],
  },
  {
    id: "dosimetry-badge",
    name: "Dosimetry Badge",
    category: "E-commerce · Health",
    year: "2023",
    summary:
      "E-commerce for radiation dosimeter badges — catalog, subscriptions, and account management.",
    description:
      "Dosimetry Badge serves dental clinics, hospitals, labs, and industrial facilities across the US. The platform handles product catalog, subscription-based pricing, and account management for ongoing radiation exposure monitoring.",
    role: "Fullstack Developer",
    tech: ["Blazor", ".NET", "C#"],
    tags: ["Subscriptions", "E-commerce"],
    achievements: [
      "Shipped Blazor UI and .NET product logic for catalog and accounts",
      "Subscription and pricing flows (monthly, quarterly, annual)",
      "Account features: add/remove badges and wearer reassignment",
      "Cohesive storefront and account experience on a shared C# stack",
    ],
    whyStack: [
      {
        tech: "Blazor",
        reason:
          "Component-based UI for catalog, subscriptions, and account flows with strong .NET integration.",
      },
      {
        tech: ".NET + C#",
        reason:
          "One language across UI and server for subscription state, pricing rules, and account mutations.",
      },
    ],
    liveUrl: "https://dosimetrybadge.com",
    status: "live",
    cover: ["#1a1520", "#5b7cfa"],
    screenshots: [
      {
        src: "/projects/dosimetry-badge.png",
        alt: "Dosimetry Badge full storefront page",
        caption: "Storefront",
        tall: true,
      },
    ],
  },
  {
    id: "aloy-beraterin",
    name: "Aloy Beraterin",
    category: "Enterprise · Project Mgmt",
    year: "2023",
    summary:
      "Pre-engineering management web app — agile workflows to tighten project efficiency.",
    description:
      "Aloy Beraterin is a pre-engineering management web app built with agile methodologies to improve efficiency and streamline project management. The UI covers auth, dashboards, and map-aware project views for engineering teams.",
    role: "Frontend Developer",
    tech: [
      "React",
      "TypeScript",
      "Mapbox",
      "React Table",
      "React Query",
      "Chakra UI",
      "Formik",
    ],
    tags: ["Dashboard", "Maps"],
    achievements: [
      "Shipped dashboard and login flows for pre-engineering project management",
      "Mapbox-backed views for location-aware project context",
      "React Query + React Table for dense operational data",
    ],
    whyStack: [
      {
        tech: "React + TypeScript",
        reason:
          "Complex forms and dashboard state needed typed components without a full Next migration.",
      },
      {
        tech: "Mapbox",
        reason:
          "Engineering projects are place-based — map context belongs in the primary UI.",
      },
      {
        tech: "Chakra UI + Formik",
        reason:
          "Accessible primitives and form validation sped up auth and managerial CRUD screens.",
      },
    ],
    status: "archived",
    cover: ["#0f1a24", "#4a9fd4"],
    screenshots: [
      {
        src: "/projects/aloy-dashboard.png",
        alt: "Aloy Beraterin project management dashboard",
        caption: "Dashboard",
      },
      {
        src: "/projects/aloy-login.png",
        alt: "Aloy Beraterin login screen",
        caption: "Login",
      },
    ],
  },
  {
    id: "residency-programs",
    name: "Residency Programs",
    category: "EdTech · Data",
    year: "2021–2022",
    summary:
      "Data-driven matching for IMGs shortlisting US residency programs.",
    description:
      "ResidencyPrograms.io helps international medical graduates find and shortlist US residency programs using filters like state, USMLE step scores, visa requirements, and medical school connections.",
    role: "Backend and Frontend Developer",
    tech: ["Next.js", "React", "Chakra UI", "Tailwind CSS"],
    tags: ["Filters", "Data UI"],
    achievements: [
      "Personalized matching UI with advanced filtering and sorting",
      "Explore/search experience by specialty",
      "Chakra + Tailwind for a consistent, fast design system",
    ],
    whyStack: [
      {
        tech: "Next.js + React",
        reason:
          "Heavy filter/sort UIs need client interactivity with solid routing and deployability.",
      },
      {
        tech: "Chakra + Tailwind",
        reason:
          "Chakra for complex interactive pieces; Tailwind for layout speed — complementary, not competing.",
      },
    ],
    liveUrl: "https://residencyprograms.io",
    status: "live",
    cover: ["#0f1728", "#3ee0b0"],
    screenshots: [
      {
        src: "/projects/residency-programs.png",
        alt: "Residency Programs explorer full page",
        caption: "Program explorer",
        tall: true,
      },
    ],
  },
  {
    id: "level-up",
    name: "Level Up",
    category: "EdTech · Community",
    year: "2021",
    summary:
      "Knowledge-sharing platform for Indonesian youth learning from leading companies.",
    description:
      "Level Up by Digital Amoeba connects Indonesian youth with knowledge and practical skills from professionals in leading companies. The product surfaces learning opportunities and structured content in a Next.js web experience.",
    role: "Frontend Developer",
    tech: ["Next.js", "React Table", "React Query", "MUI", "Formik"],
    tags: ["EdTech", "Community"],
    achievements: [
      "Built the public learning platform UI on Next.js",
      "Data tables and filters with React Table + React Query",
      "Formik-driven flows for structured content submission",
    ],
    whyStack: [
      {
        tech: "Next.js",
        reason:
          "Content-heavy learning surfaces benefit from routing and a solid public web baseline.",
      },
      {
        tech: "React Query + React Table",
        reason:
          "Catalog and skill listings needed predictable fetching with dense tabular UI.",
      },
      {
        tech: "MUI + Formik",
        reason:
          "Material patterns and Formik kept forms and admin-adjacent screens consistent.",
      },
    ],
    status: "archived",
    cover: ["#1a1020", "#e07a5f"],
    screenshots: [
      {
        src: "/projects/levelup.png",
        alt: "Level Up by Digital Amoeba platform",
        caption: "Platform",
      },
    ],
  },
];

export const NOW = {
  eyebrow: "Now",
  items: [
    "Open for freelance on Upwork and direct — Next.js + NestJS fullstack product work",
    "Exploring stronger design-system and DX patterns across client stacks",
    "Shipping case studies with real product screenshots on this site",
  ],
  updated: "Sep 2026",
} as const;

/**
 * Experience roles use machine-readable `start` / `end` (`"YYYY-MM"` | `"present"`).
 * Durations and period labels are derived at render time (LinkedIn inclusive months).
 * Section total = sum of role lengths (overlaps count twice — LinkedIn convention).
 */
export type ExperienceEntry = {
  company: string;
  companyUrl?: string;
  role: string;
  start: ExperienceMonth;
  end: ExperienceEnd;
  location: string;
  /** Short LinkedIn-style role blurb (1–3 sentences). */
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "RSYS",
    companyUrl: "https://rsys.app",
    role: "Fullstack JavaScript Developer",
    start: "2025-02",
    end: "present",
    location: "Remote · Office in Bogor, Indonesia",
    summary:
      "Placed at a multinational FMCG company to build an internal digital workspace for employees and vendors. Focused on turning manual processes into an integrated, scalable platform used across the business.",
    highlights: [
      "Delivered >10 applications across frontend and backend",
      "Built end-to-end access flows — from new-user requests to multi-level approval matrices",
      "Developed the core authorization service with ~25 modules and 180+ API endpoints",
      "Integrated SSO/SAML, JWT, and RBAC for secure, controlled system access",
      "Shipped with Next.js, NestJS, PostgreSQL, and Redis in a production-ready architecture",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
  },
  {
    company: "Self-employed",
    role: "Fullstack JavaScript Developer",
    start: "2022-07",
    end: "present",
    location: "Remote · Worldwide",
    summary:
      "Top-Rated freelance fullstack developer on Upwork, building React, Next.js, and Vite applications for international clients. Projects span green energy, education, AI, and travel — owning delivery from UI through APIs and handoff.",
    highlights: [
      "Top-Rated on Upwork (top 10%) — product work for international clients",
      "Shipped React, Next.js, and Vite apps across green energy, education, AI, and travel",
      "Owned frontend and fullstack delivery end to end — UI, APIs, and handoff",
    ],
    stack: ["React", "Next.js", "Vite", "TypeScript", "React Query"],
  },
  {
    company: "PT Neural Technologies Indonesia",
    companyUrl: "http://nti.co.id/",
    role: "Frontend Developer",
    start: "2021-05",
    end: "2023-01",
    location: "Remote · Office in Jakarta Selatan, Indonesia",
    summary:
      "Frontend developer who led Telkomsel’s provider comparison dashboard in React.js. Built data visualizations with ECharts and Mapbox, and improved performance and UX from real user feedback.",
    highlights: [
      "Led Telkomsel’s provider comparison dashboard in React.js",
      "Built data visualizations with ECharts and Mapbox",
      "Improved performance and UX from real user feedback",
    ],
    stack: ["React", "JavaScript", "ECharts", "Mapbox"],
  },
  {
    company: "Remote Work",
    role: "Frontend Web & Mobile Developer",
    start: "2020-06",
    end: "2020-07",
    location: "Jawa Timur, Indonesia",
    summary:
      "Built a seller store-management web app integrating Shopee, Tokopedia, and Tokoku, plus an online cashier app for cafes covering employees, menus, and income tracking. Owned design and prototyping in Framer alongside implementation.",
    highlights: [
      "Built a seller store-management web app integrating Shopee, Tokopedia, and Tokoku",
      "Shipped an online cashier app for cafes — employees, menus, and income tracking",
      "Owned design and prototyping in Framer, not only implementation",
    ],
    stack: ["React", "JavaScript", "Framer"],
  },
];

export const HOW_I_WORK = {
  eyebrow: "How I work",
  title: "Clear async. Owned outcomes.",
  points: [
    {
      title: "Timezone",
      body: `${SITE.timezone} — overlap with US / EU mornings or Asia business hours.`,
    },
    {
      title: "Communication",
      body: "Async-first (Loom, written updates). Standups when the project needs them.",
    },
    {
      title: "Engagement",
      body: "Hourly or fixed-scope. Prefer milestones with demos over surprise big-bangs.",
    },
    {
      title: "What I take",
      body: "Product UIs, APIs, and data layers in JS/TS — Next.js, NestJS, Postgres, Redis, booking/search flows, and no-code → Next migrations.",
    },
    {
      title: "What I skip",
      body: "Pure design-only retainers, or stacks outside JS/TS that I won’t own in production.",
    },
    {
      title: "Response",
      body: "Usually same business day on Upwork and email.",
    },
  ],
} as const;

export const TESTIMONIALS = [
  {
    quote:
      "Shafa came on to work with me on a React/NextJS/NodeJS project. She had great ideas throughout the project, worked diligently on completing the tasks assigned, and communicated well with me regarding the project progress, hurdles, improvements. Her technical abilities are awesome and she is willing to learn new things needed for the project. Overall I have nothing but positive things to say about Shafa and will definitely work with her again in the future!",
    name: "Upwork client",
    role: "Frontend React.js",
    source: "Upwork",
  },
  {
    quote:
      "Shafa was very professional in her communication and work ethic. She followed the tasks accurately and suggested improvements as she saw which resulted in a better final product. I will have no hesitation to work with Shafa again on future projects or recommend her to any project. Her willingness and dedication to learning means she will continue to grow into becoming an even greater developer. I highly highly recommend Shafa!",
    name: "Upwork client",
    role: "Frontend React.js",
    source: "Upwork",
  },
  {
    quote:
      "She was diligent, hardworking, and delivered quality results. Highly recommended!",
    name: "Upwork client",
    role: "Frontend React.js Engineer",
    source: "Upwork",
  },
] as const;

export const INSIGHTS = [
  {
    id: "why-next",
    title: "Why Next.js on the product surface",
    body: "SSR/SSG, routing, and deployability keep marketing and app UIs fast — especially when organic search or first paint matters.",
    /** Domain / topic — DomainChip row. */
    tags: ["Frontend"],
    /** Stack — TechChip row. */
    tech: ["Next.js"],
  },
  {
    id: "why-nestjs",
    title: "Why NestJS on the API side",
    body: "Modules, DI, and typed providers keep growing backends readable. For booking, subscriptions, and auth-heavy domains, structure beats a flat Express folder after month three.",
    tags: ["Backend"],
    tech: ["NestJS"],
  },
  {
    id: "why-postgres",
    title: "Why PostgreSQL as the source of truth",
    body: "Relational data, constraints, and migrations age better than “just use a document DB.” Filters, bookings, and account state belong in Postgres.",
    tags: ["Data"],
    tech: ["PostgreSQL"],
  },
  {
    id: "why-redis",
    title: "Why Redis next to the API",
    body: "Sessions, rate limits, queues, and hot caches shouldn’t hammer Postgres. Redis keeps latency down when traffic spikes on search or auth paths.",
    tags: ["Performance"],
    tech: ["Redis"],
  },
  {
    id: "why-react-query",
    title: "Why React Query for search and booking flows",
    body: "Filters, calendars, and enquiry forms thrash the network. A cache layer with mutations keeps UX calm without inventing a bespoke state machine every time.",
    tags: ["UX"],
    tech: ["React Query"],
  },
  {
    id: "why-migrate",
    title: "When to leave no-code behind",
    body: "Bubble (and friends) are great until custom flows, performance, or ownership block growth. Migrate with feature parity first, then unlock what no-code couldn’t do.",
    tags: ["Migration"],
    tech: ["Next.js"],
  },
] as const;

export const FAQ = [
  {
    q: "Do you work only on frontend?",
    a: "No — I ship fullstack in JS/TS: Next.js on the UI, NestJS APIs, PostgreSQL, and Redis when the product needs a real data layer.",
  },
  {
    q: "Fixed price or hourly?",
    a: "Both. Clear scopes → fixed milestones. Exploratory or evolving products → hourly with weekly summaries.",
  },
  {
    q: "Can you join an existing codebase?",
    a: "Yes. I start with a short audit (DX, risks, quick wins), then ship in thin vertical slices.",
  },
] as const;

export const SKILLS = [
  {
    index: "01",
    title: "Product UI",
    description: "Next.js / React for search, booking, dashboards, and marketing surfaces.",
    tech: ["Next.js", "React", "TypeScript"],
  },
  {
    index: "02",
    title: "APIs & services",
    description: "NestJS + TypeScript modules for auth, bookings, and domain logic.",
    tech: ["NestJS", "TypeScript", "Node"],
  },
  {
    index: "03",
    title: "Data layer",
    description: "PostgreSQL as source of truth; Redis for cache, sessions, and queues.",
    tech: ["PostgreSQL", "Redis"],
  },
  {
    index: "04",
    title: "Migrations & systems",
    description: "No-code → Next rebuilds, design systems, and end-to-end delivery.",
    tech: ["Next.js", "React Query", "Tailwind CSS"],
  },
] as const;

/** Outcomes — keep general; avoid single-client vanity metrics. */
export const STATS = [
  { value: 12, suffix: "+", label: "Products shipped" },
  { value: 5, suffix: "+", label: "Years shipping" },
  { value: 8, suffix: "+", label: "Core tools in daily use" },
  { value: 3, suffix: "", label: "Upwork recommendations" },
] as const;

export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Work", id: "works" },
  { label: "Experience", id: "experience" },
  { label: "Approach", id: "approach" },
  { label: "Notes", id: "notes" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
] as const;

export const ABOUT = {
  eyebrow: "About",
  name: SITE.name,
  statementLead: "I care about the whole product loop — ",
  statementMuted:
    "UI, APIs, and data layers that hold up in production, not just look good in a demo.",
  distributed:
    "Remote fullstack from Asia (UTC+7). Async by default — I own the feature through ship.",
  findOnline: "Elsewhere",
} as const;

export const FOOTER = {
  ctaLines: ["Got a product in mind?", "Let's build it properly."] as const,
  ctaButton: "Start a project",
  tagline:
    "Fullstack developer — Next.js, NestJS, Postgres, and Redis for products that ship end to end.",
  columns: {
    Navigate: [
      { label: "About", id: "about" },
      { label: "Work", id: "works" },
      { label: "Experience", id: "experience" },
      { label: "Approach", id: "approach" },
      { label: "Notes", id: "notes" },
      { label: "Contact", id: "contact" },
    ],
    Focus: [
      { label: "Product UI", id: "skills" },
      { label: "APIs & NestJS", id: "skills" },
      { label: "Postgres & Redis", id: "skills" },
      { label: "Migrations", id: "skills" },
    ],
  },
  legal: `© ${new Date().getFullYear()} ${SITE.name}`,
};
