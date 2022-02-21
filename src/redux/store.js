import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
// localStorage.setItem("todos", ["vudu"]);
// localStorage.setItem("todos", JSON.stringify(["vudu", "babau"]));

const persistedState = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

console.log(persistedState);
// console.log(persistedState);
// const loadFromLocalStorage = () => {
//   try {
//     const serializedState = localStorage.getItem("todos");
//     return JSON.parse(serializedState);
//   } catch (e) {
//     throw new Error(e);
//   }
// };
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState: {
    todo: {
      todos: persistedState,
    },
  },
});

// import { createStore } from "redux";
// import thunk from "redux-thunk";
// import todoReducer from "./reducers/todoReducer";

// const persistedState = localStorage.getItem("reduxState")
//   ? JSON.parse(localStorage.getItem("reduxState"))
//   : [];

// const store = createStore(todoReducer, persistedState);
// // const store = createStore(todoReducer, applyMiddleware(thunk));

// store.subscribe(() => {
//   localStorage.setItem("reduxState", JSON.stringify(store.getState()));
// });

export default store;
