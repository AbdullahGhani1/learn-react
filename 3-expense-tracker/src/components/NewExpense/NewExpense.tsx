import React from "react";
import "./NewExpense.css";
import ExpenseForm, { ExpenseFormData } from "./ExpenseForm";
interface ExpenseFormProps {
  onAddExpense: (expense: ExpenseFormData) => void;
}
export default function NewExpense(props: ExpenseFormProps) {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseFormData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
