import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ProdDesc = () => {
  const location = useLocation();  
  const product = location.state || {}; // ✅ Ensure product is always defined

  // ✅ Move Hooks to Top to Prevent Conditional Calls
  const [selectedPackSize, setSelectedPackSize] = useState("Standard");
  const [selectedScent, setSelectedScent] = useState(product.scents?.[0] || "");

  // ✅ Now it's safe to check if product is empty
  if (!product.title) return <h2 className="text-center py-5">Product Not Found</h2>;

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Product Image */}
        <div className="col-md-5 text-center">
          <img src={product.image} className="img-fluid rounded-4  " alt={product.title} />
        </div>

        {/* Product Title, Price, Key Features & Buttons */}
        <div className="col-md-7 p-5">
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-muted fs-5">${product.price}</p>

          {/* Key Features */} 
          <ul className="list-group list-group-flush mb-3">
            {product.description?.map((item, index) => (
              <li key={index} className="list-group-item border-0">{item}</li>
            ))}
          </ul>

          {/* Pack Size Selection */}
          <h6 className="fw-bold mt-3">Select Pack Size:</h6>
          <div className="d-flex flex-wrap gap-3 mt-2">
            {["Standard", "Large", "Family Pack"].map((size) => (
              <button
                key={size}
                className={`btn px-4 py-2 rounded-pill shadow-sm ${
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
          <div className="d-flex flex-wrap gap-3 mt-2">
            {product.scents?.map((scent) => (
              <button
                key={scent}
                className={`btn px-4 py-2 rounded-pill shadow-sm ${
                  selectedScent === scent ? "btn-primary text-white" : "btn-outline-dark"
                }`}
                onClick={() => setSelectedScent(scent)}
              >
                {scent}
              </button>
            ))}
          </div>
        </div>
      </div>
      <h4 className="fw-bold mt-3">Safety Measures</h4>
      <p className="  fs-5">{product.safety}</p>
      <h4 className="fw-bold mt-3">Usage Guidance</h4>
      <p className="  fs-5">{product.usage}</p>

    </div>
  );
};

export default ProdDesc;
