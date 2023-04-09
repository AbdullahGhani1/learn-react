import React from "react";
import "./CourseGoalItem.css";
interface GoalItemProps {
  children: React.ReactNode;
  key: string;
  id: string;
  onDelete: (goalId: string) => void;
}
function CourseGoalItem(props: GoalItemProps) {
  const deleteItemHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li className="goal-item" onClick={deleteItemHandler}>
      {props.children}
    </li>
  );
}

export default CourseGoalItem;
