import React from "react";

interface LogoProps {
  size?: number;
  color?: string;
  background?: string;
}

export function Logo({
  size = 24,
  color = "white",
  background = "black",
}: LogoProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background,
        width: size,
        height: size,
      }}
    >
      <svg
        width={size / 2}
        height={size}
        viewBox="0 0 12 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="6,22 0,2 12,2" />
      </svg>
      <svg
        width={size / 2}
        height={size}
        viewBox="0 0 12 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="6,22 0,2 12,2" />
      </svg>
    </div>
  );
}
