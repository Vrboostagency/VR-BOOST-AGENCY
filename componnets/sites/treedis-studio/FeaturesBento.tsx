import CtaButton from "./CtaButton";
import RevealStagger from "@/components/motion/RevealStagger";

type BentoCard = {
  label: string;
  href: string;
  image: string;
  alt: string;
  /** Desktop width share of the row. */
  width: "65" | "50" | "35";
};

const ROWS: BentoCard[][] = [
  [
    {
      label: "Flows",
      href: "/product-by-feature/flows",
      image: "img14.png",
      alt: "Drag-and-drop interface for building step-by-step interactive guides with VR Boost Agency  Flows",
      width: "65",
    },
    {
      label: "Augmented Reality",
      href: "/product-by-technology/augmented-reality",
      image: "img55.png",
      alt: "AR overlay of digital instructions on physical machinery",
      width: "35",
    },
  ],
  [
    {
      label: "Indoor Navigation",
      href: "/solutions-by-use-case/indoor-navigation",
      image: "32wr45.png",
      alt: "Kiosk-based search interface for navigating spaces with VR Boost Agency Indoor Navigation",
      width: "65",
    },
    {
      label: "3D Editor",
      href: "/product-by-feature/3d-editor",
      image: "Frame-1.webp",
      alt: "Labels and objects overlaid on a 3D scan in the VR Boost Agency 3D Editor",
      width: "35",
    },
  ],
  [
    {
      label: "Virtual Reality",
      href: "/product-by-technology/virtual-reality",
      image: "img24.png",
      alt: "Immersive VR scene with layered notes, guides, and live support tools",
      width: "50",
    },
    {
      label: "Digital Twin Studio",
      href: "/product-by-feature/digital-twin-studio",
      image: "Frame.webp",
      alt: "Interactive digital twin with menus, tags, and smart layers in VR Boost Agency Studio",
      width: "50",
    },
  ],
  [
    {
      label: "CGI",
      href: "/product-by-feature/cgi-render",
      image: "qarfqafrc.webp",
      alt: "Before-and-after CGI enhancement applied to a 3D property model",
      width: "35",
    },
    {
      label: "Analytics",
      href: "/product-by-feature/analytics",
      image: "img67.png",
      alt: "Heatmaps and interaction insights inside a VR Boost Agency digital twin",
      width: "65",
    },
  ],
];

const WIDTH_CLASS: Record<BentoCard["width"], string> = {
  "65": "md:w-[65%]",
  "50": "md:w-1/2",
  "35": "md:w-[35%]",
};

function Card({ card }: { card: BentoCard }) {
  return (
    <a
      href={card.href}
      className={`group flex w-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${WIDTH_CLASS[card.width]}`}
    >
      <div className="overflow-hidden">
        <img
          src={`/sites/treedis-studio/${card.image}`}
          alt={card.alt}
          loading="lazy"
          className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 md:h-64"
        />
      </div>
      <div className="flex items-center justify-between px-6 py-5">
        <div className="text-lg font-bold text-[#101828] md:text-xl">
          {card.label}
        </div>
        <img
          src="/sites/treedis-studio/arr.svg"
          alt=""
          width={31}
          className="shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
      </div>
    </a>
  );
}

export default function FeaturesBento() {
  return (
    <section className="bg-[#f2f4f7] py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header row */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h5 className="max-w-3xl text-[26px] font-bold leading-[1.2] text-[#101828] md:text-[32px]">
            <span className="text-[var(--tds-blue)]">VR Boost Agency features</span>{" "}
            enable effortless optimization with advanced digital twin
            technology.
          </h5>
          <CtaButton href="https://my.treedis.com/admin/register" small>
             Start For Today
          </CtaButton>
        </div>

        {/* Bento rows: alternating 65%/35% widths, full width on mobile */}
        <div className="mt-12 flex flex-col gap-6">
          {ROWS.map((row, i) => (
            <RevealStagger key={i} className="flex flex-col gap-6 md:flex-row" stagger={0.08}>
              {row.map((card) => (
                <Card key={card.label} card={card} />
              ))}
            </RevealStagger>
          ))}
        </div>
      </div>
    </section>
  );
}
