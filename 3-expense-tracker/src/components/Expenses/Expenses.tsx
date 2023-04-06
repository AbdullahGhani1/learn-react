import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
interface Props {
  items: {
    id: number;
    expenseDate: Date;
    expenseTitle: string;
    expenseAmount: number;
  }[];
}
export default function Expenses(props: Props) {
  return (
    <Card className="expenses">
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
