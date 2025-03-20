import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
 import ProductCard from "../Components/ProductCard";

 
const productData = [
  {
    image: "https://i.pinimg.com/736x/bd/e6/34/bde6343a6159af5d130c1255400789a0.jpg",
    title: "RUX DISH WASH LIQUID",
    price: "670",
    description: ["Powerful grease removal", "Gentle on hands", "Long-lasting foam"],
    scents: ["Lemon", "Orange", "Unscented"],
    ingredients: ["Water", "Sodium Lauryl Sulfate", "Fragrance"],
    safety: ["Soft on fabrics", "Deep cleaning power", "Safe for all colors"],
    usage: "Apply a small amount on a sponge, lather, and rinse thoroughly.",
  },
  {
    image: "https://i.pinimg.com/736x/07/4d/29/074d29dda309b0a5049a0cb1883fe645.jpg",
    title: "RUX TOILET BOWL LIQUID",
    price: "2300",
    description: ["Removes tough stains", "Kills 99.9% of germs", "Pleasant fragrance"],
    scents: ["Lavender", "Pine", "Ocean Breeze"],
    ingredients: ["Hydrochloric Acid", "Sodium Hypochlorite", "Water"],
    safety: ["Soft on fabrics", "Deep cleaning power", "Safe for all colors"],
    usage: "Pour around the bowl, let sit for 10 minutes, scrub, and flush.",
  },
  {
    image: "https://i.pinimg.com/736x/04/3a/ed/043aed7431d9f62521681373ab22e192.jpg",
    title: "RUX MULTI SURFACE CLEANER",
    price: "3490",
    description: ["Safe for all surfaces", "No streak formula", "Quick drying"],
    scents: ["Floral", "Citrus", "Unscented"],
    ingredients: ["Isopropyl Alcohol", "Surfactants", "Water"],
    safety: ["Soft on fabrics", "Deep cleaning power", "Safe for all colors"],
    usage: "Spray onto the surface and wipe with a clean cloth.",
  },
  {
    image: "https://i.pinimg.com/736x/63/a5/50/63a550fd86c2c0356c6b9418245caeeb.jpg",
    title: "RUX BLUE",
    price: "1300",
    description: ["High-efficiency formula", "Brightens whites", "Removes stains"],
    scents: ["Fresh Linen", "Lavender", "No Fragrance"],
    ingredients: ["Water", "Sodium Carbonate", "Enzymes"],
    safety: ["Soft on fabrics", "Deep cleaning power", "Safe for all colors"],
    usage: "Add one cap per wash load for best results.",
  },
  {
    image: "https://i.pinimg.com/736x/f1/f8/42/f1f8421235c1f148965c8ad6d9d98b60.jpg",
    title: "RUX BLEACH",
    price: "4700",
    description: ["Whitens clothes", "Disinfects surfaces", "Removes mold"],
    scents: ["Regular", "Lemon", "Unscented"],
    ingredients: ["Sodium Hypochlorite", "Water", "Sodium Hydroxide"],
    safety: ["Soft on fabrics", "Deep cleaning power", "Safe for all colors"],
    usage: "Dilute before use. Follow fabric care labels for proper application.",
  },
  {
    image: "https://i.pinimg.com/736x/8f/5c/d9/8f5cd9188a10b17a4b59dd863d4c9cc6.jpg",
    title: "RUX SOLAR CLEANER",
    price: "500",
    description: ["Removes dirt & grime", "Enhances solar panel efficiency", "Eco-friendly"],
    scents: ["Fresh Air", "Neutral"],
    safety: ["Soft on fabrics", "Deep cleaning power", "Safe for all colors"],
    usage: "Spray directly onto panels and wipe with a microfiber cloth.",
  },
  {
    image: "https://i.pinimg.com/736x/1e/79/bb/1e79bb7e130b665e340c37ff75627314.jpg",
    title: "RUX WASHING LIQUID",
    price: "1100",
    description: ["Soft on fabrics", "Deep cleaning power", "Safe for all colors"],
    scents: ["Rose", "Cotton Breeze", "No Fragrance"],
    ingredients: ["Water", "Sodium Lauryl Sulfate", "Glycerin"],
    safety: ["Soft on fabrics", "Deep cleaning power", "Safe for all colors"],
     usage: "Use one cap per wash load. Suitable for hand and machine washing.",
  },
];
const slides = [
  { image: "/pg1.png" },
  { image: "/pg2.png" },
  { image: "/pg3.png" },
  { image: "/pg4.png" }, 
];



const Category = () => {
  return (
    <>
    <div className="container-fluid py-4 px-3 px-md-5">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="rounded-4 "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="img-fluid w-100"
              style={{
                objectFit: "cover", 
                borderRadius: "30px", 
                marginTop:"30px",
                padding: "15px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Our Products</h2>
      <div className="row">
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div> 
 

    </>
  );
};

export default Category;
