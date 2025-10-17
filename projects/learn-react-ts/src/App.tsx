import "./App.css";
import Alert from "./components/Alert";
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
      <Alert>Hello World</Alert>
    </main>
  );
}

export default App;
