import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectedItem }: ListGroupProps) {
  const [selectedCity, setSelectedCity] = useState(-1);

  return (
    <>
      <h1 className="display-1">{heading}</h1>
      {items.length === 0 && <p className="display-6">No City Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedCity === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedCity(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
