import "./footer.css";
const Footer = () => {
  const hour: number = new Date().getHours();
  const openHour: number = 12;
  const closeHour: number = 22;
  if (hour >= openHour && hour <= closeHour) {
    alert("We're currently open!");
  } else {
    alert("Sorry we're closed");
  }
  return (
    <footer className="footer">
      We're happy to welcome you between 12:00 and 22:00
    </footer>
  );
};

export default Footer;
