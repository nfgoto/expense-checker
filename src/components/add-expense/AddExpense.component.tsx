import "./AddExpense.styles.css";
import { Dispatch, FC, SetStateAction } from "react";
import AddExpenseForm from "./add-expense-form/AddExpenseForm.compponent";
import { Expense } from "../../types";

interface AddExpenseProps {
  setExpenses: Dispatch<SetStateAction<Expense[]>>;
}

const AddExpense: FC<AddExpenseProps> = ({ setExpenses }) => {
  const addNewExpense = (expense: Expense) =>
    setExpenses((prev) => [...prev, expense]);

  return (
    <div className="add-expense">
      <AddExpenseForm onSaveExpense={addNewExpense} />
    </div>
  );
};

export default AddExpense;
