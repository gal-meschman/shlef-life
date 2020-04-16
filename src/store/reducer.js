import { handlePosition, filterKey, products } from "./functions";

export default (state = products, action) => {
  switch (action.type) {
    case "ADDPRODUCT":
      return handlePosition([...state], action);
    case "REMOVEPRODUCT": {
      return [...state].filter((product) => filterKey(product, action.key));
    }
    default:
      return state;
  }
};
