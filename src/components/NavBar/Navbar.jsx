import React, { useState } from "react";

import "./styles.css";

const NavBar = () => {
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const handleClick = () => {
    setDropDownVisible(!dropDownVisible);
  };
  return (
    <div className="navbar">
      <div className="tab tab1">Home</div>
      <div className="tab tab2">Online Courses</div>
      <div className="tab tab3">We're Hiring</div>
      <div className="tab tab4">
        <div className="more-tab" onClick={handleClick}>
          More
        </div>
        <br />
        {dropDownVisible ? (
          <div className="tab4-dropdown">
            <div className="dropdown-items">Blog</div>
            <div className="dropdown-items">Certificaiton</div>
            <div className="dropdown-items">Alumni Team</div>
            <div className="dropdown-items">Forum</div>
            <div className="dropdown-items">Hackathon</div>
            <div className="dropdown-items">Membership Registration</div>
            <div className="dropdown-items">Campus Ambassador Program</div>
            <div className="dropdown-items">Mentorship</div>
            <div className="dropdown-items">Social Media</div>
            <div className="dropdown-items">Testimonials</div>
            <div className="dropdown-items">Contact Us</div>
            <div className="dropdown-items">Complaints</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
