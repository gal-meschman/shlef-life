import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../../redux/actions";

export default () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleChange = (e) =>
    dispatch(
      addData({
        name: e.target.value,
      })
    );

  return (
    <input type='text' value={product.name} onChange={handleChange}></input>
  );
};
