import "./App.css";

import Expenses from "./components/Expenses/Expenses";
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
  return (
    <div className="App">
      <h1>Let's get Started</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
