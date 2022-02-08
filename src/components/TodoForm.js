import React, { useState } from "react";
import classes from "./TodoItem.module.css";
import TodoList from "./TodoList";
import { addTodo, toggleTodo, deleteTodo } from "../redux/actions/index";
import store from "../redux/store";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

const TodoForm = (props) => {
  console.log("TODO FORM PROPS", props);

  const [todo, setTodo] = useState("");

  console.log("REDUX STORE", store.getState());

  const toggleTodoHandler = (e) => {
    console.log("inside toggle handler form", e.currentTarget.id);

    store.dispatch(toggleTodo(e.currentTarget.id));
  };

  const todoHandler = (e) => {
    setTodo(e.target.value);
  };

  const deleteHandler = (e) => {
    store.dispatch(deleteTodo(e.currentTarget.parentElement.id));
    console.log(e.currentTarget.parentElement.id);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    store.dispatch(addTodo(todo, uuidv4(), true));

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

      <TodoList
        onClick={toggleTodoHandler}
        delete={deleteHandler}
        todos={props.state}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(TodoForm);
