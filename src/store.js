import { createStore } from "redux";
import { reducer } from "./actions/reducer";

export const store = createStore(reducer);