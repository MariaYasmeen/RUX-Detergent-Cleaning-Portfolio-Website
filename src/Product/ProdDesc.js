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
 
  // Ensure product data exists
  if (!product.title) return <h2 className="text-center py-5">Product Not Found</h2>;

  return (
  <>
    <div className="container-fluid py-5 " >
      <div className=" py-5" style={{
      background: "radial-gradient(circle,rgb(164, 237, 252),rgb(152, 255, 199), #caf0f8)",
      borderRadius:"25px 25px 0px 0px",
      marginTop:"19px"
    }}>
        <div className="row align-items-center">
          {/* Product Image */}
          <div className="col-md-5 text-center mb-4 ">
            <img
              src={product.image}
              className="img-fluid rounded-4 p-2"
              alt={product.title}
              style={{ maxHeight: "480px", objectFit: "contain" }}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-7 p-5">
            <h2 className="fw-bold">{product.title}</h2>
            <p className=" fs-5">PKR {product.price}</p>

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

                
          </div>
        </div>
 
        <div className="p-4">
  <div className="row g-4">

    {/* Ingredients Box */}
    <div className="col-lg-4 col-md-6">
      <div className="p-4 shadow-sm bg-light h-100 d-flex flex-column" style={{ borderRadius: "25px" }}>
        <h4 className="fw-bold bg-light">Ingredients</h4>
        <ul className="list-group bg-light list-group-flush mb-3">
          {product.ingredients?.map((item, index) => (
            <li key={index} className="list-group-item bg-light border-0">{item}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Usage Instructions Box */}
    <div className="col-lg-4 col-md-6">
      <div className="p-4 shadow-sm bg-light h-100 d-flex flex-column" style={{ borderRadius: "25px" }}>
        <h4 className="fw-bold p-2">Usage Instructions</h4>
        <ul className="list-group list-group-flush">
          {product.usage?.map((instruction, index) => (
            <li key={index} className="list-group-item bg-light border-0">{instruction}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Safety Measures Box */}
    <div className="col-lg-4 col-md-12">
      <div className="p-4 shadow-sm bg-light h-100 d-flex flex-column" style={{ borderRadius: "25px" }}>
        <h4 className="fw-bold p-2">Safety Measures</h4>
        <ul className="list-group list-group-flush">
          {product.safety?.map((measure, index) => (
            <li key={index} className="list-group-item bg-light border-0">{measure}</li>
          ))}
        </ul>
      </div>
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
