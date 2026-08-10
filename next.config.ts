import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first: typically another 20-30% under WebP on photographs. Next
    // negotiates by Accept header and falls back to WebP, so older browsers
    // still get the smaller-than-JPEG format.
    formats: ["image/avif", "image/webp"],
    // Trimmed from the defaults to the widths this layout actually requests —
    // every extra entry is another variant to generate and cache.
    deviceSizes: [480, 640, 828, 1080, 1200, 1920],
    imageSizes: [48, 96, 128, 256, 384],
    // Next 16 only honours `quality` values listed here — anything else falls
    // back to 75 silently. 62 is for the noisy blog photographs, where AVIF at
    // the default quality came out heavier than the source WebP.
    qualities: [62, 75],
  },
};

export default nextConfig;
