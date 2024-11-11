"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
          src="/app/2024/q4/nomeetings.png"
          alt="No meetings"
          width={563}
          height={762}
          className="p-8 h-full object-contain"
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
        <Image
          src="/app/2024/q4/godmode.png"
          alt="God mode"
          width={626}
          height={750}
          className="p-8 h-full object-contain"
        />
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex items-center justify-center p-20">
          <motion.svg
            width="1266"
            height="217"
            viewBox="0 0 1266 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              x1="1.58578"
              y1="214.909"
              x2="214.909"
              y2="1.58582"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
            />
            <motion.line
              x1="214.909"
              y1="4.41431"
              x2="422.586"
              y2="212.091"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.line
              x1="422.586"
              y1="214.909"
              x2="635.909"
              y2="1.58582"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
            />
            <motion.line
              x1="635.909"
              y1="4.41431"
              x2="843.586"
              y2="212.091"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.9 }}
            />
            <motion.line
              x1="843.586"
              y1="214.909"
              x2="1056.91"
              y2="1.58582"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 1.2 }}
            />
            <motion.line
              x1="1056.91"
              y1="4.41431"
              x2="1264.59"
              y2="212.091"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 1.5 }}
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
            <motion.line
              y1="-2"
              x2="427.913"
              y2="-2"
              transform="matrix(0.96515 -0.261698 0.344722 0.938705 2 828.323)"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
            />
            <motion.line
              x1="414.164"
              y1="714.801"
              x2="837.164"
              y2="520.183"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.line
              y1="-2"
              x2="493.905"
              y2="-2"
              transform="matrix(0.848341 -0.52945 0.645543 0.763724 838 521.562)"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
            />
            <motion.line
              x1="1245.94"
              y1="263.801"
              x2="1664.94"
              y2="2.30333"
              stroke="black"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.9 }}
            />
          </motion.svg>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-12">
            What was destructed?
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
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-12">TBD</h1>
          <ul className="space-y-3">
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
              Design engineering in person, systems remote
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
        <Image
          src="/app/2024/q4/whiteboard.png"
          alt="Whiteboard"
          width={1920}
          height={1080}
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-12">
            Five Products
          </h1>
          <div className="grid grid-cols-1 gap-12 text-xl text-gray-700">
            <div>
              <h2 className="text-2xl font-bold mb-4">Gumroad</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  COSS to collect 3.5% fee above $1MM+
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Open sourcing both Ruby on Rails and Next.js TypeScript
                  codebases
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-4"></div>
                  Advertising + products subsidized by trading data
                </li>
              </ul>
            </div>

            <div>
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

            <div>
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

            <div>
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

            <div>
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
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">AI, AI, AI</h1>
          <div className="space-y-6 text-xl text-gray-800 mb-12">
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
          <Image
            src="/app/2024/q4/ai.png"
            alt="AI illustration"
            width={500}
            height={300}
            className="object-contain"
          />
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
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-16">
            Retirement via Antiwork
          </h1>
          <Image
            src="/app/2024/q4/retirement.png"
            alt="Retirement via Antiwork spreadsheet"
            width={800}
            height={400}
            className="object-contain"
          />
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
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="h-full w-full"
        >
          <Slide
            id={currentSlide}
            currentSlide={currentSlide}
            backgroundColor={slides[currentSlide - 1].backgroundColor}
          >
            {slides[currentSlide - 1].content}
          </Slide>
        </motion.div>
      </AnimatePresence>

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
