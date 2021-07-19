import { combineReducers } from "redux";
import productReducer from "./productReducer";

const combinedReducer = combineReducers({
  product: productReducer,
});

export default combinedReducer;
