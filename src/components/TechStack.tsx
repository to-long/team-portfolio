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

// Grouped by layer so the cloud is scannable rather than one undifferentiated
// pile of names.
const groups = [
  { key: "backend", items: ["Go", "Java", "Node.js", "Python"] },
  { key: "frontend", items: ["React", "Next.js", "Vue", "Angular"] },
  { key: "mobile", items: ["React Native", "Flutter"] },
  { key: "database", items: ["PostgreSQL", "PostGIS", "MySQL", "Redis", "MongoDB"] },
  { key: "ai", items: ["Claude", "OpenAI", "LangChain", "RAG", "pgvector"] },
] as const;

export default function TechStack() {
  const t = useTranslations("tech");
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const q = gsap.utils.selector(el);

      gsap.fromTo(
        q("[data-tech-eyebrow]"),
        slideFrom("left", 24),
        { ...slideTo(), duration: 0.6, scrollTrigger: enterTrigger(el, "top 84%") },
      );

      // One stagger across every chip, so the whole cloud fills in as a single
      // left-to-right sweep rather than three separate group reveals.
      gsap.fromTo(
        q("[data-tech-chip]"),
        slideFrom("right", 30),
        {
          ...slideTo(),
          duration: 0.6,
          stagger: 0.04,
          scrollTrigger: enterTrigger(el, "top 80%"),
        },
      );
    },
    { dependencies: [t.heading], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      className="flex flex-col items-center gap-[32px] md:gap-[40px] px-[20px] md:px-[120px] py-[40px] md:py-[72px] bg-[var(--agency-white)]"
    >
      <div className="flex flex-col items-center gap-[12px] max-w-[560px]">
        <span
          data-tech-eyebrow
          className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue)]"
        >
          {t.eyebrow}
        </span>
        <SplitHeading
          by="lines"
          text={t.heading}
          className="text-[28px] md:text-[36px] font-bold text-[var(--agency-heading)] text-center"
        />
      </div>

      <div className="flex flex-col gap-[24px] md:gap-[28px] w-full max-w-[820px]">
        {groups.map((group) => (
          <div
            key={group.key}
            className="flex flex-col sm:flex-row sm:items-center gap-[10px] sm:gap-[20px]"
          >
            <span className="shrink-0 sm:w-[92px] text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--agency-body)]">
              {t.groups[group.key]}
            </span>
            <div className="flex flex-wrap gap-[10px] md:gap-[12px]">
              {group.items.map((item) => (
                <span
                  key={item}
                  data-tech-chip
                  className="whitespace-nowrap rounded-full border border-[var(--agency-border)] bg-[var(--agency-white)] px-[16px] py-[8px] text-[14px] font-medium text-[var(--agency-heading)] transition-colors hover:border-[var(--agency-blue)] hover:text-[var(--agency-blue)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
