import React from 'react';

import classes from './Button.module.css';
interface ButtonProps {
   className: string;
   children: React.ReactNode;
   type?: 'button' | 'submit' | 'reset'; // optional prop with possible values of "button", "submit", or "reset"
   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // optional click event handler
   disabled?: boolean; // optional boolean prop to disable the button
}
const Button = (props: ButtonProps) => {
   return (
      <button
         type={props.type || 'button'}
         className={`${classes.button} ${props.className}`}
         onClick={props.onClick}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );
};

export default Button;
