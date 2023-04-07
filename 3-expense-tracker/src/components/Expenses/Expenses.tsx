import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
interface Props {
  items: {
    id: number;
    date: Date;
    title: string;
    amount: number;
  }[];
}
export default function Expenses(props: Props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };
  let filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log("acascsac", typeof filteredExpenses);
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
