"use client";

import { useState } from "react";
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

// Monthly compensation rates (approximate, assuming 50/50 senior/non-senior split):
// 2025 rates:
// Engineering/Design: avg of $231K and $192.5K = ~$17,646/month
// Support: $115.5K/year = ~$9,625/month
// 2026 rates:
// Engineering/Design: avg of $189K and $135K = ~$13,500/month
// Support: $90K/year = ~$7,500/month
// Product: $10,000/month (same for both years)

const rates2025 = {
  engineeringDesign: 17646,
  support: 9625,
  product: 10000,
};

const rates2026 = {
  engineeringDesign: 13500,
  support: 7500,
  product: 10000,
};

const teamData = [
  { category: "Engineering", y2025: 21, y2026: 5 },
  { category: "Design", y2025: 6, y2026: 1 },
  { category: "Support", y2025: 5, y2026: 5 },
  { category: "Product", y2025: 0, y2026: 1 },
];

const compensationData = teamData.map((item) => {
  let rate2025 = rates2025.engineeringDesign;
  let rate2026 = rates2026.engineeringDesign;
  if (item.category === "Support") {
    rate2025 = rates2025.support;
    rate2026 = rates2026.support;
  } else if (item.category === "Product") {
    rate2025 = rates2025.product;
    rate2026 = rates2026.product;
  }
  const val2025 = item.y2025 * rate2025;
  const val2026 = item.y2026 * rate2026;
  const changePercent =
    val2025 === 0
      ? val2026 > 0
        ? 100
        : 0
      : ((val2026 - val2025) / val2025) * 100;
  return {
    category: item.category,
    y2025: val2025,
    y2026: val2026,
    changeLabel:
      changePercent > 0
        ? `+${changePercent.toFixed(0)}%`
        : `${changePercent.toFixed(0)}%`,
  };
});

const total2025 = compensationData.reduce((sum, item) => sum + item.y2025, 0);
const total2026 = compensationData.reduce((sum, item) => sum + item.y2026, 0);

const totalChangePercent = ((total2026 - total2025) / total2025) * 100;
const totalData = [
  {
    category: "Total",
    y2025: total2025,
    y2026: total2026,
    changeLabel: `${totalChangePercent.toFixed(0)}%`,
  },
];

export default function SlideTeamCompensation() {
  const [showTotal, setShowTotal] = useState(false);

  const chartData = showTotal ? totalData : compensationData;

  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-8 flex h-16 shrink-0 flex-col items-center justify-center md:mt-12 md:h-24">
        <h1 className="text-2xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Team Compensation
        </h1>
      </div>

      <div className="flex min-h-0 w-full flex-1 px-4">
        <div className="flex w-3/4 items-center justify-center">
          <ResponsiveContainer width="100%" height="70%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              barCategoryGap="20%"
            >
              <XAxis
                dataKey="category"
                stroke="currentColor"
                tick={{ fontSize: 14 }}
              />
              <YAxis
                stroke="currentColor"
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
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
                  const label = name === "y2025" ? "2025" : "2026";
                  return [`$${(value / 1000).toFixed(0)}K/month`, label];
                }}
              />
              <Legend
                formatter={(value) => (value === "y2025" ? "2025" : "2026")}
              />
              <Bar
                dataKey="y2025"
                fill="#94a3b8"
                name="y2025"
                radius={[4, 4, 0, 0]}
              >
                <LabelList
                  dataKey="y2025"
                  position="top"
                  formatter={(value: number) =>
                    `$${(value / 1000).toFixed(0)}K`
                  }
                  style={{ fontSize: 14, fontWeight: 600, fill: "#94a3b8" }}
                />
              </Bar>
              <Bar
                dataKey="y2026"
                fill="#ec4899"
                name="y2026"
                radius={[4, 4, 0, 0]}
              >
                <LabelList
                  dataKey="y2026"
                  position="top"
                  formatter={(value: number) =>
                    `$${(value / 1000).toFixed(0)}K`
                  }
                  style={{ fontSize: 14, fontWeight: 600, fill: "#ec4899" }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex w-1/4 flex-col justify-center border-l border-gray-200 pl-6 dark:border-gray-700">
          <div className="rounded-xl bg-gray-50 p-5 dark:bg-gray-800">
            <p className="text-3xl font-bold md:text-4xl">
              <span style={{ color: "#94a3b8" }}>
                ${(total2025 / 1000).toFixed(0)}K
              </span>
              <span className="text-gray-400"> → </span>
              <span style={{ color: "#ec4899" }}>
                ${(total2026 / 1000).toFixed(0)}K
              </span>
            </p>
            <p className="mt-2 text-base text-gray-600 md:text-lg dark:text-gray-400">
              per month*
            </p>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-center justify-center gap-3 pb-4">
        <div className="flex items-center gap-2 rounded-full bg-gray-200 p-1 dark:bg-gray-700">
          <button
            onClick={() => setShowTotal(false)}
            className={`rounded-full px-4 py-2 text-base font-medium transition-colors ${
              !showTotal
                ? "bg-white text-gray-900 shadow dark:bg-gray-900 dark:text-white"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            By Role
          </button>
          <button
            onClick={() => setShowTotal(true)}
            className={`rounded-full px-4 py-2 text-base font-medium transition-colors ${
              showTotal
                ? "bg-white text-gray-900 shadow dark:bg-gray-900 dark:text-white"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            Total
          </button>
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          *Approximate based on peak cash rates from 2024 and 2025
        </p>
      </div>
    </div>
  );
}
