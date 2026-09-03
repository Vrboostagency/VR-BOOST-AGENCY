"use client";

import { useRef, useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import RevealStagger from "@/components/motion/RevealStagger";
import AmbientGlow from "@/components/motion/AmbientGlow";
import { useMagnetic } from "@/components/motion/useMagnetic";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/components/motion/reduced-motion";

const CONTACT_ASSETS = "/sites/treedis-studio/contact";
const SOCIAL_ASSETS = "/sites/treedis-studio/social";

const CONTACT_ROWS: { icon: string; label: string; value: string; href?: string }[] = [
  { icon: `${CONTACT_ASSETS}/Overlay.png`, label: "Direct Line", value: "+212 60000000", href: "tel:+21260000000" },
  { icon: `${CONTACT_ASSETS}/Overlay2.png`, label: "Email Us", value: "Contact@vrboostagency.com", href: "mailto:Contact@vrboostagency.com" },
  { icon: `${CONTACT_ASSETS}/Overlay3.png`, label: "HQ", value: "Casablanca, Maroc" },
];

const SOCIALS: { label: string; href: string; icon: string }[] = [
  { label: "Facebook", href: "https://facebook.com", icon: `${SOCIAL_ASSETS}/Facebook.svg` },
  { label: "X", href: "https://x.com", icon: `${SOCIAL_ASSETS}/twitter.svg` },
  { label: "Instagram", href: "https://instagram.com", icon: `${SOCIAL_ASSETS}/Instagram.svg` },
  { label: "LinkedIn", href: "https://linkedin.com", icon: `${SOCIAL_ASSETS}/linkedin.svg` },
];

/** "Restons connecté" contact section: details panel + form, shared across product pages. */
export default function Connected() {
  const [submitted, setSubmitted] = useState(false);
  const formPanelRef = useRef<HTMLDivElement>(null);
  const submitRef = useMagnetic<HTMLButtonElement>(0.2);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  useGSAP(
    () => {
      const el = formPanelRef.current;
      if (!el || prefersReducedMotion()) return;
      gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
    },
    { dependencies: [submitted] }
  );

  return (
    <section id="contact" className="scroll-mt-[84px] bg-[var(--tds-light)] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[40px] bg-[hsla(224,52%,8%,1)] p-6 md:p-10 lg:p-14">
          {/* Decorative blurred glows, drifting slowly and independently */}
          <AmbientGlow
            className="absolute left-1/2 top-[55%] h-[377px] w-[376px] -translate-x-1/2 rounded-full bg-[hsla(226,100%,56%,1)] opacity-40 blur-[120px]"
            duration={6}
            drift={{ x: 20, y: -14 }}
          />
          <AmbientGlow
            className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[hsla(226,100%,56%,0.1)] blur-[50px]"
            duration={7.5}
            drift={{ x: -16, y: 12 }}
          />
          <AmbientGlow
            className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[hsla(226,100%,56%,0.2)] blur-[60px]"
            duration={5}
            drift={{ x: 14, y: 16 }}
          />

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
            {/* Left: copy + contact details */}
            <Reveal className="flex flex-col justify-center" y={32}>
              <div>
                <h2 className="text-[30px] font-bold leading-tight tracking-tight text-white md:text-[42px]">
                  Restons connecté
                </h2>
                <p className="mt-4 max-w-[320px] text-lg leading-[1.6] text-[#94A3B8]">
                  Nos experts sont là pour répondre à toutes vos questions et
                  vous guider vers la mise en place de cette technologie
                  révolutionnaire.
                </p>

                <RevealStagger className="mt-6 flex flex-col gap-8" stagger={0.08} y={14}>
                  {CONTACT_ROWS.map((row) => {
                    const Tag = row.href ? "a" : "div";
                    return (
                      <Tag
                        key={row.label}
                        {...(row.href ? { href: row.href } : {})}
                        className="group flex items-center gap-6"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                          <img src={row.icon} alt="" className="h-[18px] w-[18px]" />
                        </span>
                        <span className="flex flex-col gap-1">
                          <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#64748B]">
                            {row.label}
                          </span>
                          <span className="text-lg font-bold text-white transition-colors group-hover:text-[hsla(226,100%,56%,1)]">
                            {row.value}
                          </span>
                        </span>
                      </Tag>
                    );
                  })}
                </RevealStagger>

                <div className="mt-12 flex items-center gap-9 border-t border-white/10 pt-8">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="opacity-90 transition-opacity hover:opacity-100"
                    >
                      <img src={s.icon} alt="" className="h-[30px] w-[30px]" loading="lazy" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={120} className="h-full">
              <div ref={formPanelRef} className="h-full rounded-2xl bg-white p-8 shadow-2xl md:p-12">
                {submitted ? (
                  <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                    <p className="text-lg font-bold text-[var(--tds-text)]">Merci !</p>
                    <p className="mt-2 text-sm text-[var(--tds-muted)]">
                      Nous vous répondrons très rapidement.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <label className="flex flex-col gap-2 text-sm font-bold text-[#64748B]">
                        Name
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="John Doe"
                          className="rounded-xl bg-[#F2F7FF] px-4 py-[18px] text-base font-normal text-[var(--tds-text)] outline-none placeholder:text-[#6B7280] focus:ring-2 focus:ring-[hsla(226,100%,56%,1)]"
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm font-bold text-[#64748B]">
                        Email address
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="you@company.com"
                          className="rounded-xl bg-[#F2F7FF] px-4 py-[18px] text-base font-normal text-[var(--tds-text)] outline-none placeholder:text-[#6B7280] focus:ring-2 focus:ring-[hsla(226,100%,56%,1)]"
                        />
                      </label>
                    </div>
                    <label className="flex flex-col gap-2 text-sm font-bold text-[#64748B]">
                      Phone (Optional)
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+27 0 000 0000"
                        className="rounded-xl bg-[#F2F7FF] px-4 py-[18px] text-base font-normal text-[var(--tds-text)] outline-none placeholder:text-[#6B7280] focus:ring-2 focus:ring-[hsla(226,100%,56%,1)]"
                      />
                    </label>
                    <label className="flex flex-col gap-2 text-sm font-bold text-[#64748B]">
                      Message
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your project or capture needs..."
                        className="resize-none rounded-xl bg-[#F2F7FF] px-4 py-4 text-base font-normal text-[var(--tds-text)] outline-none placeholder:text-[#6B7280] focus:ring-2 focus:ring-[hsla(226,100%,56%,1)]"
                      />
                    </label>
                    <button
                      ref={submitRef}
                      type="submit"
                      className="group mt-2 inline-flex items-center justify-center gap-3 rounded-xl bg-[hsla(226,100%,56%,1)] py-5 text-lg font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      Envoyer
                      <svg
                        width="19"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      >
                        <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
