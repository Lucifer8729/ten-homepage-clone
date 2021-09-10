import React from "react";

import "./styles.css";

const SearchBar = () => {
  return (
    <>
      <div className="search-bar">
        <input type="text" class="search-input" placeholder="Search here..." />
      </div>
      <i className="fas fa-search"></i>
    </>
  );
};

export default SearchBar;
