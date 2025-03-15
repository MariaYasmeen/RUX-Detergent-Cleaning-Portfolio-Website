import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  let lastScrollTop = 0;
  const linksRef = useRef([]);

  useEffect(() => {
    linksRef.current.forEach((link, index) => {
      if (link) {
        const text = link.querySelector(".text");
        const underline = link.querySelector(".underline");

        link.addEventListener("mouseenter", () => {
          const textWidth = text.offsetWidth; // Get text width dynamically
          gsap.to(underline, { width: textWidth, duration: 0.3, ease: "power2.out" });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(underline, { width: "0%", duration: 0.3, ease: "power2.out" });
        });
      }
    });
  }, []);

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
      <button className="btn btn-sm btn-primary dropdown-toggle rounded-pill px-3" type="button" data-bs-toggle="dropdown">
        Menu
      </button>
      <ul className="dropdown-menu p-4">
        {[
          { path: "/about", text: "WHAT WE DO" },
          { path: "/our-products", text: "OUR PRODUCTS" },
          { path: "/dealer-network", text: "JOIN OUR DEALERS NETWORK" },
          { path: "/contact", text: "GET IN TOUCH" },
        ].map((item, index) => (
          <li key={index} ref={(el) => (linksRef.current[index] = el)} className="position-relative">
            <Link to={item.path} className="dropdown-item text-dark p-2 fs-4 position-relative">
              <span className="text">{item.text}</span>
              <span className="underline position-absolute bottom-0 start-0"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>

        {/* Center - Logo */}
        <Link to="/" className="navbar-brand mx-lg-auto">
          <img src="/logo.png" alt="Logo" className="d-block" style={{ height: "55px" }} />
        </Link>

        {/* Right Side - Mobile Menu */}
        <div className="d-lg-none">
      <div className="dropdown">
        <button className="btn   dropdown-toggle" 
        type="button" data-bs-toggle="dropdown"
        tyle={{ backgroundColor: "transparent", border: "none" }}
        >
          ☰
        </button>
        <ul className="dropdown-menu p-3 dropdown-menu-end">
          <li><Link to="/about" className="dropdown-item text-dark p-1 fs-5">WHAT WE DO</Link></li>
          <li><Link to="/our-products" className="dropdown-item text-dark  p-1 fs-5">OUR PRODUCTS</Link></li>
          <li><Link to="/dealer-network" className="dropdown-item text-dark p-1 fs-5">JOIN OUR DEALERS NETWORK</Link></li>
          <li><Link to="/contact" className="dropdown-item text-dark p-1 fs-5">GET IN TOUCH</Link></li>
        </ul>
      </div>
    </div>

        {/* Right Side - Distributor Button */}
        <div className="d-none d-lg-flex gap-2 px-3">
        <Link to="/dealer-network">     <button className="btn btn-sm btn-outline-secondary btn-css rounded-pill mx-1">
         Become a Distributor
          </button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
