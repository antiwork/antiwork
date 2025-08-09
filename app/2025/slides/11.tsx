import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const githubStarGrowthConfig = {
  currentStars: {
    label: "Current Stars",
    color: "#1d4ed8",
  },
  growthPercentage: {
    label: "Growth %",
    color: "#10b981",
  },
} satisfies ChartConfig;

const githubStarGrowthData = [
  {
    repository: "helper",
    currentStars: 367,
    growthPercentage: 5.2,
  },
  {
    repository: "iffy",
    currentStars: 358,
    growthPercentage: 4.1,
  },
  {
    repository: "gumroad",
    currentStars: 5812,
    growthPercentage: 3.8,
  },
  {
    repository: "Flexile",
    currentStars: 507,
    growthPercentage: 3.3,
  },
  {
    repository: "shortest",
    currentStars: 4988,
    growthPercentage: 2.7,
  },
];

export default function Slide11() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-12 flex h-24 items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          GitHub Star Growth Since Last Report
        </h1>
      </div>
      <div className="flex w-full flex-1 items-center justify-center">
        <ChartContainer config={githubStarGrowthConfig} className="h-4/5 w-4/5">
          <BarChart
            data={githubStarGrowthData}
            margin={{ top: 40, right: 30, left: 40, bottom: 40 }}
            accessibilityLayer
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="currentColor"
              opacity={0.1}
            />
            <XAxis dataKey="repository" stroke="currentColor" />
            <YAxis
              yAxisId="stars"
              orientation="left"
              tickFormatter={(value) => value.toLocaleString()}
              stroke="currentColor"
            />
            <YAxis
              yAxisId="growth"
              orientation="right"
              tickFormatter={(value) => `${value}%`}
              stroke="currentColor"
            />
            <ChartTooltip
              content={<ChartTooltipContent labelKey="repository" />}
            />
            <Bar
              yAxisId="stars"
              dataKey="currentStars"
              fill={githubStarGrowthConfig.currentStars.color}
              name="Current Stars"
              radius={4}
            />
            <Bar
              yAxisId="growth"
              dataKey="growthPercentage"
              fill={githubStarGrowthConfig.growthPercentage.color}
              name="Growth %"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </div>
      <div className="mb-8 flex justify-center">
        <div className="grid grid-cols-5 gap-8 text-center text-sm text-gray-600 dark:text-gray-400">
          {githubStarGrowthData.map((repo) => (
            <div key={repo.repository} className="flex flex-col">
              <span className="font-semibold">{repo.repository}</span>
              <span>{repo.currentStars.toLocaleString()} stars</span>
              <span className="text-green-600 dark:text-green-400">
                +{repo.growthPercentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
