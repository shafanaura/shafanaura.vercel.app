/** Content hub — swap placeholders (testimonials, resume, screenshots) when ready. */

export const SITE = {
  name: "Shafa Naura",
  mark: "ship.",
  shortName: "ship.",
  watermark: "SHIP",
  title: "Shafa Naura — Fullstack Developer",
  description:
    "Fullstack developer building booking platforms, data products, and commerce — from UI to delivery.",
  tagline: "Ship the whole loop.",
  role: "Fullstack Developer",
  location: "Remote · Asia / Worldwide",
  timezone: "UTC+7 (WIB)",
  workingSince: 2019,
  email: "shafanaura48@gmail.com",
  resumeUrl: "#resume", // replace with real PDF path later
  social: {
    github: "https://github.com/shafanaura",
    linkedin: "https://www.linkedin.com/in/shafanaura",
    upwork: "https://www.upwork.com/freelancers/~01055851b3296d5c11",
    instagram: "https://www.instagram.com/shafanaura",
  },
} as const;

export const HERO = {
  eyebrow: "Open for freelance · Upwork & direct",
  brandLine: "Shafa Naura",
  headline: "I build products from the first pixel to the last deploy.",
  support:
    "Fullstack developer for booking, data, and commerce products — Next.js, React, and .NET when the stack needs it.",
  ctaPrimary: "Start a project",
  ctaSecondary: "See selected work",
  statusLeft: `Since ${SITE.workingSince}`,
  statusCenter: SITE.location,
  statusRight: "Scroll",
  stack: [
    "Next.js",
    "TypeScript",
    "React Query",
    "Blazor",
    "Chakra UI",
    "Mantine",
    "Tailwind",
    "Node",
  ] as const,
};

