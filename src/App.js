
import './App.css';

import { useState } from 'react';

import Header from './common/header/Header';



import AppRoute from './common/app_routes/AppRoute';



import AuthContext from './common/context/auth-context';



function App() {
  
const [isLoggedIn, setIsLoggedIn] = useState(false);


const loginHandler = () => {
  setIsLoggedIn(true);
}

const logoutHandler = () => {
  setIsLoggedIn(false);
}

  

  return (

    <div className="App">

    <AuthContext.Provider value={
      {isLoggedIn : isLoggedIn,
        onLogIn : loginHandler,
        onLogout : logoutHandler}
    }>
      <Header />

      <AppRoute />


      
      </AuthContext.Provider> 
      
    </div>
  );
}

export default App;
