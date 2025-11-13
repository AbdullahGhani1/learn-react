import React from 'react';

import styles from './Card.module.css';
interface CardProps {
   children: React.ReactNode;
   className?: string;
}
function Card(props: CardProps) {
   return (
      <div className={`${styles.card} ${props.className}`}>
         {props.children}
      </div>
   );
}

export default Card;
