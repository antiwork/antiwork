import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const companyRevenueConfig = {
  companyRevenue: {
    label: "Company Revenue",
    color: "#1d4ed8",
  },
} satisfies ChartConfig;

const companyRevenueData = [
  {
    year: 2012,
    companyRevenue: 40483,
  },
  {
    year: 2013,
    companyRevenue: 311040,
  },
  {
    year: 2014,
    companyRevenue: 850210,
  },
  {
    year: 2015,
    companyRevenue: 1288672,
  },
  {
    year: 2016,
    companyRevenue: 2273189,
  },
  {
    year: 2017,
    companyRevenue: 2745823,
  },
  {
    year: 2018,
    companyRevenue: 3434864,
  },
  {
    year: 2019,
    companyRevenue: 5022796,
  },
  {
    year: 2020,
    companyRevenue: 9316264,
  },
  {
    year: 2021,
    companyRevenue: 10973977,
  },
  {
    year: 2022,
    companyRevenue: 10568383,
  },
  {
    year: 2023,
    companyRevenue: 20738506.09,
  },
  {
    year: 2024,
    companyRevenue: 18951308,
  },
];

export default function Slide3() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-12 flex h-24 items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Company Revenue
        </h1>
      </div>
      <div className="flex w-full flex-1 items-center justify-center">
        <ChartContainer config={companyRevenueConfig} className="h-4/5 w-4/5">
          <BarChart
            data={companyRevenueData}
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
              dataKey="companyRevenue"
              fill={companyRevenueConfig.companyRevenue.color}
              name="Company Revenue"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
