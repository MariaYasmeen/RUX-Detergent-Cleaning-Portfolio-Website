"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./Navbar.module.scss"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    // Initial navbar animation
    gsap.fromTo(
      navbarRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  // Handle sidebar animation
  useEffect(() => {
    if (sidebarRef.current) {
      if (isSidebarOpen) {
        gsap.to(sidebarRef.current, {
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      } else {
        gsap.to(sidebarRef.current, {
          x: "-100%",
          duration: 0.6,
          ease: "power3.out",
        });
      }
    }
  }, [isSidebarOpen]);

  return (
    <>
      <nav ref={navbarRef} className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            {/* Toggle Button */}
            
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={styles.toggleButton}
              aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            >
              <span>{isSidebarOpen ? "Close" : "Menu"}</span>
              {isSidebarOpen ? (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            <div className={styles.logo}>
  <image
    src="./logo.png" // Path to your logo image
    alt="RUX Agency Logo" // Alt text for accessibility
    width={130} // Set the width of the logo
    height={35} // Set the height of the logo
    priority // Optional: Prioritize loading for above-the-fold content
  />
</div>

            {/* Buttons */}
            <div className={styles.buttonGroup}>
              <button className={styles.loginButton}>
                Become a Distributor
              </button>
              <button className={styles.signupButton}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div ref={sidebarRef} className={styles.sidebar}>
        
        <div className={styles.menuList}>
          <a href="#" className={styles.menuItem}>WHAT WE DO</a>
          <Link to="/our-products" className={styles.menuItem}>OUR PRODUCTS</Link>
          <a href="#" className={styles.menuItem}>JOIN OUR DISTRIBUTOR NETWORK</a> 
          <a href="#" className={styles.menuItem}>CAREERS</a> 
          <a href="#" className={styles.menuItem}>GET IN TOUCH</a>
        </div>
        
      </div>
      
    </>
  );
};

export default Navbar; 