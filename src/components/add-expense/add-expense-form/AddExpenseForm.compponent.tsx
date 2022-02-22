import "./AddExpenseForm.styles.css";
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import { Expense } from "../../../types";

interface AddExpenseForm {
  onSaveExpense(ex: Expense): void;
}

const AddExpenseForm: FC<AddExpenseForm> = ({
  onSaveExpense: addNewExpense,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const maxDate = new Date(
    `${new Date().getFullYear()}-12-31`
  ).toLocaleDateString();

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setTitle(value);

  const handleAmountChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setAmount(value);

  const handleDateChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setDate(value);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newExpense: Expense = {
      title: title.trim(),
      amount: +amount,
      date: new Date(date),
    };

    addNewExpense(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-expense__controls">
        <div className="add-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="add-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="add-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max={maxDate}
            value={date}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="add-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
