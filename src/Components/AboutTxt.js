import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "react-bootstrap";

const AnimatedText = () => {
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    // Gradient Animation for Text
    gsap.to(textRef.current, {
      backgroundPosition: "200% center",
      duration: 3,
      repeat: -1,
      ease: "linear",
    });

    // Background Animation Effect
    gsap.fromTo(
      bgRef.current,
      { opacity: 0.5, scale: 1 },
      { opacity: 1, scale: 1.1, duration: 5, repeat: -1, yoyo: true, ease: "power1.inOut" }
    );
  }, []);

  return (
    <Container fluid className="d-flex align-items-center  vh-100 position-relative overflow-hidden">
      {/* Background Animated Effect */}
      <div
        ref={bgRef}
        className="position-absolute w-100 h-100"
         ></div>

      {/* Animated Text */}
      <h1
        ref={textRef}
        className="display-1 fw-bold text-uppercase  sposition-relative"
        style={{
          background: "linear-gradient(90deg, rgb(11,115,214), rgb(44,189,6))",
          backgroundSize: "400% 100%",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        Power of Innovation
      </h1>
    </Container>
  );
};

export default AnimatedText;
