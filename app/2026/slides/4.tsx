import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const cogsConfig = {
  cogs: {
    label: "Cost of Goods Sold",
    color: "#1d4ed8",
  },
} satisfies ChartConfig;

const cogsData = [
  { year: 2012, cogs: 82923 },
  { year: 2013, cogs: 503625 },
  { year: 2014, cogs: 930540 },
  { year: 2015, cogs: 1229759 },
  { year: 2016, cogs: 1886772 },
  { year: 2017, cogs: 2105608 },
  { year: 2018, cogs: 2600949 },
  { year: 2019, cogs: 3615674 },
  { year: 2020, cogs: 6565827 },
  { year: 2021, cogs: 6947156 },
  { year: 2022, cogs: 6785049 },
  { year: 2023, cogs: 6498316 },
  { year: 2024, cogs: 5923421 },
  { year: 2025, cogs: 6078821 },
];

export default function Slide4() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-12 flex h-24 items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Cost of Goods Sold (COGS)
        </h1>
      </div>
      <div className="flex w-full flex-1 items-center justify-center">
        <ChartContainer config={cogsConfig} className="h-4/5 w-4/5">
          <BarChart
            data={cogsData}
            margin={{ top: 40, right: 30, left: 40, bottom: 40 }}
            accessibilityLayer
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
              content={<ChartTooltipContent labelKey="year" prefix="$" />}
            />
            <Bar
              dataKey="cogs"
              fill={cogsConfig.cogs.color}
              name="Cost of Goods Sold"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
