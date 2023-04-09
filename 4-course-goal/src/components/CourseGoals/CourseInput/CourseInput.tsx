import React from "react";
import "./CourseInput.css";
import Button from "../../Ui/Button";
function CourseInput() {
  return (
    <form>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
