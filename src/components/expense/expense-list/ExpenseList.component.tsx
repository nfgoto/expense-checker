import "./ExpenseList.styles.css";
import { FC } from "react";
import ExpenseItem from "../expensse-item/ExpenceItem.component";
import { Expense } from "../../../types";

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: FC<ExpenseListProps> = ({ expenses }) => (
  <div className="expenses">
    {" "}
    {expenses.map(({ id, ...expenseProps }, index) => (
      <ExpenseItem key={id ?? index} {...expenseProps} />
    ))}
  </div>
);

export default ExpenseList;
