import { FC } from "react";
import styles from "./ChartBarList.styles.module.css";
import { DataPoint } from "../../../types";
import ChartBar from "../chart-bar/ChartBar.component";

interface CharBarListProps {
  dataPoints: DataPoint[];
}

const CharBarList: FC<CharBarListProps> = ({ dataPoints }) => {
  const maxValue = Math.max(...dataPoints.map(({ value }) => value));
  return (
    <div className={styles["chart-bar-list"]}>
      {" "}
      {dataPoints.map(({ value, label }) => (
        <ChartBar key={label} value={value} maxValue={maxValue} label={label} />
      ))}
    </div>
  );
};

export default CharBarList;
