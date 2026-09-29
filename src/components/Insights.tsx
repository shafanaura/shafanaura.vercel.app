"use client";

import { LineReveal, Reveal } from "@/components/ui/motion";
import { TechChip } from "@/components/TechIcon";
import { Eyebrow, Shell } from "@/components/ui/primitives";
import { INSIGHTS } from "@/lib/site";

export function Insights() {
  return (
    <section id="notes" className="bg-background">
      <Shell className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <Reveal>
          <Eyebrow>Notes</Eyebrow>
        </Reveal>
        <LineReveal
          as="h2"
          lines={["Why I choose X"]}
          delay={80}
          className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl"
        />
        <p className="mt-4 max-w-xl text-sm text-muted">
          Short takes from real projects — stack decisions without the slide-deck
          fluff.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {INSIGHTS.map((note, i) => (
            <Reveal
              key={note.id}
              as="li"
              delay={i * 60}
              from={{ opacity: 0, transform: "translateY(16px)" }}
              className="rounded-2xl border border-line bg-white p-6 sm:p-7"
            >
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <TechChip key={tag} label={tag} tone="surface" />
                ))}
              </div>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight">
                {note.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {note.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
