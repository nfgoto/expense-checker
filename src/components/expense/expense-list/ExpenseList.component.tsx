import "./ExpenseList.styles.css";
import { ChangeEventHandler, FC, useState } from "react";
import ExpenseItem from "../expensse-item/ExpenceItem.component";
import { Expense } from "../../../types";
import ExpenseFilter from "../expense-filter/ExpenseFilter.component";

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: FC<ExpenseListProps> = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState(
    new Date().getFullYear().toString()
  );
  let years = expenses.map((exp) => exp.date.getFullYear());
  years = Array.from(new Set(years));

  const handleFilterYearChange: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => setFilterYear(value);

  return (
    <div className="expenses">
      <ExpenseFilter
        years={years}
        selectedYear={filterYear}
        handleFilterYearChange={handleFilterYearChange}
      />{" "}
      {expenses
        .filter((ex) => ex.date.getFullYear().toString() === filterYear)
        .map(({ id, ...expenseProps }, index) => (
          <ExpenseItem key={id ?? index} {...expenseProps} />
        ))}
    </div>
  );
};

export default ExpenseList;
