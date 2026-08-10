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

// Index-matched to `testimonials.items` in translations.ts.
const people = [
  { avatar: "/images/avatar-brenda.jpg", name: "Brenda Bijen" },
  { avatar: "/images/avatar-herbert.jpg", name: "Herbert Friese" },
  { avatar: "/images/avatar-akofa.jpg", name: "Akofa Wallace" },
];

export default function Testimonials() {
  const t = useTranslations("testimonials");
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

      // Quotes trail in from the right, then the avatar row of each card
      // follows a beat later so the attribution lands after the words.
      gsap.fromTo(
        q("[data-quote-card]"),
        slideFrom("right", 44),
        {
          ...slideTo(),
          duration: 0.75,
          stagger: 0.09,
          scrollTrigger: enterTrigger(el, "top 80%"),
        },
      );

      gsap.fromTo(
        q("[data-quote-author]"),
        slideFrom("right", 18),
        {
          ...slideTo(),
          duration: 0.6,
          stagger: 0.09,
          delay: 0.2,
          scrollTrigger: enterTrigger(el, "top 80%"),
        },
      );
    },
    { dependencies: [t.heading], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      className="flex flex-col items-center gap-[32px] md:gap-[48px] px-[20px] md:px-[120px] py-[40px] md:py-[80px] bg-[var(--agency-muted)]"
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
      {/* No `items-start` — grid items must keep the default `stretch` so
          every card is as tall as the tallest one in its row. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[32px] w-full">
        {t.items.map((item, i) => (
          <div
            key={people[i].name}
            data-quote-card
            className="flex flex-col gap-[20px] rounded-[8px] border border-[var(--agency-border)] p-[24px] md:p-[32px]"
          >
            <p className="text-[14px] md:text-[15px] leading-[1.7] text-[var(--agency-body)]">
              {item.quote}
            </p>
            {/* mt-auto pins the attribution to the bottom of the card, so the
                avatars line up across a row even when quotes differ in length. */}
            <div data-quote-author className="mt-auto flex items-center gap-[12px]">
              <img
                src={people[i].avatar}
                alt={people[i].name}
                className="w-[48px] h-[48px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-[2px]">
                <span className="text-[14px] font-semibold text-[var(--agency-heading)]">
                  {people[i].name}
                </span>
                <span className="text-[13px] text-[var(--agency-body)]">
                  {item.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
