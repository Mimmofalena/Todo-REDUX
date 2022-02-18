import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
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
