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

    // Navigate to product details page with product data
    navigate(`/our-products/${formattedTitle}`, {
      state: { title, image, price },
    });
  };

  return (
    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
      <div className="card shadow-lg rounded-3 border-0 text-center p-3" style={{ backgroundColor: "white" }}>
        <img src={image} className="card-img-top rounded-3" alt={title} style={{ height: "240px", objectFit: "cover" }} />
        <div className="card-body p-2 d-flex flex-column justify-content-center" style={{ minHeight: "130px" }}>
          <h6 className="text-dark fw-bold mb-1" style={{ fontSize: "14px", overflowWrap: "break-word" }}>{title}</h6>
          <p className="text-muted small m-0">${price}</p>
          <button className="btn btn-primary btn-sm rounded-pill px-3 mt-2" onClick={handleQuickView}>
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
