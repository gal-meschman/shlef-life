import React from "react";
import logo from "./happyFoodLogo.png";
import "./title.css";

export default () => {
  return (
    <div className='title'>
      <h1 id='title-start'>Shelf</h1>
      <img id = "happyFoodLogo" src={logo} alt='logo' />
      <h1 id='title-end'>Life</h1>
    </div>
  );
};
