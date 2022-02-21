import "./ExpenceItem.styles.css";
import { FC } from "react";
import ExpenseDate from "../expense-date/ExpenseDate.components";
import Card from "../../UI/card/Card.component";

interface ExpenseItemProps {
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem: FC<ExpenseItemProps> = ({ date, title, amount }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
