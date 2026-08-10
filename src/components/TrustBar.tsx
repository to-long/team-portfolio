"use client";

import { useRef } from "react";
import { useTranslations } from "@/lib/i18n";
import {
  enterTrigger,
  gsap,
  prefersReducedMotion,
  slideFrom,
  slideTo,
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
];

export default function TrustBar() {
  const t = useTranslations("trust");
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const q = gsap.utils.selector(el);

      gsap.fromTo(
        q("[data-trust-label]"),
        slideFrom("left", 24),
        { ...slideTo(), duration: 0.6, scrollTrigger: enterTrigger(el, "top 90%") },
      );

      gsap.fromTo(
        q("[data-trust-item]"),
        slideFrom("right", 28),
        {
          ...slideTo(),
          duration: 0.6,
          stagger: 0.05,
          scrollTrigger: enterTrigger(el, "top 90%"),
        },
      );
    },
    { dependencies: [t.label], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      className="flex flex-col items-center gap-[20px] md:gap-[28px] px-[20px] md:px-[120px] py-[32px] md:py-[48px] bg-[var(--agency-white)] border-y border-[var(--agency-border)]"
    >
      <span
        data-trust-label
        className="text-[12px] md:text-[13px] font-semibold tracking-[2px] text-[var(--agency-body)]"
      >
        {t.label}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-x-[28px] gap-y-[16px] md:gap-x-[44px]">
        {companies.map((name) => (
          <span
            key={name}
            data-trust-item
            className="whitespace-nowrap text-[16px] md:text-[19px] font-semibold text-[var(--agency-heading)] opacity-60 transition-opacity hover:opacity-100"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
