import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import any global styles if applicable
import App from './App'; // Import the main App component
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
);
