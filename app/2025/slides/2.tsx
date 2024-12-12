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

export default function Slide2() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-24 mt-12 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Creator Earnings Growth
        </h1>
      </div>
      <div className="flex-1 w-full flex items-center justify-center">
        <ChartContainer config={creatorEarningsConfig} className="w-4/5 h-4/5">
          <BarChart
            data={creatorEarningsData}
            margin={{ top: 40, right: 30, left: 40, bottom: 40 }}
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
  );
}
