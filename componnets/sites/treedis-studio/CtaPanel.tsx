import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import RevealStagger from "@/components/motion/RevealStagger";
import ClipReveal from "@/components/motion/ClipReveal";

function BulletDot() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <circle cx="8.00016" cy="7.99967" r="6.66667" fill="#3CEFEF" fillOpacity="0.4" />
      <circle cx="8" cy="8" r="2" fill="#3CEFEF" />
    </svg>
  );
}

export default function CtaPanel({
  eyebrow,
  heading,
  bullets,
  buttonLabel,
  buttonHref,
  image,
  imageAlt,
}: {
  eyebrow: string;
  heading: string;
  bullets?: string[];
  buttonLabel: string;
  buttonHref: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="bg-[#f2f4f7] py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal
          className="grid grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl bg-[#090f21] p-10 md:p-14 lg:grid-cols-2 lg:p-16"
          y={36}
        >
          {/* Left: copy */}
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-[36px] font-bold leading-[1.05] text-white md:text-[50px]">
                {eyebrow}
              </h4>
              <p className="max-w-md text-lg leading-relaxed text-white/60">
                {heading}
              </p>
            </div>

            {bullets && bullets.length > 0 && (
              <RevealStagger className="flex flex-wrap items-center gap-x-6 gap-y-3" y={10}>
                {bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2">
                    <BulletDot />
                    <span className="text-sm text-white/80 md:text-base">
                      {bullet}
                    </span>
                  </div>
                ))}
              </RevealStagger>
            )}

            <CtaButton href={buttonHref} small>
              {buttonLabel}
            </CtaButton>
          </div>

          {/* Right: image */}
          <div className="flex items-end justify-center">
            <ClipReveal direction="right" className="w-full max-w-[696px] overflow-hidden rounded-xl">
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                className="w-full object-cover"
              />
            </ClipReveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
