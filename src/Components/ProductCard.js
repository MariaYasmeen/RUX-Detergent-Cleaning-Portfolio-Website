import React from "react";
import "../Product/Product.css";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-4 mb-4">
      <div
        className="card shadow-sm rounded-3 border-0 overflow-hidden position-relative"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "380px",
          minWidth:"200px",
        }}
      >
        {/* Bottom-fixed content container */}
         <div class="product-card-overlay px-4">
                    <div>
                        <h7 class="text-uppercase fw-bold mb-1">{title}</h7>
                         <p class="text-muted m-0">FROM ${price}</p>
                    </div>
                    <button class="btn btn-outline-dark btn-soft">
                        <i class="fas fa-shopping-cart"></i>Quick View
                    </button>
                </div>
      </div>
    </div>
  );
};

export default ProductCard;
