import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const creatorEarningsConfig = {
  creatorEarnings: {
    label: "Creator Earnings",
    color: "#1d4ed8",
  },
} satisfies ChartConfig;

const formatCurrency = (value: number) => {
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  return `$${(value / 1_000).toFixed(0)}K`;
};

const creatorEarningsData = [
  { month: "Mar '12", creatorEarnings: 12315 },
  { month: "Apr '12", creatorEarnings: 12100 },
  { month: "May '12", creatorEarnings: 18232 },
  { month: "Jun '12", creatorEarnings: 69481 },
  { month: "Jul '12", creatorEarnings: 46299 },
  { month: "Aug '12", creatorEarnings: 39860 },
  { month: "Sep '12", creatorEarnings: 75870 },
  { month: "Oct '12", creatorEarnings: 58096 },
  { month: "Nov '12", creatorEarnings: 115998 },
  { month: "Dec '12", creatorEarnings: 152693 },
  { month: "Jan '13", creatorEarnings: 184765 },
  { month: "Feb '13", creatorEarnings: 200865 },
  { month: "Mar '13", creatorEarnings: 281279 },
  { month: "Apr '13", creatorEarnings: 169033 },
  { month: "May '13", creatorEarnings: 295336 },
  { month: "Jun '13", creatorEarnings: 243221 },
  { month: "Jul '13", creatorEarnings: 268071 },
  { month: "Aug '13", creatorEarnings: 402081 },
  { month: "Sep '13", creatorEarnings: 525792 },
  { month: "Oct '13", creatorEarnings: 542667 },
  { month: "Nov '13", creatorEarnings: 1033328 },
  { month: "Dec '13", creatorEarnings: 793601 },
  { month: "Jan '14", creatorEarnings: 811712 },
  { month: "Feb '14", creatorEarnings: 757057 },
  { month: "Mar '14", creatorEarnings: 992410 },
  { month: "Apr '14", creatorEarnings: 896863 },
  { month: "May '14", creatorEarnings: 815896 },
  { month: "Jun '14", creatorEarnings: 958615 },
  { month: "Jul '14", creatorEarnings: 1205895 },
  { month: "Aug '14", creatorEarnings: 1218062 },
  { month: "Sep '14", creatorEarnings: 1286640 },
  { month: "Oct '14", creatorEarnings: 1449929 },
  { month: "Nov '14", creatorEarnings: 1958874 },
  { month: "Dec '14", creatorEarnings: 1423388 },
  { month: "Jan '15", creatorEarnings: 1237471 },
  { month: "Feb '15", creatorEarnings: 1456313 },
  { month: "Mar '15", creatorEarnings: 1361025 },
  { month: "Apr '15", creatorEarnings: 1592903 },
  { month: "May '15", creatorEarnings: 1365366 },
  { month: "Jun '15", creatorEarnings: 1424198 },
  { month: "Jul '15", creatorEarnings: 1827778 },
  { month: "Aug '15", creatorEarnings: 2032668 },
  { month: "Sep '15", creatorEarnings: 1840735 },
  { month: "Oct '15", creatorEarnings: 2123974 },
  { month: "Nov '15", creatorEarnings: 2256598 },
  { month: "Dec '15", creatorEarnings: 2527442 },
  { month: "Jan '16", creatorEarnings: 2654980 },
  { month: "Feb '16", creatorEarnings: 2681660 },
  { month: "Mar '16", creatorEarnings: 2965631 },
  { month: "Apr '16", creatorEarnings: 2930606 },
  { month: "May '16", creatorEarnings: 2954424 },
  { month: "Jun '16", creatorEarnings: 2726515 },
  { month: "Jul '16", creatorEarnings: 2815065 },
  { month: "Aug '16", creatorEarnings: 3091226 },
  { month: "Sep '16", creatorEarnings: 3244633 },
  { month: "Oct '16", creatorEarnings: 3257413 },
  { month: "Nov '16", creatorEarnings: 3462868 },
  { month: "Dec '16", creatorEarnings: 3466053 },
  { month: "Jan '17", creatorEarnings: 3409469 },
  { month: "Feb '17", creatorEarnings: 3267676 },
  { month: "Mar '17", creatorEarnings: 3503636 },
  { month: "Apr '17", creatorEarnings: 3311217 },
  { month: "May '17", creatorEarnings: 3161361 },
  { month: "Jun '17", creatorEarnings: 3277791 },
  { month: "Jul '17", creatorEarnings: 3143980 },
  { month: "Aug '17", creatorEarnings: 3604564 },
  { month: "Sep '17", creatorEarnings: 3577446 },
  { month: "Oct '17", creatorEarnings: 3556916 },
  { month: "Nov '17", creatorEarnings: 4157109 },
  { month: "Dec '17", creatorEarnings: 3492653 },
  { month: "Jan '18", creatorEarnings: 3873471 },
  { month: "Feb '18", creatorEarnings: 3820744 },
  { month: "Mar '18", creatorEarnings: 4255871 },
  { month: "Apr '18", creatorEarnings: 4069115 },
  { month: "May '18", creatorEarnings: 4148844 },
  { month: "Jun '18", creatorEarnings: 3945217 },
  { month: "Jul '18", creatorEarnings: 4416477 },
  { month: "Aug '18", creatorEarnings: 4286085 },
  { month: "Sep '18", creatorEarnings: 4216321 },
  { month: "Oct '18", creatorEarnings: 4501975 },
  { month: "Nov '18", creatorEarnings: 5526736 },
  { month: "Dec '18", creatorEarnings: 5334534 },
  { month: "Jan '19", creatorEarnings: 5065632 },
  { month: "Feb '19", creatorEarnings: 4709719 },
  { month: "Mar '19", creatorEarnings: 5761685 },
  { month: "Apr '19", creatorEarnings: 5358463 },
  { month: "May '19", creatorEarnings: 5687132 },
  { month: "Jun '19", creatorEarnings: 5727200 },
  { month: "Jul '19", creatorEarnings: 6172745 },
  { month: "Aug '19", creatorEarnings: 6551931 },
  { month: "Sep '19", creatorEarnings: 6406389 },
  { month: "Oct '19", creatorEarnings: 6738302 },
  { month: "Nov '19", creatorEarnings: 7424820 },
  { month: "Dec '19", creatorEarnings: 7501499 },
  { month: "Jan '20", creatorEarnings: 8300108 },
  { month: "Feb '20", creatorEarnings: 8297101 },
  { month: "Mar '20", creatorEarnings: 9769201 },
  { month: "Apr '20", creatorEarnings: 12164124 },
  { month: "May '20", creatorEarnings: 12450344 },
  { month: "Jun '20", creatorEarnings: 12180078 },
  { month: "Jul '20", creatorEarnings: 12524523 },
  { month: "Aug '20", creatorEarnings: 12896252 },
  { month: "Sep '20", creatorEarnings: 12657916 },
  { month: "Oct '20", creatorEarnings: 12655600 },
  { month: "Nov '20", creatorEarnings: 14513031 },
  { month: "Dec '20", creatorEarnings: 13893210 },
  { month: "Jan '21", creatorEarnings: 14697247 },
  { month: "Feb '21", creatorEarnings: 14114671 },
  { month: "Mar '21", creatorEarnings: 16774107 },
  { month: "Apr '21", creatorEarnings: 15474906 },
  { month: "May '21", creatorEarnings: 15901934 },
  { month: "Jun '21", creatorEarnings: 15698593 },
  { month: "Jul '21", creatorEarnings: 15391138 },
  { month: "Aug '21", creatorEarnings: 15438254 },
  { month: "Sep '21", creatorEarnings: 15367318 },
  { month: "Oct '21", creatorEarnings: 14657475 },
  { month: "Nov '21", creatorEarnings: 16892244 },
  { month: "Dec '21", creatorEarnings: 15074618 },
  { month: "Jan '22", creatorEarnings: 15686336 },
  { month: "Feb '22", creatorEarnings: 14893255 },
  { month: "Mar '22", creatorEarnings: 15590150 },
  { month: "Apr '22", creatorEarnings: 15376995 },
  { month: "May '22", creatorEarnings: 16420521 },
  { month: "Jun '22", creatorEarnings: 16901421 },
  { month: "Jul '22", creatorEarnings: 14387364 },
  { month: "Aug '22", creatorEarnings: 14819214 },
  { month: "Sep '22", creatorEarnings: 14328405 },
  { month: "Oct '22", creatorEarnings: 14535034 },
  { month: "Nov '22", creatorEarnings: 16990425 },
  { month: "Dec '22", creatorEarnings: 15895432 },
  { month: "Jan '23", creatorEarnings: 16789024 },
  { month: "Feb '23", creatorEarnings: 14523296 },
  { month: "Mar '23", creatorEarnings: 15627934 },
  { month: "Apr '23", creatorEarnings: 14452506 },
  { month: "May '23", creatorEarnings: 14169917 },
  { month: "Jun '23", creatorEarnings: 13648416 },
  { month: "Jul '23", creatorEarnings: 13380392 },
  { month: "Aug '23", creatorEarnings: 13091930 },
  { month: "Sep '23", creatorEarnings: 12975466 },
  { month: "Oct '23", creatorEarnings: 13406332 },
  { month: "Nov '23", creatorEarnings: 14613996 },
  { month: "Dec '23", creatorEarnings: 14038724 },
  { month: "Jan '24", creatorEarnings: 13726637 },
  { month: "Feb '24", creatorEarnings: 13354483 },
  { month: "Mar '24", creatorEarnings: 15402665 },
  { month: "Apr '24", creatorEarnings: 13174398 },
  { month: "May '24", creatorEarnings: 13219560 },
  { month: "Jun '24", creatorEarnings: 12260732 },
  { month: "Jul '24", creatorEarnings: 11913896 },
  { month: "Aug '24", creatorEarnings: 11282657 },
  { month: "Sep '24", creatorEarnings: 9894820 },
  { month: "Oct '24", creatorEarnings: 9719864 },
  { month: "Nov '24", creatorEarnings: 9566557 },
  { month: "Dec '24", creatorEarnings: 9614274 },
  { month: "Jan '25", creatorEarnings: 9464514 },
  { month: "Feb '25", creatorEarnings: 8694794 },
  { month: "Mar '25", creatorEarnings: 9333595 },
  { month: "Apr '25", creatorEarnings: 8856441 },
  { month: "May '25", creatorEarnings: 9436183 },
  { month: "Jun '25", creatorEarnings: 8811438 },
  { month: "Jul '25", creatorEarnings: 9262582 },
  { month: "Aug '25", creatorEarnings: 9073058 },
  { month: "Sep '25", creatorEarnings: 8658909 },
  { month: "Oct '25", creatorEarnings: 8522753 },
  { month: "Nov '25", creatorEarnings: 9011573 },
  { month: "Dec '25", creatorEarnings: 9003189 },
  { month: "Jan '26", creatorEarnings: 9440148 },
];