export type ProjectScreenshot = {
  src?: string;
  alt: string;
  caption?: string;
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
  achievements: string[];
  whyStack: { tech: string; reason: string }[];
  liveUrl?: string;
  liveLabel?: string;
  galleryUrl?: string;
  status?: "live" | "archived";
  cover: [string, string];
  screenshots: ProjectScreenshot[];
  impact?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "backwater-trip",
    name: "BackwaterTrip",
    category: "Travel · Booking",
    year: "2024",
    summary:
      "Houseboat booking for Kerala’s backwaters — search, compare, and enquire in real time.",
    description:
      "BackwaterTrip is a booking platform for houseboat trips through the Backwaters of Kerala, India. Travelers search, compare, and enquire about packages by room count and trip type (family, romantic, and more), with real-time check-in / check-out and guest search.",
    role: "Frontend Developer",
    tech: ["Next.js", "React Query", "Chakra UI"],
    tags: ["Next.js", "Booking", "SEO"],
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
    liveUrl: "https://backwatertrip.com",
    impact: "Helped convert visitors into 127+ completed trips",
    status: "live",
    cover: ["#0c1f2e", "#1a9b7a"],
    screenshots: [
      {
        alt: "Search and package results",
        caption: "Search & listings",
        tone: ["#0c1f2e", "#1a9b7a"],
      },
      {
        alt: "Package detail",
        caption: "Package detail",
        tone: ["#102a3a", "#6b8cff"],
      },
    ],
  },
  {
    id: "dosimetry-badge",
    name: "Dosimetry Badge",
    category: "E-commerce · Health",
    year: "2024",
    summary:
      "E-commerce for radiation dosimeter badges — catalog, subscriptions, and account management.",
    description:
      "Dosimetry Badge serves dental clinics, hospitals, labs, and industrial facilities across the US. The platform handles product catalog, subscription-based pricing, and account management for ongoing radiation exposure monitoring.",
    role: "Backend and Frontend Developer",
    tech: ["Blazor", "C#", ".NET", "Tailwind CSS"],
    tags: ["Blazor", "Subscriptions", "Fullstack"],
    achievements: [
      "Client UI and backend logic in one C# / Blazor codebase",
      "Subscription and pricing flows (monthly, quarterly, annual)",
      "Account features: add/remove badges and wearer reassignment",
      "Clean Tailwind styling on Blazor components",
    ],
    whyStack: [
      {
        tech: "Blazor",
        reason:
          "Client already lived on .NET — one language for UI and server cut context-switching and shared validation.",
      },
      {
        tech: "Tailwind CSS",
        reason:
          "Utility styling kept the Blazor UI consistent and fast to iterate without a heavy design-system rewrite.",
      },
    ],
    liveUrl: "https://dosimetrybadge.com",
    galleryUrl: "https://photos.app.goo.gl/sZ9GHSvWtGr3CXLz5",
    status: "live",
    cover: ["#1a1520", "#5b7cfa"],
    screenshots: [
      {
        alt: "Product catalog",
        caption: "Catalog",
        tone: ["#1a1520", "#5b7cfa"],
      },
      {
        alt: "Subscription plans",
        caption: "Pricing plans",
        tone: ["#12141c", "#12b886"],
      },
    ],
  },
  {
    id: "residency-programs",
    name: "Residency Programs",
    category: "EdTech · Data",
    year: "2023",
    summary:
      "Data-driven matching for IMGs shortlisting US residency programs.",
    description:
      "ResidencyPrograms.io helps international medical graduates find and shortlist US residency programs using filters like state, USMLE step scores, visa requirements, and medical school connections.",
    role: "Backend and Frontend Developer",
    tech: ["Next.js", "React", "Chakra UI", "Tailwind CSS"],
    tags: ["Next.js", "Filters", "Data UI"],
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
    galleryUrl: "https://photos.app.goo.gl/sGRTjvDJ8d1MYHAo7",
    impact: "Helped 1,400+ students save research time",
    status: "live",
    cover: ["#0f1728", "#3ee0b0"],
    screenshots: [
      {
        alt: "Program explorer",
        caption: "Explore programs",
        tone: ["#0f1728", "#3ee0b0"],
      },
      {
        alt: "Filter panel",
        caption: "Filters & matching",
        tone: ["#12203a", "#6b8cff"],
      },
    ],
  },
  {
    id: "yeki",
    name: "Yeki",
    category: "EdTech · Booking",
    year: "2023",
    summary:
      "Kids’ learning club booking — migrated from Bubble.io to Next.js for performance.",
    description:
      "Yeki was a booking platform for kids’ learning clubs (ages 5–9). Parents browsed clubs and enrolled kids into scheduled sessions. Originally on Bubble.io, it was rebuilt for performance and features Bubble couldn’t support cleanly.",
    role: "Frontend Developer",
    tech: ["Next.js", "Mantine UI", "React Query"],
    tags: ["Migration", "Next.js", "Booking"],
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
    liveUrl: "https://yeki.co.jp",
    liveLabel: "Was live · archived",
    status: "archived",
    cover: ["#1c1410", "#e8a87c"],
    screenshots: [
      {
        alt: "Club browsing",
        caption: "Browse clubs",
        tone: ["#1c1410", "#e8a87c"],
      },
      {
        alt: "Enrollment flow",
        caption: "Enrollment",
        tone: ["#0b1020", "#12b886"],
      },
    ],
  },
  {
    id: "energinno",
    name: "Energinno",
    category: "Marketing · Climate",
    year: "2023",
    summary:
      "Marketing site for zero-energy building (ZEB) solutions in Korea.",
    description:
      "Energinno (branded Energibuild) offers zero-energy building solutions — helping clients design and plan energy-efficient buildings that meet Korea’s ZEB standards.",
    role: "Frontend Developer",
    tech: ["Next.js", "MUI", "Tailwind CSS"],
    tags: ["Next.js", "Landing", "MUI"],
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
    galleryUrl: "https://photos.app.goo.gl/Hh7CTePBUJY31uVe9",
    status: "live",
    cover: ["#0e1a14", "#3ee0b0"],
    screenshots: [
      {
        alt: "Landing hero",
        caption: "Landing",
        tone: ["#0e1a14", "#3ee0b0"],
      },
      {
        alt: "Solution sections",
        caption: "Product story",
        tone: ["#0b1020", "#6b8cff"],
      },
    ],
  },
];

export const NOW = {
  eyebrow: "Now",
  items: [
    "Collecting deeper case studies and screenshots for this portfolio",
    "Open for freelance on Upwork and direct — Next.js / fullstack product work",
    "Exploring stronger design-system and DX patterns across client stacks",
  ],
  updated: "Sep 2026",
} as const;

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
      body: "Product UIs, booking/search flows, migrations (e.g. no-code → Next), .NET/Blazor when it fits.",
    },
    {
      title: "What I skip",
      body: "Pure design-only retainers, or stacks I can’t stand behind in production.",
    },
    {
      title: "Response",
      body: "Usually same business day on Upwork and email.",
    },
  ],
} as const;

