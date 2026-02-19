"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const balanceData = [
  { year: "2011", cash: 843976 },
  { year: "2012", cash: 7182012 },
  { year: "2013", cash: 5326748 },
  { year: "2014", cash: 1966792 },
  { year: "2015", cash: 1158033 },
  { year: "2016", cash: 1309827 },
  { year: "2017", cash: 1748831 },
  { year: "2018", cash: 2481407 },
  { year: "2019", cash: 3324634 },
  { year: "2020", cash: 5595845 },
  { year: "2021", cash: 9135812 },
  { year: "2022", cash: 8810331 },
  { year: "2023", cash: 16100626 },
  { year: "2024", cash: 13821886 },
  { year: "2025", cash: 6153269 },
];

export default function SlideBalanceSheet() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-8 flex h-16 shrink-0 flex-col items-center justify-center md:mt-12 md:h-24">
        <h1 className="text-2xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Balance Sheet
        </h1>
      </div>

      <div className="flex min-h-0 w-full flex-1 px-4">
        {/* Left side - Chart (3/4) */}
        <div className="flex w-3/4 items-center justify-center">
          <ResponsiveContainer width="100%" height="80%">
            <BarChart
              data={balanceData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="currentColor"
                opacity={0.1}
              />
              <XAxis
                dataKey="year"
                stroke="currentColor"
                tick={{ fontSize: 12 }}
              />
              <YAxis
                stroke="currentColor"
                tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`}
                tick={{ fontSize: 14 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "16px",
                }}
                formatter={(value: number) => [
                  `$${(value / 1000000).toFixed(2)}M`,
                  "Cash",
                ]}
              />
              <Bar
                dataKey="cash"
                fill="#3b82f6"
                name="Cash"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Right side - Key outflows (1/4) */}
        <div className="flex w-1/4 flex-col justify-center border-l border-gray-200 pl-6 dark:border-gray-700">
          <div className="rounded-xl bg-blue-50 p-5 dark:bg-blue-950">
            <p className="text-3xl font-bold text-blue-600 md:text-4xl dark:text-blue-400">
              $6.2M
            </p>
            <p className="mt-2 text-base text-gray-600 md:text-lg dark:text-gray-400">
              2025 Cash at close
            </p>
          </div>

          <div className="mt-8">
            <p className="text-base font-semibold text-gray-700 md:text-lg dark:text-gray-300">
              Key 2025 outflows:
            </p>
            <ul className="mt-4 space-y-3 text-base text-gray-600 md:text-lg dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2 text-gray-400">•</span>
                <span>
                  <strong className="text-gray-900 dark:text-white">
                    $6.0M
                  </strong>{" "}
                  Stock repurchases
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-400">•</span>
                <span>
                  <strong className="text-gray-900 dark:text-white">
                    $2.5M
                  </strong>{" "}
                  Dividends
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gray-400">•</span>
                <span>
                  <strong className="text-gray-900 dark:text-white">
                    $1.9M
                  </strong>{" "}
                  Investments
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
