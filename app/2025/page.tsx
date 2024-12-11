"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Logo } from "@/app/components/Logo";
import { Loader2 } from "lucide-react";
import { Slide } from "@/components/Slide";
import Link from "next/link";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
} from "@/components/ui/chart";

const creatorEarningsConfig = {
  creatorEarnings: {
    label: "Creator Earnings",
    color: "#1d4ed8",
  },
} satisfies ChartConfig;

const financialsConfig = {
  creatorEarnings: {
    label: "Creator Earnings",
    color: "#1d4ed8",
  },
  revenue: {
    label: "Revenue",
    color: "#2563eb",
  },
  profit: {
    label: "Gross Profit",
    color: "#60a5fa",
  },
  netIncome: {
    label: "Net Income",
    color: "#3b82f6",
  },
  dividends: {
    label: "Dividends Issued",
    color: "#bfdbfe",
  },
  buyback: {
    label: "Share Buyback",
    color: "#93c5fd",
  },
} satisfies ChartConfig;

const financialsWithoutCreatorConfig = {
  revenue: {
    label: "Revenue",
    color: "#2563eb",
  },
  profit: {
    label: "Gross Profit",
    color: "#60a5fa",
  },
  netIncome: {
    label: "Net Income",
    color: "#3b82f6",
  },
  dividends: {
    label: "Dividends Issued",
    color: "#bfdbfe",
  },
  buyback: {
    label: "Share Buyback",
    color: "#93c5fd",
  },
} satisfies ChartConfig;

const creatorEarningsData = [
  {
    year: 2022,
    creatorEarnings: 88000000,
  },
  {
    year: 2023,
    creatorEarnings: 100000000,
  },
  {
    year: 2024,
    creatorEarnings: 120000000,
  },
];

const financialsData = [
  {
    year: 2022,
    creatorEarnings: 88000000,
    revenue: 11000000,
    profit: 5340000,
    netIncome: 4800000,
    dividends: 2880000,
    buyback: 0,
  },
  {
    year: 2023,
    creatorEarnings: 100000000,
    revenue: 12500000,
    profit: 6100000,
    netIncome: 5490000,
    dividends: 3294000,
    buyback: 1000000,
  },
  {
    year: 2024,
    creatorEarnings: 120000000,
    revenue: 15000000,
    profit: 7500000,
    netIncome: 6750000,
    dividends: 4050000,
    buyback: 0,
  },
];

