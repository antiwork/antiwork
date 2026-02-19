import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

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

// Create a map for quick lookup of previous year's EBITDA
const ebitdaByYear = new Map(ebitdaData.map((d) => [d.year, d.ebitda]));

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: number;
}) {
  if (!active || !payload || !payload.length || !label) return null;

  const currentEbitda = payload[0].value;
  const previousEbitda = ebitdaByYear.get(label - 1);

  let changeText = "";
  if (previousEbitda !== undefined && previousEbitda !== 0) {
    const change =
      ((currentEbitda - previousEbitda) / Math.abs(previousEbitda)) * 100;
    const sign = change >= 0 ? "↑" : "↓";
    changeText = `${sign} ${Math.abs(change).toFixed(1)}% YoY`;
  }

  const formatValue = (val: number) => {
    const prefix = val < 0 ? "-" : "";
    return `${prefix}$${Math.abs(val).toLocaleString()}`;
  };

  return (
    <div className="rounded-lg border bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <p className="text-lg font-semibold text-gray-900 dark:text-white">
        {label}
      </p>
      <p className="text-lg text-blue-600 dark:text-blue-400">
        EBITDA: {formatValue(currentEbitda)}
      </p>
      {changeText && (
        <p
          className={`text-base ${currentEbitda >= (previousEbitda ?? 0) ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
        >
          {changeText}
        </p>
      )}
    </div>
  );
}

export default function Slide5b() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-12 flex h-24 items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          EBITDA*
        </h1>
      </div>
      <div className="flex min-h-0 w-full flex-1 px-4">
        {/* Left side - Chart (3/4) */}
        <div className="flex w-3/4 items-center justify-center">
          <ChartContainer config={ebitdaConfig} className="h-4/5 w-full">
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
              <XAxis
                dataKey="year"
                stroke="currentColor"
                tick={{ fontSize: 14 }}
              />
              <YAxis
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                tick={{ fontSize: 14 }}
                stroke="currentColor"
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="ebitda"
                fill={ebitdaConfig.ebitda.color}
                name="EBITDA"
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </div>

        {/* Right side - 2025 EBITDA (1/4) */}
        <div className="flex w-1/4 flex-col justify-center border-l border-gray-200 pl-6 dark:border-gray-700">
          <div className="rounded-xl bg-blue-50 p-5 dark:bg-blue-950">
            <p className="text-3xl font-bold text-blue-600 md:text-4xl dark:text-blue-400">
              $
              {(
                ebitdaData.find((d) => d.year === 2025)!.ebitda / 1_000_000
              ).toFixed(1)}
              M
            </p>
            <p className="mt-2 text-base text-gray-600 md:text-lg dark:text-gray-400">
              2025 EBITDA
            </p>
          </div>
        </div>
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
