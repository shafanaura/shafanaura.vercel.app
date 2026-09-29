"use client";

import { Reveal } from "@/components/ui/motion";
import { Eyebrow, Shell } from "@/components/ui/primitives";
import { NOW } from "@/lib/site";

export function Now() {
  return (
    <section className="border-b border-line bg-white" aria-label="Now">
      <Shell className="grid grid-cols-1 gap-8 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-3">
          <Eyebrow>{NOW.eyebrow}</Eyebrow>
          <p className="mt-3 font-mono text-xs text-muted">
            Updated {NOW.updated}
          </p>
        </div>
        <ul className="space-y-3 lg:col-span-9">
          {NOW.items.map((item, i) => (
            <Reveal
              key={item}
              as="li"
              delay={i * 60}
              from={{ opacity: 0, transform: "translateY(10px)" }}
              className="flex gap-3 text-sm leading-relaxed text-foreground/85"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </Reveal>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
