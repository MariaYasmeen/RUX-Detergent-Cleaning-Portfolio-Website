import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
   
    
   
    {
      image: "/main5.png",
      title: "Slide Three",
      subtitle: "This is the third slide description.",
      buttonText: "Get Started",
    },
    {
      image: "/main8.png",
      title: "Slide Three",
      subtitle: "This is the third slide description.",
      buttonText: "Get Started",
    },
    {
      image: "/main9.png",
      title: "Slide Three",
      subtitle: "This is the third slide description.",
      buttonText: "Get Started",
    }, 
    {
      image: "/main10.png",
      title: "Slide Three",
      subtitle: "This is the third slide description.",
      buttonText: "Get Started",
    },
    {
      image: "/main6.png",
      title: "Slide Three",
      subtitle: "This is the third slide description.",
      buttonText: "Get Started",
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
              <h2 className="display-6 display-md-4 display-lg-3 fw-bold text-white mb-2 mb-md-3"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                {slide.title}
              </h2>
              <p className="d-none d-md-block text-white mb-3 mb-lg-4"
                 style={{
                   fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                   textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
                 }}>
                {slide.subtitle}
              </p>
              <button 
                className="btn btn-primary rounded-pill px-3 px-md-4 px-lg-5 py-2"
                style={{
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                  boxShadow: "2px 2px 6px rgba(0,0,0,0.3)"
                }}>
                {slide.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;