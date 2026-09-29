"use client";

import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/icons";
import { SITE } from "@/lib/site";

type AvatarPhotoProps = {
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
};

export function AvatarPhoto({
  width,
  height,
  className = "",
  imgClassName = "",
}: AvatarPhotoProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="View photo"
        onClick={() => setOpen(true)}
        className={`shrink-0 overflow-hidden transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={SITE.avatar}
          alt={SITE.name}
          width={width}
          height={height}
          className={`size-full object-cover ${imgClassName}`}
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="View photo"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setOpen(false)}
          data-lenis-prevent
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 grid size-9 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-5"
          >
            <CloseIcon size="1rem" />
          </button>
          <p className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] text-white/45">
            Esc or click outside to close
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SITE.avatar}
            alt={SITE.name}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[min(85dvh,720px)] max-w-full rounded-2xl object-contain shadow-2xl ring-1 ring-white/10"
          />
        </div>
      )}
    </>
  );
}
