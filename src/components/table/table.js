import React from "react";
import { useSelector} from "react-redux";
import { Table } from "react-bootstrap";
import { compare, renderProducts } from "./functions";
import "./table.css";

export default () => {
  const products = useSelector(state => state.products)
  products && products.sort(compare);
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
