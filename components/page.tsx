"use client";

import {
  Sparkles,
  Hammer,
  Trophy,
  Rocket,
  Mail,
  Send,
  Users,
  ChefHat,
  LifeBuoy,
  Megaphone,
  Wrench,
  Headset,
  Palette,
  FileCode,
  Shuffle,
} from "lucide-react";
import { useState, useEffect, useCallback, Suspense, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { generateRandomColors } from "@/utils/colors";
import { Font } from "@/app/components/Font";
import React from "react";

function PageContent() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [logoSize, setLogoSize] = useState(100);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState("");
  const [colorsSetByUrl, setColorsSetByUrl] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
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
    // Set the background color of the html and body elements
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
      if (window.innerWidth >= 1920) {
        setLogoSize(200);
      } else if (window.innerWidth >= 1280) {
        setLogoSize(100);
      } else if (window.innerWidth >= 1024) {
        setLogoSize(80);
      } else if (window.innerWidth >= 640) {
        setLogoSize(60);
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

  const products = [
    {
      name: "Flexile",
      url: "https://Flexile.com",
      description: "Equity for everyone",
      icon: <Trophy size={28} className="text-current" />,
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
      name: "Shortest",
      url: "https://shortest.com",
      description: "QA via natural language AI tests",
      icon: <Sparkles size={28} className="text-current" />,
    },
  ];

  const values = [
    {
      title: "Make work play",
      icon: <Sparkles size={28} className="text-current" />,
      points: ["Make the office a playground", "Celebrate wins big and small"],
    },
    {
      title: "Play to win",
      icon: <Trophy size={28} className="text-current" />,
      points: ["Ship world-class software", "Win as a team"],
    },
    {
      title: "Build for builders",
      icon: <Hammer size={28} className="text-current" />,
      points: ["Open-source everything", "Teach what we know"],
    },
    {
      title: "Time to think",
      icon: <Rocket size={28} className="text-current" />,
      points: ["Automate busywork", "Think creatively"],
    },
  ];

  const teamPlayers = [
    {
      name: "Sahil Lavingia",
      title: "head chef",
      url: "https://sahillavingia.com",
      icon: <ChefHat size={28} className="text-current" />,
    },
    {
      name: "Vatsal Kaushik",
      title: "post-helper helper",
      url: "http://vatsal.com",
      icon: <LifeBuoy size={28} className="text-current" />,
    },
    {
      name: "Ershad Kunnakkadan",
      title: "staff software engineer",
      url: "https://x.com/ershus",
      icon: <FileCode size={28} className="text-current" />,
    },
    {
      name: "Madison Hill",
      title: "marketing & events manager",
      url: "",
      icon: <Megaphone size={28} className="text-current" />,
    },
    {
      name: "Jono Mingard",
      title: 'senior "that\'ll do for now" engineer',
      url: "https://mingard.link",
      icon: <Wrench size={28} className="text-current" />,
    },
    {
      name: "Andie Manning",
      title: "customer supporter",
      url: "",
      icon: <Headset size={28} className="text-current" />,
    },
    {
      name: "Laura García Diéguez",
      title: "design thinker",
      url: "",
      icon: <Palette size={28} className="text-current" />,
    },
    {
      name: "join us",
      title: "contribute to our open source software",
      url: "https://github.com/antiwork",
      icon: <Users size={28} className="text-current" />,
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
      <div className="mx-auto px-4 py-8 sm:py-12 md:px-6 lg:px-8 lg:py-16">
        <header className="mb-8 flex flex-col items-start justify-between sm:flex-row sm:items-center xl:mb-16">
          <div
            className="mb-4 flex items-center md:mb-0"
            style={{ marginLeft: "-10px" }}
          >
            <Font text="ANTIWORK" color={textColor} size={logoSize} />
          </div>
          <div className="relative hidden sm:block">
            <button
              onClick={generateRandomColorsForPage}
              className="rounded p-2 xl:p-4"
              style={{ backgroundColor: textColor, color: backgroundColor }}
            >
              <Shuffle size={24} className="xl:h-8 xl:w-8" />
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
            <p className="text-sm sm:text-base lg:text-xl xl:mb-16 xl:text-3xl">
              We build software that liberates creative builders from what they
              consider toil—whether it&apos;s{" "}
              <a
                href="https://shortest.com"
                className="underline hover:no-underline"
                title="Shortest: QA via natural language AI tests"
                style={{ color: textColor }}
              >
                QA
              </a>
              ,{" "}
              <a
                href="https://Iffy.com"
                className="underline hover:no-underline"
                title="Iffy: intelligent content moderation"
                style={{ color: textColor }}
              >
                moderation
              </a>
              ,{" "}
              <a
                href="https://Helper.ai"
                className="underline hover:no-underline"
                title="Helper: customer support agents"
                style={{ color: textColor }}
              >
                customer support
              </a>
              , or{" "}
              <a
                href="https://Flexile.com"
                className="underline hover:no-underline"
                title="Flexile: equity for everyone"
                style={{ color: textColor }}
              >
                equity ownership
              </a>
              .
            </p>
          </section>

          <section className="mb-8 xl:mb-16">
            <h2 className="mb-8 text-sm font-bold tracking-wide sm:text-base lg:text-xl xl:text-5xl">
              Stay in the loop
            </h2>
            <div
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0"
              style={{ border: `2px solid ${textColor}` }}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 py-2 text-sm placeholder-current sm:text-base lg:text-xl xl:text-2xl"
                style={{
                  color: textColor,
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <button
                  onClick={handleSubscribe}
                  className="p-4"
                  style={{
                    backgroundColor: textColor,
                    color: backgroundColor,
                  }}
                  disabled={isSubmitting}
                >
                  <Send size={24} className="xl:h-10 xl:w-10" />
                </button>
              </div>
            </div>
            {subscribeStatus && (
              <p
                className="mt-2 text-sm lg:text-base xl:text-xl"
                style={{ color: textColor }}
              >
                {subscribeStatus}
              </p>
            )}
          </section>

          <section className="mb-8 xl:mb-16">
            <h2 className="mb-8 text-sm font-bold tracking-wide sm:text-base lg:text-xl xl:text-5xl">
              Crafted with pride
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

          <section className="mb-8 xl:mb-16">
            <h2 className="mb-8 text-sm font-bold tracking-wide sm:text-base lg:text-xl xl:text-5xl">
              Playground rules
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:gap-12">
              {values.map((value) => (
                <div key={value.title} style={{ borderColor: textColor }}>
                  <div className="mb-2 flex items-center xl:mb-4">
                    {value.icon}
                    <h3 className="ml-2 text-sm font-bold sm:text-base lg:text-xl xl:text-2xl">
                      {value.title}
                    </h3>
                  </div>
                  <div className="space-y-2 xl:space-y-4">
                    {value.points.map((point, pointIndex) => (
                      <p
                        key={pointIndex}
                        className="text-xs sm:text-sm lg:text-base xl:text-xl"
                        style={{ color: textColor }}
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8 xl:mb-16">
            <h2 className="mb-8 text-sm font-bold tracking-wide sm:text-base lg:text-xl xl:text-5xl">
              Team players
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <button
                className="px-4 py-2 text-sm font-bold sm:text-base lg:text-xl xl:text-2xl"
                style={{
                  backgroundColor: textColor,
                  color: backgroundColor,
                }}
                onClick={() => setShowCredits(true)}
              >
                Roll the credits
              </button>
              <a
                href="/bounties"
                className="inline-block px-4 py-2 text-center text-sm font-bold sm:text-base lg:text-xl xl:text-2xl"
                style={{
                  backgroundColor: textColor,
                  color: backgroundColor,
                }}
              >
                Join us
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Star Wars Style Credits */}
      {showCredits && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
          onClick={() => setShowCredits(false)}
        >
          <div className="credits-container h-full w-full overflow-hidden">
            {/* Header */}
            <div className="absolute left-0 top-8 w-full text-center">
              <h2 className="mb-8 text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
                CAST
              </h2>
            </div>

            {/* Movie-style credits */}
            <div className="relative mx-auto w-full max-w-lg animate-starwars pt-24 text-center text-white">
              <div className="grid grid-cols-2 gap-1">
                {teamPlayers.map((player) => (
                  <React.Fragment key={player.name}>
                    <div className="mb-6 pr-4 text-right text-xl lg:text-2xl xl:text-3xl">
                      {player.url ? (
                        <a
                          href={player.url}
                          className="underline hover:no-underline"
                        >
                          {player.name}
                        </a>
                      ) : (
                        player.name
                      )}
                    </div>
                    <div className="mb-6 pl-4 text-left text-xl uppercase lg:text-2xl xl:text-3xl">
                      {player.title}
                    </div>
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-12 pt-12 text-center">
                <h3 className="mb-6 text-2xl font-bold uppercase text-white lg:text-3xl xl:text-4xl">
                  ANTIWORK
                </h3>
                <p className="text-xl text-white lg:text-2xl xl:text-3xl">
                  On a mission to make work play
                </p>
              </div>
            </div>

            {/* Exit instructions */}
            <div className="absolute bottom-4 left-0 w-full text-center text-sm text-white opacity-70 lg:text-base xl:text-xl">
              Click anywhere to return
            </div>
          </div>
        </div>
      )}
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
