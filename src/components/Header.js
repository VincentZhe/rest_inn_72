import React, { useState } from "react";

import { ReactComponent as Logo } from "../assets/image/brand.svg";

import { FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <Link to="/">
            <Logo className="navbar-logo" />
          </Link>
        </div>
        <div className="navbar-center">
          <div className="navbar-search">
            <input
              className="navbar-search-input"
              type="search"
              placeholder="Search your favourite type"
            />
            <FaSearch className="search-icons" />
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-right-menuItem">
            <Link to="/propertylisting">Vacation Property</Link>
          </div>
          <div
            className="navbar-right-menuItem"
            onClick={(e) => setIsActive(!isActive)}
          >
            User
          </div>
          {isActive && (
            <div className="navbar-dropdown-content">
              <Link className="navbar-dropdown-item-signup" to="/signup">
                Sign Up
              </Link>
              <Link className="navbar-dropdown-item-login" to="/login">
                Log In
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
