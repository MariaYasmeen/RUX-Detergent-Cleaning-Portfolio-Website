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

const productData = [
  {
    image: "https://i.pinimg.com/736x/bd/e6/34/bde6343a6159af5d130c1255400789a0.jpg",
    title: "Dishwashing Detergents",
    price: "$99.99",
  },
  {
    image: "https://i.pinimg.com/736x/07/4d/29/074d29dda309b0a5049a0cb1883fe645.jpg",
    title: "Toilet and Bathroom Cleaners",
    price: "$149.99",
  },
  {
    image: "https://i.pinimg.com/736x/04/3a/ed/043aed7431d9f62521681373ab22e192.jpg",
    title: "Multi-Surface Cleaners",
    price: "$699.99",
  },
  {
    image: "https://i.pinimg.com/736x/03/82/2b/03822b689918e2fadad0e822fea47932.jpg",
    title: "Bleach and Stain Removers",
    price: "$129.99",
  },
];

const Category = () => {
  const images = [
    './pg1.png',
    './pg2.png',
    './pg3.png',
    './pg4.png', 
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
  // Auto Slide Functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);
 
  return (
    <>
    <div className="container mt-4">
<div style={{ width: "100%", maxWidth: "1400px", marginTop:"70px" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded  "
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
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Our Products</h2>
      <div className="row">
        {productData.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Category;
