"use client";

import { ArrowUpRight } from "@/components/icons";
import { LineReveal, Reveal } from "@/components/ui/motion";
import { Eyebrow, Shell } from "@/components/ui/primitives";
import { SKILLS } from "@/lib/site";
import { useSite } from "@/providers/LumoraProvider";

export function Skills() {
  const { openRequest } = useSite();

  return (
    <section id="skills" className="bg-white">
      <Shell className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <Reveal>
          <Eyebrow>Capabilities</Eyebrow>
        </Reveal>
        <LineReveal
          as="h2"
          lines={["How I help teams ship"]}
          delay={100}
          className="mt-4 max-w-[14ch] font-display text-4xl font-bold tracking-tight sm:text-5xl"
        />

        <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {SKILLS.map((skill, index) => (
            <Reveal
              key={skill.index}
              as="li"
              delay={index * 70}
              from={{ opacity: 0, transform: "translateY(20px)" }}
            >
              <button
                type="button"
                onClick={openRequest}
                className="group flex h-full w-full flex-col gap-6 rounded-2xl border border-line bg-background p-6 text-left transition hover:border-accent/40 hover:bg-surface sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent">
                    {skill.index}
                  </span>
                  <span className="grid size-9 place-items-center rounded-lg bg-ink text-accent-bright opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight size="0.9rem" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {skill.description}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
