// Converte PNGs de public/assets para WebP (largura máx. 1600px) e relata a economia.
// Uso: node scripts/optimize-images.mjs [--write]
import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const ROOTS = ["public/assets/case-study", "public/assets/img"];
const MAX_WIDTH = 1600;
const write = process.argv.includes("--write");

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (extname(e.name).toLowerCase() === ".png") yield p;
  }
}

let before = 0;
let after = 0;
for (const root of ROOTS) {
  for await (const file of walk(root)) {
    const size = (await stat(file)).size;
    const img = sharp(file);
    const { width, height } = await img.metadata();
    const out = file.replace(/\.png$/i, ".webp");
    const buf = await img
      .resize({ width: Math.min(width, MAX_WIDTH), withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toBuffer();
    if (buf.length >= size) {
      console.log(`mantém  ${file} (${size} -> ${buf.length})`);
      continue;
    }
    before += size;
    after += buf.length;
    console.log(`${(size / 1024) | 0}KB -> ${(buf.length / 1024) | 0}KB  ${width}x${height}  ${file}`);
    if (write) {
      await sharp(buf).toFile(out);
      await unlink(file);
    }
  }
}
console.log(`\nTotal: ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB`);
