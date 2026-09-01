"use client";

import { JSX, useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";
import RevealStagger from "@/components/motion/RevealStagger";
import Player from "./Player";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/components/motion/reduced-motion";

const ASSETS = "/sites/treedis-studio";

type Step = {
  n: string;
  title: string;
  text: string;
  icon: (props: { className?: string }) => JSX.Element;
};

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 23 25" fill="none" aria-hidden>
      <path
        d="M2.5 25C1.8125 25 1.224 24.7552 0.734398 24.2656C0.244798 23.776 0 23.1875 0 22.5V5C0 4.3125 0.244798 3.724 0.734398 3.2344C1.224 2.7448 1.8125 2.5 2.5 2.5H3.75V0H6.25V2.5H16.25V0H18.75V2.5H20C20.688 2.5 21.276 2.7448 21.766 3.2344C22.255 3.724 22.5 4.3125 22.5 5V22.5C22.5 23.1875 22.255 23.776 21.766 24.2656C21.276 24.7552 20.688 25 20 25H2.5ZM2.5 22.5H20V10H2.5V22.5ZM2.5 7.5H20V5H2.5V7.5ZM11.25 15C10.8958 15 10.599 14.8802 10.3594 14.6406C10.1198 14.401 10 14.1042 10 13.75C10 13.3958 10.1198 13.099 10.3594 12.8594C10.599 12.6198 10.8958 12.5 11.25 12.5C11.6042 12.5 11.901 12.6198 12.1406 12.8594C12.3802 13.099 12.5 13.3958 12.5 13.75C12.5 14.1042 12.3802 14.401 12.1406 14.6406C11.901 14.8802 11.6042 15 11.25 15ZM6.25 15C5.8958 15 5.599 14.8802 5.3594 14.6406C5.1198 14.401 5 14.1042 5 13.75C5 13.3958 5.1198 13.099 5.3594 12.8594C5.599 12.6198 5.8958 12.5 6.25 12.5C6.6042 12.5 6.901 12.6198 7.1406 12.8594C7.3802 13.099 7.5 13.3958 7.5 13.75C7.5 14.1042 7.3802 14.401 7.1406 14.6406C6.901 14.8802 6.6042 15 6.25 15ZM16.25 15C15.896 15 15.599 14.8802 15.359 14.6406C15.1198 14.401 15 14.1042 15 13.75C15 13.3958 15.1198 13.099 15.359 12.8594C15.599 12.6198 15.896 12.5 16.25 12.5C16.604 12.5 16.901 12.6198 17.141 12.8594C17.38 13.099 17.5 13.3958 17.5 13.75C17.5 14.1042 17.38 14.401 17.141 14.6406C16.901 14.8802 16.604 15 16.25 15ZM11.25 20C10.8958 20 10.599 19.8802 10.3594 19.6406C10.1198 19.401 10 19.1042 10 18.75C10 18.3958 10.1198 18.099 10.3594 17.8594C10.599 17.6198 10.8958 17.5 11.25 17.5C11.6042 17.5 11.901 17.6198 12.1406 17.8594C12.3802 18.099 12.5 18.3958 12.5 18.75C12.5 19.1042 12.3802 19.401 12.1406 19.6406C11.901 19.8802 11.6042 20 11.25 20ZM6.25 20C5.8958 20 5.599 19.8802 5.3594 19.6406C5.1198 19.401 5 19.1042 5 18.75C5 18.3958 5.1198 18.099 5.3594 17.8594C5.599 17.6198 5.8958 17.5 6.25 17.5C6.6042 17.5 6.901 17.6198 7.1406 17.8594C7.3802 18.099 7.5 18.3958 7.5 18.75C7.5 19.1042 7.3802 19.401 7.1406 19.6406C6.901 19.8802 6.6042 20 6.25 20ZM16.25 20C15.896 20 15.599 19.8802 15.359 19.6406C15.1198 19.401 15 19.1042 15 18.75C15 18.3958 15.1198 18.099 15.359 17.8594C15.599 17.6198 15.896 17.5 16.25 17.5C16.604 17.5 16.901 17.6198 17.141 17.8594C17.38 18.099 17.5 18.3958 17.5 18.75C17.5 19.1042 17.38 19.401 17.141 19.6406C16.901 19.8802 16.604 20 16.25 20Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8.5C4 7.39543 4.89543 6.5 6 6.5H8L9.2 4.5H14.8L16 6.5H18C19.1046 6.5 20 7.39543 20 8.5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V8.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12.5" r="3.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function PackageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.5L20 7.75V16.25L12 20.5L4 16.25V7.75L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M4 7.75L12 12M12 12L20 7.75M12 12V20.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 55 60" fill="none" aria-hidden>
      <path
        d="M48.756 20.3483C56.021 24.5953 56.021 35.0932 48.756 39.3402L16.552 58.1682C9.218 62.4552 0 57.1663 0 48.6713V11.0172C0 2.52223 9.218 -2.76672 16.552 1.52028L48.756 20.3483Z"
        fill="white"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const STEPS: Step[] = [
  {
    n: "1",
    title: "Book Your Scan",
    text: "Schedule a date and time that works for you through our streamlined booking platform.",
    icon: CalendarIcon,
  },
  {
    n: "2",
    title: "We Visit & Scan",
    text: "Our certified professionals capture your space using high-end, specialized equipment.",
    icon: CameraIcon,
  },
  {
    n: "3",
    title: "Receive Your Tour",
    text: "Get your interactive digital twin within days, ready to share, embed, and explore.",
    icon: PackageIcon,
  },
];

type ArNavigationHowItWorksProps = {
  videoSrc?: string;
  posterSrc?: string;
};

export default function ArNavigationHowItWorks({
  videoSrc,
  posterSrc = `${ASSETS}/ar-navigation/Vector.png`,
}: ArNavigationHowItWorksProps) {
  const [isOpen, setIsOpen] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useGSAP(
    () => {
      if (!isOpen || prefersReducedMotion()) return;
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power2.out" });
      gsap.fromTo(
        modalBoxRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.24, ease: "power3.out" }
      );
    },
    { dependencies: [isOpen] }
  );

  function closeModal() {
    if (prefersReducedMotion() || !backdropRef.current) {
      setIsOpen(false);
      return;
    }
    gsap.to(modalBoxRef.current, { opacity: 0, scale: 0.95, duration: 0.18, ease: "power2.in" });
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => setIsOpen(false),
    });
  }

  return (
    <section className="bg-[var(--tds-light)]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="relative inline-block text-[26px] font-bold text-[var(--tds-text)] md:text-[32px]">
              How it Works
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 100 6"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M0 4 Q 50 -2 100 4" stroke="var(--tds-blue)" strokeWidth="3" fill="none" />
              </svg>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--tds-muted)]">
              Effortlessly navigate indoor spaces across web, AR, and kiosk modes, leveraging
              digital twins for seamless movement through 3D environments.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative mt-12 block w-full overflow-hidden rounded-2xl bg-black/5"
            aria-label="Play AR navigation demo video"
          >
            <img
              src={posterSrc}
              alt="AR indoor navigation demo: a phone camera view with turn-by-turn direction bubbles and a waypoint trail leading to reception"
              className="aspect-video w-full object-cover"
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="relative flex h-16 w-16 items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 md:h-[142px] md:w-[142px]">
                <Player className="absolute inset-0 h-full w-full" />
                <PlayIcon className="relative ml-1 h-7 w-7 md:h-14 md:w-14" />
              </span>
            </span>
          </button>
        </Reveal>

        <RevealStagger className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.1} y={24}>
          {STEPS.map((step) => (
            <div key={step.n} className="relative min-h-[288px] overflow-hidden rounded-[28px] bg-white p-8 shadow-[0px_24px_48px_rgba(21,27,46,0.06)]">
              <span className="absolute inset-x-0 top-0 h-1 bg-[var(--tds-blue)]" aria-hidden />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1879FE1F] text-[var(--tds-blue)]">
                <step.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-8 text-lg font-bold text-[#151B2E]">
                {step.n}. {step.title}
              </h3>
              <p className="mt-6 max-w-[225px] text-sm leading-relaxed text-[#5A6062]">
                {step.text}
              </p>
            </div>
          ))}
        </RevealStagger>
      </div>

      {isOpen && (
        <div
          ref={backdropRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close video"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          <div
            ref={modalBoxRef}
            className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {videoSrc ? (
              <video
                src={videoSrc}
                poster={posterSrc}
                controls
                autoPlay
                className="h-full w-full object-cover"
              >
                Your browser does not support embedded video.
              </video>
            ) : (
              <img
                src={posterSrc}
                alt="AR indoor navigation demo"
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
