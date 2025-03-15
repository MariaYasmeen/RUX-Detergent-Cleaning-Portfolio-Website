import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      loaderRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    setTimeout(() => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          setIsVisible(false);
          onComplete(); // Notify parent when animation is done
        },
      });
    }, 2000);
  }, [onComplete]);

  if (!isVisible) return null; // Hide loader after animation

  return (
    <div
      ref={loaderRef}
      className="d-flex justify-content-center align-items-center vh-100 w-100 position-fixed top-0 start-0 bg-white"
      style={{ zIndex: 9999 }}
    >
      <img src="/logo.png" alt="Logo" className="img-fluid" style={{ width: "120px" }} />
    </div>
  );
};

export default Loader;
