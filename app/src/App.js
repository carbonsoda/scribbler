import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Router } from '@reach/router';

import Navbar from './components/Navbar';
import History from './routes/History';
import Main from './routes/Main';

import './App.css';

export default function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
