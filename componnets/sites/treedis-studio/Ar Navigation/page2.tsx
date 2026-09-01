"use client";

import Reveal from "../Reveal";
import ClipReveal from "@/components/motion/ClipReveal";
import { useMagnetic } from "@/components/motion/useMagnetic";

function LongArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TryItButton() {
  const ref = useMagnetic<HTMLAnchorElement>(0.2);
  return (
    <a
      ref={ref}
      href="#demo"
      className="group inline-flex w-fit items-center justify-center gap-2 rounded-md bg-[#0F172A] px-6 py-[14px] text-sm font-semibold tracking-[0] text-white outline-none transition-colors duration-150 ease-out hover:bg-[#1E293B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A] max-[899px]:w-full"
    >
      Try it for free
      <LongArrowIcon className="h-4 w-4 shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-[2px]" />
    </a>
  );
}

const GRID =
  "mx-auto grid max-w-[1200px] grid-cols-[42%_50%] items-center gap-x-[8%] px-[80px] max-[899px]:grid-cols-1 max-[899px]:gap-y-8 max-[899px]:px-6";

const TEXT_COL = "flex max-w-[440px] flex-col items-start";
const HEADING = "text-[32px] font-bold leading-[1.25] tracking-[-0.01em] text-[#0F172A]";
const BODY =
  "mt-4 text-[14px] leading-[1.7] text-[#4B5563] text-justify max-[899px]:text-left";
const IMAGE = "w-full max-h-[420px] object-contain";

export default function ArNavHowItWorksOne() {
  return (
    <section className="bg-white pt-[96px] pb-0">
      <div className={GRID}>
        <Reveal className="max-[899px]:order-2">
          <div className={TEXT_COL}>
            <h2 className={HEADING}>Advanced Navigation Capabilities</h2>
            <p className={BODY}>
              The Navigation Tool provides a comprehensive solution for
              navigating indoor environments utilizing web, AR and kiosk
              mode. With its advanced editor mode, users gain precise
              navigation control, making it a premium feature.
            </p>
            <div className="mt-6">
              <TryItButton />
            </div>
          </div>
        </Reveal>
        <ClipReveal direction="right" className="max-[899px]:order-1">
          <img
            src="/brand/products/images/advanced.png"
            alt="AR shopping navigation demo showing a phone held up to reveal product overlays and a store locations panel"
            className={IMAGE}
            loading="lazy"
          />
        </ClipReveal>
      </div>
    </section>
  );
}

export function ArNavHowItWorksTwo() {
  return (
    <section className="mt-[64px] min-[900px]:mt-[120px] bg-white pt-0 pb-[96px]">
      <div className={GRID}>
        <ClipReveal direction="left">
          <img
            src="/brand/products/images/interactive.png"
            alt="Interactive kiosk touchscreen showing a categorized navigation menu with a search bar and keyboard"
            className={IMAGE}
            loading="lazy"
          />
        </ClipReveal>
        <Reveal delay={100}>
          <div className={TEXT_COL}>
            <h2 className={HEADING}>Interactive Navigation Menu</h2>
            <p className={BODY}>
              Make virtual tours user-friendly with the structured Navigation
              Menu, which groups destination spots into categories. With
              customizable icons, colors, and settings, visitors can easily
              locate specific areas and navigate with ease.
            </p>
            <div className="mt-6">
              <TryItButton />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
