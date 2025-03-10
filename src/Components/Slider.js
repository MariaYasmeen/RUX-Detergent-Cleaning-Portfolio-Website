import React, { useState, useEffect } from "react";
import "./Components.css";

const images = [
  {
    src: "./main1.png",
    title: "Creative Ideas",
    text: "Bringing imagination to life.",
  },
  {
    src: "./main2.png",
    title: "Innovative Designs",
    text: "Turning visions into reality.",
  },
  {
    src: "./main3.png",
    title: "Your Success, Our Mission",
    text: "Designing for the future.",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={images[currentIndex].src} alt="Slide" className="slide-image" />
        <div className="text-overlay">
          <h2>{images[currentIndex].title}</h2>
          <p>{images[currentIndex].text}</p>
        </div>
        <button className="prev" onClick={prevSlide}>◄</button>
        <button className="next" onClick={nextSlide}>►</button>
      </div>
    </div>
  );
};

export default ImageSlider;
