import React from 'react';

import DrawPanel from './components/DrawPanel';
import Navbar from './components/navbar/Navbar';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="main-page">
        <DrawPanel />
      </div>
    </div>
  );
}
