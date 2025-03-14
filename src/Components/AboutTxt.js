import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Components.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const textRefs = useRef([]);
  const imgRefs = useRef([]);

  useLayoutEffect(() => {
    textRefs.current = textRefs.current.filter((el) => el !== null);
    imgRefs.current = imgRefs.current.filter((el) => el !== null);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".animated-text-container",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    textRefs.current.forEach((el, index) => {
      const directions = ["-80px", "-30px"];
      const rotation = [10 , -15, 0];

      timeline.fromTo(
        el,
        { opacity: 0, y: directions[index % directions.length]   },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          delay: index * 0.10,
        }
      );
    });

    imgRefs.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, x: "-150px", scale: 0.6, rotate: -15 },
        {
          opacity: 1,
          x: "0px",
          scale: 1,
          rotate: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="animated-text-container">
      <h2 ref={(el) => textRefs.current.push(el)}>
        Empowering <span className="highlight">spotless </span> 
        <img ref={(el) => imgRefs.current.push(el)} className="textimg" src="/textimg2.png" alt="img" />
      </h2>
      
      <h2 ref={(el) => textRefs.current.push(el)}>
        with <span style={{ color: "green", fontWeight: "bold" }}>7 SOLUTIONS</span>. Blending
      </h2>

      <h2 ref={(el) => textRefs.current.push(el)}>
        science and <span className="highlight"> <img ref={(el) => imgRefs.current.push(el)} className="textimg" src="/textimg1.png" alt="img" /> sustainability </span> 
       
      </h2>

      <h2 ref={(el) => textRefs.current.push(el)}>
        to <span className="highlight">conquer</span> stains and redefine
      </h2>

      <h2 ref={(el) => textRefs.current.push(el)}>
        <img ref={(el) => imgRefs.current.push(el)} className="textimg" src="/textimg3.png" alt="img" /> 
        <span className="highlight"> clean living.</span>
      </h2>
    </div>
  );
};

export default AnimatedText;
