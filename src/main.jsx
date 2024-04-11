import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from 'react-use-cart'; 
import { Toaster } from "@/components/ui/sonner";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
    <Toaster />
  </React.StrictMode>,
  document.getElementById('root')
);
