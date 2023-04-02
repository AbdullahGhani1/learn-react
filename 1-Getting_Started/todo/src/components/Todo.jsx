import React, { useState } from "react";
import "./todo.css";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(!showModal);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  return (
    <div className="container">
      <h1 className="page-title">{props.text}</h1>
      <div className="card">
        <h2 className="card-header">Learn React</h2>
        <div className="actions">
          <button className="btn" onClick={showModalHandler}>
            {showModal ? "Close Modal" : "Show Modal"}
          </button>
        </div>
      </div>
      {showModal && <Backdrop />}
      {showModal && (
        <Modal message={"Are you Sure?"} onClick={closeModalHandler} />
      )}
    </div>
  );
}

export default Todo;
