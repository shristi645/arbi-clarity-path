import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpColor(c1, c2, t) {
  return [
    Math.round(lerp(c1[0], c2[0], t)),
    Math.round(lerp(c1[1], c2[1], t)),
    Math.round(lerp(c1[2], c2[2], t)),
  ];
}

function dist(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function renderImage(size) {
  const cx = size / 2;
  const cy = size / 2;
  const r = (size * 12.67) / 32;

  const g1 = hexToRgb("#a5b4fc");
  const g2 = hexToRgb("#e9d5ff");
  const g3 = hexToRgb("#fef3c7");

  const pixels = new Uint8Array(size * size * 4);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const d = dist(x + 0.5, y + 0.5, cx, cy);

      if (d <= r) {
        const t = (x + y) / (2 * size);
        let color;
        if (t < 0.55) {
          color = lerpColor(g1, g2, t / 0.55);
        } else {
          color = lerpColor(g2, g3, (t - 0.55) / 0.45);
        }
        let alpha = 242;

        const px = x + 0.5;
        const py = y + 0.5;

        function sdBezier(x, y, x0, y0, x1, y1, x2, y2) {
          let minDist = Infinity;
          for (let i = 0; i <= 20; i++) {
            const t = i / 20;
            const bx = (1 - t) ** 2 * x0 + 2 * (1 - t) * t * x1 + t ** 2 * x2;
            const by = (1 - t) ** 2 * y0 + 2 * (1 - t) * t * y1 + t ** 2 * y2;
            const dd = dist(x, y, bx, by);
            if (dd < minDist) minDist = dd;
          }
          return minDist;
        }

        const pathScale = size / 32;
        const p0x = 8.67 * pathScale;
        const p0y = 26 * pathScale;
        const p1x = 13.33 * pathScale;
        const p1y = 18 * pathScale;
        const p2x = 18.67 * pathScale;
        const p2y = 8.67 * pathScale;

        const strokeWidth = 3 * pathScale;
        const dPath = sdBezier(px, py, p0x, p0y, p1x, p1y, p2x, p2y);

        if (dPath <= strokeWidth / 2) {
          const tt = (y) / size;
          const pathAlpha = Math.round(lerp(242, 140, tt));
          color = [255, 255, 255];
          alpha = pathAlpha;
        } else {
          const cp = size / 32;
          const cDx = 19.67 * cp;
          const cDy = 8 * cp;
          const cR = 2.27 * cp;
          if (dist(px, py, cDx, cDy) <= cR) {
            color = [255, 255, 255];
            alpha = 242;
          }
        }

        pixels[idx] = color[0];
        pixels[idx + 1] = color[1];
        pixels[idx + 2] = color[2];
        pixels[idx + 3] = alpha;
      } else {
        pixels[idx] = 0;
        pixels[idx + 1] = 0;
        pixels[idx + 2] = 0;
        pixels[idx + 3] = 0;
      }
    }
  }

  return pixels;
}

function buildBmp(pixels, size) {
  const rowSize = Math.ceil((size * 4) / 4) * 4;
  const pixelDataSize = rowSize * size;
  const dibSize = 40;
  const fileSize = 14 + dibSize + pixelDataSize;

  const buf = Buffer.alloc(fileSize);
  let off = 0;

  buf.write("BM", off, 2);
  off += 2;
  buf.writeUInt32LE(fileSize, off);
  off += 4;
  buf.writeUInt16LE(0, off);
  off += 2;
  buf.writeUInt16LE(0, off);
  off += 2;
  buf.writeUInt32LE(14 + dibSize, off);
  off += 4;

  buf.writeUInt32LE(dibSize, off);
  off += 4;
  buf.writeInt32LE(size, off);
  off += 4;
  buf.writeInt32LE(size * 2, off);
  off += 4;
  buf.writeUInt16LE(1, off);
  off += 2;
  buf.writeUInt16LE(32, off);
  off += 2;
  buf.writeUInt32LE(0, off);
  off += 4;
  buf.writeUInt32LE(pixelDataSize, off);
  off += 4;
  buf.writeInt32LE(2835, off);
  off += 4;
  buf.writeInt32LE(2835, off);
  off += 4;
  buf.writeUInt32LE(0, off);
  off += 4;
  buf.writeUInt32LE(0, off);
  off += 4;

  for (let y = size - 1; y >= 0; y--) {
    for (let x = 0; x < size; x++) {
      const srcIdx = (y * size + x) * 4;
      buf[off + x * 4] = pixels[srcIdx + 2];
      buf[off + x * 4 + 1] = pixels[srcIdx + 1];
      buf[off + x * 4 + 2] = pixels[srcIdx];
      buf[off + x * 4 + 3] = pixels[srcIdx + 3];
    }
    off += rowSize;
  }

  return buf;
}

function buildIco(images) {
  const numImages = images.length;
  let totalSize = 6 + 16 * numImages;
  for (const img of images) {
    totalSize += img.data.length;
  }

  const buf = Buffer.alloc(totalSize);
  let off = 0;

  buf.writeUInt16LE(0, off);
  off += 2;
  buf.writeUInt16LE(1, off);
  off += 2;
  buf.writeUInt16LE(numImages, off);
  off += 2;

  let dataOff = 6 + 16 * numImages;
  for (const img of images) {
    const w = img.size >= 256 ? 0 : img.size;
    const h = img.size >= 256 ? 0 : img.size;
    buf.writeUInt8(w, off);
    off += 1;
    buf.writeUInt8(h, off);
    off += 1;
    buf.writeUInt8(0, off);
    off += 1;
    buf.writeUInt8(0, off);
    off += 1;
    buf.writeUInt16LE(1, off);
    off += 2;
    buf.writeUInt16LE(32, off);
    off += 2;
    buf.writeUInt32LE(img.data.length, off);
    off += 4;
    buf.writeUInt32LE(dataOff, off);
    off += 4;
    dataOff += img.data.length;
  }

  for (const img of images) {
    img.data.copy(buf, off);
    off += img.data.length;
  }

  return buf;
}

const sizes = [16, 32];
const images = [];
for (const size of sizes) {
  const px = renderImage(size);
  const bmp = buildBmp(px, size);
  images.push({ size, data: bmp });
}

const ico = buildIco(images);
const outPath = join(__dirname, "..", "public", "favicon.ico");
writeFileSync(outPath, ico);
console.log(`Wrote favicon.ico (${ico.length} bytes) with sizes: ${sizes.join(", ")}px`);
