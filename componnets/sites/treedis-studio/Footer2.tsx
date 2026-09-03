type FooterColumn = { heading: string; links: { label: string; href: string }[] };

const COLUMNS: FooterColumn[] = [
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Centre d'aide", href: "/help" },
      { label: "Réseau 3D Capture", href: "/capture-network" },
      { label: "Conferences", href: "/conferences" },
      { label: "Étude de cas", href: "/case-studies" },
    ],
  },
  {
    heading: "Marketing immersive",
    links: [
      { label: "Community Management Immersive", href: "/marketing/community-management" },
      { label: "CGI Advertising", href: "/marketing/cgi-advertising" },
    ],
  },
  {
    heading: "Produits par téchnologie",
    links: [
      { label: "Réalité Virtuelle", href: "/product-by-technology/vr" },
      { label: "Réalité Augmentée", href: "/product-by-technology/ar" },
      { label: "Capture service", href: "/Product/Capture" },
    ],
  },
  {
    heading: "Entreprise",
    links: [
      { label: "à propos de nous", href: "/About" },
      { label: "Partenariat", href: "/partnership" },
      { label: "Carrières", href: "/careers" },
    ],
  },
  {
    heading: "Solutions par industrie",
    links: [
      { label: "Agence immobilière Immersive", href: "/solutions-by-industry/real-estate-agency" },
      { label: "Immobilier et architecture", href: "/solutions-by-industry/real-estate-and-architecture" },
      { label: "Éducation", href: "/solutions-by-industry/education" },
      { label: "Showroom automobile", href: "/solutions-by-industry/automotive-showroom" },
    ],
  },
  {
    heading: "Production audiovisuelle",
    links: [
      { label: "Vidéographie", href: "/production/videography" },
      { label: "Scan Object Réel To 3D", href: "/production/object-scan" },
      { label: "Photographie Avancée", href: "/production/photography" },
      { label: "Motion Design", href: "/production/motion-design" },
      { label: "5V5K", href: "/production/5v5k" },
      { label: "Capture service", href: "/Product/Capture" },
    ],
  },
  {
    heading: "Services immersifs",
    links: [
      { label: "Digital Twin Studio", href: "/product-by-feature/digital-twin-studio" },
      { label: "Home staging", href: "/Product/Homestaging" },
      { label: "Agence Immobilière", href: "/solutions-by-industry/real-estate-agency" },
      { label: "IoT", href: "/services/iot" },
      { label: "Expérience Créateur", href: "/services/creator-experience" },
      { label: "Marketing Immersive", href: "/marketing" },
      { label: "Hub & Avatars", href: "/Product/HubAvatar" },
      { label: "V-Commerce", href: "/services/v-commerce" },
      { label: "Pack de Navigation", href: "/Product/Navigation" },
      { label: "Analytics", href: "/product-by-feature/analytics" },
    ],
  },
];

const LEGAL_LINKS: { label: string; href: string }[] = [
  { label: "Cookies Policy", href: "/cookie-policy" },
  { label: "Terms Of Use", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const ASSETS = "/sites/treedis-studio/social";

const SOCIALS: { label: string; href: string; icon: string }[] = [
  { label: "Facebook", href: "https://facebook.com", icon: `${ASSETS}/facebook.png` },
  { label: "X", href: "https://x.com", icon: `${ASSETS}/twitter.png` },
  { label: "LinkedIn", href: "https://linkedin.com", icon: `${ASSETS}/linkedin.png` },
];

const CONTACT_ASSETS = "/sites/treedis-studio/contact";


export default function Footer2() {
  return (
    <footer id="about" className="scroll-mt-[84px] bg-[hsla(224,52%,8%,1)]">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-10">
          {/* Left: logo + CTA buttons + social + contact */}
          <div className="flex w-full shrink-0 flex-col items-start gap-5 lg:w-[220px]">
            <img
              src="/brand/vrboost-logo.png2.png"
              alt="VR BOOST Agency"
              className="h-8 w-auto"
            />

            <div className="flex flex-col items-start gap-3">
              <a
                href="/contact"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[hsla(224,52%,8%,1)] transition-opacity hover:opacity-90"
              >
                Demandez une Démo
              </a>
              <a
                href="/contact"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[hsla(224,52%,8%,1)] transition-opacity hover:opacity-90"
              >
                Contactez nous
              </a>
            </div>

            <div className="mt-2 flex flex-col items-start gap-3">
              <span className="text-sm font-bold text-white">Suivez Nous</span>
              <div className="flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                  >
                    <img src={s.icon} alt="" className="h-9 w-9" loading="lazy" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-2 flex flex-col items-start gap-3 text-sm text-white/60">
              <a
                href="mailto:Contact@vrboostagency.com"
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <img src={`${CONTACT_ASSETS}/mail.png`} alt="" className="h-4 w-4 shrink-0" />
                Contact@vrboostagency.com
              </a>
              <a
                href="tel:+21260000000"
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <img src={`${CONTACT_ASSETS}/phone.png`} alt="" className="h-4 w-4 shrink-0" />
                +212 60000000
              </a>
              <div className="flex items-center gap-2.5">
                <img src={`${CONTACT_ASSETS}/pin.png`} alt="" className="h-4 w-4 shrink-0" />
                Casablanca, Maroc
              </div>
            </div>
          </div>

          {/* Right: link columns — 7 items auto-wrap into a 4-col grid (2 rows) */}
          <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {COLUMNS.map((column) => (
              <div key={column.heading}>
                <div className="mb-4 text-sm font-bold text-white">
                  {column.heading}
                </div>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col flex-wrap gap-x-6 gap-y-3 border-t border-white pt-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <span className="whitespace-nowrap">
            © 2024 VR BOOST Agency - All rights reserved.
          </span>
          <span className="whitespace-nowrap text-center">
            VR BOOST AGENCY LTD Number: 15193103, Registered Office: REGISTERED OFFICE - LONDON
          </span>
          <div className="flex shrink-0 items-center gap-x-6">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