export default function AnnualMeeting() {
  const searchParams = useSearchParams();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const slides = [
    {
      backgroundColor: "bg-white",
      content: (
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div>
              <Link href="/">
                <Logo size={500} color="black" background="transparent" />
              </Link>
            </div>
          </div>
          <h2 className="text-4xl text-black font-bold mt-8">
            2025 Public Annual Meeting
          </h2>
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            Creator Earnings Growth
          </h1>
          <div className="w-full h-[400px]">
            <ChartContainer
              config={creatorEarningsConfig}
              className="h-[600px] w-full"
            >
              <BarChart
                data={creatorEarningsData}
                margin={{ top: 20, right: 30, left: 40, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                />
                <ChartTooltip />
                <ChartLegend />
                <Bar
                  dataKey="creatorEarnings"
                  fill={creatorEarningsConfig.creatorEarnings.color}
                  name="Creator Earnings"
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            Financial Performance with Creator Earnings
          </h1>
          <div className="w-full h-[400px]">
            <ChartContainer
              config={financialsConfig}
              className="h-[600px] w-full"
            >
              <BarChart
                data={financialsData}
                margin={{ top: 20, right: 30, left: 40, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                />
                <ChartTooltip />
                <ChartLegend />
                <Bar
                  dataKey="creatorEarnings"
                  fill={financialsConfig.creatorEarnings.color}
                  name="Creator Earnings"
                />
                <Bar
                  dataKey="revenue"
                  fill={financialsConfig.revenue.color}
                  name="Revenue"
                />
                <Bar
                  dataKey="profit"
                  fill={financialsConfig.profit.color}
                  name="Gross Profit"
                />
                <Bar
                  dataKey="netIncome"
                  fill={financialsConfig.netIncome.color}
                  name="Net Income"
                />
                <Bar
                  dataKey="dividends"
                  fill={financialsConfig.dividends.color}
                  name="Dividends Issued"
                />
                <Bar
                  dataKey="buyback"
                  fill={financialsConfig.buyback.color}
                  name="Share Buyback"
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            Financial Performance
          </h1>
          <div className="w-full h-[400px]">
            <ChartContainer
              config={financialsWithoutCreatorConfig}
              className="h-[600px] w-full"
            >
              <BarChart
                data={financialsData}
                margin={{ top: 20, right: 30, left: 40, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                />
                <ChartTooltip />
                <ChartLegend />
                <Bar
                  dataKey="revenue"
                  fill={financialsWithoutCreatorConfig.revenue.color}
                  name="Revenue"
                />
                <Bar
                  dataKey="profit"
                  fill={financialsWithoutCreatorConfig.profit.color}
                  name="Gross Profit"
                />
                <Bar
                  dataKey="netIncome"
                  fill={financialsWithoutCreatorConfig.netIncome.color}
                  name="Net Income"
                />
                <Bar
                  dataKey="dividends"
                  fill={financialsWithoutCreatorConfig.dividends.color}
                  name="Dividends Issued"
                />
                <Bar
                  dataKey="buyback"
                  fill={financialsWithoutCreatorConfig.buyback.color}
                  name="Share Buyback"
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            2024 Review
          </h1>
          <div className="prose">
            <ul>
              <li>Launched Helper, Iffy, and Shortest</li>
              <li>Flexile became an equity management tool</li>
              <li>Gumroad got a lot better, but didn&apos;t grow</li>
              <li>Opened NYC office with 4 in-person team members</li>
              <li>Grew revenue X% YoY to $XXM ARR</li>
              <li>Distributed $5.34M in profit sharing</li>
            </ul>
            <blockquote className="text-sm text-gray-600 mt-8 italic">
              &quot;If all 3 work (few million ARR), it would be nice to have
              ≈36 people work across the 3 products (up from 28 people
              today).&quot;
              <br />
              <span className="not-italic">— January 2023 Update</span>
            </blockquote>
            <p className="text-sm text-gray-600 mt-2">
              (Narrator: this didn&apos;t happen.)
            </p>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            2025 Product Focus
          </h1>
          <div className="prose">
            <ul>
              <li>
                Achieve product-market fit for existing products before
                launching new ones
              </li>
              <li>
                Narrow scope of each product to core mission
                <ul>
                  <li>Gumroad: Core creator experience to reduce churn</li>
                  <li>Helper: Best possible responses, not full platform</li>
                  <li>Flexile: Profit sharing for open source contributors</li>
                  <li>Iffy: Little-code integrations</li>
                  <li>Shortest: Replace e2e tests with natural language</li>
                </ul>
              </li>
              <li>
                Open source projects and build commercial open source model
              </li>
              <li>New products must be additive to existing ecosystem</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-white",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            2025 Organization Focus
          </h1>
          <div className="prose">
            <ul>
              <li>Build open source community and enterprise features</li>
              <li>
                Introduce targeted sync meetings for design and engineering
              </li>
              <li>Grow IRL team to 10 people</li>
              <li>Increse IRL vibes</li>
              <li>Product owners empowered to drive development</li>
              <li>Design engineering in-office, systems engineering remote</li>
              <li>
                Regular design/engineering syncs for feedback and planning
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            Why Open Source Everything?
          </h1>
          <div className="prose">
            <ul>
              <li>Compete with larger players through community</li>
              <li>Focus internal team on highest-impact work</li>
              <li>Community-driven improvements and features</li>
              <li>Risky but necessary to scale with small team</li>
              <li>Largest customers subsidize smallest ones</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <div className="relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <span className="text-xl font-bold">AI</span>
            </div>
            <div className="absolute bottom-[300px] right-0 -translate-x-12 rotate-[66deg] origin-bottom-left">
              <span className="text-xl font-bold">Serverless</span>
            </div>
            <div className="absolute bottom-[300px] left-0 translate-x-8 -rotate-[66deg] origin-bottom-right">
              <span className="text-xl font-bold">Open source</span>
            </div>
            <svg
              width={500}
              height={500}
              viewBox="0 0 28 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="14,2.5 22,21.5 6,21.5" />
              <polygon points="14,2.5 22,21.5 6,21.5" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <div className="relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <span className="text-xl font-bold">Best</span>
            </div>
            <div className="absolute bottom-[300px] right-0 -translate-x-12 rotate-[66deg] origin-bottom-left">
              <span className="text-xl font-bold">Fast</span>
            </div>
            <div className="absolute bottom-[300px] left-0 translate-x-8 -rotate-[66deg] origin-bottom-right">
              <span className="text-xl font-bold">Free</span>
            </div>
            <svg
              width={500}
              height={500}
              viewBox="0 0 28 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="14,2.5 22,21.5 6,21.5" />
              <polygon points="14,2.5 22,21.5 6,21.5" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            Gumroad: Run Your Website, Store, Marketplace
          </h1>
          <div className="grid grid-cols-2 gap-8 w-[40%]">
            <div className="border-r pr-8">
              <h2 className="font-bold mb-4">2024</h2>
              <ul>
                <li className="line-through">✓ Merchant of Record</li>
                <li className="line-through">
                  ✓ Collabs, bundles, reviews, and wishlists
                </li>
                <li className="line-through">✓ Content editor</li>
                <li className="line-through">✓ Profile/website builder</li>
                <li className="line-through">✓ Discovery on homepage</li>
                <li className="line-through">✓ Abandoned cart emails</li>
                <li className="line-through">
                  ✓ Coffee, tipping, calls, commissions
                </li>
              </ul>
            </div>

            <div className="pl-8">
              <h2 className="font-bold mb-4">2025</h2>
              <ul className="space-y-4">
                <li>
                  Open Source:
                  <ul className="ml-6 space-y-2 mt-2">
                    <li>
                      Free-to-use under $1M/yr in total revenue, $10M/yr in
                      marketplace GMV
                    </li>
                    <li>Pay-to-use above $1M/yr</li>
                    <li>Largest customers subsidize smallest ones</li>
                  </ul>
                </li>

                <li>
                  Features:
                  <ul className="ml-6 space-y-2 mt-2">
                    <li>Enhanced email marketing and analytics</li>
                    <li>Social proof widgets</li>
                    <li>Inline Helper-powered support</li>
                    <li>Profile and product page customization</li>
                    <li>Community features</li>
                    <li>AI product creation tools</li>
                  </ul>
                </li>

                <li>Mobile and desktop apps</li>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            Flexile: Manage Your Team, Investors, and Equity
          </h1>
          <div className="grid grid-cols-2 gap-8 w-[40%]">
            <div className="border-r pr-8">
              <h2 className="font-bold mb-4">2024</h2>
              <ul>
                <li className="line-through">✓ Cap table management</li>
                <li className="line-through">✓ Equity grants and vesting</li>
                <li className="line-through">✓ Team updates</li>
                <li className="line-through">✓ Shareholder communications</li>
              </ul>
            </div>

            <div className="pl-8">
              <h2 className="font-bold mb-4">2025</h2>
              <ul className="space-y-4">
                <li>
                  Open Source:
                  <ul className="ml-6 space-y-2 mt-2">
                    <li>
                      Free-to-use under 2,000 shareholders, $50M in market cap
                    </li>
                  </ul>
                </li>

                <li>
                  Features:
                  <ul className="ml-6 space-y-2 mt-2">
                    <li>Buybacks, dividends, and crowdfunding</li>
                    <li>Team and performance management</li>
                    <li>Compliance automation</li>
                    <li>API integrations</li>
                    <li>Analytics and reporting</li>
                  </ul>
                </li>

                <li>Mobile and desktop apps</li>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            Helper: Help Your Customers Help Themselves
          </h1>
          <div className="grid grid-cols-2 gap-8 w-[40%]">
            <div className="border-r pr-8">
              <h2 className="font-bold mb-4">2024</h2>
              <ul>
                <li className="line-through">✓ AI-powered support</li>
                <li className="line-through">✓ In-app live chat</li>
                <li className="line-through">✓ Tool usage</li>
                <li className="line-through">✓ Slack integration</li>
              </ul>
            </div>

            <div className="pl-8">
              <h2 className="font-bold mb-4">2025</h2>
              <ul className="space-y-4">
                <li>
                  Open Source:
                  <ul className="ml-6 space-y-2 mt-2">
                    <li>Free-to-use under $1M/yr in total revenue</li>
                  </ul>
                </li>

                <li>
                  Features:
                  <ul className="ml-6 space-y-2 mt-2">
                    <li>Best possible responses in 5 minutes or less</li>
                    <li>Manager feedback</li>
                    <li>Agent personas</li>
                    <li>Auto-assigning</li>
                    <li>Analytics and reporting</li>
                    <li>Dashboard first, inbox second</li>
                  </ul>
                </li>

                <li>Mobile and desktop apps</li>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            Iffy: Block Bad Actors
          </h1>
          <div className="grid grid-cols-2 gap-8 w-[40%]">
            <div className="border-r pr-8">
              <h2 className="font-bold mb-4">2024</h2>
              <ul>
                <li className="line-through">✓ Shipped v1</li>
                <li className="line-through">✓ Shipped v2</li>
                <li className="line-through">✓ Rulesets</li>
                <li className="line-through">✓ Emails</li>
                <li className="line-through">✓ Appeals</li>
                <li className="line-through">✓ Analytics</li>
              </ul>
            </div>

            <div className="pl-8">
              <h2 className="font-bold mb-4">2025</h2>
              <ul className="space-y-4">
                <li>
                  Open Source:
                  <ul className="ml-6 space-y-2 mt-2">
                    <li>
                      Free-to-use under $1M/yr in total revenue, $10M/yr in
                      marketplace GMV
                    </li>
                  </ul>
                </li>

                <li>
                  Features:
                  <ul className="ml-6 space-y-2 mt-2">
                    <li>Stripe integration</li>
                    <li>No-code integrations</li>
                    <li>Code integrations</li>
                    <li>More accurate AI</li>
                  </ul>
                </li>

                <li>Mobile and desktop apps</li>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            Shortest: AI QA
          </h1>
          <div className="grid grid-cols-2 gap-8 w-[40%]">
            <div className="border-r pr-8">
              <h2 className="font-bold mb-4">2024</h2>
              <ul>
                <li className="line-through">✓ Shipped v1</li>
                <li className="line-through">✓ Used for Iffy</li>
              </ul>
            </div>

            <div className="pl-8">
              <h2 className="font-bold mb-4">2025</h2>
              <ul className="space-y-4">
                <li>Free-to-use, winner-take-all</li>
                <li>Used for Helper</li>
                <li>Used for Flexile</li>
                <li>Used for Gumroad</li>
                <li>Managed CI service</li>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-12">
            Antiwork Software
          </h1>
          <div className="prose">
            <ul>
              <li>
                Make the best software ubiquitous through AI, open source, and
                serverless
              </li>
              <li>Power every business like WordPress powers the internet</li>
              <li>Save time spent on repetitive tasks</li>
              <li>Save money spent on expensive software</li>
              <li>Save energy spent on business operations</li>
              <li>Make Work Play</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      backgroundColor: "bg-gray-50",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Introducing...
          </h1>

          <pre className="font-mono bg-gray-100 rounded-lg p-4">
            <code>
              <span className="text-gray-500">npx</span> create-antiwork-app
            </code>
          </pre>
          <div className="text-gray-700">
            <div className="flex gap-4 mt-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                TypeScript
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                React
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                Next.js
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                Tailwind
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                Vercel
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                Stripe
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                Resend
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                Clerk
              </span>
            </div>
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
