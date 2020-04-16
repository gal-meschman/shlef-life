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

export { addProduct, removeProduct };
