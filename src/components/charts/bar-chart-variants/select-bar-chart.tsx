import React from "react";
import BarChartHorizontal from "./bar-chart-horizontal";
import BarChartRegular from "./bar-chart-regular";
import BarChartNegaive from "./bar-chart-negative";

interface BarChartProps {
  variantType: string;
  data: any;
}

const SelectBarChart: React.FC<BarChartProps> = ({ variantType, data }) => {
  console.log(variantType);
  switch (variantType) {
    case "bar-chart-regular":
      return <BarChartRegular data={data} />;
    case "bar-chart-horizontal":
      return <BarChartHorizontal data={data} />;
    case "bar-chart-negative":
      return <BarChartNegaive data={data} />;
    default:
      return <p>Unsupported chart type</p>;
  }
};

export default SelectBarChart;
