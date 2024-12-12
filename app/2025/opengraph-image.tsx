import { ImageResponse } from "next/og";
import { Logo } from "@/app/components/Logo";

export const runtime = "edge";
export const alt = "2025 Annual Meeting";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "rgb(229, 231, 235)", // matches bg-gray-200
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "bold",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Logo size={64} color="black" background="transparent" />
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#000000",
              marginLeft: 12,
            }}
          >
            Antiwork
          </div>
        </div>
        <div
          style={{
            fontSize: 48,
            color: "#6B7280", // gray-500
          }}
        >
          2025 Public Annual Meeting
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
