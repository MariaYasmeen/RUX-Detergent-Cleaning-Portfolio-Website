import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Pages.css"; // Import custom CSS

const WhyChooseUs = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const boxRefs = useRef([]);

  // GSAP animations for heading and subheading
  useEffect(() => {
    gsap.from(headingRef.current, {
      y: -50,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(subheadingRef.current, {
      y: -50,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });
  }, []);

  // GSAP animations for boxes
  useEffect(() => {
    boxRefs.current.forEach((box, index) => {
      gsap.from(box, {
        y: 50,
        duration: 1,
        delay: index * 0.3,
        ease: "power2.out",
      });
    });
  }, []);

  const cardData = [
    { image: "./icon1.png", headline: "Cost Efficiency", subheadline: "Save significantly by purchasing in bulk." },
    { image: "./icon2.png", headline: "Bulk Supply", subheadline: "Get a consistent and ample supply of products." },
    { image: "./icon3.png", headline: "Variety and Selection", subheadline: "Choose from a wide range of products and brands." },
    { image: "./icon4.png", headline: "Competitive Prices", subheadline: "Offer competitive pricing to your customers." },
  ];

 return (
    <div className="why-choose-us-container d-flex flex-column justify-content-center  ">
      {/* Heading and Subheading */}
      <div className="d-flex flex-column justify-content-center align-items-center  text-center " style={{marginTop:"20px"}}>
  <h3 ref={headingRef} className="display-6 text-white fw-bold">
    Why Choose RUX Detergent Products?
  </h3>
  <p ref={subheadingRef} className="lead text-white px-4">
    Our products not only pack the necessary punch needed to cut through tough stains and grease, but our 5-gallon concentrated formula will keep you cleaning longer and spending less.
  </p>
</div>

 
         {/* Boxes Section */}
      <div className="container " style={{marginBottom:"40px"}}>
        <div className="row g-4">
          {/* Left Part: 4 Unique Cards */}
          <div className="col-md-8">
            <div className="row g-3">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6"
                  ref={(el) => (boxRefs.current[index] = el)}
                >
                  <div className="card h-100 p-4 shadow-sm text-center">
                    <img
                      src={card.image}
                      alt={`Icon ${index + 1}`}
                      className="mx-auto mb-3"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <h5 className="card-title">{card.headline}</h5>
                    <p className="card-text">{card.subheadline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Part: Bigger Box */}
          <div
            className="col-md-4 d-flex "
            ref={(el) => (boxRefs.current[4] = el)}
          >
            <div className="card h-100 w-100 shadow-sm text-center d-flex flex-column justify-content-center align-items-center p-4">
              <img
                src="./icon5.png"
                alt="Big Icon"
                className="mx-auto mb-3"
                style={{ width: "100px", height: "100px" }}
              />
              <h3 className="card-title">Trusted Distributor Community</h3>
              <p className="card-text">
                Become a distributor for our products and earn with wholesale
                pricing.
              </p>
              <p>We sell our products all over the USA. Contact us for wholesale pricing or if you are interested in becoming an independent distributor.</p>
              <button className="cta-btn mt-auto">Join Our Network</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;