import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Components.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const textRefs = useRef([]);

  useLayoutEffect(() => {
    textRefs.current = textRefs.current.filter((el) => el !== null);

    textRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", 
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup GSAP ScrollTriggers
    };
  }, []);

  const texts = [
    "Innovate Your Future",
    "Designing Dreams",
    "Technology Meets Creativity",
    "Transforming Ideas into Reality",
    "Your Vision, Our Mission",
  ];

  return (
    <div className="animated-text-container">
      {texts.map((text, index) => (
        <h5
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className="animated-text"
        >
          {text}
        </h5>
      ))}
    </div>
  );
};

export default AnimatedText;
