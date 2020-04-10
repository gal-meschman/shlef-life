import React from "react";
import { Table } from "react-bootstrap";
import { products } from "./products";
import { compare, renderProducts } from "./functions";
import "./table.css";

export default () => {
  products.sort(compare);
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
