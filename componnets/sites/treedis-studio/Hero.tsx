"use client";

import { useRef } from "react";
import CtaButton from "./CtaButton";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/components/motion/reduced-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLAnchorElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const split = new SplitText(headingRef.current, {
        type: "words",
        wordsClass: "inline-block will-change-transform",
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(badgeRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
        // The heading's own opacity comes from the .tds-hero-init CSS baseline;
        // reveal the parent immediately, then stagger its SplitText words in.
        .set(headingRef.current, { opacity: 1 }, "-=0.35")
        .fromTo(
          split.words,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.06 },
          "<"
        )
        .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(
          videoWrapRef.current,
          { opacity: 0, clipPath: "inset(0% 0% 100% 0%)", scale: 1.06 },
          { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.1, ease: "power4.inOut" },
          "-=0.9"
        );

      // Desktop-only subtle parallax tilt on the video panel, following the pointer.
      const mm = gsap.matchMedia();
      mm.add("(pointer: fine)", () => {
        const wrap = videoWrapRef.current;
        const section = sectionRef.current;
        if (!wrap || !section) return;

        const xTo = gsap.quickTo(wrap, "rotationY", { duration: 0.6, ease: "power3" });
        const yTo = gsap.quickTo(wrap, "rotationX", { duration: 0.6, ease: "power3" });

        const onMove = (e: PointerEvent) => {
          const rect = section.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;
          xTo(relX * 6);
          yTo(relY * -6);
        };
        const onLeave = () => {
          xTo(0);
          yTo(0);
        };

        section.addEventListener("pointermove", onMove);
        section.addEventListener("pointerleave", onLeave);
        return () => {
          section.removeEventListener("pointermove", onMove);
          section.removeEventListener("pointerleave", onLeave);
        };
      });

      return () => {
        mm.revert();
        split.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[500px] overflow-hidden border-b border-[#202020] bg-[#0a1020] text-white"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Left: copy */}
        <div className="flex max-w-xl flex-col items-start gap-7">
          <a
            ref={badgeRef}
            href="/product-by-feature/tai"
            className="tds-hero-init inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition-colors hover:bg-white/10"
          >
            <img
              src="/sites/treedis-studio/wand-sparkles-(1).svg"
              alt=""
              className="h-4 w-4 shrink-0"
            />
            <span className="truncate text-sm font-medium text-white/80 sm:whitespace-normal">
              <span className="sm:hidden">Meet our new AI tool — VBA</span>
              <span className="hidden sm:inline">
                Meet our new AI tool - VBA  Designed to enhance your digital twin experience
              </span>
            </span>
          </a>
          <h1
            ref={headingRef}
            className="tds-hero-init text-[40px] font-bold leading-[1.05] tracking-tight md:text-[56px] lg:text-[64px]"
          >
            Building Digital Twins That Do More
          </h1>
          <div ref={ctaRef} className="tds-hero-init">
            <CtaButton href="https://my.treedis.com/admin/register">
              Start Now
            </CtaButton>
          </div>
        </div>

        {/* Right: video with decorative grid lines */}
        <div className="relative pl-8 pt-10 md:pl-14 md:pt-14" style={{ perspective: 1000 }}>
          <svg
            viewBox="0 0 1499 778"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
            className="tds-hero-lines pointer-events-none absolute inset-0 h-full w-full"
          >
            <path pathLength={1} d="M1500 72L220 72" />
            <path pathLength={1} d="M1500 128L220 128" />
            <path pathLength={1} d="M1500 189L220 189" />
            <path pathLength={1} d="M220 777L220 1" />
            <path pathLength={1} d="M538 777L538 128" />
          </svg>
          <div
            ref={videoWrapRef}
            className="tds-hero-init tds-hero-init--clip relative z-10 aspect-video w-full overflow-hidden rounded-xl bg-[#0d1530]"
          >
            <iframe
              src="https://player.vimeo.com/video/1072187237?autoplay=1&muted=1&controls=0&loop=1"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="VR Boost Agency digital twin platform showcase"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center md:flex">
        <span className="tds-scroll-cue flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </span>
      </div>
    </section>
  );
}
