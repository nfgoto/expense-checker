import { FC } from "react";
import "./ExpenseDate.styles.css";

interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate: FC<ExpenseDateProps> = ({ date }) => {
  const month = date.toLocaleString("en-us", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month "> {month}</div>
      <div className="expense-date__year"> {year}</div>
      <div className="expense-date__day"> {day}</div>
    </div>
  );
};

export default ExpenseDate;
