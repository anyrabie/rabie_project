import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from 'react-use-cart'; // Importez CartProvider depuis react-use-cart

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Enveloppez votre application dans CartProvider */}
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
