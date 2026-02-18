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
  commitsPerPerson: {
    label: "Commits/Person",
    color: "#22c55e",
  },
  teamSize: {
    label: "Team Size",
    color: "#a855f7",
  },
} satisfies ChartConfig;

// Raw data with commits and team size
// Missing team sizes filled from AI and Team Productivity slide
const rawData = [
  { month: "Feb '23", commits: 160, teamSize: 19 },
  { month: "Mar '23", commits: 233, teamSize: 17 },
  { month: "Apr '23", commits: 176, teamSize: 15 },
  { month: "May '23", commits: 214, teamSize: 22 },
  { month: "Jun '23", commits: 194, teamSize: 20 },
  { month: "Jul '23", commits: 154, teamSize: 18 },
  { month: "Aug '23", commits: 131, teamSize: 17 },
  { month: "Sep '23", commits: 122, teamSize: 15 },
  { month: "Oct '23", commits: 156, teamSize: 14 },
  { month: "Nov '23", commits: 155, teamSize: 20 },
  { month: "Dec '23", commits: 138, teamSize: 19 },
  { month: "Jan '24", commits: 163, teamSize: 18 },
  { month: "Feb '24", commits: 163, teamSize: 17 },
  { month: "Mar '24", commits: 188, teamSize: 21 },
  { month: "Apr '24", commits: 194, teamSize: 18 },
  { month: "May '24", commits: 179, teamSize: 22 },
  { month: "Jun '24", commits: 142, teamSize: 22 },
  { month: "Jul '24", commits: 236, teamSize: 21 },
  { month: "Aug '24", commits: 243, teamSize: 27 },
  { month: "Sep '24", commits: 115, teamSize: 23 },
  { month: "Oct '24", commits: 133, teamSize: 20 },
  { month: "Nov '24", commits: 91, teamSize: 17 },
  { month: "Dec '24", commits: 139, teamSize: 19 },
  { month: "Jan '25", commits: 114, teamSize: 12 },
  { month: "Feb '25", commits: 120, teamSize: 16 },
  { month: "Mar '25", commits: 176, teamSize: 17 },
  { month: "Apr '25", commits: 103, teamSize: 17 },
  { month: "May '25", commits: 59, teamSize: 14 },
  { month: "Jun '25", commits: 118, teamSize: 14 },
  { month: "Jul '25", commits: 109, teamSize: 14 },
  { month: "Aug '25", commits: 134, teamSize: 15 },
  { month: "Sep '25", commits: 188, teamSize: 12 },
  { month: "Oct '25", commits: 140, teamSize: 11 },
  { month: "Nov '25", commits: 86, teamSize: 12 },
  { month: "Dec '25", commits: 110, teamSize: 9 },
  { month: "Jan '26", commits: 168, teamSize: 8 },
];

// Major LLM model launches and events
const modelLaunches = [
  { month: "Mar '23", label: "GPT-4", color: "#f97316" },
  { month: "Jun '23", label: "Claude 2", color: "#f97316" },
  { month: "Oct '23", label: "Sonnet 3.5", color: "#f97316" },
  { month: "Feb '25", label: "GPT-4.5", color: "#f97316" },
  { month: "Apr '25", label: "Went OSS", color: "#000000" },
  { month: "Sep '25", label: "Sonnet 4.5", color: "#f97316" },
  { month: "Nov '25", label: "Opus 4.5", color: "#f97316" },
];

// Calculate commits per person and include team size
const codeData = rawData.map((d) => ({
  month: d.month,
  commitsPerPerson: Math.round((d.commits / d.teamSize) * 10) / 10,
  teamSize: d.teamSize,
}));

export default function SlideCodeActivity() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-8 flex h-16 shrink-0 items-center justify-center md:mt-12 md:h-24">
        <h1 className="text-2xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Code Activity per Engineer
        </h1>
      </div>
      <div className="flex min-h-0 w-full flex-1 items-center justify-center">
        <ChartContainer config={codeConfig} className="h-4/5 w-full md:w-4/5">
          <LineChart
            data={codeData}
            margin={{ top: 20, right: 20, left: 20, bottom: 60 }}
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
              tick={{ fontSize: 14 }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis stroke="currentColor" tick={{ fontSize: 14 }} />
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
                stroke={launch.color}
                strokeDasharray="5 5"
                strokeWidth={1}
                label={{
                  value: launch.label,
                  position: "top",
                  fill: launch.color,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              />
            ))}
            <Line
              type="monotone"
              dataKey="commitsPerPerson"
              stroke={codeConfig.commitsPerPerson.color}
              strokeWidth={2}
              name="Commits/Person"
              dot={{
                fill: codeConfig.commitsPerPerson.color,
                strokeWidth: 2,
                r: 3,
              }}
            />
            <Line
              type="monotone"
              dataKey="teamSize"
              stroke={codeConfig.teamSize.color}
              strokeWidth={2}
              name="Team Size"
              strokeDasharray="5 5"
              dot={{ fill: codeConfig.teamSize.color, strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
