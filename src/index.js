import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Navbar';
import CardDisplay from './CardDisplay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/CardDisplay" element={<CardDisplay />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
