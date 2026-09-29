"use client";

import { useEffect, useRef, useState } from "react";
import { LineReveal, Reveal } from "@/components/ui/motion";
import { Eyebrow, Shell } from "@/components/ui/primitives";
import { STATS } from "@/lib/site";

function StatNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const last = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const now = performance.now();
      if (now - last.current < 30) return;
      last.current = now;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const startY = vh;
      const endY = vh / 2 - rect.height / 2;
      const range = startY - endY;
      const p =
        range <= 0
          ? 1
          : Math.min(1, Math.max(0, (startY - rect.top) / range));
      setDisplay(Math.round(p * value));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-background" aria-label="By the numbers">
      <Shell className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <Reveal
          from={{ opacity: 0, transform: "translateY(32px)" }}
          duration={800}
        >
          <div className="overflow-hidden rounded-2xl bg-ink px-6 py-12 text-white sm:px-10 sm:py-16">
            <Eyebrow tone="light">Proof</Eyebrow>
            <LineReveal
              as="h2"
              lines={["Outcomes from shipped work."]}
              delay={100}
              className="mt-4 max-w-[16ch] font-display text-3xl font-bold tracking-tight md:text-4xl"
            />

            <ul className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
              {STATS.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  as="li"
                  delay={index * 80}
                  from={{ opacity: 0, transform: "translateY(16px)" }}
                >
                  <p className="font-display text-5xl font-extrabold tracking-tight text-accent-bright sm:text-6xl">
                    <StatNumber value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 font-mono text-xs text-white/45">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
