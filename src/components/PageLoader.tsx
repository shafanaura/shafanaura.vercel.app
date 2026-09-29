"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/icons";
import { FILL_MS } from "@/lib/constants";
import { easeInOutCubic } from "@/lib/spring";
import { EASE } from "@/lib/constants";
import { SITE } from "@/lib/site";
import { useSite } from "@/providers/LumoraProvider";

export function PageLoader() {
  const { setReady, stopScroll, startScroll } = useSite();
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    stopScroll();
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / FILL_MS);
      setProgress(Math.round(easeInOutCubic(t) * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        window.setTimeout(() => {
          setReady(true);
          startScroll();
          setGone(true);
        }, 650);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex flex-col justify-between bg-ink p-8 text-white sm:p-12"
      style={{
        clipPath: exiting ? "inset(0 0 100% 0)" : "inset(0 0 0 0)",
        transition: `clip-path 650ms ${EASE.loaderExit}`,
      }}
      aria-busy={!exiting}
      aria-live="polite"
    >
      <div className="flex items-center justify-between font-mono text-xs text-white/40">
        <span className="inline-flex items-center gap-2">
          <LogoMark size="1rem" className="text-accent-bright" />
          {SITE.mark}
        </span>
        <span>boot sequence</span>
      </div>

      <div className="mx-auto w-full max-w-lg">
        <p className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          {SITE.tagline}
        </p>
        <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-accent-bright transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between font-mono text-xs text-white/40">
          <span>compiling</span>
          <span className="tabular-nums text-accent-bright">
            {String(progress).padStart(3, "0")}
          </span>
        </div>
      </div>

      <p className="font-mono text-xs text-white/30">fullstack portfolio</p>
    </div>
  );
}
