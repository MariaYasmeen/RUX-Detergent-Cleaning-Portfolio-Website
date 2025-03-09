'use client';
import { useRef, useEffect } from 'react';
import styles from './AnimatedText.module.scss';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const phrases = [
  "From tough stains to everyday messes, RUX gets it done. Our detergents are designed to make cleaning effortless, so you can spend less time scrubbing.",
  "Tough on dirt but gentle on your home, ensuring a fresh and clean environment for you and your family.",
];

export default function AnimatedText() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const textRefs = useRef([]);

  useEffect(() => {
    if (inView) {
      textRefs.current.forEach((text, index) => {
        gsap.fromTo(
          text,
          { y: '100%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.75, delay: index * 0.2, ease: 'power3.out' }
        );
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className={styles.animatedTextContainer}> 
      <div className={styles.contentWrapper}> 
        <div className={styles.leftSection}> 
          <h2>Discover the Power of RUX</h2>
          <p>{phrases[0]}</p>
          <button className={styles.ctaButton}>Explore the Collection</button>
        </div>
        <div className={styles.rightSection}> 
          <iframe
            className={styles.videoFrame}
            src="https://www.youtube.com/embed/f0nxKTqXe_s?autoplay=1&loop=1&mute=1&controls=0&playlist=f0nxKTqXe_s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
