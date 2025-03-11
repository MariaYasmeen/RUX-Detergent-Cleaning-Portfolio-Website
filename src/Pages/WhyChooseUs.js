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

  // Card Data Array
  const cardData = [
    {
      image: "./icon1.png", // Replace with actual image URL
      headline: "Cost Efficiency",
      subheadline: "One of the most compelling reasons to use wholesale laundry detergent is the significant cost savings it offers.  ",
    },
    {
      image: "./icon2.png", // Replace with actual image URL
      headline: "Bulk Supply",
      subheadline: "Wholesale laundry detergent suppliers often provide distributors with access to a consistent and ample supply of products.",
    },
    {
      image: "./icon3.png", // Replace with actual image URL
      headline: "Variety and Selection",
      subheadline: "Wholesale suppliers typically offer a broader range of laundry detergent products, including different brands, formulations, and packaging sizes.",
    },
    {
      image: "./icon4.png" , // Replace with actual image URL
      headline: "Competitive Prices",
      subheadline: "By purchasing laundry detergent wholesale, distributors can offer competitive pricing to their customers. ",
    },
  ];

  return (
    <div className="why-choose-us-container d-flex flex-column justify-content-center min-vh-100">
      {/* Heading and Subheading */}
      <div className="text-center ">
        <h3 ref={headingRef} className="display-4 py-4 text-white fw-bold">
          Why Choose Us?
        </h3>
        <p ref={subheadingRef} className="lead text-white">
          We provide the best services to meet your needs.
        </p>
      </div>

      {/* Boxes Section */}
      <div className="container ">
        <div className="row g-4">
          {/* Left Part: 4 Unique Cards */}
          <div className="col-md-8">
            <div className="row g-3 cards-css">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="col-md-6"
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
          <div className="col-md-4" ref={(el) => (boxRefs.current[4] = el)}>
            <div className="card  card-width shadow-sm text-center">
              <img
                src="./icon5.png" // Replace with actual image
                alt="Big Icon"
                className="mx-auto mb-3"
                style={{ width: "100px", height: "100px" }}
              />
              <h3 className="card-title">Trusted Distributor Community</h3>
              <p className="card-text">
              At Clean Bubbles we can give you the chance of becoming a distributor for our products. we can provide you the products in wholesale price, to give you the chance to sell it and earn a lot of money .
              </p>
              <button className="cta-btn ">Join Our Distributor Network</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
