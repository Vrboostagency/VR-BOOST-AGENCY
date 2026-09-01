import CtaButton from "./CtaButton";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="bg-[var(--tds-navy)]">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <img
              src="/brand/vrboostagenc.svg"
              alt="VR BOOST Agency"
              className="h-9 w-auto brightness-0 invert"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-8 max-w-3xl text-[30px] font-bold leading-tight text-white md:text-[40px]">
              Discover what our solutions can do - start now today
            </h2>
          </Reveal>
          <Reveal delay={200} className="mt-10">
            <CtaButton href="https://my.treedis.com/admin/register">
              Start For Today
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
