"use client";

import { useEffect, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "./reduced-motion";

/** Ticks GSAP's ScrollTrigger off Lenis's raf loop so scroll-driven animation stays in sync. */
function LenisScrollTriggerBridge() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
    };
  }, [lenis]);

  return null;
}

/** Site-wide smooth scroll. Falls back to native scroll for reduced-motion users. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = prefersReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: reduced ? 1 : 0.1,
        duration: reduced ? 0 : 1.2,
        smoothWheel: !reduced,
        syncTouch: false,
      }}
    >
      <LenisScrollTriggerBridge />
      {children}
    </ReactLenis>
  );
}
