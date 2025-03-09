"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../Navbar/Navbar";
import ParallaxSection from "../ParallaxSection/ParallaxSection";
import SwiperSlider from "../SwiperSlider/SwiperSlider";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <main className="min-h-screen bg-white" ref={heroRef}>
      <Navbar />
      <ParallaxSection  />
      <SwiperSlider />


      <div className="container-custom pt-24 md:pt-28">
        {/* Your content will go here */}
      </div>
    </main>
  );
};

export default Hero;