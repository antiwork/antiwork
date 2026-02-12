import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const ebitdaConfig = {
  ebitda: {
    label: "EBITDA",
    color: "#1d4ed8",
  },
} satisfies ChartConfig;

const ebitdaData = [
  { year: 2012, ebitda: -857776 },
  { year: 2013, ebitda: -1888616 },
  { year: 2014, ebitda: -3357890 },
  { year: 2015, ebitda: -3724157 },
  { year: 2016, ebitda: -165763 },
  { year: 2017, ebitda: -88657 },
  { year: 2018, ebitda: 6595 },
  { year: 2019, ebitda: -219739 },
  { year: 2020, ebitda: -14580 },
  { year: 2021, ebitda: -1707180 },
  { year: 2022, ebitda: -1301719 },
  { year: 2023, ebitda: 9812816 },
  { year: 2024, ebitda: 5566088 },
  { year: 2025, ebitda: 5850931 },
];

export default function Slide5b() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-12 flex h-24 items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          EBITDA
        </h1>
      </div>
      <div className="flex w-full flex-1 items-center justify-center">
        <ChartContainer config={ebitdaConfig} className="h-4/5 w-4/5">
          <BarChart
            data={ebitdaData}
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
              dataKey="ebitda"
              fill={ebitdaConfig.ebitda.color}
              name="EBITDA"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
