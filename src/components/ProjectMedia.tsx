"use client";

import { AbstractCover } from "@/components/ui/primitives";
import type { Project, ProjectScreenshot } from "@/lib/site";

export function projectCoverSrc(project: Project) {
  return project.screenshots.find((s) => s.src)?.src;
}

export function ProjectCover({
  project,
  label,
  className = "",
}: {
  project: Project;
  label?: string;
  className?: string;
}) {
  const src = projectCoverSrc(project);
  if (!src) {
    return (
      <AbstractCover
        from={project.cover[0]}
        to={project.cover[1]}
        label={label}
        className={className}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden bg-ink/5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={label ?? project.name}
        className="absolute inset-0 size-full object-cover object-top"
      />
    </div>
  );
}

export function ProjectShot({
  shot,
  fallback,
  className = "",
}: {
  shot?: ProjectScreenshot;
  fallback: [string, string];
  className?: string;
}) {
  if (!shot?.src) {
    return (
      <AbstractCover
        from={(shot?.tone ?? fallback)[0]}
        to={(shot?.tone ?? fallback)[1]}
        label={shot?.caption}
        className={className}
      />
    );
  }

  if (shot.tall) {
    return (
      <div className={`relative ${className}`}>
        <div
          className="absolute inset-0 overflow-y-auto overscroll-contain bg-ink/5"
          data-lenis-prevent
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shot.src} alt={shot.alt} className="block w-full" />
        </div>
        <p className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/65 via-ink/25 to-transparent px-4 pt-8 pb-3 text-center font-mono text-[0.65rem] tracking-wide text-white/85">
          Scroll to see the full page
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-ink/5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={shot.src}
        alt={shot.alt}
        className="absolute inset-0 size-full object-cover object-top"
      />
    </div>
  );
}

export function ProjectShotThumb({
  shot,
  fallback,
  className = "",
}: {
  shot: ProjectScreenshot;
  fallback: [string, string];
  className?: string;
}) {
  if (!shot.src) {
    return (
      <AbstractCover
        from={(shot.tone ?? fallback)[0]}
        to={(shot.tone ?? fallback)[1]}
        className={className}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden bg-ink/5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={shot.src}
        alt=""
        className="absolute inset-0 size-full object-cover object-top"
      />
    </div>
  );
}
