import { combineReducers } from "redux";
import productReducer from "./productReducer";
import counter from "../counter/counterReducer";

const combinedReducer = combineReducers({
  product: productReducer,
  counter: counter,
});

export default combinedReducer;
