import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUsers.module.css";
import Button from "../UI/Button";
interface AddUsersProps {
  onAddUser: (name: string, age: number) => void;
}
const AddUsers = (props: AddUsersProps) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const userNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredUserName(event.target.value);
  };
  const addUserHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUserName.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(`userName\t${enteredUserName}\nage\t${enteredAge}`);
    props.onAddUser(enteredUserName, +enteredAge);

    setEnteredUserName("");
    setEnteredAge("");
  };
  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          value={enteredUserName}
          type="text"
          onChange={userNameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
