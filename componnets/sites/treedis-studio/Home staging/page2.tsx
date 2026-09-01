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
const EYEBROW =
  "mb-3 text-[13px] font-bold uppercase tracking-[0.04em] text-[#2055FF]";
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
            <p className={EYEBROW}>Better conversion rate</p>
            <h2 className={HEADING}>Close Deals Faster with Home Staging</h2>
            <p className={BODY}>
              Les techniciens Capture sont sélectionnés, formés et certifiés
              avec des années d&apos;expérience afin de fournir un service
              exceptionnel et de vous livrer les jumeaux numériques les plus
              précis. Soyez assuré qu&apos;aucun espace n&apos;est trop grand
              ou trop complexe pour notre équipe.
            </p>
            <div className="mt-6">
              <TryItButton />
            </div>
          </div>
        </Reveal>
        <ClipReveal direction="right" className="max-[899px]:order-1">
          <img
            src="/brand/products/images/home-staging-catalog.png"
            alt="Product catalog interface showing a 3D chair with material and pricing details next to a conversion rate performance chart"
            className={IMAGE}
            loading="lazy"
          />
        </ClipReveal>
      </div>

      <div className={`${GRID} mt-16 min-[900px]:mt-24`}>
        <ClipReveal direction="left">
          <img
            src="/brand/products/images/home-staging-3d-objects.png"
            alt="AR view of a customizable sofa with a designer material swatch panel and a sales growth chart"
            className={IMAGE}
            loading="lazy"
          />
        </ClipReveal>
        <Reveal delay={100}>
          <div className={TEXT_COL}>
            <p className={EYEBROW}>100% customizable</p>
            <h2 className={HEADING}>Upload Your 3D Objects</h2>
            <p className={BODY}>
              Use 3D models of your own to give your space a unique look and
              feel. Once you&apos;ve uploaded them, they will appear in your
              library, ready to use.
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

export function ArNavHowItWorksTwo() {
  return (
    <section className="mt-[64px] min-[900px]:mt-[120px] bg-white pt-0 pb-[96px]">
      <div className={GRID}>
        <Reveal className="max-[899px]:order-2">
          <div className={TEXT_COL}>
            <p className={EYEBROW}>Better conversion rate</p>
            <h2 className={HEADING}>Close Deals Faster with Home Staging</h2>
            <p className={BODY}>
              Les techniciens Capture sont sélectionnés, formés et certifiés
              avec des années d&apos;expérience afin de fournir un service
              exceptionnel et de vous livrer les jumeaux numériques les plus
              précis. Soyez assuré qu&apos;aucun espace n&apos;est trop grand
              ou trop complexe pour notre équipe.
            </p>
            <div className="mt-6">
              <TryItButton />
            </div>
          </div>
        </Reveal>
        <ClipReveal direction="right" className="max-[899px]:order-1">
          <img
            src="/brand/products/images/home-staging-sketchfab.png"
            alt="3D room scene with a blue sofa placed via AR, showing a Sketchfab integration panel and an object library settings panel"
            className={IMAGE}
            loading="lazy"
          />
        </ClipReveal>
      </div>
    </section>
  );
}
