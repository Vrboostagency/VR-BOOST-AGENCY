"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "./reduced-motion";

/**
 * Staggers its direct children into view as the group scrolls into the
 * viewport. Use for repeated-item grids/rows (cards, logos, steps) that
 * should animate in one-by-one rather than as a single flat block.
 */
export default function RevealStagger({
  children,
  className = "",
  as: Tag = "div",
  stagger = 0.06,
  y = 24,
  scale,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul";
  stagger?: number;
  y?: number;
  /** Optional starting scale (e.g. 0.94) for a subtle scale-in alongside the fade. */
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const items = Array.from(el.children);
      if (!items.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, y, ...(scale ? { scale } : {}) },
        {
          opacity: 1,
          y: 0,
          ...(scale ? { scale: 1 } : {}),
          duration: 0.8,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: ref, dependencies: [stagger, y, scale] }
  );

  return (
    <Tag
      ref={ref as never}
      className={`tds-reveal-stagger ${className}`}
      style={{ "--reveal-y": `${y}px` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
