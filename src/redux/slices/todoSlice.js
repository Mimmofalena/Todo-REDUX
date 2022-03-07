import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: action.payload.id,
        text: action.payload.text,
        isCompleted: action.payload.isCompleted,
      };

      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      const filteredTodo = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      state.todos = filteredTodo;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    showCompleted: (state) => {
      state.completed = state.todos.filter((todo) => todo.isCompleted === true);
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
