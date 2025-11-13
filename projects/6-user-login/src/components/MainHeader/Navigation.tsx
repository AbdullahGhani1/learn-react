import React from 'react';
import classes from './Navigation.module.css';
interface NavigationProps {
   onLogout: () => void; // event handler for logout action
   isLoggedIn: boolean;
}

const Navigation = (props: NavigationProps) => {
   return (
      <nav className={classes.nav}>
         <ul>
            {props.isLoggedIn && (
               <li>
                  <a href="/">Users</a>
               </li>
            )}
            {props.isLoggedIn && (
               <li>
                  <a href="/">Admin</a>
               </li>
            )}
            {props.isLoggedIn && (
               <li>
                  <button onClick={props.onLogout}>Logout</button>
               </li>
            )}
         </ul>
      </nav>
   );
};

export default Navigation;
