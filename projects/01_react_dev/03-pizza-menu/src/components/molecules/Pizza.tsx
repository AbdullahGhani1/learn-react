import { pizzaData } from '../../data/pizzaData';
import { Pizza as Card } from '../../types/Pizza';

const Pizza = () => {
   return (
      <ul className="pizzas">
         {pizzaData.map((item: Card) => (
            <li
               className={`pizza ${item.soldOut && 'sold-out'}`}
               key={item.name}
            >
               <img src={item.photoName} alt={item.name} />
               <div>
                  <h3>{item.name}</h3>
                  <p>{item.ingredients}</p>
                  <span>{item.soldOut ? 'Sold Out' : '$' + item.price}</span>
               </div>
            </li>
         ))}
      </ul>
   );
};

export default Pizza;
