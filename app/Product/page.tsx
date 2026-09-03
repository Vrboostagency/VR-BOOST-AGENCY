import type { Metadata } from "next";
import Navbar from "@/componnets/sites/treedis-studio/Navbar";
import Footer2 from "@/componnets/sites/treedis-studio/Footer2";

export const metadata: Metadata = {
  title: "Products — VR BOOST Agency",
  description:
    "3D capture, AR navigation, hub & avatars, CGI rendering, and home staging — all VR BOOST Agency products.",
};

const PRODUCTS = [
  {
    title: "Capture Service",
    description: "Scan your space in immersive 3D",
    href: "/Product/Capture",
    image: "/brand/products/capture.png",
  },
  {
    title: "AR Navigation",
    description: "AR indoor navigation and wayfinding",
    href: "/Product/Navigation",
    image: "/brand/products/ar-navigation.png",
  },
  {
    title: "Hub & Avatar",
    description: "Immersive hubs with interactive avatars",
    href: "/Product/HubAvatar",
    image: "/brand/products/hub-avatar.png",
  },
  {
    title: "CGI",
    description: "Photorealistic renders from your plans",
    href: "/Product/CgiRendering",
    image: "/brand/products/cgi.png",
  },
  {
    title: "Home Staging",
    description: "Virtual staging for real estate",
    href: "/Product/Homestaging",
    image: "/brand/products/home-staging.png",
  },
];

export default function Page() {
  return (
    <div className="tds-page w-full">
      <Navbar />
      <main className="bg-[var(--tds-light)] px-[5%] py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h1 className="text-[36px] font-bold leading-tight text-[#101828] md:text-[52px]">
            Our Products
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#475467]">
            Explore VR BOOST Agency&apos;s full product line — from 3D capture
            to AR navigation, CGI rendering, and more.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <a
                key={product.title}
                href={product.href}
                className="group overflow-hidden rounded-2xl border border-[#e8eaf0] bg-white transition-shadow hover:shadow-[0_12px_40px_rgba(16,24,40,0.12)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <div className="text-lg font-bold text-[#101828]">
                    {product.title}
                  </div>
                  <div className="mt-1 text-sm leading-snug text-[#667085]">
                    {product.description}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer2 />
    </div>
  );
}
