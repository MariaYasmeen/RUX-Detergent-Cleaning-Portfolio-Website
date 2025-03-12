import React from "react";
import { useParams } from "react-router-dom";
import "./Product.css"; // Your styles

 const productData = {
  nature: {
    banner: "https://picsum.photos/1920/600?nature",
    products: [
      { id: 1, name: "Nature Watch", image: "https://picsum.photos/200?random=1" },
      { id: 2, name: "Eco Backpack", image: "https://picsum.photos/200?random=2" },
    ],
  },
  city: {
    banner: "https://picsum.photos/1920/600?city",
    products: [
      { id: 1, name: "City Sneakers", image: "https://picsum.photos/200?random=3" },
      { id: 2, name: "Urban Jacket", image: "https://picsum.photos/200?random=4" },
      { id: 3, name: "VR Headset", image: "https://picsum.photos/200?random=6" },
      { id: 4, name: "VR Headset", image: "https://picsum.photos/200?random=6" },
      { id: 5, name: "VR Headset", image: "https://picsum.photos/200?random=6" },

    ],
  },
  technology: {
    banner: "https://picsum.photos/1920/600?tech",
    products: [
      { id: 1, name: "Smart Watch", image: "https://picsum.photos/200?random=5" },
      { id: 2, name: "VR Headset", image: "https://picsum.photos/200?random=6" },
      { id: 3, name: "VR Headset", image: "https://picsum.photos/200?random=6" },
      { id: 4, name: "VR Headset", image: "https://picsum.photos/200?random=6" },
      { id: 5, name: "VR Headset", image: "https://picsum.photos/200?random=6" },

    ],
  },
};

const ProdDesc = () => {
  const { title } = useParams(); // Get the category from the URL
  const category = productData[title?.toLowerCase()] || productData.nature; // Default to nature if not found

  return (
    <div className="prod-desc">
      {/* Banner Image */}
      <div className="banner" style={{ backgroundImage: `url(${category.banner})` }}>
        <h1>{title}</h1>
      </div>

      {/* Product Collection */}
      <div className="product-grid">
        {category.products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdDesc;
