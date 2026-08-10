"use client";

import { useRef, type ElementType } from "react";
import {
  EASE,
  SplitText,
  enterTrigger,
  gsap,
  prefersReducedMotion,
  useGSAP,
  type SlideSide,
} from "@/lib/gsap";

type SplitBy = "lines" | "words" | "chars";

interface Props {
  text: string;
  as?: ElementType;
  className?: string;
  by?: SplitBy;
  side?: SlideSide;
  delay?: number;
  /** Above the fold: play on load instead of waiting for a scroll trigger. */
  immediate?: boolean;
  start?: string;
}

const STAGGER: Record<SplitBy, number> = { lines: 0.08, words: 0.032, chars: 0.012 };

/**
 * Heading whose lines/words/chars wipe in sideways from behind a mask.
 *
 * `autoSplit` re-splits after webfonts load and on resize — without it, lines
 * are measured with the fallback font and break in the wrong places. GSAP
 * re-runs `onSplit` on each re-split, so the tween is rebuilt too.
 */
export default function SplitHeading({
  text,
  as: Tag = "h2",
  className = "",
  by = "lines",
  side = "left",
  delay = 0,
  immediate = false,
  start = "top 86%",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const split = SplitText.create(el, {
        type: by,
        mask: by,
        autoSplit: true,
        onSplit: (self) => {
          const targets =
            by === "chars" ? self.chars : by === "words" ? self.words : self.lines;
          // fromTo with explicit end values, so a remount mid-flight cannot
          // bake a half-animated position in as the resting one.
          return gsap.fromTo(
            targets,
            { xPercent: side === "left" ? -105 : 105, opacity: 0 },
            {
              xPercent: 0,
              opacity: 1,
              duration: 0.75,
              ease: EASE.glide,
              stagger: STAGGER[by],
              delay,
              scrollTrigger: immediate ? undefined : enterTrigger(el, start),
            },
          );
        },
      });

      return () => split.revert();
    },
    { dependencies: [text, by, side], revertOnUpdate: true },
  );

  return (
    /*
     * `key={text}` is what makes switching language work.
     *
     * SplitText replaces this element's text node with its own nested divs, so
     * React's virtual tree no longer matches the real DOM. On a locale change
     * React tries to patch a text node that is no longer there, the update is
     * lost, and the heading keeps the previous language — while the surrounding
     * copy, which React still owns, updates normally.
     *
     * Keying on the text unmounts the element and mounts a fresh one, so React
     * never has to reconcile against DOM that SplitText mutated.
     */
    <Tag key={text} ref={ref} className={className}>
      {text}
    </Tag>
  );
}
