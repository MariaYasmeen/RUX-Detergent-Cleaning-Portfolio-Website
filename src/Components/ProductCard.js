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
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card product-card border-0 p-3 shadow-sm rounded-4"
        style={{
          background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
          boxShadow: "6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {/* Image Section */}
        <div
          className="position-relative overflow-hidden rounded-4"
          style={{
            boxShadow: "inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff",
          }}
        >
          <img
          onClick={handleQuickView}
            src={product.image}
            alt={product.title}
            className="img-fluid w-100 rounded-4"
            style={{
              height: "300px",
              objectFit: "cover",
              cursor:"pointer",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </div>

        {/* Card Body */}
        <div className="card-body text-center">
          <h5 className="fw-bold text-dark">{product.title}</h5>
          <p className="text-muted mb-2">PKR {product.price}</p>
          <button
          onClick={handleQuickView}
            className="btn btn-primary btn-sm rounded-pill px-4 py-2 mt-2"
            style={{
              border: "none",
              background: "linear-gradient(145deg, #2196F3, #1E88E5)",
              boxShadow: "3px 3px 6px #b0c4de, -3px -3px 6px #ffffff",
            }}
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
