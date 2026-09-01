"use client";

import { useRef, type CSSProperties } from "react";
import { ArrowIcon } from "./CtaButton";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/components/motion/reduced-motion";

const ASSETS = "/sites/treedis-studio";

const studies = [
  {
    image: "case-facility-security.png",
    title: "Next-Gen Digital Twins for Facility Security",
    date: "Feb 19, 2026",
    href: "/case-studies/next-gen-digital-twins-for-facility-security",
  },
  {
    image: "case-granite.png",
    title: "Granite: Immersive Learning with Digital Twins",
    date: "June 12, 2025",
    href: "/case-studies/granite-immersive-learning-with-digital-twins",
  },
  {
    image: "case-unwe.png",
    title: "VR Boost Agency Introduces AR Wayfinding at UNWE",
    date: "June 12, 2025",
    href: "/case-studies/treedis-introduces-ar-wayfinding-at-unwe",
  },
];

export default function CaseStudies() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 404, behavior: "smooth" });
  };

  useGSAP(
    () => {
      const el = trackRef.current;
      if (!el || prefersReducedMotion()) return;
      gsap.fromTo(
        el.children,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    },
    { scope: trackRef }
  );

  return (
    <section className="bg-[var(--tds-light)]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="flex items-end justify-between">
          <h2 className="text-[26px] font-bold text-[var(--tds-text)] md:text-[28px]">
            Case Studies
          </h2>
          <a
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--tds-text)] transition-colors hover:text-[var(--tds-blue)]"
          >
            View all
            <ArrowIcon />
          </a>
        </div>

        <div
          ref={trackRef}
          className="tds-carousel tds-reveal-stagger mt-10 flex gap-6 overflow-x-auto pb-4"
          style={{ "--reveal-y": "24px" } as CSSProperties}
        >
          {studies.map((study) => (
            <a
              key={study.title}
              href={study.href}
              className="block w-[300px] shrink-0 overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-lg sm:w-[380px]"
            >
              <img
                src={`${ASSETS}/${study.image}`}
                alt={study.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-base font-bold leading-snug text-[var(--tds-text)]">
                  {study.title}
                </h3>
                <p className="mt-4 border-t border-gray-100 pt-4 text-sm text-[var(--tds-muted)]">
                  {study.date}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          <button
            type="button"
            aria-label="Previous case studies"
            onClick={() => scroll(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--tds-text)] shadow-sm transition-[color,background-color,transform] duration-150 ease-out hover:bg-[var(--tds-blue)] hover:text-white hover:scale-105 active:scale-95"
          >
            <ArrowIcon className="rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Next case studies"
            onClick={() => scroll(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--tds-text)] shadow-sm transition-[color,background-color,transform] duration-150 ease-out hover:bg-[var(--tds-blue)] hover:text-white hover:scale-105 active:scale-95"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
