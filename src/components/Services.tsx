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

// Index-matched to `services.items` in translations.ts.
const serviceImages = [
  "/images/service-website.webp",
  "/images/service-mobile.webp",
  "/images/service-ai.webp",
];

export default function Services() {
  const t = useTranslations("services");
  const grid = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = grid.current;
      if (!el || prefersReducedMotion()) return;

      const q = gsap.utils.selector(el);

      // Cards glide in from the right one after the other. No depth, no scale
      // — the blur carries the reveal.
      gsap.fromTo(
        q("[data-service-card]"),
        slideFrom("right", 44),
        {
          ...slideTo(),
          duration: 0.75,
          stagger: 0.09,
          scrollTrigger: enterTrigger(el, "top 82%"),
        },
      );
    },
    { dependencies: [t.heading], revertOnUpdate: true },
  );

  return (
    <section
      id="services"
      className="flex flex-col items-center gap-[32px] md:gap-[48px] px-[20px] md:px-[120px] py-[40px] md:py-[80px] bg-[var(--agency-blue-deep)] bg-[image:var(--agency-blue-gradient)]"
    >
      <div className="flex flex-col items-center gap-[16px] max-w-[600px]">
        <span className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue-deep-fg)]">
          {t.eyebrow}
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold leading-[1.3] text-[var(--agency-blue-deep-fg)] text-center">
          {t.heading}
        </h2>
      </div>
      <div
        ref={grid}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px] w-full"
      >
        {t.items.map((s, i) => (
          <div
            key={s.title}
            data-service-card
            className="flex flex-col rounded-[8px] overflow-hidden bg-[var(--agency-white)]"
          >
            <img
              loading="lazy"
              decoding="async"
              src={serviceImages[i]}
              alt={s.title}
              className="w-full h-[200px] md:h-[220px] object-cover"
            />
            <div className="flex flex-col gap-[12px] p-[20px] md:p-[24px]">
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--agency-heading)]">
                {s.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[var(--agency-body)]">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
