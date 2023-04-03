import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense = [
    {
      id: 1,
      expenseDate: new Date(2022, 10, 24),
      expenseTitle: "kode Kloud",
      expenseAmount: 120,
    },
    {
      id: 2,
      expenseDate: new Date(2022, 12, 3),
      expenseTitle: "Skill Share",
      expenseAmount: 56,
    },
    {
      id: 3,
      expenseDate: new Date(2023, 4, 3),
      expenseTitle: "Mern Stack Course",
      expenseAmount: 239,
    },
  ];
  return (
    <div className="App">
      <h1>Let's get Started</h1>
      <ExpenseItem
        date={expense[0].expenseDate}
        title={expense[0].expenseTitle}
        amount={expense[0].expenseAmount}
      />
      <ExpenseItem
        date={expense[1].expenseDate}
        title={expense[1].expenseTitle}
        amount={expense[1].expenseAmount}
      />
      <ExpenseItem
        date={expense[2].expenseDate}
        amount={expense[2].expenseAmount}
        title={expense[2].expenseTitle}
      />
    </div>
  );
}

export default App;
