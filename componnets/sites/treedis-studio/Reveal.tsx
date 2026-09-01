"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/components/motion/reduced-motion";

/**
 * Fades + lifts children into view as they scroll into the viewport.
 * The `.tds-reveal` class (see treedis-studio.css) holds the hidden baseline
 * in plain CSS so there's no flash of visible content before hydration, and
 * so prefers-reduced-motion is honored even before GSAP runs.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Starting vertical offset in px. */
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: delay / 1000,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: ref, dependencies: [delay, y] }
  );

  return (
    <div
      ref={ref}
      className={`tds-reveal ${className}`}
      style={{ "--reveal-y": `${y}px` } as CSSProperties}
    >
      {children}
    </div>
  );
}
