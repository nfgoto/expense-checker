import "./ExpenseFilter.styles.css";
import { ChangeEventHandler, FC } from "react";

interface ExpenseFilterProps {
  selectedYear: string;
  handleFilterYearChange: ChangeEventHandler<HTMLSelectElement>;
  years: number[];
}

const ExpenseFilter: FC<ExpenseFilterProps> = ({
  selectedYear,
  handleFilterYearChange,
  years,
}) => (
  <div className="expense-filter">
    <span className="expense-filter__label ">Year:&nbsp;</span>
    <select
      name="filter-year"
      value={selectedYear}
      onChange={handleFilterYearChange}
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  </div>
);

export default ExpenseFilter;
