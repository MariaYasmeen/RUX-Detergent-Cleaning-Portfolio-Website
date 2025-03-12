import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        // Scrolling Down - Hide Navbar Quickly
        gsap.to(navbarRef.current, { y: -100, duration: 0.2, ease: "power1.out" });
      } else {
        // Scrolling Up - Show Navbar Quickly
        gsap.to(navbarRef.current, { y: 0, duration: 0.2, ease: "power1.out" });
      }

      // Apply glass effect only when scrolled down
      setScrolled(currentScroll > 10);

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="navbar navbarcss navbar-expand-lg fixed-top"
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background 0.3s ease-in-out",
      }}
    >
      <div className="container-fluid">
        {/* Left Side - Menu Dropdown (Large Screens) */}
        <div className="dropdown d-none px-4 d-lg-block">
          <button className="btn btn-sm dropdown-toggle btn-css rounded-pill mx-1" type="button" data-bs-toggle="dropdown">
            Menu
          </button>
          <ul className="dropdown-menu dropdown-css">
            <Link to="/about"><li><a className="dropdown-item" href="#">WHAT WE DO</a></li></Link>
            <Link to="/our-products"><li><a className="dropdown-item" href="#">OUR PRODUCTS</a></li></Link>
            <Link to="/distributor-network"><li><a className="dropdown-item" href="#">JOIN OUR DISTRIBUTOR NETWORK</a></li></Link>
            <Link to="/blogs"><li><a className="dropdown-item" href="#">BLOGS</a></li></Link>
            <Link to="/contact"><li><a className="dropdown-item" href="#">GET IN TOUCH</a></li></Link>
          </ul>
        </div>

        {/* Center - Logo */}
        <Link to="/" className="navbar-brand mx-lg-auto">
          <img src="/logo.png" alt="Logo" className="d-block" style={{ height: "55px" }} />
        </Link>

        {/* Right Side - Mobile Menu */}
        <div className="d-lg-none">
          <div className="dropdown">
            <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              ☰
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <Link to="/about"><li><a className="dropdown-item" href="#">WHAT WE DO</a></li></Link>
              <Link to="/our-products"><li><a className="dropdown-item" href="#">OUR PRODUCTS</a></li></Link>
              <Link to="/distributor-network"><li><a className="dropdown-item" href="#">JOIN OUR DISTRIBUTOR NETWORK</a></li></Link>
              <Link to="/blogs"><li><a className="dropdown-item" href="#">BLOGS</a></li></Link>
              <Link to="/contact"><li><a className="dropdown-item" href="#">GET IN TOUCH</a></li></Link>
            </ul>
          </div>
        </div>

        {/* Right Side - Distributor Button */}
        <div className="d-none d-lg-flex gap-2 px-3">
          <button className="btn btn-sm btn-outline-secondary btn-css rounded-pill mx-1">
            Become a Distributor
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
