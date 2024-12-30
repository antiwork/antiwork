import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
} from "@/components/ui/chart";

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

export default function Slide3() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-12 flex h-24 items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Financial Performance with Creator Earnings
        </h1>
      </div>
      <div className="flex w-full flex-1 items-center justify-center">
        <ChartContainer config={financialsConfig} className="h-4/5 w-4/5">
          <BarChart
            data={financialsData}
            margin={{ top: 40, right: 30, left: 40, bottom: 40 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="currentColor"
              opacity={0.1}
            />
            <XAxis dataKey="year" stroke="currentColor" />
            <YAxis
              tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              stroke="currentColor"
            />
            <ChartTooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                color: "var(--foreground)",
              }}
            />
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
  );
}
