"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: "What is the turnaround time?",
    a: "Typically, digital twins are processed and delivered within 24 to 48 hours after the onsite capture is completed. For complex enterprise environments exceeding 50,000 sq. ft., timeline may extend to 72 hours.",
  },
  {
    q: "What equipment do you use?",
    a: "We use professional-grade 360° capture rigs and LiDAR scanners, paired with our in-house processing pipeline to reconstruct accurate, navigable digital twins.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the size and complexity of the space being captured. Reach out with your square footage and we'll put together a tailored quote.",
  },
  {
    q: "What file formats do you deliver?",
    a: "You'll receive a hosted, shareable digital twin plus exports in standard formats (glTF, USDZ, and high-res panoramas) on request.",
  },
  {
    q: "Do you operate globally?",
    a: "Yes — our certified capture network covers North America, Europe and the Middle East, with more regions added regularly.",
  },
];

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M4 10h12" stroke="var(--tds-blue)" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M10 4v12"
        stroke="var(--tds-blue)"
        strokeWidth="1.6"
        strokeLinecap="round"
        className={`origin-center transition-transform duration-200 ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </svg>
  );
}

/** FAQ accordion, shared across product pages. */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[var(--tds-light)] py-16 lg:py-24">
      <div className="mx-auto max-w-[820px] px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[30px] font-bold text-[var(--tds-text)] md:text-[40px]">
              <span className="relative inline-block">
                FAQ
                <img
                  src="/sites/treedis-studio/contact/Vector-1740.png"
                  alt=""
                  className="absolute left-1/2 top-full mt-2 h-[11px] w-[124px] -translate-x-1/2"
                  aria-hidden
                />
              </span>
            </h2>
            <p className="mt-7 max-w-xl text-base text-[var(--tds-muted)]">
              Explore our Capture Service ecosystem. From technical
              specifications to workflow logistics, find everything you need
              to scale your virtual presence.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div className="overflow-hidden rounded-xl border border-[#e4e7ec] bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-[var(--tds-text)] md:text-lg">
                      {item.q}
                    </span>
                    <PlusMinusIcon open={open} />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--tds-muted)] md:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
