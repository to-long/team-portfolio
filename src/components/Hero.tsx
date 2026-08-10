"use client";

import { Download } from "lucide-react";
import { useRef } from "react";
import { useTranslations } from "@/lib/i18n";
import {
  EASE,
  gsap,
  prefersReducedMotion,
  slideFrom,
  slideTo,
  useGSAP,
} from "@/lib/gsap";
import SplitHeading from "./animations/SplitHeading";

export default function Hero() {
  const t = useTranslations("hero");
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const q = gsap.utils.selector(el);

      // Text glides in from the left out of a blur. The image only fades and
      // deblurs — no movement, no scale.
      gsap
        .timeline()
        .fromTo(
          q("[data-hero-image]"),
          { opacity: 0, filter: "blur(20px)" },
          { opacity: 1, filter: "blur(0px)", duration: 0.9, ease: EASE.soft },
          0,
        )
        .fromTo(q("[data-hero-copy]"), slideFrom("left"), slideTo(), 0.15)
        .fromTo(
          q("[data-hero-cta]"),
          slideFrom("left", 28),
          { ...slideTo(), duration: 0.6, stagger: 0.07 },
          0.26,
        );

      // A slow sideways drift as the section leaves, instead of a vertical lift.
      gsap.fromTo(
        q("[data-hero-text]"),
        { xPercent: 0 },
        {
          xPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        },
      );
    },
    { dependencies: [t.title], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      className="flex flex-col lg:flex-row items-center gap-[48px] md:gap-[64px] px-[20px] md:px-[120px] py-[40px] md:py-[80px] bg-[var(--agency-white)]"
    >
      <div data-hero-text className="flex flex-col gap-[24px] lg:w-1/2 xl:w-7/12">
        <SplitHeading
          as="h1"
          by="lines"
          immediate
          text={t.title}
          className="text-[32px] md:text-[48px] font-bold leading-[1.2] text-[var(--agency-heading)]"
        />
        <p
          data-hero-copy
          className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--agency-body)]"
        >
          {t.desc}
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
          <a
            data-hero-cta
            href="#services"
            className="flex items-center justify-center whitespace-nowrap rounded-[4px] bg-[var(--agency-blue)] px-[32px] py-[14px] text-[15px] md:text-[16px] font-semibold text-white"
          >
            {t.primaryCta}
          </a>
          <a
            data-hero-cta
            href="#contact"
            className="flex items-center justify-center gap-[8px] whitespace-nowrap px-[24px] py-[14px] text-[15px] md:text-[16px] font-medium text-[var(--agency-blue)]"
          >
            <Download className="w-[18px] h-[18px]" />
            {t.secondaryCta}
          </a>
        </div>
      </div>
      <img
        data-hero-image
        src="/images/hero-image-01.webp"
        alt={t.imageAlt}
        className="w-full lg:w-1/2 xl:w-5/12 h-auto max-h-[440px] object-contain rounded-[8px]"
      />
    </section>
  );
}
