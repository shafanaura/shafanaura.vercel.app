"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CloseIcon,
  ExternalLinkIcon,
  GithubIcon,
} from "@/components/icons";
import { AbstractCover } from "@/components/ui/primitives";
import { EASE } from "@/lib/constants";
import { useSite } from "@/providers/LumoraProvider";

export function ProjectModal() {
  const { activeProject, closeProject } = useSite();
  const [visible, setVisible] = useState(false);
  const [activeShot, setActiveShot] = useState(0);

  useEffect(() => {
    if (activeProject) {
      setActiveShot(0);
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject();
      if (!activeProject.screenshots.length) return;
      if (e.key === "ArrowRight") {
        setActiveShot((i) => (i + 1) % activeProject.screenshots.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveShot(
          (i) =>
            (i - 1 + activeProject.screenshots.length) %
            activeProject.screenshots.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeProject, closeProject]);

  if (!activeProject) return null;

  const shots = activeProject.screenshots;
  const shot = shots[activeShot];
  const tone = shot?.tone ?? activeProject.cover;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={activeProject.name}
      className="fixed inset-0 z-[112] flex items-end justify-center p-4 sm:items-center"
      style={{
        background: "rgba(11,16,32,0.55)",
        backdropFilter: "blur(14px)",
        opacity: visible ? 1 : 0,
        transition: `opacity 350ms ${EASE.spring200}`,
      }}
      onClick={closeProject}
    >
      <div
        className="relative flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-background shadow-2xl ring-1 ring-line"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: `opacity 400ms ${EASE.spring200}, transform 400ms ${EASE.spring200}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={closeProject}
          className="absolute right-4 top-4 z-20 grid size-9 place-items-center rounded-xl bg-white/90 text-muted ring-1 ring-line transition hover:text-foreground"
        >
          <CloseIcon size="1rem" />
        </button>

        <div className="overflow-y-auto">
          <AbstractCover
            from={tone[0]}
            to={tone[1]}
            label={shot?.caption ?? activeProject.name}
            className="aspect-[16/9] w-full"
          />

          {shots.length > 1 && (
            <div className="flex gap-2 overflow-x-auto border-b border-line bg-white px-4 py-3">
              {shots.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveShot(i)}
                  className={`h-14 w-22 shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                    i === activeShot
                      ? "ring-accent"
                      : "ring-transparent opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Screenshot ${i + 1}`}
                >
                  <AbstractCover
                    from={(s.tone ?? activeProject.cover)[0]}
                    to={(s.tone ?? activeProject.cover)[1]}
                    className="h-full w-full"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="space-y-6 bg-white p-6 sm:p-8">
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                {activeProject.category} — {activeProject.year}
              </p>
              <h2 className="mt-1 font-display text-3xl font-bold tracking-tight">
                {activeProject.name}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {activeProject.description}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                  Role
                </p>
                <p className="mt-1.5 text-sm font-medium leading-snug">
                  {activeProject.role}
                </p>
              </div>
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                  Tech
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-surface px-2.5 py-1 font-mono text-xs text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-line pt-5">
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-accent-bright"
                >
                  Live site
                  <ExternalLinkIcon size="1rem" />
                </a>
              )}
              {activeProject.repoUrl && (
                <a
                  href={activeProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold"
                >
                  <GithubIcon size="1rem" />
                  Source
                </a>
              )}
              <button
                type="button"
                onClick={closeProject}
                className="ml-auto inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
              >
                Close
                <ArrowRight size="0.875rem" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
