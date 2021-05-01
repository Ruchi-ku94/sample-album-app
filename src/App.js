import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'LOGGED_IN') {
      setIsLoggedIn(true);
    }
  }, [])
  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', 'LOGGED_IN');
    setIsLoggedIn(true);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', password);
  }
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('Email');
    localStorage.removeItem('Password');
    setIsLoggedIn(false);
  }

  return (
    <BrowserRouter>
      {!isLoggedIn && <Redirect to='/' />}
      <Route path='/' exact >
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </Route>
      {isLoggedIn && <Redirect to='/Home' />}
      <Route path='/Home' exact>
        {isLoggedIn && <Home onLogout={logoutHandler} isLoggedIn={isLoggedIn} />}
      </Route>
    </BrowserRouter>
  );
}

export default App;
