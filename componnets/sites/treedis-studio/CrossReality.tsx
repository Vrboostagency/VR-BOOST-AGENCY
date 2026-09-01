import CtaButton from "./CtaButton";
import RevealStagger from "@/components/motion/RevealStagger";
import ClipReveal from "@/components/motion/ClipReveal";

const ASSETS = "/sites/treedis-studio";

const devices = [
  { icon: "smartphone.svg", label: "Smartphone" },
  { icon: "monitor.svg", label: "Desktop" },
  { icon: "tablet.svg", label: "Tablet" },
  { icon: "vr-glasses-wifi-svgrepo-com-2.svg", label: "VR headset" },
  { icon: "augmented-reality-vr-ar-sphere-svgrepo-com-1.svg", label: "Augmented reality" },
];

const cards = [
  {
    label: "Onsite",
    href: "/product-by-technology/augmented-reality",
    image: "Frame-1249186522.webp",
    alt: "Onsite augmented reality experience overlaid on a real space",
  },
  {
    label: "Offsite",
    href: "/product-by-technology/virtual-reality",
    image: "ge.png",
    alt: "Offsite virtual reality experience of a digital twin",
  },
];

export default function CrossReality() {
  return (
    <section className="bg-[var(--tds-light)]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <h2 className="text-[26px] font-bold leading-snug md:text-[30px]">
            <span className="text-[var(--tds-blue)]">
              One Platform, Cross Reality Access{" "}
            </span>
            <span className="text-[var(--tds-text)]">
              to seamlessly transform the physical world into hybrid
              experiences.
            </span>
          </h2>
          <div className="mt-8">
            <CtaButton href="https://my.treedis.com/admin/register" small>
              Start Now
            </CtaButton>
          </div>
        </div>

        <RevealStagger className="mt-12 flex flex-wrap gap-4" stagger={0.05} y={16}>
          {devices.map((device) => (
            <div
              key={device.icon}
              title={device.label}
              className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm md:h-20 md:w-20"
            >
              <img
                src={`${ASSETS}/${device.icon}`}
                alt={device.label}
                className="h-8 w-8 object-contain md:h-9 md:w-9"
                loading="lazy"
              />
            </div>
          ))}
        </RevealStagger>

        <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2" stagger={0.12} y={28}>
          {cards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              className="group relative block h-[280px] overflow-hidden rounded-2xl bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl md:h-[380px]"
            >
              <ClipReveal direction="up" duration={1} className="absolute inset-0">
                <img
                  src={`${ASSETS}/${card.image}`}
                  alt={card.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </ClipReveal>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
                <span className="text-xl font-bold text-white">
                  {card.label}
                </span>
                <img
                  src={`${ASSETS}/arr.svg`}
                  alt=""
                  width={31}
                  className="transition-transform group-hover:translate-x-1"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
