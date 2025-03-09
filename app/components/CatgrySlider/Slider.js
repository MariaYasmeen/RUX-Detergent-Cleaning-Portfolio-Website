"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Slider.module.scss"; 

const slides = [
  {
    title: "Laundry Care",
    tag: "Fresh, Clean Laundry Every Time",
    button: "Shop Laundry Care",
    subtitle: "From tough stains to soft fabrics, our laundry care products make washing day a breeze.",
    videoId: "HHlMUJ90raA", 
  },
  {
    title: "Kitchen Cleaning",
    tag: "Sparkling Kitchens Made Easy",
    button: "Explore Kitchen Cleaners",
    subtitle: "Tackle grease, grime, and food stains with our powerful kitchen cleaning solutions.",
    videoId: "ufaQuuuvqyw",
  },
  {
    title: "Bathroom Cleaning",
    tag: "A Spotless Bathroom in Minutes",
    button: "Shop Bathroom Cleaners",
    subtitle: "Say goodbye to soap scum, mold, and hard water stains with our bathroom cleaning range.",
    videoId: "n2sjL0Vdc6g",
  },
  {
    title: "Floor Cleaning",
    tag: "Floors That Shine Bright",
    button: "Discover Floor Cleaners",
    subtitle: "From hardwood to tiles, our floor cleaners keep every surface spotless and streak-free.",
    videoId: "H-skV5oinho",
  },
  {
    title: "Disinfecting and Sanitizing",
    tag: "A Cleaner, Healthier Home",
    button: "Shop Disinfectants",
    subtitle: "Kill germs and bacteria with our powerful disinfectants and sanitizers for every surface.",
    videoId: "eaT6ep9cNYw",
  },
];

export default function Slider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      `.${styles.cardContent}`,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <> 
  
      <h3 className={styles.ctgrypgheading}>EXPLORE OUR RANGE  OF POWERFUL CLEANING SOLUTIONS</h3>
     <h4 className={styles.ctgrypgsubheading} >From sparkling dishes to gleaming floors, RUX detergents tackle every cleaning challenge effortlessly. Whether it’s your kitchen, bathroom, or laundry, we’ve got the perfect solution to keep your home spotless and fresh.</h4>
      <Swiper
        ref={sliderRef}
        modules={[Autoplay, Navigation]}
        slidesPerView={2}
        spaceBetween={20}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        className={styles.slider}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <h2>{slide.title}</h2>
              <h4>{slide.tag}</h4>
              <p>{slide.subtitle}</p>
              <button>{slide.button}</button>
            </div>
            <div className={styles.videoWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${slide.videoId}?autoplay=1&loop=1&playlist=${slide.videoId}&controls=0&mute=1`}
                allow="autoplay; encrypted-media"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}