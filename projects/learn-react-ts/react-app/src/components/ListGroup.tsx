import { useState } from "react";
import Button from "./Button";

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
      <Button color="info" onClick={() => console.log("")}>
        Filter
      </Button>
      {items.length === 0 && <p className="display-6">No City Found</p>}
      <ul className="list-group container">
        {items.map((item, index) => (
          <li
            className={`list-group-item cursor-pointer ${
              selectedCity === index && "active"
            }`}
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
