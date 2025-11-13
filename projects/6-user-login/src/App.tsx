import React, { useEffect, useState } from 'react';
import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   useEffect(() => {
      const storeUserLoginStatus = localStorage.getItem('isLoggedIn');
      if (storeUserLoginStatus === '1') {
         setIsLoggedIn(true);
      }
   }, []);
   const loginHandler = (email: string, password: string) => {
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
