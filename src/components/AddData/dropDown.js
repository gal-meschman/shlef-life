import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const categories = [
  "Fruits",
  "Grain",
  "Meat",
  "Veggies ",
  "Milk",
  "Legumes",
];

export default (props) => {
  return (
    <Dropdown onSelect={props.handleCategory} className='dropDown'>
      <Dropdown.Toggle size='lg' id='dropdown-basic'>
        {props.category}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {categories.map((category, index) => (
          <Dropdown.Item key={index} eventKey={category}>
            {category}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
