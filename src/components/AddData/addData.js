import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import DropDown from "./dropDown";
import { addProduct } from "../../store/actions";
import "./addData.css";

export default () => {
  const [product, setProduct] = useState({
    name: "bdika",
    category: "Exa", //Categories
    date: "",
  });
  const dispatch = useDispatch();

  const handleName = (e) => setProduct({ ...product, name: e.target.value });

  const handleCategory = (categoryName) => {
    setProduct({
      ...product,
      category: categoryName,
    });
  };

  const handleAdd = async () => {
    if (product.category === "Categories" || product.name === "")
      alert("Missing product information");
    else {
      dispatch(addProduct({
        name: product.name,
        category: product.category,
        date: moment().format("l"),
      }));
    }
    setProduct({ name: "", category: "Categories", date: "" });
  };

  return (
    <div className='addData'>
      <input type='text' value={product.name} onChange={handleName}></input>
      <DropDown category={product.category} handleCategory={handleCategory} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
