import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap } from 'gsap';

const ImageSlider = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      image: "./slide5.png",
      title: "Toilet and Bathroom Cleaners",
      headline: "Toilet and Bathroom Cleaners.",
      subheadline: "Specifically formulated for cleaning and disinfecting toilet bowls.",
      buttonText: "Explore Cleaners",
      bgColor: "#70e000"
    },
    {
      image: "./slide1.png",
      title: "Dishwashing Detergents",
      headline: "Dishwashing Detergents",
      subheadline: "Used for cleaning dishes, cutlery, and kitchen utensils.",
      buttonText: "View Detergents",
      bgColor: "#99582a"
    },
    {
      image: "slide2.png",
      title: "Bleach and Stain Removers",
      headline: "Bleach and Stain Removers",
      subheadline: "Used for whitening clothes, disinfecting surfaces, and removing tough stains.",
      buttonText: "Explore Detergents",
      bgColor: "#6f1d1b"
    },
    {
      image: "./slide3.png",
      title: "Multi-Surface Cleaners",
      headline: "Multi-Surface Cleaners",
      subheadline: "A versatile cleaner suitable for various surfaces.",
      buttonText: "Discover Cleaners",
      bgColor: "#373d20"
    },
    
    {
      image: "./slide4.png",
      title: "Laundry Detergents",
      headline: "Laundry Detergents",
      subheadline: "Designed for washing clothes",
      buttonText: "Explore Detergents",
      bgColor: "#9d4edd"
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

  const bubbleContainerRef = useRef(null);

useEffect(() => {
  if (!bubbleContainerRef.current) {
    // Create bubbles only once
    const bubbleContainer = document.createElement('div');
    bubbleContainer.className = 'bubble-container';
    bubbleContainer.style.position = 'absolute';
    bubbleContainer.style.top = '0';
    bubbleContainer.style.left = '0';
    bubbleContainer.style.width = '100%';
    bubbleContainer.style.height = '100%';
    bubbleContainer.style.overflow = 'hidden';
    canvasRef.current.appendChild(bubbleContainer);
    bubbleContainerRef.current = bubbleContainer; // Store reference to avoid duplication

    const spawnBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.position = 'absolute';
      bubble.style.width = `${Math.random() * 40 + 10}px`; // Random size
      bubble.style.height = bubble.style.width;
      bubble.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
      bubble.style.borderRadius = '50%';
      bubble.style.bottom = `-${bubble.style.height}`; // Start below screen
      bubble.style.left = `${Math.random() * 100}%`;

      bubbleContainer.appendChild(bubble);

      gsap.to(bubble, {
        y: `-${window.innerHeight + parseFloat(bubble.style.height)}px`,
        opacity: 0,
        duration: Math.random() * 10 + 5,
        ease: 'none',
        onComplete: () => {
          bubble.remove();
        }
      });

      setTimeout(spawnBubble, Math.random() * 1000);
    };

    spawnBubble();
  }
}, []); // Empty dependency array ensures it runs only once


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
            <p style={{ margin: '0 0 20px', opacity: 18, transition: 'opacity 0.5s' }} className="text-white seq-in">
              {steps[currentStep].subheadline}
            </p>
            <button
              style={{
                padding: '6px 20px',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '19px',
                cursor: 'pointer',
                opacity: 12,
                transition: 'opacity 0.9s'
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
  {Array.isArray(steps) && steps.length > 0 ? (
    steps.map((step, index) => (
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
            src={step.image} // Now correctly using the main image
            alt={step.title}
            width="50"
            height="40"
            style={{ objectFit: 'cover', borderRadius: '5px' }}
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
    ))
  ) : (
    <p>No steps available</p>
  )}
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