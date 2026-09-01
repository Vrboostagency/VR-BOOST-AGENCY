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

function TryItButton({ ctaHref = "#demo" }: { ctaHref?: string }) {
  const ref = useMagnetic<HTMLAnchorElement>(0.2);
  return (
    <a
      ref={ref}
      href={ctaHref}
      className="group inline-flex w-fit items-center justify-center gap-2 rounded-md bg-[#0F172A] px-[22px] py-[13px] text-sm font-semibold tracking-[0] text-white outline-none transition-colors duration-150 ease-out hover:bg-[#1E293B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A] max-[899px]:w-full"
    >
      Try it for free
      <LongArrowIcon className="h-4 w-4 shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-[2px]" />
    </a>
  );
}

type CaptureShowcaseProps = {
  eyebrow: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  ctaHref?: string;
  reverse?: boolean;
};

/** Single source of truth for both "how it works" blocks — image/text mirror via `reverse`. */
function CaptureShowcase({
  eyebrow,
  heading,
  body,
  image,
  imageAlt,
  ctaHref = "#demo",
  reverse = false,
}: CaptureShowcaseProps) {
  return (
    <section className="bg-white py-[88px] max-[899px]:py-14">
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-6 max-[1023px]:px-10 max-[899px]:flex-col max-[899px]:gap-8 max-[899px]:px-6 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <Reveal className="w-[42%] max-w-[620px] max-[1023px]:w-[48%] max-[899px]:order-2 max-[899px]:w-full">
          <div className="flex flex-col items-start">
            <p className="mb-[10px] text-xs font-bold uppercase tracking-[0.08em] text-[#2563EB]">
              {eyebrow}
            </p>
            <h2 className="max-w-[480px] text-[34px] font-bold leading-[1.25] tracking-[-0.01em] text-[#0F172A]">
              {heading}
            </h2>
            <p className="mt-[18px] max-w-[480px] text-[14px] leading-[1.6] text-left text-[#4B5563]">
              {body}
            </p>
            <div className="mt-6">
              <TryItButton ctaHref={ctaHref} />
            </div>
          </div>
        </Reveal>
        <ClipReveal
          direction={reverse ? "left" : "right"}
          className="w-[41%] max-w-[590px] max-[1023px]:w-[48%] max-[899px]:order-1 max-[899px]:w-full"
        >
          <img
            src={image}
            alt={imageAlt}
            className="aspect-square w-full rounded-lg object-cover"
            loading="lazy"
          />
        </ClipReveal>
      </div>
    </section>
  );
}

export default function ArNavHowItWorksOne() {
  return (
    <CaptureShowcase
      eyebrow="Capture Services"
      heading="Laissez-nous créer votre jumeau numérique pour vous."
      body="Les techniciens Capture sont sélectionnés, formés et certifiés avec des années d'expérience afin de fournir un service exceptionnel et de vous livrer les jumeaux numériques les plus précis. Soyez assuré qu'aucun espace n'est trop grand ou trop complexe pour notre équipe."
      image="/brand/products/images/capture1.png"
      imageAlt="Capture technician setting up a 3D scanner on a tripod inside a space being digitized"
    />
  );
}

export function ArNavHowItWorksTwo() {
  return (
    <CaptureShowcase
      eyebrow="Certified Capture Technicians"
      heading="Engagés à fournir la plus haute qualité."
      body="Les techniciens Capture sont sélectionnés, formés et certifiés avec des années d'expérience afin de fournir un service exceptionnel et de vous livrer les jumeaux numériques les plus précis. Soyez assuré qu'aucun espace n'est trop grand ou trop complexe pour notre équipe."
      image="/brand/products/images/capture2.png"
      imageAlt="Capture technician reviewing a scan on a tablet next to the 3D scanner"
      reverse
    />
  );
}
