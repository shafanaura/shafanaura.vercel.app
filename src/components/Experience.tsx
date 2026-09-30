"use client";

import { TechChip } from "@/components/TechIcon";
import { LineReveal, Reveal } from "@/components/ui/motion";
import { Eyebrow, Shell } from "@/components/ui/primitives";
import { EXPERIENCE, EXPERIENCE_TOTAL, SITE } from "@/lib/site";

export function Experience() {
  return (
    <section id="experience" className="bg-white" aria-label="Experience">
      <Shell className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Eyebrow>Experience</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              lines={["Where I’ve shipped"]}
              delay={80}
              className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl"
            />
          </div>
          <div className="max-w-xs sm:shrink-0 sm:text-right">
            <p className="font-mono text-[0.7rem] text-muted">
              {EXPERIENCE_TOTAL} total
            </p>
            <p className="mt-1.5 text-sm text-muted">
              From agency product work to Top-Rated freelance.{" "}
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-2 hover:underline"
              >
                Full LinkedIn
              </a>
              .
            </p>
          </div>
        </div>

        <ol className="mt-14 space-y-0 border-l border-line pl-6 sm:pl-8">
          {EXPERIENCE.map((job, i) => (
            <Reveal
              key={`${job.company}-${job.period}`}
              as="li"
              delay={i * 80}
              from={{ opacity: 0, transform: "translateY(20px)" }}
              className="relative pb-12 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute top-1.5 -left-[1.9rem] size-2.5 rounded-full bg-accent sm:-left-[2.4rem]"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                    {job.role}
                  </h3>
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-foreground/80 underline-offset-2 transition hover:text-accent hover:underline"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-foreground/80">
                      {job.company}
                    </p>
                  )}
                </div>
                <div className="shrink-0 font-mono text-[0.7rem] text-muted sm:text-right">
                  <p>
                    {job.period}{" "}
                    <span className="text-subtle">({job.duration})</span>
                  </p>
                  <p className="mt-0.5 text-subtle">{job.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((line) => (
                  <li
                    key={line}
                    className="text-sm leading-relaxed text-muted before:mr-2 before:text-accent before:content-['→']"
                  >
                    {line}
                  </li>
                ))}
              </ul>
              <ul className="mt-3.5 flex list-none flex-wrap gap-1.5 p-0">
                {job.stack.map((tech) => (
                  <li key={tech}>
                    <TechChip label={tech} tone="plain" iconSize="0.75rem" />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </Shell>
    </section>
  );
}
