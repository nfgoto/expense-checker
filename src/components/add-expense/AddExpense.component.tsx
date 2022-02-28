import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./AddExpense.styles.module.css";
import AddExpenseForm from "./add-expense-form/AddExpenseForm.compponent";
import { Expense } from "../../types";

interface AddExpenseProps {
  setExpenses: Dispatch<SetStateAction<Expense[]>>;
}

const AddExpense: FC<AddExpenseProps> = ({ setExpenses }) => {
  const [displayForm, setDisplayForm] = useState(false);
  const addNewExpense = (expense: Expense) => (
    setExpenses((prev) =>
      [expense, ...prev].sort((a, b) => b.date.getTime() - a.date.getTime())
    ),
    setDisplayForm(false)
  );
  const handleClick = () => setDisplayForm(true);

  return (
    <div className={styles["add-expense"]}>
      {!displayForm && <button onClick={handleClick}>Add New Expense</button>}
      {displayForm && <AddExpenseForm onSaveExpense={addNewExpense} />}
    </div>
  );
};

export default AddExpense;
