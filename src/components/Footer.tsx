"use client";

import { useRef } from "react";
import { useTranslations } from "@/lib/i18n";
import {
  EASE,
  enterTrigger,
  gsap,
  prefersReducedMotion,
  slideFrom,
  slideTo,
  useGSAP,
} from "@/lib/gsap";

export default function Footer() {
  const t = useTranslations("footer");
  const root = useRef<HTMLElement>(null);

  const columns = [
    { heading: t.servicesHeading, links: t.services },
    { heading: t.companyHeading, links: t.company },
    { heading: t.supportHeading, links: t.support },
  ];

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const q = gsap.utils.selector(el);

      gsap.fromTo(
        q("[data-footer-brand] > *"),
        slideFrom("left"),
        { ...slideTo(), stagger: 0.07, scrollTrigger: enterTrigger(el, "top 92%") },
      );

      gsap.fromTo(
        q("[data-footer-link]"),
        slideFrom("right", 24),
        {
          ...slideTo(),
          duration: 0.6,
          stagger: 0.02,
          scrollTrigger: enterTrigger(el, "top 92%"),
        },
      );

      // The rule wipes open from the left rather than fading — same horizontal
      // language, and a 1px line has nothing to slide.
      gsap.fromTo(
        q("[data-footer-rule]"),
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "0% 50%",
          duration: 0.7,
          ease: EASE.soft,
          delay: 0.12,
          scrollTrigger: enterTrigger(el, "top 92%"),
        },
      );

      gsap.fromTo(
        q("[data-footer-copy]"),
        { opacity: 0, filter: "blur(6px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.6,
          delay: 0.22,
          ease: EASE.soft,
          scrollTrigger: enterTrigger(el, "top 92%"),
        },
      );
    },
    { dependencies: [t.desc], revertOnUpdate: true },
  );

  return (
    <footer ref={root} className="w-full bg-[var(--agency-blue-deep)]">
      <div className="flex flex-col gap-[32px] md:gap-[40px] px-[20px] md:px-[120px] py-[40px] md:py-[60px] max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-[32px] md:gap-[60px]">
          <div data-footer-brand className="flex flex-col gap-[16px] flex-1">
            <span className="text-[22px] md:text-[24px] font-bold text-[var(--agency-blue-deep-fg)]">
              Teamotion
            </span>
            <p className="text-[14px] leading-[1.7] text-[var(--agency-blue-deep-muted)] max-w-[280px]">
              {t.desc}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[24px] md:gap-[60px]">
            {columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-[12px] md:gap-[16px]">
                <span
                  data-footer-link
                  className="text-[16px] font-semibold text-[var(--agency-blue-deep-fg)]"
                >
                  {col.heading}
                </span>
                {col.links.map((l) => (
                  <span
                    key={l}
                    data-footer-link
                    className="text-[14px] text-[var(--agency-blue-deep-muted)] transition-colors hover:text-[var(--agency-blue-deep-fg)]"
                  >
                    {l}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div data-footer-rule className="w-full h-px bg-[var(--agency-blue-deep-line)]" />
        <div className="flex items-center justify-center">
          {/* The year is substituted at render, not stored in the copy, so it
              never goes stale. `suppressHydrationWarning` because the
              prerendered HTML carries the build year while the client uses its
              own clock — they only differ across a new year, and React patches
              the text on hydration. */}
          <span
            data-footer-copy
            suppressHydrationWarning
            className="text-[13px] md:text-[14px] text-[var(--agency-blue-deep-muted)]"
          >
            {t.copyright.replace("{year}", String(new Date().getFullYear()))}
          </span>
        </div>
      </div>
    </footer>
  );
}
