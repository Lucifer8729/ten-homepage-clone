import React from "react";

import Intro from "../Intro/Intro";
import AboutUs from "../AboutUs/AboutUs";
import WelcomeDiv from "../WelcomeDiv/WelcomeDiv";
import ExploreDiv from "../ExploreDiv/ExploreDiv";

import "./styles.css";

const Body = () => {
  return (
    <div className="body">
      <Intro />
      <AboutUs />
      <WelcomeDiv />
      <ExploreDiv />
    </div>
  );
};

export default Body;
