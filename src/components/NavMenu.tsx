"use client";

import { useEffect, useState } from "react";
import { CloseIcon, LogoMark } from "@/components/icons";
import { Shell } from "@/components/ui/primitives";
import { EASE } from "@/lib/constants";
import { NAV_ITEMS, SITE } from "@/lib/site";
import { useSite } from "@/providers/LumoraProvider";

function formatTime(d: Date) {
  const h24 = d.getHours();
  const h = h24 % 12 || 12;
  const m = String(d.getMinutes()).padStart(2, "0");
  const meridiem = h24 < 12 ? "am" : "pm";
  return `${h}:${m}${meridiem}`;
}

export function NavMenu() {
  const { menuOpen, closeMenu, scrollToId, openRequest } = useSite();
  const [entered, setEntered] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    if (!menuOpen) {
      setEntered(false);
      return;
    }
    const t = requestAnimationFrame(() => setEntered(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [menuOpen]);

  if (!menuOpen) return null;

  const navigate = (id: string) => {
    closeMenu();
    if (id === "contact") {
      window.setTimeout(() => openRequest(), 50);
      return;
    }
    window.setTimeout(() => scrollToId(id), 50);
  };

  return (
    <div
      className="fixed inset-0 z-[115] flex flex-col bg-ink text-white"
      style={{
        opacity: entered ? 1 : 0,
        transition: `opacity 400ms ${EASE.spring200}`,
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <Shell className="flex items-center justify-between px-5 py-5 sm:px-8">
        <div className="flex items-center gap-2 font-display text-lg font-bold">
          <LogoMark size="1.15rem" className="text-accent-bright" />
          {SITE.mark}
        </div>
        <button
          type="button"
          onClick={closeMenu}
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-3 py-2 font-mono text-xs tracking-wide text-white/70 uppercase"
        >
          <CloseIcon size="0.85rem" />
          Close
        </button>
      </Shell>

      <Shell className="flex flex-1 flex-col justify-center px-5 sm:px-8">
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => navigate(item.id)}
                className="group flex w-full items-baseline gap-4 py-2 text-left font-display text-4xl font-bold tracking-tight sm:text-6xl"
                style={{
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(1rem)",
                  transition: `all 450ms ease-out ${index * 40 + 60}ms`,
                }}
              >
                <span className="font-mono text-sm font-normal text-white/25 group-hover:text-accent-bright">
                  0{index + 1}
                </span>
                <span className="text-white/75 transition group-hover:text-white">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Shell>

      <Shell className="flex flex-col gap-3 border-t border-white/10 px-5 py-6 font-mono text-xs tracking-wide text-white/40 uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>Local · {time || "—"}</span>
        <button
          type="button"
          onClick={() => {
            closeMenu();
            window.setTimeout(() => openRequest(), 50);
          }}
          className="text-left text-accent-bright hover:underline"
        >
          Start a project →
        </button>
      </Shell>
    </div>
  );
}
