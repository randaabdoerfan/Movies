import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import CombineReducers from "./Reducer/CombineReducers";

const store = createStore(
    CombineReducers,
    composeWithDevTools())
export default store;