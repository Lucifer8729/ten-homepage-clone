import React from "react";

import "./styles.css";

const FooterForm = () => {
  return (
    <div className="footer-form">
      <p className="form-title">Subscribe to our newsletter</p>
      <form className="footer-form">
        <input
          type="text"
          className="form-element-input fullname"
          placeholder="Full Name"
        />
        <input
          type="text"
          className="form-element-input collegename"
          placeholder="College Name"
        />
        <br />
        <input
          type="text"
          className="form-element-input mobnumber"
          placeholder="Mobile No."
        />
        <input
          type="text"
          className="form-element-input email"
          placeholder="Email"
        />
        <br />
        <input type="checkbox" className="form-element checkbox" />
        <p className="checkbox-label">Join TEN's Discord Community</p>
        <br />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default FooterForm;
