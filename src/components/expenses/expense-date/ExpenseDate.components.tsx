import { FC } from "react";
import styles from "./ExpenseDate.styles.module.css";

interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate: FC<ExpenseDateProps> = ({ date }) => {
  const month = date.toLocaleString("en-us", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div className={styles["expense-date"]}>
      <div className={styles["expense-date__month"]}> {month}</div>
      <div className={styles["expense-date__year"]}> {year}</div>
      <div className={styles["expense-date__day"]}> {day}</div>
    </div>
  );
};

export default ExpenseDate;
