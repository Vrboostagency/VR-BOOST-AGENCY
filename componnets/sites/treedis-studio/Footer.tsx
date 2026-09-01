import Reveal from "./Reveal";

const ASSETS = "/sites/treedis-studio";

type ProductCard = {
  label: string;
  href: string;
  icon: string;
  external?: boolean;
};

const PRODUCT_CARDS: ProductCard[] = [
  {
    label: "Digital twin studio",
    href: "https://treedis.com/product-by-feature/digital-twin-studio",
    icon: `${ASSETS}/layout.svg`,
  },
  {
    label: "Flows",
    href: "https://treedis.com/product-by-feature/flows",
    icon: `${ASSETS}/Flows.svg`,
  },
  {
    label: "Indoor Navigation",
    href: "https://treedis.com/solutions-by-use-case/indoor-navigation",
    icon: `${ASSETS}/compass.svg`,
  },
  {
    label: "Virtual Reality",
    href: "https://treedis.com/product-by-technology/virtual-reality",
    icon: `${ASSETS}/vr-glasses-wifi-svgrepo-com-2.svg`,
  },
  {
    label: "Analytics",
    href: "https://treedis.com/product-by-feature/analytics",
    icon: `${ASSETS}/bar-chart-2.svg`,
  },
  {
    label: "White Label",
    href: "https://treedis.com/product-by-feature/white-label",
    icon: `${ASSETS}/tag.svg`,
  },
  {
    label: "Augmented Reality",
    href: "https://treedis.com/product-by-technology/augmented-reality",
    icon: `${ASSETS}/augmented-reality-vr-ar-sphere-svgrepo-com-1.svg`,
  },
  {
    label: "Interactive Real Estate",
    href: "https://treedis.com/product-by-feature/interactive-real-estate",
    icon: `${ASSETS}/home.svg`,
  },
];

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

const COLUMNS: FooterColumn[] = [
  {
    heading: "Solutions by Industry",
    links: [
      {
        label: "Industry 4.0",
        href: "https://treedis.com/solutions-by-industry/industry-4-0",
      },
      {
        label: "Real Estate",
        href: "https://treedis.com/solutions-by-industry/real-estate-and-architecture",
      },
      {
        label: "Museum and Galleries",
        href: "https://treedis.com/solutions-by-industry/museums-and-galleries",
      },
      {
        label: "Retail and Showrooms",
        href: "https://treedis.com/solutions-by-industry/retail-and-showrooms",
      },
      {
        label: "Education",
        href: "https://treedis.com/solutions-by-industry/education",
      },
      {
        label: "Virtual Events",
        href: "https://treedis.com/solutions-by-industry/events",
      },
    ],
  },
  {
    heading: "Solutions by Use Case",
    links: [
      {
        label: "Connected Workers",
        href: "https://treedis.com/",
        external: true,
      },
      {
        label: "Immersive Training",
        href: "https://treedis.com/solutions-by-use-case/immersive-training-onboarding",
      },
      {
        label: "Marketing & Ads",
        href: "https://treedis.com/solutions-by-use-case/marketing-and-advertising",
      },
      {
        label: "Online Shopping",
        href: "https://treedis.com/solutions-by-use-case/shopping",
      },
      {
        label: "Facility Management",
        href: "https://treedis.com/solutions-by-use-case/facilities-management",
      },
      {
        label: "Indoor Navigation",
        href: "https://treedis.com/solutions-by-use-case/indoor-navigation",
      },
      {
        label: "Planning and Design",
        href: "https://treedis.com/solutions-by-use-case/planning-and-designing",
      },
    ],
  },
  {
    heading: "Product by Feature",
    links: [
      {
        label: "Flows",
        href: "https://treedis.com/product-by-feature/flows",
      },
      {
        label: "Indoor Navigation",
        href: "https://treedis.com/solutions-by-use-case/indoor-navigation",
      },
      {
        label: "Digital Twin Studio",
        href: "https://treedis.com/product-by-feature/digital-twin-studio",
      },
      {
        label: "3D Editor",
        href: "https://treedis.com/product-by-feature/3d-editor",
      },
      {
        label: "CGI Rendering",
        href: "https://treedis.com/product-by-feature/cgi-render",
      },
      {
        label: "Analytics",
        href: "https://treedis.com/product-by-feature/analytics",
      },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "https://treedis.com/blog" },
      {
        label: "Help Center",
        href: "https://info.treedis.com/help.center",
        external: true,
      },
      {
        label: "3D Capture Network",
        href: "https://treedis.com/3d-tour-capture-network",
      },
      { label: "Case Studies", href: "https://treedis.com/case-studies" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Partnership", href: "https://treedis.com/partnership" },
      { label: "Pricing", href: "https://treedis.com/pricing" },
    ],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Cookies Policy", href: "https://treedis.com/cookie-policy" },
  { label: "Terms of Use", href: "https://treedis.com/terms-of-use" },
  { label: "Privacy Policy", href: "https://treedis.com/privacy-policy" },
];

function DiagonalArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M10.6691 6.27614L4.93133 12.0139L3.98853 11.0711L9.72625 5.33333H4.66907V4H12.0024V11.3333H10.6691V6.27614Z"
        fill="currentColor"
      />
    </svg>
  );
}

function externalProps(link: { external?: boolean }) {
  return link.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}

export default function Footer() {
  return (
    <footer id="about" className="scroll-mt-[84px] bg-[var(--tds-light,#f2f4f7)]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8 lg:py-20">
        {/* Product mega-grid */}
        <Reveal className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" y={20}>
          {PRODUCT_CARDS.map((card) => (
            <a
              key={card.label}
              href={card.href}
              {...externalProps(card)}
              className="group flex items-center gap-4 rounded-2xl bg-white p-5 transition-shadow hover:shadow-[0_8px_24px_rgba(16,24,40,0.08)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f2f4f7]">
                <img src={card.icon} alt="" className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-1 text-sm font-bold text-[var(--tds-text)]">
                  {card.label}
                  <DiagonalArrow className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="mt-0.5 block text-xs text-[#49505b]">
                  Learn more
                </span>
              </span>
            </a>
          ))}
        </Reveal>

        {/* Link columns */}
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <div className="mb-4 text-sm font-bold text-[var(--tds-text)]">
                {column.heading}
              </div>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={`${column.heading}-${link.label}`}>
                    <a
                      href={link.href}
                      {...externalProps(link)}
                      className="group inline-flex items-center gap-1 text-sm text-[#49505b] transition-colors hover:text-[var(--tds-text)]"
                    >
                      {link.label}
                      <DiagonalArrow className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col gap-6 border-t border-[#dfe2e9] pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <img
              src="/brand/vrboostagenc.svg"
              alt="VR BOOST Agency logo"
              className="h-9 w-auto"
            />
          </div>

          <div className="flex flex-col gap-3 text-sm text-[#49505b] sm:flex-row sm:items-center sm:gap-6">
            <span>© 2026 VR BOOST Agency. All rights reserved.</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-[var(--tds-text)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
