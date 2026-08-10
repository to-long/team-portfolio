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

const fieldClass =
  "flex-1 rounded-[8px] border border-[var(--agency-border)] px-[16px] py-[14px] text-[15px] text-[var(--agency-heading)] placeholder:text-[var(--agency-body)] bg-[var(--agency-field)] focus:bg-[var(--agency-field-focus)] focus:border-[var(--agency-blue)] outline-none transition-colors";

export default function Contact() {
  const t = useTranslations("contact");
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const q = gsap.utils.selector(el);

      gsap.fromTo(
        q("[data-intro]"),
        slideFrom("left"),
        { ...slideTo(), scrollTrigger: enterTrigger(el, "top 84%") },
      );

      // Side-by-side pairs, so each field enters from its own side and the
      // two halves close together.
      q("[data-field]").forEach((field, i) => {
        gsap.fromTo(
          field,
          slideFrom(i % 2 === 0 ? "left" : "right", 34),
          {
            ...slideTo(),
            duration: 0.7,
            delay: Math.floor(i / 2) * 0.06,
            scrollTrigger: enterTrigger(el, "top 76%"),
          },
        );
      });

      gsap.fromTo(
        q("[data-submit]"),
        slideFrom("left", 28),
        {
          ...slideTo(),
          duration: 0.6,
          delay: 0.18,
          scrollTrigger: enterTrigger(el, "top 76%"),
        },
      );
    },
    { dependencies: [t.heading], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      id="contact"
      className="flex flex-col items-center gap-[32px] px-[24px] sm:px-[40px] md:px-[120px] lg:px-[300px] py-[40px] md:py-[80px] bg-[var(--agency-muted)]"
    >
      <div className="flex flex-col items-center gap-[12px] w-full">
        <span
          data-intro
          className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue)]"
        >
          {t.eyebrow}
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--agency-heading)] text-center">
          {t.heading}
        </h2>
      </div>
      <div className="flex flex-col gap-[12px] md:gap-[20px] w-full max-w-[540px] md:max-w-none">
        <div className="flex flex-col md:flex-row gap-[12px] md:gap-[20px]">
          <input data-field type="text" placeholder={t.name} className={fieldClass} />
          <input data-field type="text" placeholder={t.company} className={fieldClass} />
        </div>
        <div className="flex flex-col md:flex-row gap-[12px] md:gap-[20px]">
          <input data-field type="email" placeholder={t.email} className={fieldClass} />
          <input data-field type="tel" placeholder={t.phone} className={fieldClass} />
        </div>
        <textarea
          data-field
          placeholder={t.message}
          className="w-full h-[140px] md:h-[120px] rounded-[8px] border border-[var(--agency-border)] p-[16px] text-[15px] text-[var(--agency-heading)] placeholder:text-[var(--agency-body)] bg-[var(--agency-field)] focus:bg-[var(--agency-field-focus)] focus:border-[var(--agency-blue)] outline-none resize-none transition-colors"
        />
        <button
          data-submit
          type="button"
          className="self-stretch md:self-start flex items-center justify-center whitespace-nowrap rounded-[8px] md:rounded-[4px] bg-[var(--agency-blue)] px-[32px] md:px-[40px] py-[14px] text-[15px] md:text-[14px] font-semibold text-white"
        >
          {t.submit}
        </button>
      </div>
    </section>
  );
}
