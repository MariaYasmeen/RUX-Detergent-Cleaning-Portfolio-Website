import React from "react";

const VideoSection = () => {
  return (
    <div className="container-fluid videosec-ctr video-container">
      <div className="row align-items-center">
        {/* Left Portion - Text Content */}
        <div className="col-md-4 text-section text-center text-md-start">
          <h2 className="title">Explore the Future</h2>
          <p className=" abtdesc">
          At RUX, we don’t just clean surfaces—we transform spaces. Born from a mission to make powerful cleaning accessible, our seven specialized detergents tackle everything from stubborn kitchen grease to sun-stained laundry. 
          </p>
          <p className=" abtdesc">Backed by science and crafted for sustainability, every bottle is a promise: your trust is our formula.</p>
          <button className="btn btn-primary explore-btn">Learn More</button>
        </div>

        {/* Right Portion - Embedded YouTube Video */}
        <div className="col-md-8 video-section position-relative">
          <div className="video-wrapper position-relative w-100" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="position-absolute top-0 start-0 w-100 h-100"
              src="https://www.youtube.com/embed/f0nxKTqXe_s?autoplay=1&loop=1&playlist=f0nxKTqXe_s&controls=0&mute=1&modestbranding=1&showinfo=0&rel=0"
              title="YouTube Video"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
