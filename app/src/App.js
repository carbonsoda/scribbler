import React from 'react';

import DrawPanel from './components/DrawPanel';
import Sidebar from './components/Sidebar';
import Navbar from './components/navbar/Navbar';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-page">
        <DrawPanel />
        <Sidebar />
      </div>
    </div>
  );
}
