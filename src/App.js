import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Pages/Hero';
 
function App() {
  return (
    <>
   <Navbar /> 
    <Hero />
   </>
  );
}

export default App;
