import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid ">
        
        {/* Left Side - Menu Dropdown (Only visible on large screens) */}
        <div className="dropdown d-none px-4 d-lg-block">
          <button 
            class="btn btn-sm dropdown-toggle btn-css rounded-pill mx-1"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </button>
          <ul className="dropdown-menu dropdown-css">
          <li><a className="dropdown-item" href="#">WHAT WE DO</a></li>
          <Link to="/our-products"><a className="dropdown-item" href="#">OUR PRODUCTS</a></Link>
          <li><a className="dropdown-item" href="#">JOIN OUR DISTRIBUTOR NETWORK</a></li>
              <li><a className="dropdown-item" href="#">BLOGS</a></li>
              <li><a className="dropdown-item" href="#">GET IN TOUCH</a></li>
          </ul>
        </div>

        {/* Center - Logo (Moves left on small screens) */}
        <Link to="/"><a className="navbar-brand mx-lg-auto" href="#">
       <img
            src="/logo.png" // Replace with your logo
            alt="Logo"
            className="d-block"
            style={{ height: "55px" }}
          />
        </a>
        </Link> 

        {/* Right Side - Buttons & Dropdown (On small screens, everything goes in dropdown) */}
        <div className="d-lg-none">
          <div className="dropdown">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ☰
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">WHAT WE DO</a></li>
              <Link to="/our-products"><a className="dropdown-item" href="#">OUR PRODUCTS</a></Link>
              <li><a className="dropdown-item" href="#">JOIN OUR DISTRIBUTOR NETWORK</a></li>
              <li><a className="dropdown-item" href="#">BLOGS</a></li>
              <li><a className="dropdown-item" href="#">GET IN TOUCH</a></li>
            </ul>
          </div>
        </div>

         <div className="d-none d-lg-flex gap-2 px-3">
          <button class="btn btn-sm btn-outline-secondary btn-css rounded-pill mx-1">Become a Distributor</button>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
