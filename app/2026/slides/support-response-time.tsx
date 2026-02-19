"use client";

import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from "recharts";

type ResponseType = "all" | "ai_assistant" | "staff";

interface DataPoint {
  month: string;
  type: ResponseType;
  avg_hours: number;
  p90_hours: number;
}

const rawData: DataPoint[] = [
  { month: "Jan '24", type: "all", avg_hours: 0.0067, p90_hours: 0.0104 },
  {
    month: "Jan '24",
    type: "ai_assistant",
    avg_hours: 0.0067,
    p90_hours: 0.0104,
  },
  { month: "Feb '24", type: "all", avg_hours: 0.0049, p90_hours: 0.008 },
  {
    month: "Feb '24",
    type: "ai_assistant",
    avg_hours: 0.0049,
    p90_hours: 0.008,
  },
  { month: "Mar '24", type: "all", avg_hours: 6.0362, p90_hours: 15.8081 },
  {
    month: "Mar '24",
    type: "ai_assistant",
    avg_hours: 1.1603,
    p90_hours: 0.0081,
  },
  { month: "Mar '24", type: "staff", avg_hours: 10.5814, p90_hours: 19.8631 },
  { month: "Apr '24", type: "all", avg_hours: 8.6021, p90_hours: 22.0944 },
  {
    month: "Apr '24",
    type: "ai_assistant",
    avg_hours: 0.0075,
    p90_hours: 0.0104,
  },
  { month: "Apr '24", type: "staff", avg_hours: 13.6295, p90_hours: 25.0335 },
  { month: "May '24", type: "all", avg_hours: 11.038, p90_hours: 29.1048 },
  {
    month: "May '24",
    type: "ai_assistant",
    avg_hours: 0.0517,
    p90_hours: 0.0112,
  },
  { month: "May '24", type: "staff", avg_hours: 18.0192, p90_hours: 36.6784 },
  { month: "Jun '24", type: "all", avg_hours: 9.4578, p90_hours: 24.5696 },
  {
    month: "Jun '24",
    type: "ai_assistant",
    avg_hours: 0.0101,
    p90_hours: 0.0113,
  },
  { month: "Jun '24", type: "staff", avg_hours: 18.722, p90_hours: 31.5869 },
  { month: "Jul '24", type: "all", avg_hours: 11.3329, p90_hours: 36.5318 },
  {
    month: "Jul '24",
    type: "ai_assistant",
    avg_hours: 0.0077,
    p90_hours: 0.0095,
  },
  { month: "Jul '24", type: "staff", avg_hours: 27.871, p90_hours: 46.2436 },
  { month: "Aug '24", type: "all", avg_hours: 14.2025, p90_hours: 53.6187 },
  {
    month: "Aug '24",
    type: "ai_assistant",
    avg_hours: 0.0181,
    p90_hours: 0.0062,
  },
  { month: "Aug '24", type: "staff", avg_hours: 36.9985, p90_hours: 75.717 },
  { month: "Sep '24", type: "all", avg_hours: 6.0271, p90_hours: 0.5354 },
  {
    month: "Sep '24",
    type: "ai_assistant",
    avg_hours: 0.0847,
    p90_hours: 0.05,
  },
  { month: "Sep '24", type: "staff", avg_hours: 7.9822, p90_hours: 42.1639 },
  { month: "Oct '24", type: "all", avg_hours: 0.1648, p90_hours: 0.0047 },
  {
    month: "Oct '24",
    type: "ai_assistant",
    avg_hours: 0.1344,
    p90_hours: 0.0414,
  },
  { month: "Oct '24", type: "staff", avg_hours: 0.1668, p90_hours: 0.0044 },
  { month: "Nov '24", type: "all", avg_hours: 0.0118, p90_hours: 0.0036 },
  {
    month: "Nov '24",
    type: "ai_assistant",
    avg_hours: 0.2612,
    p90_hours: 0.0182,
  },
  { month: "Nov '24", type: "staff", avg_hours: 0.0014, p90_hours: 0.0033 },
  { month: "Dec '24", type: "all", avg_hours: 0.0524, p90_hours: 0.0032 },
  {
    month: "Dec '24",
    type: "ai_assistant",
    avg_hours: 0.329,
    p90_hours: 0.007,
  },
  { month: "Dec '24", type: "staff", avg_hours: 0.0012, p90_hours: 0.0031 },
  { month: "Jan '25", type: "all", avg_hours: 0.1831, p90_hours: 0.0025 },
  {
    month: "Jan '25",
    type: "ai_assistant",
    avg_hours: 0.1831,
    p90_hours: 0.0025,
  },
  { month: "Feb '25", type: "all", avg_hours: 0.6501, p90_hours: 0.0061 },
  {
    month: "Feb '25",
    type: "ai_assistant",
    avg_hours: 0.1102,
    p90_hours: 0.0059,
  },
  { month: "Feb '25", type: "staff", avg_hours: 120.6161, p90_hours: 377.4881 },
  { month: "Mar '25", type: "all", avg_hours: 0.9854, p90_hours: 0.0042 },
  {
    month: "Mar '25",
    type: "ai_assistant",
    avg_hours: 0.0055,
    p90_hours: 0.0039,
  },
  { month: "Mar '25", type: "staff", avg_hours: 61.545, p90_hours: 334.632 },
  { month: "Apr '25", type: "all", avg_hours: 1.0257, p90_hours: 0.0042 },
  {
    month: "Apr '25",
    type: "ai_assistant",
    avg_hours: 0.0577,
    p90_hours: 0.0038,
  },
  { month: "Apr '25", type: "staff", avg_hours: 64.1229, p90_hours: 294.1323 },
  { month: "May '25", type: "all", avg_hours: 1.0786, p90_hours: 0.0017 },
  {
    month: "May '25",
    type: "ai_assistant",
    avg_hours: 0.0226,
    p90_hours: 0.0016,
  },
  { month: "May '25", type: "staff", avg_hours: 96.1743, p90_hours: 304.3078 },
  { month: "Jun '25", type: "all", avg_hours: 0.2923, p90_hours: 0.0015 },
  {
    month: "Jun '25",
    type: "ai_assistant",
    avg_hours: 0.0159,
    p90_hours: 0.0014,
  },
  { month: "Jun '25", type: "staff", avg_hours: 26.9702, p90_hours: 75.1313 },
  { month: "Jul '25", type: "all", avg_hours: 0.2298, p90_hours: 0.0014 },
  {
    month: "Jul '25",
    type: "ai_assistant",
    avg_hours: 0.0153,
    p90_hours: 0.0013,
  },
  { month: "Jul '25", type: "staff", avg_hours: 24.5101, p90_hours: 72.322 },
  { month: "Aug '25", type: "all", avg_hours: 0.371, p90_hours: 0.0096 },
  {
    month: "Aug '25",
    type: "ai_assistant",
    avg_hours: 0.0113,
    p90_hours: 0.0091,
  },
  { month: "Aug '25", type: "staff", avg_hours: 32.7532, p90_hours: 97.1676 },
  { month: "Sep '25", type: "all", avg_hours: 3.4222, p90_hours: 2.9859 },
  {
    month: "Sep '25",
    type: "ai_assistant",
    avg_hours: 0.0655,
    p90_hours: 0.0231,
  },
  { month: "Sep '25", type: "staff", avg_hours: 22.5702, p90_hours: 68.1364 },
  { month: "Oct '25", type: "all", avg_hours: 1.8486, p90_hours: 1.7443 },
  {
    month: "Oct '25",
    type: "ai_assistant",
    avg_hours: 0.0513,
    p90_hours: 0.0233,
  },
  { month: "Oct '25", type: "staff", avg_hours: 12.5036, p90_hours: 34.8778 },
  { month: "Nov '25", type: "all", avg_hours: 1.809, p90_hours: 2.0914 },
  {
    month: "Nov '25",
    type: "ai_assistant",
    avg_hours: 0.1496,
    p90_hours: 0.0222,
  },
  { month: "Nov '25", type: "staff", avg_hours: 11.1977, p90_hours: 30.9703 },
  { month: "Dec '25", type: "all", avg_hours: 2.4336, p90_hours: 2.9372 },
  {
    month: "Dec '25",
    type: "ai_assistant",
    avg_hours: 0.3469,
    p90_hours: 0.0237,
  },
  { month: "Dec '25", type: "staff", avg_hours: 11.4676, p90_hours: 32.4714 },
  { month: "Jan '26", type: "all", avg_hours: 3.6743, p90_hours: 5.333 },
  {
    month: "Jan '26",
    type: "ai_assistant",
    avg_hours: 2.1116,
    p90_hours: 0.0605,
  },
  { month: "Jan '26", type: "staff", avg_hours: 11.0838, p90_hours: 26.0935 },
  { month: "Feb '26", type: "all", avg_hours: 3.5257, p90_hours: 5.8276 },
  {
    month: "Feb '26",
    type: "ai_assistant",
    avg_hours: 0.3308,
    p90_hours: 0.0348,
  },
  { month: "Feb '26", type: "staff", avg_hours: 15.9294, p90_hours: 43.5987 },
];

