import React from "react";
  
const VideoSection = () => {
  return (
    <div className="container-fluid videosec-ctr video-container">
      <div className="row align-items-center ">
        {/* Left Portion - Text Content */}
        <div className="col-md-4 text-section">
          <h2 className="title">Explore the Future</h2>
          <p className="subtitle">
            Discover the latest innovations and trends in technology.
          </p>
          <button className="btn btn-primary explore-btn">Learn More</button>
        </div>

        {/* Right Portion - Embedded YouTube Video */}
        <div className="col-md-8 video-section">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
