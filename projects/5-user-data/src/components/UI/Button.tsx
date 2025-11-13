import React from 'react';

import styles from './Button.module.css';
interface buttonProps {
   children: React.ReactNode;
   type?: 'button' | 'submit';
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
function Button(props: buttonProps) {
   return (
      <button
         className={styles.button}
         type={props.type || 'button'}
         onClick={props.onClick}
      >
         {props.children}
      </button>
   );
}

export default Button;
