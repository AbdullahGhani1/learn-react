import React from 'react';

import classes from './MainHeader.module.css';
import Navigation from './Navigation';

interface MainHeaderProps {
   isAuthenticated: boolean;
   onLogout: () => void;
}

const MainHeader = (props: MainHeaderProps) => {
   return (
      <header className={classes['main-header']}>
         <h1>A Typical Page</h1>
         <Navigation
            isLoggedIn={props.isAuthenticated}
            onLogout={props.onLogout}
         />
      </header>
   );
};

export default MainHeader;
