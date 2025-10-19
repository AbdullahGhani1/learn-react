import { pizzaData } from "../../data/pizzaData";
import { Pizza as Card } from "../../types/Pizza";

const Pizza = () => {
  return (
    <div>
      <ul>
        {pizzaData.map((item: Card) => (
          <li key={item.name}>
            <img src={item.photoName} alt={item.name} />
            <h2>{item.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizza;
