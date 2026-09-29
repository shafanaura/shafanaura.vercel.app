"use client";

import { AbstractCover } from "@/components/ui/primitives";
import { ExpandIcon } from "@/components/icons";
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
  onExpand,
}: {
  shot?: ProjectScreenshot;
  fallback: [string, string];
  className?: string;
  onExpand?: () => void;
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

  const expandBtn = onExpand ? (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onExpand();
      }}
      className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-lg bg-ink/80 px-2.5 py-1.5 font-mono text-[0.65rem] tracking-wide text-white/90 backdrop-blur-sm transition hover:bg-ink hover:text-accent-bright"
      aria-label="View full page"
    >
      <ExpandIcon size="0.75rem" />
      Full view
    </button>
  ) : null;

  if (shot.tall) {
    return (
      <div className={`relative ${className}`}>
        {expandBtn}
        <div
          className="absolute inset-0 overflow-y-auto overscroll-contain bg-ink/5"
          data-lenis-prevent
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shot.src}
            alt={shot.alt}
            className={`block w-full ${onExpand ? "cursor-zoom-in" : ""}`}
            onClick={onExpand}
          />
        </div>
        <p className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-ink/65 via-ink/25 to-transparent px-4 pt-8 pb-3 text-center font-mono text-[0.65rem] tracking-wide text-white/85">
          Scroll preview · click for full view
        </p>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onExpand}
      disabled={!onExpand}
      className={`group relative overflow-hidden bg-ink/5 text-left ${onExpand ? "cursor-zoom-in" : ""} ${className}`}
      aria-label={onExpand ? "Open full view" : undefined}
    >
      {expandBtn}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={shot.src}
        alt={shot.alt}
        className="absolute inset-0 size-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
      />
    </button>
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
