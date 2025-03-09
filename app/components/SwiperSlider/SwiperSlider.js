"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Thumbs } from "swiper/modules";
import gsap from "gsap";
import styles from "./SwiperSlider.module.scss";
import "swiper/swiper-bundle.css";

const SwiperSlider = () => {
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
        <SwiperSlide className={styles.swiperSlide} style={{ background: "linear-gradient(to bottom, #FE783D, #121826)" }}>
          <div className={styles.info}>
            <p>FALL 2023</p>
            <span>@ Urban elegance <br /> meets innovation</span>
            <p>MONCLER GENIUS</p>
            <span>Bold, modern, <br /> and technical</span>
          </div>
          <div className={styles.pricing}>
            <p>Color:</p>
            <span>Blood Orange</span>
            <h3>$1249.00</h3>
            <div className={styles.btnBlock}>
              <button className={styles.lightBtn}>Buy Now</button>
              <button className={styles.btn}>Add To Cart</button>
            </div>
          </div>
          <img src="/images/7.png" alt="Slide 1" className={styles.mainImg} />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide} style={{ background: "linear-gradient(to bottom, #00499D, #121826)" }}>
          <div className={styles.info}>
            <p>FALL 2023</p>
            <span>@ Urban elegance <br /> meets innovation</span>
            <p>MONCLER GENIUS</p>
            <span>Bold, modern, <br /> and technical</span>
          </div>
          <div className={styles.pricing}>
            <p>Color:</p>
            <span>Blood Orange</span>
            <h3>$1249.00</h3>
            <div className={styles.btnBlock}>
              <button className={styles.lightBtn}>Buy Now</button>
              <button className={styles.btn}>Add To Cart</button>
            </div>
          </div>
          <img src="/images/2.png" alt="Slide 2" className={styles.mainImg} />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide} style={{ background: "linear-gradient(to bottom, #DAB1C8, #511990)" }}>
          <div className={styles.info}>
            <p>FALL 2023</p>
            <span>@ Urban elegance <br /> meets innovation</span>
            <p>MONCLER GENIUS</p>
            <span>Bold, modern, <br /> and technical</span>
          </div>
          <div className={styles.pricing}>
            <p>Color:</p>
            <span>Blood Orange</span>
            <h3>$1249.00</h3>
            <div className={styles.btnBlock}>
              <button className={styles.lightBtn}>Buy Now</button>
              <button className={styles.btn}>Add To Cart</button>
            </div>
          </div>
          <img src="/images/3.png" alt="Slide 3" className={styles.mainImg} />
        </SwiperSlide>
      </Swiper>

      <div className={styles.swiperThumbs}>
        <div className={styles.swiperWrapper}>
          <div className={styles.swiperSlide}>
            <img src="/images/1.png" alt="Thumbnail 1" />
          </div>
          <div className={styles.swiperSlide}>
            <img src="/images/2.png" alt="Thumbnail 2" />
          </div>
          <div className={styles.swiperSlide}>
            <img src="/images/3.png" alt="Thumbnail 3" />
          </div>
        </div>
      </div>

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