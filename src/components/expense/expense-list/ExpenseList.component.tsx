import "./ExpenseList.styles.css";
import { FC } from "react";
import ExpenseItem from "../expensse-item/ExpenceItem.component";

interface Expense {
  id: number;
  title: string;
  date: Date;
  amount: number;
}

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: FC<ExpenseListProps> = ({ expenses }) => (
  <div className="expenses">
    {" "}
    {expenses.map(({ id, ...expenseProps }) => (
      <ExpenseItem key={id} {...expenseProps} />
    ))}
  </div>
);

export default ExpenseList;
