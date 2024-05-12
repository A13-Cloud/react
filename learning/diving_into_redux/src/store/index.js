// import { createStore } from "redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment (state) {
      state.counter++;
    },
    increase (state, action) {
      state.counter += action.payload;
    },
    decrement (state) {
      state.counter++;
    },
    toggleCounter (state) {
      state.showCounter = !state.showCounter;
    }
  }
})

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
  reducer: counterSlice.reducer,
  // reducer: {counter: counterSlice.reducer}
});

export const counterActions = counterSlice.actions;

export default store;