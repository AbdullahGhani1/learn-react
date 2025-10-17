import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
interface DataPoint {
  label: string;
  value: number;
}
[];
interface ChartProps {
  dataPoints: DataPoint[];
}
function Chart(props: ChartProps) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={totalMaximun}
            label={datapoint.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
