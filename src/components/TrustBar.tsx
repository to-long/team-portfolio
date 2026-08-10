"use client";

import { useRef } from "react";
import { useTranslations } from "@/lib/i18n";
import {
  enterTrigger,
  gsap,
  prefersReducedMotion,
  useGSAP,
} from "@/lib/gsap";

// Wordmarks, not logos — no brand assets on hand, and mismatched logo files
// look worse than one consistent typographic treatment.
const companies = [
  "SwiftPay",
  "Dutch & Co",
  "ThinkData",
  "ImpactCocoa",
  "Topas Travel",
  "Crossian",
  "Money Forward",
  "ANDPAD",
];

function Marks({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-x-[28px] md:gap-x-[44px] pr-[28px] md:pr-[44px]"
    >
      {companies.map((name) => (
        <span
          key={name}
          className="whitespace-nowrap text-[16px] md:text-[19px] font-semibold text-[var(--agency-heading)] opacity-60 transition-opacity hover:opacity-100"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export default function TrustBar() {
  const t = useTranslations("trust");
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const q = gsap.utils.selector(el);

      // The track fades in rather than sliding: it already has a CSS transform
      // animation running, and a second one on the same axis would fight it.
      gsap.fromTo(
        q("[data-trust-track]"),
        { opacity: 0, filter: "blur(6px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: enterTrigger(el, "top 90%"),
        },
      );
    },
    { dependencies: [t.label], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      className="flex flex-col items-center gap-[20px] md:gap-[28px] py-[32px] md:py-[48px] bg-[var(--agency-white)] border-y border-[var(--agency-border)]"
    >
      <span
        className="text-[12px] md:text-[13px] font-semibold tracking-[2px] text-[var(--agency-body)]"
      >
        {t.label}
      </span>

      {/* Full-bleed on purpose: the names should run off both edges rather than
          stop inside the page gutter. */}
      <div className="marquee w-full overflow-hidden">
        <div data-trust-track className="marquee-track flex">
          <Marks />
          {/* Second copy makes the -50% loop seamless; hidden from the a11y
              tree so the names are not announced twice. */}
          <Marks ariaHidden />
        </div>
      </div>
    </section>
  );
}
