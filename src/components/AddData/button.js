import React from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, emptyData } from "../../redux/actions";

export default () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleAdd = () => {
    if (product.category === "Categories" || product.name === "")
      alert("Missing product information");
    else {
      dispatch(
        addProduct({
          name: product.name,
          category: product.category,
          date: moment().format("l"),
        })
      );
      dispatch(emptyData());
    }
  }

    return <button onClick={handleAdd}>Add Product</button>;

};
