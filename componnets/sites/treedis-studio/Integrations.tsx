import RevealStagger from "@/components/motion/RevealStagger";

const ASSETS = "/sites/treedis-studio";

const logos: { file: string; alt: string }[] = [
  { file: "SAP_2011_logo-1.png", alt: "SAP" },
  { file: "Group.png", alt: "Integration partner" },
  { file: "Aveva_logo-1.png", alt: "AVEVA" },
  { file: "Group-787880449.png", alt: "Integration partner" },
  { file: "Unity_2021-2.png", alt: "Unity" },
  { file: "g55.png", alt: "Integration partner" },
  { file: "ready-player-me-logo-vector-1.png", alt: "Ready Player Me" },
  { file: "PTC_logo-2.png", alt: "PTC" },
  {
    file: "473317602_1186507236817472_2713302482030302428_n-1.png",
    alt: "Integration partner",
  },
  { file: "Group-1.png", alt: "Integration partner" },
  { file: "62d90a82e6bb518e83068a60_Hexa_logo_blue_2022.png", alt: "Hexa" },
  { file: "kisi-logo-blue.png", alt: "Kisi" },
  { file: "full-logo-horizontal-white-copy.webp", alt: "Rhombus" },
  { file: "img1.png", alt: "Integration partner" },
  { file: "pngfind.com-sql-png-4183674.png", alt: "SQL" },
  { file: "Sketchfab_logo.svg.png", alt: "Sketchfab" },
  { file: "Giphy-logo.svg", alt: "Giphy" },
];

export default function Integrations() {
  return (
    <section className="bg-[var(--tds-light)]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--tds-blue)]">
          Integrations
        </h2>
        <p className="mt-4 max-w-3xl text-[24px] font-bold leading-snug text-[var(--tds-text)] md:text-[30px]">
          We collaborate with a broad network of technology partners to deliver
          more value to our clients.
        </p>

        <RevealStagger
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
          stagger={0.04}
          y={16}
        >
          {logos.map((logo) => (
            <div
              key={logo.file}
              className="flex items-center justify-center rounded-xl bg-white p-6"
            >
              <img
                src={`${ASSETS}/${logo.file}`}
                alt={logo.alt}
                className="max-h-10 w-auto max-w-full object-contain grayscale transition-[filter] duration-300 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
