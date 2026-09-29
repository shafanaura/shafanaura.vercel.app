"use client";

import { PROCESS } from "@/lib/site";

/** Replaces the Lumora "I / Build / → / Better" pill band. */
export function ProcessStrip() {
  const loop = [...PROCESS, ...PROCESS];

  return (
    <section
      className="overflow-hidden border-y border-line bg-ink py-5 text-white"
      aria-label="Process"
    >
      <div className="marquee-track gap-10 px-5">
        {loop.map((step, i) => (
          <div
            key={`${step.code}-${i}`}
            className="flex shrink-0 items-center gap-4"
          >
            <span className="font-mono text-xs text-accent-bright">
              {step.code}
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {step.label}
            </span>
            <span className="text-white/20" aria-hidden>
              /
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
