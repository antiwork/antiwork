"use client";

import { ArrowUpRight, Shuffle, MoreHorizontal } from "lucide-react";
import { useState, useEffect, useCallback, Suspense, useRef } from "react";
import { Logo } from "@/app/components/Logo";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function PageContent() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [showAllProducts, setShowAllProducts] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const containerRef = useRef(null);
  const { scrollY } = useScroll({ target: containerRef });
  const shadowY = useTransform(scrollY, [0, 500], [0, 50]);
  const highlightY = useTransform(scrollY, [0, 500], [0, -50]);

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

  useEffect(() => {
    // Set the background color of the html and body elements
    document.documentElement.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "s" || event.key === "S") {
        generateRandomColors();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [generateRandomColors]);

  const [products, setProducts] = useState([
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
  ]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen font-sans transition-colors duration-300 relative overflow-hidden"
      style={{
        fontFamily: "Helvetica Neue, sans-serif",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`,
          y: highlightY,
          filter: "blur(40px)",
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 70%)`,
          y: shadowY,
          filter: "blur(40px)",
        }}
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto px-6 py-12 relative"
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
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold ml-3"
            >
              Antiwork
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="relative"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <button
                    onClick={generateRandomColors}
                    className="p-2 rounded"
                    style={{
                      backgroundColor: backgroundColor,
                      color: textColor,
                    }}
                  >
                    <Shuffle size={24} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Press &apos;S&apos; to shuffle</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
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
                    className="border-t pt-2 relative"
                    style={{ borderColor: textColor }}
                    onMouseEnter={() => setHoveredProduct(letter)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {product ? (
                      <h3 className="text-sm font-bold cursor-pointer">
                        {product.name}
                      </h3>
                    ) : (
                      <Link href={`/${letter.toLowerCase()}`}>
                        <h3
                          className={`text-sm font-bold opacity-50 cursor-pointer ${
                            hoveredProduct === letter ? "underline" : ""
                          }`}
                        >
                          {letter}
                        </h3>
                      </Link>
                    )}
                    <AnimatePresence>
                      {hoveredProduct === letter && product && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex justify-between items-center">
                            {product.description}
                            <a
                              href={product.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs hover:underline"
                              aria-label={`Learn more about ${product.name}`}
                              style={{ color: textColor }}
                            >
                              Learn more{" "}
                              <ArrowUpRight className="ml-1 h-3 w-3" />
                            </a>
                          </div>
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
