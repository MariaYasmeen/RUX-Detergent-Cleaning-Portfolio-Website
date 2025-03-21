import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pages.css"; // Custom styles
import { Link } from "react-router-dom";

const images = [
  { src: "/slide2.png", text: "RUX TOILET BOWL LIQUID", bgColor: "#e85d04" },
  { src: "/slide1.png", text: "RUX DISH WASH LIQUID", bgColor: "#99582a" },
  { src: "/slide3.png", text: "RUX MULTI SURFACE CLEANER", bgColor: "#9d4edd" },
  { src: "/slide4.png", text: "RUX WASHING LIQUID", bgColor: "#72ddf7" },
  { src: "/slide5.png", text: "RUX BLEACH", bgColor: "#ccff33" },
  { src: "/slide6.png", text: "RUX BLUE", bgColor: "#f9afaf" },
];

const ImageSlider = () => {
  const [bgColor, setBgColor] = useState(images[0].bgColor);
  const canvasRef = useRef(null);

  /** 🟢 Optimized Bubble Animation */
  useEffect(() => {
    const bubbleContainer = document.createElement("div");
    bubbleContainer.className = "bubble-container";
    bubbleContainer.style.position = "absolute";
    bubbleContainer.style.top = "0";
    bubbleContainer.style.left = "0";
    bubbleContainer.style.width = "100%";
    bubbleContainer.style.height = "100%";
    bubbleContainer.style.overflow = "hidden";
    bubbleContainer.style.pointerEvents = "none";

    if (canvasRef.current) {
      canvasRef.current.appendChild(bubbleContainer);
    }

    const spawnBubble = () => {
      if (!bubbleContainer) return;

      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.position = "absolute";
      bubble.style.width = `${Math.random() * 30 + 25}px`; // Reduced size variation
      bubble.style.height = bubble.style.width;
      bubble.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
      bubble.style.borderRadius = "50%";
      bubble.style.bottom = `-${bubble.style.height}`;
      bubble.style.left = `${Math.random() * 100}%`;

      bubbleContainer.appendChild(bubble);

      gsap.to(bubble, {
        y: `-${window.innerHeight}px`,
        opacity: 0,
        duration: Math.random() * 7 + 3, // Reduced duration (3-10s)
        ease: "none",
        onComplete: () => {
          bubble.remove();
        },
      });

      setTimeout(spawnBubble, Math.random() * 1500); // Increased delay (0-1.5s)
    };

    for (let i = 0; i < 10; i++) spawnBubble(); // Reduced bubble count

    return () => {
      bubbleContainer.remove();
    };
  }, []);

  /** 📌 Change background color on slide change */
  const handleSlideChange = (swiper) => {
    setBgColor(images[swiper.realIndex].bgColor);
  };

  /** 🖱️ Optimized Image Hover Effect */
  const handleImageHover = (event) => {
    gsap.to(event.target, { scale: 1.08, duration: 0.3, ease: "power2.out" });
  };

  const handleImageHoverOut = (event) => {
    gsap.to(event.target, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div
      className="container-fluid   position-relative overflow-hidden d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: bgColor,
        height: "86vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Bubble Background */}
      <div className="seq-canvas position-absolute w-100 h-100" ref={canvasRef} />

      {/* Image Slider */}
      <Swiper
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSlideChange={handleSlideChange}
        breakpoints={{
          576: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="swiper-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="text-center">
            <div className="position-relative d-flex flex-column align-items-center">
              <img
                className="feature bubble-hover"
                src={image.src}
                alt={image.text}
                style={{
                  width: "86%",
                  height: "auto",
                  cursor: "pointer",
                  maxWidth: "350px",
                }}
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageHoverOut}
              />
              <h5 className="mt-3 text-dark">{image.text}</h5>
              <Link to="/our-products"><button className="btn my-5 btn-primary mt-2 rounded-pill">View Product</button></Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bubble Styles */}
      <style>{`
        .bubble {
          position: absolute;
          bottom: -50px;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
