"use client";

import { useRef, useState, type ReactNode } from "react";
import { ArrowIcon } from "./CtaButton";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/components/motion/reduced-motion";

type Product = {
  id: string;
  tab: string;
  heading: string;
  blurb: string;
  href: string;
  video: string;
};

const PRODUCTS: Product[] = [
  {
    id: "connected-workers",
    tab: "Connected Workers",
    heading: "Connect Your Workforce",
    blurb:
      "Digital twins, AR/VR, and IoT working together to keep frontline teams safer and more productive.",
    href: "/Product/HubAvatar",
    video:
      "https://static.treedis.com/website/Connected+Worker+Platform+%231+(1).mp4",
  },
  {
    id: "indoor-navigation",
    tab: "Indoor Navigation",
    heading: "Wayfinding Simplified",
    blurb:
      "Guide visitors through any building with real-time 3D directions on web, kiosk, or AR.",
    href: "/Product/Navigation",
    video: "https://treedis-public.s3.eu-central-1.amazonaws.com/website/0416.mp4",
  },
  {
    id: "interactive-real-estate",
    tab: "Interactive Real Estate",
    heading: "Real Estate Reimagined",
    blurb:
      "Showcase properties with immersive 3D tours and visual tools that help buyers decide faster.",
    href: "/Product/Homestaging",
    video: "https://static.treedis.com/website/Copy+of+Seamless+Conversion.mp4",
  },
  {
    id: "immersive-experiences",
    tab: "Immersive Experiences",
    heading: "Bring Your Space to Life",
    blurb:
      "Turn digital twins into interactive experiences for shopping, learning, and play.",
    href: "/Product/Capture",
    video:
      "https://treedis-public.s3.eu-central-1.amazonaws.com/website/Immersive+Experiences+Solution+(1080P)+(1).mp4",
  },
];

/** Crossfades its children in on mount; re-key to replay. Text and video stage in slightly apart. */
function TabPanel({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const text = el.querySelector(".tds-tab-copy");
      const media = el.querySelector(".tds-tab-media");
      gsap.fromTo(
        text,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
      gsap.fromTo(
        media,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", delay: 0.08 }
      );
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}

export default function ProductsTabs() {
  const [activeId, setActiveId] = useState(PRODUCTS[0].id);
  const active = PRODUCTS.find((p) => p.id === activeId) ?? PRODUCTS[0];

  return (
    <section className="bg-[#f2f4f7] py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <h1 className="text-[36px] font-bold leading-tight text-[#101828] md:text-[52px]">
          Our Products
        </h1>

        {/* Tab bar */}
        <div
          role="tablist"
          aria-label="VR BOOST Agency products"
          className="mt-8 flex flex-wrap gap-3"
        >
          {PRODUCTS.map((p) => {
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(p.id)}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors md:text-base ${
                  isActive
                    ? "bg-[var(--tds-blue)] text-white"
                    : "border border-[#d0d5dd] bg-transparent text-[#101828] hover:bg-white"
                }`}
              >
                {p.tab}
              </button>
            );
          })}
        </div>

        {/* Active panel — keyed so the crossfade replays on switch */}
        <TabPanel key={active.id}>
          <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="tds-tab-copy flex flex-col items-start gap-5">
              <h2 className="text-[30px] font-bold leading-tight text-[#101828] md:text-[40px]">
                {active.heading}
              </h2>
              <p className="text-base leading-relaxed text-[#475467]">
                {active.blurb}
              </p>
              <a
                href={active.href}
                target={active.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  active.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group inline-flex items-center gap-2 font-medium text-[#101828] transition-colors hover:text-[var(--tds-blue)]"
              >
                <span>Discover more</span>
                <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Only the active tab's video is rendered/loaded */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="tds-tab-media w-full rounded-2xl"
            >
              <source src={active.video} type="video/mp4" />
            </video>
          </div>
        </TabPanel>
      </div>
    </section>
  );
}
