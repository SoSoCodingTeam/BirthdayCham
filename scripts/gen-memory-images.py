import pathlib

assets_dir = pathlib.Path(__file__).resolve().parent.parent / "src" / "assets"
out = pathlib.Path(__file__).resolve().parent.parent / "src" / "lib" / "memory-images.ts"

files = sorted(
    p
    for p in assets_dir.iterdir()
    if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp", ".gif"}
)

lines = ['import type { StaticImageData } from "next/image";', ""]
entries = []

for i, p in enumerate(files):
    var = f"img{i:02d}"
    lines.append(f'import {var} from "@/assets/{p.name}";')
    entries.append((var, i))

lines.append("")
lines.append("export type MemoryPhoto = {")
lines.append("  id: string;")
lines.append("  src: StaticImageData;")
lines.append("  alt: string;")
lines.append("};")
lines.append("")
lines.append("export const memoryPhotos: MemoryPhoto[] = [")

for var, i in entries:
    photo_id = str(i + 1).zfill(2)
    lines.append(f'  {{ id: "{photo_id}", src: {var}, alt: "Memory {i + 1}" }},')

lines.append("];")
lines.append("")

out.write_text("\n".join(lines), encoding="utf-8")
print(f"Wrote {len(entries)} images to {out}")
