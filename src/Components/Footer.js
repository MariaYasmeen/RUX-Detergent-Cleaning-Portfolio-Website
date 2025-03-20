import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white pt-5 pb-4"
      style={{
        backgroundColor: "rgb(67, 164, 255)",
        borderRadius: "60px 60px 0px 0px",
        marginTop: "100px",
      }}
    >
      <div className="container">
        {/* Top Row - Three Sections */}
        <div className="row text-center text-md-start">
          {/* Left Section - Contact Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <img src="/logo.png" alt="Mellow Logo" className="mb-3" width="120" />
            <p className="fw-bold fs-5">
              Loved by Homes, Trusted by Partners – Eco-Friendly Power Meets Smart Business.
            </p>
            <p className="fs-6">
              <i className="fas fa-envelope me-2"></i> info@rux.pk
            </p>
            <p className="fs-6">
              <i className="fas fa-map-marker-alt me-2"></i> Royal Annexe, Road # 10, Ameer Sector Lahore, Punjab, Pakistan.
            </p>
            <p className="fs-6">
              <i className="fas fa-phone me-2"></i> +92 338 4568800
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold fs-4 mb-3">Quick Links</h5>
            <ul className="list-unstyled fs-6">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">What we do</a></li>
              <li><a href="/dealer-network" className="text-white text-decoration-none">Join our dealers network</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Right Section - Social Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold fs-4 mb-3">Follow Us</h5>
            <ul className="list-unstyled d-none d-md-block fs-6">
              <li><i className="fab fa-instagram me-2"></i> <a href="/" className="text-white text-decoration-none">Instagram</a></li>
              <li><i className="fab fa-linkedin me-2"></i> <a href="/" className="text-white text-decoration-none">LinkedIn</a></li>
              <li><i className="fab fa-youtube me-2"></i> <a href="/" className="text-white text-decoration-none">YouTube</a></li>
              <li><i className="fab fa-facebook me-2"></i> <a href="/" className="text-white text-decoration-none">Facebook</a></li>
              <li><i className="fab fa-twitter me-2"></i> <a href="/" className="text-white text-decoration-none">Twitter</a></li>
            </ul>

            {/* Social Icons Row for Mobile */}
            <div className="d-flex justify-content-center gap-3 d-md-none mt-3">
              <a href="/" className="text-white"><i className="fab fa-instagram fs-4"></i></a>
              <a href="/" className="text-white"><i className="fab fa-linkedin fs-4"></i></a>
              <a href="/" className="text-white"><i className="fab fa-youtube fs-4"></i></a>
              <a href="/" className="text-white"><i className="fab fa-facebook fs-4"></i></a>
              <a href="/" className="text-white"><i className="fab fa-twitter fs-4"></i></a>
            </div>

            {/* Newsletter Section */}
            <div className="mt-4">
              <h5 className="fs-5 mb-3">Subscribe to Our Newsletter</h5>
              <form className="d-flex">
                <input
                  type="email"
                  className="form-control me-2 shadow-sm rounded-pill border-0"
                  placeholder="Your email"
                  required
                />
                <button className="btn btn-warning shadow-sm rounded-pill fw-bold px-3">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="text-white" />
        <div className="text-center fs-6">
          <p className="mb-0">Copyright © 2025. All rights reserved.</p>
          <p className="mb-0">
            Designed & Developed by <a href="https://mariayaasmeen.web.app/" className="text-warning text-decoration-none">Maria Yasmeen</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
