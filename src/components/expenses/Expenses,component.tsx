import { ChangeEventHandler, FC, useState } from "react";
import ExpenseFilter from "./expense-filter/ExpenseFilter.component";
import ExpenseList from "./expense-list/ExpenseList.component";
import styles from "./Expenses.styles.module.css";
import { Expense } from "../../types";
import Chart from "../chart/Chart.component";

interface ExpensesProps {
  expenses: Expense[];
}

const Expenses: FC<ExpensesProps> = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState(
    new Date().getFullYear().toString()
  );
  let years = expenses.map((exp) => exp.date.getFullYear());
  years = Array.from(new Set(years));
  const filteredExpenses = expenses.filter(
    (ex) => ex.date.getFullYear().toString() === filterYear
  );

  const handleFilterYearChange: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => setFilterYear(value);

  return (
    <div className={styles.expenses}>
      {" "}
      <ExpenseFilter
        years={years}
        selectedYear={filterYear}
        handleFilterYearChange={handleFilterYearChange}
      />
      <Chart yearlyExpenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
};

export default Expenses;
