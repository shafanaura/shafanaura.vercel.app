"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CloseIcon, LogoMark } from "@/components/icons";
import { PillButton } from "@/components/ui/primitives";
import { EASE } from "@/lib/constants";
import { SITE } from "@/lib/site";
import { useSite } from "@/providers/LumoraProvider";

export function ContactModal() {
  const { requestOpen, closeRequest } = useSite();
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (requestOpen) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      window.setTimeout(() => setSuccess(false), 300);
    }
  }, [requestOpen]);

  useEffect(() => {
    if (!requestOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRequest();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [requestOpen, closeRequest]);

  if (!requestOpen) return null;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSuccess(true);
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Start a project"
      className="fixed inset-0 z-[110] flex items-end justify-center p-4 sm:items-center"
      style={{
        background: "rgba(11,16,32,0.5)",
        backdropFilter: "blur(14px)",
        opacity: visible ? 1 : 0,
        transition: `opacity 350ms ${EASE.spring200}`,
      }}
      onClick={closeRequest}
    >
      <div
        className="relative max-h-[92dvh] w-full max-w-lg overflow-y-auto overscroll-contain rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-line sm:p-8"
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
          onClick={closeRequest}
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-xl bg-surface text-muted transition hover:bg-surface-2 hover:text-foreground"
        >
          <CloseIcon size="1rem" />
        </button>

        {success ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="grid size-14 place-items-center rounded-2xl bg-ink text-accent-bright">
              <LogoMark size="1.5rem" />
            </div>
            <h2 className="font-display text-2xl font-bold">
              Request received
            </h2>
            <p className="max-w-[32ch] text-sm text-muted">
              Thanks — I&apos;ll reply within one business day.
            </p>
            <PillButton variant="dark" onClick={closeRequest}>
              Close
            </PillButton>
          </div>
        ) : (
          <>
            <div className="mb-6 space-y-1.5">
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-muted uppercase">
                <span className="size-1.5 rounded-full bg-accent" />
                Start a project
              </span>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Tell me what you&apos;re building.
              </h2>
            </div>

            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <label className="block">
                <span className="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
                  Name
                </span>
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-white"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="mt-1.5 w-full rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-white"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
                  Project
                </span>
                <textarea
                  required
                  name="project"
                  rows={4}
                  placeholder="A few words about scope, timeline, and budget."
                  className="mt-1.5 w-full resize-none rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-white"
                />
              </label>

              <div className="mt-2 flex items-center justify-between gap-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-xs text-muted transition hover:text-accent"
                >
                  Or email {SITE.email}
                </a>
                <PillButton
                  variant="accent"
                  arrow="up-right"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? "Sending…" : "Send request"}
                </PillButton>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
