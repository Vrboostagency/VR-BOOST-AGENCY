import type { Metadata } from "next";
import Navbar from "../componnets/sites/treedis-studio/Navbar";
import Hero from "../componnets/sites/treedis-studio/Hero";
import LogoMarquee from "../componnets/sites/treedis-studio/LogoMarquee";
import ProductsTabs from "../componnets/sites/treedis-studio/ProductsTabs";
import FeaturesBento from "../componnets/sites/treedis-studio/FeaturesBento";
import CtaPanel from "../componnets/sites/treedis-studio/CtaPanel";
import HowItWorks from "../componnets/sites/treedis-studio/HowItWorks";
import EditorShowcase from "../componnets/sites/treedis-studio/EditorShowcase";
import CrossReality from "../componnets/sites/treedis-studio/CrossReality";
import CaseStudies from "../componnets/sites/treedis-studio/CaseStudies";
import Integrations from "../componnets/sites/treedis-studio/Integrations";
import Partners from "../componnets/sites/treedis-studio/Partners";
import FinalCta from "../componnets/sites/treedis-studio/FinalCta";
import Connected from "../componnets/sites/treedis-studio/Connected";
import Footer from "../componnets/sites/treedis-studio/Footer";

export const metadata: Metadata = {
  title: "VR BOOST Agency — Digital Twin & Immersive Experiences",
  description:
    "VR BOOST Agency — 3D capture, CGI rendering, home staging, AR navigation and immersive experiences.",
  icons: { icon: "/brand/vrboost-logo.png" },
};

export default function Home() {
  return (
    <div className="tds-page w-full">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <ProductsTabs />
        <FeaturesBento />
        <section className="bg-[var(--tds-light)] px-[5%] py-16">
          <CtaPanel
            eyebrow="Get started for Now"
            heading="Get in touch with our sales team to receive a free personalized demo."
            bullets={["Full access", "Cancel anytime"]}
            buttonLabel="Try For Now"
            buttonHref="https://my.treedis.com/admin/register"
            image="/sites/treedis-studio/2-(3).webp"
            imageAlt=" VR Boost Agency features shown across desktop, kiosk, and mobile devices"
          />
        </section>
        <HowItWorks />
        <EditorShowcase />
        <CrossReality />
        <CaseStudies />
        <section className="bg-[var(--tds-light)] px-[5%] py-16">
          <CtaPanel
            eyebrow="Interested in VR Boost Agency Enterprise?"
            heading="Get in touch with our sales team to receive a free personalized demo."
            buttonLabel="Contact Us"
            buttonHref="/contact-sales"
            image="/sites/treedis-studio/placeholder-wrapper-4.webp"
            imageAlt="User wearing a VR headset interacting with a digital twin"
          />
        </section>
        <Integrations />
        <Partners />
        <Connected />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
