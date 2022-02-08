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
