import React from 'react';

import { Router } from '@reach/router';

import Navbar from './components/Navbar';
import History from './routes/History';
import Mainpage from './routes/Main';

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
