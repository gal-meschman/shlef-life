const addProduct = (obj) => {
  return {
    type: "ADDPRODUCT",
    payload: obj,
  };
};

export { addProduct };
