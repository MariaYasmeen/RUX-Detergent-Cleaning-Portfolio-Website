import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";

const Category = () => {
  return (
    <>
      <div className="container caregoryctre-css">
        <header className="d-flex flex-wrap align-items-center justify-content-center py-1 mb-4">
          <ul className="nav d-flex flex-row flex-wrap py-1 justify-content-center gap-2">
            <li>
              <a href="#" className="btn btn-sm px-4 btn-outline-secondary  rounded-pill">
              Kitchen 
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-sm px-4 btn-outline-secondary rounded-pill">
              Bathroom 
              </a>
            </li>
            <li>
              <a href="#" className="btn px-4  btn-sm btn-outline-secondary rounded-pill">
              Laundry 
              </a>
            </li>
            <li>
              <a href="#" className="btn px-4  btn-sm btn-outline-secondary rounded-pill">
              Floor 
              </a>
            </li>
            <li>
              <a href="#" className="btn px-4  btn-sm btn-outline-secondary rounded-pill">
              All-Purpose
              </a>
            </li>
            <li>
              <a href="#" className="btn px-4  btn-sm btn-outline-secondary rounded-pill">
              Specialty 
              </a>
            </li>
            <li>
              <a href="#" className="btn px-4 btn-sm btn-outline-secondary rounded-pill">
              Glass
              </a>
            </li>
            <li>
              <a href="#" className="btn px-4 btn-sm btn-outline-secondary rounded-pill">
              Disinfectants
              </a>
            </li>
          </ul>
        </header>
      </div>
      <img src="./banner.jpg" className="img-fluid banner-img rounded mx-auto d-block" alt="Banner" />
    </>
  );
};

export default Category;
