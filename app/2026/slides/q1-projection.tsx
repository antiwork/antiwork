"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";

// Q1 2025 vs Q1 2026 (projected) data from financial sheet
const q1Data = [
  {
    metric: "Revenue",
    q12025: 4510000,
    q12026: 5486000,
    changeLabel: "+22%",
  },
  {
    metric: "COGS",
    q12025: 1538000, // Revenue - Gross Profit = 4,510,000 - 2,972,000
    q12026: 1563000, // Revenue - Gross Profit = 5,486,000 - 3,923,000
    changeLabel: "+2%",
  },
  {
    metric: "EBITDA",
    q12025: 1341000,
    q12026: 2180000,
    changeLabel: "+63%",
  },
];

export default function SlideQ1Projection() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-8 flex h-16 shrink-0 flex-col items-center justify-center md:mt-12 md:h-24">
        <h1 className="text-2xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Q1 2026 Projection
        </h1>
        <p className="mt-2 text-base text-gray-500 md:text-lg dark:text-gray-400">
          Q1 2025 vs Q1 2026 (projected)
        </p>
      </div>

      <div className="flex min-h-0 w-full flex-1 items-center justify-center px-4">
        <ResponsiveContainer width="100%" height="70%">
          <BarChart
            data={q1Data}
            margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
            barCategoryGap="20%"
          >
            <XAxis
              dataKey="metric"
              stroke="currentColor"
              tick={{ fontSize: 14 }}
            />
            <YAxis
              stroke="currentColor"
              tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              tick={{ fontSize: 14 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
              }}
              formatter={(value: number, name: string) => {
                const label = name === "q12025" ? "Q1 2025" : "Q1 2026";
                return [`$${(value / 1000000).toFixed(2)}M`, label];
              }}
            />
            <Legend
              formatter={(value) =>
                value === "q12025" ? "Q1 2025" : "Q1 2026 (projected)"
              }
            />
            <Bar
              dataKey="q12025"
              fill="#94a3b8"
              name="q12025"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="q12026"
              fill="#22c55e"
              name="q12026"
              radius={[4, 4, 0, 0]}
            >
              <LabelList
                dataKey="changeLabel"
                position="top"
                style={{ fontSize: 14, fontWeight: "bold", fill: "#22c55e" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex shrink-0 flex-col items-center justify-center gap-1 px-8 pb-4">
        <p className="max-w-3xl text-center text-sm text-gray-500 dark:text-gray-400">
          Q1 2026 revenue includes 5% organic growth and a $750K one-time income
        </p>
        <p className="max-w-3xl text-center text-sm text-gray-500 dark:text-gray-400">
          EBITDA is adjusted to add back capitalized software development and
          one-time uncollected sales tax paid on retroactive registrations
        </p>
      </div>
    </div>
  );
}
