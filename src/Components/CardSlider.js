import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Import Swiper CSS
import "swiper/css/navigation"; // Navigation buttons
import "swiper/css/pagination"; // Pagination dots
import "./CardSlider.css"; // Custom styles
import AnimBtn from "./AnimBtn";

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

<div class="row d-flex text-center featurette align-items-center justify-content-center">
      <div class="col-md-7 text-center px-3 d-flex flex-column justify-content-center">
        <h2 class="featurette-heading fw-normal lh-1 py-4">Our Story: Built on Trust, Driven by Innovation
        </h2>
        <p class="lead ">At RUX, we’re on a mission to make cleaning easier, faster, and more sustainable. Whether you’re a busy homeowner or a business owner, our products are designed to save you time and effort while delivering unmatched results.</p>
        <AnimBtn buttonName="explore products" 
     path="/luxury-pret" />
      </div>
      <div class="col-md-5 py-2 justify-content-center align-items-center">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
      </div>
    </div>

    <div class="row d-flex text-center featurette align-items-center justify-content-center">
    <div class="col-md-5 py-2">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
      </div>
      <div class="col-md-7 text-center px-4 d-flex flex-column justify-content-center">
      <h2 class="featurette-heading fw-normal lh-1 py-4">RUX a Wholesale detergent distributor
        </h2>      <p class="lead ">In the ever-expanding world of consumer goods and household essentials, the distribution of laundry detergent plays a pivotal role. For independent bulk laundry distributors seeking opportunities in this lucrative market, one option stands out as particularly advantageous: wholesale purchasing.</p>
        <AnimBtn buttonName="become dealer" 
     path="/luxury-pret" />
      </div>
     
      </div>

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
     <img src="/main4.png" className="img-fluid page-img" style={{ backgroundColor: "white" }} alt="..." />
     </div>

     
    
 </>
  
  );
};

export default CardSlider;
