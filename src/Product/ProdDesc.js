import React from "react";
import { useLocation } from "react-router-dom";

const ProdDesc = () => {
  const { state } = useLocation();
  if (!state) return <h2 className="text-center py-5">Product Not Found</h2>;

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Product Image */}
        <div className="col-md-6 text-center">
          <img src={state.image} className="img-fluid rounded-3 shadow-lg" alt={state.title} />
        </div>

        {/* Product Title, Price & Buttons */}
        <div className="col-md-6">
          <h2 className="fw-bold">{state.title}</h2>
          <p className="text-muted fs-5">${state.price}</p>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <button className="btn btn-success px-4 py-2 rounded-pill shadow-lg fw-bold">
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
            <button className="btn btn-danger px-4 py-2 rounded-pill shadow-lg fw-bold">
              <i className="fas fa-bolt"></i> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdDesc;
