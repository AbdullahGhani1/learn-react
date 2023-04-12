import React, { useState } from "react";
import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
interface User {
  name: string;
  age: number;
  id: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const userAddHandler = (name: string, age: number) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { name, age, id: Math.random().toString() }];
    });
  };
  return (
    <div className="App">
      <AddUsers onAddUser={userAddHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
