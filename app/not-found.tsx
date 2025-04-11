"use client";

import React from "react";
import { ArrowLeft, Compass } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Logo } from "./components/Logo";
import { useRouter, useSearchParams } from "next/navigation";
import { generateRandomColors } from "@/utils/colors";
import Link from "next/link";

export default function NotFound() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [logoSize, setLogoSize] = useState(32);
  const router = useRouter();
  const searchParams = useSearchParams();

  const generateRandomColorsForPage = useCallback(() => {
    const { backgroundColor, textColor } = generateRandomColors();
    setBackgroundColor(backgroundColor);
    setTextColor(textColor);
    router.push(`?bg=${backgroundColor.slice(1)}&txt=${textColor.slice(1)}`);
  }, [router]);

  const setInitialColorsForPage = useCallback(() => {
    const { backgroundColor, textColor } = generateRandomColors();
    setBackgroundColor(backgroundColor);
    setTextColor(textColor);
  }, []);

  useEffect(() => {
    const bgColor = searchParams.get("bg");
    const txtColor = searchParams.get("txt");

    if (bgColor && txtColor) {
      setBackgroundColor(`#${bgColor}`);
      setTextColor(`#${txtColor}`);
    } else {
      setInitialColorsForPage();
    }
  }, [searchParams, setInitialColorsForPage]);

  useEffect(() => {
    document.documentElement.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      generateRandomColorsForPage();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [generateRandomColorsForPage]);

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
              antiwork
            </h1>
          </div>
          <div className="relative">
            <button
              onClick={generateRandomColorsForPage}
              className="rounded p-2 xl:p-4"
              style={{ backgroundColor: textColor, color: backgroundColor }}
            >
              <Compass size={24} className="xl:h-8 xl:w-8" />
            </button>
          </div>
        </header>

        <main className="text-center md:mt-12 lg:mt-16 xl:mt-24">
          <div className="mb-6 flex justify-center">
            <Compass size={64} className="text-current xl:h-24 xl:w-24" />
          </div>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl">
            page not found
          </h2>
          <p className="mb-8 text-sm sm:text-base lg:text-lg xl:text-xl">
            the page you&apos;re looking for doesn&apos;t exist or has been
            moved
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/">
              <button
                className="flex items-center rounded px-4 py-2 sm:px-6 sm:py-3 xl:px-8 xl:py-4"
                style={{ backgroundColor: textColor, color: backgroundColor }}
              >
                <ArrowLeft size={20} className="mr-2" />
                <span className="font-bold">go back home</span>
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
