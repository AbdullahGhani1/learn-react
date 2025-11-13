import { useState } from 'react';
import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { ExpenseFormData } from './interfaces';
const dummyExpenses = [
   {
      id: 1,
      date: new Date(2022, 10, 24),
      title: 'kode Kloud',
      amount: 120,
   },
   {
      id: 2,
      date: new Date(2022, 12, 3),
      title: 'Skill Share',
      amount: 56,
   },
   {
      id: 3,
      date: new Date(2023, 4, 3),
      title: 'Mern Stack Course',
      amount: 239,
   },
];
function App() {
   const [expenses, setExpenses] = useState(dummyExpenses);
   const addExpenseHandler = (expense: ExpenseFormData) => {
      setExpenses((prevExpenses: any) => {
         return [expense, ...prevExpenses];
      });
   };
   return (
      <div className="App">
         <NewExpense onAddExpense={addExpenseHandler} />
         <Expenses items={expenses} />
      </div>
   );
}

export default App;
