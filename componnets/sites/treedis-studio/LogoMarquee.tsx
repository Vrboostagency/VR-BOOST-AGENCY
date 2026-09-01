const LOGOS: { file: string; alt: string }[] = [
  { file: "1445.png", alt: "Aramark logo — VR BOOST Agency client" },
  { file: "1446.png", alt: "Granite Construction logo — VR BOOST Agency client" },
  { file: "1447.png", alt: "ICL logo — VR BOOST Agency client" },
  { file: "1448.png", alt: "Amazon logo — VR BOOST Agency client" },
  { file: "1449.png", alt: "VR BOOST Agency enterprise client logo" },
  { file: "1450.png", alt: "Marvell logo — VR BOOST Agency client" },
  { file: "1451.png", alt: "Google logo — VR BOOST Agency client" },
  { file: "1452.png", alt: "Netafim logo — VR BOOST Agency client" },
  { file: "1453.png", alt: "Permian logo — VR BOOST Agency client" },
  { file: "1454.png", alt: "Bazan logo — VR BOOST Agency client" },
  { file: "1455.png", alt: "Havells logo — VR BOOST Agency client" },
];

export default function LogoMarquee() {
  return (
    <div className="w-full bg-[#0a1020] py-10">
      <div className="tds-marquee relative overflow-hidden">
        {/* Edge gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a1020] to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a1020] to-transparent md:w-40" />

        <div className="tds-marquee-track flex w-max items-center gap-16">
          {[0, 1].map((copy) =>
            LOGOS.map((logo) => (
              <img
                key={`${copy}-${logo.file}`}
                src={`/sites/treedis-studio/${logo.file}`}
                alt={copy === 0 ? logo.alt : ""}
                aria-hidden={copy === 1 || undefined}
                className="h-8 w-auto shrink-0 opacity-70 grayscale"
                loading="eager"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
