import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUsers.module.css";
import Button from "../UI/Button";
const AddUsers = () => {
  const [enteredName, setEnteredName] = useState("");
  const enteredNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredName(event.target.value);
  };
  const addUserHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" onChange={enteredNameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
