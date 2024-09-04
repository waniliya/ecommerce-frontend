import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import axios from "axios";
//import { AlertProvider } from "../src/context/AlertContext";
import CartProductProvider from '../src/context/CartProductProvider';
import ShopProvider from "../src/context/ShopProvider"


axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <React.StrictMode>
    
     <CartProductProvider>
    <App />
    </CartProductProvider>
    
    </React.StrictMode>
    
 
);
