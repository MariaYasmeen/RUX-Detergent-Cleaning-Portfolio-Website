import { useEffect } from "react";
import gsap from "gsap"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";  
import Footer from "../Components/Footer"; 

function About() {
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
      <div className="container my-5 w-100 fade-in">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start text-center">
            <h2 className="fw-bold">About RUX</h2>
            <p>RUX is a wholesale company that believes in quality and quantity at an affordable price...</p>
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
 s

      <Footer />
    </>
  );
}

export default About;
