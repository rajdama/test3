import React from "react";
import AreaChartRegular from "./area-regular";
import AreaChartLinear from "./area-linear";
import AreaChartStep from "./area-step";
import AreaChartStacked from "./area-stacked";

interface AreaProps {
  variantType: string;
  data: any;
}

const SelectAreaChart: React.FC<AreaProps> = ({ variantType, data }) => {
  console.log(variantType);
  switch (variantType) {
    case "area-regular":
      return <AreaChartRegular data={data} />;
    case "area-linear":
      return <AreaChartLinear data={data} />;
    case "area-step":
      return <AreaChartStep data={data} />;
    case "area-stacked":
      return <AreaChartStacked data={data} />;
    default:
      return <p>Unsupported chart type</p>;
  }
};

export default SelectAreaChart;
