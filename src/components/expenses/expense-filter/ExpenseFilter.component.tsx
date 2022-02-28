import { ChangeEventHandler, FC } from "react";
import styles from "./ExpenseFilter.styles.module.css";

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
  <div className={styles["expense-filter"]}>
    <div className={styles["expense-filter__control"]}>
      <label htmlFor="filter-year">Filter per Year:&nbsp;</label>
      <select
        name="filter-year"
        value={selectedYear}
        onChange={handleFilterYearChange}
        className={styles["expense-filter__control"]}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default ExpenseFilter;
