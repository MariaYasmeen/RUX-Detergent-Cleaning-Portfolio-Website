import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import ProductCard from '../Components/ProductCard';
import SecondaryNav from '../Components/SecondaryNav';

const Category = () => {
  const images = [
    './main1.png',
    './main2.png',
    './main3.png',
    './main4.png',
    './main5.png',
    './main6.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // GSAP Animation for Slide Transition
  useEffect(() => {
    gsap.from(sliderRef.current, {
      opacity: 1, 
      duration: 1,
      ease: 'power3.out',
    });
  }, [currentIndex]);

  const productData = [
    {
      image: "https://i.pinimg.com/736x/bd/e6/34/bde6343a6159af5d130c1255400789a0.jpg",
      title: "Premium Product 1",
      subtitle: "High-quality material",
      price: "$99.99",
    },
    {
      image: "https://i.pinimg.com/736x/07/4d/29/074d29dda309b0a5049a0cb1883fe645.jpg",
      title: "Luxury Watch",
      subtitle: "Elegant & Stylish",
      price: "$149.99",
    },
    {
      image: "https://i.pinimg.com/736x/04/3a/ed/043aed7431d9f62521681373ab22e192.jpg",
      title: "Smartphone Pro",
      subtitle: "Latest 5G technology",
      price: "$699.99",
    },
    {
      image: "https://i.pinimg.com/736x/03/82/2b/03822b689918e2fadad0e822fea47932.jpg",
      title: "Wireless Earbuds",
      subtitle: "Crystal-clear sound",
      price: "$129.99",
    },
  ];


  // Auto Slide Functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
    
<SecondaryNav />


      <div className="container-fluid p-0">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 position-relative">
          {/* Image Slider */}
          <div ref={sliderRef} className="text-center">
            <img
              src={images[currentIndex]}
              className="img-fluid banner-img rounded mx-auto d-block"
              alt={`Banner ${currentIndex + 1}`}
            />
          </div>

          {/* Navigation Buttons */}
          <button
            className="position-absolute top-50 start-0 translate-middle-y btn  rounded-pill p-3  shadow"
            onClick={goToPrev}
            style={{ zIndex: 1, left: '10px' }}
          >
            &lt;
          </button>
          <button
            className="position-absolute top-50 end-0 translate-middle-y btn rounded p-3  shadow"
            onClick={goToNext}
            style={{ zIndex: 1, right: '10px' }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>

   
<div className="p-5"> 
      <div className="row">
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
          />
        ))}
      </div>
    </div>

        </>
  );
};

export default Category;
