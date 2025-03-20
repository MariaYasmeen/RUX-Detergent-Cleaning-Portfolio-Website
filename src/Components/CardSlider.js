import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Dishwashing Detergents", text: "For cleaning dishes, cutlery, and kitchen utensils", img: "/slide1.png" },
    { id: 2, title: "Multi-Surface Cleaners", text: "Cleaner suitable for various surfaces.", img: "/slide2.png" },
    { id: 3, title: "Laundry Detergents", text: "Designed for washing clothes.", img: "/slide3.png" },
    { id: 4, title: "Bleach and Stain Removers", text: "Used for whitening clothes, disinfecting surfaces, and removing tough stains.", img: "/slide4.png" },
    { id: 5, title: "Specialty Cleaners", text: "Likely a specialized detergent, possibly for specific cleaning tasks", img: "/slide5.png" },
   ];
  
  return (
    <div className="  p-5">
     
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 }, // 1 card on small screens
          768: { slidesPerView: 2 }, // 2 cards on tablets
          1024: { slidesPerView: 3 }, // 3 cards on desktops
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="d-flex flex-column align-items-center">
            {/* Fixed Height Card */}
            <div className="card   border-0 rounded-3 text-center h-90 bg-info bg-opacity-25" style={{ height: "450px", width: "100%" }}>
              {/* Fixed Height Image */}
              <div className="d-flex p-3 justify-content-center align-items-center" style={{ height: "290px" }}>
              <Link to="/our-products"> <img src={card.img} className="w-100 h-100 object-fit-cover rounded-top-3" alt={card.title} /></Link>
              </div>
              {/* Card Body */}
              <div className="card-body d-flex flex-column justify-content-between" style={{color:"black"}}>
                <h3 className="fw-bold">{card.title}</h3>
                <p  >{card.text}</p>
               </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
