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

const prConfig = {
  opened: {
    label: "Opened",
    color: "#3b82f6",
  },
  merged: {
    label: "Merged",
    color: "#22c55e",
  },
  closed: {
    label: "Closed",
    color: "#ef4444",
  },
  teamMembers: {
    label: "Team Members",
    color: "#a855f7",
  },
} satisfies ChartConfig;

const prData = [
  { month: "Jan '23", opened: 406, merged: 352, closed: 45, teamMembers: 18 },
  { month: "Feb '23", opened: 301, merged: 269, closed: 24, teamMembers: 20 },
  { month: "Mar '23", opened: 342, merged: 327, closed: 17, teamMembers: 21 },
  { month: "Apr '23", opened: 260, merged: 241, closed: 8, teamMembers: 22 },
  { month: "May '23", opened: 293, merged: 278, closed: 13, teamMembers: 18 },
  { month: "Jun '23", opened: 328, merged: 302, closed: 25, teamMembers: 24 },
  { month: "Jul '23", opened: 271, merged: 259, closed: 18, teamMembers: 22 },
  { month: "Aug '23", opened: 253, merged: 254, closed: 16, teamMembers: 21 },
  { month: "Sep '23", opened: 217, merged: 214, closed: 12, teamMembers: 22 },
  { month: "Oct '23", opened: 273, merged: 253, closed: 20, teamMembers: 24 },
  { month: "Nov '23", opened: 278, merged: 242, closed: 32, teamMembers: 30 },
  { month: "Dec '23", opened: 306, merged: 288, closed: 24, teamMembers: 29 },
  { month: "Jan '24", opened: 325, merged: 308, closed: 22, teamMembers: 31 },
  { month: "Feb '24", opened: 351, merged: 327, closed: 14, teamMembers: 31 },
  { month: "Mar '24", opened: 346, merged: 329, closed: 14, teamMembers: 30 },
  { month: "Apr '24", opened: 349, merged: 333, closed: 11, teamMembers: 33 },
  { month: "May '24", opened: 379, merged: 349, closed: 29, teamMembers: 33 },
  { month: "Jun '24", opened: 497, merged: 452, closed: 52, teamMembers: 40 },
  { month: "Jul '24", opened: 692, merged: 632, closed: 41, teamMembers: 44 },
  { month: "Aug '24", opened: 659, merged: 607, closed: 47, teamMembers: 41 },
  { month: "Sep '24", opened: 572, merged: 519, closed: 65, teamMembers: 33 },
  { month: "Oct '24", opened: 692, merged: 652, closed: 53, teamMembers: 33 },
  { month: "Nov '24", opened: 359, merged: 320, closed: 38, teamMembers: 29 },
  { month: "Dec '24", opened: 583, merged: 508, closed: 77, teamMembers: 24 },
  { month: "Jan '25", opened: 498, merged: 471, closed: 37, teamMembers: 20 },
  { month: "Feb '25", opened: 722, merged: 611, closed: 100, teamMembers: 31 },
  { month: "Mar '25", opened: 670, merged: 603, closed: 80, teamMembers: 26 },
  { month: "Apr '25", opened: 586, merged: 455, closed: 122, teamMembers: 17 },
  { month: "May '25", opened: 289, merged: 255, closed: 51, teamMembers: 11 },
  { month: "Jun '25", opened: 492, merged: 297, closed: 109, teamMembers: 12 },
  { month: "Jul '25", opened: 701, merged: 457, closed: 282, teamMembers: 12 },
  { month: "Aug '25", opened: 1301, merged: 697, closed: 553, teamMembers: 15 },
  { month: "Sep '25", opened: 850, merged: 450, closed: 410, teamMembers: 12 },
  { month: "Oct '25", opened: 591, merged: 216, closed: 376, teamMembers: 12 },
  { month: "Nov '25", opened: 259, merged: 106, closed: 127, teamMembers: 13 },
  { month: "Dec '25", opened: 393, merged: 149, closed: 230, teamMembers: 14 },
  { month: "Jan '26", opened: 581, merged: 239, closed: 304, teamMembers: 15 },
];

// Major LLM model launches
const modelLaunches = [
  { month: "Mar '23", label: "GPT-4", color: "#f97316" },
  { month: "Jun '23", label: "Claude 2", color: "#f97316" },
  { month: "Oct '23", label: "Sonnet 3.5", color: "#f97316" },
  { month: "Feb '25", label: "GPT-4.5", color: "#f97316" },
  { month: "Apr '25", label: "Went OSS", color: "#000000" },
  { month: "Sep '25", label: "Sonnet 4.5", color: "#f97316" },
  { month: "Nov '25", label: "Opus 4.5", color: "#f97316" },
];

export default function SlidePullRequests() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-8 flex h-16 shrink-0 items-center justify-center md:mt-12 md:h-24">
        <h1 className="text-2xl font-bold text-gray-900 md:text-4xl dark:text-white">
          AI and Team Productivity
        </h1>
      </div>
      <div className="flex min-h-0 w-full flex-1 items-center justify-center">
        <ChartContainer config={prConfig} className="h-4/5 w-full md:w-4/5">
          <LineChart
            data={prData}
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
              tick={{ fontSize: 14 }}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              yAxisId="left"
              stroke="currentColor"
              tick={{ fontSize: 14 }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#a855f7"
              tick={{ fontSize: 14 }}
              domain={[0, 50]}
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
                stroke={launch.color}
                strokeDasharray="5 5"
                strokeWidth={1}
                yAxisId="left"
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
              dataKey="opened"
              stroke={prConfig.opened.color}
              strokeWidth={2}
              name="Opened"
              yAxisId="left"
              dot={{ fill: prConfig.opened.color, strokeWidth: 2, r: 2 }}
            />
            <Line
              type="monotone"
              dataKey="merged"
              stroke={prConfig.merged.color}
              strokeWidth={2}
              name="Merged"
              yAxisId="left"
              dot={{ fill: prConfig.merged.color, strokeWidth: 2, r: 2 }}
            />
            <Line
              type="monotone"
              dataKey="closed"
              stroke={prConfig.closed.color}
              strokeWidth={2}
              name="Closed"
              yAxisId="left"
              dot={{ fill: prConfig.closed.color, strokeWidth: 2, r: 2 }}
            />
            <Line
              type="monotone"
              dataKey="teamMembers"
              stroke={prConfig.teamMembers.color}
              strokeWidth={3}
              name="Team Members"
              yAxisId="right"
              dot={{ fill: prConfig.teamMembers.color, strokeWidth: 2, r: 3 }}
              strokeDasharray="5 5"
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
