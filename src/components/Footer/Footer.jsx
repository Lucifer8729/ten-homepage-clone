import React from "react";

import FooterIcons from "../FooterIcons/FooterIcons";
import FooterForm from "../FooterForm/FooterForm";
import FooterLinks from "../FooterLinks/FooterLinks";

import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <div className="footer-item icons">
          <FooterIcons />
        </div>
        <div className="footer-item form">
          <FooterForm />
        </div>
        <div className="footer-item links">
          <FooterLinks />
        </div>
      </div>
      <div className="footer-text">
        © 2020 Limitless Technologies - The Entrepreneurship Network
      </div>
    </div>
  );
};

export default Footer;
