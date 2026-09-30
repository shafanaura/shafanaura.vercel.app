"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CloseIcon,
  ExpandIcon,
  ExternalLinkIcon,
} from "@/components/icons";
import {
  ProjectShot,
  ProjectShotThumb,
} from "@/components/ProjectMedia";
import { DomainChip, TechChip, TechIcon } from "@/components/TechIcon";
import { EASE } from "@/lib/constants";
import { useSite } from "@/providers/LumoraProvider";

export function ProjectModal() {
  const { activeProject, closeProject } = useSite();
  const [visible, setVisible] = useState(false);
  const [activeShot, setActiveShot] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (activeProject) {
      setActiveShot(0);
      setLightbox(false);
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      setLightbox(false);
    }
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox) {
          setLightbox(false);
          return;
        }
        closeProject();
        return;
      }
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
  }, [activeProject, closeProject, lightbox]);

  if (!activeProject) return null;

  const shots = activeProject.screenshots;
  const shot = shots[activeShot];
  const isTall = Boolean(shot?.tall && shot?.src);
  const canExpand = Boolean(shot?.src);

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
        onWheel={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        <button
          type="button"
          aria-label="Close"
          onClick={closeProject}
          className="absolute right-4 top-4 z-20 grid size-9 place-items-center rounded-xl bg-white/90 text-muted ring-1 ring-line transition hover:text-foreground"
        >
          <CloseIcon size="1rem" />
        </button>

        <div
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
          data-lenis-prevent
        >
          <ProjectShot
            shot={shot}
            fallback={activeProject.cover}
            onExpand={canExpand ? () => setLightbox(true) : undefined}
            className={
              isTall
                ? "h-[min(58vh,28rem)] w-full shrink-0 border-b border-ink/15"
                : "aspect-[16/10] w-full shrink-0 border-b border-ink/15"
            }
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
                  aria-label={`View ${s.caption ?? i + 1}`}
                >
                  <ProjectShotThumb
                    shot={s}
                    fallback={activeProject.cover}
                    className="h-full w-full"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="space-y-7 bg-white p-6 sm:p-8">
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                {activeProject.category} — {activeProject.year}
                {activeProject.status === "archived" ? " · archived" : ""}
              </p>
              <h2 className="mt-1 font-display text-3xl font-bold tracking-tight">
                {activeProject.name}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {activeProject.description}
              </p>
              {activeProject.impact && (
                <p className="mt-3 rounded-xl bg-surface px-3 py-2 font-mono text-xs text-accent">
                  Impact · {activeProject.impact}
                </p>
              )}
            </div>

            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                Role
              </p>
              <p className="mt-1.5 text-sm font-medium">{activeProject.role}</p>
            </div>

            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                What I achieved
              </p>
              <ul className="mt-3 space-y-2">
                {activeProject.achievements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-foreground/80"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                Focus
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {activeProject.tags.map((tag) => (
                  <DomainChip key={tag} label={tag} />
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                Why this stack
              </p>
              <ul className="mt-3 space-y-3">
                {activeProject.whyStack.map((row) => (
                  <li
                    key={row.tech}
                    className="rounded-xl border border-line bg-background px-4 py-3"
                  >
                    <p className="inline-flex items-center gap-1.5 font-mono text-xs text-accent">
                      <TechIcon name={row.tech} size="0.9rem" />
                      {row.tech}
                    </p>
                    <p className="mt-1 text-sm text-muted">{row.reason}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                Tech
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {activeProject.tech.map((t) => (
                  <TechChip key={t} label={t} tone="plain" />
                ))}
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
                  {activeProject.liveLabel ?? "Live site"}
                  <ExternalLinkIcon size="1rem" />
                </a>
              )}
              {canExpand && (
                <button
                  type="button"
                  onClick={() => setLightbox(true)}
                  className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold transition hover:border-accent/40"
                >
                  Full view
                  <ExpandIcon size="0.9rem" />
                </button>
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

      {lightbox && shot?.src && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.name} full view`}
          className="fixed inset-0 z-[120] flex flex-col bg-ink/92 backdrop-blur-md"
          onClick={(e) => {
            e.stopPropagation();
            setLightbox(false);
          }}
          data-lenis-prevent
        >
          <div className="flex shrink-0 items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-semibold text-white">
                {activeProject.name}
                {shot.caption ? ` · ${shot.caption}` : ""}
              </p>
              <p className="font-mono text-[0.65rem] text-white/45">
                Full page view · Esc to close
              </p>
            </div>
            <div className="flex items-center gap-2">
              {shots.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveShot(
                        (i) =>
                          (i - 1 + shots.length) % shots.length,
                      );
                    }}
                    className="grid size-9 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
                  >
                    <ArrowLeft size="1rem" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveShot((i) => (i + 1) % shots.length);
                    }}
                    className="grid size-9 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
                  >
                    <ArrowRight size="1rem" />
                  </button>
                </>
              )}
              <button
                type="button"
                aria-label="Close full view"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(false);
                }}
                className="grid size-9 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
              >
                <CloseIcon size="1rem" />
              </button>
            </div>
          </div>

          <div
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pb-6 sm:px-8"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
          >
            <div className="project-media project-media--lightbox mx-auto max-w-5xl rounded-xl p-2 sm:p-3">
              <div className="project-media__frame relative overflow-hidden rounded-lg shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="project-media__img mx-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
