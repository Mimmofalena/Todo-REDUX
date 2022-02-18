import { createSlice, current } from "@reduxjs/toolkit";

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
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    toggleTodo: (state, action) => {
      state.todos.map((todo) => {
        return todo.id === action.payload.id
          ? (todo.isCompleted = !todo.isCompleted)
          : todo;
      });
    },
    showCompleted: (state) => {
      state.completed = state.todos.filter((todo) => todo.isCompleted === true);
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
