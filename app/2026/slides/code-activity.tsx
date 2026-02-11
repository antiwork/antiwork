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
    label: "Lines Changed (K)",
    color: "#3b82f6",
  },
  prs: {
    label: "PRs Merged",
    color: "#22c55e",
  },
} satisfies ChartConfig;

// Lines changed estimated from commits * avg ~150 lines per commit
const codeData = [
  // 2023 data (commits * 150 / 1000 for K)
  { month: "Jan '23", linesChanged: 57, prs: 352 },
  { month: "Feb '23", linesChanged: 50, prs: 269 },
  { month: "Mar '23", linesChanged: 76, prs: 327 },
  { month: "Apr '23", linesChanged: 37, prs: 241 },
  { month: "May '23", linesChanged: 42, prs: 278 },
  { month: "Jun '23", linesChanged: 48, prs: 302 },
  { month: "Jul '23", linesChanged: 46, prs: 259 },
  { month: "Aug '23", linesChanged: 41, prs: 254 },
  { month: "Sep '23", linesChanged: 37, prs: 214 },
  { month: "Oct '23", linesChanged: 48, prs: 253 },
  { month: "Nov '23", linesChanged: 44, prs: 242 },
  { month: "Dec '23", linesChanged: 50, prs: 288 },
  // 2024 data
  { month: "Jan '24", linesChanged: 54, prs: 308 },
  { month: "Feb '24", linesChanged: 59, prs: 327 },
  { month: "Mar '24", linesChanged: 59, prs: 329 },
  { month: "Apr '24", linesChanged: 59, prs: 333 },
  { month: "May '24", linesChanged: 70, prs: 349 },
  { month: "Jun '24", linesChanged: 80, prs: 452 },
  { month: "Jul '24", linesChanged: 138, prs: 632 },
  { month: "Aug '24", linesChanged: 96, prs: 607 },
  { month: "Sep '24", linesChanged: 133, prs: 519 },
  { month: "Oct '24", linesChanged: 153, prs: 652 },
  { month: "Nov '24", linesChanged: 93, prs: 320 },
  { month: "Dec '24", linesChanged: 107, prs: 508 },
  // 2025-2026 data
  { month: "Jan '25", linesChanged: 84, prs: 471 },
  { month: "Feb '25", linesChanged: 114, prs: 611 },
  { month: "Mar '25", linesChanged: 132, prs: 603 },
  { month: "Apr '25", linesChanged: 115, prs: 455 },
  { month: "May '25", linesChanged: 64, prs: 255 },
  { month: "Jun '25", linesChanged: 99, prs: 297 },
  { month: "Jul '25", linesChanged: 136, prs: 457 },
  { month: "Aug '25", linesChanged: 166, prs: 697 },
  { month: "Sep '25", linesChanged: 113, prs: 450 },
  { month: "Oct '25", linesChanged: 63, prs: 216 },
  { month: "Nov '25", linesChanged: 31, prs: 106 },
  { month: "Dec '25", linesChanged: 43, prs: 149 },
  { month: "Jan '26", linesChanged: 60, prs: 239 },
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
                value: "Lines (K)",
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
                value: "PRs",
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
              name="Lines Changed (K)"
              yAxisId="left"
              dot={{
                fill: codeConfig.linesChanged.color,
                strokeWidth: 2,
                r: 2,
              }}
            />
            <Line
              type="monotone"
              dataKey="prs"
              stroke={codeConfig.prs.color}
              strokeWidth={2}
              name="PRs Merged"
              yAxisId="right"
              dot={{ fill: codeConfig.prs.color, strokeWidth: 2, r: 2 }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
