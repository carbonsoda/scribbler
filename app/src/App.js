import React from 'react';

import DrawPanel from './components/DrawPanel';
import Navbar from './components/navbar/Navbar';

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
