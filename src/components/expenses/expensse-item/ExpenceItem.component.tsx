import { FC } from "react";
import ExpenseDate from "../expense-date/ExpenseDate.components";
import Card from "../../UI/card/Card.component";
import styles from "./ExpenceItem.styles.module.css";

interface ExpenseItemProps {
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem: FC<ExpenseItemProps> = ({ date, title, amount }) => {
  return (
    <li>
      <Card className={styles["expense-item"]}>
        <ExpenseDate date={date} />
        <div className={styles["expense-item__description"]}>
          <h2>{title}</h2>
          <div className={styles["expense-item__price"]}>${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
