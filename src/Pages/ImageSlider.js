import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap } from 'gsap';

const ImageSlider = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      image: "./4.png",
      title: "Bananas",
      headline: "Fresh Bananas",
      subheadline: "Delicious and Nutritious",
      buttonText: "Learn More",
      bgColor: "#2A93BC"
    },
    {
      image: "5.png",
      title: "Coconut",
      headline: "Tropical Coconut",
      subheadline: "Refreshing and Healthy",
      buttonText: "Explore",
      bgColor: "#6BC85E"
    },
    {
      image: "./6.png",
      title: "Orange",
      headline: "Juicy Oranges",
      subheadline: "Vitamin C Powerhouse",
      buttonText: "Discover",
      bgColor: "#45367E"
    }
  ];

  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  // Function to create bubbles
  const createBubbles = () => {
    const bubbleContainer = document.createElement('div');
    bubbleContainer.className = 'bubble-container';
    bubbleContainer.style.position = 'absolute';
    bubbleContainer.style.top = '0';
    bubbleContainer.style.left = '0';
    bubbleContainer.style.width = '100%';
    bubbleContainer.style.height = '100%';
    bubbleContainer.style.overflow = 'hidden';
    canvasRef.current.appendChild(bubbleContainer);

    const spawnBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.position = 'absolute';
      bubble.style.width = `${Math.random() * 40 + 10}px`; // Random size between 10px and 50px
      bubble.style.height = bubble.style.width;
      bubble.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'; // Semi-transparent white
      bubble.style.borderRadius = '50%';
      bubble.style.bottom = `-${bubble.style.height}`; // Start below the screen
      bubble.style.left = `${Math.random() * 100}%`; // Random horizontal position
      bubbleContainer.appendChild(bubble);

      // Animate bubble
      gsap.to(bubble, {
        y: `-${window.innerHeight + parseFloat(bubble.style.height)}px`, // Move to the top of the screen
        opacity: 0, // Fade out
        duration: Math.random() * 10 + 5, // Random duration between 5 and 15 seconds
        ease: 'none',
        onComplete: () => {
          // Remove bubble from DOM after animation completes
          bubble.remove();
        }
      });

      // Spawn the next bubble after a random delay
      setTimeout(spawnBubble, Math.random() * 1000); // Random delay between 0 and 1 second
    };

    // Start spawning bubbles
    spawnBubble();
  };

  useEffect(() => {
    // GSAP animations for title and image
    gsap.fromTo(titleRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5 });
    gsap.fromTo(imageRef.current, { scale: 0 }, { scale: 1, duration: 0.5 });

    // Create bubbles on component mount
    createBubbles();

    // Cleanup bubbles on component unmount
    return () => {
      const bubbleContainer = document.querySelector('.bubble-container');
      if (bubbleContainer) bubbleContainer.remove();
    };
  }, [currentStep]);

  const goToNextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  const goToPrevStep = () => {
    setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
  };

  const goToStep = (index, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setCurrentStep(index);
  };

  // Hover effect for image
  const handleImageHover = (event) => {
    gsap.to(event.target, {
      scale: 1.1,
      rotate: 5,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleImageHoverOut = (event) => {
    gsap.to(event.target, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: steps[currentStep].bgColor, height: '100vh', position: 'relative', overflow: 'hidden' }}
    >
      <div className="seq-canvas" ref={canvasRef} style={{ height: '100%', width: '100%', position: 'relative' }}>
        <div
          className="step valign d-flex justify-content-center align-items-center"
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '80px', padding: '32px', boxSizing: 'border-box' }}
        >
          <div className="vcenter text-center">
            <img
              ref={imageRef}
              className="feature"
              src={steps[currentStep].image}
              alt={steps[currentStep].title}
              style={{ width: '70%', maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageHoverOut}
            />
            <h2 ref={titleRef} className="title" style={{ margin: '20px 0 10px', opacity: 0 }}>
              {steps[currentStep].headline}
            </h2>
            <p style={{ margin: '0 0 20px', opacity: 18, transition: 'opacity 0.5s' }} className="seq-in">
              {steps[currentStep].subheadline}
            </p>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                opacity: 12,
                transition: 'opacity 0.5s'
              }}
              className="seq-in"
            >
              {steps[currentStep].buttonText}
            </button>
          </div>
        </div>
      </div>

      <fieldset
        className="nav d-flex justify-content-center align-items-center"
        style={{
          position: 'absolute',
          zIndex: 100,
          left: 0,
          right: 0,
          bottom: '2.5em',
          maxWidth: '640px',
          width: '100%',
          margin: '0 auto',
          padding: 0,
          border: 'none',
          textAlign: 'center'
        }}
      >
        <button
          type="button"
          className="seq-prev"
          onClick={goToPrevStep}
          style={{
            padding: '0.75em',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            fontSize: '0.75em',
            textTransform: 'uppercase',
            opacity: 0.7
          }}
        >
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/154/prev.svg" alt="Previous" />
        </button>

        <ul
          className="seq-pagination d-flex justify-content-center align-items-center"
          style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 1em', padding: 0 }}
        >
          {steps.map((step, index) => (
            <li
              key={index}
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                width: '50px',
                height: '40px',
                margin: '0 0.25em',
                position: 'relative'
              }}
            >
              <a
                href={`#step${index + 1}`}
                onClick={(e) => goToStep(index, e)}
                style={{ display: 'block', border: 'none' }}
              >
                <img
                  src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/154/tn-${step.title.toLowerCase()}@2x.png`}
                  alt={step.title}
                  width="50"
                  height="40"
                />
              </a>
              {index === currentStep && (
                <div
                  style={{
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    width: '6px',
                    height: '6px',
                    marginLeft: '-3px',
                    marginTop: '0.5em',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    opacity: 0.7
                  }}
                ></div>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="seq-next"
          onClick={goToNextStep}
          style={{
            padding: '0.75em',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            fontSize: '0.75em',
            textTransform: 'uppercase',
            opacity: 0.7
          }}
        >
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/154/next.svg" alt="Next" />
        </button>
      </fieldset>
    </div>
  );
};

export default ImageSlider;