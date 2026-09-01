# Image Analysis — Group 1171277420.png (Capture Service / AR wayfinding composite)

Source: `Design/images/Capture service/3d model/Group 1171277420.png`, 731×531 PNG, foreground
coverage 0.68, single connected foreground component (admitted).

This is a **layered marketing composite**, not a photo of one object. Per the generic protocol,
Layer 1 identification is done separately for each real-world subject found in the frame, then
Layer 2–8 are run per subject. Flat 2D content (the mall photo, the app UI) is identified as such
and explicitly routed to texture/backdrop treatment rather than forced into geometry.

## Layer 1 — Identification & classification (per subject)

| Subject | primaryDomain | Confidence | Note |
|---|---|---|---|
| A. Smartphone | object | 0.9 | Modern slab phone, rounded-rect body, front-camera notch, held screen-toward-viewer at a slight tilt |
| B. Hand + forearm | character (hybrid) | 0.75 | Right hand, fingers wrapping the phone's left edge and back, thumb on/near screen bottom-left; partial forearm exits bottom-right |
| C. Screen UI content | flat/texture-only | 1.0 | Two stacked app cards: a "ZARA / SALE" promo card mid-screen, a bottom sheet "ZARA · 16m to go" nav bar with an X button. This is rasterized UI, not geometry. |
| D. Handbag + price tag | object | 0.85 | Structured tote/satchel bag with top handle, floating top-left, its own drop shadow; a separate rounded price-tag chip "$145" with a red "-24%" corner badge overlapping its top-right corner |
| E. Location list card | flat/texture-only | 0.9 | Small white rounded card, top-right, floating independently of the phone — a "Locations" search/list panel (search bar + FASHION row + 3 store rows with thumbnails: ZARA/Calvin Klein/GAP). Reads as its own free-floating UI card, not attached to the phone screen. |
| F. Mall background | scene/photo, not object | 1.0 | Blurred/soft-focus interior — glossy floor with reflections, storefront glass on both sides, two silhouetted people walking away, ceiling light strip. No single object; a real, unknown physical space — not reconstructable as accurate geometry from one soft-focus frame. |
| G. Pink rounded card + drop shadow | 2D graphic chrome | 1.0 | The rounded pink card behind everything is a design/UI frame (matches the site's existing product-card style), not a scene element. |

**Suitability implication (feeds Layer-1 → gate):** this is a hybrid multi-object scene. Treated as
a spec with `objectClass.primaryDomain: hybrid` and an explicit multi-component tree: phone (object),
hand (stylized character sub-assembly), bag (object), price-tag (object, flat chip), UI content and
mall photo (textures/backdrop, not sculpted geometry). Card frame (G) is excluded from the 3D scene —
it belongs to the surrounding HTML card (already established site pattern, see `ProductsTabs.tsx`
image cards), not to the model.

## Layer 2 — Overall form & silhouette (A, B, D)

- **A. Smartphone:** bounding volume = thin rounded cuboid (slab), long axis vertical, held at
  roughly a 15–20° tilt off-vertical (top edge kicked slightly toward viewer-left). Bilateral
  symmetry about its long axis broken only by the front camera notch (top-center) and physical
  buttons (right edge, not visible — occluded by hand/angle). Aspect ratio (screen-visible portion)
  ≈ 1:2.05, consistent with a standard modern smartphone (reference proportion: iPhone-class body,
  ~71.5×147.5×7.8mm, screen ~19.5:9).
- **B. Hand:** organic form, four fingers curl around the phone's left/back edge (visible as
  fingertip pads on the front face's left margin), thumb tucked near the bottom edge. Forearm exits
  frame bottom-right at a shallow diagonal. Skin tone mid-warm-brown, glossy specular highlights on
  knuckles (wet/skin-oil sheen, low roughness relative to matte skin baseline).
- **D. Handbag:** bounding volume = trapezoidal prism body (wider at base, tapering slightly toward
  top opening) with a semicircular top handle loop. Bilateral symmetry about vertical centerline.
  Structured/rigid silhouette (not a soft slouchy bag) — sharp bottom corners, flat side gussets
  implied by the visible fold line, single flat front face with no visible hardware (no clasp/zipper
  legible at this resolution).

## Layer 3 — Macro → meso → micro decomposition

**A. Smartphone**
- macro: body shell, screen/display, camera notch
- meso: screen bezel edge, notch capsule
- micro: none reliably visible (buttons occluded by hand + camera angle) — mark undetermined

**B. Hand**
- macro: palm mass, four-finger group, thumb, forearm stub
- meso: individual finger segments (visible: index/middle/ring fingertips curling over top-left
  edge of phone; thumb separate, lower)
- micro: knuckle creases, nail highlights — low confidence at this resolution, treat as
  shading-only, not geometry

**D. Handbag**
- macro: body shell, handle loop
- meso: side gusset fold line (implied, not sharply resolved)
- micro: none legible (no visible stitching/hardware at this resolution)

**Price tag chip:** macro only — rounded rectangle chip + a smaller red rounded-corner badge
overlapping its top-right corner. Flat card treated as a thin extruded plate, not modeled in depth.

## Layer 4 — Spatial relationships (scene-graph)

- `<hand, grips, phone>` — contactType: wrap (fingers overlap phone's left+back edge, thumb
  contacts front face near bottom edge)
- `<phone, held-in-front-of, mall-backdrop>` — phone is the nearest-camera object, backdrop is a
  deep-blurred plane behind it (photographic depth-of-field falloff, not architectural detail)
- `<price-tag, overlaps, handbag>` — attached-to: embed, tag's bottom-left corner is layered over
  the bag's lower body, tag's top-right red badge overlaps the tag itself
- `<handbag, floats-above-left-of, phone>` — no physical contact with phone or hand; independent
  floating card element with its own drop shadow (i.e., a separate "product callout", not resting
  on any surface in the scene)
- `<location-list-card, floats-above-right-of, phone>` — same floating-callout relationship,
  independent of the phone screen despite visually resembling app content

## Layer 5 — Materials & surface (PBR), per real object

**A. Smartphone**
- Body edge (thin visible rim): metalness ~0.9, roughness ~0.25 (brushed/anodized metal band) —
  inference, edge is narrow and partly occluded
- Screen glass: metalness 0, roughness ~0.05–0.1 (glossy cover glass), treated as a separate thin
  transmissive/coated layer over the emissive UI texture
- Camera notch: metalness ~0.1, roughness ~0.3, near-black (matte capsule)

**B. Hand**
- Skin: metalness 0, roughness ~0.45 base (satin) with lower-roughness specular hotspots on
  knuckles (~0.2) — subsurface-scattering look is desired but out of scope for a stylized real-time
  material; approximate with a warm subsurface-tinted base + rim light instead

**D. Handbag**
- Body: metalness 0, roughness ~0.5–0.6, matte-to-satin leather/leather-look material, taupe/beige
  albedo
- Handle: same material family as body (no separate hardware finish legible)

**Price tag / location-card:** flat UI chips — metalness 0, roughness ~0.9 (paper/card matte),
white base, treated as thin extruded plates with a baked canvas texture face, not shaded PBR
surfaces of interest.

## Layer 6 — Color & finish

- Phone body/edge: near-black / graphite (low value, near-neutral, slight warm cast)
- Screen bezel: black
- Skin: mid warm brown, hue ~25–30° (orange-brown), medium value, moderate saturation
- Handbag: warm beige/taupe, hue ~35–40°, high value, low-moderate saturation (matte leather look)
- Price tag: white card, red badge (vivid red, high saturation, high value) with white "-24%" text,
  black "$145" text
- Backdrop: desaturated cool-neutral grey-blue, low contrast (soft focus, out-of-focus depth cue) —
  reproduced as a soft gradient/blurred texture, not a lit 3D corridor
- Card frame (G, excluded from 3D scene): vivid magenta/pink, high saturation — belongs to the HTML
  card chrome around the canvas, matching the site's existing product-card treatment

## Layer 7 — Identity-defining features

- Phone: front-camera notch position (top-center), screen aspect ratio, tilt angle — these define
  "reads as a held phone" and are the features the fidelity gate should weight most
- Hand: finger-wrap silhouette over the phone's top-left corner (this is what sells "gripping", not
  finger joint accuracy)
