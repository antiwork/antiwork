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
      points: [
        "ship products that make work fun",
        "make the office a playground",
        "celebrate wins big and small",
      ],
    },
    {
      title: "play to win",
      icon: <Trophy size={28} className="text-current" />,
      points: [
        "ship world-class software",
        "play with the best",
        "win as a team",
      ],
    },
    {
      title: "build for builders",
      icon: <Hammer size={28} className="text-current" />,
      points: [
        "open-source everything",
        "teach what we know",
        "unlock people's potential",
      ],
    },
    {
      title: "time to think",
      icon: <Rocket size={28} className="text-current" />,
      points: ["automate busywork", "think creatively", "unlock our potential"],
    },
  ];

  const teamPlayers = [
    {
      name: "Sahil Lavingia",
      title: "Founder & CEO",
      url: "https://sahillavingia.com",
      icon: <Crown size={28} className="text-current" />,
    },
    {
      name: "Connor Mann",
      title: "Staff Software Engineer",
      url: "https://x.com/cnnrmnn",
      icon: <Code size={28} className="text-current" />,
    },
    {
      name: "Sharang Dashputre",
      title: "Head of Engineering",
      url: "",
      icon: <HardHat size={28} className="text-current" />,
    },
    {
      name: "Razvan Marescu",
      title: "Antiworker",
      url: "https://razvan.marescu.com",
      icon: <Rocket size={28} className="text-current" />,
    },
    {
      name: "Vatsal Kaushik",
      title: "Post-Helper Helper",
      url: "http://vatsal.com",
      icon: <LifeBuoy size={28} className="text-current" />,
    },
    {
      name: "Ershad Kunnakkadan",
      title: "Staff Software Engineer",
      url: "https://x.com/ershus",
      icon: <FileCode size={28} className="text-current" />,
    },
    {
      name: "Maya Rainer",
      title: "Chief Destroyer of Technical Debt",
      url: "https://www.twitch.tv/mayarainer",
      icon: <BugOff size={28} className="text-current" />,
    },
    {
      name: "Madison Hill",
      title: "Marketing & Events Manager",
      url: "",
      icon: <Megaphone size={28} className="text-current" />,
    },
    {
      name: "Jono Mingard",
      title: 'Senior "That\'ll do for now" Engineer',
      url: "https://mingard.link",
      icon: <Wrench size={28} className="text-current" />,
    },
    {
      name: "Andie Manning",
      title: "Forehead of Support",
      url: "",
      icon: <Headset size={28} className="text-current" />,
    },
    {
      name: "Laura García Diéguez",
      title: "Design thinker",
      url: "",
      icon: <Palette size={28} className="text-current" />,
    },
    {
      name: "Raphael Costa",
      title: "Senior Product Engineer",
      url: "",
      icon: <Package size={28} className="text-current" />,
    },
    {
      name: "Daniel Gonzalez Reina",
      title: "Oven Source Engineer",
      url: "https://x.com/dgrcode",
      icon: <Flame size={28} className="text-current" />,
    },
    {
      name: "Raul Popadineți",
      title: "Senior Integrations Alien",
      titleHover: "Master of QuickBooks, GitHub, and IRS Chaos",
      url: "https://x.com/RaulOnRails",
      icon: <Puzzle size={28} className="text-current" />,
    },
    {
      name: "Seth Thompson",
      title: "Staff Software Engineer",
      url: "https://seththompson.com/",
      icon: <Brackets size={28} className="text-current" />,
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
                title="Flexile: payroll & equity for everyone"
                style={{ color: textColor }}
              >
                payroll
              </a>
              .
            </p>
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
