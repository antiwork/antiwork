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
    <div className="w-full h-full flex flex-col">
      <div className="h-24 mt-12 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Creator Earnings</h1>
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
            <ChartTooltip formatter={(value) => `$${value.toLocaleString()}`} />
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

// Add static color properties
Slide2.backgroundColor = "bg-blue-100";
Slide2.foregroundColor = "text-blue-900";
