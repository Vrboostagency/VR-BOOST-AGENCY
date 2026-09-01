import sys
sys.path.insert(0, r"F:\vr agency boost\vrboostagency\VR-BOOST-AGENCY\.claude\skills\img2threejs\forge\stage1_intake")
from build_detail_inventory import load_image, write_png_rgb, composite_over_white
from pathlib import Path

src = Path(r"F:\vr agency boost\vrboostagency\VR-BOOST-AGENCY\Design\images\Capture service\3d model\Group 1171277420.png")
w, h, pixels = load_image(src)

regions = {
    "skin-crop": (0.72, 0.70, 0.85, 0.85),
    "leather-crop": (0.06, 0.30, 0.20, 0.42),
}

for name, (x0, y0, x1, y1) in regions.items():
    px0, py0 = int(x0 * w), int(y0 * h)
    px1, py1 = int(x1 * w), int(y1 * h)
    cw, ch = px1 - px0, py1 - py0
    out_pixels = []
    for yy in range(py0, py1):
        row_start = yy * w
        for xx in range(px0, px1):
            out_pixels.append(composite_over_white(pixels[row_start + xx]))
    out_path = Path(r"F:\vr agency boost\vrboostagency\VR-BOOST-AGENCY\.img2threejs\capture-service-scene") / f"{name}.png"
    write_png_rgb(out_path, cw, ch, out_pixels)
    print("wrote", out_path, cw, ch)
