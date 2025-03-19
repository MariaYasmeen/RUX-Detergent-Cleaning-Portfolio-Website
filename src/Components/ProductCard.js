import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, title, price }) => {
  const navigate = useNavigate();

  const handleQuickView = () => {
    const formattedTitle = title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/[^a-z0-9-]/g, ""); // Remove special characters
  
    navigate(`/our-products/${formattedTitle}`);
  };
  

  return (
    <div className="col-md-6 col-lg-4 col-xl-4 mb-4">
      <div
        className="card shadow-lg rounded-3 border-0 overflow-hidden position-relative"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "420px",
          minWidth: "180px",
          cursor: "pointer",
        }}
        onClick={handleQuickView} // Navigate when clicking the card
      >
        <div className="product-card-overlay px-4 d-flex justify-content-between align-items-center">
          <div>
            <h6 className="text-uppercase fw-bold mb-1">{title}</h6>
            <p className="text-muted m-0">FROM ${price}</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-dark btn-soft">
              <i className="fas fa-shopping-cart"></i>
            </button>
            <button className="btn btn-outline-dark btn-soft" onClick={handleQuickView}>
              Quick View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
