import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector, useDispatch} from "react-redux";
import { addData } from "../../redux/actions";

const categories = [
  { eventKey: "fruits", value: "Fruits" },
  { eventKey: "grain", value: "Grain" },
  { eventKey: "meat", value: "Meat" },
  { eventKey: "vegetables", value: "Vegetables" },
  { eventKey: "milk", value: "Milk" },
  { eventKey: "legumes/Beans", value: "Legumes/Beans" },
];

export default () => {
  const product = useSelector(state => state.product)
  const dispatch = useDispatch();
  const handlecategoryName = (categoryName) =>
  dispatch(addData({
    category: categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    }));
  return (
    <Dropdown onSelect={handlecategoryName} className='dropDown'>
      <Dropdown.Toggle id='dropdown-basic'>{product.category}</Dropdown.Toggle>
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
