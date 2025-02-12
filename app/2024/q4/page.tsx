"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Logo } from "@/app/components/Logo";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Slide } from "@/components/Slide";
import { Tweet } from "react-tweet";
import Link from "next/link";
import { Slider } from "@/components/ui/slider";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  salary: {
    label: "Annual Cash",
    color: "#2563eb",
  },
  dividends: {
    label: "Profit Sharing",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function QuarterlyAllHands() {
  const [equitySplit, setEquitySplit] = useState(20);
  const [annualCompensation, setAnnualCompensation] = useState(250000);
  const [yearlyGrowth, setYearlyGrowth] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const calculateTableData = (equityPercentage: number) => {
    return [...Array(10)].map((_, i) => {
      const growthMultiplier = Math.pow(1 + yearlyGrowth / 100, i);
      const yearlyCompensation = annualCompensation;
      const yearlyDividends = 5340000 * growthMultiplier;

      const salary = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(yearlyCompensation * (1 - equityPercentage / 100));
      const equityPosition = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(((yearlyCompensation * equityPercentage) / 100) * (i + 1));
      const percentOfCompanyOwned = Number(
        (
          ((((yearlyCompensation * equityPercentage) / 100) * (i + 1)) /
            40500000) *
          100
        ).toFixed(2)
      );
      const dividends = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format((yearlyDividends * percentOfCompanyOwned) / 100);

      return {
        year: 2025 + i,
        salary: Number(salary.replace(/[^0-9.-]+/g, "")),
        equityPosition: equityPosition,
        dividends: Number(dividends.replace(/[^0-9.-]+/g, "")),
        percentOfCompanyOwned: percentOfCompanyOwned,
      };
    });
  };

  const slides = [
    {
      backgroundColor: "bg-black",
      content: (
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <div>
              <Link href="/">
                <Logo size={500} color="white" background="transparent" />
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-[2px]">
              <Logo size={50} color="black" background="transparent" />
            </div>
            <span className="text-5xl font-bold">Antiwork</span>
          </div>
          <h2 className="text-2xl font-normal text-gray-500 dark:text-gray-400">
            Transforming Work and Compensation
          </h2>
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <main className="prose relative z-10 mx-auto w-full max-w-3xl flex-1 p-4 sm:p-8">
          <label className="mb-8 mt-8 block">
            Jan 7, 2021 by{" "}
            <a href="https://sahillavingia.com/work">
              <u>Sahil Lavingia</u>
            </a>
          </label>

          <div className="relative">
            <h1>No Meetings, No Deadlines, No Full-Time Employees</h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2, duration: 0.5 }}
              style={{
                height: "5px",
                background: "black",
                position: "absolute",
                top: "100%",
                transform: "translateY(-50%)",
                marginTop: "-57px",
              }}
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "27%" }}
              transition={{ delay: 2.5, duration: 0.5 }}
              style={{
                height: "5px",
                background: "black",
                position: "absolute",
                top: "100%",
                transform: "translateY(-50%)",
                marginTop: "-19px",
              }}
            />
          </div>

          <p>
            I started Gumroad in 2011. In 2015, we reached a peak of 23
            full-time employees. In 2016, after{" "}
            <a href="https://sahillavingia.com/reflecting">failing</a> to raise
            more money, I ended up back where I began: a one-person company.
          </p>
          <p>
            Today, when I&apos;m asked how many people work at Gumroad, I
            respond with &quot;ten or so.&quot; That&apos;s how I convert the
            number of people we have into what others expect. But the truth is
            more complicated:
          </p>
          <p>If we include everyone who works on Gumroad, it&apos;s 25.</p>
          <p>If we include full-time employees, it&apos;s none. Not even me.</p>
          <p>We have no meetings, and no deadlines either.</p>
          <p>
            And it&apos;s working: our creators earn over $175 million a year,
            and we generate $11 million in annualized revenue, growing 85%
            year-over-year.
          </p>
        </main>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <main className="prose relative z-10 mx-auto w-full max-w-3xl flex-1 p-4 sm:p-8">
          <label className="mb-8 mt-8 block">
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
            As Paul states in Founder Mode, &quot;It seems to be working.
            Airbnb&apos;s free cash flow margin is now among the best in Silicon
            Valley.&quot;
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
            That&apos;s what Paul refers to in his essay as &quot;manager
            mode,&quot; which is already commonly taught in business school and
            practiced in all kinds of businesses around the world. Therefore,
            optimization isn&apos;t enough to build the singular businesses
            investors like Paul are hoping to invest in.
          </p>

          <p>The third point of god mode defines founder mode: destruction.</p>

          <p>
            Destruction is akin to invasive surgery, and similar to surgery,
            it&apos;s only possible with a god-like omniscience about the entire
            system.
          </p>
        </main>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="flex h-full w-full flex-col items-center justify-center p-20">
          <div className="grid w-full max-w-7xl grid-cols-2 gap-40">
            <div className="flex flex-col items-center">
              <h1 className="mb-12 text-4xl font-bold text-gray-800">
                What was destructed
              </h1>
              <div className="prose">
                <ul>
                  <li>PayPal → Stripe</li>
                  <li>CSS → Tailwind</li>
                  <li>Our own components → Shadcn</li>
                  <li>Private Figma → public design system files</li>
                  <li>Zoom → Google Meet</li>
                  <li>Chrome → Safari</li>
                  <li>Notion → Slack, Apple Notes</li>
                  <li>Buildkite → GitHub Actions</li>
                  <li>Iffy, internal → Iffy.com, Stripe Radar</li>
                  <li>Bill.com → Mercury</li>
                  <li>Wells Fargo → Mercury</li>
                  <li>Elastic Transcoder → GRMC</li>
                  <li>support@gumroad.com → in-app live chat</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="mb-12 text-4xl font-bold text-gray-800">TBD</h1>
              <div className="prose">
                <ul>
                  <li>Swift, Kotlin → React Native/Expo/Electron</li>
                  <li>AWS → CloudFlare, Vercel, Hetzner</li>
                  <li>Ruby on Rails → Next on TypeScript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <div className="w-1/2 p-20">
            <h1 className="mb-12 text-4xl font-bold text-gray-800">
              Welcome to New York
            </h1>
            <div className="prose">
              <ul>
                <li>In-person by default (10 in person, 20 remote)</li>
                <li>
                  Design engineering in-person, systems engineering remote
                </li>
                <li>In-house, in-office legal and accounting</li>
                <li>Iteration velocity is of the essence</li>
              </ul>
            </div>
          </div>
          <div className="group relative h-full w-1/2">
            <Image
              src="/2024/q4/whiteboard.png"
              alt="Whiteboard"
              fill
              priority
              className="object-cover transition-all duration-200 group-hover:object-contain group-hover:p-8"
            />
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <div className="mx-auto flex w-full max-w-7xl gap-8 px-8">
            <div className="group flex flex-1 flex-col rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:flex-[2]">
              <div className="mb-6 flex h-12 items-center">
                <Image
                  src="/2024/q4/Gumroad.svg"
                  alt="Gumroad"
                  width={400}
                  height={48}
                />
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>COSS to collect 1.5% fee above $1M/yr</li>
                <li>Open sourcing Gumroad (Rails + Next.js)</li>
                <li>Advertising products within codebase</li>
                <li>Bounties for OSS contributors</li>
              </ul>
            </div>

            <div className="group flex flex-1 flex-col rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:flex-[2]">
              <div className="mb-6 flex h-12 items-center">
                <Image
                  src="/2024/q4/Flexile.svg"
                  alt="Flexile"
                  width={143}
                  height={48}
                />
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Flexible roles with options</li>
                <li>Bounties & challenges</li>
                <li>Self-serve equity distribution</li>
                <li>Product-market fit validation</li>
              </ul>
            </div>

            <div className="group flex flex-1 flex-col rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:flex-[2]">
              <div className="mb-6 flex h-12 items-center">
                <Image
                  src="/2024/q4/Helper.svg"
                  alt="Helper"
                  width={166}
                  height={48}
                />
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>$10/mo for Gumroad creators</li>
                <li>Self-serve support automation</li>
                <li>Desktop, mobile & command bar</li>
              </ul>
            </div>

            <div className="group flex flex-1 flex-col rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:flex-[2]">
              <div className="mb-6 flex h-12 items-center">
                <Image
                  src="/2024/q4/iffy.svg"
                  alt="Iffy"
                  width={170}
                  height={48}
                />
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Deep Stripe integration</li>
                <li>Outbound & in-person sales</li>
                <li>Targeting 100 customers</li>
              </ul>
            </div>

            <div className="group flex flex-1 flex-col rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:flex-[2]">
              <div className="mb-6 flex h-12 items-center">
                <h2 className="text-xl font-bold">
                  <span className="ml-2 flex items-center font-semibold text-gray-900">
                    <span className="scale-y-75 transform text-2xl">S</span>
                    <span className="text-xl">hortest</span>
                  </span>
                </h2>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Natural language E2E testing</li>
                <li>
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
        <div className="flex h-full w-full">
          <div className="flex w-1/2 flex-col justify-center p-20">
            <div className="prose">
              <h1 className="mb-12 text-4xl font-bold text-gray-900">
                AI, AI, AI
              </h1>
              <ul>
                <li>
                  Why work for someone who&apos;s so focused on automation?
                </li>
                <li>Ending work in exhange for profit-sharing</li>
                <li>
                  Open source all of our code, pay core team to scope, QA, ship
                </li>
                <li>Performance-based compensation</li>
                <li>End today&apos;s work, not tomorrow&apos;s</li>
              </ul>
            </div>
          </div>
          <div className="relative w-1/2">
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
      backgroundColor: "bg-white",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <Tweet id="1750589558876705087" />
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="flex h-full w-full">
          <div className="flex h-full w-1/2 flex-col justify-center p-8">
            <h1 className="mb-8 text-4xl font-bold text-gray-900">
              Retirement via Profit-sharing
            </h1>

            <div className="prose mb-8">
              <p>
                Based on our 409a valuation of $40,500,000 and 2023 dividends of
                $5,340,000, we have a dividend yield of 13.18%.
              </p>
            </div>

            <div className="mb-8 w-full max-w-xl">
              <div className="mb-2 flex justify-between">
                <span>
                  Annual compensation: ${annualCompensation.toLocaleString()}
                </span>
              </div>
              <Slider
                defaultValue={[250000]}
                max={500000}
                min={0}
                step={1000}
                onValueChange={(value) => setAnnualCompensation(value[0])}
              />
            </div>
            <div className="mb-8 w-full max-w-xl">
              <div className="mb-2 flex justify-between">
                <span>Equity split: {equitySplit}%</span>
              </div>
              <Slider
                defaultValue={[20]}
                max={100}
                min={0}
                step={1}
                onValueChange={(value) => setEquitySplit(value[0])}
              />
            </div>
            <div className="mb-8 w-full max-w-xl">
              <div className="mb-2 flex justify-between">
                <span>Yearly growth: {yearlyGrowth}%</span>
              </div>
              <Slider
                defaultValue={[0]}
                max={100}
                min={0}
                step={1}
                onValueChange={(value) => setYearlyGrowth(value[0])}
              />
            </div>

            <div className="overflow-x-auto">
              <table className="border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Year</th>
                    <th className="border border-gray-300 p-2">
                      Annual salary
                    </th>
                    <th className="border border-gray-300 p-2">
                      Equity position
                    </th>
                    <th className="border border-gray-300 p-2">
                      Percent of company owned
                    </th>
                    <th className="border border-gray-300 p-2">
                      Profit-sharing cash bonus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {calculateTableData(equitySplit).map((row) => (
                    <tr
                      key={row.year}
                      className={
                        row.dividends > annualCompensation ? "bg-blue-100" : ""
                      }
                    >
                      <td className="border border-gray-300 p-2">{row.year}</td>
                      <td className="border border-gray-300 p-2">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }).format(row.salary)}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {row.equityPosition}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {row.percentOfCompanyOwned}%
                      </td>
                      <td className="border border-gray-300 p-2">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }).format(row.dividends)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex h-full w-1/2 items-center justify-center">
            <ChartContainer
              config={chartConfig}
              className="min-h-[200px] w-full"
            >
              <BarChart
                accessibilityLayer
                data={calculateTableData(equitySplit)}
                margin={{ left: 40, right: 40 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="year"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  label={{ value: "Year", position: "bottom" }}
                />
                <YAxis
                  label={{
                    value: "Amount ($)",
                    angle: -90,
                    position: "left",
                    offset: 20,
                  }}
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.toLocaleString()}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar
                  dataKey="salary"
                  fill="var(--color-salary)"
                  name="Annual Cash"
                  radius={4}
                />
                <Bar
                  dataKey="dividends"
                  fill="var(--color-dividends)"
                  name="Profit Sharing"
                  radius={4}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="flex h-full w-full flex-col items-center justify-center p-20">
          <h1 className="mb-12 text-4xl font-bold text-gray-900">DIYPO</h1>
          <div className="prose">
            <ul>
              <li>
                <span className="font-bold">A</span>utomate to make the business
                more valuable
              </li>
              <li>
                <span className="font-bold">B</span>uyback to cash out early
                investors
              </li>
              <li>
                <span className="font-bold">C</span>rowdfund to allow people to
                double down on our future
              </li>
              <li>
                <span className="font-bold">D</span>ividend to get everyone paid
                for our efforts, including me
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="text-6xl font-bold text-gray-900">Questions?</h1>
        </div>
      ),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);
  const [typedNumber, setTypedNumber] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const totalSlides = slides.length;

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

  // Handle touch events for swipe navigation
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }

    if (isRightSwipe && currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }

    setTouchEnd(null);
    setTouchStart(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [
    currentSlide,
    typedNumber,
    typingTimeout,
    handleKeyPress,
    touchStart,
    touchEnd,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  ]);

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
        className={`fixed bottom-2 right-2 flex items-center gap-1 rounded px-2 py-1 text-sm ${
          typedNumber
            ? "bg-black text-white opacity-100"
            : "bg-white text-black opacity-50"
        }`}
      >
        {typedNumber ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Jumping to {typedNumber}</span>
          </>
        ) : (
          `${currentSlide} / ${totalSlides}`
        )}
      </div>
    </div>
  );
}
