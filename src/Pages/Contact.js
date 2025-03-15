import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../Components/Footer';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Header Image Animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Contact Form Animation
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <div>
      {/* Header Image */}
      <div className="py-3">
        <img 
          ref={imageRef} 
          className="img-fluid py-5 px-4" 
          src="/mainbg2.png" 
          alt="Header Background" 
          style={{ opacity: 0 }} 
        />
      </div>

      {/* Contact Form */}
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center ht" style={{ marginTop: '20px' }}>
        <div
          ref={formRef}
          className="col-12 col-md-8 col-lg-6 p-5 bg-white rounded-3 shadow"
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)', opacity: 0 }}
        >
          <h2 className="text-center py-3 text-primary">LEAVE US A MESSAGE</h2>
          <form>
            {/* Personal Information */}
            <div className="mb-4">
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

            {/* Message Information */}
            <div className="mb-4">
              <label htmlFor="additionalInfo" className="form-label fw-medium">Your Message</label>
              <textarea
                className="form-control border-0 border-bottom rounded-0"
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Enter your message here"
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
      <Footer />
    </div>
  );
}

export default Contact;
