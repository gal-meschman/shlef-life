import axios from "axios";
import { pick } from "lodash";

const getAllProducts = () => {
  return (dispatch) => {
    axios.get("http://localhost:2000/getAllProducts").then((products) => {
      if (products !== undefined) {
        let newProducts = products.data.map((product) =>
          pick(product, ["_id", "name", "category", "date"])
        );
        dispatch({
          type: "GETALLPRODUCTS",
          payload: newProducts,
        }
        );
      }
    }, () => alert("DataBase not connected"))
  };
};

const addProduct = (newProduct) => {
  return (dispatch) => {
    axios.post("http://localhost:2000/addProduct", newProduct).then((res) => {
        dispatch({
          type: "ADDPRODUCT",
          payload: pick(res.data, ["_id", "name", "category", "date"])
        }
        );
    }, () => {})
  };
};

const removeProduct = (id) => {
  return (dispatch) => {
    axios.delete("http://localhost:2000/removeProduct", {_id: id})
      .then(() => {
        dispatch({
          type: "REMOVEPRODUCT",
          id: id,
        }
        );
    }, () => {})
  };
};

export { getAllProducts, addProduct, removeProduct };
