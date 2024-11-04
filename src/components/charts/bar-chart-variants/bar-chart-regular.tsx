"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

interface BarChartProps {
  data: any;
}

const BarChartRegular: React.FC<BarChartProps> = ({ data }) => {
  const chartConfig = {
    desktop: {
      label: `${Object.keys(data.chartData[0])[1]}`,
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;
  return (
    <Card className="dark">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data.chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={`${Object.keys(data.chartData[0])[0]}`}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey={`${Object.keys(data.chartData[0])[1]}`}
              fill="var(--color-desktop)"
              radius={8}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default BarChartRegular;
