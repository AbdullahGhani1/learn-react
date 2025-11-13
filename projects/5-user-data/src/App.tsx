import React, { useState } from 'react';

import './App.css';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
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
      <React.Fragment>
         <AddUsers onAddUser={userAddHandler} />
         <UsersList users={users} />
      </React.Fragment>
   );
}

export default App;
