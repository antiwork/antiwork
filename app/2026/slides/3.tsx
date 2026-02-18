import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const companyRevenueConfig = {
  companyRevenue: {
    label: "Company Revenue",
    color: "#1d4ed8",
  },
} satisfies ChartConfig;

const companyRevenueData = [
  { month: "Mar '12", companyRevenue: 1681 },
  { month: "Apr '12", companyRevenue: 1391 },
  { month: "May '12", companyRevenue: 1940 },
  { month: "Jun '12", companyRevenue: 4628 },
  { month: "Jul '12", companyRevenue: 4146 },
  { month: "Aug '12", companyRevenue: 3575 },
  { month: "Sep '12", companyRevenue: 6572 },
  { month: "Oct '12", companyRevenue: 4336 },
  { month: "Nov '12", companyRevenue: 7745 },
  { month: "Dec '12", companyRevenue: 12691 },
  { month: "Jan '13", companyRevenue: 13806 },
  { month: "Feb '13", companyRevenue: 14501 },
  { month: "Mar '13", companyRevenue: 24787 },
  { month: "Apr '13", companyRevenue: 16161 },
  { month: "May '13", companyRevenue: 30701 },
  { month: "Jun '13", companyRevenue: 20969 },
  { month: "Jul '13", companyRevenue: 23896 },
  { month: "Aug '13", companyRevenue: 32989 },
  { month: "Sep '13", companyRevenue: 42068 },
  { month: "Oct '13", companyRevenue: 87585 },
  { month: "Nov '13", companyRevenue: 83703 },
  { month: "Dec '13", companyRevenue: 51599 },
  { month: "Jan '14", companyRevenue: 50886 },
  { month: "Feb '14", companyRevenue: 48873 },
  { month: "Mar '14", companyRevenue: 63917 },
  { month: "Apr '14", companyRevenue: 64494 },
  { month: "May '14", companyRevenue: 56193 },
  { month: "Jun '14", companyRevenue: 62870 },
  { month: "Jul '14", companyRevenue: 81135 },
  { month: "Aug '14", companyRevenue: 88435 },
  { month: "Sep '14", companyRevenue: 93107 },
  { month: "Oct '14", companyRevenue: 96034 },
  { month: "Nov '14", companyRevenue: 122530 },
  { month: "Dec '14", companyRevenue: 86899 },
  { month: "Jan '15", companyRevenue: 78304 },
  { month: "Feb '15", companyRevenue: 92058 },
  { month: "Mar '15", companyRevenue: 103550 },
  { month: "Apr '15", companyRevenue: 84054 },
  { month: "May '15", companyRevenue: 86325 },
  { month: "Jun '15", companyRevenue: 89140 },
  { month: "Jul '15", companyRevenue: 116186 },
  { month: "Aug '15", companyRevenue: 127407 },
  { month: "Sep '15", companyRevenue: 115480 },
  { month: "Oct '15", companyRevenue: 132059 },
  { month: "Nov '15", companyRevenue: 148745 },
  { month: "Dec '15", companyRevenue: 144747 },
  { month: "Jan '16", companyRevenue: 178162 },
  { month: "Feb '16", companyRevenue: 177087 },
  { month: "Mar '16", companyRevenue: 189378 },
  { month: "Apr '16", companyRevenue: 187673 },
  { month: "May '16", companyRevenue: 188936 },
  { month: "Jun '16", companyRevenue: 176731 },
  { month: "Jul '16", companyRevenue: 179943 },
  { month: "Aug '16", companyRevenue: 194404 },
  { month: "Sep '16", companyRevenue: 202593 },
  { month: "Oct '16", companyRevenue: 206748 },
  { month: "Nov '16", companyRevenue: 215669 },
  { month: "Dec '16", companyRevenue: 176699 },
  { month: "Jan '17", companyRevenue: 222676 },
  { month: "Feb '17", companyRevenue: 217592 },
  { month: "Mar '17", companyRevenue: 225865 },
  { month: "Apr '17", companyRevenue: 218175 },
  { month: "May '17", companyRevenue: 215833 },
  { month: "Jun '17", companyRevenue: 217506 },
  { month: "Jul '17", companyRevenue: 211008 },
  { month: "Aug '17", companyRevenue: 247429 },
  { month: "Sep '17", companyRevenue: 231586 },
  { month: "Oct '17", companyRevenue: 237248 },
  { month: "Nov '17", companyRevenue: 262822 },
  { month: "Dec '17", companyRevenue: 184154 },
  { month: "Jan '18", companyRevenue: 256579 },
  { month: "Feb '18", companyRevenue: 256031 },
  { month: "Mar '18", companyRevenue: 279498 },
  { month: "Apr '18", companyRevenue: 273685 },
  { month: "May '18", companyRevenue: 272383 },
  { month: "Jun '18", companyRevenue: 261839 },
  { month: "Jul '18", companyRevenue: 287099 },
  { month: "Aug '18", companyRevenue: 288649 },
  { month: "Sep '18", companyRevenue: 289686 },
  { month: "Oct '18", companyRevenue: 294278 },
  { month: "Nov '18", companyRevenue: 351749 },
  { month: "Dec '18", companyRevenue: 275845 },
  { month: "Jan '19", companyRevenue: 341406 },
  { month: "Feb '19", companyRevenue: 331401 },
  { month: "Mar '19", companyRevenue: 385229 },
  { month: "Apr '19", companyRevenue: 361687 },
  { month: "May '19", companyRevenue: 393178 },
  { month: "Jun '19", companyRevenue: 404212 },
  { month: "Jul '19", companyRevenue: 426158 },
  { month: "Aug '19", companyRevenue: 468250 },
  { month: "Sep '19", companyRevenue: 445054 },
  { month: "Oct '19", companyRevenue: 458314 },
  { month: "Nov '19", companyRevenue: 492443 },
  { month: "Dec '19", companyRevenue: 416580 },
  { month: "Jan '20", companyRevenue: 549166 },
  { month: "Feb '20", companyRevenue: 531720 },
  { month: "Mar '20", companyRevenue: 629099 },
  { month: "Apr '20", companyRevenue: 773557 },
  { month: "May '20", companyRevenue: 803348 },
  { month: "Jun '20", companyRevenue: 786151 },
  { month: "Jul '20", companyRevenue: 802068 },
  { month: "Aug '20", companyRevenue: 823028 },
  { month: "Sep '20", companyRevenue: 812409 },
  { month: "Oct '20", companyRevenue: 831393 },
  { month: "Nov '20", companyRevenue: 928243 },
  { month: "Dec '20", companyRevenue: 940612 },
  { month: "Jan '21", companyRevenue: 917656 },
  { month: "Feb '21", companyRevenue: 868634 },
  { month: "Mar '21", companyRevenue: 1017738 },
  { month: "Apr '21", companyRevenue: 964777 },
  { month: "May '21", companyRevenue: 924785 },
  { month: "Jun '21", companyRevenue: 920364 },
  { month: "Jul '21", companyRevenue: 905699 },
  { month: "Aug '21", companyRevenue: 910240 },
  { month: "Sep '21", companyRevenue: 909935 },
  { month: "Oct '21", companyRevenue: 891274 },
  { month: "Nov '21", companyRevenue: 897364 },
  { month: "Dec '21", companyRevenue: 845514 },
  { month: "Jan '22", companyRevenue: 889383 },
  { month: "Feb '22", companyRevenue: 839017 },
  { month: "Mar '22", companyRevenue: 890129 },
  { month: "Apr '22", companyRevenue: 867932 },
  { month: "May '22", companyRevenue: 882375 },
  { month: "Jun '22", companyRevenue: 903167 },
  { month: "Jul '22", companyRevenue: 814900 },
  { month: "Aug '22", companyRevenue: 837278 },
  { month: "Sep '22", companyRevenue: 829328 },
  { month: "Oct '22", companyRevenue: 880379 },
  { month: "Nov '22", companyRevenue: 964551 },
  { month: "Dec '22", companyRevenue: 963970 },
  { month: "Jan '23", companyRevenue: 1052241 },
  { month: "Feb '23", companyRevenue: 1780531 },
  { month: "Mar '23", companyRevenue: 1949934 },
  { month: "Apr '23", companyRevenue: 1799462 },
  { month: "May '23", companyRevenue: 1784416 },
  { month: "Jun '23", companyRevenue: 1709146 },
  { month: "Jul '23", companyRevenue: 1778176 },
  { month: "Aug '23", companyRevenue: 1764838 },
  { month: "Sep '23", companyRevenue: 1672195 },
  { month: "Oct '23", companyRevenue: 1728294 },
  { month: "Nov '23", companyRevenue: 1891083 },
  { month: "Dec '23", companyRevenue: 1828191 },
  { month: "Jan '24", companyRevenue: 1788416 },
  { month: "Feb '24", companyRevenue: 1757577 },
  { month: "Mar '24", companyRevenue: 2053106 },
  { month: "Apr '24", companyRevenue: 1667762 },
  { month: "May '24", companyRevenue: 1740341 },
  { month: "Jun '24", companyRevenue: 1614342 },
  { month: "Jul '24", companyRevenue: 1561639 },
  { month: "Aug '24", companyRevenue: 1472347 },
  { month: "Sep '24", companyRevenue: 1335864 },
  { month: "Oct '24", companyRevenue: 1348156 },
  { month: "Nov '24", companyRevenue: 1298473 },
  { month: "Dec '24", companyRevenue: 1313286 },
  { month: "Jan '25", companyRevenue: 1554726 },
  { month: "Feb '25", companyRevenue: 1428578 },
  { month: "Mar '25", companyRevenue: 1526647 },
  { month: "Apr '25", companyRevenue: 1468886 },
  { month: "May '25", companyRevenue: 1559563 },
  { month: "Jun '25", companyRevenue: 1451884 },
  { month: "Jul '25", companyRevenue: 1527654 },
  { month: "Aug '25", companyRevenue: 1576079 },
  { month: "Sep '25", companyRevenue: 1439565 },
  { month: "Oct '25", companyRevenue: 1428642 },
  { month: "Nov '25", companyRevenue: 1459911 },
  { month: "Dec '25", companyRevenue: 1363596 },
  { month: "Jan '26", companyRevenue: 1537940 },
];

export default function Slide3() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-12 flex h-24 items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Company Revenue
        </h1>
      </div>
      <div className="flex w-full flex-1 items-center justify-center">
        <ChartContainer config={companyRevenueConfig} className="h-4/5 w-4/5">
          <BarChart
            data={companyRevenueData}
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
              dataKey="companyRevenue"
              fill={companyRevenueConfig.companyRevenue.color}
              name="Company Revenue"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
