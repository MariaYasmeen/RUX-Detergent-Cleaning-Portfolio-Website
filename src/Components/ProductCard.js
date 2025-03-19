import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // ✅ Ensure product exists before rendering
  if (!product || !product.image || !product.title) {
    return null; // Don't render the card if data is missing
  }

  const handleQuickView = () => {
    const formattedTitle = product.title.toLowerCase().replace(/\s+/g, "-");

    navigate(`/our-products/${formattedTitle}`, {
      state: product, // ✅ Pass full product data
    });
  };

  return (
    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
      <div className="card shadow-lg rounded-3 border-0 text-center p-3" style={{ backgroundColor: "white" }}>
        <img
          src={product.image}
          className="card-img-top rounded-3"
          alt={product.title}
          style={{ height: "180px", objectFit: "cover" }}
        />
        <div className="card-body p-2 d-flex flex-column justify-content-center">
          <h6 className="text-dark fw-bold mb-1">{product.title}</h6>
          <p className="text-muted small m-0">${product.price}</p>
          <button className="btn btn-primary btn-sm rounded-pill px-3 mt-2" onClick={handleQuickView}>
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
