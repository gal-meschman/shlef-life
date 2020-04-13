import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import "./table.css";

const checkDate = (product) =>
  Date.parse(moment(product.date)) >=
  Date.parse(moment().add(1, "week").format())
    ? "white"
    : Date.parse(moment(product.date)) >=
      Date.parse(moment().add(3, "days").format())
    ? "#ffcc00"
    : "red";

const renderProducts = (product, index) => (
  <tr key={index}>
    <td>{product.name}</td>
    <td>{product.category}</td>
    <td id='last-td' bgcolor={checkDate(product)}>
      {product.date}
    </td>
  </tr>
);

export default () => {
  const products = useSelector(state => state)
  return (
    <Table bordered hover size='sm' className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{products && products.map(renderProducts)}</tbody>
    </Table>
  );
};
