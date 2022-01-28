import React from "react";
import MyLogo from "../photo/Logo.png";

function Navigation() {
  return (
    <>
      <div>
        <nav className="navbar">
          <a href="nav">
            <img src={MyLogo} alt="logo" className="myLogo" />
          </a>
          <ul>
            <li className="navList">
              <a href="#moto">About</a>
            </li>
            <li className="navList">
              <a href="#order">Order</a>
            </li>
            <li className="navList">Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
