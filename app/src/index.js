import React from 'react';
import ReactDOM from 'react-dom';

import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="carbonsoda.us.auth0.com"
      clientId="3ABK36SELgtt5ijl3M8pS2HOs2MWtMDN"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log) )
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
