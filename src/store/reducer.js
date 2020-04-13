import {handlePosition, products} from "./functions"

export default (state = products, action) => {
  switch (action.type) {
    case "ADDPRODUCT": 
      return handlePosition([...state], action);
    
    default:
      return state;
  }
};
