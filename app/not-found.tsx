"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Logo } from "./components/Logo";
import { generateRandomColors } from "../utils/colors";
import Link from "next/link";

export default function NotFound() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [logoSize, setLogoSize] = useState(32);

  const setInitialColorsForPage = useCallback(() => {
    const { backgroundColor, textColor } = generateRandomColors();
    setBackgroundColor(backgroundColor);
    setTextColor(textColor);
  }, []);

  useEffect(() => {
    setInitialColorsForPage();
  }, [setInitialColorsForPage]);

  useEffect(() => {
    document.documentElement.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  useEffect(() => {
    const updateLogoSize = () => {
      if (window.innerWidth >= 1280) {
        setLogoSize(64);
      } else if (window.innerWidth >= 1024) {
        setLogoSize(40);
      } else if (window.innerWidth >= 640) {
        setLogoSize(34);
      } else {
        setLogoSize(28);
      }
    };

    updateLogoSize();
    window.addEventListener("resize", updateLogoSize);

    return () => {
      window.removeEventListener("resize", updateLogoSize);
    };
  }, []);

  return (
    <div
      className="min-h-screen font-sans transition-colors duration-300"
      style={{
        fontFamily: "Helvetica Neue, sans-serif",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12 md:px-6 lg:px-8 lg:py-16 xl:py-24">
        <header className="flex flex-col items-start justify-between sm:flex-row sm:items-center md:mb-8 xl:mb-16">
          <div className="mb-4 flex items-center md:mb-0">
            <div className="mt-[1px] md:mt-[0px] lg:mt-[1px] xl:mt-[2px]">
              <Logo
                size={logoSize}
                color={textColor}
                background="transparent"
              />
            </div>
            <h1 className="ml-3 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-6xl">
              Antiwork
            </h1>
          </div>
        </header>

        <main className="flex flex-col items-center justify-center text-center">
          <h2 className="mb-8 text-4xl font-bold sm:text-6xl lg:text-8xl xl:text-9xl">
            Four
          </h2>
          <h2 className="mb-8 text-4xl font-bold sm:text-6xl lg:text-8xl xl:text-9xl">
            zero
          </h2>
          <h2 className="mb-12 text-4xl font-bold sm:text-6xl lg:text-8xl xl:text-9xl">
            Four
          </h2>

          <p className="mb-8 text-sm sm:text-base lg:text-lg xl:text-2xl">
            this page doesn&apos;t exist, but our work does.
          </p>

          <Link
            href="/"
            className="rounded px-6 py-3 text-sm font-bold transition-colors duration-300 hover:opacity-80 sm:text-base lg:text-lg xl:px-8 xl:py-4 xl:text-xl"
            style={{
              backgroundColor: textColor,
              color: backgroundColor,
            }}
          >
            go home
          </Link>
        </main>
      </div>
    </div>
  );
}
