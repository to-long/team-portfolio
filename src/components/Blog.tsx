"use client";

import Image from "next/image";
import Link from "next/link";
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
import { POSTS } from "@/lib/posts";
import SplitHeading from "./animations/SplitHeading";

export default function Blog() {
  const t = useTranslations("blog");
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

      // From the left here — Testimonials just came in from the right, so
      // alternating keeps consecutive card sections from feeling identical.
      gsap.fromTo(
        q("[data-post]"),
        slideFrom("left", 44),
        {
          ...slideTo(),
          duration: 0.75,
          stagger: 0.08,
          scrollTrigger: enterTrigger(el, "top 80%"),
        },
      );
    },
    { dependencies: [t.heading], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      id="blog"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px] w-full">
        {/* The whole card is the link, so the click target is not just the
            12px "Read More" line. */}
        {t.items.map((p, i) => (
          <Link
            key={POSTS[i].slug}
            href={`/blog/${POSTS[i].slug}`}
            data-post
            className="group flex flex-col rounded-[8px] overflow-hidden bg-[var(--agency-white)] border border-[var(--agency-border)] lg:border-0 transition-shadow hover:shadow-[0_18px_36px_-18px_rgba(9,14,52,0.35)]"
          >
            <div className="relative w-full h-[200px]">
              <Image
                src={POSTS[i].image}
                alt={p.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                quality={62}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-[12px] p-[20px] md:p-[24px]">
              <h3 className="text-[17px] md:text-[18px] font-semibold leading-[1.4] text-[var(--agency-heading)]">
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[var(--agency-body)]">
                {p.desc}
              </p>
              <span className="mt-auto text-[14px] font-medium text-[var(--agency-blue)] transition-transform group-hover:translate-x-[4px]">
                {t.readMore}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
