import React from 'react';

import DrawPanel from '../components/DrawPanel';
import Sidebar from '../components/Sidebar';

export default function Main() {
  return (
    <div className="main-page">
      <DrawPanel />
      <Sidebar />
    </div>
  );
}
