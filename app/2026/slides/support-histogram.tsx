"use client";

import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
  LabelList,
} from "recharts";

type ViewType = "all" | "ai_assistant" | "staff";

const rawData = [
  { bucket: "0-1h", ai_assistant: 2689181, staff: 445334 },
  { bucket: "1-2h", ai_assistant: 521, staff: 5434 },
  { bucket: "2-3h", ai_assistant: 213, staff: 4146 },
  { bucket: "3-4h", ai_assistant: 122, staff: 3144 },
  { bucket: "4-5h", ai_assistant: 88, staff: 2707 },
  { bucket: "5-6h", ai_assistant: 96, staff: 2473 },
  { bucket: "6-7h", ai_assistant: 85, staff: 2249 },
  { bucket: "7-8h", ai_assistant: 72, staff: 2069 },
  { bucket: "8-9h", ai_assistant: 43, staff: 1915 },
  { bucket: "9-10h", ai_assistant: 39, staff: 1801 },
  { bucket: "10-11h", ai_assistant: 52, staff: 1671 },
  { bucket: "11-12h", ai_assistant: 41, staff: 1775 },
  { bucket: "12-13h", ai_assistant: 48, staff: 1625 },
  { bucket: "13-14h", ai_assistant: 26, staff: 1548 },
  { bucket: "14-15h", ai_assistant: 21, staff: 1528 },
  { bucket: "15-16h", ai_assistant: 25, staff: 1418 },
  { bucket: "16-17h", ai_assistant: 23, staff: 1410 },
  { bucket: "17-18h", ai_assistant: 103, staff: 1411 },
  { bucket: "18-19h", ai_assistant: 156, staff: 1310 },
  { bucket: "19-20h", ai_assistant: 60, staff: 1153 },
  { bucket: "20-21h", ai_assistant: 45, staff: 1113 },
  { bucket: "21-22h", ai_assistant: 47, staff: 1008 },
  { bucket: "22-23h", ai_assistant: 45, staff: 992 },
  { bucket: "23-24h", ai_assistant: 46, staff: 1016 },
  {
    bucket: "24+h",
    ai_assistant:
      44 +
      22 +
      27 +
      25 +
      19 +
      16 +
      13 +
      13 +
      6 +
      8 +
      6 +
      5 +
      12 +
      13 +
      11 +
      11 +
      6 +
      5 +
      14 +
      10 +
      13 +
      10 +
      13 +
      11 +
      744,
    staff:
      914 +
      796 +
      671 +
      663 +
      569 +
      639 +
      582 +
      567 +
      549 +
      540 +
      513 +
      563 +
      556 +
      517 +
      436 +
      380 +
      343 +
      367 +
      392 +
      349 +
      377 +
      341 +
      338 +
      345 +
      14042,
  },
];

const typeLabels: Record<ViewType, string> = {
  all: "All",
  ai_assistant: "AI Assistant",
  staff: "Staff",
};

const typeColors: Record<ViewType, string> = {
  all: "#3b82f6",
  ai_assistant: "#22c55e",
  staff: "#f59e0b",
};

export default function SlideSupportHistogram() {
  const [selectedType, setSelectedType] = useState<ViewType>("all");

  const { chartData, totalResponses, within1Hour, within1HourPercent } =
    useMemo(() => {
      const data = rawData.map((d) => {
        let count: number;
        if (selectedType === "all") {
          count = d.ai_assistant + d.staff;
        } else if (selectedType === "ai_assistant") {
          count = d.ai_assistant;
        } else {
          count = d.staff;
        }
        return { bucket: d.bucket, count };
      });

      const total = data.reduce((sum, d) => sum + d.count, 0);
      const first = data[0].count;
      const firstPercent = ((first / total) * 100).toFixed(1);

      const withPercentage = data.map((d) => ({
        ...d,
        percentage: (d.count / total) * 100,
      }));

      return {
        chartData: withPercentage,
        totalResponses: total,
        within1Hour: first,
        within1HourPercent: firstPercent,
      };
    }, [selectedType]);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-8 flex h-16 shrink-0 flex-col items-center justify-center md:mt-12 md:h-24">
        <h1 className="text-xl font-bold text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Support Response Time Distribution
        </h1>
      </div>

      {/* Key stat callout */}
      <div className="flex shrink-0 items-center justify-center py-4">
        <div className="rounded-2xl bg-green-100 px-6 py-3 dark:bg-green-900/30">
          <span className="text-2xl font-bold text-green-700 md:text-4xl dark:text-green-400">
            {within1HourPercent}%
          </span>
          <span className="ml-2 text-base text-green-700 md:text-xl dark:text-green-400">
            responded within 1 hour
          </span>
        </div>
      </div>

      <div className="flex min-h-0 w-full flex-1 items-center justify-center px-4">
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <XAxis
              dataKey="bucket"
              stroke="currentColor"
              tick={{ fontSize: 14 }}
              angle={-45}
              textAnchor="end"
              height={60}
              interval={0}
            />
            <YAxis
              stroke={typeColors[selectedType]}
              tick={{ fontSize: 14 }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
              label={{
                value: "Percentage of Responses",
                angle: -90,
                position: "insideLeft",
                style: {
                  textAnchor: "middle",
                  fill: typeColors[selectedType],
                  fontSize: 12,
                },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
              }}
              formatter={(
                value: number,
                name: string,
                props: { payload?: { count: number; percentage: number } }
              ) => {
                const count = props.payload?.count ?? 0;
                const pct = props.payload?.percentage ?? 0;
                return [
                  `${pct.toFixed(2)}% (${count.toLocaleString()} responses)`,
                  "Percentage",
                ];
              }}
            />
            <Bar dataKey="percentage" radius={[2, 2, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={typeColors[selectedType]}
                  opacity={index === 0 ? 1 : 0.7}
                />
              ))}
              <LabelList
                dataKey="percentage"
                position="top"
                formatter={(value: number) => `${value.toFixed(1)}%`}
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  fill: typeColors[selectedType],
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Type selector */}
      <div className="flex shrink-0 items-center justify-center pb-4">
        <div className="flex items-center gap-2 rounded-full bg-gray-200 p-1 dark:bg-gray-700">
          {(["all", "ai_assistant", "staff"] as ViewType[]).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`rounded-full px-4 py-2 text-base font-medium transition-colors ${
                selectedType === type
                  ? "bg-white text-gray-900 shadow dark:bg-gray-900 dark:text-white"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              {typeLabels[type]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
