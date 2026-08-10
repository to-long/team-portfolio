"use client";

import { Facebook, Twitter, Youtube, Linkedin, type LucideIcon } from "lucide-react";
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

const socialIcons: LucideIcon[] = [Facebook, Twitter, Youtube, Linkedin];

/**
 * Temporarily hidden: there are no real social accounts to link to yet, and the
 * icons were decorative. Flip to `true` to bring the column back — the copy and
 * its Japanese translation are still in `translations.ts`, untouched.
 */
const SHOW_CONNECT = false;

export default function About() {
  const t = useTranslations("about");
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const q = gsap.utils.selector(el);

      // Two columns meeting in the middle: left content comes from the left,
      // right content from the right.
      gsap.fromTo(
        q("[data-left]"),
        slideFrom("left"),
        { ...slideTo(), stagger: 0.08, scrollTrigger: enterTrigger(el, "top 80%") },
      );

      gsap.fromTo(
        q("[data-right]"),
        slideFrom("right"),
        {
          ...slideTo(),
          stagger: 0.08,
          delay: 0.08,
          scrollTrigger: enterTrigger(el, "top 80%"),
        },
      );

      // Icons trail in one by one, sharing the section trigger — their own
      // near-fold trigger fired during the initial layout pass.
      gsap.fromTo(
        q("[data-social]"),
        slideFrom("right", 20),
        {
          ...slideTo(),
          duration: 0.55,
          stagger: 0.05,
          delay: 0.22,
          scrollTrigger: enterTrigger(el, "top 80%"),
        },
      );
    },
    { dependencies: [t.heading], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      id="about"
      className="flex flex-col md:flex-row gap-[32px] md:gap-[60px] px-[20px] md:px-[120px] py-[40px] md:py-[80px] bg-[var(--agency-blue-light)]"
    >
      {/* Capped width while the second column is hidden — a single flex child
          would otherwise stretch the paragraphs to an unreadable line length. */}
      <div className="flex flex-col gap-[20px] flex-1 md:max-w-[760px]">
        <span
          data-left
          className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue)]"
        >
          {t.eyebrow}
        </span>
        <SplitHeading
          by="lines"
          text={t.heading}
          start="top 82%"
          className="text-[28px] md:text-[36px] font-bold leading-[1.3] text-[var(--agency-heading)]"
        />
        <p
          data-left
          className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--agency-body)]"
        >
          {t.paragraph1}
        </p>
        <p
          data-left
          className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--agency-body)]"
        >
          {t.paragraph2}
        </p>
      </div>
      {SHOW_CONNECT ? (
      <div className="flex flex-col gap-[24px] flex-1">
        <h3 data-right className="text-[20px] font-semibold text-[var(--agency-heading)]">
          {t.connectHeading}
        </h3>
        <p
          data-right
          className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--agency-body)]"
        >
          {t.connectDesc}
        </p>
        <div className="flex gap-[12px]">
          {socialIcons.map((Icon, i) => (
            <span
              key={i}
              data-social
              className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-[var(--agency-border)] transition-colors hover:border-[var(--agency-blue)]"
            >
              <Icon className="w-[18px] h-[18px] text-[var(--agency-body)]" />
            </span>
          ))}
        </div>
      </div>
      ) : null}
    </section>
  );
}
