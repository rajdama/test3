import React from "react";
import SelectAreaChart from "./area-chart-variants/select-area-chart";
import SelectBarChart from "./bar-chart-variants/select-bar-chart";
import SelectLineChart from "./line-chart-variants/select-line-chart";
import SelectPieChart from "./pie-chart-variants.tsx/select-pie-chart-chart";

interface ChartProps {
  variantType: string;
  chart: string;
  data: any;
}

const SelectChart: React.FC<ChartProps> = ({ chart, variantType, data }) => {
  console.log(variantType);
  switch (chart) {
    case "area-chart":
      return <SelectAreaChart data={data} variantType={variantType} />;
    case "bar-chart":
      return <SelectBarChart data={data} variantType={variantType} />;
    case "line-chart":
      return <SelectLineChart data={data} variantType={variantType} />;
    case "pie-chart":
      return <SelectPieChart data={data} variantType={variantType} />;
    // case "area-linear":
    //   return <AreaChartLinear />;
    // case "area-step":
    //   return <AreaChartStep />;
    default:
      return <p>Unsupported chart type</p>;
  }
};

export default SelectChart;
