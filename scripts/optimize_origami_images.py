#!/usr/bin/env python3
"""Optimize origami images by converting them to AVIF.

Rule: if an AVIF with the same base name already exists in the output folder,
skip conversion for that source image.
"""

from __future__ import annotations

import argparse
import shutil
from pathlib import Path

from PIL import Image

DEFAULT_INPUT_DIR = Path("../assets/images/Origami")
DEFAULT_OUTPUT_DIR = Path("../assets/images/Origami-optimized")
SUPPORTED_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"}


def convert_to_avif(src_path: Path, dst_path: Path, quality: int, speed: int) -> None:
    if src_path.suffix.lower() == ".avif":
        shutil.copy2(src_path, dst_path)
        return

    with Image.open(src_path) as img:
        if img.mode not in ("RGB", "RGBA"):
            img = img.convert("RGB")
        img.save(dst_path, format="AVIF", quality=quality, speed=speed)


def main() -> int:
    parser = argparse.ArgumentParser(description="Convert origami images to AVIF.")
    parser.add_argument(
        "--input",
        type=Path,
        default=DEFAULT_INPUT_DIR,
        help="Input folder containing original images.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT_DIR,
        help="Output folder for AVIF images.",
    )
    parser.add_argument(
        "--quality",
        type=int,
        default=45,
        help="AVIF quality (0-100).",
    )
    parser.add_argument(
        "--speed",
        type=int,
        default=5,
        help="AVIF speed/effort (0-10). Lower is slower/better.",
    )
    args = parser.parse_args()

    input_dir = args.input
    output_dir = args.output

    if not input_dir.exists():
        raise SystemExit(f"Input folder not found: {input_dir}")

    output_dir.mkdir(parents=True, exist_ok=True)

    converted = 0
    skipped = 0

    for src_path in sorted(input_dir.rglob("*")):
        if not src_path.is_file():
            continue
        if src_path.suffix.lower() not in SUPPORTED_EXTS:
            continue

        dst_path = output_dir / f"{src_path.stem}.avif"
        if dst_path.exists():
            skipped += 1
            continue

        convert_to_avif(src_path, dst_path, args.quality, args.speed)
        converted += 1

    print(f"Converted: {converted}")
    print(f"Skipped (already optimized): {skipped}")
    print(f"Output folder: {output_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
