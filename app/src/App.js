import React from 'react';

import { Router } from '@reach/router';

import History from './History';
import Mainpage from './Mainpage';
import Navbar from './components/navbar/Navbar';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Mainpage path="/" />
        <History path="/history" />
      </Router>
    </div>
  );
}
