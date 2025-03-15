import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from '../Components/ProductCard';
import SecondaryNav from '../Components/SecondaryNav';
import Footer from '../Components/Footer';

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
      title: "DISH WASH LIQUID",
      subtitle: "High-quality material",
      price: "$99.99",
    },
    {
      image: "https://i.pinimg.com/736x/07/4d/29/074d29dda309b0a5049a0cb1883fe645.jpg",
      title: "TOILET BOWL LIQUID",
      subtitle: "Elegant & Stylish",
      price: "$149.99",
    },
    {
      image: "https://i.pinimg.com/736x/04/3a/ed/043aed7431d9f62521681373ab22e192.jpg",
      title: "MULTI SURFACE CLEANER",
      subtitle: "Latest 5G technology",
      price: "$699.99",
    },
    {
      image: "https://i.pinimg.com/736x/03/82/2b/03822b689918e2fadad0e822fea47932.jpg",
      title: "BLEACH",
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


<div className="container mt-4">
<div style={{ width: "100%", maxWidth: "1400px" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="img-fluid  rounded"
              style={{ height: "300px",  objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
 </div>

   
<div className="p-5"> 
      <div className="row">
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title} 
            price={product.price}
          />
        ))}
      </div>
    </div>
<Footer />
        </>
  );
};

export default Category;
