"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/motion";
import { PillButton, Shell } from "@/components/ui/primitives";
import { HeroField } from "@/components/HeroField";
import { EASE } from "@/lib/constants";
import { HERO, SITE } from "@/lib/site";
import { useSite } from "@/providers/LumoraProvider";

export function Hero() {
  const { openRequest, scrollToId, ready } = useSite();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const t = window.setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, [ready]);

  return (
    <section
      id="home"
      className="relative isolate min-h-[100lvh] overflow-hidden rounded-b-[1.75rem] text-white"
    >
      <HeroField />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-ink/40 via-transparent to-ink/80" />

      <Shell className="relative z-20 flex min-h-[100lvh] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 lg:px-10 lg:pb-10 lg:pt-32">
        <div className="grid flex-1 grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <div
              style={{
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(18px)",
                transition: `all 700ms ${EASE.spring210} 120ms`,
              }}
            >
              <p className="mb-5 inline-flex items-center gap-2 font-mono text-xs tracking-wide text-accent-bright">
                <span className="size-1.5 animate-pulse rounded-full bg-accent-bright" />
                {HERO.eyebrow}
              </p>

              <p className="mb-4 font-display text-sm font-semibold tracking-[0.2em] text-white/50 uppercase sm:text-base">
                {HERO.brandLine}
              </p>

              <h1 className="max-w-[16ch] font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {HERO.headline}
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
                {HERO.support}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <PillButton variant="accent" arrow="right" onClick={openRequest}>
                  {HERO.ctaPrimary}
                </PillButton>
                <PillButton
                  variant="ghost"
                  onClick={() => scrollToId("works")}
                >
                  {HERO.ctaSecondary}
                </PillButton>
                <a
                  href={SITE.social.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 underline-offset-4 transition hover:text-accent-bright hover:underline"
                >
                  Upwork profile
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 lg:justify-self-end">
            <Reveal
              gateReady
              delay={350}
              from={{ opacity: 0, transform: "translateY(20px)" }}
              className="w-full max-w-sm border border-white/10 bg-white/5 p-5 backdrop-blur-md lg:max-w-none"
              style={{ borderRadius: "1.25rem" }}
            >
              <p className="font-mono text-[0.65rem] tracking-[0.18em] text-white/40 uppercase">
                Stack in rotation
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {HERO.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/10 bg-ink/40 px-2.5 py-1.5 font-mono text-xs text-white/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[0.65rem] text-white/40">
                <span>v{SITE.workingSince}+</span>
                <span className="text-accent-bright">online</span>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal gateReady delay={700} from={{ opacity: 0 }} to={{ opacity: 1 }}>
          <div className="mt-12 flex items-center justify-between gap-4 border-t border-white/10 pt-5 font-mono text-[0.7rem] tracking-wide text-white/45 uppercase">
            <span>{HERO.statusLeft}</span>
            <span className="hidden sm:inline">{HERO.statusCenter}</span>
            <button
              type="button"
              onClick={() => scrollToId("about")}
              className="inline-flex items-center gap-2 text-white/60 transition hover:text-accent-bright"
            >
              {HERO.statusRight}
              <span aria-hidden>↓</span>
            </button>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
