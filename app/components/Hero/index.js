"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar/Navbar";
import ParallaxSection from "../ParallaxSection/ParallaxSection";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import AnimatedText from "../TextAnim/AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const animatedTextRef = useRef(null);

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

      <SwiperSlider />

      <div className="container-custom pt-24 md:pt-28">
        {/* Your content will go here */}
      </div>
    </main>
  );
};

export default Hero;