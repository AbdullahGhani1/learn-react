import React, { CSSProperties, ReactElement, useState } from "react";
import "./CourseInput.css";
import Button from "../../Ui/Button";
import styled from "styled-components";
interface CousrseInputProps {
  onAddGoal: (goal: string) => void;
}

const FormControl: any = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }
  &.invalid label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: red;
  }
  & input {
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background-color: ${(props) => (props.invalid ? "fdf" : "transparent")};
  }
  &.invalid input {
    font-weight: bold;
    margin-bottom: 0.5rem;
    border: 1px solid red;
    background-color: #fdf;
  }
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

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
      {/* <div className={`form-control ${!isValid && "invalid"}`}> */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
