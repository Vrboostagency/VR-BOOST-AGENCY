"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/components/motion/reduced-motion";

type MenuItem = {
  title: string;
  description: string;
  href: string;
  image: string;
};

// Only "Produits" has a dropdown; the other entries are plain links.
// Card order and titles follow the product menu design in Design/images.
const PRODUITS: MenuItem[] = [
  {
    title: "Capture Service",
    description: "Scan your space in immersive 3D",
    href: "/Product/Capture",
    image: "/brand/products/capture.png",
  },
  {
    title: "AR Navigation",
    description: "AR indoor navigation and wayfinding",
    href: "/Product/Navigation",
    image: "/brand/products/ar-navigation.png",
  },
  {
    title: "Hub & Avatar",
    description: "Immersive hubs with interactive avatars",
    href: "/Product/HubAvatar",
    image: "/brand/products/hub-avatar.png",
  },
  {
    title: "CGI",
    description: "Photorealistic renders from your plans",
    href: "/Product/CgiRendering",
    image: "/brand/products/cgi.png",
  },
  {
    title: "Home Staging",
    description: "Virtual staging for real estate",
    href: "/Product/Homestaging",
    image: "/brand/products/home-staging.png",
  },
];

const LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M7.99996 8.78089L11.2998 5.48108L12.2426 6.42389L7.99996 10.6666L3.75732 6.42389L4.70014 5.48108L7.99996 8.78089Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Navbar() {
  const [produitsOpen, setProduitsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(
    () => {
      const el = menuRef.current;
      if (!el || !produitsOpen || prefersReducedMotion()) return;
      const cards = el.querySelectorAll(".tds-mega-card");
      gsap.fromTo(
        el,
        { opacity: 0, y: -8, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        cards,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power3.out", stagger: 0.03, delay: 0.05 }
      );
    },
    { dependencies: [produitsOpen] }
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-[#e8eaf0] shadow-[0_4px_24px_rgba(16,24,40,0.06)]" : "border-transparent"
      }`}
    >
      {/* Backdrop that closes the open dropdown on outside click */}
      {produitsOpen && (
        <div
          className="fixed inset-0 z-[-1] cursor-default"
          aria-hidden
          onClick={() => setProduitsOpen(false)}
        />
      )}

      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between gap-4 px-5 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center">
          <img
            src="/brand/vrboostagenc.svg"
            alt="VR BOOST Agency logo"
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main">
          <div className="relative">
            <button
              type="button"
              onClick={() => setProduitsOpen((open) => !open)}
              aria-expanded={produitsOpen}
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-[15px] font-medium transition-colors ${
                produitsOpen
                  ? "bg-[#f2f4f7] text-[var(--tds-text)]"
                  : "text-[var(--tds-text)] hover:bg-[#f2f4f7]"
              }`}
            >
              Produits
              <ChevronIcon open={produitsOpen} />
            </button>
          </div>

          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative rounded-lg px-4 py-2 text-[15px] font-medium text-[var(--tds-text)] transition-colors hover:bg-[#f2f4f7]"
            >
              {link.label}
              <span className="absolute inset-x-4 bottom-1.5 h-px origin-left scale-x-0 bg-[var(--tds-blue)] transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Desktop right button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[var(--tds-blue)] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#1a46d6]"
          >
            Contact Sales
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-[#f2f4f7] lg:hidden"
        >
          <img
            src="/sites/treedis-studio/menu.svg"
            alt=""
            className="h-6 w-6"
          />
        </button>
      </div>

      {/* Desktop products mega-menu — image cards per the Design/images product menu */}
      {produitsOpen && (
        <div ref={menuRef} className="absolute inset-x-0 top-full hidden pt-2 lg:block">
          <div className="mx-auto max-w-[1080px] px-5 lg:px-8">
            <div className="rounded-2xl border border-[#e8eaf0] bg-white p-4 shadow-[0_12px_40px_rgba(16,24,40,0.12)]">
              <div className="grid grid-cols-5 gap-3">
                {PRODUITS.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="tds-mega-card group rounded-xl p-2 transition-colors hover:bg-[#f2f4f7]"
                    onClick={() => setProduitsOpen(false)}
                  >
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="aspect-square w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="mt-3 text-[15px] font-bold text-[var(--tds-text)]">
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-xs leading-snug text-[var(--tds-muted)]">
                      {item.description}
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-4 border-t border-[#e8eaf0] pt-3">
                <a
                  href="/Product"
                  className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium text-[var(--tds-blue)] transition-colors hover:bg-[#f2f4f7]"
                  onClick={() => setProduitsOpen(false)}
                >
                  All products
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu — CSS grid-rows accordion, same technique as Faq.tsx */}
      <div
        className={`grid overflow-hidden bg-white transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          mobileOpen ? "grid-rows-[1fr] border-t border-[#e8eaf0]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="max-h-[calc(100vh-68px)] overflow-y-auto">
          <div className="mx-auto max-w-[1280px] px-5 py-6">
            <div className="mb-6">
              <div className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--tds-muted)]">
                Produits
              </div>
              <div className="flex flex-col">
                {PRODUITS.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-[#f2f4f7]"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="h-10 w-10 shrink-0 rounded-lg object-cover object-top"
                    />
                    <span>
                      <span className="block text-[15px] font-medium text-[var(--tds-text)]">
                        {item.title}
                      </span>
                      <span className="block text-xs leading-snug text-[var(--tds-muted)]">
                        {item.description}
                      </span>
                    </span>
                  </a>
                ))}
                <a
                  href="/Product"
                  className="rounded-lg px-2 py-2 text-[15px] font-medium text-[var(--tds-blue)] transition-colors hover:bg-[#f2f4f7]"
                >
                  All products →
                </a>
              </div>
            </div>

            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-2 py-2 text-[15px] font-medium text-[var(--tds-text)] transition-colors hover:bg-[#f2f4f7]"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-6 border-t border-[#e8eaf0] pt-6">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-full bg-[var(--tds-blue)] px-6 py-3 text-center text-[15px] font-medium text-white"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
