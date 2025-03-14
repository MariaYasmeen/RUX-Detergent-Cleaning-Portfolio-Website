import React from "react"; 
import Slider from "../Components/Slider";
import AnimatedText from "../Components/AboutTxt";
import CardSlider from "../Components/CardSlider";
import VideoSection from "./VideoSection"; 
import ImageSlider from "./ImageSlider";
import WhyChooseUs from "./WhyChooseUs";
import FAQs from "./FAQs";
import Footer from "../Components/Footer";
   
const Home = () => {
  return (
    <>  
       <div className="slider-css">
        <Slider />
      </div>
      <div className="scrolling- ">
        <VideoSection />
        <AnimatedText /> 
        <CardSlider /> 
        <ImageSlider />
    <WhyChooseUs />
    <FAQs />
    <Footer />
      </div>
    </>
  );
};

export default Home;
