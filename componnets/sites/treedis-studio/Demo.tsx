import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import AmbientGlow from "@/components/motion/AmbientGlow";

/** Full-bleed "Demander Une Démo" CTA banner, reused across product pages. */
export default function Demo() {
  return (
    <section className="relative overflow-hidden bg-[var(--tds-navy)]">
      <AmbientGlow
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, rgba(32,85,255,0.35) 0%, rgba(10,16,32,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 py-14 md:px-10 md:py-20">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <img
              src="/brand/vrboostagenc.svg"
              alt="VR BOOST Agency"
              className="h-8 w-auto brightness-0 invert"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 max-w-2xl text-[30px] font-bold leading-tight text-white md:text-[44px]">
              Demander Une Démo Gratuitement
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              VR Boost Agency est votre plateforme de référence pour améliorer
              les jumeaux numériques personnalisés, créer des expériences
              hybrides et naviguer dans le métavers.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-8">
            <CtaButton href="/contact">Demander une Démo</CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
