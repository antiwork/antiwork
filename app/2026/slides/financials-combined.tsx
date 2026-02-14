import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const combinedConfig = {
  creatorEarnings: {
    label: "Creator Earnings",
    color: "#3b82f6",
  },
  netRevenue: {
    label: "Net Revenue",
    color: "#22c55e",
  },
  ebitda: {
    label: "EBITDA",
    color: "#f59e0b",
  },
} satisfies ChartConfig;

const combinedData = [
  { year: 2012, creatorEarnings: 600945, netRevenue: 48705, ebitda: -857776 },
  {
    year: 2013,
    creatorEarnings: 4940038,
    netRevenue: 442765,
    ebitda: -1888616,
  },
  {
    year: 2014,
    creatorEarnings: 13775340,
    netRevenue: 915373,
    ebitda: -3357890,
  },
  {
    year: 2015,
    creatorEarnings: 21046470,
    netRevenue: 1318055,
    ebitda: -3724157,
  },
  {
    year: 2016,
    creatorEarnings: 36251075,
    netRevenue: 2274023,
    ebitda: -165763,
  },
  {
    year: 2017,
    creatorEarnings: 41463817,
    netRevenue: 2691894,
    ebitda: -88657,
  },
  {
    year: 2018,
    creatorEarnings: 52395391,
    netRevenue: 3387321,
    ebitda: 6595,
  },
  {
    year: 2019,
    creatorEarnings: 73105515,
    netRevenue: 4923912,
    ebitda: -219739,
  },
  {
    year: 2020,
    creatorEarnings: 142301488,
    netRevenue: 9210794,
    ebitda: -14580,
  },
  {
    year: 2021,
    creatorEarnings: 185482505,
    netRevenue: 10973980,
    ebitda: -1707180,
  },
  {
    year: 2022,
    creatorEarnings: 185824553,
    netRevenue: 10562409,
    ebitda: -1301719,
  },
  {
    year: 2023,
    creatorEarnings: 170717933,
    netRevenue: 20738507,
    ebitda: 9812816,
  },
  {
    year: 2024,
    creatorEarnings: 145334418,
    netRevenue: 18951309,
    ebitda: 5566088,
  },
  {
    year: 2025,
    creatorEarnings: 108129029,
    netRevenue: 17785731,
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
            <XAxis dataKey="year" stroke="currentColor" />
            <YAxis
              tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`}
              stroke="currentColor"
            />
            <ChartTooltip
              content={<ChartTooltipContent labelKey="year" prefix="$" />}
            />
            <Legend wrapperStyle={{ paddingTop: 10 }} />
            <Bar
              dataKey="creatorEarnings"
              fill={combinedConfig.creatorEarnings.color}
              name="Creator Earnings"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="netRevenue"
              fill={combinedConfig.netRevenue.color}
              name="Net Revenue"
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
        <p className="text-xs text-gray-500 dark:text-gray-400">
          * EBITDA is adjusted to add back capitalized software development and
          one-time uncollected sales tax paid on retroactive registrations, to
          better reflect operating cash flows.
        </p>
      </div>
    </div>
  );
}
