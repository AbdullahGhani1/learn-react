import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import { ExpenseFormData } from "./components/NewExpense/ExpenseForm";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
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

  const addExpenseHandler = (expense: ExpenseFormData) => {
    console.log(expense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
