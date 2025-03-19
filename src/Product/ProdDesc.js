import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { title: "Dishwashing Detergents", price: "15.99", image: "/slide1.png", description: "Perfect for sparkling clean dishes." },
  { title: "Multi-Surface Cleaners", price: "12.99", image: "/slide2.png", description: "Cleans a variety of surfaces effortlessly." },
  { title: "Laundry Detergents", price: "18.99", image: "/slide3.png", description: "Keeps your clothes fresh and clean." },
  { title: "Bleach and Stain Removers", price: "14.50", image: "/slide4.png", description: "Whitens clothes and disinfects surfaces." },
  { title: "Specialty Cleaners", price: "10.99", image: "/slide5.png", description: "For specific cleaning tasks and surfaces." },
  { title: "Toilet and Bathroom Cleaners", price: "9.99", image: "/slide6.png", description: "Disinfects toilet bowls effectively." },
];

const ProdDesc = () => {
 
  const { title } = useParams();

// Convert URL title (hyphens) back to spaces & match stored titles
const formattedTitle = title.replace(/-/g, " ").toLowerCase().trim();

// Find the matching product
const product = products.find(
  (p) => p.title.toLowerCase().trim() === formattedTitle
);

   

  if (!product) {
    return <h2 className="text-center py-5">Product Not Found</h2>;
  }

  return (
    <div className=" p-5">
      <div className="row  ">
        {/* Left Side - Image Preview */}
        <div className="col-md-6 text-center">
          <img src={product.image} className="img-fluid rounded-3  " alt={product.title} />
        </div>

        {/* Right Side - Product Details */}
        <div className="col-md-6">
          <h2 className="fw-bold">{product.title}</h2>
          <p  >${product.price}</p>
          <p className="lead">{product.description}</p>

          <div className="d-flex gap-3 mt-3">
            <button className="btn btn-primary rounded-pill px-4">
              <i className="fas fa-cart-plus"></i> Add to Cart
            </button>
            <button className="btn btn-outline-danger rounded-pill px-4">
              <i className="fas fa-heart"></i> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdDesc;
