import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const combinedConfig = {
  cogs: {
    label: "COGS",
    color: "#6b7280",
  },
  revenue: {
    label: "Revenue",
    color: "#22c55e",
  },
  ebitda: {
    label: "EBITDA",
    color: "#ef4444",
  },
} satisfies ChartConfig;

const combinedData = [
  {
    year: 2012,
    cogs: 82923,
    revenue: 48705,
    ebitda: -857776,
  },
  {
    year: 2013,
    cogs: 503625,
    revenue: 442765,
    ebitda: -1888616,
  },
  {
    year: 2014,
    cogs: 930540,
    revenue: 915373,
    ebitda: -3357890,
  },
  {
    year: 2015,
    cogs: 1229759,
    revenue: 1318055,
    ebitda: -3724157,
  },
  {
    year: 2016,
    cogs: 1886772,
    revenue: 2274023,
    ebitda: -165763,
  },
  {
    year: 2017,
    cogs: 2105608,
    revenue: 2691894,
    ebitda: -88657,
  },
  {
    year: 2018,
    cogs: 2600949,
    revenue: 3387321,
    ebitda: 6595,
  },
  {
    year: 2019,
    cogs: 3615674,
    revenue: 4923912,
    ebitda: -219739,
  },
  {
    year: 2020,
    cogs: 6565827,
    revenue: 9210794,
    ebitda: -14580,
  },
  {
    year: 2021,
    cogs: 6947156,
    revenue: 10973980,
    ebitda: -1707180,
  },
  {
    year: 2022,
    cogs: 6785049,
    revenue: 10562409,
    ebitda: -1301719,
  },
  {
    year: 2023,
    cogs: 6498316,
    revenue: 20738507,
    ebitda: 9812816,
  },
  {
    year: 2024,
    cogs: 5923421,
    revenue: 18951309,
    ebitda: 5566088,
  },
  {
    year: 2025,
    cogs: 6078821,
    revenue: 17785731,
    ebitda: 5850931,
  },
];

export default function SlideFinancialsCombined() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-8 flex h-16 shrink-0 items-center justify-center md:mt-12 md:h-24">
        <h1 className="text-2xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Financial Overview
        </h1>
      </div>
      <div className="flex min-h-0 w-full flex-1 items-center justify-center">
        <ChartContainer
          config={combinedConfig}
          className="h-4/5 w-full md:w-4/5"
        >
          <BarChart
            data={combinedData}
            margin={{ top: 20, right: 20, left: 40, bottom: 40 }}
            accessibilityLayer
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="currentColor"
              opacity={0.1}
            />
            <XAxis
              dataKey="year"
              stroke="currentColor"
              tick={{ fontSize: 14 }}
            />
            <YAxis
              tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`}
              stroke="currentColor"
              tick={{ fontSize: 14 }}
              domain={[-4000000, "dataMax"]}
            />
            <ChartTooltip
              content={<ChartTooltipContent labelKey="year" prefix="$" />}
            />
            <Legend wrapperStyle={{ paddingTop: 10 }} />
            <Bar
              dataKey="revenue"
              fill={combinedConfig.revenue.color}
              name="Revenue"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="cogs"
              fill={combinedConfig.cogs.color}
              name="COGS"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="ebitda"
              fill={combinedConfig.ebitda.color}
              name="EBITDA*"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>
      <div className="shrink-0 px-8 pb-4 text-center">
        <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
          * EBITDA is adjusted to add back capitalized software development and
          one-time uncollected sales tax paid on retroactive registrations, to
          better reflect operating cash flows.
        </p>
      </div>
    </div>
  );
}
