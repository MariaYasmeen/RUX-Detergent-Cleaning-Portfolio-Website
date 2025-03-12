import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Hero';
import Category from './Product/Category';
import ProdDesc from './Product/ProdDesc';
  
function App() {
  return (
    <>
     <BrowserRouter>
        <Navbar />
            <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/our-products" element={<Category />} />  
            <Route path="/our-products/:title" element={<ProdDesc />} />

          </Routes>
       </BrowserRouter>
   </>
  );
}

export default App;
