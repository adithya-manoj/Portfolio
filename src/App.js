import './App.css';
import NavbarComp from './Navbar';
import Home from './Home';
import CardComp from './Card';
import About from './About';
import React from 'react'; 
import { useState } from 'react'
import Data from './data';
import Casedata from './Casedata';

function App()  {
  return (
    <div>
      <Home/>
      <About/>
      <Data/>
      <Casedata/>
    </div>
  );
}

export default App;
