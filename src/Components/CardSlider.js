import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Import Swiper CSS
import "swiper/css/navigation"; // Navigation buttons
import "swiper/css/pagination"; // Pagination dots
import "./CardSlider.css"; // Custom styles

const cards = [
  { id: 1, title: "Creative Design", text: "Bringing ideas to life", img: "/main1.png" },
  { id: 2, title: "Modern Tech", text: "Innovation at its best", img: "/main2.png" },
  { id: 3, title: "Future Ready", text: "Solutions for tomorrow", img: "/main3.png" },
  { id: 4, title: "Smart Solutions", text: "Innovate your future", img: "/main4.png" },
  { id: 5, title: "Creative Vision", text: "Think beyond limits", img: "/main5.png" },
  { id: 6, title: "Modern Lifestyle", text: "Bringing tech to life", img: "/main6.png" },
];

const CardSlider = () => {
  return (
    <>
      <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3} // Show 3 cards at a time
        spaceBetween={20} // Add space between slides
        navigation={true} // Enable next/prev buttons
        pagination={{ clickable: true }} // Enable pagination dots
        autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
        breakpoints={{
          320: { slidesPerView: 1 }, // 1 card for mobile
          768: { slidesPerView: 2 }, // 2 cards for tablets
          1024: { slidesPerView: 3 }, // 3 cards for desktops
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="big-card">
              <img src={card.img} className="big-card-img" alt={card.title} />
              <div className="big-card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
     {/* ✅ Fix: Ensure Background Image is Properly Loaded */}
     <div className="imgctr">
     <img src="/main1.png" className="img-fluid page-img" style={{ backgroundColor: "white" }} alt="..." />
 
 
     </div>
    
 </>
  
  );
};

export default CardSlider;
