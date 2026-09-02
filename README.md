# VR Boost Agency


<img width="3791" height="2272" alt="VR Boost Agency preview" src="https://github.com/user-attachments/assets/7ed94406-6c9c-4018-a864-18a19b1af843" />

**VR Boost Agency** is a marketing website for an immersive-media studio, built with Next.js and React Three Fiber. The site presents the agency's product suite — AR navigation, 3D capture, CGI rendering, virtual home staging, hub avatars, and interactive wayfinding — through animated, 3D-driven pages designed to feel like a modern product studio site.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router), [React 19](https://react.dev) |
| Language | TypeScript |
| 3D rendering | [Three.js](https://threejs.org), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei) |
| Animation | [GSAP](https://gsap.com/) (`@gsap/react`), custom motion components |
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Linting | ESLint 9 (`eslint-config-next`) |
| Package manager | pnpm (workspace-enabled) |

## Project Structure

```
app/                      Next.js App Router routes
  Home/                    Home page
  Product/                 Product landing + sub-pages
    Ar Navigation/          AR navigation product page
    Capture/                 3D capture product page
    CgiRendering/            CGI rendering product page
    Homestaging/             Virtual home staging product page
    HubAvatar/                Hub / avatar product page
    Navigation/               Site navigation product page
  layout.tsx                Root layout
  page.tsx                  Root page
  globals.css                Global styles
  treedis-studio.css          Studio theme styles

componnets/sites/treedis-studio/   Page-level site sections (Hero, Navbar,
                                    Footer, FAQ, CTA panels, case studies,
                                    features bento, integrations, etc.),
                                    mirrored per product (Ar Navigation,
                                    Capture Services, cgi rendering,
                                    Home staging, Hub & Avatar)

components/motion/          Reusable animation primitives
  AmbientGlow.tsx             Ambient glow/light effect
  ClipReveal.tsx               Clip-path reveal animation
  RevealStagger.tsx             Staggered reveal-on-scroll
  SmoothScroll.tsx               Lenis smooth-scroll wrapper
  useMagnetic.ts                  Magnetic cursor hover hook
  reduced-motion.ts                prefers-reduced-motion helper

lib/gsap.ts                 GSAP setup/registration

Design/                     Design source assets
docs/research/              Reference/competitor research notes
public/                     Static assets (images, fonts, icons)
```

## Getting Started

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the Next.js development server |
| `pnpm build` | Build the app for production |
| `pnpm start` | Run the production build |
| `pnpm lint` | Run ESLint |

## Notes

- This project targets a pre-release version of Next.js (16.x) with breaking API changes from earlier versions — see `node_modules/next/dist/docs/` for the current framework docs when working on this codebase.
- Motion respects `prefers-reduced-motion` via `components/motion/reduced-motion.ts`.
