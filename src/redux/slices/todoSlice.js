import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

// export const getAsyncTodos = createAsyncThunk(
//   "todos/getAsyncTodos",
//   async () => {
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
//       (res) => res.json()
//     );

//     const filteredData = data.slice(0, 50);
//     const [userid, id, text, isCompleted] = filteredData;
//     const data2 = filteredData.map((item) => {
//       return {
//         id: item.id,
//         text: item.title,
//         isCompleted: item.completed,
//       };
//     });
//     console.log(data2);

//     return data2;
//   }
// );

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
      console.log(current(state));

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

  // extraReducers: {
  //   [getAsyncTodos.fulfilled]: (state, action) => {
  //     const todos = { todos: action.payload };
  //     return todos;
  //   },
  // },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
