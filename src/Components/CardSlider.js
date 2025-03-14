import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CardSlider.css";
import AnimBtn from "./AnimBtn";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { id: 1, title: "Creative Design", text: "Bringing ideas to life", img: "/main1.png" },
  { id: 2, title: "Modern Tech", text: "Innovation at its best", img: "/main2.png" },
  { id: 3, title: "Future Ready", text: "Solutions for tomorrow", img: "/main3.png" },
  { id: 4, title: "Smart Solutions", text: "Innovate your future", img: "/main4.png" },
  { id: 5, title: "Creative Vision", text: "Think beyond limits", img: "/main5.png" },
  { id: 6, title: "Modern Lifestyle", text: "Bringing tech to life", img: "/main6.png" },
];

const CardSlider = () => {
  const textRefs = useRef([]);
  const imgRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((text, index) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    imgRefs.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Section 1 */}
      <div className="row d-flex text-center p-3 featurette align-items-center justify-content-center flex-column-reverse flex-md-row">
        <div className="col-md-7 text-center p-3 d-flex flex-column justify-content-center" ref={(el) => (textRefs.current[0] = el)}>
          <h2 className="featurette-heading fw-normal lh-1 py-4">Our Story: Built on Trust, Driven by Innovation</h2>
          <p className="lead">At RUX, we’re on a mission to make cleaning easier, faster, and more sustainable.</p>
          <AnimBtn buttonName="Explore Products" path="/our-products" />
        </div>
        <div className="col-md-5 py-2 d-flex justify-content-center" ref={(el) => (imgRefs.current[0] = el)}>
          <img src="/1.png" className="img-fluid page-img" style={{ backgroundColor: "white" }} alt="..." />
        </div>
      </div>

      {/* Section 2 */}
      <div className="row d-flex p-3 text-center featurette align-items-center justify-content-center flex-column flex-md-row">
        <div className="col-md-5 py-2 d-flex justify-content-center" ref={(el) => (imgRefs.current[1] = el)}>
          <img src="/2.png" className="img-fluid page-img" style={{ backgroundColor: "white" }} alt="..." />
        </div>
        <div className="col-md-7 text-center px-4 d-flex flex-column justify-content-center" ref={(el) => (textRefs.current[1] = el)}>
          <h2 className="featurette-heading fw-normal lh-1 py-4">RUX: A Wholesale Detergent Distributor</h2>
          <p className="lead">For independent bulk laundry distributors, wholesale purchasing is the key to success.</p>
          <AnimBtn buttonName="Become Dealer" path="/dealer-network" />
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="big-card">
                <img src={card.img} className="big-card-img" alt={card.title} />
                <div className="big-card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Background Image Section */}
      <div className="imgctr" ref={(el) => (imgRefs.current[2] = el)}>
        <img src="/main4.png" className="img-fluid page-img" style={{ backgroundColor: "white" }} alt="..." />
      </div>
    </>
  );
};

export default CardSlider;
