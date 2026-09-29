"use client";

import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

type Variant = "dark" | "light" | "outline" | "accent" | "ghost";
type Arrow = "right" | "up-right" | false;

type PillButtonProps = {
  children: ReactNode;
  variant?: Variant;
  arrow?: Arrow;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
};

const variantClass: Record<Variant, string> = {
  dark: "bg-ink text-white",
  light: "bg-surface text-foreground",
  outline: "border border-line bg-transparent text-foreground",
  accent: "bg-accent-bright text-ink",
  ghost: "border border-white/25 bg-transparent text-white",
};

export function PillButton({
  children,
  variant = "dark",
  arrow = false,
  onClick,
  href,
  type = "button",
  className = "",
  disabled,
}: PillButtonProps) {
  const pad = arrow ? "py-1.5 pl-5 pr-1.5" : "py-3 px-6";
  const badgeBg =
    variant === "accent" || variant === "light"
      ? "bg-ink text-accent-bright"
      : variant === "ghost"
        ? "bg-white/15 text-white"
        : "bg-white text-ink";
  const Icon = arrow === "up-right" ? ArrowUpRight : ArrowRight;

  const inner = (
    <span
      className={`inline-flex items-center gap-3 rounded-xl text-sm font-semibold tracking-tight transition-transform duration-300 hover:scale-[1.03] ${pad} ${variantClass[variant]}`}
    >
      {children}
      {arrow && (
        <span
          className={`grid size-8 place-items-center rounded-lg text-sm ${badgeBg}`}
        >
          <Icon size="0.9rem" />
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={`inline-block ${className}`}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-block ${className}`}
    >
      {inner}
    </button>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs tracking-[0.16em] uppercase ${
        tone === "light" ? "text-white/55" : "text-muted"
      } ${className}`}
    >
      <span
        className={`size-1.5 shrink-0 rounded-full ${
          tone === "light" ? "bg-accent-bright" : "bg-accent"
        }`}
      />
      {children}
    </span>
  );
}

export function TagChip({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "surface";
}) {
  if (tone === "surface") {
    return (
      <span className="inline-flex rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-xs text-foreground">
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex rounded-md border border-white/20 px-3 py-1.5 font-mono text-xs text-white/90">
      {children}
    </span>
  );
}

export function AnimatedLink({
  children,
  href,
  onClick,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const cls = `inline-flex text-sm transition-colors hover:text-accent ${className}`;
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function Shell({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`mx-auto w-full max-w-[88rem] ${className}`} style={style}>
      {children}
    </div>
  );
}

export function AbstractCover({
  from,
  to,
  label,
  className = "",
}: {
  from: string;
  to: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.25), transparent 45%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {label && (
        <span className="absolute bottom-3 left-3 font-mono text-xs text-white/50">
          {label}
        </span>
      )}
    </div>
  );
}
