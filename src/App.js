import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Hero';
import Category from './Product/Category';
import ProdDesc from './Product/ProdDesc';
import DNetwork from './Pages/DNetwork';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Loader from './Pages/Loader';
import ScrollToTop from "./Components/ScrollToTop";

function App() { 

  return (
    <>
         <BrowserRouter>
         <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/our-products" element={<Category />} /> 
            <Route path="/dealer-network" element={<DNetwork />} />   
            <Route path="/contact" element={<Contact />} />  
            <Route path="/our-products/:title" element={<ProdDesc />} />
          </Routes>
        </BrowserRouter> 
    </>
  );
}

export default App;
