import React, { useState, useEffect } from "react";
import classes from "../components/TodoItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getAsyncTodos } from "../redux/slices/todoSlice";

const TodoList = (props) => {
  const state = useSelector((state) => state);
  console.log("state before", state);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAsyncTodos());
  //   // console.log("state inside use effect", state);
  //   // const data = fetch("https://jsonplaceholder.typicode.com/todos").then(
  //   //   (res) => res.json()
  //   // );
  //   // console.log(data.slice(0, 10));
  // }, [dispatch]);

  const [selectedOption, setSelectedOption] = useState("");
  const selectHandler = (e) => {
    setSelectedOption(e.target.value);
  };

  const numTodos = useSelector((state) => state.todo.todos);
  const completedTodos = useSelector((state) =>
    state.todo.todos.filter((todo) => todo.isCompleted === true)
  );
  const pendingTodos = useSelector((state) =>
    state.todo.todos.filter((todo) => todo.isCompleted === false)
  );

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
      <div className={classes.selectContainer}>
        <select className={classes.select} onChange={selectHandler}>
          <option value="">Filter</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

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
      <div className={classes.summaryTodos}>
        <p>
          Todal Todos: <strong>{numTodos.length}</strong>
        </p>
        <p>
          Pending Todos: <strong>{pendingTodos.length}</strong>
        </p>

        <p>
          Completed Todos: <strong>{completedTodos.length}</strong>
        </p>
      </div>
    </>
  );
};

export default TodoList;
