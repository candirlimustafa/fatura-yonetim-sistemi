import React from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom/client' modülünü import edin
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS'i import edin

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot kullanarak kök oluşturun
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
