const addProducts = (array) => ({
  type: "ADDPRODUCTS",
  payload: array,
});

const addProduct = (newProduct) => {
  return {
    type: "ADDPRODUCT",
    payload: newProduct,
  };
  // try {
  //   await axios.post("http://localhost:2000/addProduct", newProduct);
  //   return {
  //     type: "ADDPRODUCT",
  //     payload: newProduct,
  //   };
  // } catch (err) {
  //   alert("DataBase not connected");
  // }
  // return { type: "" };
};

const removeProduct = (id) => ({
  type: "REMOVEPRODUCT",
  id: id,
});

export { addProducts, addProduct, removeProduct };
