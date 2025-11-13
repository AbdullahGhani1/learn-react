import React, { useState } from 'react';

import './Expenses.css';
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
interface Props {
   items: {
      id: number;
      date: Date;
      title: string;
      amount: number;
   }[];
}
export default function Expenses(props: Props) {
   const [filteredYear, setFilteredYear] = useState('2020');
   const filterChangeHandler = (selectedYear: string) => {
      setFilteredYear(selectedYear);
   };
   const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
   });
   return (
      <Card className="expenses">
         <ExpensesFilter
            onChangeFilter={filterChangeHandler}
            selected={filteredYear}
         />
         <ExpenseChart expenses={filteredExpenses} />
         <ExpensesList items={filteredExpenses} />
      </Card>
   );
}
