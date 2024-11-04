"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts";

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

interface BarChartProps {
  data: any;
}
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig;

const BarChartNegative: React.FC<BarChartProps> = ({ data }) => {
  return (
    <Card className="dark">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data.chartData}>
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey={`${Object.keys(data.chartData[0])[1]}`}>
              <LabelList
                position="top"
                dataKey={`${Object.keys(data.chartData[0])[0]}`}
                fillOpacity={1}
              />
              {data.chartData.map((item: any) => {
                const val = item[
                  Object.keys(data.chartData[0])[1] as keyof typeof item
                ] as number;
                return (
                  <Cell
                    key={
                      item[
                        Object.keys(data.chartData[0])[0] as keyof typeof item
                      ]
                    }
                    fill={
                      val > 0 ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))"
                    }
                  />
                );
              })}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default BarChartNegative;
