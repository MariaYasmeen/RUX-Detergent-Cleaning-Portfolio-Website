import React from "react";
import ProductCard from "../Components/ProductCard";

 
const productData = [
  {
    image: "https://i.pinimg.com/736x/bd/e6/34/bde6343a6159af5d130c1255400789a0.jpg",
    title: "Dishwashing Detergents",
    price: "$99.99",
    description: ["Powerful grease removal", "Gentle on hands", "Long-lasting foam"],
    scents: ["Lemon", "Orange", "Unscented"],
    ingredients: ["Water", "Sodium Lauryl Sulfate", "Fragrance"],
    safety: "Keep away from children. Avoid contact with eyes.",
    usage: "Apply a small amount on a sponge, lather, and rinse thoroughly.",
  },
  {
    image: "https://i.pinimg.com/736x/07/4d/29/074d29dda309b0a5049a0cb1883fe645.jpg",
    title: "Toilet and Bathroom Cleaners",
    price: "$149.99",
    description: ["Removes tough stains", "Kills 99.9% of germs", "Pleasant fragrance"],
    scents: ["Lavender", "Pine", "Ocean Breeze"],
    ingredients: ["Hydrochloric Acid", "Sodium Hypochlorite", "Water"],
    safety: "Use gloves while handling. Avoid inhaling fumes.",
    usage: "Pour around the bowl, let sit for 10 minutes, scrub, and flush.",
  },
  {
    image: "https://i.pinimg.com/736x/04/3a/ed/043aed7431d9f62521681373ab22e192.jpg",
    title: "Multi-Surface Cleaners",
    price: "$699.99",
    description: ["Safe for all surfaces", "No streak formula", "Quick drying"],
    scents: ["Floral", "Citrus", "Unscented"],
    ingredients: ["Isopropyl Alcohol", "Surfactants", "Water"],
    safety: "Do not mix with other cleaners. Keep away from heat sources.",
    usage: "Spray onto the surface and wipe with a clean cloth.",
  },
  {
    image: "https://i.pinimg.com/736x/03/82/2b/03822b689918e2fadad0e822fea47932.jpg",
    title: "Bleach and Stain Removers",
    price: "$129.99",
    description: ["Whitens clothes", "Disinfects surfaces", "Removes mold"],
    scents: ["Regular", "Lemon", "Unscented"],
    ingredients: ["Sodium Hypochlorite", "Water", "Sodium Hydroxide"],
    safety: "Use in a well-ventilated area. Avoid skin contact.",
    usage: "Dilute before use. Follow fabric care labels for proper application.",
  },
];


const Category = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Our Products</h2>
      <div className="row">
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
