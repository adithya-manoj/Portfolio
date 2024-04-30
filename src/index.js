import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Navbar';
import MoreAbout from './MoreAbout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/MoreAbout" element={<MoreAbout/>} />
        <Route path="/App"  element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
