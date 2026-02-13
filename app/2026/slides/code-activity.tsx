import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ReferenceLine,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const codeConfig = {
  linesChanged: {
    label: "Lines Changed* (K)",
    color: "#3b82f6",
  },
  commits: {
    label: "Commits",
    color: "#22c55e",
  },
} satisfies ChartConfig;

const codeData = [
  // 2023 data
  { month: "Feb '23", linesChanged: 57, commits: 136 },
  { month: "Mar '23", linesChanged: 162, commits: 376 },
  { month: "Apr '23", linesChanged: 91, commits: 219 },
  { month: "May '23", linesChanged: 93, commits: 269 },
  { month: "Jun '23", linesChanged: 97, commits: 275 },
  { month: "Jul '23", linesChanged: 93, commits: 234 },
  { month: "Aug '23", linesChanged: 50, commits: 238 },
  { month: "Sep '23", linesChanged: 79, commits: 195 },
  { month: "Oct '23", linesChanged: 124, commits: 222 },
  { month: "Nov '23", linesChanged: 120, commits: 223 },
  { month: "Dec '23", linesChanged: 267, commits: 261 },
  // 2024 data
  { month: "Jan '24", linesChanged: 165, commits: 276 },
  { month: "Feb '24", linesChanged: 531, commits: 347 },
  { month: "Mar '24", linesChanged: 161, commits: 314 },
  { month: "Apr '24", linesChanged: 217, commits: 328 },
  { month: "May '24", linesChanged: 170, commits: 367 },
  { month: "Jun '24", linesChanged: 434, commits: 422 },
  { month: "Jul '24", linesChanged: 297, commits: 568 },
  { month: "Aug '24", linesChanged: 300, commits: 588 },
  { month: "Sep '24", linesChanged: 282, commits: 444 },
  { month: "Oct '24", linesChanged: 363, commits: 535 },
  { month: "Nov '24", linesChanged: 226, commits: 311 },
  { month: "Dec '24", linesChanged: 438, commits: 451 },
  // 2025-2026 data
  { month: "Jan '25", linesChanged: 344, commits: 409 },
  { month: "Feb '25", linesChanged: 382, commits: 570 },
  { month: "Mar '25", linesChanged: 267, commits: 649 },
  { month: "Apr '25", linesChanged: 262, commits: 425 },
  { month: "May '25", linesChanged: 232, commits: 260 },
  { month: "Jun '25", linesChanged: 143, commits: 349 },
  { month: "Jul '25", linesChanged: 143, commits: 478 },
  { month: "Aug '25", linesChanged: 188, commits: 704 },
  { month: "Sep '25", linesChanged: 116, commits: 459 },
  { month: "Oct '25", linesChanged: 54, commits: 242 },
  { month: "Nov '25", linesChanged: 113, commits: 111 },
  { month: "Dec '25", linesChanged: 75, commits: 136 },
  { month: "Jan '26", linesChanged: 96, commits: 220 },
  { month: "Feb '26", linesChanged: 55, commits: 89 },
];

// Major AI model launches
const modelLaunches = [
  { month: "Mar '23", label: "GPT-4" },
  { month: "Jun '23", label: "Claude 2" },
  { month: "Oct '23", label: "Sonnet 3.5" },
  { month: "Feb '25", label: "GPT-4.5" },
  { month: "Sep '25", label: "Sonnet 4.5" },
  { month: "Oct '25", label: "Haiku 4.5" },
  { month: "Nov '25", label: "Opus 4.5" },
];

export default function SlideCodeActivity() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-8 flex h-16 shrink-0 items-center justify-center md:mt-12 md:h-24">
        <h1 className="text-2xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Code Activity
        </h1>
      </div>
      <div className="flex min-h-0 w-full flex-1 items-center justify-center">
        <ChartContainer config={codeConfig} className="h-4/5 w-full md:w-4/5">
          <LineChart
            data={codeData}
            margin={{ top: 40, right: 20, left: 20, bottom: 40 }}
            accessibilityLayer
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="currentColor"
              opacity={0.1}
            />
            <XAxis
              dataKey="month"
              stroke="currentColor"
              tick={{ fontSize: 10 }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              yAxisId="left"
              stroke="currentColor"
              label={{
                value: "Lines* (K)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle" },
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#22c55e"
              label={{
                value: "Commits",
                angle: 90,
                position: "insideRight",
                style: { textAnchor: "middle" },
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelKey="month"
                  formatter={(value, name) => (
                    <>
                      <span className="text-muted-foreground">{name}</span>
                      <span className="text-foreground ml-auto pl-4 font-mono font-medium tabular-nums">
                        {value}
                      </span>
                    </>
                  )}
                />
              }
            />
            <Legend wrapperStyle={{ paddingTop: 20 }} />
            {modelLaunches.map((launch) => (
              <ReferenceLine
                key={launch.label}
                x={launch.month}
                stroke="#f97316"
                strokeDasharray="5 5"
                strokeWidth={1}
                yAxisId="left"
                label={{
                  value: launch.label,
                  position: "top",
                  fill: "#f97316",
                  fontSize: 9,
                  fontWeight: "bold",
                }}
              />
            ))}
            <Line
              type="monotone"
              dataKey="linesChanged"
              stroke={codeConfig.linesChanged.color}
              strokeWidth={2}
              name="Lines Changed* (K)"
              yAxisId="left"
              dot={{
                fill: codeConfig.linesChanged.color,
                strokeWidth: 2,
                r: 2,
              }}
            />
            <Line
              type="monotone"
              dataKey="commits"
              stroke={codeConfig.commits.color}
              strokeWidth={2}
              name="Commits"
              yAxisId="right"
              dot={{ fill: codeConfig.commits.color, strokeWidth: 2, r: 2 }}
            />
          </LineChart>
        </ChartContainer>
      </div>
      <div className="shrink-0 px-8 pb-4 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          * Excluding major rewrites and framework changes
        </p>
      </div>
    </div>
  );
}
