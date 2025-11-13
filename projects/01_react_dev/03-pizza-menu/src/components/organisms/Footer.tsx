import './footer.css';
const Footer = () => {
   const hour: number = new Date().getHours();
   const openHour: number = 12;
   const closeHour: number = 22;
   const isOpen: boolean = hour >= openHour && hour <= closeHour;
   return (
      <footer className="footer">
         {isOpen ? (
            <div className="order">
               <p>
                  We're open until {closeHour}:00. Come visit us or order
                  online.
               </p>
               <button className="btn">Order</button>
            </div>
         ) : (
            <p>
               We're happy to welcome you between {openHour}:00 and {closeHour}
               :00
            </p>
         )}
      </footer>
   );
};

export default Footer;
