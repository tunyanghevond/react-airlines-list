import React from "react";
import "./navbar.css";
import logo from "../../assets/Logo.svg";
const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
    </nav>
  );
};

export default NavBar;
