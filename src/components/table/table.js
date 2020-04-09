import React from "react";
import moment from "moment";
import { Table } from "react-bootstrap";
import "./table.css";

export default () => {
  const products = [
    { name: "Apple", category: "Fruits", date: moment().format("l") },
    { name: "Bread", category: "", date: "4/17/2020" },
    { name: "Hummus", category: "", date: "4/13/2020" },
  ];
  const renderProducts = (product, index) => (
    <tr key={index}>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td bgcolor={checkDate(product)}>{product.date}</td>
    </tr>
  );

  const checkDate = (product) =>
    Date.parse(moment(product.date)) >=
    Date.parse(moment().add(1, "week").format())
      ? "#339900"
      : Date.parse(moment(product.date)) >=
      Date.parse(moment().add(3, "days").format()) 
      ? "#ffcc00" 
      : "red";

  return (
    <Table bordered hover size='sm' className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{products.map(renderProducts)}</tbody>
    </Table>
  );
};
