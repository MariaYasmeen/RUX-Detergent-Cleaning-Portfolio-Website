import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";  
import Footer from "../Components/Footer"; 

function About() {
    const imageSources = [
      "https://i.pinimg.com/736x/75/74/3e/75743e0a3e54e1934864cb29e27b8cd3.jpg",
      "https://i.pinimg.com/736x/12/51/8e/12518e8510491973baf9c758b7d920c7.jpg",
      "https://i.pinimg.com/736x/ac/ff/ff/acffff17e6e6e0fdd56dd83ca8b6eb44.jpg",
      "https://i.pinimg.com/736x/21/02/4c/21024c2dfe13f7a057dd0539f4faded7.jpg"
    ];
     
    const cardRefs = useRef([]);
   
    useEffect(() => {
 
      // Animating Cards
      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
      
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power2.out" }
    );
  }, []);

  const services = [
    { title: "Product Distribution", description: "We provide a wide range of premium [products] tailored to meet the needs of our clients.", imgSrc: "/about1.png" },
    { title: "Consulting Services", description: "We offer expert consulting to help businesses optimize their operations and maximize efficiency.", imgSrc: "/about2.png" },
    { title: "Sustainability Initiatives", description: "We are dedicated to eco-friendly practices, ensuring our products and processes are environmentally responsible.", imgSrc: "/about3.png" },
    { title: "Eco-Conscious Formulas", description: "Biodegradable, concentrated products designed to reduce waste and environmental impact.", imgSrc: "/about4.png" }
  ];

  return (
    <>
       
      {/* Banner Image */}
      <div className="py-3 fade-in">
        <img className="img-fluid py-5 px-4" src="/mainbg.png" alt="Main Banner" />
      </div>

      {/* About Section */}
      <div className="container my-5 w-100 fade-in p-3">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start text-center p-3">
            <h2 className="fw-bold">About RUX</h2>
            <p>RUX is a wholesale company that believes in quality and quantity at an affordable price.</p>
            <p>From kitchens to bathrooms, homes to businesses, RUX detergents are engineered for one purpose: effortless results. Our pH-balanced formulas protect surfaces while annihilating grime, and our eco-friendly ingredients ensure safety for families and the planet. No harsh chemicals, no empty claims—just clean that speaks for itself.</p>
            <button className="btn btn-sm btn-outline-secondary btn-css rounded-pill mx-1">Learn More</button>
          </div>
          <div className="col-md-6">
            <img src="https://i.pinimg.com/736x/b0/14/f5/b014f535f40d32ab4c5477d20dfdfced.jpg" className="img-fluid rounded shadow" alt="Illustration" />
          </div>
        </div>
      </div>

      {/* Core Services Section */}
      <div className="container px-4 py-5 fade-in">
        <h2 className="pb-2 border-bottom">OUR CORE SERVICES INCLUDE</h2>
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div className="col">
            <h2>Our Core Services Include</h2>
            <p className="text-body-secondary">From Strategic Consulting to Sustainable Product Distribution...</p>
          </div>
          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              {services.map((service, index) => (
                <div key={index} className="col d-flex flex-column gap-2 fade-in">
                  <div className="feature-icon d-flex align-items-center justify-content-center rounded-circle border border-dark" style={{ width: "100px", height: "100px" }}>
                    <img src={service.imgSrc} alt={service.title} className="img-fluid" style={{ maxWidth: "80%", maxHeight: "80%" }} />
                  </div>
                  <h4 className="fw-semibold mb-0 text-body-emphasis">{service.title}</h4>
                  <p className="text-body-secondary">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

  {/* Cards Section */}
  <div className="px-5 py-4" id="custom-cards"> 
        <h2 className="pb-2 border-bottom ">WHY JOIN US ?</h2>

        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 py-3">
          {[1, 2, 3, 4].map((num, index) => (
            <div className="col" key={index}>
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-3 shadow-sm"
                style={{ backgroundImage: `url('${imageSources[index]}')`, minHeight: "250px", opacity: 0 }}
              >
                <div className="d-flex flex-column h-100 p-4 text-shadow-1">
                  <h5 className="mt-auto fw-bold">
                    {num === 1 && "Exclusive Access to Premium Products"}
                    {num === 2 && "Competitive Pricing and Margins"}
                    {num === 3 && "Marketing and Sales Support"}
                    {num === 4 && "Strong Brand Reputation"}
                  </h5>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="d-flex align-items-center me-2">
                      <small>
                        {num === 1
                          ? "Gain access to our wide range of high-quality, innovative products that are in demand across various industries."
                          : num === 2
                          ? "Enjoy competitive pricing structures and attractive profit margins designed to help your business thrive."
                          : num === 3
                          ? "Benefit from our comprehensive marketing materials, training programs, and sales tools to help you succeed."
                          : "Partner with a brand known for its reliability, quality, and commitment to excellence."}
                      </small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
