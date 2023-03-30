import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserState from './Context/userContext/UserState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserState>
        <App />
      </UserState>
    </Router>
  </React.StrictMode>
);
