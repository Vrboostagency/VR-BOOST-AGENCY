"use client";

import Reveal from "../Reveal";
import ClipReveal from "@/components/motion/ClipReveal";

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
  return (
    <a
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
      <div className="mx-auto max-w-[1132px] px-6">
        <ClipReveal direction="up" duration={1.2}>
          <img
            src="/brand/products/images/card1.png"
            alt=""
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </ClipReveal>
      </div>
    </section>
  );
}

export function ArNavCollaborationTools() {
  return (
    <section className="bg-white pt-0 pb-[96px]">
      <div className="mx-auto flex max-w-[1132px] flex-col items-center gap-6 px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[24px] font-bold leading-[1.25] tracking-[-0.01em] text-[#0F172A] md:text-[32px]">
              Composantes de la collaboration
            </h2>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#4B5563] md:text-[18px]">
              Améliorer la collaboration grâce à une boîte à outils complète
            </p>
          </div>
        </Reveal>
        <ClipReveal direction="up" duration={1.2}>
          <img
            src="/brand/products/images/Cards2.png"
            alt="Collaboration toolkit tabs: Presence, Comments, and Digital Twin showing live participant cursors and avatars"
            className="w-full max-h-[560px] object-contain"
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
       
      </div>
    </section>
  );
}
