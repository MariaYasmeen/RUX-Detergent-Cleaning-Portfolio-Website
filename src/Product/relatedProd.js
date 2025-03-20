import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom"; // ✅ Import for navigation
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css"; // ✅ Custom CSS file

const productData = [
  {
    image: "https://i.pinimg.com/736x/bd/e6/34/bde6343a6159af5d130c1255400789a0.jpg",
    title: "RUX DISH WASH LIQUID",
    price: "670",
  },
  {
    image: "https://i.pinimg.com/736x/07/4d/29/074d29dda309b0a5049a0cb1883fe645.jpg",
    title: "RUX TOILET BOWL LIQUID",
    price: "2300",
  },
  {
    image: "https://i.pinimg.com/736x/04/3a/ed/043aed7431d9f62521681373ab22e192.jpg",
    title: "RUX MULTI SURFACE CLEANER",
    price: "3490",
  },
  {
    image: "https://i.pinimg.com/736x/63/a5/50/63a550fd86c2c0356c6b9418245caeeb.jpg",
    title: "RUX BLUE",
    price: "1300",
  },
  {
    image: "https://i.pinimg.com/736x/f1/f8/42/f1f8421235c1f148965c8ad6d9d98b60.jpg",
    title: "RUX BLEACH",
    price: "4700",
  },
];

const RelatedProd = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleQuickView = (product) => {
    const formattedTitle = product.title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    navigate(`/our-products/${formattedTitle}`, { state: product });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4 py-3">OUR CLIENTS ALSO EXPLORE</h2>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          576: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="pb-5"
      >
        {productData.map((product, index) => (
          <SwiperSlide key={index} className="d-flex justify-content-center">
            <div className="related-card">
              <img src={product.image} alt={product.title} className="related-card-img" />
              <div className="related-card-body">
                <h5 className="fw-bold">{product.title}</h5>
                <p className="text-muted">PKR {product.price}</p>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleQuickView(product)} // ✅ Pass product details
                >
                  Quick View
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProd;
