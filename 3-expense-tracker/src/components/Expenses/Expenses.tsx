import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { ExpenseFilterData } from "../../interfaces";
interface Props {
  items: {
    id: number;
    expenseDate: Date;
    expenseTitle: string;
    expenseAmount: number;
  }[];
}
export default function Expenses(props: Props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.expenseDate}
          title={item.expenseTitle}
          amount={item.expenseAmount}
        />
      ))}
    </Card>
  );
}
