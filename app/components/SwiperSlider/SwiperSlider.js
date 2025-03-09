"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Thumbs } from "swiper/modules";
import gsap from "gsap";
import styles from "./SwiperSlider.module.scss";
import "swiper/swiper-bundle.css";

const SwiperSlider = ({ slides }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      swiperInstance.on("slideChangeTransitionStart", () => {
        gsap.from(`.${styles.swiperSlideActive} h2`, {
          x: -200,
          opacity: 0,
          duration: 1,
          delay: 0.5,
        });

        gsap.from(`.${styles.info} p, .${styles.info} span`, {
          y: 10,
          opacity: 0,
          stagger: 0.1,
          delay: 0.5,
        });

        gsap.from(`.${styles.pricing} p, .${styles.pricing} span, .${styles.pricing} h3, .${styles.btnBlock}`, {
          y: 10,
          opacity: 0,
          stagger: 0.1,
          delay: 0.5,
        });

        gsap.from(`.${styles.mainImg}`, {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 1,
        });

        gsap.from(`.${styles.swiperThumbs}`, {
          y: 20,
          opacity: 0,
          delay: 0.5,
        });
      });
    }
  }, []);

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        ref={swiperRef}
        direction="vertical"
        speed={1200}
        mousewheel={true}
        effect="coverflow"
        modules={[EffectCoverflow, Mousewheel, Thumbs]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: true,
        }}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={styles.swiperSlide}
            style={{ background: slide.background }}
          >
            <div className={styles.info}>
              <p>{slide.season}</p>
              <span>{slide.description}</span>
              <p>{slide.brand}</p>
              <span>{slide.details}</span>
            </div>
            <div className={styles.pricing}>
              <p>Color:</p>
              <span>{slide.color}</span>
              <h3>{slide.price}</h3>
              <div className={styles.btnBlock}>
                <button className={styles.lightBtn}>Buy Now</button>
                <button className={styles.btn}>Add To Cart</button>
              </div>
            </div>
            <img src={slide.image} alt={`Slide ${index + 1}`} className={styles.mainImg} />
          </SwiperSlide>
        ))}
      </Swiper> 
      
      <div className={styles.scroll}>
        Scroll Down <i className="ri-arrow-down-s-line"></i>
      </div>

      <div className={styles.social}>
        <a href="#">IN</a> <a href="#">FB</a> <a href="#">TW</a>
      </div>
    </div>
  );
};

export default SwiperSlider;
