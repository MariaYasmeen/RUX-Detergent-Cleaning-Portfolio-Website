"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./ParallaxSection.module.scss";
import Image from "next/image";

const ParallaxSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef([]);

  const images = Array.from({ length: 12 }, (_, i) => ({
    src: `/images/${(i % 12) + 1}.png`,
    alt: `Design Image ${i + 1}`,
    depth: 0.6 + (i % 5) * 0.2,
    layer: "back",
    size: { width: 120, height: 120 },
  }));

  useEffect(() => {
    const imageElements = imagesRef.current;

    gsap.from(imageElements, {
      duration: 1.5,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.5,
    });

    imageElements.forEach((img) => {
      gsap.to(img, {
        y: "+=10",
        x: "+=10",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      const xPos = (clientX - left) / width - 0.5;
      const yPos = (clientY - top) / height - 0.5;

      imageElements.forEach((img, index) => {
        const depth = images[index].depth;
        gsap.to(img, {
          duration: 0.8,
          x: xPos * 40 * depth,
          y: yPos * 40 * depth,
          ease: "power2.out",
        });
      });
    };

    sectionRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      sectionRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const getPosition = (index, total) => {
    const angle = (index / total) * Math.PI * 2;
    return {
      x: 45 + Math.cos(angle) * 38,
      y: 40 + Math.sin(angle) * 28,
    };
  };

  return (
    <section ref={sectionRef} className={styles.parallaxSection}>
      <div className={styles.overlay}></div>
      <div ref={textRef} className={styles.centerText}>
        <h1>Creative Design Studio</h1>
        <p>Bringing your ideas to life</p>
      </div>
      <div className={styles.imagesContainer}>
        {images.map((image, index) => {
          const { x, y } = getPosition(index, images.length);
          return (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className={`${styles.parallaxImage}`}
              style={{ top: `${y}%`, left: `${x}%` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.size.width}
                height={image.size.height}
                priority
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ParallaxSection;
