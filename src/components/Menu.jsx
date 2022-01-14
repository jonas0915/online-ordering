import React from "react";
import Restaurant from "../photo/Restaurant.png";

function Menu() {
  return (
    <>
      <div id="order">
        <div className="container">
          <div className="restaurant">
            <img src={Restaurant} alt="restaurant" />
          </div>
          <form>
            <input></input>
          </form>
        </div>
      </div>
    </>
  );
}
export default Menu;
