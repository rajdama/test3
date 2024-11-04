import React from "react";
import { LineChartRegular } from "./line-chart-regular";
import { LineChartLinear } from "./line-chart-linear";
import { LineChartStep } from "./line-chart-step";
import { LineChartDots } from "./line-chart-dots";

interface BarChartProps {
  variantType: string;
  data: any;
}

const SelectLineChart: React.FC<BarChartProps> = ({ variantType, data }) => {
  console.log(variantType);
  switch (variantType) {
    case "line-chart-regular":
      return <LineChartRegular />;
    case "line-chart-linear":
      return <LineChartLinear />;
    case "line-chart-step":
      return <LineChartStep />;
    case "line-chart-dots":
      return <LineChartDots />;
    default:
      return <p>Unsupported chart type</p>;
  }
};

export default SelectLineChart;
