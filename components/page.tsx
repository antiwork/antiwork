"use client";

import {
  ArrowUpRight,
  Shuffle,
  Star,
  Clock,
  Minus,
  Zap,
  Heart,
  Rabbit
} from "lucide-react";
import { useState, useEffect, useCallback, Suspense } from "react";
import { Logo } from "@/app/components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

function PageContent() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [showShortcutHint, setShowShortcutHint] = useState(false);
  const [logoSize, setLogoSize] = useState(32);
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

  useEffect(() => {
    const updateLogoSize = () => {
      if (window.innerWidth >= 1280) {
        setLogoSize(64);
      } else if (window.innerWidth >= 1024) {
        setLogoSize(40);
      } else if (window.innerWidth >= 640) {
        setLogoSize(36);
      } else {
        setLogoSize(32);
      }
    };

    updateLogoSize();
    window.addEventListener("resize", updateLogoSize);

    return () => {
      window.removeEventListener("resize", updateLogoSize);
    };
  }, []);

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

  const values = [
    {
      title: "Real artists ship",
      icon: <Star size={24} />,
      points: [
        "We ship early and often.",
        "We get feedback before shipping more.",
        "Use other peoples' code before writing your own.",
      ],
    },
    {
      title: "Save others time and energy",
      icon: <Clock size={24} />,
      points: [
        "Time is our most sacred asset.",
        "Everything important is where AI can see it.",
        "Make shipping easier for everyone, not just you.",
      ],
    },
    {
      title: "Less is more",
      icon: <Minus size={24} />,
      points: [
        "We say no by default.",
        "No performative busywork.",
        "Decrease the stuff one needs to understand to ship.",
      ],
    },
    {
      title: "Above and beyond",
      icon: <Zap size={24} />,
      points: [
        "We ship better than we scope.",
        "Minimize surface area to maximize polish.",
        "Our jobs change constantly–every 3 months.",
      ],
    },
    {
      title: "Now or never",
      icon: <Rabbit size={24} />,
      points: [
        "We avoid to-do lists and backlogs.",
        "We scope, design, and build at the same time.",
        "We focus on the impact we can have today, not tomorrow.",
      ],
    },
  ];

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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-24"
      >
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8 xl:mb-16">
          <div className="flex items-center mb-4 sm:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Logo
                size={logoSize}
                color={textColor}
                background="transparent"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold ml-3"
            >
              Antiwork
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="relative hidden sm:block"
            onMouseEnter={() => setShowShortcutHint(true)}
            onMouseLeave={() => setShowShortcutHint(false)}
          >
            <button
              onClick={generateRandomColors}
              className="p-2 rounded xl:p-4"
              style={{ backgroundColor: textColor, color: backgroundColor }}
            >
              <Shuffle size={24} className="xl:w-8 xl:h-8" />
            </button>
            <AnimatePresence>
              {showShortcutHint && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute right-0 mt-2 px-2 py-1 text-xs xl:text-sm rounded"
                  style={{ backgroundColor: textColor, color: backgroundColor }}
                >
                  Press &apos;S&apos; to shuffle
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </header>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-sm sm:text-base lg:text-lg xl:text-2xl mb-8 xl:mb-16"
          style={{ color: textColor }}
        >
          We build products for fun and profit.
        </motion.p>

        <main>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mb-12 xl:mb-24"
          >
            <h2 className="text-sm sm:text-base lg:text-lg xl:text-2xl font-bold mb-4 xl:mb-8 uppercase tracking-wide">
              Stats
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 xl:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="border-t pt-4 xl:pt-8"
                style={{ borderColor: textColor }}
              >
                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold">
                  $20m
                </p>
                <p
                  className="text-xs sm:text-sm xl:text-lg"
                  style={{ color: textColor }}
                >
                  Annual revenue
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="border-t pt-4 xl:pt-8"
                style={{ borderColor: textColor }}
              >
                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold">
                  $8.91m
                </p>
                <p
                  className="text-xs sm:text-sm xl:text-lg"
                  style={{ color: textColor }}
                >
                  2023 net income
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="border-t pt-4 xl:pt-8"
                style={{ borderColor: textColor }}
              >
                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold">
                  30
                </p>
                <p
                  className="text-xs sm:text-sm xl:text-lg"
                  style={{ color: textColor }}
                >
                  People
                </p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="mb-8 xl:mb-16"
          >
            <h2 className="text-sm sm:text-base lg:text-lg xl:text-2xl font-bold mb-4 xl:mb-8 uppercase tracking-wide">
              Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8">
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
                    className="border-t pt-3 xl:pt-6"
                    style={{ borderColor: textColor }}
                    onMouseEnter={() => setHoveredProduct(letter)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <h3
                      className={`text-sm sm:text-base lg:text-lg xl:text-2xl font-bold ${
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
                            className="text-xs sm:text-sm xl:text-lg mb-2 xl:mb-4"
                            style={{ color: textColor }}
                          >
                            {product.description}
                          </p>
                          <a
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs sm:text-sm xl:text-lg hover:underline"
                            aria-label={`Learn more about ${product.name}`}
                            style={{ color: textColor }}
                          >
                            Learn more{" "}
                            <ArrowUpRight className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.1 }}
            className="mb-8 xl:mb-16"
          >
            <h2 className="text-sm sm:text-base lg:text-lg xl:text-2xl font-bold mb-4 xl:mb-8 uppercase tracking-wide">
              Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.3 + index * 0.1 }}
                  className="border-t pt-4 xl:pt-8"
                  style={{ borderColor: textColor }}
                >
                  <div className="flex items-center mb-2 xl:mb-4">
                    {value.icon}
                    <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold ml-2">
                      {value.title}
                    </h3>
                  </div>
                  <div className="space-y-2 xl:space-y-4">
                    {value.points.map((point, pointIndex) => (
                      <p
                        key={pointIndex}
                        className="text-xs sm:text-sm xl:text-base"
                        style={{ color: textColor }}
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.3 + values.length * 0.1 }}
                className="border-dashed border-2 pt-4 xl:pt-8 p-4 col-span-2 pl-6"
                style={{ borderColor: textColor }}
              >
                <div className="flex items-center mb-2 xl:mb-4">
                  <Heart size={24} />
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold ml-2">
                    Join Us
                  </h3>
                </div>
                <p
                  className="text-xs sm:text-sm xl:text-base"
                  style={{ color: textColor }}
                >
                  We&apos;re always looking for talented individuals to join our
                  team. If you resonate with our values, we&apos;d love to hear
                  from you!
                </p>
                <a
                  href="https://x.com/shl"
                  className="inline-flex items-center text-xs sm:text-sm xl:text-lg hover:underline mt-2"
                  style={{ color: textColor }}
                >
                  Apply now{" "}
                  <ArrowUpRight className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
                </a>
              </motion.div>
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
