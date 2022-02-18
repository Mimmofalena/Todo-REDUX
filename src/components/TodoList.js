import React, { useState } from "react";
import classes from "../components/TodoItem.module.css";
import { useSelector } from "react-redux";

const TodoList = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const selectHandler = (e) => {
    setSelectedOption(e.target.value);
  };

  const todos = useSelector((state) => {
    if (selectedOption === "Descending") {
      return state.todo.todos
        .slice()
        .sort((a, b) =>
          b.text.toLowerCase() > a.text.toLowerCase()
            ? 1
            : a.text.toLowerCase() > b.text.toLowerCase()
            ? -1
            : 0
        );
    } else if (selectedOption === "Ascending") {
      return state.todo.todos
        .slice()
        .sort((a, b) =>
          a.text.toLowerCase() > b.text.toLowerCase()
            ? 1
            : b.text.toLowerCase() > a.text.toLowerCase()
            ? -1
            : 0
        );
    } else if (selectedOption === "Completed") {
      return state.todo.todos
        .slice()
        .filter((item) => item.isCompleted === true);
    } else {
      return state.todo.todos;
    }
  });

  return (
    <>
      <select onChange={selectHandler}>
        <option value="">Filter</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
        <option value="Completed">Completed</option>
      </select>

      <ul className={classes.listContainer}>
        {todos.map((todo) => {
          return (
            <div
              id={todo.id}
              onClick={props.onClick}
              key={todo.id}
              className={
                todo.isCompleted
                  ? [classes.listItem, classes.opacity].join(" , ")
                  : classes.listItem
              }
            >
              <li>{todo.text}</li>
              <div
                className={
                  todo.isCompleted ? [classes.completed].join(" , ") : ""
                }
              ></div>
              <button onClick={props.delete} className={classes.button}>
                -
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