const typeLabels: Record<ResponseType, string> = {
  all: "All",
  ai_assistant: "AI Assistant",
  staff: "Staff",
};

const typeColors: Record<ResponseType, string> = {
  all: "#3b82f6",
  ai_assistant: "#22c55e",
  staff: "#f59e0b",
};

export default function SlideSupportResponseTime() {
  const [useP90, setUseP90] = useState(false);
  const [selectedType, setSelectedType] = useState<ResponseType>("all");

  const chartData = useMemo(() => {
    const dataKey = useP90 ? "p90_hours" : "avg_hours";
    const filtered = rawData.filter((d) => d.type === selectedType);
    return filtered.map((d) => ({
      month: d.month,
      value: d[dataKey],
    }));
  }, [useP90, selectedType]);

  const metricLabel = useP90 ? "P90 Response Time" : "Avg Response Time";

  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-8 flex h-16 shrink-0 items-center justify-center md:mt-12 md:h-24">
        <h1 className="text-xl font-bold text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Customer Support Response Time
        </h1>
      </div>
      <div className="flex min-h-0 w-full flex-1 items-center justify-center px-4">
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="currentColor"
              opacity={0.1}
            />
            <XAxis
              dataKey="month"
              stroke="currentColor"
              tick={{ fontSize: 14 }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              stroke={typeColors[selectedType]}
              tick={{ fontSize: 14 }}
              tickFormatter={(value) => {
                if (value >= 1) return `${value.toFixed(0)}h`;
                return `${(value * 60).toFixed(0)}m`;
              }}
              label={{
                value: `${metricLabel} (hours)`,
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
              formatter={(value: number) => {
                if (value >= 1) {
                  return [`${value.toFixed(2)} hours`, metricLabel];
                }
                return [`${(value * 60).toFixed(1)} minutes`, metricLabel];
              }}
            />
            <Bar
              dataKey="value"
              fill={typeColors[selectedType]}
              name={metricLabel}
              radius={[2, 2, 0, 0]}
              opacity={0.8}
            >
              <LabelList
                dataKey="value"
                position="top"
                formatter={(value: number) => {
                  if (value >= 1) return `${value.toFixed(1)}h`;
                  return `${(value * 60).toFixed(0)}m`;
                }}
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
      <div className="flex shrink-0 flex-col items-center justify-center gap-3 pb-4">
        {/* Type selector */}
        <div className="flex items-center gap-2 rounded-full bg-gray-200 p-1 dark:bg-gray-700">
          {(["all", "ai_assistant", "staff"] as ResponseType[]).map((type) => (
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
        {/* Metric selector */}
        <div className="flex items-center gap-2 rounded-full bg-gray-200 p-1 dark:bg-gray-700">
          <button
            onClick={() => setUseP90(false)}
            className={`rounded-full px-4 py-2 text-base font-medium transition-colors ${
              !useP90
                ? "bg-white text-gray-900 shadow dark:bg-gray-900 dark:text-white"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            Avg
          </button>
          <button
            onClick={() => setUseP90(true)}
            className={`rounded-full px-4 py-2 text-base font-medium transition-colors ${
              useP90
                ? "bg-white text-gray-900 shadow dark:bg-gray-900 dark:text-white"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            P90
          </button>
        </div>
      </div>
    </div>
  );
}
