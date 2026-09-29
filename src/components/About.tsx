"use client";

import { AvatarPhoto } from "@/components/AvatarPhoto";
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  UpworkIcon,
} from "@/components/icons";
import { Reveal, StatementReveal } from "@/components/ui/motion";
import { Eyebrow, PillButton, Shell } from "@/components/ui/primitives";
import { ABOUT, SITE } from "@/lib/site";
import { useSite } from "@/providers/LumoraProvider";

const SOCIALS = [
  {
    label: "GitHub",
    href: SITE.social.github,
    icon: GithubIcon,
    primary: true,
  },
  {
    label: "LinkedIn",
    href: SITE.social.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "Upwork",
    href: SITE.social.upwork,
    icon: UpworkIcon,
  },
  {
    label: "Instagram",
    href: SITE.social.instagram,
    icon: InstagramIcon,
  },
  {
    label: "Email",
    href: `mailto:${SITE.email}`,
    icon: MailIcon,
  },
] as const;

export function About() {
  const { scrollToId } = useSite();

  return (
    <section id="about" className="bg-background">
      <Shell className="grid grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-28">
        <div className="lg:col-span-4">
          <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
          <Reveal
            className="mt-10"
            from={{ opacity: 0, transform: "translateY(16px)" }}
          >
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex items-start gap-4">
                <AvatarPhoto
                  width={112}
                  height={112}
                  className="size-28 rounded-2xl ring-1 ring-line"
                  imgClassName="rounded-2xl"
                />
                <div className="pt-1">
                  <p className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                    Signal
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {SITE.name}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                {ABOUT.distributed}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {SOCIALS.map(({ label, href, icon: Icon, ...rest }) => {
                  const primary = "primary" in rest && rest.primary;
                  return (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={
                        href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={label}
                      title={label}
                      className={`grid size-9 place-items-center rounded-lg transition hover:scale-105 ${
                        primary
                          ? "bg-ink text-accent-bright"
                          : "bg-white text-foreground ring-1 ring-line"
                      }`}
                    >
                      <Icon size="0.9rem" />
                    </a>
                  );
                })}
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-4 inline-block font-mono text-xs text-muted break-all transition hover:text-accent"
              >
                {SITE.email}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-between gap-10 lg:col-span-8">
          <StatementReveal
            className="font-display text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl"
            parts={[
              { text: ABOUT.statementLead },
              { text: ABOUT.statementMuted, muted: true },
            ]}
          />
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
            <p className="font-mono text-xs text-muted">{ABOUT.findOnline}</p>
            <PillButton
              variant="outline"
              arrow="right"
              onClick={() => scrollToId("works")}
            >
              View work
            </PillButton>
          </div>
        </div>
      </Shell>
    </section>
  );
}
