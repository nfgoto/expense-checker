import "./ExpenseList.styles.css";
import { FC } from "react";
import ExpenseItem from "../expensse-item/ExpenceItem.component";
import { Expense } from "../../../types";

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: FC<ExpenseListProps> = ({ expenses }) => {
  if (!expenses.length) {
    return <h2 className="expense-list__fallback">No expenses found</h2>;
  }

  const expensesContent = expenses.map(({ id, ...expenseProps }, index) => (
    <ExpenseItem key={id ?? index} {...expenseProps} />
  ));

  return <ul className="expense-list">{expensesContent}</ul>;
};

export default ExpenseList;
