import React from "react";
 
const Navbar = () => {
  return (
    <nav className="navbar nav-css navbar-expand-lg border-transparent">
      {/* Logo on the Left */}
      <a className="navbar-brand px-5" href="#">
        <img
          className="logo-img"
          src="./logo.png" // Replace with your logo path
          alt="Logo"
        />
      </a>

      {/* Toggle Button for Smaller Screens */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible Content (Buttons and Dropdown) */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {/* Button 1 */}
          <li className="nav-item btn-txt">
            <button
              style={{ backgroundColor: "black", color: "white" }}
              className="btn px-4 py-1 btn-txt btn-outline-dark rounded-pill me-2"
            >
              Become a Distributor
            </button>
          </li>

          {/* Dropdown Button */}
          <li className="nav-item dropdown" style={{ paddingRight: "40px" }}>
            <a
              className="btn px-4 py-1 btn-txt btn-outline-dark rounded-pill dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </a>
            <ul
              className="dropdown-menu py-3 dropdown-menu-end"
              aria-labelledby="navbarDropdown"
              style={{ right: "30px", left: "auto" }} // Adjust dropdown position
            >
              <li>
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another Action
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;