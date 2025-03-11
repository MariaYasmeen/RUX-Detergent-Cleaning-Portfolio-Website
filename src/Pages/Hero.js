import React from "react"; 
import Slider from "../Components/Slider";
import AnimatedText from "../Components/AboutTxt";
import CardSlider from "../Components/CardSlider";
import VideoSection from "./VideoSection"; 
import ImageSlider from "./ImageSlider";
  
const Home = () => {
  return (
    <> 
       <div className="fixed-slider">
        <Slider />
      </div>
      <div className="scrolling-content">
        <VideoSection />
        <AnimatedText /> 
        <CardSlider /> 
        <ImageSlider />
      </div>
    </>
  );
};

export default Home;
