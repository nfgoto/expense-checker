import { useState } from "react";
import AddExpense from "./components/add-expense/AddExpense.component";
import Expenses from "./components/expenses/Expenses,component";
import { Expense } from "./types";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>(
    [
      { id: "e0", title: "book", date: new Date(2022, 2, 12), amount: 22 },
      { id: "e1", title: "apple", date: new Date(2022, 12, 15), amount: 34 },
      { id: "e2", title: "display", date: new Date(2022, 5, 31), amount: 12 },
      { id: "e3", title: "toy", date: new Date(2022, 7, 23), amount: 76 },
    ].sort((a, b) => b.date.getTime() - a.date.getTime())
  );
  return (
    <>
      <AddExpense setExpenses={setExpenses} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
