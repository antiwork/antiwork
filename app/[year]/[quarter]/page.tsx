"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "@/app/components/Logo";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Page } from "@/components/page";
import { Slide } from "./Slide";
import { Tweet } from "react-tweet";

export default function QuarterlyAllHands() {
  const slides = [
    {
      backgroundColor: undefined,
      content: (
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Logo size={50} color="black" background="transparent" />
            <span className="text-5xl font-bold tracking-tight">Antiwork</span>
          </div>
          <h2 className="text-2xl text-gray-500 font-normal">
            Transforming Work and Compensation
          </h2>
        </div>
      ),
    },
    {
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
    {
      backgroundColor: "bg-white",
      content: (
        <Image
          src="/2024/q4/nomeetings.png"
          alt="No meetings"
          width={563}
          height={762}
          className="p-8 h-full object-contain"
          priority
        />
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="scale-50">
          <div className="scale-50">
            <Page />
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <main className="prose mx-auto p-4 sm:p-8 flex-1 w-full max-w-3xl relative z-10">
          <label className="block mt-8 mb-8">
            October 17, 2024 by{" "}
            <a href="https://sahillavingia.com/god">
              <u>Sahil Lavingia</u>
            </a>
          </label>

          <h1>God Mode</h1>

          <p>
            A few weeks ago, Paul Graham published{" "}
            <a href="https://www.paulgraham.com/foundermode.html">
              Founder Mode
            </a>
            , about a management style practiced by Brian Chesky at Airbnb that
            was at least partially inspired by Steve Jobs.
          </p>

          <p>
            As Paul states in Founder Mode, "It seems to be working. Airbnb's
            free cash flow margin is now among the best in Silicon Valley."
          </p>

          <p>
            So, what is founder mode? The article rang true to me, but was
            purposefully unspecific.
          </p>

          <p>
            This is my attempt at proposing something more truthful by being
            more specific: GOD mode.
          </p>

          <h2>Growth, Optimization, Destruction</h2>

          <p>Every startup focuses on growth at its outset.</p>

          <p>They often raise money in order to focus exclusively on that.</p>

          <p>
            Eventually, the growth tapers out and the founders start focusing on
            optimization.
          </p>

          <p>
            That's what Paul refers to in his essay as "manager mode," which is
            already commonly taught in business school and practiced in all
            kinds of businesses around the world. Therefore, optimization isn't
            enough to build the singular businesses investors like Paul are
            hoping to invest in.
          </p>

          <p>The third point of god mode defines founder mode: destruction.</p>

          <p>
            Destruction is akin to invasive surgery, and similar to surgery,
            it's only possible with a god-like omniscience about the entire
            system.
          </p>

          <p>Hence, god mode.</p>
        </main>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex items-center justify-center p-20">
          <motion.svg
            width="1666"
            height="829"
            viewBox="0 0 1666 829"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M2 828 C 416 828 833 600 1664 2"
              stroke="black"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex items-center justify-center p-20">
          <motion.svg
            width="1666"
            height="829"
            viewBox="0 0 1666 829"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M2 414
                 C 85 0, 251 0, 334 414
                 C 417 828, 583 828, 666 414
                 C 749 0, 915 0, 998 414
                 C 1081 828, 1247 828, 1330 414
                 C 1413 0, 1579 0, 1664 414"
              stroke="black"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex items-center justify-center p-20">
          <motion.svg
            width="1666"
            height="829"
            viewBox="0 0 1666 829"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M2 828
                 C 200 700, 400 956,
                 600 600
                 C 800 244, 1000 956,
                 1666 0"
              stroke="black"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-12">
                What was destructed
              </h1>
              <ul className="space-y-4 text-xl text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  PayPal → Stripe
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  CSS → Tailwind
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Our own components → Shadcn
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Private Figma → public design system files
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Zoom → Google Meet
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Chrome → Safari
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Notion → Slack, Apple Notes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Buildkite → GitHub Actions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Iffy, internal → Iffy.com, Stripe Radar
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Bill.com → Mercury
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Wells Fargo → Mercury
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Elastic Transcoder → GRMC
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  support@gumroad.com → in-app live chat
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-12">TBD</h1>
              <ul className="space-y-4 text-xl text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Swift, Kotlin → React Native/Expo/Electron
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  AWS → CloudFlare, Vercel, Hetzner
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Ruby on Rails → Next on TypeScript
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-12">
            Welcome to New York
          </h1>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
              In-person by default (10 in person, 20 remote)
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
              Design engineering in person, systems engineering remote
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
              In-house, in-office legal and accounting
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
              Iteration velocity is of the essence
            </li>
          </ul>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <Image src="/2024/q4/whiteboard.png" alt="Whiteboard" fill priority />
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 border-2 border-gray-200 rounded-lg p-6 bg-white z-10">
              <h2 className="text-3xl font-bold mb-4">Gumroad</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  COSS to collect 1.5% fee above $1M/yr
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Open sourcing Gumroad on Ruby on Rails and Gumroad on Next on
                  TypeScript
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Advertising our other products within our codebase, provide AI
                  with training data
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Bounties for OSS contributors
                </li>
              </ul>
            </div>

            <div className="absolute top-0 left-0 w-64 border-2 border-gray-200 rounded-lg p-4 bg-white">
              <h2 className="text-2xl font-bold mb-4">Helper</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  $10/mo for Gumroad creators to increase sales & prevent
                  refunds
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Solving self-serve support automation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Desktop app, mobile app, and command bar interface
                </li>
              </ul>
            </div>

            <div className="absolute top-0 right-0 w-64 border-2 border-gray-200 rounded-lg p-4 bg-white">
              <h2 className="text-2xl font-bold mb-4">Iffy</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Deep Stripe integration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Outbound and in-person sales targeting 100 customers
                </li>
              </ul>
            </div>

            <div className="absolute bottom-0 left-0 w-64 border-2 border-gray-200 rounded-lg p-4 bg-white">
              <h2 className="text-2xl font-bold mb-4">Shortest</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Natural language E2E testing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Example: &quot;sign up to Gumroad and sell a product&quot;
                </li>
              </ul>
            </div>

            <div className="absolute bottom-0 right-0 w-64 border-2 border-gray-200 rounded-lg p-4 bg-white">
              <h2 className="text-2xl font-bold mb-4">Flexile</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Flexible roles with options + profit-sharing for vendors
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Bounties & challenges for contributors
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Self-serve equity distribution
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Product-market fit validation
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex">
          <div className="w-1/2 p-20 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-12">
              AI, AI, AI
            </h1>
            <div className="space-y-6 text-xl text-gray-800">
              <p>Why work for someone who&apos;s so focused on automation?</p>
              <p>Ending work in exhange for profit-sharing</p>
              <p className="font-mono">npx create-antiwork-app</p>
              <p>
                Open source all of our code, pay core maintainers to scope,
                review, QA, merge
              </p>
              <p>KPI-based compensation</p>
              <p>Reinvent work (make it more fun, creative), not end it</p>
            </div>
          </div>
          <div className="w-1/2 relative">
            <Image
              src="/2024/q4/ai.png"
              alt="AI illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            Profit-sharing
          </h1>
          <div className="space-y-6 text-xl text-gray-800">
            <p>
              Based on 409a instead of last raised valuation ($40.5M instead of
              $100M)
            </p>
            <p>Get dividends as profit-sharing on vested options ownership %</p>
            <div className="mt-8 space-y-4">
              <p className="font-semibold">Math:</p>
              <p>Gumroad 2023 net income: $8,911,000</p>
              <p>Dividend of 60%: $5,346,600</p>
              <p>Dividend yield: 22.00%</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            Minimum equity split
          </h1>
          <ul className="space-y-6 text-2xl text-gray-800">
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
              50% minimum for remote contractors
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
              20% minimum for in-office part-time employees
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
              50% minimum for in-office full-time employees, but more flexible
              to your situation
            </li>
          </ul>
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex items-center justify-center">
          <Tweet id="1750589558876705087" />
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-16">
            Retirement via Antiwork
          </h1>
          <div className="overflow-x-auto">
            <table className="text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2"></th>
                  <th className="border border-gray-300 p-2">Salary</th>
                  <th className="border border-gray-300 p-2">Equity split</th>
                  <th className="border border-gray-300 p-2">
                    Amount earned in cash
                  </th>
                  <th className="border border-gray-300 p-2">Amount saved</th>
                  <th className="border border-gray-300 p-2">409a valuation</th>
                  <th className="border border-gray-300 p-2">Dividends</th>
                  <th className="border border-gray-300 p-2">Rate of return</th>
                  <th className="border border-gray-300 p-2">Equity</th>
                  <th className="border border-gray-300 p-2">
                    Equity position
                  </th>
                  <th className="border border-gray-300 p-2">
                    Dividends for person
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 p-2">Year {i + 1}</td>
                    <td className="border border-gray-300 p-2">$250,000</td>
                    <td className="border border-gray-300 p-2">80.00%</td>
                    <td className="border border-gray-300 p-2">$50,000</td>
                    <td className="border border-gray-300 p-2">
                      ${(i + 1) * 50000}
                    </td>
                    <td className="border border-gray-300 p-2">$40,500,000</td>
                    <td className="border border-gray-300 p-2">$5,340,000</td>
                    <td className="border border-gray-300 p-2">13.19%</td>
                    <td className="border border-gray-300 p-2">$200,000</td>
                    <td className="border border-gray-300 p-2">
                      ${(i + 1) * 200000}
                    </td>
                    <td className="border border-gray-300 p-2">
                      ${(26370 * (i + 1)).toFixed(0)}
                      {i === 9
                        ? ' You\'re now earning enough to "retire"!'
                        : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">DIYPO:</h1>
          <ul className="space-y-8 text-2xl text-gray-800">
            <li>
              <span className="font-bold text-blue-600">A</span>utomate to make
              the business more valuable
            </li>
            <li>
              <span className="font-bold text-blue-600">B</span>uyback to cash
              out early investors
            </li>
            <li>
              <span className="font-bold text-blue-600">C</span>rowdfund to
              allow people to double down on our future
            </li>
            <li>
              <span className="font-bold text-blue-600">D</span>ividend to get
              everyone paid for our efforts, including me
            </li>
          </ul>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold text-gray-900">Questions?</h1>
        </div>
      ),
    },
  ];

  const searchParams = useSearchParams();
  const initialSlide = searchParams.get("slide")
    ? parseInt(searchParams.get("slide")!)
    : 1;
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [typedNumber, setTypedNumber] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const totalSlides = slides.length;

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("slide", currentSlide.toString());
    window.history.replaceState({}, "", url);
  }, [currentSlide]);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight" && currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    } else if (e.key === "ArrowLeft" && currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    } else if (/^[0-9]$/.test(e.key)) {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }

      const newTypedNumber = typedNumber + e.key;
      setTypedNumber(newTypedNumber);
      const timeout = setTimeout(() => {
        const slideNumber = parseInt(newTypedNumber);
        if (slideNumber > 0 && slideNumber <= totalSlides) {
          setCurrentSlide(slideNumber);
        }
        setTypedNumber("");
      }, 750);

      setTypingTimeout(timeout);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [currentSlide, typedNumber, typingTimeout, handleKeyPress, totalSlides]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="h-full w-full">
        <Slide
          id={currentSlide}
          currentSlide={currentSlide}
          backgroundColor={slides[currentSlide - 1].backgroundColor}
        >
          {slides[currentSlide - 1].content}
        </Slide>
      </div>
      <div
        className={`py-1 px-2 rounded fixed bottom-2 right-2 text-sm flex items-center gap-1 ${
          typedNumber
            ? "bg-black text-white opacity-100"
            : "bg-white text-black opacity-50"
        }`}
      >
        {typedNumber ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Jumping to {typedNumber}</span>
          </>
        ) : (
          `${currentSlide} / ${totalSlides}`
        )}
      </div>
    </div>
  );
}
