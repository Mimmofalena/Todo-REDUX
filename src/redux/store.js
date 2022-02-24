import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

const persistedState = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

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

export default store;