const totalCreatorEarnings = creatorEarningsData.reduce(
  (sum, d) => sum + d.creatorEarnings,
  0
);

export default function Slide2() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-12 flex h-24 items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Creator Earnings
        </h1>
      </div>

      <div className="flex min-h-0 w-full flex-1 px-4">
        {/* Left side - Chart (3/4) */}
        <div className="flex w-3/4 items-center justify-center">
          <ChartContainer
            config={creatorEarningsConfig}
            className="h-4/5 w-full"
          >
            <BarChart
              data={creatorEarningsData}
              margin={{ top: 40, right: 30, left: 40, bottom: 40 }}
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
                interval="preserveStartEnd"
                angle={-45}
                textAnchor="end"
                height={60}
                tick={{ fontSize: 14 }}
              />
              <YAxis
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                stroke="currentColor"
                tick={{ fontSize: 14 }}
              />
              <ChartTooltip
                content={<ChartTooltipContent labelKey="month" prefix="$" />}
              />
              <Bar
                dataKey="creatorEarnings"
                fill={creatorEarningsConfig.creatorEarnings.color}
                name="Creator Earnings"
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </div>

        {/* Right side - Total (1/4) */}
        <div className="flex w-1/4 flex-col justify-center border-l border-gray-200 pl-6 dark:border-gray-700">
          <div className="rounded-xl bg-blue-50 p-5 dark:bg-blue-950">
            <p className="text-3xl font-bold text-blue-600 md:text-4xl dark:text-blue-400">
              {formatCurrency(totalCreatorEarnings)}
            </p>
            <p className="mt-2 text-base text-gray-600 md:text-lg dark:text-gray-400">
              Total Creator Earnings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
