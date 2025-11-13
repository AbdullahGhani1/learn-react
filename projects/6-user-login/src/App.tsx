import React, { useState } from 'react';

import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(() => {
      const storeUserLoginStatus = localStorage.getItem('isLoggedIn');
      return storeUserLoginStatus === '1';
   });

   const loginHandler = () => {
      localStorage.setItem('isLoggedIn', '1');
      setIsLoggedIn(true);
   };

   const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
   };

   return (
      <React.Fragment>
         <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
         <main>
            {!isLoggedIn && <Login onLogin={loginHandler} />}
            {isLoggedIn && <Home onLogout={logoutHandler} />}
         </main>
      </React.Fragment>
   );
}

export default App;
