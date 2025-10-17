import React from "react";

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.message}</h4>
      <button className="btn btn--alt" onClick={props.onClick}>
        Cancel
      </button>
      <button className="btn" onClick={props.onClick}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
