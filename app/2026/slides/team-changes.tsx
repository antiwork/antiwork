"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const teamData = [
  { category: "Engineering", y2025: 21, y2026: 5 },
  { category: "Design", y2025: 6, y2026: 1 },
  { category: "Support", y2025: 5, y2026: 5 },
  { category: "Product", y2025: 0, y2026: 1 },
];

export default function SlideTeamChanges() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-8 flex h-16 shrink-0 flex-col items-center justify-center md:mt-12 md:h-24">
        <h1 className="text-2xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Team Changes
        </h1>
        <p className="mt-2 text-base text-gray-500 md:text-lg dark:text-gray-400">
          32 people (2025) → 14 people (2026)
        </p>
      </div>

      <div className="flex min-h-0 w-full flex-1 items-center justify-center px-4">
        <ResponsiveContainer width="100%" height="70%">
          <BarChart
            data={teamData}
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
              allowDecimals={false}
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
                return [value, label];
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
            />
            <Bar
              dataKey="y2026"
              fill="#ec4899"
              name="y2026"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
