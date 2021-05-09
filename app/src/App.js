import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from 'react-router-dom';

import Loading from './components/Loading';
import Navbar from './components/Navbar';
import History from './routes/History';
import Main from './routes/Main';

import './App.css';

export default function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}
