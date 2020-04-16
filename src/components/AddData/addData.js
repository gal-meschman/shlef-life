import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { addProduct } from "../../store/actions";
import DropDown from "./dropDown";
import "./addData.css";

export default () => {
  const products = useSelector((state) => state);
  
  const [product, setProduct] = useState({
    name: "",
    category: "Categories",
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

  const handleAdd = () => {
    if (product.category === "Categories" || product.name === "")
      alert("Missing product information");
    else {
      dispatch(
        addProduct({
          key: (products.length + 1),
          name: product.name,
          category: product.category,
          date: moment().format("l"),
        })
      );
      setProduct({ name: "", category: "Categories", date: "" });
    }
  };

  return (
    <div className='addData'>
      <input type='text' value={product.name} onChange={handleName}></input>
      <DropDown category={product.category} handleCategory={handleCategory} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
