import React from "react";

import "./styles.css";

const WelcomeDiv = () => {
  return (
    <div className="welcome-div">
      <div className="welcome-des">
        <div className="welcome-title">Welcome to</div>
        <div className="welcome-msg">THE NEXT BIG THING</div>
        <hr />
        <button className="welcome-btn">Join TEN Virtual Campus</button>
      </div>
      <img
        className="welcome-img"
        src="https://static.wixstatic.com/media/dcca985fe5e148b1aea6744afd6af686.jpg/v1/fill/w_1747,h_665,al_c,q_85,usm_0.66_1.00_0.01/dcca985fe5e148b1aea6744afd6af686.webp"
        alt="welcome"
      />
    </div>
  );
};

export default WelcomeDiv;
