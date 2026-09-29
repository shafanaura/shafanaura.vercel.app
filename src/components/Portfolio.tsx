"use client";

import { ArrowUpRight } from "@/components/icons";
import { ProjectCover } from "@/components/ProjectMedia";
import { LineReveal, Reveal } from "@/components/ui/motion";
import { TechChip } from "@/components/TechIcon";
import { Eyebrow, Shell } from "@/components/ui/primitives";
import { PROJECTS, type Project } from "@/lib/site";
import { useSite } from "@/providers/LumoraProvider";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { openProject } = useSite();

  return (
    <Reveal
      as="li"
      delay={index * 70}
      from={{ opacity: 0, transform: "translateY(28px)" }}
    >
      <button
        type="button"
        onClick={() => openProject(project)}
        className="group grid w-full grid-cols-1 items-stretch gap-0 overflow-hidden rounded-2xl border border-line bg-white text-left transition duration-400 hover:border-accent/40 hover:shadow-[0_20px_50px_-30px_rgba(11,16,32,0.35)] md:grid-cols-12"
      >
        <ProjectCover
          project={project}
          label={project.status === "archived" ? "archived" : project.id}
          className="min-h-48 border-b border-ink/20 md:col-span-4 md:min-h-full md:border-b-0 md:border-r"
        />

        <div className="flex flex-col justify-between gap-5 p-6 sm:p-8 md:col-span-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                {String(index + 1).padStart(2, "0")} · {project.category} ·{" "}
                {project.year}
                {project.status === "archived" ? " · archived" : ""}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
              {project.impact && (
                <p className="mt-3 font-mono text-xs text-accent">
                  → {project.impact}
                </p>
              )}
            </div>
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-accent-bright transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight />
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TechChip key={tag} label={tag} tone="surface" />
            ))}
          </div>
        </div>
      </button>
    </Reveal>
  );
}

export function Portfolio() {
  return (
    <section id="works" className="bg-background">
      <Shell className="px-5 py-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Eyebrow>Selected work</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              lines={["Case studies"]}
              delay={80}
              className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl"
            />
          </div>
          <p className="max-w-xs text-sm text-muted sm:shrink-0 sm:text-right">
            Real client products with production screenshots.
          </p>
        </div>

        <ul className="mt-12 flex flex-col gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </ul>
      </Shell>
    </section>
  );
}
