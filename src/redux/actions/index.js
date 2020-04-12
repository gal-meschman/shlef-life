const addData = (data) => {
  return {
    type: "ADDDATA",
    payload: data,
  };
};

const addProduct = (obj) => {
  return {
    type: "ADDPRODUCT",
    payload: obj,
  };
};

const emptyData = () => ({ type: "EMPTYDATA" });

export {addProduct, emptyData, addData };
