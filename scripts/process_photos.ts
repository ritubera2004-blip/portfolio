import sharp from "sharp";
import fs from "node:fs";

const UPLOAD = "upload";

async function run() {
  // 1) Ritu's professional portrait → hero photo (4:5 framing)
  await sharp(`${UPLOAD}/WhatsApp Image 2026-11-22 at 3.22.51 PM (1).jpeg`)
    .resize(1000, 1250, { fit: "cover", position: "attention" })
    .jpeg({ quality: 84, progressive: true, mozjpeg: true })
    .toFile("public/ritu-portrait.jpg");
  console.log("✓ portrait -> public/ritu-portrait.jpg");

  // 2) SILVAT brand logo (square, preserve fully — no crop)
  await sharp(`${UPLOAD}/WhatsApp Image 2026-11-22 at 3.22.51 PM.jpeg`)
    .resize(900, 900, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 90, progressive: true, mozjpeg: true })
    .toFile("public/silvat/silvat-logo.jpg");
  console.log("✓ logo -> public/silvat/silvat-logo.jpg");

  // 3) SILVAT brand/product photo (bags, landscape 16:10)
  await sharp(`${UPLOAD}/WhatsApp Image 2026-11-22 at 3.22.50 PM.jpeg`)
    .resize(1280, 800, { fit: "cover", position: "attention" })
    .jpeg({ quality: 84, progressive: true, mozjpeg: true })
    .toFile("public/silvat/silvat-bags.jpg");
  console.log("✓ bags -> public/silvat/silvat-bags.jpg");

  // Report sizes
  for (const p of [
    "public/ritu-portrait.jpg",
    "public/silvat/silvat-logo.jpg",
    "public/silvat/silvat-bags.jpg",
  ]) {
    const s = fs.statSync(p);
    console.log(`  ${p} → ${(s.size / 1024).toFixed(1)} KB`);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
