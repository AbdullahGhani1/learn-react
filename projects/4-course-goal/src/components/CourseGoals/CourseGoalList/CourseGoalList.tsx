import React from 'react';

import './CourseGoalList.css';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
interface GoalsProps {
   items: {
      text: string;
      id: string;
   }[];
   onDeleteItem: (goalId: string) => void;
}
function CourseGoalList(props: GoalsProps) {
   return (
      <ul className="goal-list">
         {props.items.map((goal) => {
            return (
               <CourseGoalItem
                  key={goal.id}
                  id={goal.id}
                  onDelete={props.onDeleteItem}
               >
                  {goal.text}
               </CourseGoalItem>
            );
         })}
      </ul>
   );
}

export default CourseGoalList;
