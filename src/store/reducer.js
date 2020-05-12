import { handlePosition, filterKey, products, sorted } from "./functions";

export default (state = products, action) => {
  switch (action.type) {
    case "ADDPRODUCTS":
      return sorted(action.payload);
    case "ADDPRODUCT":
      return handlePosition([...state], action.payload);
    case "REMOVEPRODUCT": {
      return [...state].filter((product) => filterKey(product, action.key));
    }
    default:
      return state;
  }
};
