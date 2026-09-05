import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          background: "#faf6ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72 }}>🎁</div>
        <div style={{ marginTop: 24, fontSize: 56, fontWeight: 700, color: "#20291f" }}>
          Giáo Án Pro
        </div>
        <div style={{ marginTop: 16, fontSize: 32, color: "#5b6358" }}>
          AI soạn giáo án chuẩn 2345 / 5512 — Tiểu học · THCS · THPT
        </div>
      </div>
    ),
    size
  );
}
