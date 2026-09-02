"use client";

import { useId, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/components/motion/reduced-motion";

/** Frosted-glass circular backdrop, with a pulsing radar ring, used behind the video play button. */
export default function Player({ className = "" }: { className?: string }) {
  const clipId = useId();
  const ref = useRef<SVGSVGElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    gsap.to(el, {
      scale: 1.05,
      duration: 1.6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "center",
    });

    if (ringRef.current) {
      gsap.fromTo(
        ringRef.current,
        { scale: 1, opacity: 0.5, transformOrigin: "center" },
        {
          scale: 1.35,
          opacity: 0,
          duration: 1.8,
          ease: "power2.out",
          repeat: -1,
        }
      );
    }
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 142 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        ref={ringRef}
        cx="71"
        cy="71"
        r="70"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        aria-hidden
      />
      <foreignObject x="-12.5" y="-12.5" width="167" height="167">
        <div
          style={{
            backdropFilter: "blur(6.25px)",
            WebkitBackdropFilter: "blur(6.25px)",
            clipPath: `url(#${clipId})`,
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>
      <path
        data-figma-bg-blur-radius="12.5"
        d="M71 142C110.212 142 142 110.212 142 71C142 31.7878 110.212 0 71 0C31.7878 0 0 31.7878 0 71C0 110.212 31.7878 142 71 142Z"
        fill="white"
        fillOpacity="0.1"
      />
      <defs>
        <clipPath id={clipId} transform="translate(12.5 12.5)">
          <path d="M71 142C110.212 142 142 110.212 142 71C142 31.7878 110.212 0 71 0C31.7878 0 0 31.7878 0 71C0 110.212 31.7878 142 71 142Z" />
        </clipPath>
      </defs>
    </svg>
  );
}
