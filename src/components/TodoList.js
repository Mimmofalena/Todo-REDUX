import React, { useState } from "react";
import classes from "./TodoList.module.css";
import { useSelector } from "react-redux";

import { TiTickOutline } from "react-icons/ti";
import { BsFillTrashFill } from "react-icons/bs";

const TodoList = (props) => {
  const [selectedOption, setSelectedOption] = useState("Ascending");
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
    <div className={classes.container}>
      <div className={classes.selectContainer}>
        <select className={classes.select} onChange={selectHandler}>
          {/* <option value="">Filter</option> */}
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <ul className={classes.listContainer}>
        {!todos.length && <p>no items found</p>}
        {todos.map((todo) => {
          return (
            <div
              id={todo.id}
              key={todo.id}
              className={
                todo.isCompleted
                  ? [classes.listItem, classes.opacity].join(" , ")
                  : classes.listItem
              }
            >
              <li className={todo.isCompleted ? [classes.text_crossed] : ""}>
                {todo.text}
              </li>

              <TiTickOutline
                onClick={props.onClick}
                className={[classes.button, classes.button_completed].join(
                  " , "
                )}
              />
              <BsFillTrashFill
                onClick={props.alert}
                className={[classes.button, classes.button_delete].join(" , ")}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
