import { FC } from "react";
import { Expense } from "../../types";
import CharBarList from "./chart-bar-list/CharBarList.component";
import styles from "./Chart.styles.module.css";

interface ChartProps {
  yearlyExpenses: Expense[];
}

const Chart: FC<ChartProps> = ({ yearlyExpenses }) => {
  const dataPoints = [
    { value: 0, label: "Jan" },
    { value: 0, label: "Feb" },
    { value: 0, label: "Mar" },
    { value: 0, label: "Apr" },
    { value: 0, label: "May" },
    { value: 0, label: "Jun" },
    { value: 0, label: "Jul" },
    { value: 0, label: "Aug" },
    { value: 0, label: "Sept" },
    { value: 0, label: "Oct" },
    { value: 0, label: "Nov" },
    { value: 0, label: "Dec" },
  ];

  yearlyExpenses.forEach(({ amount, date }) => {
    const month = date.toLocaleString("en-us", { month: "short" });
    const index = dataPoints.findIndex(({ label }) => label === month);
    dataPoints[index].value += amount;
  });

  return (
    <div className={styles.chart}>
      <CharBarList dataPoints={dataPoints} />
    </div>
  );
};

export default Chart;
