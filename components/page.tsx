"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { generateRandomColors } from "@/utils/colors";
import { Font } from "@/app/components/Font";

export const products = [
  "Flexile",
  "Gumboard",
  "Gumroad",
  "Helper",
  "Iffy",
  "Jacquez",
  "Shortest",
];

function PageContent() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const logoSize = 40;
  const [oRotation, setORotation] = useState(0);

  const generateRandomColorsForPage = useCallback(() => {
    const { backgroundColor, textColor } = generateRandomColors();
    setBackgroundColor(backgroundColor);
    setTextColor(textColor);
  }, []);

  const handleOClick = useCallback(() => {
    setORotation((prev) => prev + 90);
    generateRandomColorsForPage();
  }, [generateRandomColorsForPage]);

  useEffect(() => {
    generateRandomColorsForPage();
  }, [generateRandomColorsForPage]);

  useEffect(() => {
    document.documentElement.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col items-center justify-center gap-8 px-8 py-16">
        <Font
          text="ANTIWORK"
          color={textColor}
          size={logoSize}
          onOClick={handleOClick}
          oRotation={oRotation}
        />

        <p className="text-2xl">&quot;make work play&quot;</p>

        <ul className="list-disc pl-6">
          {products.map((product) => (
            <li key={product} className="mb-2">
              <a
                href={`https://github.com/antiwork/${product.toLowerCase()}`}
                className="underline hover:no-underline"
                style={{ color: textColor }}
              >
                {product}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/antiwork"
          className="mb-8 text-2xl underline hover:no-underline"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: textColor }}
        >
          github.com/antiwork
        </a>
      </div>
    </div>
  );
}

export function Page() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            textAlign: "center",
          }}
        >
          ▼▼
        </div>
      }
    >
      <PageContent />
    </Suspense>
  );
}
