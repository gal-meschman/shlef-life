import { products } from "./products";

export default (state = products, action) => {
  switch (action.type) {
    case "ADDPRODUCT":
      return [...state, action.payload] ;
    case "REMOVEALL":
      return "";
    default:
      return state;
  }
};
