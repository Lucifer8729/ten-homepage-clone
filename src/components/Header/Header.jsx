import React from "react";

import Title from "../Title/Title";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/Navbar";
import Cart from "../Cart/Cart";

import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <Title />
      <Logo />
      <NavBar />
      <Cart />
    </div>
  );
};

export default Header;
