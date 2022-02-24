import React from "react";
import { useSelector } from "react-redux";
import classes from "./TodoStatus.module.css";

const TodoStatus = () => {
  const todos = useSelector((state) => state.todo.todos);
  const completedTodos = todos.filter((todo) => todo.isCompleted === true);
  const uncompletedTodos = todos.filter((todo) => todo.isCompleted === false);

  return (
    <div className={classes.summaryTodos}>
      <p>
        Total: <strong>{todos.length}</strong>
      </p>
      <p>
        Pending: <strong>{uncompletedTodos.length}</strong>
      </p>

      <p>
        Completed: <strong>{completedTodos.length}</strong>
      </p>
    </div>
  );
};

export default TodoStatus;
