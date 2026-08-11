import { ImageResponse } from "next/og";

/**
 * Browser tab icon, rendered to PNG at build time.
 *
 * Generated rather than shipped as a file because there is no SVG rasteriser
 * on this machine, and a bare icon.svg would leave Safari and older browsers
 * without one. `ImageResponse` needs no external tooling.
 */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4A6CF7",
          color: "#fff",
          fontSize: 13,
          letterSpacing: -0.5,
          fontWeight: 700,
          // The favicon is masked to a circle by some browsers and left square
          // by others; a rounded square reads correctly either way.
          borderRadius: 7,
        }}
      >
        TM
      </div>
    ),
    size,
  );
}
