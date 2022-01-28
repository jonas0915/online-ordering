import React from "react";
import Restaurant from "../photo/Restaurant.png";

function Menu() {
  return (
    <>
      <div className="container">
        <div id="order">
          <div className="restaurant">
            <img src={Restaurant} alt="restaurant" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
