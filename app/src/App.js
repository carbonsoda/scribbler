import React from 'react';

import { Router } from '@reach/router';

import History from './History';
import Mainpage from './Mainpage';
import Navbar from './components/navbar/Navbar';

import './App.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setIsLoggedIn(urlParams.get('login') === 'true');
  }, [setIsLoggedIn]);
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Router>
        <Mainpage path="/" />
        <History path="/history" />
      </Router>
    </div>
  );
}
