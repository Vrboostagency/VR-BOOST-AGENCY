"use client";

import type { ReactNode } from "react";
import { useMagnetic } from "@/components/motion/useMagnetic";

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z" />
    </svg>
  );
}

export default function CtaButton({
  href,
  children,
  small = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  small?: boolean;
  className?: string;
}) {
  const magnetRef = useMagnetic<HTMLAnchorElement>(0.25);

  return (
    <a
      ref={magnetRef}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-2 rounded-lg bg-[var(--tds-blue)] font-medium text-white transition-colors hover:bg-[#1a46d6] ${
        small ? "px-4 py-2.5 text-sm" : "px-6 py-3.5 text-base"
      } ${className}`}
    >
      <span>{children}</span>
      <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
