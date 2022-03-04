import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./AddExpenseForm.styles.module.css";
import { Expense } from "../../../types";

interface AddExpenseFormProps {
  onSaveExpense(ex: Expense): void;
}

const AddExpenseForm: FC<AddExpenseFormProps> = ({
  onSaveExpense: addNewExpense,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isAmountValid, setIsAmountValid] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const isFormValid = !isTitleValid || !isAmountValid || !isDateValid;
  const titleRef = useRef<HTMLInputElement | null>(null);

  const minDate = `${new Date().getFullYear() - 1}-01-01`;
  const maxDate = `${new Date().getFullYear()}-12-31`;

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) =>
    setTitle((_) => {
      setIsTitleValid(!!value.trim());
      return value;
    });

  const handleAmountChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) =>
    setAmount((_) => {
      setIsAmountValid(+value > 0);
      return value;
    });

  const handleDateChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) =>
    setDate((_) => {
      setIsDateValid(!!value);
      return value;
    });

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

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["add-expense__controls"]}>
        <div className={styles["add-expense__control"]}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
            maxLength={255}
            ref={titleRef}
          />
        </div>
        <div className={styles["add-expense__control"]}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            min={1}
            max={99999}
            step="any"
          />
        </div>
        <div className={styles["add-expense__control"]}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            min={minDate}
            max={maxDate}
            value={date}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className={styles["add-expense__actions"]}>
        <button disabled={isFormValid}>Add Expense</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
