import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Pages/Hero'; 
 import WhyChooseUs from './Pages/WhyChooseUs';
import FAQs from './Pages/FAQs';
  
function App() {
  return (
    <>
   <Navbar /> 
    <Hero /> 
    <WhyChooseUs />
    <FAQs />
   </>
  );
}

export default App;
