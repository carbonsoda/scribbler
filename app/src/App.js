import React from 'react';

import { Router } from '@reach/router';

import Navbar from './components/Navbar';
import History from './routes/History';
import Main from './routes/Main';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Main path="/" />
        <History path="/history" />
      </Router>
    </div>
  );
}
