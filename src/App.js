import './App.css';
import NavbarComp from './Navbar';
import Home from './Home';
import About from './About';
import React from 'react'; 
import { useState } from 'react'
import CardComponent from './Card';
import FooterComp from './FooterComp';
import Contact from './Contact';

function App()  {
  return (
    <div>
      <Home/>
      <About/>
      <CardComponent/>
      <Contact/>
      <FooterComp/>
    </div>
  );
}

export default App;
