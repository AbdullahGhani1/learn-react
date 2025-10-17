import React from "react";

function Backdrop() {
  // Backdrop
  return (
    <div
      className="backdrop"
      onClick={(event) => {
        event.preventDefault();
      }}
    />
  );
}

export default Backdrop;
