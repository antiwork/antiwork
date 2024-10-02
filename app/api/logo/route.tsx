import { ImageResponse } from "next/og";
import { Logo } from "../../components/Logo";

export async function GET() {
  // Generate random colors
  const randomBackgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
  const randomLogoColor = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: randomLogoColor,
          background: randomBackgroundColor,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo size={256} color={randomLogoColor} background="transparent" />
      </div>
    ),
    {
      width: 512,
      height: 512,
    }
  );
}
