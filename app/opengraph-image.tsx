import { ImageResponse } from "next/og";

export const alt = "Chinese Stock by Thai Value Investor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #6d3fb5 0%, #4f2a8a 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 36, color: "#f4b860" }}>Value Investing · Peter Lynch Style</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 20, lineHeight: 1.1 }}>
          Chinese Stock by Thai Value Investor
        </div>
        <div style={{ fontSize: 32, marginTop: 28, opacity: 0.85 }}>
          Fresh earnings updates · Fundamental change alerts · Stock ranking
        </div>
      </div>
    ),
    size,
  );
}
