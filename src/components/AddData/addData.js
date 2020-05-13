import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import { useDispatch } from "react-redux";
import { pick } from "lodash";
import DropDown from "./dropDown";
import { addProduct } from "../../store/actions";
import "./addData.css";

export default () => {
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

  const handleAdd = async () => {
    if (product.category === "Categories" || product.name === "")
      alert("Missing product information");
    else {
      let newProduct = {
        name: product.name,
        category: product.category,
        date: moment().format("l"),
      };
      try {
        await axios
          .post("http://localhost:2000/addProduct", newProduct)
          .then((res) =>
            dispatch(
              addProduct(pick(res.data, ["_id", "name", "category", "date"]))
            )
          );
      } catch (err) {
        alert("DataBase not connected");
      }
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
