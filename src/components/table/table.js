import React from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { removeProduct } from "../../store/actions";
import "./table.css";

export default () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const checkDate = (product) =>
    Date.parse(moment(new Date(product.date))) >=
    Date.parse(moment().add(1, "week").format())
      ? "white"
      : Date.parse(moment(new Date(product.date))) >=
        Date.parse(moment().add(3, "days").format())
      ? "#ffcc00"
      : "red";

  const handleRemove = (e) => dispatch(removeProduct(parseInt(e.target.id)));

  const renderProducts = (product, index) => (
    <tr key={index}>
      <td className='removeProduct' id={product.key} onClick={handleRemove}>
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
