import React from 'react';
interface CardProps {
   children: React.ReactNode;
   className: string;
}
export default function Card(props: CardProps) {
   const classes = `card ${props.className}`;
   return <div className={classes}>{props.children}</div>;
}
