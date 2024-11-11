import { ImageResponse } from "next/og";
import { Logo } from "../../components/Logo";

export async function GET() {
  // Generate random colors with full 6-digit hex codes
  const randomBackgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
  const randomLogoColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: randomLogoColor,
          backgroundColor: randomBackgroundColor,
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
