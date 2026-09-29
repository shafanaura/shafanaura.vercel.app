"use client";

import { useEffect, useState } from "react";
import { GridIcon, LogoMark } from "@/components/icons";
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

export function Header() {
  const { ready, scrollToId, openMenu, openRequest } = useSite();
  const [time, setTime] = useState("9:41am");
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const t = window.setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, [ready]);

  const onNav = (id: string) => {
    if (id === "contact") {
      openRequest();
      return;
    }
    scrollToId(id);
  };

  return (
    <header
      className="absolute inset-x-0 top-0 z-50"
      style={{
        opacity: entered ? 1 : 0,
        transform: entered ? "translateY(0)" : "translateY(-12px)",
        transition: `opacity 600ms ${EASE.spring210}, transform 600ms ${EASE.spring210}`,
      }}
    >
      <Shell className="flex items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => scrollToId("home")}
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white"
        >
          <LogoMark size="1.15rem" className="text-accent-bright" />
          {SITE.mark}
        </button>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex gap-7 font-mono text-xs tracking-wide text-white/60">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onNav(item.id)}
                  className="transition-colors hover:text-accent-bright"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-mono text-[0.7rem] text-white/55 backdrop-blur-md md:flex">
            <span className="size-1.5 rounded-full bg-accent-bright" />
            {time}
          </div>
          <button
            type="button"
            onClick={openMenu}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 font-mono text-[0.7rem] tracking-wide text-white/80 uppercase backdrop-blur-md transition hover:border-accent-bright/40 hover:text-accent-bright"
          >
            <GridIcon size="0.85rem" />
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </Shell>
    </header>
  );
}
