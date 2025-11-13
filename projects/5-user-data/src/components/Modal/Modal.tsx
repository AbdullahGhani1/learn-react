import React from 'react';

import styles from './ErrorModal.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';

interface ErrorModalProps {
   title: string;
   message: string;
   onClick?: React.ReactEventHandler;
}
const Modal = (props: ErrorModalProps) => {
   return (
      <Card className={styles.modal}>
         <header className={styles.header}>
            <h2>{props.title}</h2>
         </header>
         <section className={styles.content}>
            <p>{props.message}</p>
         </section>
         <footer className={styles.actions}>
            <Button onClick={props.onClick}>Okay</Button>
         </footer>
      </Card>
   );
};

export default Modal;
