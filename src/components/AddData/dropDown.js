import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const categories = [
  { eventKey: "fruits", value: "Fruits" },
  { eventKey: "grain", value: "Grain" },
  { eventKey: "meat", value: "Meat" },
  { eventKey: "vegetables", value: "Vegetables" },
  { eventKey: "milk", value: "Milk" },
  { eventKey: "legumes/Beans", value: "Legumes/Beans" },
];

export default (props) => {
  return (
    <Dropdown onSelect={props.handleCategory} className='dropDown'>
      <Dropdown.Toggle id='dropdown-basic'>{props.category}</Dropdown.Toggle>
      <Dropdown.Menu>
        {categories.map((category) => (
          <Dropdown.Item key={category.eventKey} eventKey={category.eventKey}>
            {category.value}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
