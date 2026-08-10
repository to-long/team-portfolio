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

// Order matches `team.roles` in translations.ts — keep the two in sync.
const team = [
  { image: "/images/team-brian.jpg", name: "Brian To" },
  { image: "/images/team-ken.jpg", name: "Ken Nguyen" },
  { image: "/images/team-steven.jpg", name: "Steven Nguyen" },
  { image: "/images/team-truong.jpg", name: "Tony Nguyen" },
  { image: "/images/team-quanganh.jpg", name: "Andy Nguyen" },
  { image: "/images/team-thuy.jpg", name: "May Le" },
];

export default function Team() {
  const t = useTranslations("team");
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

      // Six cards in rows of three. Staggering across the whole set reads as a
      // single sweep left-to-right rather than three separate row reveals.
      gsap.fromTo(
        q("[data-member]"),
        slideFrom("right", 40),
        {
          ...slideTo(),
          duration: 0.7,
          stagger: 0.06,
          scrollTrigger: enterTrigger(el, "top 78%"),
        },
      );

      gsap.fromTo(
        q("[data-team-cta]"),
        slideFrom("left", 28),
        { ...slideTo(), duration: 0.6, scrollTrigger: enterTrigger(el, "bottom 92%") },
      );
    },
    { dependencies: [t.heading], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      id="team"
      className="flex flex-col items-center gap-[32px] md:gap-[48px] px-[20px] md:px-[120px] py-[40px] md:py-[80px] bg-[var(--agency-white)]"
    >
      <div className="flex flex-col items-center gap-[12px] max-w-[500px]">
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[32px] w-full">
        {team.map((m, i) => (
          <div
            key={m.name}
            data-member
            className="group flex flex-col items-center flex-1 min-w-0"
          >
            {/* object-left-top: the box is landscape but the photos are
                portraits, so a centred crop cuts heads off. */}
            {/* object-top, not object-left-top: the square portraits crop only
                vertically so horizontal anchoring is moot for them, while the
                one landscape shot needs to stay horizontally centred. */}
            <div className="w-full aspect-[4/3] overflow-hidden rounded-[8px]">
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col items-center gap-[4px] pt-[16px]">
              <span className="text-[16px] md:text-[18px] font-semibold text-[var(--agency-heading)]">
                {m.name}
              </span>
              <span className="text-[13px] md:text-[14px] text-[var(--agency-body)]">
                {t.roles[i]}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p
        data-team-cta
        className="text-[14px] md:text-[15px] italic text-[var(--agency-body)]"
      >
        {t.more}
      </p>
    </section>
  );
}
