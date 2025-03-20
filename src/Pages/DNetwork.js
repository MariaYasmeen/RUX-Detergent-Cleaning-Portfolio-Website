import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../Components/Footer';

gsap.registerPlugin(ScrollTrigger);

function DNetwork() {
   const sectionRef = useRef(null);
   const formContainerRef = useRef(null);

  useEffect(() => {
    // Fade-in Animation for Section Header
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: sectionRef.current }
    );

    
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
        <div className="container p-4 my-2">
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
