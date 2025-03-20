import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer"; 
import RelatedProd from "./relatedProd"; 

const ProdDesc = () => {
  const location = useLocation();
  const product = location.state || {};

  // State for selection
  const [selectedPackSize, setSelectedPackSize] = useState("Standard");
  const [selectedScent, setSelectedScent] = useState(product.scents?.[0] || "");
  const [quantity, setQuantity] = useState(1); // Counter state

  // Ensure product data exists
  if (!product.title) return <h2 className="text-center py-5">Product Not Found</h2>;

  return (
  <>
    <div
      className="container-fluid py-5"
      >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Product Image */}
          <div className="col-md-5 text-center mb-4">
            <img
              src={product.image}
              className="img-fluid rounded-4 "
              alt={product.title}
              style={{ maxHeight: "480px", objectFit: "contain" }}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-7 py-4">
            <h2 className="fw-bold">{product.title}</h2>
            <p className="text-muted fs-5">PKR {product.price}</p>

            {/* Key Features */}
            <ul className="list-group list-group-flush mb-3">
              {product.description?.map((item, index) => (
                <li key={index} className="border-0">{item}</li>
              ))}
            </ul>

            {/* Pack Size Selection */}
            <h6 className="fw-bold mt-3">Select Pack Size:</h6>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {["Standard", "Large", "Family Pack"].map((size) => (
                <button
                  key={size}
                  className={`btn btn-sm px-3 py-1 rounded-pill shadow-sm ${
                    selectedPackSize === size ? "btn-primary text-white" : "btn-outline-dark"
                  }`}
                  onClick={() => setSelectedPackSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Scent Selection */}
            <h6 className="fw-bold mt-3">Select Scent:</h6>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {product.scents?.map((scent) => (
                <button
                  key={scent}
                  className={`btn btn-sm px-3 py-1 rounded-pill shadow-sm ${
                    selectedScent === scent ? "btn-primary text-white" : "btn-outline-dark"
                  }`}
                  onClick={() => setSelectedScent(scent)}
                >
                  {scent}
                </button>
              ))}
            </div>

            {/* Quantity Selector */}
            <h6 className="fw-bold mt-3">Quantity:</h6>
            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-outline-dark btn-sm rounded-pill px-3"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="fw-bold fs-5">{quantity}</span>
              <button
                className="btn btn-outline-dark btn-sm rounded-pill px-3"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>

           
          </div>
        </div>

        {/* Ingredients Section */}
        <h4 className="fw-bold mt-5">Ingredients</h4>
        <ul className="list-group list-group-flush mb-3">
          {product.ingredients?.map((item, index) => (
            <li key={index} className="list-group-item border-0">{item}</li>
          ))}
        </ul>

        {/* Safety & Usage Guidance */}
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="p-3 border rounded shadow-sm bg-light">
              <h4 className="fw-bold p-2">Safety Measures</h4>
              <p className="text-muted">{product.safety}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 border rounded shadow-sm bg-light">
              <h4 className="fw-bold p-2">Usage Instructions</h4>
              <p className="text-muted">{product.usage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RelatedProd/>
    <Footer />
    
    </>
  );
};

export default ProdDesc;
