import React from "react";

import "./styles.css";

const AboutUs = () => {
  return (
    <div className="about-us-div">
      <span className="about-us-title">About Us</span>
      <br />
      <div className="about-us-content">
        <div className="about-us-des">
          <p>Learning Together From the Comfort of Your Home</p>
          <button className="about-us-learn-btn">Learn More</button>
        </div>
        <div className="about-us-img">
          <img
            src="https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_441,h_296,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp"
            alt="about-us"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
