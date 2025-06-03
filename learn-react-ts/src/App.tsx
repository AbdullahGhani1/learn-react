import "./App.css";
import ListGroup from "./components/ListGroup";
import Message from "./components/Message";

function App() {
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
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <main>
      <Message />
      <ListGroup
        items={ohioCities}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
    </main>
  );
}

export default App;
