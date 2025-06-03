import React, { type MouseEvent } from "react";

function ListGroup() {
  const ohioCities = [
    "Cleveland",
    "Toledo",
    "Akron",
    "Lorain",
    "Elyria",
    "Sandusky",
    "Mentor",
    "Parma",
    "Lakewood",
    "Youngstown",
  ];
  // Event Handler
  const onHandleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1 className="display-1">List</h1>
      {ohioCities.length === 0 && <p className="display-6">No City Found</p>}
      <ul className="list-group">
        {ohioCities.map((city, index) => (
          <li
            className="list-group-item cursor-grab active"
            key={index}
            onClick={onHandleClick}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
