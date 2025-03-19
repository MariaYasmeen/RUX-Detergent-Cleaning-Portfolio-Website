import React from "react"; 
import Slider from "../Components/Slider";
import CircleSlider from "../Components/CircleSlider";
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
        <CircleSlider />  
        <CardSlider />
        <ImageSlider />
    <WhyChooseUs />
    <FAQs />
    <Footer /> 
    </>
  );
};

export default Home;
