import React, { useState } from "react";
import "./ExpenseForm.css";
import { ExpenseFormData } from "../../interfaces";

interface ExpenseFormProps {
  onSaveExpenseData: (enteredExpenseData: ExpenseFormData) => void;
  onCancel: () => void;
}

function ExpenseForm(props: ExpenseFormProps) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const expenseData: ExpenseFormData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    props.onCancel();
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__contols">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={"0.01"}
            step={"0.01"}
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1989-01-01"
            max="2044-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
