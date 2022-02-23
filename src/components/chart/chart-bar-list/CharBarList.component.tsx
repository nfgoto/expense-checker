import "./ChartBarList.styles.css";
import { FC } from "react";
import { DataPoint } from "../../../types";
import ChartBar from "../chart-bar/ChartBar.component";

interface CharBarListProps {
  dataPoints: DataPoint[];
}

const CharBarList: FC<CharBarListProps> = ({ dataPoints }) => {
  const maxValue = Math.max(...dataPoints.map(({ value }) => value));
  return (
    <div className="chart-bar-list">
      {" "}
      {dataPoints.map(({ value, label }) => (
        <ChartBar key={label} value={value} maxValue={maxValue} label={label} />
      ))}
    </div>
  );
};

export default CharBarList;
