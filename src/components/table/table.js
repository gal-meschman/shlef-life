import React, { useEffect } from "react";
import axios from "axios";
import { pick } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { removeProduct, addProducts } from "../../store/actions";
import { getProudcts, checkDate } from "./functions";
import "./table.css";

export default () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    getProudcts().then((products) => {
      if (products !== undefined) {
        let newProducts = products.data.map((product) =>
          pick(product, ["_id", "name", "category", "date"])
        );
        dispatch(addProducts(newProducts));
      }
    });
  }, [dispatch]);

  const handleRemove = async (e) => {
    e.persist();
    try {
      await axios.delete("http://localhost:2000/removeProduct", {
        _id: e.target.id,
      });
      dispatch(removeProduct(e.target.id));
    } catch (err) {
      alert("DataBase not connected");
    }
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