- Bag: trapezoid taper + semicircular handle loop silhouette; price-tag badge overlap position
  (top-right corner of the tag)
- UI content: legible as "an AR shopping/wayfinding app" via card shapes + rough text blocking —
  exact glyph fidelity is not the target; card silhouette + color blocking is

## Layer 8 — Uncertainty & single-image limits

- **Occluded:** phone's right edge/buttons (behind hand), phone back shell, bag's side gussets,
  hand's back/dorsal side, backdrop store interiors (all behind bokeh blur)
- **Undetermined:** exact bag hardware (clasp/zipper/stitching) — resolution insufficient
- **Single-view limit:** no back/side reference exists for phone, hand, or bag — this build will be
  a **front-hemisphere-faithful, stylized-elsewhere** reconstruction. Backs/undersides are
  reasonable-inference primitives (a phone back is a known slab; a bag back is a known flat panel),
  not evidence-based.
- **Explicit non-goal:** the mall backdrop will NOT be reconstructed as accurate 3D architecture.
  One soft-focus photo of an unidentified space cannot support that; it will be approximated as a
  simple depth-cued backdrop (a curved/plane surface carrying a blurred gradient derived from the
  photo's color regions), stated here as an approximation, not a claim of architectural accuracy.

## Suitability verdict (feeds `grimoire/intake/validation_rubric.md`)

- **Whole composite as a single "object":** REJECT per rubric ("photo is a scene, not an object
  reference", "target object is ambiguous" for the frame as a whole).
- **Scoped as an explicit multi-component hybrid spec** (phone [object] + hand [character-conditional
  → stylized] + bag [object] + price-tag [object, flat] + backdrop [explicit non-geometric
  approximation]): **CONDITIONAL** — one clear front view per sub-object, macro shapes clear,
  materials inferable, hidden sides reasonably approximated with generic primitives, user has
  accepted (per this analysis being surfaced) that UI content and the mall interior are textures/
  backdrop, not sculpted geometry.
