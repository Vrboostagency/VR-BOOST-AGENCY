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
    href: "/Product/Capture",
    icon: `${ASSETS}/layout.svg`,
  },
  {
    label: "Flows",
    href: "/Product/Navigation",
    icon: `${ASSETS}/Flows.svg`,
  },
  {
    label: "Indoor Navigation",
    href: "/Product/Navigation",
    icon: `${ASSETS}/compass.svg`,
  },
  {
    label: "Virtual Reality",
    href: "/Product/HubAvatar",
    icon: `${ASSETS}/vr-glasses-wifi-svgrepo-com-2.svg`,
  },
  {
    label: "Analytics",
    href: "/Product",
    icon: `${ASSETS}/bar-chart-2.svg`,
  },
  {
    label: "White Label",
    href: "/Product",
    icon: `${ASSETS}/tag.svg`,
  },
  {
    label: "Augmented Reality",
    href: "/Product/Navigation",
    icon: `${ASSETS}/augmented-reality-vr-ar-sphere-svgrepo-com-1.svg`,
  },
  {
    label: "Interactive Real Estate",
    href: "/Product/Homestaging",
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
      { label: "Industry 4.0", href: "/Product" },
      { label: "Real Estate", href: "/Product/Homestaging" },
      { label: "Museum and Galleries", href: "/Product" },
      { label: "Retail and Showrooms", href: "/Product" },
      { label: "Education", href: "/Product" },
      { label: "Virtual Events", href: "/Product/HubAvatar" },
    ],
  },
  {
    heading: "Solutions by Use Case",
    links: [
      { label: "Connected Workers", href: "/Product/HubAvatar" },
      { label: "Immersive Training", href: "/Product/HubAvatar" },
      { label: "Marketing & Ads", href: "/Product" },
      { label: "Online Shopping", href: "/Product" },
      { label: "Facility Management", href: "/Product" },
      { label: "Indoor Navigation", href: "/Product/Navigation" },
      { label: "Planning and Design", href: "/Product/CgiRendering" },
    ],
  },
  {
    heading: "Product by Feature",
    links: [
      { label: "Flows", href: "/Product/Navigation" },
      { label: "Indoor Navigation", href: "/Product/Navigation" },
      { label: "Digital Twin Studio", href: "/Product/Capture" },
      { label: "3D Editor", href: "/Product/Capture" },
      { label: "CGI Rendering", href: "/Product/CgiRendering" },
      { label: "Analytics", href: "/Product" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/" },
      { label: "Help Center", href: "#contact" },
      { label: "3D Capture Network", href: "/Product/Capture" },
      { label: "Case Studies", href: "/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Partnership", href: "#contact" },
      { label: "Pricing", href: "#contact" },
    ],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Cookies Policy", href: "/" },
  { label: "Terms of Use", href: "/" },
  { label: "Privacy Policy", href: "/" },
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
