import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Slider = () => {
  const slides = [
    {
      image: "/main5.png",
      title: "Dishwashing Detergents",
      subtitle: "For cleaning dishes, cutlery, and kitchen utensils. Designed to remove grease and food residues effectively.",
      buttonText: "Explore Products",
    },
    {
      image: "/main8.png",
      title: "Toilet and Bathroom Cleaners",
      subtitle: "Formulated for cleaning and disinfecting toilet bowls. Helps remove stains, limescale, and bacteria.",
      buttonText: "Explore Products",
    },
    {
      image: "/main9.png",
      title: "Multi-Surface Cleaners",
      subtitle: "Versatile cleaner suitable for various surfaces like countertops, tiles, glass, and appliances. Ideal for general household cleaning.",
      buttonText: "Explore Products",
    }, 
    {
      image: "/main10.png",
      title: "Laundry Detergents",
      subtitle: "For washing clothes. Effective in removing dirt, stains, and odors from fabrics while being gentle on materials.",
      buttonText: "Explore Products",
    },
    {
      image: "/main6.png",
      title: "Bleach and Stain Removers",
      subtitle: "For whitening clothes, disinfecting surfaces, and removing tough stains. Often used in laundry and household cleaning.",
      buttonText: "Explore Products",
    },
  ];

  return (
    <div className="container-fluid p-4" >
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ 
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="position-relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="img-fluid w-100"
              style={{ 
                objectFit: "cover",
                height: "84vh",
                marginTop:"40px",
                borderRadius:"30px ",
                minHeight: "400px"
              }}
            />
            <div className="position-absolute bottom-0 start-0 p-3 p-md-4 p-lg-5 text-start"
              style={{
                maxWidth: "90%",
                zIndex: 2
              }}>
              <h2 className="display-6 display-md-2 display-lg-1 fw-bold   mb-2 mb-md-3" >
                {slide.title}
              </h2>
              <p className="d-none d-md-block   mb-3 mb-lg-4"
                 style={{
                   fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", 
                 }}>
                {slide.subtitle}
              </p>
              <button 
                className="btn btn-primary rounded-pill px-3 px-md-4 px-lg-5 py-2"
                style={{
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                  boxShadow: "2px 2px 6px rgba(0,0,0,0.3)"
                }}>
              <Link to="/our-products" style={{color:"white", textDecoration:"none"}}> {slide.buttonText}</Link> 
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;