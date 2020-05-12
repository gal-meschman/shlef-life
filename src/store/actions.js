const addProducts = (array) => {
  return {
    type: "ADDPRODUCTS",
    payload: array,
  };
};

const addProduct = (obj) => {
  return {
    type: "ADDPRODUCT",
    payload: obj,
  };
};

const removeProduct = (id) => {
  return {
    type: "REMOVEPRODUCT",
    key: id,
  };
};

export { addProducts, addProduct, removeProduct };
