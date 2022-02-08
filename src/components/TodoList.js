import React from "react";
import classes from "../components/TodoItem.module.css";
import { connect } from "react-redux";

const TodoList = (props) => {
  console.log(props.state);
  return (
    <ul>
      {props.state.map((todo) => {
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
              Delete
            </button>
          </div>
        );
      })}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    state,
  };
}
mapStateToProps();

export default connect(mapStateToProps)(TodoList);
