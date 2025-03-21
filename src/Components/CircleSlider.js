import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import './Components.css'; 
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "bootstrap/dist/css/bootstrap.min.css";
gsap.registerPlugin(ScrollTrigger);

const CircleSlider = () => {
  const sliderItems = [
    { image: "https://i.pinimg.com/236x/91/06/ad/9106ad7d7119a288fb1370ab790e411f.jpg", title: "DISH  LIQUID" },
    { image: "https://i.pinimg.com/236x/09/64/c7/0964c7a07d1a7d117d16e776815c5bfb.jpg", title: "TOILET LIQUID" },
    { image: "https://i.pinimg.com/474x/36/54/37/365437d21b559b265e427a3af0a28994.jpg", title: "SURFACE CLEANER" },
    { image: "https://i.pinimg.com/236x/87/3f/26/873f2667f9eba961fdaee24c27e31ef0.jpg", title: "WASHING LIQUID" },
    { image: "https://i.pinimg.com/236x/e7/7d/81/e77d815546a9a36c557c1b7c14cf9e3a.jpg", title: "BLEACH" }, 
    { image: "https://i.pinimg.com/236x/f5/15/09/f515098b3c5764789954a298431c1d94.jpg", title: "RUX BLUE" },
    { image: "https://i.pinimg.com/474x/5f/fe/53/5ffe537a5960b2dff32c244533ae91da.jpg", title: "SOLAR CLEANER" },
  ];
  const containerData = [
    {
      image: "https://i.pinimg.com/736x/dd/d7/1b/ddd71b851313e841c35b32deea847aed.jpg",
      title: "RUX Bleach and Stain Removers",
      buttonText: "Explore Bleaches",
    },
    {
      image: "https://i.pinimg.com/736x/09/52/0f/09520fd8fd3381de3fb23174967affbb.jpg",
      title: "Toilet and Bathroom Cleaners",
      buttonText: "Explore RUX Toilet Liquid",
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Animation triggers when 80% of the section enters the viewport
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <>
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Section - Centered Text */}
        <div className="col-md-4 text-center d-flex align-items-center justify-content-center">
          <div>
            <h2 className="fw-bold">Our Top Products</h2>
            <p className="text-muted">Explore our best-selling items with high-quality performance.</p>
          </div>
        </div>

        {/* Right Section - Circular Slider */}
        <div className="col-md-8">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={5} // Reduced space for tighter appearance
            slidesPerView={5} // Show 5 at a time
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 5 }, // Mobile
              576: { slidesPerView: 3, spaceBetween: 8 }, // Small Screens
              768: { slidesPerView: 4, spaceBetween: 10 }, // Tablets
              1024: { slidesPerView: 5, spaceBetween: 15 }, // Desktops
            }}
          >
            {sliderItems.map((item, index) => (
              <SwiperSlide key={index} className="text-center m">
                <div className="d-flex  flex-column align-items-center">
                  <div
                    className="rounded-circle  overflow-hidden   d-flex align-items-center justify-content-center"
                    style={{
                      width: "140px", // Increased circle size
                      height: "140px",
                      borderWidth: "3px",
                    }}
                  >
                    <Link to="/our-products">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid "
                      style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover" }}
                    /></Link>
                  </div>
                  <p className="mt-3 fw-bold m-4 ">{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>

    
     {/* Full-Screen Image Hover Section */}
     <div className="container-fluid py-3">
        <div className="row g-4">
          {containerData.map((item, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="hover-container position-relative rounded overflow-hidden">
                {/* Background Image */}
                <div className="image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid hover-zoom w-100"
                    style={{ height: "99vh", objectFit: "cover", transition: "transform 0.4s ease-in-out" }}
                  />
                </div>

                {/* Overlay with Text & Button */}
                <div className="hover-overlay position-absolute d-flex flex-column align-items-center justify-content-center text-center">
                  <h3 className="text-white fw-bold mb-3">{item.title}</h3>
                  <Link to="/our-products">   <button className="btn btn-light px-4 py-2 rounded-pill">{item.buttonText}</button> </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container my-3">
      <div
        ref={sectionRef}
        className="p-5 text-center rounded-4  "
        style={{ overflow: "hidden" }}
      >
        {/* Headline */}
        <h1 className="text-primary fw-bold  ">
          Powerful Cleaning, Gentle Care – RUX Detergents
        </h1>

        {/* Subheadline */}
        <p className="col-lg-11 mx-auto fs-5  mt-3">
          At RUX, we believe in cleaning that goes beyond the surface. From dishwashing liquids to multi-surface cleaners, every drop is
          packed with powerful ingredients that leave your home fresh, spotless, and safe. Experience
          the perfect balance of strength and care – because a truly clean home starts with the right detergent.
        </p>

        {/* Call-to-Action Button */}
        <div className="d-inline-flex gap-2 mt-4">
          <Link to="/about">
            <button
              className="btn btn-primary btn-lg px-4 rounded-pill shadow-sm fw-bold"
              type="button"
            >
              Know More About Us
            </button>
          </Link>
        </div>
      </div>
    </div>

    </> 
  );
};

export default CircleSlider;
