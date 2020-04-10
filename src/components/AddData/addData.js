import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./addData.css";

const categories = [
  { eventKey: "fruits", value: "Fruits" },
  { eventKey: "grain", value: "Grain" },
  { eventKey: "meat", value: "Meat" },
  { eventKey: "vegetables", value: "Vegetables" },
  { eventKey: "milk", value: "Milk" },
  { eventKey: "lB", value: "Legumes/Beans" },
];

export default () => {
  return (
    <div className='addData'>
      <input type='text'></input>
      <Dropdown onSelect={(e) => console.log(e)} className='dropdown'>
        <Dropdown.Toggle id='dropdown-basic'>Categories</Dropdown.Toggle>
        <Dropdown.Menu>
          {categories.map((categorie) => (
            <Dropdown.Item
              key={categorie.eventKey}
              eventKey={categorie.eventKey}
            >
              {categorie.value}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <button>Add</button>
    </div>
  );
};
