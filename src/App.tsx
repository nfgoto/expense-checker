import ExpenseList from "./components/expense/expense-list/ExpenseList.component";

function App() {
  const expenses = [
    { id: 0, title: "book", date: new Date(2022, 2, 12), amount: 22 },
    { id: 1, title: "apple", date: new Date(2022, 12, 15), amount: 34 },
    { id: 2, title: "display", date: new Date(2022, 5, 31), amount: 12 },
    { id: 3, title: "toy", date: new Date(2022, 7, 23), amount: 76 },
  ];
  return <ExpenseList expenses={expenses} />;
}

export default App;
