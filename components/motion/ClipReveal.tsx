"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "./reduced-motion";

type Direction = "up" | "down" | "left" | "right";

/** clip-path the element starts clipped to (fully hidden), keyed by wipe direction. */
const CLIP_FROM: Record<Direction, string> = {
  up: "inset(0% 0% 100% 0%)",
  down: "inset(100% 0% 0% 0%)",
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
};

/**
 * Directional clip-path wipe reveal for hero images/screenshots, with a
 * companion slight scale-down. The `.tds-clip-reveal` CSS baseline (see
 * treedis-studio.css) pre-clips via CSS custom properties so there's no
 * flash of visible content before GSAP runs, and reduced-motion is honored
 * even before hydration.
 */
export default function ClipReveal({
  children,
  className = "",
  direction = "up",
  scale = 1.08,
  duration = 1.1,
  style,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  scale?: number;
  duration?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      gsap.fromTo(
        el,
        { clipPath: CLIP_FROM[direction], scale },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration,
          ease: "power4.inOut",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    },
    { scope: ref, dependencies: [direction, scale, duration] }
  );

  return (
    <div
      ref={ref}
      className={`tds-clip-reveal ${className}`}
      style={
        {
          ...style,
          "--clip-from": CLIP_FROM[direction],
          "--clip-scale": scale,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
