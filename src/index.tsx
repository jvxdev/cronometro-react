import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Formulario />
    <Lista />
  </React.StrictMode>
);