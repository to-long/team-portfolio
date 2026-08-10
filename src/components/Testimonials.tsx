"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
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
  { avatar: "/images/avatar-brenda.webp", name: "Brenda Bijen" },
  { avatar: "/images/avatar-herbert.webp", name: "Herbert Friese" },
  { avatar: "/images/avatar-akofa.webp", name: "Akofa Wallace" },
  { avatar: "/images/avatar-halley.webp", name: "Halley Dang" },
];

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Native scroll-snap does the sliding; the arrows only nudge scrollLeft, so
  // swipe, trackpad, keyboard and buttons all drive the same one mechanism.
  const syncEdges = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    syncEdges();
    const el = track.current;
    if (!el) return;
    el.addEventListener("scroll", syncEdges, { passive: true });
    window.addEventListener("resize", syncEdges);
    return () => {
      el.removeEventListener("scroll", syncEdges);
      window.removeEventListener("resize", syncEdges);
    };
  }, [syncEdges, t.items.length]);

  const nudge = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-quote-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

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

      // Blur/fade rather than a slide: animating x on cards that live inside a
      // horizontal scroller would fight the scroll position.
      gsap.fromTo(
        q("[data-quote-card]"),
        { opacity: 0, filter: "blur(8px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.09,
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

      <div className="relative w-full">
        <div
          ref={track}
          className="flex gap-[20px] md:gap-[32px] overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {t.items.map((item, i) => (
            <div
              key={people[i].name}
              data-quote-card
              className="flex shrink-0 basis-[86%] sm:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-64px)/3)] snap-start flex-col gap-[20px] rounded-[8px] border border-[var(--agency-border)] bg-[var(--agency-white)] p-[24px] md:p-[32px]"
            >
              <p className="text-[14px] md:text-[15px] leading-[1.7] text-[var(--agency-body)]">
                {item.quote}
              </p>
              <div className="mt-auto flex items-center gap-[12px]">
                <img
                  loading="lazy"
                  decoding="async"
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

        {/* Desktop affordance only — on touch, swiping is the obvious gesture
            and the buttons would just sit on top of a card. */}
        <button
          type="button"
          onClick={() => nudge(-1)}
          disabled={atStart}
          aria-label={t.prev}
          className="hidden md:flex absolute left-[-18px] top-1/2 -translate-y-1/2 items-center justify-center w-[40px] h-[40px] rounded-full border border-[var(--agency-border)] bg-[var(--agency-white)] text-[var(--agency-heading)] shadow-sm transition-opacity disabled:opacity-0"
        >
          <ChevronLeft className="w-[18px] h-[18px]" />
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          disabled={atEnd}
          aria-label={t.next}
          className="hidden md:flex absolute right-[-18px] top-1/2 -translate-y-1/2 items-center justify-center w-[40px] h-[40px] rounded-full border border-[var(--agency-border)] bg-[var(--agency-white)] text-[var(--agency-heading)] shadow-sm transition-opacity disabled:opacity-0"
        >
          <ChevronRight className="w-[18px] h-[18px]" />
        </button>
      </div>
    </section>
  );
}
