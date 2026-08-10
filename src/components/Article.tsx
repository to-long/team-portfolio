"use client";

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

/**
 * Rendered by /blog/[slug]. Takes an index rather than a slug so the
 * slug → index lookup happens once, in the route.
 */
export default function Article({ index }: { index: number }) {
  const t = useTranslations("blog");
  const post = t.items[index];
  const meta = POSTS[index];
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const q = gsap.utils.selector(el);

      gsap
        .timeline()
        .fromTo(q("[data-article-back]"), slideFrom("left", 24), slideTo(), 0)
        .fromTo(
          q("[data-article-hero]"),
          { opacity: 0, filter: "blur(16px)" },
          { opacity: 1, filter: "blur(0px)", duration: 0.9, ease: "power2.out" },
          0.1,
        );

      gsap.fromTo(
        q("[data-article-para]"),
        slideFrom("left"),
        {
          ...slideTo(),
          stagger: 0.08,
          scrollTrigger: enterTrigger(el, "top 88%"),
        },
      );
    },
    { dependencies: [post.title], revertOnUpdate: true },
  );

  return (
    <article
      ref={root}
      className="flex flex-col gap-[28px] px-[20px] md:px-[120px] py-[40px] md:py-[80px] max-w-[820px] mx-auto w-full"
    >
      <Link
        data-article-back
        href="/#blog"
        className="self-start text-[14px] font-medium text-[var(--agency-blue)] hover:underline"
      >
        {t.backToList}
      </Link>

      <SplitHeading
        as="h1"
        by="lines"
        immediate
        text={post.title}
        className="text-[28px] md:text-[40px] font-bold leading-[1.25] text-[var(--agency-heading)]"
      />

      <figure data-article-hero className="flex flex-col gap-[8px]">
        {/* LCP element for this page: load it eagerly and hint the priority. */}
        <img
          fetchPriority="high"
          decoding="async"
          src={meta.image}
          alt=""
          className="w-full aspect-[16/9] object-cover rounded-[8px]"
        />
        {/* CC BY and CC BY-SA oblige us to name the author and the licence.
            Rendered for every post so the credit line is uniform, including
            the CC0 images that do not strictly require it. */}
        <figcaption className="text-[12px] text-[var(--agency-body)]">
          {"Photo: "}
          <a
            href={meta.credit.source}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--agency-blue)]"
          >
            {meta.credit.author}
          </a>
          {` · ${meta.credit.license} · Wikimedia Commons`}
        </figcaption>
      </figure>

      <div className="flex flex-col gap-[20px]">
        {post.body.map((paragraph, i) => (
          <p
            key={i}
            data-article-para
            className="text-[16px] md:text-[17px] leading-[1.8] text-[var(--agency-body)]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
