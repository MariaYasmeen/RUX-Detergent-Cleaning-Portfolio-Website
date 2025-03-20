import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
 import ProductCard from "../Components/ProductCard";
 import Footer from "../Components/Footer"; 

 
 const productData = [
  {
    image: "https://i.pinimg.com/736x/bd/e6/34/bde6343a6159af5d130c1255400789a0.jpg",
    title: "RUX DISH WASH LIQUID",
    price: "670",
    description: ["Powerful grease removal", "Gentle on hands", "Long-lasting foam"],
    scents: ["Lemon", "Orange", "Unscented"],
    packSizes: ["500ml", "1L", "2L"],
    ingredients: [
      "Water",
      "Sodium Lauryl Sulfate",
      "Cocamidopropyl Betaine",
      "Glycerin",
      "Fragrance",
      "Preservatives",
      "Citric Acid",
    ],
    safety: [
      "Avoid direct contact with eyes; if contact occurs, rinse immediately with plenty of water.",
      "Keep away from children and pets.",
      "Do not ingest. If swallowed, seek medical attention immediately.",
      "Use gloves if you have sensitive skin or allergies.",
      "Store in a cool, dry place away from direct sunlight.",
    ],
    usage: [
      "Pour a small amount onto a wet sponge or directly into dishwater.",
      "Lather and scrub dishes thoroughly to remove grease and food residues.",
      "Rinse with clean water to ensure no detergent residue remains.",
      "For stubborn stains, soak dishes in warm water with a small amount of dish wash liquid before scrubbing.",
    ],
  },
  {
    image: "https://i.pinimg.com/736x/1e/79/bb/1e79bb7e130b665e340c37ff75627314.jpg",
    title: "RUX HAND WASH",
    price: "950",
    description: ["Deep cleansing", "Moisturizing formula", "Antibacterial protection"],
    scents: ["Rose", "Lavender", "Aloe Vera"],
    packSizes: ["250ml", "500ml", "1L"],
    ingredients: [
      "Water",
      "Sodium Lauryl Sulfate",
      "Glycerin",
      "Aloe Extract",
      "Fragrance",
      "Vitamin E",
      "Preservatives",
    ],
    safety: [
      "Avoid direct contact with eyes; if irritation occurs, rinse thoroughly with water.",
      "For external use only. Do not ingest.",
      "Discontinue use if skin irritation develops.",
      "Store in a cool, dry place away from direct sunlight.",
    ],
    usage: [
      "Wet hands with clean water.",
      "Apply a small amount of hand wash and lather thoroughly.",
      "Scrub hands for at least 20 seconds, ensuring to clean between fingers and under nails.",
      "Rinse hands well with water and dry with a clean towel.",
    ],
  },
  {
    image: "https://i.pinimg.com/736x/8f/5c/d9/8f5cd9188a10b17a4b59dd863d4c9cc6.jpg",
    title: "RUX GLASS CLEANER",
    price: "850",
    description: ["Streak-free shine", "Removes dirt and smudges", "Quick drying"],
    scents: ["Unscented", "Fresh Air", "Lemon"],
    packSizes: ["500ml", "750ml", "1L"],
    ingredients: [
      "Water",
      "Isopropyl Alcohol",
      "Ammonium Hydroxide",
      "Nonionic Surfactants",
      "Fragrance",
      "Dye",
    ],
    safety: [
      "Use in a well-ventilated area.",
      "Avoid contact with eyes; if contact occurs, rinse with water immediately.",
      "Do not mix with other household cleaners.",
      "Keep out of reach of children.",
      "Store in a cool, dry place away from direct sunlight.",
    ],
    usage: [
      "Spray directly onto glass surfaces from a distance of 6-8 inches.",
      "Wipe immediately with a clean, dry microfiber cloth.",
      "For stubborn spots, spray again and scrub lightly before wiping.",
      "Use on windows, mirrors, and other glass surfaces for a streak-free shine.",
    ],
  },
  {
    image: "https://i.pinimg.com/736x/07/4d/29/074d29dda309b0a5049a0cb1883fe645.jpg",
    title: "RUX FLOOR CLEANER",
    price: "1450",
    description: ["Removes tough stains", "Long-lasting fragrance", "Antibacterial formula"],
    scents: ["Lavender", "Pine", "Citrus"],
    packSizes: ["1L", "2L", "5L"],
    ingredients: [
      "Water",
      "Nonionic Surfactants",
      "Disinfectant Compounds",
      "Fragrance",
      "Sodium Citrate",
      "Coloring Agents",
    ],
    safety: [
      "Keep out of reach of children.",
      "Do not ingest; if swallowed, seek medical attention immediately.",
      "Avoid prolonged contact with skin; use gloves if needed.",
      "Store in a cool, dry place away from direct sunlight.",
    ],
    usage: [
      "Dilute 50ml of floor cleaner in a bucket of water (5 liters).",
      "Use a mop to spread the solution evenly across the floor.",
      "For tough stains, apply undiluted cleaner directly to the stain, let sit for 5 minutes, and scrub gently.",
      "Allow the floor to air dry; no rinsing is required.",
    ],
  },
  {
    image: "https://i.pinimg.com/736x/09/3b/41/093b41d21f9b2508392369a880957d0e.jpg",
    title: "RUX AIR FRESHENER",
    price: "750",
    description: ["Eliminates odors", "Long-lasting freshness", "Safe for home and car"],
    scents: ["Lavender", "Rose", "Citrus", "Ocean Breeze"],
    packSizes: ["250ml", "500ml"],
    ingredients: [
      "Water",
      "Ethanol",
      "Fragrance Oils",
      "Propellants",
      "Solubilizers",
    ],
    safety: [
      "Avoid spraying directly onto skin or eyes.",
      "Do not spray near an open flame or heat source.",
      "Keep out of reach of children and pets.",
      "Use in a well-ventilated area.",
      "Store in a cool, dry place away from direct sunlight.",
    ],
    usage: [
      "Shake well before use.",
      "Spray 2-3 times in the center of the room for a refreshing fragrance.",
      "Use in cars, offices, and home spaces for long-lasting freshness.",
      "For best results, avoid spraying directly onto fabrics or furniture.",
    ],
  },
  {
    image: "https://i.pinimg.com/736x/52/d3/b4/52d3b4f270960e05845730d04ac191ca.jpg",
    title: "RUX HAND SANITIZER",
    price: "950",
    description: ["Deep cleansing", "Moisturizing formula", "Antibacterial protection"],
    scents: ["Rose", "Lavender", "Aloe Vera"],
    packSizes: ["250ml", "500ml", "1L"],
    ingredients: [
      "Water",
      "Sodium Lauryl Sulfate",
      "Glycerin",
      "Aloe Extract",
      "Fragrance",
      "Vitamin E",
      "Preservatives",
    ],
    safety: [
      "Avoid direct contact with eyes; if irritation occurs, rinse thoroughly with water.",
      "For external use only. Do not ingest.",
      "Discontinue use if skin irritation develops.",
      "Store in a cool, dry place away from direct sunlight.",
    ],
    usage: [
      "Wet hands with clean water.",
      "Apply a small amount of hand wash and lather thoroughly.",
      "Scrub hands for at least 20 seconds, ensuring to clean between fingers and under nails.",
      "Rinse hands well with water and dry with a clean towel.",
    ],
  },
  {
    image: "https://i.pinimg.com/736x/76/6e/d6/766ed67bfa57fa59066445e19776832b.jpg",
    title: "RUX METAL CLEANER",
    price: "850",
    description: ["Streak-free shine", "Removes dirt and smudges", "Quick drying"],
    scents: ["Unscented", "Fresh Air", "Lemon"],
    packSizes: ["500ml", "750ml", "1L"],
    ingredients: [
      "Water",
      "Isopropyl Alcohol",
      "Ammonium Hydroxide",
      "Nonionic Surfactants",
      "Fragrance",
      "Dye",
    ],
    safety: [
      "Use in a well-ventilated area.",
      "Avoid contact with eyes; if contact occurs, rinse with water immediately.",
      "Do not mix with other household cleaners.",
      "Keep out of reach of children.",
      "Store in a cool, dry place away from direct sunlight.",
    ],
    usage: [
      "Spray directly onto glass surfaces from a distance of 6-8 inches.",
      "Wipe immediately with a clean, dry microfiber cloth.",
      "For stubborn spots, spray again and scrub lightly before wiping.",
      "Use on windows, mirrors, and other glass surfaces for a streak-free shine.",
    ],
  },
  {
    image: "https://i.pinimg.com/736x/d1/64/04/d164049395b41c520ca2cb9b4831ee90.jpg",
    title: "RUX GLASS DETERGENT",
    price: "850",
    description: ["Streak-free shine", "Removes dirt and smudges", "Quick drying"],
    scents: ["Unscented", "Fresh Air", "Lemon"],
    packSizes: ["500ml", "750ml", "1L"],
    ingredients: [
      "Water",
      "Isopropyl Alcohol",
      "Ammonium Hydroxide",
      "Nonionic Surfactants",
      "Fragrance",
      "Dye",
    ],
    safety: [
      "Use in a well-ventilated area.",
      "Avoid contact with eyes; if contact occurs, rinse with water immediately.",
      "Do not mix with other household cleaners.",
      "Keep out of reach of children.",
      "Store in a cool, dry place away from direct sunlight.",
    ],
    usage: [
      "Spray directly onto glass surfaces from a distance of 6-8 inches.",
      "Wipe immediately with a clean, dry microfiber cloth.",
      "For stubborn spots, spray again and scrub lightly before wiping.",
      "Use on windows, mirrors, and other glass surfaces for a streak-free shine.",
    ],
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
       <div className="row">
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div> 
 
<Footer />
    </>
  );
};

export default Category;
