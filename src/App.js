import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(()=>{
 if (localStorage.getItem('isLoggedIn') === 'LOGGED_IN') {
  setIsLoggedIn(true);
 }
},[])
const loginHandler = ()=>{
  localStorage.setItem('isLoggedIn', 'LOGGED_IN');
  setIsLoggedIn(true);
}
const logoutHandler = ()=>{
  localStorage.removeItem('isLoggedIn');
  setIsLoggedIn(false);
}

  return (
    <div className="App">
     <Navigation isLoggedIn={isLoggedIn} onLogout={logoutHandler}/> 
     {!isLoggedIn && <Login onLogin={loginHandler} />}
     {isLoggedIn && <Home onLogout={logoutHandler} />}
    </div>
  );
}

export default App;
