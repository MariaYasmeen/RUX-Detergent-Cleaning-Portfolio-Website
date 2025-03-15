import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../Components/Footer';

gsap.registerPlugin(ScrollTrigger);

function DNetwork() {
  const imageSources = [
    "https://i.pinimg.com/736x/75/74/3e/75743e0a3e54e1934864cb29e27b8cd3.jpg",
    "https://i.pinimg.com/736x/12/51/8e/12518e8510491973baf9c758b7d920c7.jpg",
    "https://i.pinimg.com/736x/ac/ff/ff/acffff17e6e6e0fdd56dd83ca8b6eb44.jpg",
    "https://i.pinimg.com/736x/21/02/4c/21024c2dfe13f7a057dd0539f4faded7.jpg"
  ];
   
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const formContainerRef = useRef(null);

  useEffect(() => {
    // Fade-in Animation for Section Header
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: sectionRef.current }
    );

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

    // Animating Form
    gsap.fromTo(
      formContainerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formContainerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <>
      {/* Header Section */}
      <div
        className="px-4 my-5 text-center"
        ref={sectionRef}
        style={{
          backgroundImage: "url('/bgimg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat", 
          display: "flex", 
          alignItems: "center",
          justifyContent: "center",
          opacity: 0, // Initially hidden
        }}
      >
        <div className="container">
          <h1 className="display-6 fw-bold">Join Our Dealers Network</h1>
          <div className="col-lg-9 mx-auto">
            <p className="lead mb-1">
              Are you passionate about delivering high-quality products to your
              customers? Do you want to be part of a trusted network that values
              excellence, innovation, and customer satisfaction? Join our Dealers
              Network today and become a key player in bringing premium products to
              markets worldwide!
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-5 py-4" id="custom-cards">
        <h2 className="pb-2">Why Join Us?</h2>

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

      {/* Registration Form */}
      <div
        className="container-fluid vh-100 d-flex justify-content-center align-items-center"
        style={{ marginTop: '200px' }}
      >
        <div
          ref={formContainerRef}
          className="col-12 col-md-8 col-lg-6 p-5 bg-white rounded-3 shadow"
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)', opacity: 0 }}
        >
          <h2 className="text-center py-3 text-primary">Distributor Registration Form</h2>
          <form>
          {/* Personal Information */}
          <div className="mb-4 ">
            <label htmlFor="fullName" className="form-label fw-medium">Full Name</label>
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              style={{ boxShadow: 'none' }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label fw-medium">Email Address</label>
            <input
              type="email"
              className="form-control border-0 border-bottom rounded-0"
              id="email"
              name="email"
              placeholder="Enter your email"
              style={{ boxShadow: 'none' }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="form-label fw-medium">Phone Number</label>
            <input
              type="tel"
              className="form-control border-0 border-bottom rounded-0"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              style={{ boxShadow: 'none' }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="BusinessName" className="form-label fw-medium">Business Name</label>
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0"
              id="fullName"
              name="fullName"
              placeholder="Enter your Business name"
              style={{ boxShadow: 'none' }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="form-label fw-medium">Location</label>
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0"
              id="fullName"
              name="fullName"
              placeholder="Enter your location"
              style={{ boxShadow: 'none' }}
            />
          </div>


          {/* Years of Experience */}
          <div className="mb-4">
            <label htmlFor="yearsOfExperience" className="form-label fw-medium">Years of Experience in Distribution</label>
            <input
              type="number"
              className="form-control border-0 border-bottom rounded-0"
              id="yearsOfExperience"
              name="yearsOfExperience"
              placeholder="Enter years of experience"
              style={{ boxShadow: 'none' }}
            />
          </div>

          {/* Additional Information */}
          <div className="mb-4">
            <label htmlFor="additionalInfo" className="form-label fw-medium">Additional Information</label>
            <textarea
              className="form-control border-0 border-bottom rounded-0"
              id="additionalInfo"
              name="additionalInfo"
              placeholder="Any additional comments or information"
              rows="4"
              style={{ boxShadow: 'none' }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 rounded-3 fw-bold mt-3"
          >
            Submit
          </button>
        </form>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "230px" }}>
        <Footer />
      </div>
    </>
  );
}

export default DNetwork;
