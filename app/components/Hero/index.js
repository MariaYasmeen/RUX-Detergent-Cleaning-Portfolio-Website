"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar/Navbar";
import ParallaxSection from "../ParallaxSection/ParallaxSection";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import AnimatedText from "../TextAnim/AnimatedText"; 
import Slider from "../CatgrySlider/Slider";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const animatedTextRef = useRef(null);


  const slidesData = [
    {
      season: "FALL 2023",
      description: "@ Urban elegance meets innovation",
      brand: "MONCLER GENIUS",
      details: "Bold, modern, and technical",
      color: "Blood Orange",
      price: "$1249.00",
      image: "/images/7.png",
      background: "linear-gradient(to bottom, #FE783D, #121826)",
    },
    {
      season: "WINTER 2023",
      description: "@ Extreme comfort and style",
      brand: "CANADA GOOSE",
      details: "Luxury warmth for all seasons",
      color: "Deep Blue",
      price: "$999.00",
      image: "/images/2.png",
      background: "linear-gradient(to bottom, #00499D, #121826)",
    },
    {
      season: "SUMMER 2023",
      description: "@ Light and breathable wear",
      brand: "NIKE TECH",
      details: "Innovation meets performance",
      color: "Sky Blue",
      price: "$849.00",
      image: "/images/4.png",
      background: "linear-gradient(to bottom, #DAB1C8, #511990)",
    },
  ];

  
  
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );

      ScrollTrigger.create({
        trigger: animatedTextRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
        pin: parallaxRef.current,
        pinSpacing: false,
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <main className="min-h-screen " ref={heroRef}>
      <Navbar />
      
      <div className="relative">
        <div ref={parallaxRef} className="relative w-full h-screen z-10">
          <ParallaxSection />
        </div>

        <div
          ref={animatedTextRef} 
        >
          <AnimatedText />
        </div>
      </div>
      <div className="container-custom pt-24 md:pt-28">
      <Slider />
      </div>
        <SwiperSlider slides={slidesData} />;

    
    </main>
  );
};

export default Hero;