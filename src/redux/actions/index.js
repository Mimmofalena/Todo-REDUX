export const addTodo = (text, id, isCompleted) => {
  return {
    type: "ADD_TODO",
    payload: {
      text,
      id,
      isCompleted,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id,
    },
  };
};

// export const loadAsyncTodos = () => async (dispatch, getState) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();

//   const todos = data.slice(0, 10);
// };

export const loadTodos = (todos) => {
  return {
    type: "LOAD_TODOS",
    payload: todos,
  };
};
