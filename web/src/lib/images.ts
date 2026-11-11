import type { ImageMetadata } from 'astro';
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.{jpg,jpeg,png,webp}', { eager: true });
/** Look up a photo in src/assets/img by file name. */
export function img(name: string): ImageMetadata {
  const hit = files[`../assets/img/${name}`];
  if (!hit) throw new Error(`Image not found: ${name}`);
  return hit.default;
}

/** CSS custom properties (--bg-lg / --bg-sm) for a photo background, optimized to WebP. */
export async function bgVars(name: string): Promise<string> {
  const { getImage } = await import('astro:assets');
  const src = img(name);
  const big = await getImage({ src, width: 1920, format: 'webp', quality: 66 });
  const small = await getImage({ src, width: 900, format: 'webp', quality: 60 });
  return `--bg-lg:url(${big.src});--bg-sm:url(${small.src})`;
}
