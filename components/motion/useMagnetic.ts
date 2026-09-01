"use client";

import { useRef, type RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "./reduced-motion";

/**
 * Subtle pointer-follow pull for isolated interactive elements (buttons,
 * icon links). Desktop/mouse only — skipped on touch devices and under
 * prefers-reduced-motion.
 */
export function useMagnetic<T extends Element>(
  strength = 0.25
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const target = el as unknown as HTMLElement;

    const mm = gsap.matchMedia();
    mm.add("(pointer: fine)", () => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });

      const onMove = (e: PointerEvent) => {
        const rect = target.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        xTo(relX * strength);
        yTo(relY * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      target.addEventListener("pointermove", onMove);
      target.addEventListener("pointerleave", onLeave);
      return () => {
        target.removeEventListener("pointermove", onMove);
        target.removeEventListener("pointerleave", onLeave);
      };
    });

    return () => mm.revert();
  }, []);

  return ref;
}
