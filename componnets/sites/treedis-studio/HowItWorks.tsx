import RevealStagger from "@/components/motion/RevealStagger";
import ClipReveal from "@/components/motion/ClipReveal";

const ASSETS = "/sites/treedis-studio";

const steps = [
  {
    n: "1",
    title: "Capture",
    text: "Scan your physical space with 360° cameras to create a precise, true-to-life digital twin.",
  },
  {
    n: "2",
    title: "Edit",
    text: "Enrich the twin in the no-code editor with tags, media, navigation and interactive content.",
  },
  {
    n: "3",
    title: "Access",
    text: "Share the result anywhere — explore it on desktop, on-site in AR, or fully immersed in VR.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[var(--tds-light)]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <h2 className="text-[26px] font-bold text-[var(--tds-text)] md:text-[28px]">
          How it works:
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ClipReveal direction="left" className="overflow-hidden rounded-2xl">
            <img
              src={`${ASSETS}/3-(9).webp`}
              alt="VR Boost Agency workflow: capture, edit and access digital twins"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </ClipReveal>
          <ClipReveal direction="right" className="overflow-hidden rounded-2xl" duration={1.2}>
            <img
              src={`${ASSETS}/Group-1948754644.png`}
              alt="Technician using VR Boost Agency augmented reality on a tablet inside a scanned environment"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </ClipReveal>
        </div>

        <RevealStagger className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8" stagger={0.1} y={20}>
          {steps.map((step) => (
            <div key={step.n} className="flex items-start gap-5">
              <span className="text-[56px] font-bold leading-none text-gray-300 md:text-[64px]">
                {step.n}
              </span>
              <div className="pt-1">
                <h3 className="text-lg font-bold text-[var(--tds-text)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--tds-muted)]">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
