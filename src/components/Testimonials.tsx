"use client";

import { LineReveal, Reveal } from "@/components/ui/motion";
import { Eyebrow, Shell } from "@/components/ui/primitives";
import { TESTIMONIALS, SITE } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="bg-white" aria-label="Testimonials">
      <Shell className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Eyebrow>Social proof</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              lines={["What collaborators say"]}
              delay={80}
              className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl"
            />
          </div>
          <p className="max-w-xs text-sm text-muted">
            Real feedback from Upwork clients.{" "}
            <a
              href={SITE.social.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-2 hover:underline"
            >
              See full profile
            </a>
            .
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              as="li"
              delay={i * 70}
              from={{ opacity: 0, transform: "translateY(20px)" }}
              className="flex flex-col rounded-2xl border border-line bg-background p-6 sm:p-7"
            >
              <p className="flex-1 text-sm leading-relaxed text-foreground/85">
                “{t.quote}”
              </p>
              <div className="mt-6 border-t border-line pt-4">
                <p className="font-display text-base font-semibold">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
                <p className="mt-1 font-mono text-[0.65rem] text-subtle">
                  {t.source}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
