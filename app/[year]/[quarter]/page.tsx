"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Head from "next/head";
import { Logo } from "../../components/Logo";
import Image from "next/image";

const slides = [
  {
    id: 1,
    backgroundColor: "bg-white",
    content: (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-[2px]">
              <Logo size={50} color="black" background="transparent" />
            </div>
            <span className="text-5xl font-bold tracking-tight">Antiwork</span>
          </div>
          <h2 className="text-2xl text-gray-500 font-normal">
            Transforming Work and Compensation
          </h2>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    backgroundColor: "bg-black",
    content: (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Logo size={500} color="white" background="transparent" />
          </motion.div>
        </div>
      </div>
    ),
  },
  ...Array.from({ length: 23 }, (_, i) => ({
    id: i + 3,
    backgroundColor: "bg-white",
    content: (
      <div className="min-h-screen w-full flex items-center justify-center">
        <Image
          src={`/${i + 3}.png`}
          alt={`Slide ${i + 3}`}
          width={800}
          height={600}
          className="max-w-[80vw] max-h-[80vh] object-contain"
        />
      </div>
    ),
  })),
];

export default function SlideDeck({
  params,
}: {
  params: { year: string; quarter: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentSlide, setCurrentSlide] = useState(
    parseInt(searchParams.get("slide") || "1")
  );

  const goToSlide = (slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= slides.length) {
      setCurrentSlide(slideNumber);
      const params = new URLSearchParams(searchParams);
      params.set("slide", slideNumber.toString());
      router.push(`?${params.toString()}`);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowRight":
      case "Space":
        goToSlide(currentSlide + 1);
        break;
      case "ArrowLeft":
        goToSlide(currentSlide - 1);
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
        goToSlide(parseInt(e.key));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide]);

  // Ensure currentSlide is within valid bounds
  const safeSlideIndex = Math.max(
    0,
    Math.min(currentSlide - 1, slides.length - 1)
  );
  const currentSlideContent = slides[safeSlideIndex]?.content;
  const currentBackgroundColor = slides[safeSlideIndex]?.backgroundColor;

  return (
    <>
      <Head>
        <title>{`Antiwork All-hands ${params.quarter} ${params.year}`}</title>
      </Head>
      <motion.div
        className={`h-screen w-screen flex items-center justify-center ${currentBackgroundColor}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {currentSlideContent}
        </motion.div>
        <div className="fixed bottom-4 right-4 text-sm opacity-50">
          {currentSlide} / {slides.length}
        </div>
      </motion.div>
    </>
  );
}
