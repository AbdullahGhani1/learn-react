import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

interface ErrorModalProps {
  title: string;
  message: string;
  onClick?: React.ReactEventHandler;
}
const ErrorModal = (props: ErrorModalProps) => {
  return (
    <>
      <div className={styles.backdrop}></div>
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
    </>
  );
};

export default ErrorModal;
