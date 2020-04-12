import React from "react";
import TextBox from "./textBox";
import DropDown from "./dropDown";
import Button from "./button";
import "./addData.css";

export default () => (
  <div className='addData'>
    <TextBox />
    <DropDown />
    <Button />
  </div>
);
