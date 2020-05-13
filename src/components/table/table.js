import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { removeProduct, getAllProducts } from "../../store/actions";
import checkDate from "./functions";
import "./table.css";

export default () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleRemove = async (e) => {
    dispatch(removeProduct(e.target.id));
  };

  const renderProducts = (product, index) => (
    <tr key={index}>
      <td className='removeProduct' id={product._id} onClick={handleRemove}>
        X
      </td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td bgcolor={checkDate(product)}>{product.date}</td>
    </tr>
  );

  return (
    <Table responsive bordered size='sm' className='text-center'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{products && products.map(renderProducts)}</tbody>
    </Table>
  );
};
