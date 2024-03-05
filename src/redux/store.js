import { combineReducers, createStore } from "redux";
import todoReducer from "./reducer/todoReducer";
import userReducer from "./reducer/todoReducer";

const rootReducer = combineReducers({ todoReducer, userReducer });
// Birden fazla reducer varsa combine-reducer ile birlestir

const store = createStore(rootReducer); // Store kurulumu

export default store; // Storu export ediyoruz.

// main.jsx de storu projeye tanıtıyoruz.
