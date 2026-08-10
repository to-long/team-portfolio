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
import SplitHeading from "./animations/SplitHeading";

// Index-matched to `cases.items` in translations.ts.
const caseImages = [
  "/images/case-impactcocoa.svg",
  "/images/case-swiftpay.svg",
  "/images/case-dutchandco.svg",
  "/images/case-ybox.svg",
];

export default function Cases() {
  const t = useTranslations("cases");
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const q = gsap.utils.selector(el);

      gsap.fromTo(
        q("[data-intro]"),
        slideFrom("left"),
        { ...slideTo(), stagger: 0.07, scrollTrigger: enterTrigger(el, "top 84%") },
      );

      // Two-column grid, so cards come in from the side they sit on and meet
      // in the middle row by row.
      q("[data-case-card]").forEach((card, i) => {
        gsap.fromTo(
          card,
          slideFrom(i % 2 === 0 ? "left" : "right", 42),
          { ...slideTo(), duration: 0.75, scrollTrigger: enterTrigger(card, "top 88%") },
        );
      });
    },
    { dependencies: [t.heading], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      className="flex flex-col items-center gap-[32px] md:gap-[48px] px-[20px] md:px-[120px] py-[40px] md:py-[80px] bg-[var(--agency-blue-light)]"
    >
      <div className="flex flex-col items-center gap-[12px] max-w-[600px]">
        <span
          data-intro
          className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue)]"
        >
          {t.eyebrow}
        </span>
        <SplitHeading
          by="lines"
          text={t.heading}
          className="text-[28px] md:text-[36px] font-bold text-[var(--agency-heading)] text-center"
        />
        <p data-intro className="text-[15px] md:text-[16px] text-[var(--agency-body)] text-center">
          {t.desc}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] md:gap-[32px] w-full">
        {t.items.map((c, i) => (
          <div
            key={c.title}
            data-case-card
            className="flex flex-col flex-1 rounded-[8px] overflow-hidden border border-[var(--agency-border)] bg-[var(--agency-white)]"
          >
            <img
              src={caseImages[i]}
              alt={c.title}
              className="w-full h-[200px] md:h-[240px] object-cover"
            />
            <div className="flex flex-col gap-[8px] p-[20px] md:p-[24px]">
              <span className="text-[12px] font-semibold text-[var(--agency-blue)]">
                {c.tag}
              </span>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--agency-heading)]">
                {c.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[var(--agency-body)]">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
