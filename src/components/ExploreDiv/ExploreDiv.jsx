import React from "react";

import ExploreBtn from "../ExploreBtn/ExploreBtn";

import "./styles.css";

const ExploreDiv = () => {
  return (
    <div className="explore-div">
      <div className="explore-div-1 flex-div">
        <div className="explore-div-1-1">
          <div className="des">
            <div className="title-1-1">Our Courses</div>
            <div className="msg-1-1">
              Your New
              <br />
              Journey Begins Here,
              <br />
              Today
            </div>
          </div>
          <img
            src="https://static.wixstatic.com/media/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.jpg/v1/fill/w_1167,h_472,al_c,q_85,usm_0.66_1.00_0.01/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.webp"
            alt="explore-here"
          />
        </div>
        <div className="explore-div-1-2">
          <div className="msg-1-2">
            Entrepreneurship
            <br />
            made fun
          </div>
          <ExploreBtn />
        </div>
      </div>
      <div className="explore-div-2 flex-div">
        <div className="explore-div-2-1">
          <img
            src="https://static.wixstatic.com/media/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.jpg/v1/fill/w_872,h_450,al_c,q_85,usm_0.66_1.00_0.01/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.webp"
            alt="explore-here"
          />
        </div>
        <div className="explore-div-2-2">
          <div className="msg-2-2">
            Digital
            <br />
            Marketing
          </div>
          <ExploreBtn />
        </div>
        <div className="explore-div-2-3">
          <img
            src="https://static.wixstatic.com/media/11062b_557462ab123440368447ab18a66043e5~mv2.jpg/v1/fill/w_436,h_450,al_c,q_80,usm_0.66_1.00_0.01/11062b_557462ab123440368447ab18a66043e5~mv2.webp"
            alt="explore-here"
          />
        </div>
      </div>
      <div className="explore-div-3 flex-div">
        <div className="explore-div-3-1">
          <div className="msg-3-2">
            Product Management
            <br />
            like a pro
          </div>
          <ExploreBtn />
        </div>
        <div className="explore-div-3-2">
          <img
            src="https://static.wixstatic.com/media/a3ac449c86364dd8999922949876d09e.jpg/v1/fill/w_872,h_444,al_c,q_85,usm_0.66_1.00_0.01/a3ac449c86364dd8999922949876d09e.webp"
            alt="explore-here"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreDiv;
