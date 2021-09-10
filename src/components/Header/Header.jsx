import React from "react";

import Title from "../Title/Title";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/Navbar";
import Cart from "../Cart/Cart";
import LoginBtn from "../LoginBtn/LoginBtn";
import SearchBar from "../SearchBar/SearchBar";

import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <Title />
      <Logo />
      <NavBar />
      <div className="right-items">
        <Cart />
        <LoginBtn />
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
