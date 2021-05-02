import React from 'react';

import { Router } from '@reach/router';

import Navbar from './components/Navbar';
import History from './routes/HistoryPage';
import Mainpage from './routes/MainPage';

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
