import { createStore } from "redux";
import { reducer } from "./reducer.js";

export const store = new createStore(reducer);
