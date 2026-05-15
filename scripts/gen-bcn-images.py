import pathlib
import shutil

project = pathlib.Path(__file__).resolve().parent.parent
sources = [
    project / "src" / "assets" / "bcn",
    project / "bcn",
    project / "public" / "bcn",
]
pub_bcn = project / "public" / "bcn"
out = project / "src" / "lib" / "bcn-images.ts"

extensions = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"}
pub_bcn.mkdir(parents=True, exist_ok=True)

seen: dict[str, pathlib.Path] = {}

for folder in sources:
    if not folder.exists():
        continue
    for src in folder.iterdir():
        if src.suffix.lower() not in extensions:
            continue
        seen[src.name] = src

for name, src in seen.items():
    dest = pub_bcn / name
    if not dest.exists() or src.stat().st_mtime > dest.stat().st_mtime:
        shutil.copy2(src, dest)

files = sorted(seen.keys())

lines = [
    "import type { StaticImageData } from \"next/image\";",
    "",
    "// Auto-generated — add images to src/assets/bcn/ then run:",
    "// python scripts/gen-bcn-images.py",
    "",
]

for i, name in enumerate(files):
    var = f"bcn{i:02d}"
    lines.append(f'import {var} from "@/assets/bcn/{name}";')

lines.append("")
lines.append("export const bcnPhotos: StaticImageData[] = [")
for i, _ in enumerate(files):
    lines.append(f"  bcn{i:02d},")
lines.append("];")
lines.append("")

out.write_text("\n".join(lines), encoding="utf-8")
print(f"Wrote {len(files)} image(s) to {out}")
