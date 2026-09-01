# studio.treedis.com — Page Topology & Design Tokens

Source: https://studio.treedis.com (single page clone, route `/`)
Raw reference material (section HTML chunks + full 947KB CSS) lives in the session scratchpad:
`C:\Users\bouag\AppData\Local\Temp\claude\F--vr-agency-boost-vrboostagency-VR-BOOST-AGENCY\c2faa261-9d3d-4f05-8ee2-96f1485b81fa\scratchpad\treedis\`
(`nav.html`, `block0.html` … `block11.html`, `main.css`, `index.html`)

Assets: `public/sites/treedis-studio/` (URL path `/sites/treedis-studio/<name>`).
Mapping from original URLs → local names: `public/sites/treedis-studio/_asset-map.txt`.

## Design tokens

- Primary blue: `#2055ff` (CTA buttons, links, accents)
- Dark navy section bg: `#0a1020` and `#090f21` (class `light-bg` — naming is inverted on their site!)
- Light section bg: `#f2f4f7` (classes `dark-bg`, `section-second`, `background-brown-50`)
- Text dark: `#101828`, `#202024`, `#25272c`; muted gray `#85878f`, `#49505b`
- Accent red/orange: `#ff443d`; cyan dot accent: `#3CEFEF`
- Body font: `Codecpro` (self-hosted woff2: Light 300 / Regular 400 / Bold 700), fallbacks sans-serif.
  Secondary: `Assistant` (ttf), `Inter` (Google).
- Base: `body { font-family: Codecpro; font-size: 1rem; line-height: 1 }`
- Hero: dark navy bg, 1px bottom border `#202020`, min height 500px.
- CTA button (`.cta-button`): blue #2055ff pill, white text + 16px arrow SVG, small radius, hover darkens.

## Sections (document order)

0. **Navbar** (`nav.html`) — white bar, Treedis logo (`treedis2.svg`), dropdown menus: Products, Features, User Type, Technology, Resources (Blog, Case studies, Partnerships, Help Center, Trust Center, Webinars…), Pricing link, Login, Sign up (blue pill), Contact Us.
1. **Hero** (`block0.html`) — dark navy. Left: badge "Meet our new AI tool - TAI Design" (wand icon), h1 "Building Digital Twins That Do More", CTA "Start For Free Today". Right: Vimeo autoplay embed (1072187237) framed by animated SVG grid lines. Below: client logo marquee (11 PNG logos `1445.png`–`1455.png`, infinite left scroll ~89s, gradient masks both sides).
2. **Products** (`block1.html`) — light bg. h1 "Our Products", 4 tabs (Connected Workers / Indoor Navigation / Interactive Real Estate / Immersive Experiences), each panel: big h1 tagline + "Discover more" + autoplay looped mp4 (remote S3/static.treedis URLs).
3. **Features bento** (`block2.html`) — light. h5 headline with highlighted span "Treedis features", CTA "Start for free". Bento grid rows (65/35 split): Flows(img14), Augmented Reality(img55), Indoor Navigation(32wr45), 3D Editor(Frame-1.webp), Virtual Reality(img24), Digital Twin Studio(Frame.webp), CGI(qarfqafrc.webp), Analytics(img67). Each card: image, label + arrow (arr.svg), hover lift.
4. **CTA block** (in block2.html tail) — dark rounded panel: h4 "Get started for free", h1 sales-demo line, 3 cyan-dot bullet features (Free 14-day trial / Full access / Cancel anytime), CTA "Try For Free", image `2-(3).webp` right.
5. **How it works** (`block3.html`) — light. h5 "How it works:", 2 images (`3-(9).webp`, `Group-1948754644.png`), 3 numbered steps: 1 Capture / 2 Edit / 3 Access with short descriptions.
6. **Editor** (`block4.html`) — dark navy (`light-bg`). h5 "Empower Your Digital Twin With The Treedis Editor", CTA. Full-width editor screenshot (`Main-Screen.png`).
7. **Cross reality** (`block5.html`) — light. h5 "One Platform, Cross Reality Access …", CTA, Onsite/Offsite toggle links, device icons (smartphone/monitor/tablet/vr-glasses/AR sphere svgs), images `Frame-1948754918/19.png` etc.
8. **Case studies** (`block6.html`) — light. h5 "Case Studies" + View all. Swiper carousel cards: local images `case-facility-security.png`, `case-granite.png`, `case-unwe.png` + title + date.
9. **Enterprise CTA** (`block7.html`) — same CTA panel style: h4 "Interested in Treedis Enterprise?", h1 demo line, CTA "Contact Us", image `placeholder-wrapper-4.webp`.
10. **Integrations** (`block8.html`) — light. h5 "Integrations", h1 collaboration line, logo grid (SAP, Aveva, Unity, PTC, Ready Player Me, Hexa, Kisi, Sketchfab, Giphy, …).
11. **Partners** (`block9.html`) — h5 "Strong partnerships, strong solutions", h1 line, logos: Matterport(black-mp-logo.svg), AWS(Group.svg), Bynet, Yad2(Rectangle-3048.png), Deloitte, Aviv Group.
12. **Final CTA** (`block10.html`) — dark. Treedis logo, h1 "Discover what our solutions can do - start your free trial today", CTA.
13. **Footer** (`block11.html`) — light `#f2f4f7`. Product mega-links (Digital twin studio, Flows, Indoor Navigation, Virtual Reality, Analytics, White Label, AR, Interactive Real Estate — each with thumbnail + Learn more), link columns (Company / Use cases / Products / Resources), logo, social, legal row (© 2026 Treedis, Cookies/Terms/Privacy).

## Behaviors

- Logo marquee: infinite CSS translateX loop, pause on hover, edge gradient masks.
- Products: click-driven tabs switching video panels.
- Bento cards + case cards: hover translateY(-4px)/scale, arrow slide.
- Videos: autoplay muted loop playsinline.
- Case studies: horizontal swiper/scroll-snap carousel.
- Navbar: white, sticky, dropdowns on hover/click.
- Buttons hover: darker blue, arrow nudges right.
