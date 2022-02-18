import React, { useState } from "react";
import classes from "./TodoItem.module.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

const TodoForm = (props) => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const toggleTodoHandler = (e) => {
    dispatch(toggleTodo({ id: e.currentTarget.id }));
  };

  const todoHandler = (e) => {
    setTodo(e.target.value);
  };

  const deleteHandler = (e) => {
    e.stopPropagation();
    console.log(e.currentTarget.parentElement.id);
    dispatch(deleteTodo(e.currentTarget.parentElement.id));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo({ id: uuidv4(), text: todo, isCompleted: false }));

    setTodo("");
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler} action="submit">
        <input
          value={todo}
          onChange={todoHandler}
          className={classes.input}
          type="text"
          placeholder="todo..."
        ></input>

        <button disabled={!todo} className={classes.button}>
          +
        </button>
      </form>

      <TodoList onClick={toggleTodoHandler} delete={deleteHandler} />
    </div>
  );
};

export default TodoForm;
