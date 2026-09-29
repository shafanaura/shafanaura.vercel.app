import type { ReactNode, SVGProps } from "react";

type SvgProps = SVGProps<SVGSVGElement> & { size?: number | string };

function svgBase(props: SvgProps, viewBox = "0 0 24 24") {
  const { size = "0.9rem", className, ...rest } = props;
  return {
    width: size,
    height: size,
    viewBox,
    className: className ? `shrink-0 ${className}` : "shrink-0",
    "aria-hidden": true as const,
    focusable: false as const,
    ...rest,
  };
}

type TechKey =
  | "nextjs"
  | "nestjs"
  | "postgresql"
  | "redis"
  | "react"
  | "typescript"
  | "nodejs"
  | "reactquery"
  | "tailwind"
  | "mui"
  | "chakra"
  | "mantine"
  | "vite"
  | "javascript"
  | "framer"
  | "express"
  | "echarts"
  | "mapbox"
  | "blazor"
  | "dotnet"
  | "csharp";

const ALIASES: Record<string, TechKey> = {
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  nestjs: "nestjs",
  nest: "nestjs",
  postgresql: "postgresql",
  postgres: "postgresql",
  redis: "redis",
  react: "react",
  typescript: "typescript",
  ts: "typescript",
  node: "nodejs",
  "node.js": "nodejs",
  nodejs: "nodejs",
  "react query": "reactquery",
  reactquery: "reactquery",
  tanstack: "reactquery",
  "tanstack query": "reactquery",
  "tailwind css": "tailwind",
  tailwind: "tailwind",
  mui: "mui",
  "material ui": "mui",
  "material-ui": "mui",
  "chakra ui": "chakra",
  chakra: "chakra",
  mantine: "mantine",
  "mantine ui": "mantine",
  vite: "vite",
  javascript: "javascript",
  js: "javascript",
  framer: "framer",
  "framer motion": "framer",
  express: "express",
  "express.js": "express",
  expressjs: "express",
  echarts: "echarts",
  "apache echarts": "echarts",
  mapbox: "mapbox",
  "mapbox gl": "mapbox",
  blazor: "blazor",
  ".net": "dotnet",
  dotnet: "dotnet",
  "asp.net": "dotnet",
  "asp.net core": "dotnet",
  "c#": "csharp",
  csharp: "csharp",
  "c sharp": "csharp",
};

/** Normalize a label and resolve to a known tech key when possible. */
export function resolveTechKey(name: string): TechKey | null {
  const raw = name.trim().toLowerCase();
  if (!raw) return null;
  if (ALIASES[raw]) return ALIASES[raw];

  // Compound labels: "Next.js + React", "MUI + Tailwind", "APIs & NestJS"
  const parts = raw.split(/\s*(?:\+|\/|&|,|\band\b)\s*/);
  for (const part of parts) {
    const p = part.trim().replace(/^apis?\s*/i, "").trim();
    if (ALIASES[p]) return ALIASES[p];
  }

  // Soft includes for longer labels
  const ordered = Object.entries(ALIASES).sort(
    (a, b) => b[0].length - a[0].length,
  );
  for (const [alias, key] of ordered) {
    if (raw.includes(alias)) return key;
  }
  return null;
}

function NextJsIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} fill="currentColor">
      <circle cx="12" cy="12" r="10.5" fill="#000" />
      <path
        fill="#fff"
        d="M17.2 16.8h-1.55l-5.05-7.45V16.8H9.1V7.2h1.65l4.95 7.35V7.2h1.5v9.6Z"
      />
    </svg>
  );
}

function NestJsIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="#E0234E">
      <path d="M12.3 2.1c-.4-.2-.9-.2-1.3 0C8.2 3.4 3.5 7.6 3.5 13.2c0 4.1 2.6 7.2 6.2 8.4.4.1.8-.2.8-.6v-2.3c-2.5.5-3.1-1.2-3.1-1.2-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.7 1.3 2 1 2.4.7.1-.5.3-.9.5-1.1-1.9-.2-3.9-1-3.9-4.2 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9.7-.2 1.4-.3 2.2-.3s1.5.1 2.2.3c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.3-2 4-3.9 4.2.3.3.6.8.6 1.6v2.4c0 .4.4.7.8.6 3.6-1.2 6.2-4.3 6.2-8.4 0-5.6-4.7-9.8-7.5-11.1Z" />
    </svg>
  );
}

function PostgresIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="#336791">
      <path d="M16.7 2.4c-1-.2-2.1.1-3 .7-.7-.3-1.5-.5-2.3-.5-1.4 0-2.7.6-3.6 1.6C6.4 3.4 5 3 3.8 3.6c-1.5.8-1.9 2.7-1.3 4.4.3.9.9 1.6 1.6 2.1-.1.5-.1 1 0 1.5.3 1.7 1.5 3.2 3.1 3.9.4 1.5 1.4 2.8 2.8 3.5v1.6c0 .7.6 1.3 1.3 1.3h1.4c.7 0 1.3-.6 1.3-1.3v-1.5c1.5-.6 2.6-1.9 3.1-3.5 1.5-.7 2.6-2.1 2.9-3.8.2-.5.2-1.1.1-1.6.8-.5 1.4-1.3 1.6-2.3.5-1.7 0-3.6-1.4-4.3-1-.5-2.2-.4-3-.1Zm-1.1 1.7c.5-.1 1.1 0 1.5.2.6.3.9 1.2.6 2-.2.6-.7 1-1.3 1.2-.3-1.1-.9-2.1-1.7-2.9.3-.3.6-.5.9-.5Zm-5.3.2c.3 0 .7.1 1 .4-.9.8-1.5 1.9-1.8 3.1-.7-.2-1.3-.7-1.5-1.3-.3-.8 0-1.7.6-2 .5-.3 1.1-.4 1.7-.2Zm2.7 1.3c.9.7 1.5 1.7 1.8 2.8-.6.2-1.2.3-1.8.3s-1.2-.1-1.8-.3c.3-1.1.9-2.1 1.8-2.8Zm-5.6 3.3c.5.4 1.1.6 1.8.7-.1.6-.1 1.2 0 1.8-.8-.4-1.4-1.1-1.7-1.9-.1-.2-.1-.4-.1-.6Zm11.2.1c0 .2 0 .4-.1.6-.3.8-.9 1.5-1.7 1.9.1-.6.1-1.2 0-1.8.7-.1 1.3-.3 1.8-.7Zm-5.6 2.4c.7 0 1.4-.1 2-.4.3 1.1-.1 2.3-1 3-.4.3-.9.5-1.4.5s-1-.2-1.4-.5c-.9-.7-1.3-1.9-1-3 .6.3 1.3.4 2 .4Z" />
    </svg>
  );
}

function RedisIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="none">
      <path
        fill="#DC382D"
        d="M12 3.2 3.5 7.1v2.2L12 13.2l8.5-3.9V7.1L12 3.2Z"
      />
      <path
        fill="#A41E11"
        d="M3.5 10.5v2.2L12 16.6l8.5-3.9v-2.2L12 13.2 3.5 10.5Z"
      />
      <path
        fill="#DC382D"
        d="M3.5 14v2.2L12 20.1l8.5-3.9V14L12 17.9 3.5 14Z"
      />
      <path fill="#fff" opacity="0.35" d="M12 3.2 7.5 8.8 12 13.2l4.5-4.4L12 3.2Z" />
    </svg>
  );
}

function ReactIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          transform="rotate(120 12 12)"
        />
      </g>
    </svg>
  );
}

function TypeScriptIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path
        fill="#fff"
        d="M12.9 17.5v-6.2H9.2V9.6h9.1v1.7h-3.7v6.2h-1.7Zm-5.7 0 .2-1.5c.2.1.4.2.6.2.3 0 .5-.1.6-.2.2-.2.2-.4.2-.7v-4.4h1.8v4.5c0 .7-.2 1.3-.6 1.7-.4.4-1 .6-1.7.6-.5 0-1-.1-1.4-.3l.3-1.1Z"
      />
    </svg>
  );
}

function NodeIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="#339933">
      <path d="M12 2.1 3.8 6.8v10.4L12 21.9l8.2-4.7V6.8L12 2.1Zm0 1.8 6.4 3.7v7.8L12 19.1l-6.4-3.7V7.6L12 3.9Zm-.1 2.8v2.1c-1.5.1-2.5.6-2.5 1.6 0 1.1 1 1.5 2.5 1.8 2.1.4 3.5 1.1 3.5 3 0 1.9-1.4 2.9-3.6 3.1v2.1h-1.6v-2.1c-1.9-.2-3.4-1-3.6-2.9h1.8c.1.9.8 1.4 2 1.5v-2.1c-1.8-.3-3.4-.9-3.4-2.9 0-1.9 1.4-2.9 3.3-3.1V6.7h1.6Zm1.6 3.7c.9.2 1.4.6 1.4 1.3 0 .8-.6 1.2-1.4 1.4V10.4Z" />
    </svg>
  );
}

function ReactQueryIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3.2" fill="#FF4154" />
      <circle
        cx="12"
        cy="12"
        r="7"
        stroke="#FF4154"
        strokeWidth="1.6"
        strokeDasharray="3.5 2.8"
      />
      <circle cx="12" cy="5" r="1.4" fill="#FFD54F" />
      <circle cx="18.1" cy="15.5" r="1.4" fill="#FFD54F" />
      <circle cx="5.9" cy="15.5" r="1.4" fill="#FFD54F" />
    </svg>
  );
}

function TailwindIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="#38BDF8">
      <path d="M12 6.5c-2.5 0-4.1 1.2-4.8 3.7.9-1.2 2-1.7 3.2-1.4.7.2 1.2.7 1.8 1.3.9 1 2 1.7 3.5 1.7 2.5 0 4.1-1.2 4.8-3.7-.9 1.2-2 1.7-3.2 1.4-.7-.2-1.2-.7-1.8-1.3-.9-1-2-1.7-3.5-1.7Zm-4.8 7.2c-2.5 0-4.1 1.2-4.8 3.7.9-1.2 2-1.7 3.2-1.4.7.2 1.2.7 1.8 1.3.9 1 2 1.7 3.5 1.7 2.5 0 4.1-1.2 4.8-3.7-.9 1.2-2 1.7-3.2 1.4-.7-.2-1.2-.7-1.8-1.3-.9-1-2-1.7-3.5-1.7Z" />
    </svg>
  );
}

function MuiIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="none">
      <path fill="#007FFF" d="M3.5 5.2 12 2.5l8.5 2.7v5.4L12 13.3 3.5 10.6V5.2Z" />
      <path fill="#007FFF" d="M3.5 12.2 12 15l3.2-1v3.4L12 19l-8.5-2.7v-4.1Z" />
      <path fill="#007FFF" opacity="0.6" d="M15.2 14 18.5 13v3.4L15.2 17.4V14Z" />
    </svg>
  );
}

function ChakraIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="#319795">
      <path d="M12 2.5 4.2 16.2h4.3L12 9.8l3.5 6.4h4.3L12 2.5Zm-5.2 15.2L12 21.5l5.2-3.8H6.8Z" />
    </svg>
  );
}

function MantineIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="#339AF0">
      <circle cx="12" cy="12" r="9.5" />
      <path
        fill="#fff"
        d="M8.2 15.4V8.6h2.1l2.5 4.4h.1l2.5-4.4h2.1v6.8h-1.7v-4.3h-.1l-2.2 3.8h-1.3l-2.2-3.8h-.1v4.3H8.2Z"
      />
    </svg>
  );
}

function ViteIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="none">
      <path d="M12.2 14.8 4.5 3.8h5.2l2.5 4.6 2.5-4.6h5.2l-7.7 11Z" fill="#BD34FE" />
      <path d="M12.2 20.2 8 12.8l1.9-1.1 2.3 4 2.3-4 1.9 1.1-4.2 7.4Z" fill="#FFD62E" />
    </svg>
  );
}

function JavaScriptIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path
        fill="#323330"
        d="M12.4 16.2c0 1.9-1.1 2.9-2.9 2.9-1.5 0-2.5-.7-3-1.7l1.6-.9c.3.5.6.9 1.3.9.7 0 1.1-.3 1.1-1.5v-4.1h1.9v4.4Zm4.5 2.9c-1.8 0-3-.9-3.5-2l1.6-.9c.3.7.8 1.2 1.8 1.2.7 0 1.2-.3 1.2-.9 0-.6-.5-.9-1.4-1.2l-.5-.2c-1.4-.6-2.3-1.4-2.3-3 0-1.5 1.1-2.6 2.9-2.6 1.3 0 2.2.4 2.9 1.6l-1.6.9c-.3-.5-.7-.8-1.3-.8-.6 0-1 .4-1 .8 0 .6.4.8 1.3 1.2l.5.2c1.6.7 2.5 1.5 2.5 3.1 0 1.8-1.4 2.8-3.1 2.8Z"
      />
    </svg>
  );
}

function FramerIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 2.5h14v6.3H12L19 15.2H5V8.8h7L5 2.5Zm0 12.7h7V21.5L5 15.2Z" />
    </svg>
  );
}

function ExpressIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.4 8.2h2.3l2.6 5.4h.1l2.6-5.4h2.3v7.6h-1.8v-4.8h-.1l-2.4 4.8H8l-2.4-4.8h-.1v4.8H3.7V8.2h-1.3Zm12.3 0h7.2v1.7h-5.3v1.5h4.8v1.6h-4.8v1.6h5.4v1.7h-7.3V8.2Z" />
    </svg>
  );
}

function EChartsIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        fill="currentColor"
        d="M12 4.5A7.5 7.5 0 0 1 19.5 12H12V4.5Z"
        opacity="0.9"
      />
      <path
        fill="currentColor"
        d="M12 12h7.5A7.5 7.5 0 0 1 8.8 18.8L12 12Z"
        opacity="0.55"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

function MapboxIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.2 4.2 6.5v11L12 21.8l7.8-4.3v-11L12 2.2Zm0 2.1 5.8 3.2v.4L12 12.1 6.2 7.9v-.4L12 4.3Zm-5.8 5.1 5.2 3.8v5.4l-5.2-2.9V9.4Zm7 9.2v-5.4l5.2-3.8v6.3l-5.2 2.9Z" />
    </svg>
  );
}

function BlazorIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="#512BD4">
      <path d="M12 2.2 2.4 7.7v8.6L12 21.8l9.6-5.5V7.7L12 2.2Zm0 2.2 7.4 4.2v.5l-7.4 4.3-7.4-4.3v-.5L12 4.4Zm-7.4 6.1 6.6 3.8v5.5l-6.6-3.8v-5.5Zm8.2 9.3v-5.5l6.6-3.8v5.5l-6.6 3.8Z" />
    </svg>
  );
}

function DotNetIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#512BD4" />
      <path
        fill="#fff"
        d="M4.2 15.2V8.8h1.7c1.6 0 2.6.8 2.6 2.2 0 .9-.4 1.6-1.1 1.9l1.4 2.3H7.2l-1.2-2.1H5.9v2.1H4.2Zm1.7-3.5h.4c.6 0 1-.3 1-.9s-.4-.9-1-.9h-.4v1.8Zm5.2 3.5c-1.5 0-2.5-1.1-2.5-2.7S9.6 9.8 11.1 9.8c1.5 0 2.5 1.1 2.5 2.7s-1 2.7-2.5 2.7Zm0-1.4c.7 0 1.1-.6 1.1-1.3s-.4-1.3-1.1-1.3-1.1.6-1.1 1.3.4 1.3 1.1 1.3Zm3.8 1.4V8.8h1.6v5.1h2.6v1.3h-4.2Z"
      />
    </svg>
  );
}

function CSharpIcon(props: SvgProps) {
  return (
    <svg {...svgBase(props)} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#512BD4" />
      <path
        fill="#fff"
        d="M8.2 16.4c-2.1 0-3.5-1.5-3.5-3.9S6.1 8.6 8.2 8.6c1.2 0 2.1.5 2.7 1.3l-1.2.9c-.3-.4-.8-.7-1.4-.7-1.1 0-1.9.9-1.9 2.4s.8 2.4 1.9 2.4c.6 0 1.1-.3 1.4-.7l1.2.9c-.6.8-1.5 1.3-2.7 1.3Zm7.4-.2-1-.9c.4-.5.6-1.1.6-1.8s-.2-1.3-.6-1.8l1-.9c.6.7.9 1.6.9 2.7s-.3 2-.9 2.7Zm2.6 0-1-.9c.4-.5.6-1.1.6-1.8s-.2-1.3-.6-1.8l1-.9c.6.7.9 1.6.9 2.7s-.3 2-.9 2.7Zm-3.4-4.6h1.3v1.1h-1.3v1.3h-1.1v-1.3H12v-1.1h1.3V10.3h1.1v1.3Z"
      />
    </svg>
  );
}

const ICONS: Record<TechKey, (props: SvgProps) => ReactNode> = {
  nextjs: NextJsIcon,
  nestjs: NestJsIcon,
  postgresql: PostgresIcon,
  redis: RedisIcon,
  react: ReactIcon,
  typescript: TypeScriptIcon,
  nodejs: NodeIcon,
  reactquery: ReactQueryIcon,
  tailwind: TailwindIcon,
  mui: MuiIcon,
  chakra: ChakraIcon,
  mantine: MantineIcon,
  vite: ViteIcon,
  javascript: JavaScriptIcon,
  framer: FramerIcon,
  express: ExpressIcon,
  echarts: EChartsIcon,
  mapbox: MapboxIcon,
  blazor: BlazorIcon,
  dotnet: DotNetIcon,
  csharp: CSharpIcon,
};

export function TechIcon({
  name,
  size = "0.9rem",
  className,
}: {
  name: string;
  size?: number | string;
  className?: string;
}) {
  const key = resolveTechKey(name);
  if (!key) return null;
  const Icon = ICONS[key];
  return <Icon size={size} className={className} />;
}

type ChipTone = "light" | "surface" | "hero" | "plain";

const toneClass: Record<ChipTone, string> = {
  light: "border border-white/20 px-3 py-1.5 text-white/90",
  surface: "border border-line bg-surface px-3 py-1.5 text-foreground",
  hero: "border border-white/10 bg-ink/40 px-2.5 py-1.5 text-white/75",
  plain: "bg-surface px-2.5 py-1 text-foreground/80",
};

/** Chip with optional brand logo for known tech names. */
export function TechChip({
  label,
  tone = "surface",
  className = "",
  iconSize = "0.9rem",
}: {
  label: string;
  tone?: ChipTone;
  className?: string;
  iconSize?: number | string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-mono text-xs ${toneClass[tone]} ${className}`}
    >
      <TechIcon name={label} size={iconSize} />
      {label}
    </span>
  );
}
