import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Product.css"; // Import custom CSS file

const Category = () => {
  const [activeButton, setActiveButton] = useState(0);
  const contentRef = useRef(null);

  const buttons = [
    {
      id: 1,
      title: "Nature",
      subheading: "Explore the beauty of nature",
      buttonText: "Discover More",
      backgroundImage: "https://picsum.photos/1920/1080?nature",
    },
    {
      id: 2,
      title: "City",
      subheading: "Experience the urban lifestyle",
      buttonText: "Explore Now",
      backgroundImage: "https://picsum.photos/1920/1080?city",
    },
    {
      id: 3,
      title: "Technology",
      subheading: "Innovate with the latest tech",
      buttonText: "Learn More",
      backgroundImage: "https://picsum.photos/1920/1080?tech",
    },
    {
      id: 4,
      title: "Travel",
      subheading: "Travel to new destinations",
      buttonText: "Book Now",
      backgroundImage: "https://picsum.photos/1920/1080?travel",
    },
    {
      id: 5,
      title: "Food",
      subheading: "Savor delicious cuisines",
      buttonText: "Order Now",
      backgroundImage: "https://picsum.photos/1920/1080?food",
    },
    {
      id: 6,
      title: "Art",
      subheading: "Discover creative masterpieces",
      buttonText: "View Gallery",
      backgroundImage: "https://picsum.photos/1920/1080?art",
    },
  ];

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [activeButton]);

  const handleButtonHover = (index) => {
    setActiveButton(index);
  };

  return (
    <div
      className="category-container"
      style={{
        backgroundImage: `url(${buttons[activeButton].backgroundImage})`,
      }}
    >
      {/* Sidebar with Buttons */}
      <div className="sidebar">
        {buttons.map((button, index) => (
          <button
            key={button.id}
            className="category-button"
            onMouseEnter={() => handleButtonHover(index)}
          >
            {button.title}
          </button>
        ))}
      </div>

      {/* Right-side Content */}
      <div ref={contentRef} className="content">
        <div className="overlay"></div>  
        <div className="content-text">
          <h1>{buttons[activeButton].title}</h1>
          <p>{buttons[activeButton].subheading}</p>
          <button className="cta-button">{buttons[activeButton].buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
