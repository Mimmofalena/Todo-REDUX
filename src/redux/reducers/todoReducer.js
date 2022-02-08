const todoReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          isCompleted: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        return todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default todoReducer;
