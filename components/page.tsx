"use client";

import {
  Sparkles,
  Hammer,
  Trophy,
  Rocket,
  Mail,
  Send,
  Users,
  Shield,
} from "lucide-react";
import { useState, useEffect, useCallback, Suspense, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { generateRandomColors } from "@/utils/colors";
import { Font } from "@/app/components/Font";
import React from "react";

export const products = [
  {
    name: "Flexile",
    url: "https://Flexile.com",
    description: "Contractor payments as easy as 1-2-3",
    icon: <Trophy size={28} className="text-current" />,
  },
  {
    name: "Gumboard",
    url: "https://gumboard.com",
    description: "Stay on top of your team's to-dos",
    icon: <Users size={28} className="text-current" />,
  },
  {
    name: "Gumroad",
    url: "https://Gumroad.com",
    description: "Sell your stuff. See what sticks",
    icon: <Rocket size={28} className="text-current" />,
  },
  {
    name: "Helper",
    url: "https://Helper.ai",
    description: "Customer support agents",
    icon: <Mail size={28} className="text-current" />,
  },
  {
    name: "Iffy",
    url: "https://Iffy.com",
    description: "Intelligent content moderation",
    icon: <Hammer size={28} className="text-current" />,
  },
  {
    name: "Jacquez",
    url: "https://jacquez.com",
    description: "A friendly moderator for OSS repos",
    icon: <Shield size={28} className="text-current" />,
  },
  {
    name: "Shortest",
    url: "https://shortest.com",
    description: "QA via natural language",
    icon: <Sparkles size={28} className="text-current" />,
  },
];

function PageContent() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [logoSize, setLogoSize] = useState(100);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState("");
  const [colorsSetByUrl, setColorsSetByUrl] = useState(false);
  const [oRotation, setORotation] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();

  const generateRandomColorsForPage = useCallback(() => {
    const { backgroundColor, textColor } = generateRandomColors();
    setBackgroundColor(backgroundColor);
    setTextColor(textColor);
  }, []);

  const setInitialColorsForPage = useCallback(() => {
    const { backgroundColor, textColor } = generateRandomColors();
    setBackgroundColor(backgroundColor);
    setTextColor(textColor);
  }, []);

  const handleOClick = useCallback(() => {
    setORotation((prev) => prev + 90);
    generateRandomColorsForPage();
  }, [generateRandomColorsForPage]);

  const handleShuffleClick = useCallback(() => {
    generateRandomColorsForPage();
    router.push("/");
  }, [generateRandomColorsForPage, router]);

  const handleBackgroundColorChange = useCallback(
    (color: string) => {
      setBackgroundColor(color);
      const bgHex = color.replace("#", "");
      const txtHex = textColor.replace("#", "");
      router.push(`/?bg=${bgHex}&txt=${txtHex}`);
    },
    [textColor, router]
  );

  const handleTextColorChange = useCallback(
    (color: string) => {
      setTextColor(color);
      const bgHex = backgroundColor.replace("#", "");
      const txtHex = color.replace("#", "");
      router.push(`/?bg=${bgHex}&txt=${txtHex}`);
    },
    [backgroundColor, router]
  );

  useEffect(() => {
    const bgColor = searchParams.get("bg");
    const txtColor = searchParams.get("txt");

    if (bgColor && txtColor) {
      setBackgroundColor(`#${bgColor}`);
      setTextColor(`#${txtColor}`);
      setColorsSetByUrl(true);
    } else {
      setInitialColorsForPage();
      setColorsSetByUrl(false);
    }
  }, [searchParams, setInitialColorsForPage]);

  useEffect(() => {
    document.documentElement.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  useEffect(() => {
    const updateLogoSize = () => {
      if (window.innerWidth >= 1920) {
        setLogoSize(200);
      } else if (window.innerWidth >= 1280) {
        setLogoSize(100);
      } else if (window.innerWidth >= 1024) {
        setLogoSize(80);
      } else if (window.innerWidth >= 640) {
        setLogoSize(60);
      } else {
        setLogoSize(36);
      }
    };

    updateLogoSize();
    window.addEventListener("resize", updateLogoSize);

    return () => {
      window.removeEventListener("resize", updateLogoSize);
    };
  }, []);

  const handleSubscribe = async () => {
    // Reset status
    setSubscribeStatus("");

    // Validate email
    if (!email || !email.includes("@")) {
      setSubscribeStatus("Please enter a valid email");
      return;
    }

    // Set submitting state
    setIsSubmitting(true);

    try {
      // Call the API endpoint
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "something went wrong");
      }

      // Success
      setEmail("");
      setSubscribeStatus("You're in the loop!");
    } catch (error) {
      // Handle error
      setSubscribeStatus(
        `Error: ${error instanceof Error ? error.message : "Something went wrong"}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen font-sans transition-colors duration-300"
      style={{
        fontFamily: "Helvetica Neue, sans-serif",
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <div className="mx-auto px-4 py-8 sm:py-12 md:px-6 lg:px-8 lg:py-16">
        <header className="mb-8 flex flex-row items-center justify-between xl:mb-16">
          <Font
            text="ANTIWORK"
            color={textColor}
            size={logoSize}
            onOClick={handleOClick}
            oRotation={oRotation}
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => handleBackgroundColorChange(e.target.value)}
                className="h-8 w-8 cursor-pointer border-0 xl:h-12 xl:w-12"
                title="Background color"
              />
              <input
                type="color"
                value={textColor}
                onChange={(e) => handleTextColorChange(e.target.value)}
                className="h-8 w-8 cursor-pointer border-0 xl:h-12 xl:w-12"
                title="Text color"
              />
            </div>
            <button
              onClick={handleShuffleClick}
              className="text-sm font-bold sm:text-base lg:text-xl xl:text-2xl"
              style={{ color: textColor }}
            >
              Shuffle
            </button>
          </div>
        </header>
        <p
          className="mb-8 text-sm font-bold sm:text-base lg:text-xl xl:mb-16 xl:text-5xl"
          style={{ color: textColor }}
        >
          On a mission to make <span title="boring, rote">work</span>{" "}
          <span title="fun, creative">play</span>.
        </p>

        <main>
          <section className="mb-8 xl:mb-16">
            <h2 className="mb-8 text-sm font-bold tracking-wide sm:text-base lg:text-xl xl:text-5xl">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:gap-12">
              {products.map((product) => (
                <div key={product.name} style={{ borderColor: textColor }}>
                  <div className="mb-2 flex items-center xl:mb-4">
                    {product.icon}
                    <h3 className="ml-2 text-sm font-bold sm:text-base lg:text-xl xl:text-2xl">
                      <a
                        href={product.url}
                        className="underline hover:no-underline"
                        style={{ color: textColor }}
                      >
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p
                    className="text-xs sm:text-sm lg:text-base xl:text-xl"
                    style={{ color: textColor }}
                  >
                    {product.description}
                  </p>
                </div>
              ))}
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
