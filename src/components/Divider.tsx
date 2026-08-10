"use client";

import { useRef } from "react";
import { EASE, enterTrigger, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

export default function Divider() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    // Wipes open from the centre outwards.
    gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "50% 50%",
        duration: 0.7,
        ease: EASE.soft,
        scrollTrigger: enterTrigger(el, "top 95%"),
      },
    );
  }, []);

  return (
    <div className="flex justify-center px-[20px] md:px-0">
      <div ref={ref} className="w-full md:w-[600px] h-px bg-[var(--agency-border)]" />
    </div>
  );
}
