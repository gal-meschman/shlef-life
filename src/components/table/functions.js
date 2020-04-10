import React from "react";
import moment from "moment";

const checkDate = (product) =>
  Date.parse(moment(product.date)) >=
  Date.parse(moment().add(1, "week").format())
    ? "white"
    : Date.parse(moment(product.date)) >=
      Date.parse(moment().add(3, "days").format())
    ? "#ffcc00"
    : "red";

const compare = (a, b) =>
  Date.parse(moment(a.date)) >= Date.parse(moment(b.date)) ? 1 : -1;

const renderProducts = (product, index) => (
  <tr key={index}>
    <td>{product.name}</td>
    <td>{product.category}</td>
    <td id='last-td' bgcolor={checkDate(product)}>
      {product.date}
    </td>
  </tr>
);

export { compare, renderProducts };
