import React from "react"; 
import Slider from "../Components/Slider";
import AnimatedText from "../Components/AboutTxt";
import CardSlider from "../Components/CardSlider";
import VideoSection from "./VideoSection"; 
import ImageSlider from "./ImageSlider";
import WhyChooseUs from "./WhyChooseUs";
import FAQs from "./FAQs";
import { Navbar } from "react-bootstrap";
  
const Home = () => {
  return (
    <>  
       <div className="fixed- ">
        <Slider />
      </div>
      <div className="scrolling- ">
        <VideoSection />
        <AnimatedText /> 
        <CardSlider /> 
        <ImageSlider />
    <WhyChooseUs />
    <FAQs />
      </div>
    </>
  );
};

export default Home;
