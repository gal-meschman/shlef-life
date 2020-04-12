import productsReducer from "./productsReducer"
import productReducer from "./productReducer"
import { combineReducers } from "redux";

export default () => combineReducers({
    products : productsReducer,
    product : productReducer
})