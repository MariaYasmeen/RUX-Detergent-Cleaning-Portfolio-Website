import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Footer from '../Components/Footer';

function DNetwork() {
  const imageSources = [
    "https://i.pinimg.com/736x/75/74/3e/75743e0a3e54e1934864cb29e27b8cd3.jpg",
    "https://i.pinimg.com/736x/12/51/8e/12518e8510491973baf9c758b7d920c7.jpg",
    "https://i.pinimg.com/736x/ac/ff/ff/acffff17e6e6e0fdd56dd83ca8b6eb44.jpg",
    "https://i.pinimg.com/736x/21/02/4c/21024c2dfe13f7a057dd0539f4faded7.jpg"
  ];
  const formRef = useRef(null);

  // GSAP Animation on Mount
   
  return (
    <>
  <div
  className="px-4 my-5 text-center"
  style={{
    backgroundImage: "url('/bgimg.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat", 
    display: "flex", 
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <div className="container ">
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

<div className="px-5 py-4" id="custom-cards">
  <h2 className="pb-2">Why Join Us?</h2>

  <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 py-3">
    {[1, 2, 3, 4].map((num, index) => (
      <div className="col" key={index}>
        <div
          className="card card-cover h-100 overflow-hidden text-bg-dark rounded-3 shadow-sm"
          style={{ backgroundImage: `url('${imageSources[index]}')`, minHeight: "250px" }}
        >
          <div className="d-flex flex-column h-100 p-4 text-shadow-1">
            
            {/* SVG Icons for Each Card */}
            {num === 1 && (
              <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="12" r="12" fill="black" />
                <path fill="white" d="M17 11H7C6.45 11 6 11.45 6 12V18C6 18.55 6.45 19 7 19H17C17.55 19 18 18.55 18 18V12C18 11.45 17.55 11 17 11ZM12 16C11.45 16 11 15.55 11 15C11 14.45 11.45 14 12 14C12.55 14 13 14.45 13 15C13 15.55 12.55 16 12 16ZM15 11V8C15 6.34 13.66 5 12 5C10.34 5 9 6.34 9 8V11H7V8C7 5.24 9.24 3 12 3C14.76 3 17 5.24 17 8V11H15Z" />
              </svg>
            )}
            {num === 2 && (
              <svg  width="60" height="60" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="black"/>
              <path fill="white" d="M15 7V6H9V7L7 9V11H17V9L15 7ZM12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13ZM12 19C9.79 19 8 17.21 8 15C8 12.79 9.79 11 12 11C14.21 11 16 12.79 16 15C16 17.21 14.21 19 12 19Z"/>
            </svg>
            
            )}
            {num === 3 && (
            <svg width="60" height="60" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="black"/>
            <path fill="white" d="M19 5H14L7 9H5C4.45 9 4 9.45 4 10V14C4 14.55 4.45 15 5 15H7L14 19H19C19.55 19 20 18.55 20 18V6C20 5.45 19.55 5 19 5ZM12 14H10V10H12V14ZM16 14H14V10H16V14Z"/>
          </svg>
           )}
            {num === 4 && (
           <svg  width="60" height="60"  viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
           <circle cx="12" cy="12" r="12" fill="black"/>
           <path fill="white" d="M17 3H7V5H17V3ZM19 5H5C4.45 5 4 5.45 4 6V11C4 13.21 5.79 15 8 15H9V17H8V19H16V17H15V15H16C18.21 15 20 13.21 20 11V6C20 5.45 19.55 5 19 5ZM6 11V7H8V13C6.9 13 6 12.1 6 11ZM18 11C18 12.1 17.1 13 16 13V7H18V11Z"/>
         </svg>
          )}

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

<div className="container-fluid vh-100 d-flex justify-content-center align-items-center ht" style={{marginTop: '200px'}}>
      <div
        ref={formRef}
        className="col-12 col-md-8 col-lg-6 p-5 bg-white rounded-3 shadow"
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
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
    <div style={{marginTop:"230px"}}>
<Footer />
</div>
    </>
  );
}

export default DNetwork;
