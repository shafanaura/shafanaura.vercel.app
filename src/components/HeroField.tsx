"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/spring";

/** Abstract night field — no stock photography. */
export function HeroField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--px", `${x * 24}px`);
      el.style.setProperty("--py", `${y * 16}px`);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={ref} className="hero-field" aria-hidden>
      <div
        className="hero-field__orb hero-field__orb--a"
        style={{ transform: "translate(var(--px, 0), var(--py, 0))" }}
      />
      <div
        className="hero-field__orb hero-field__orb--b"
        style={{
          transform: "translate(calc(var(--px, 0) * -1), calc(var(--py, 0) * -0.6))",
        }}
      />
      <div className="hero-field__grid" />
      <div className="hero-field__beam" />
      <div className="hero-field__noise" />

      {/* Floating code chips */}
      <div className="pointer-events-none absolute inset-0 font-mono text-[0.7rem] text-accent-bright/25">
        <span className="absolute left-[8%] top-[28%] rotate-[-8deg]">
          const ship = async () =&gt; {"{}"}
        </span>
        <span className="absolute right-[12%] top-[36%] rotate-[6deg]">
          type Stack = &quot;ui&quot; | &quot;api&quot; | &quot;data&quot;
        </span>
        <span className="absolute bottom-[32%] left-[18%] rotate-[3deg]">
          deploy --prod --careful
        </span>
      </div>
    </div>
  );
}
