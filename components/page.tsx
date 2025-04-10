"use client";

import {
  ArrowUpRight,
  Shuffle,
  Sparkles,
  Heart,
  Hammer,
  Trophy,
  Rocket,
  Mail,
  Send,
  Users,
  Crown,
  Code,
  HardHat,
  LifeBuoy,
  Megaphone,
  Wrench,
  Headset,
  Palette,
  Package,
  Flame,
  Puzzle,
  FileCode,
  Brackets,
  BugOff,
} from "lucide-react";
import { useState, useEffect, useCallback, Suspense } from "react";
import { Logo } from "@/app/components/Logo";
import { useRouter, useSearchParams } from "next/navigation";
import { generateRandomColors } from "@/utils/colors";

function PageContent() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [logoSize, setLogoSize] = useState(32);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState("");
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

  const handleSubscribe = async () => {
    // Reset status
    setSubscribeStatus("");

    // Validate email
    if (!email || !email.includes("@")) {
      setSubscribeStatus("please enter a valid email");
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
      setSubscribeStatus("you're in the loop!");
    } catch (error) {
      // Handle error
      setSubscribeStatus(
        `error: ${error instanceof Error ? error.message : "something went wrong"}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const products = [
    {
      name: "Flexile",
      url: "https://Flexile.com",
      description: "payroll & equity for everyone",
      icon: <Trophy size={28} className="text-current" />,
    },
    {
      name: "Gumroad",
      url: "https://Gumroad.com",
      description: "sell your stuff. see what sticks",
      icon: <Rocket size={28} className="text-current" />,
    },
    {
      name: "Helper",
      url: "https://Helper.ai",
      description: "customer support agents",
      icon: <Mail size={28} className="text-current" />,
    },
    {
      name: "Iffy",
      url: "https://Iffy.com",
      description: "intelligent content moderation",
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
      title: "make work play",
      icon: <Sparkles size={28} className="text-current" />,
      points: ["make the office a playground", "celebrate wins big and small"],
    },
    {
      title: "play to win",
      icon: <Trophy size={28} className="text-current" />,
      points: ["ship world-class software", "win as a team"],
    },
    {
      title: "build for builders",
      icon: <Hammer size={28} className="text-current" />,
      points: ["open-source everything", "teach what we know"],
    },
    {
      title: "time to think",
      icon: <Rocket size={28} className="text-current" />,
      points: ["automate busywork", "think creatively"],
    },
  ];

  const teamPlayers = [
    {
      name: "Sahil Lavingia",
      title: "founder & ceo",
      url: "https://sahillavingia.com",
      icon: <Crown size={28} className="text-current" />,
    },
    {
      name: "Connor Mann",
      title: "staff software engineer",
      url: "https://x.com/cnnrmnn",
      icon: <Code size={28} className="text-current" />,
    },
    {
      name: "Sharang Dashputre",
      title: "head of engineering",
      url: "",
      icon: <HardHat size={28} className="text-current" />,
    },
    {
      name: "Razvan Marescu",
      title: "antiworker",
      url: "https://razvan.marescu.com",
      icon: <Rocket size={28} className="text-current" />,
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
      name: "Maya Rainer",
      title: "chief destroyer of technical debt",
      url: "https://www.twitch.tv/mayarainer",
      icon: <BugOff size={28} className="text-current" />,
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
      title: "forehead of support",
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
      name: "Jason Chang",
      title: "design engineer",
      url: "",
      icon: <Palette size={28} className="text-current" />,
    },
    {
      name: "Raphael Costa",
      title: "senior product engineer",
      url: "https://x.com/raphaelwcosta",
      icon: <Package size={28} className="text-current" />,
    },
    {
      name: "Daniel Gonzalez Reina",
      title: "oven source engineer",
      url: "https://x.com/dgrcode",
      icon: <Flame size={28} className="text-current" />,
    },
    {
      name: "Raul Popadineți",
      title: "senior integrations alien",
      titleHover: "master of quickbooks, github, and irs chaos",
      url: "https://x.com/RaulOnRails",
      icon: <Puzzle size={28} className="text-current" />,
    },
    {
      name: "Seth Thompson",
      title: "staff software engineer",
      url: "https://seththompson.com/",
      icon: <Brackets size={28} className="text-current" />,
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
          className="mb-8 text-sm font-bold sm:text-base lg:text-lg xl:mb-16 xl:text-4xl"
          style={{ color: textColor }}
        >
          on a mission to make <span title="boring, rote">Work</span>{" "}
          <span title="fun, creative">play</span>.
        </p>

        <main>
          <section className="mb-8 xl:mb-16">
            <p className="text-sm sm:text-base lg:text-lg xl:mb-16 xl:text-2xl">
              we build software that liberates creative builders from what they
              consider toil.
            </p>
          </section>

          <section className="mb-8 xl:mb-16">
            <h2 className="mb-8 text-sm font-bold tracking-wide sm:text-base lg:text-lg xl:text-4xl">
              stay in the loop
            </h2>
            <div
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0"
              style={{ border: `2px solid ${textColor}` }}
            >
              <input
                type="email"
                placeholder="your email"
                className="flex-1 bg-transparent px-4 py-2 text-sm placeholder-current sm:text-base lg:text-lg xl:text-xl"
                style={{
                  color: textColor,
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <button
                  onClick={handleSubscribe}
                  className="p-2 xl:p-4"
                  style={{
                    backgroundColor: textColor,
                    color: backgroundColor,
                  }}
                  disabled={isSubmitting}
                >
                  <Send size={24} className="xl:h-8 xl:w-8" />
                </button>
              </div>
            </div>
            {subscribeStatus && (
              <p className="mt-2 text-sm" style={{ color: textColor }}>
                {subscribeStatus}
              </p>
            )}
          </section>

          <section className="mb-8 xl:mb-16">
            <h2 className="mb-8 text-sm font-bold tracking-wide sm:text-base lg:text-lg xl:text-4xl">
              crafted with pride
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:gap-12">
              {products.map((product) => (
                <div key={product.name} style={{ borderColor: textColor }}>
                  <div className="mb-2 flex items-center xl:mb-4">
                    {product.icon}
                    <h3 className="ml-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
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
                    className="text-xs sm:text-sm xl:text-base"
                    style={{ color: textColor }}
                  >
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8 xl:mb-16">
            <h2 className="mb-8 text-sm font-bold tracking-wide sm:text-base lg:text-lg xl:text-4xl">
              playground rules
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:gap-12">
              {values.map((value) => (
                <div key={value.title} style={{ borderColor: textColor }}>
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
            </div>
          </section>

          <section className="mb-8 xl:mb-16">
            <h2 className="mb-8 text-sm font-bold tracking-wide sm:text-base lg:text-lg xl:text-4xl">
              team players
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-8">
              {teamPlayers.map((player) => (
                <div key={player.name} style={{ borderColor: textColor }}>
                  <div className="mb-2 flex items-center xl:mb-4">
                    {player.icon}
                    <h3 className="ml-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
                      {player.url ? (
                        <a
                          href={player.url}
                          className="underline hover:no-underline"
                          style={{ color: textColor }}
                        >
                          {player.name}
                        </a>
                      ) : (
                        player.name
                      )}
                    </h3>
                  </div>
                  <p
                    className="text-xs sm:text-sm xl:text-base"
                    style={{ color: textColor }}
                    title={player.titleHover}
                  >
                    {player.title}
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
