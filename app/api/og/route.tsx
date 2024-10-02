import { ImageResponse } from "next/og";
import { Logo } from "../../components/Logo";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "white",
          background: "#111827", // This is the dark:bg-gray-900 color from Tailwind CSS
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo size={300} color="white" background="transparent" />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
