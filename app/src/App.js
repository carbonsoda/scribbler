import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from 'react-router-dom';

import Loading from './components/Loading';
import Navbar from './components/Navbar';
import VerifyEmail from './components/VerifyEmail';
import History from './routes/History';
import Main from './routes/Main';

import './css/App.css';

export default function App() {
  const { isLoading } = useAuth0();

  return (
    <>
      {
        isLoading ? <Loading />
          : (
            <div className="App">
              <header>
                <Navbar />
                <VerifyEmail />
              </header>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/history" element={<History />} />
              </Routes>
            </div>
          )
      }
    </>
  );
}
