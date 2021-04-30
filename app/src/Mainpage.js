import React from 'react';

import DrawPanel from './components/DrawPanel';
import Sidebar from './components/Sidebar';

import './App.css';

export default function Mainpage() {
  return (
    <div className="main-page">
      <DrawPanel />
      <Sidebar />
    </div>
  );
}
