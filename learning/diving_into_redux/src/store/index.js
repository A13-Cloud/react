// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slice/counter";
import authenticatedReducer from "./slice/authenticated";


// For use basic redux and create slice.
// const createReducer = (state = initialState, action) => {
//
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     }
//   }
//
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter,
//     }
//   }
//
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     }
//   }
//
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     }
//   }
//
//   return state;
// }

const store = configureStore({
  reducer: {
    counter: counterReducer,
    authenticated: authenticatedReducer
  },
  // reducer: counterSlice.slice, -> If we have one slice
  // reducer: {counter: counterSlice.slice} -> If we have more slices
});

export default store;