/** Placeholder testimonials — replace with real client quotes. */
export const TESTIMONIALS = [
  {
    quote:
      "Shafa turned a messy booking flow into something our team could actually ship and iterate on. Communication was clear the whole way.",
    name: "A. Rahman",
    role: "Founder, travel startup",
    source: "Upwork · placeholder",
  },
  {
    quote:
      "Strong frontend judgment — knew when to push Next.js patterns and when to keep things simple for the business.",
    name: "J. Park",
    role: "Product lead",
    source: "Direct · placeholder",
  },
  {
    quote:
      "Migrating off Bubble was the right call. Performance and custom features finally matched what we needed.",
    name: "M. Sato",
    role: "Ops, edtech",
    source: "Upwork · placeholder",
  },
] as const;

export const INSIGHTS = [
  {
    id: "why-next",
    title: "Why I reach for Next.js on tourism & marketing sites",
    body: "Organic search and first load matter more than clever SPA tricks. SSR/SSG plus a sane deploy path usually beats a client-only app when the business depends on Google.",
    tags: ["Next.js", "SEO"],
  },
  {
    id: "why-react-query",
    title: "Why React Query for search and booking flows",
    body: "Filters, calendars, and enquiry forms thrash the network. A cache layer with mutations keeps UX calm without inventing a bespoke state machine every time.",
    tags: ["React Query", "UX"],
  },
  {
    id: "why-blazor",
    title: "When Blazor is the honest choice",
    body: "If the org already runs on .NET and needs interactive UI plus server logic, one language can lower risk. I don’t force React into every room.",
    tags: ["Blazor", ".NET"],
  },
  {
    id: "why-migrate",
    title: "When to leave no-code behind",
    body: "Bubble (and friends) are great until custom flows, performance, or ownership block growth. Yeki taught me to migrate with feature parity first, then unlock what no-code couldn’t do.",
    tags: ["Migration", "Next.js"],
  },
] as const;

export const FAQ = [
  {
    q: "Do you work only on frontend?",
    a: "No — I often own UI plus API/data when the stack allows (e.g. Blazor fullstack, Next + APIs). Pure backend-only retainers are rarer.",
  },
  {
    q: "Fixed price or hourly?",
    a: "Both. Clear scopes → fixed milestones. Exploratory or evolving products → hourly with weekly summaries.",
  },
  {
    q: "Can you join an existing codebase?",
    a: "Yes. I start with a short audit (DX, risks, quick wins), then ship in thin vertical slices.",
  },
  {
    q: "Are the testimonials final?",
    a: "Not yet — marked as placeholders while I collect permission to publish real client quotes.",
  },
] as const;

export const SKILLS = [
  {
    index: "01",
    title: "Product UI",
    description: "Next.js / React interfaces for search, booking, and dashboards.",
  },
  {
    index: "02",
    title: "Fullstack delivery",
    description: "UI + server logic — including Blazor/.NET when that’s the right home.",
  },
  {
    index: "03",
    title: "Migrations",
    description: "No-code → code rebuilds with parity first, then leverage.",
  },
  {
    index: "04",
    title: "Design systems in practice",
    description: "Chakra, Mantine, MUI, Tailwind — pick for speed without chaos.",
  },
] as const;

/** Outcomes tied to shipped work — not vanity fluff. */
export const STATS = [
  { value: 5, suffix: "", label: "Featured products here" },
  { value: 127, suffix: "+", label: "Trips enabled (BackwaterTrip)" },
  { value: 1400, suffix: "+", label: "Students helped (Residency)" },
  { value: 6, suffix: "+", label: "Years shipping" },
] as const;

export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Work", id: "works" },
  { label: "Approach", id: "approach" },
  { label: "Notes", id: "notes" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
] as const;

export const ABOUT = {
  eyebrow: "About",
  statementLead: "I care about the whole product loop — ",
  statementMuted:
    "booking flows, data UIs, and commerce that have to work in production, not just in a demo.",
  distributed: "Remote-friendly. Clear async. Full ownership.",
  findOnline: "Elsewhere",
} as const;

export const FOOTER = {
  ctaLines: ["Got a product in mind?", "Let's build it properly."] as const,
  ctaButton: "Start a project",
  tagline:
    "Fullstack developer — booking, data, and commerce products shipped end to end.",
  columns: {
    Navigate: [
      { label: "About", id: "about" },
      { label: "Work", id: "works" },
      { label: "Approach", id: "approach" },
      { label: "Notes", id: "notes" },
      { label: "Contact", id: "contact" },
    ],
    Focus: [
      { label: "Product UI", id: "skills" },
      { label: "Fullstack", id: "skills" },
      { label: "Migrations", id: "skills" },
      { label: "Design systems", id: "skills" },
    ],
  },
  legal: `© ${new Date().getFullYear()} ${SITE.name}`,
};
