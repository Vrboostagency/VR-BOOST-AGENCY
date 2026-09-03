"use client";

import { useRef, type CSSProperties } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "./reduced-motion";

/** Slow ambient scale/opacity "breathing" loop for a decorative background glow. */
export default function AmbientGlow({
  className = "",
  style,
  duration = 4,
  drift,
}: {
  /** Full positioning/sizing classes — this component only adds the motion. */
  className?: string;
  style?: CSSProperties;
  duration?: number;
  /** Optional small ambient x/y drift in px, in addition to the scale/opacity breathing. */
  drift?: { x?: number; y?: number };
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    // Runs forever (repeat: -1), so gate it on visibility — otherwise every
    // glow on the page keeps animating, and thus keeps compositing, even
    // while scrolled far out of view.
    gsap.to(el, {
      scale: 1.08,
      opacity: 0.85,
      x: drift?.x ?? 0,
      y: drift?.y ?? 0,
      duration,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play pause resume pause",
      },
    });
  });

  return (
    <div
      ref={ref}
      className={`pointer-events-none ${className}`}
      style={style}
      aria-hidden
    />
  );
}
