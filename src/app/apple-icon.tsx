import { ImageResponse } from "next/og";

/**
 * Home-screen icon for iOS. Same mark as `icon.tsx` but at 180px and without
 * rounded corners — iOS applies its own mask, and pre-rounding it would show
 * a visible gap inside that mask.
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 72,
          letterSpacing: -3,
          fontWeight: 700,
        }}
      >
        TM
      </div>
    ),
    size,
  );
}
