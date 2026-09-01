import RevealStagger from "@/components/motion/RevealStagger";

const ASSETS = "/sites/treedis-studio";

const partners = [
  { file: "black-mp-logo.svg", alt: "Matterport", tall: false },
  { file: "Group.svg", alt: "Amazon Web Services", tall: true },
  { file: "bynet-eng-logo-1.svg", alt: "Bynet", tall: true },
  { file: "Rectangle-3048.png", alt: "Yad2", tall: true },
  { file: "idXbysKEDR_1743070507523-1.svg", alt: "Deloitte", tall: false },
  { file: "id83_d_cMG_1743070414215-1.svg", alt: "Aviv Group", tall: false },
];

export default function Partners() {
  return (
    <section className="bg-[var(--tds-light)]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--tds-blue)]">
          Strong partnerships, strong solutions
        </h2>
        <p className="mt-4 max-w-3xl text-[24px] font-bold leading-snug text-[var(--tds-text)] md:text-[30px]">
          Partnering with the best to bring you top-notch solutions.
        </p>

        <RevealStagger
          className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-8"
          stagger={0.06}
          y={16}
        >
          {partners.map((partner) => (
            <img
              key={partner.file}
              src={`${ASSETS}/${partner.file}`}
              alt={partner.alt}
              className={`${partner.tall ? "h-10" : "h-8"} w-auto object-contain opacity-80 transition-opacity hover:opacity-100`}
              loading="lazy"
            />
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
