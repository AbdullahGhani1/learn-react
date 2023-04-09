import React, { CSSProperties, useState } from "react";
import "./CourseInput.css";
import Button from "../../Ui/Button";
interface CousrseInputProps {
  onAddGoal: (goal: string) => void;
}

function CourseInput(props: CousrseInputProps) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredValue.trim().length == 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };
  const goalInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  // const labelStyle: CSSProperties = isValid === false ? { color: "red" } : {};
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isValid === false ? "red" : "black" }}>
          Course Goal
        </label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
          style={{
            backgroundColor: !isValid ? "salmon" : "transparent",
          }}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
