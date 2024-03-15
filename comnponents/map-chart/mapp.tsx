"use client"
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["South Korea", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["Korea, South", 600],
  ["United Arab Emirates", 700],
];

export const options = {
  colorAxis: {
    colors: ["#e31b23"]
  },
  backgroundColor: "transparent",
  datalessRegionColor: "#fff",
  defaultColor: "#fff",
};

export default function Mapp() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}
