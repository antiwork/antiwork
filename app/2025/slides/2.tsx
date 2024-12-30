import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
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
    year: 2012,
    creatorEarnings: 600945,
  },
  {
    year: 2013,
    creatorEarnings: 4940038,
  },
  {
    year: 2014,
    creatorEarnings: 13775340,
  },
  {
    year: 2015,
    creatorEarnings: 21046470,
  },
  {
    year: 2016,
    creatorEarnings: 36251075,
  },
  {
    year: 2017,
    creatorEarnings: 41463817,
  },
  {
    year: 2018,
    creatorEarnings: 52395391,
  },
  {
    year: 2019,
    creatorEarnings: 73105515,
  },
  {
    year: 2020,
    creatorEarnings: 142301488,
  },
  {
    year: 2021,
    creatorEarnings: 185482505,
  },
  {
    year: 2022,
    creatorEarnings: 185824553,
  },
  {
    year: 2023,
    creatorEarnings: 170717933,
  },
  {
    year: 2024,
    creatorEarnings: 142334418,
  },
];

export default function Slide2() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-12 flex h-24 items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Creator Earnings
        </h1>
      </div>
      <div className="flex w-full flex-1 items-center justify-center">
        <ChartContainer config={creatorEarningsConfig} className="h-4/5 w-4/5">
          <BarChart
            data={creatorEarningsData}
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
              formatter={(value) => `$${value.toLocaleString()}`}
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "1px solid #374151",
                borderRadius: "6px",
                color: "#f3f4f6",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                padding: "8px 12px",
              }}
              itemStyle={{
                color: "#f3f4f6",
              }}
              labelStyle={{
                color: "#f3f4f6",
              }}
            />
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
