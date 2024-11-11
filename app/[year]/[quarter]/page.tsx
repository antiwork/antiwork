"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "@/app/components/Logo";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Slide } from "./Slide";
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
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const searchParams = useSearchParams();
  const [equitySplit, setEquitySplit] = useState(20);
  const [annualCompensation, setAnnualCompensation] = useState(250000);
  const [yearlyGrowth, setYearlyGrowth] = useState(0);

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

    let bg, txt;
    do {
      bg = generateRandomColor();
      txt = generateRandomColor();
    } while (getContrastRatio(bg, txt) < 4.5);

    setBackgroundColor(bg);
    setTextColor(txt);
  }, []);

  useEffect(() => {
    generateRandomColors();
  }, [generateRandomColors]);

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
        <div className="text-center space-y-6">
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
        <main className="prose mx-auto p-4 sm:p-8 flex-1 w-full max-w-3xl relative z-10">
          <label className="block mt-8 mb-8">
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
            As Paul states in Founder Mode, "It seems to be working.
            Airbnb&apos;s free cash flow margin is now among the best in Silicon
            Valley."
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
            That&apos;s what Paul refers to in his essay as "manager mode,"
            which is already commonly taught in business school and practiced in
            all kinds of businesses around the world. Therefore, optimization
            isn&apos;t enough to build the singular businesses investors like
            Paul are hoping to invest in.
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
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-12">
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

            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-12">TBD</h1>
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
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-1/2 p-20">
            <h1 className="text-4xl font-bold text-gray-800 mb-12">
              Welcome to New York
            </h1>
            <div className="prose">
              <ul>
                <li>In-person by default (10 in person, 20 remote)</li>
                <li>
                  Design engineering in person, systems engineering remote
                </li>
                <li>In-house, in-office legal and accounting</li>
                <li>Iteration velocity is of the essence</li>
              </ul>
            </div>
          </div>
          <div className="w-1/2 relative h-full group">
            <Image
              src="/2024/q4/whiteboard.png"
              alt="Whiteboard"
              fill
              priority
              className="object-cover group-hover:object-contain group-hover:p-8 transition-all duration-200"
            />
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex gap-8 w-full max-w-7xl mx-auto px-8">
            <div className="flex-1 bg-white rounded-lg shadow-sm p-8 border border-gray-200 flex flex-col transition-all duration-300 hover:flex-[2] group">
              <div className="h-12 flex items-center mb-6">
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

            <div className="flex-1 bg-white rounded-lg shadow-sm p-8 border border-gray-200 flex flex-col transition-all duration-300 hover:flex-[2] group">
              <div className="h-12 flex items-center mb-6">
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

            <div className="flex-1 bg-white rounded-lg shadow-sm p-8 border border-gray-200 flex flex-col transition-all duration-300 hover:flex-[2] group">
              <div className="h-12 flex items-center mb-6">
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

            <div className="flex-1 bg-white rounded-lg shadow-sm p-8 border border-gray-200 flex flex-col transition-all duration-300 hover:flex-[2] group">
              <div className="h-12 flex items-center mb-6">
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

            <div className="flex-1 bg-white rounded-lg shadow-sm p-8 border border-gray-200 flex flex-col transition-all duration-300 hover:flex-[2] group">
              <div className="h-12 flex items-center mb-6">
                <h2 className="text-xl font-bold">
                  <span className="ml-2 font-semibold text-gray-900 flex items-center">
                    <span className="text-2xl transform scale-y-75">S</span>
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
        <div className="w-full h-full flex">
          <div className="w-1/2 p-20 flex flex-col justify-center">
            <div className="prose">
              <h1 className="text-4xl font-bold text-gray-900 mb-12">
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
        <div className="w-full h-full flex">
          <div className="w-1/2 h-full flex flex-col justify-center p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Retirement via Profit-sharing
            </h1>

            <div className="prose mb-8">
              <p>
                Based on our 409a valuation of $40,500,000 and 2023 dividends of
                $5,340,000, we have a dividend yield of 13.18%.
              </p>
            </div>

            <div className="w-full max-w-xl mb-8">
              <div className="flex justify-between mb-2">
                <span>Annual compensation: ${annualCompensation}</span>
              </div>
              <Slider
                defaultValue={[250000]}
                max={500000}
                min={0}
                step={1000}
                onValueChange={(value) => setAnnualCompensation(value[0])}
              />
            </div>
            <div className="w-full max-w-xl mb-8">
              <div className="flex justify-between mb-2">
                <span>Equity Split: {equitySplit}%</span>
              </div>
              <Slider
                defaultValue={[20]}
                max={100}
                min={0}
                step={1}
                onValueChange={(value) => setEquitySplit(value[0])}
              />
            </div>
            <div className="w-full max-w-xl mb-8">
              <div className="flex justify-between mb-2">
                <span>Yearly Growth: {yearlyGrowth}%</span>
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
              <table className="text-sm border-collapse">
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
          <div className="w-1/2 h-full flex items-center justify-center p-8">
            <ChartContainer
              config={chartConfig}
              className="min-h-[200px] w-full"
            >
              <BarChart
                accessibilityLayer
                data={calculateTableData(equitySplit)}
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
                  label={{ value: "Amount ($)", angle: -90, position: "left" }}
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
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
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">DIYPO</h1>
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
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold text-gray-900">Questions?</h1>
        </div>
      ),
    },
  ];

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

  useEffect(() => {
    generateRandomColors();
  }, [currentSlide, generateRandomColors]);

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
