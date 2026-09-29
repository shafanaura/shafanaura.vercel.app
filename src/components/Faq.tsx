"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/motion";
import { Eyebrow, Shell } from "@/components/ui/primitives";
import { FAQ } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white" aria-label="FAQ">
      <Shell className="grid grid-cols-1 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-4">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Before we talk
          </h2>
          <p className="mt-3 text-sm text-muted">
            Straight answers so we skip the awkward discovery ping-pong.
          </p>
        </div>

        <ul className="lg:col-span-8">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal
                key={item.q}
                as="li"
                delay={i * 40}
                from={{ opacity: 0, transform: "translateY(10px)" }}
                className="border-t border-line"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold tracking-tight">
                    {item.q}
                  </span>
                  <span className="font-mono text-accent" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-muted">
                    {item.a}
                  </p>
                )}
              </Reveal>
            );
          })}
        </ul>
      </Shell>
    </section>
  );
}
