"use client";
import SelectChart from "@/components/charts/select-chart";
import axios from "axios";
import React, { useState } from "react";
import Dropdown from "react-multilevel-dropdown";

const dropdownData = [
  {
    "area-chart": ["area-regular", "area-linear", "area-step", "area-stacked"],
  },
  {
    "bar-chart": [
      "bar-chart-horizontal",
      "bar-chart-regular",
      "bar-chart-negative",
    ],
  },
  {
    "line-chart": [
      "line-chart-regular",
      "line-chart-linear",
      "line-chart-step",
      "line-chart-dots",
    ],
  },
  {
    "pie-chart": ["pie-chart-regular", "pie-chart-legend", "pie-chart-donut"],
  },
];

export default function Home() {
  const [hoveredItem, setHoveredItem] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [chartData, setChartData] = useState<any[]>([]);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    console.log({ hoveredItem, selectedItem });
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleSaveClick = async () => {
    const response = await axios.post("/api/prompt-to-chart", {
      inputData: inputValue,
    });
    const data = JSON.parse(response.data.output.choices[0].message.content);
    setChartData(data);
    console.log(data);
  };

  return (
    <div>
      <div
        style={{
          // position: "relative",
          display: "flex",
          marginLeft: "450px",
        }}
      >
        <div style={{ marginTop: "30px", marginRight: "20px" }}>
          <Dropdown
            title={selectedItem || "Select Chart"}
            // Optionally clear the selectedItem when clicking the dropdown button
            // onClick={() => setSelectedItem(null)}
          >
            {dropdownData.map((item, index) => {
              const [key, value] = Object.entries(item)[0];

              return (
                <Dropdown.Item
                  key={index}
                  onMouseEnter={() => handleMouseEnter(key)}
                >
                  {key}
                  {hoveredItem === key && value.length > 0 && (
                    <Dropdown.Submenu>
                      {value.map((subItem, subIndex) => (
                        <Dropdown.Item
                          key={subIndex}
                          onClick={() => handleItemClick(subItem)}
                        >
                          {subItem}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Submenu>
                  )}
                </Dropdown.Item>
              );
            })}
          </Dropdown>
        </div>

        <div>
          <textarea
            style={{ height: "80px", width: "200px", marginTop: "10px" }}
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter something"
          />
        </div>

        <button
          className="text-white bg-blue-700 "
          style={{
            marginLeft: "50px",
            marginTop: "20px",
            width: "100px",
            height: "50px",
            borderRadius: "8px",
          }}
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
      {chartData.length != 0 && (
        <div
          style={{
            margin: "auto",
            marginTop: "20px",
            height: "30px",
            width: "50%",
          }}
        >
          <SelectChart
            data={chartData}
            chart={hoveredItem}
            variantType={selectedItem}
          />
        </div>
      )}
    </div>
  );
}
