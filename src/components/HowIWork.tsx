"use client";

import { LineReveal, Reveal } from "@/components/ui/motion";
import { Eyebrow, Shell } from "@/components/ui/primitives";
import { HOW_I_WORK } from "@/lib/site";

export function HowIWork() {
  return (
    <section id="approach" className="bg-background">
      <Shell className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <Reveal>
          <Eyebrow>{HOW_I_WORK.eyebrow}</Eyebrow>
        </Reveal>
        <LineReveal
          as="h2"
          lines={[HOW_I_WORK.title]}
          delay={80}
          className="mt-4 max-w-[16ch] font-display text-4xl font-bold tracking-tight sm:text-5xl"
        />

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOW_I_WORK.points.map((point, i) => (
            <Reveal
              key={point.title}
              as="li"
              delay={i * 50}
              from={{ opacity: 0, transform: "translateY(16px)" }}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-accent uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {point.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
