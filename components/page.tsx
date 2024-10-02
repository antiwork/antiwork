"use client";

import { ArrowUpRight, Shuffle } from "lucide-react";
import { useState, useEffect, useCallback, Suspense } from "react";
import { Logo } from "@/app/components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

function PageContent() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const generateRandomColors = useCallback(() => {
    const generateRandomColor = () =>
      `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;

    const getContrastRatio = (color1: string, color2: string) => {
      const luminance = (color: string) => {
        const rgb = parseInt(color.slice(1), 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = (rgb >> 0) & 0xff;
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };
      const l1 = luminance(color1);
      const l2 = luminance(color2);
      return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    };

    let backgroundColor, textColor;
    do {
      backgroundColor = generateRandomColor();
      textColor = generateRandomColor();
    } while (getContrastRatio(backgroundColor, textColor) < 4.5);

    setBackgroundColor(backgroundColor);
    setTextColor(textColor);

    // Update URL with new colors
    router.push(`?bg=${backgroundColor.slice(1)}&txt=${textColor.slice(1)}`);
  }, [router]);

  const setInitialColors = useCallback(() => {
    const generateRandomColor = () =>
      `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;

    const getContrastRatio = (color1: string, color2: string) => {
      const luminance = (color: string) => {
        const rgb = parseInt(color.slice(1), 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = (rgb >> 0) & 0xff;
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };
      const l1 = luminance(color1);
      const l2 = luminance(color2);
      return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    };

    let backgroundColor, textColor;
    do {
      backgroundColor = generateRandomColor();
      textColor = generateRandomColor();
    } while (getContrastRatio(backgroundColor, textColor) < 4.5);

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
      setInitialColors();
    }
  }, [searchParams, setInitialColors]);

  const products = [
    {
      name: "Flexile",
      url: "https://Flexile.com",
      description: "to pay your people in equity and dividends",
    },
    {
      name: "Gumroad",
      url: "https://Gumroad.com",
      description: "to see what sticks",
    },
    {
      name: "Helper",
      url: "https://Helper.ai",
      description: "to answer support tickets",
    },
    {
      name: "Iffy",
      url: "https://Iffy.com",
      description: "to moderate user content",
    },
    {
      name: "Shortest",
      url: "https://shortest.com",
      description: "to write tests",
    },
  ];

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen font-sans transition-colors duration-300"
      style={{
        fontFamily: "Helvetica Neue, sans-serif",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto px-6 py-12"
      >
        <header className="flex justify-between items-center">
          <div className="flex items-center mb-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Logo size={32} color={textColor} background="transparent" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-3xl font-bold ml-3"
            >
              Antiwork
            </motion.h1>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            onClick={generateRandomColors}
            className="p-2 rounded"
            style={{ backgroundColor: textColor, color: backgroundColor }}
          >
            <Shuffle size={24} />
          </motion.button>
        </header>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-sm mb-8"
          style={{ color: textColor }}
        >
          We build products for fun and profit.
        </motion.p>

        <main>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mb-8"
          >
            <h2 className="text-sm font-bold mb-3 uppercase tracking-wide">
              Stats
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="border-t pt-2"
                style={{ borderColor: textColor }}
              >
                <p className="text-xl font-bold">$20m</p>
                <p className="text-xs" style={{ color: textColor }}>
                  Annual revenue
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="border-t pt-2"
                style={{ borderColor: textColor }}
              >
                <p className="text-xl font-bold">$8.91m</p>
                <p className="text-xs" style={{ color: textColor }}>
                  2023 net income
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="border-t pt-2"
                style={{ borderColor: textColor }}
              >
                <p className="text-xl font-bold">30</p>
                <p className="text-xs" style={{ color: textColor }}>
                  People
                </p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="mb-8"
          >
            <h2 className="text-sm font-bold mb-3 uppercase tracking-wide">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {alphabet.map((letter, index) => {
                const product = products.find((product) =>
                  product.name.startsWith(letter)
                );
                return (
                  <motion.div
                    key={letter}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 + index * 0.05 }}
                    className="border-t pt-2"
                    style={{ borderColor: textColor }}
                    onMouseEnter={() => setHoveredProduct(letter)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <h3
                      className={`text-sm font-bold ${
                        !product ? "opacity-50" : ""
                      }`}
                    >
                      {product ? product.name : letter}
                    </h3>
                    <AnimatePresence>
                      {hoveredProduct === letter && product && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p
                            className="text-xs mb-1"
                            style={{ color: textColor }}
                          >
                            {product.description}
                          </p>
                          <a
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs hover:underline"
                            aria-label={`Learn more about ${product.name}`}
                            style={{ color: textColor }}
                          >
                            Learn more <ArrowUpRight className="ml-1 h-3 w-3" />
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        </main>
      </motion.div>
    </motion.div>
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
