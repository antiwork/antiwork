"use cache";

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
        width={size}
        height={size}
        viewBox="0 0 28 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="7,21.5 0,2.5 14,2.5" />
        <polygon points="21,21.5 14,2.5 28,2.5" />
      </svg>
    </div>
  );
}
