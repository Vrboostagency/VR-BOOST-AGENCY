import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import ClipReveal from "@/components/motion/ClipReveal";

const ASSETS = "/sites/treedis-studio";

export default function EditorShowcase() {
  return (
    <section className="bg-[var(--tds-navy)]">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col items-center text-center">
          <Reveal className="flex flex-col items-center">
            <h2 className="max-w-3xl text-[28px] font-bold leading-tight text-white md:text-[36px] lg:text-[40px]">
              Empower Your Digital Twin With The VR Boost Agency Editor
            </h2>
            <div className="mt-8">
              <CtaButton href="https://my.treedis.com/admin/register" small>
                Start Now
              </CtaButton>
            </div>
          </Reveal>
          <ClipReveal
            direction="up"
            className="mt-12 w-full max-w-[1200px] overflow-hidden rounded-xl border border-white/10"
            duration={1.3}
          >
            <img
              src={`${ASSETS}/Main-Screen.png`}
              alt="The VR Boost Agency no-code editor interface with a digital twin open for editing"
              className="w-full"
              loading="lazy"
            />
          </ClipReveal>
        </div>
      </div>
    </section>
  );
}
