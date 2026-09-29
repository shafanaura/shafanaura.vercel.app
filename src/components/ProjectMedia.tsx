"use client";

import { AbstractCover } from "@/components/ui/primitives";
import { ExpandIcon } from "@/components/icons";
import type { Project, ProjectScreenshot } from "@/lib/site";

export function projectCoverSrc(project: Project) {
  return project.screenshots.find((s) => s.src)?.src;
}

function ShotVeil() {
  return <div className="project-media__veil" aria-hidden />;
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
    <div
      className={`project-media project-media--inset project-media--card ${className}`}
    >
      <div className="project-media__frame absolute inset-[0.7rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={label ?? project.name}
          className="project-media__img absolute inset-0 size-full object-cover"
        />
        <ShotVeil />
      </div>
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
      <div className={`project-media project-media--inset relative ${className}`}>
        {expandBtn}
        <div className="project-media__frame absolute inset-[0.7rem]">
          <div
            className="absolute inset-0 overflow-y-auto overscroll-contain bg-ink-soft"
            data-lenis-prevent
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shot.src}
              alt={shot.alt}
              className={`project-media__img block w-full ${onExpand ? "cursor-zoom-in" : ""}`}
              onClick={onExpand}
            />
          </div>
          <ShotVeil />
          <p className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-ink/70 via-ink/30 to-transparent px-4 pt-10 pb-3 text-center font-mono text-[0.65rem] tracking-wide text-white/85">
            Scroll preview · click for full view
          </p>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onExpand}
      disabled={!onExpand}
      className={`project-media project-media--inset group relative text-left ${onExpand ? "cursor-zoom-in" : ""} ${className}`}
      aria-label={onExpand ? "Open full view" : undefined}
    >
      {expandBtn}
      <div className="project-media__frame absolute inset-[0.7rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={shot.src}
          alt={shot.alt}
          className="project-media__img absolute inset-0 size-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
        <ShotVeil />
      </div>
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
    <div
      className={`project-media project-media--thumb project-media--inset-sm ${className}`}
    >
      <div className="project-media__frame absolute inset-[0.35rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={shot.src}
          alt=""
          className="project-media__img absolute inset-0 size-full object-cover"
        />
        <ShotVeil />
      </div>
    </div>
  );
}
