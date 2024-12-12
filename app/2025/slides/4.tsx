import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
} from "@/components/ui/chart";

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

const financialsData = [
  {
    year: 2022,
    revenue: 11000000,
    profit: 5340000,
    netIncome: 4800000,
    dividends: 2880000,
    buyback: 0,
  },
  {
    year: 2023,
    revenue: 12500000,
    profit: 6100000,
    netIncome: 5490000,
    dividends: 3294000,
    buyback: 1000000,
  },
  {
    year: 2024,
    revenue: 15000000,
    profit: 7500000,
    netIncome: 6750000,
    dividends: 4050000,
    buyback: 0,
  },
];

export default function Slide4() {
  return (
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
  );
}