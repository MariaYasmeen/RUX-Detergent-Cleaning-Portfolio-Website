import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Testimonial.css'; 

const Testimonials = () => {
  return (
    <div className="wrapper">
      <header>
        <h1>CLIENT TESTIMONIALS</h1>
      </header>

      {/* Swiper Slider */}
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination]}
        direction="horizontal"
        loop={true}
        autoHeight={false}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {/* Slides */}
        <SwiperSlide>
          <div className="content-wrapper">
            <div className="content">
              <div className="swiper-avatar">
                <img src="https://i.pinimg.com/736x/e4/71/dc/e471dc29f7f1ee4ef6b7f2dc924e75c7.jpg" alt="Juliet Elliott" />
              </div>
              <p>
                "Finally, a detergent that cleans powerfully and doesn’t harm the planet. RUX Solar Cleaner is magic"
              </p>
              <p className="cite">– Farah, Islamabad</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content-wrapper">
            <div className="content">
              <div className="swiper-avatar">
                <img src="https://i.pinimg.com/736x/c1/2d/b5/c12db5a9b339ffa962c030ddbf0681d5.jpg" alt="Juliet Elliott" />
              </div>
              <p>
                " RUX Washing Liquid cut our laundry costs by 30%—and our hotel guests keep asking about the fresh scent!"
              </p>
              <p className="cite">– Hospitality Pro, Multan</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content-wrapper">
            <div className="content">
              <div className="swiper-avatar">
                <img src="https://i.pinimg.com/736x/d9/09/3d/d9093dd27593ad83c327ba285ba24153.jpg" alt="Juliet Elliott" />
              </div>
              <p>
                "Zero regrets! Training was seamless, margins are fair, and the products practically sell themselves."
              </p>
              <p className="cite">– Zain Distributors, Faisalabad</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content-wrapper">
            <div className="content">
              <div className="swiper-avatar">
                <img src="https://i.pinimg.com/736x/f3/62/0b/f3620b6c22221288c1a46f4bbe1ecc16.jpg" alt="Katie Kookaburra" />
              </div>
              <p>
                "5 years, 7 products, 100% trust. RUX Bleach is my secret weapon against stubborn stains."
              </p>
              <p className="cite">– Mrs. Khan, Rawalpindi</p>
            </div>
          </div>
        </SwiperSlide>

       </Swiper>

      {/* Navigation and Pagination */}
      <div className="swiper-nav-wrapper">
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Testimonials;
