"use client";

import { LogoMark } from "@/components/icons";
import { LineReveal } from "@/components/ui/motion";
import {
  AnimatedLink,
  PillButton,
  Shell,
} from "@/components/ui/primitives";
import { FOOTER, SITE } from "@/lib/site";
import { useSite } from "@/providers/LumoraProvider";

export function Footer() {
  const { openRequest, scrollToId } = useSite();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute -right-10 -bottom-16 font-display text-[12rem] font-extrabold leading-none text-white/[0.04] select-none"
        aria-hidden
      >
        {SITE.watermark}
      </div>

      <Shell className="relative z-10 px-5 pb-10 pt-20 sm:px-8 lg:px-10 lg:pt-24">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <LineReveal
            as="h2"
            lines={[...FOOTER.ctaLines]}
            lineStagger={90}
            className="max-w-[14ch] font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          />
          <PillButton
            variant="accent"
            arrow="up-right"
            onClick={openRequest}
          >
            {FOOTER.ctaButton}
          </PillButton>
        </div>

        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
              <LogoMark size="1.15rem" className="text-accent-bright" />
              {SITE.mark}
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/50">
              {FOOTER.tagline}
            </p>
          </div>

          {Object.entries(FOOTER.columns).map(([title, links]) => (
            <div key={title}>
              <p className="font-mono text-[0.65rem] tracking-[0.14em] text-white/35 uppercase">
                {title}
              </p>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <AnimatedLink
                      onClick={() =>
                        link.id === "contact"
                          ? openRequest()
                          : scrollToId(link.id)
                      }
                      className="text-white/65 hover:text-accent-bright"
                    >
                      {link.label}
                    </AnimatedLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.14em] text-white/35 uppercase">
              Connect
            </p>
            <ul className="mt-4 space-y-2">
              {(
                [
                  ["Email", `mailto:${SITE.email}`],
                  ["GitHub", SITE.social.github],
                  ["LinkedIn", SITE.social.linkedin],
                  ["Upwork", SITE.social.upwork],
                  ["Instagram", SITE.social.instagram],
                ] as const
              ).map(([label, href]) => (
                <li key={label}>
                  <AnimatedLink
                    href={href}
                    className="text-white/65 hover:text-accent-bright"
                  >
                    {label}
                  </AnimatedLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 font-mono text-xs text-white/35 sm:flex-row sm:items-center">
          <span>{FOOTER.legal}</span>
          <a
            href={`mailto:${SITE.email}`}
            className="transition hover:text-accent-bright"
          >
            {SITE.email}
          </a>
        </div>
      </Shell>
    </footer>
  );
}
