import React, { useState } from "react";

import "./App.css";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises", id: "g1" },
    { text: "Finish This course", id: "g2" },
  ]);
  return (
    <div className="app">
      <section id="goal-form">
        <CourseInput />
      </section>
      <section id="goals"></section>
    </div>
  );
}

export default App;
