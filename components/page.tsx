"use client";

import {
  ArrowUpRight,
  Shuffle,
  Star,
  Clock,
  Minus,
  Zap,
  Heart,
  Rabbit,
  Mail,
} from "lucide-react";
import { useState, useEffect, useCallback, Suspense } from "react";
import { Logo } from "@/app/components/Logo";
import { useRouter, useSearchParams } from "next/navigation";
import { generateRandomColors } from "@/utils/colors";

function PageContent() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [showShortcutHint, setShowShortcutHint] = useState(false);
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
    // Set the background color of the html and body elements
    document.documentElement.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "s" || event.key === "S") {
        generateRandomColorsForPage();
      }
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

  const products = [
    {
      name: "Flexile",
      url: "https://Flexile.com",
      description: "team and shareholder management",
    },
    {
      name: "Gumroad",
      url: "https://Gumroad.com",
      description: "sell your stuff. see what sticks",
    },
    {
      name: "Helper",
      url: "https://Helper.ai",
      description: "customer support AI",
    },
    {
      name: "Iffy",
      url: "https://Iffy.com",
      description: "keep your product clean",
    },
    {
      name: "Shortest",
      url: "https://shortest.com",
      description: "QA via natural language AI tests",
    },
  ];

  const values = [
    {
      title: "real artists ship",
      icon: <Star size={24} />,
      points: [
        "we ship early and often",
        "we get feedback before shipping more",
        "use other peoples' code before writing your own",
      ],
    },
    {
      title: "save others time and energy",
      icon: <Clock size={24} />,
      points: [
        "time is our most sacred asset",
        "everything important is where AI can see it",
        "make shipping easier for everyone, not just you",
      ],
    },
    {
      title: "less is more",
      icon: <Minus size={24} />,
      points: [
        "we say no by default",
        "no performative busywork",
        "decrease the stuff one needs to understand to ship",
      ],
    },
    {
      title: "above and beyond",
      icon: <Zap size={24} />,
      points: [
        "we ship better than we scope",
        "minimize surface area to maximize polish",
        "our jobs change constantly–every 3 months",
      ],
    },
    {
      title: "now or never",
      icon: <Rabbit size={24} />,
      points: [
        "we avoid to-do lists and backlogs",
        "we scope, design, and build at the same time",
        "we focus on impact we can have today, not tomorrow",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen font-sans transition-colors duration-300"
      style={{
        fontFamily: "Helvetica Neue, sans-serif",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 md:px-6 lg:px-8 lg:py-16 xl:py-24">
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
              anti-work
            </h1>
          </div>
          <div
            className="relative hidden sm:block"
            onMouseEnter={() => setShowShortcutHint(true)}
            onMouseLeave={() => setShowShortcutHint(false)}
          >
            <button
              onClick={generateRandomColorsForPage}
              className="rounded p-2 xl:p-4"
              style={{ backgroundColor: textColor, color: backgroundColor }}
            >
              <Shuffle size={24} className="xl:h-8 xl:w-8" />
            </button>
            {showShortcutHint && (
              <div
                className="absolute right-0 mt-2 rounded px-2 py-1 text-xs xl:text-sm"
                style={{ backgroundColor: textColor, color: backgroundColor }}
              >
                Press &apos;S&apos; to shuffle
              </div>
            )}
          </div>
        </header>
        <p
          className="mb-8 text-sm sm:text-base lg:text-lg xl:mb-16 xl:text-2xl"
          style={{ color: textColor }}
        >
          Automating the boring stuff that ran Gumroad.
        </p>

        <main>
          <section className="mb-8 xl:mb-16">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide sm:text-base lg:text-lg xl:mb-8 xl:text-2xl">
              products
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="border-t pt-3 xl:pt-6"
                  style={{ borderColor: textColor }}
                >
                  <h3 className="text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
                    {product.name}
                  </h3>
                  <p
                    className="mb-2 text-xs sm:text-sm xl:mb-4 xl:text-lg"
                    style={{ color: textColor }}
                  >
                    {product.description}
                  </p>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs hover:underline sm:text-sm xl:text-lg"
                    aria-label={`learn more about ${product.name}`}
                    style={{ color: textColor }}
                  >
                    learn more{" "}
                    <ArrowUpRight className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
                  </a>
                </div>
              ))}
              <div
                className="border-2 border-dashed p-3 pl-6 xl:pt-6"
                style={{ borderColor: textColor }}
              >
                <div className="mb-2 flex items-center xl:mb-4">
                  <Mail size={24} />
                  <h3 className="ml-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
                    suggest a product
                  </h3>
                </div>
                <p
                  className="mb-2 text-xs sm:text-sm xl:mb-4 xl:text-lg"
                  style={{ color: textColor }}
                >
                  know a product we should consider?
                </p>
                <a
                  href="mailto:sahil@antiwork.com"
                  className="inline-flex items-center text-xs hover:underline sm:text-sm xl:text-lg"
                  style={{ color: textColor }}
                >
                  suggest a product{" "}
                  <ArrowUpRight className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
                </a>
              </div>
            </div>
          </section>

          <section className="mb-8 xl:mb-16">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide sm:text-base lg:text-lg xl:mb-8 xl:text-2xl">
              values
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="border-t pt-4 xl:pt-8"
                  style={{ borderColor: textColor }}
                >
                  <div className="mb-2 flex items-center xl:mb-4">
                    {value.icon}
                    <h3 className="ml-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
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
                </div>
              ))}
              <div
                className="border-2 border-dashed p-4 pl-6 pt-4 xl:pt-8"
                style={{ borderColor: textColor }}
              >
                <div className="mb-2 flex items-center xl:mb-4">
                  <Heart size={24} />
                  <h3 className="ml-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
                    join us
                  </h3>
                </div>
                <p
                  className="text-xs sm:text-sm xl:text-base"
                  style={{ color: textColor }}
                >
                  we&apos;re always looking for talented individuals to join our
                  team. if you resonate with our values, we&apos;d love to hear
                  from you!
                </p>
                <a
                  href="https://jobs.antiwork.com"
                  className="mt-2 inline-flex items-center text-xs hover:underline sm:text-sm xl:text-lg"
                  style={{ color: textColor }}
                >
                  apply now{" "}
                  <ArrowUpRight className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
                </a>
              </div>
            </div>
          </section>

          <section className="mb-8 xl:mb-16">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide sm:text-base lg:text-lg xl:mb-8 xl:text-2xl">
              newsletter
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-8">
              <div
                className="border-t pt-4 xl:pt-8"
                style={{ borderColor: textColor }}
              >
                <div className="mb-2 flex items-center xl:mb-4">
                  <Mail size={24} />
                  <h3 className="ml-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
                    stay updated
                  </h3>
                </div>
                <p
                  className="mb-4 text-xs sm:text-sm xl:text-base"
                  style={{ color: textColor }}
                >
                  subscribe to our newsletter for updates on new products and
                  features
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // TODO: Add newsletter signup logic
                    const email = (e.target as HTMLFormElement).email.value;
                    console.log("Newsletter signup:", email);
                  }}
                >
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="rounded px-3 py-2 text-xs sm:text-sm xl:text-base"
                      style={{
                        backgroundColor: "transparent",
                        border: `1px solid ${textColor}`,
                        color: textColor,
                      }}
                    />
                    <button
                      type="submit"
                      className="rounded px-4 py-2 text-xs sm:text-sm xl:text-base"
                      style={{
                        backgroundColor: textColor,
                        color: backgroundColor,
                      }}
                    >
                      subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
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
