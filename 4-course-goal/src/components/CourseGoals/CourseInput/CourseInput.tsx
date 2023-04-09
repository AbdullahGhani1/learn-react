import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../../Ui/Button";
interface CousrseInputProps {
  onAddGoal: (goal: string) => void;
}

function CourseInput(props: CousrseInputProps) {
  const [enteredValue, setEnteredValue] = useState("");
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };
  const goalInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredValue(event.target.value);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
