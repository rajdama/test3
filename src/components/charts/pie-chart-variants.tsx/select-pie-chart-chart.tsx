import React from "react";
import { PieChartRegular } from "./pie-chart-regular";
import { PieChartLegend } from "./pie-chart-legend";
import { PieChartDonut } from "./pie-chart-donut";

interface BarChartProps {
  variantType: string;
  data: any;
}

const SelectPieChart: React.FC<BarChartProps> = ({ variantType, data }) => {
  console.log(variantType);
  switch (variantType) {
    case "pie-chart-regular":
      return <PieChartRegular />;
    case "pie-chart-legend":
      return <PieChartLegend />;
    case "pie-chart-donut":
      return <PieChartDonut />;
    default:
      return <p>Unsupported chart type</p>;
  }
};

export default SelectPieChart;
