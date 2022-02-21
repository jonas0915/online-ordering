import React from "react";
import MyLogo from "../photo/Logo.png";

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector(".navbar").style.opacity = 0.9;
  } else {
    document.querySelector(".navbar").style.opacity = 1;
  }
});

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
              <a href="nav">About</a>
            </li>
            <li className="navList">
              <a href="#preview">Review</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
