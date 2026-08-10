"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Lazy-loaded images and webfonts land after the first layout pass, so a
// trigger measured against it can start too early. One refresh once
// everything has loaded re-measures them all.
if (typeof window !== "undefined") {
  if (document.readyState === "complete") {
    ScrollTrigger.refresh();
  } else {
    window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
  }
}

/** Animations are skipped entirely when the visitor asked for less motion. */
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export const EASE = {
  soft: "power2.out",
  glide: "power3.out",
} as const;

export type SlideSide = "left" | "right";

/**
 * Shared reveal: content glides in sideways out of a blur. Horizontal only —
 * no scale or rotation, so nothing appears to move toward the viewer.
 *
 * These are functions, not constants: GSAP writes into the vars objects it is
 * handed, so a shared object passed to a second tween would arrive already
 * carrying state from the first.
 */
export const slideFrom = (side: SlideSide = "left", distance = 36): gsap.TweenVars => ({
  x: side === "left" ? -distance : distance,
  opacity: 0,
  filter: "blur(8px)",
});

/**
 * Shorter than it looks: `power3.out` front-loads most of the travel and spends
 * the tail decelerating, so 0.7s still reads as a glide. Distances are kept
 * modest for the same reason — cutting duration without cutting distance just
 * raises velocity, which is what actually reads as jerky.
 */
export const slideTo = (): gsap.TweenVars => ({
  x: 0,
  opacity: 1,
  filter: "blur(0px)",
  duration: 0.7,
  ease: EASE.glide,
});

/**
 * Scroll trigger for an on-enter reveal. `reset` on leave-back rather than
 * `once: true`: a trigger measured against a half-loaded layout can start too
 * early, and `once` would consume it permanently at the end state.
 */
export const enterTrigger = (
  trigger: Element,
  start = "top 82%",
): ScrollTrigger.Vars => ({
  trigger,
  start,
  toggleActions: "play none none reset",
});

export { gsap, useGSAP, ScrollTrigger };
