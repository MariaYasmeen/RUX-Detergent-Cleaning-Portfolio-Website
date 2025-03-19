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
    <Slider />
        <VideoSection />
        <AnimatedText />  
        <CardSlider />
        <ImageSlider />
    <WhyChooseUs />
    <FAQs />
    <Footer /> 
    </>
  );
};

export default Home;
