import React, { useState } from "react";
import classes from "./TodoForm.module.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../redux/slices/todoSlice";
import TodoStatus from "./TodoStatus";

const TodoForm = (props) => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const [selectedItem, setSelectedItem] = useState();

  const [showAlert, setShowAlert] = useState(false);

  const showAlertHandler = (e) => {
    e.stopPropagation();

    setShowAlert(true);
    setSelectedItem(e.currentTarget);
  };
  const returnHandler = () => {
    setSelectedItem(null);
    setShowAlert(false);
  };

  const toggleTodoHandler = (e) => {
    dispatch(toggleTodo({ id: e.currentTarget.parentElement.id }));
  };

  const todoHandler = (e) => {
    setTodo(e.target.value);
  };

  const deleteHandler = (e) => {
    dispatch(deleteTodo(selectedItem.parentElement.id));

    setShowAlert(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo({ id: uuidv4(), text: todo, isCompleted: false }));

    setTodo("");
  };
  return (
    <div className={classes.upperContainer}>
      <div className={classes.container} role="main">
        <form className={classes.form} onSubmit={submitHandler} aria-label="Add new todo">
          <input
            value={todo}
            onChange={todoHandler}
            className={classes.input}
            type="text"
            placeholder="What needs to be done?"
            aria-label="Enter a new todo item"
            id="todo-input"
          />

          <button
            disabled={!todo}
            className={!todo ? classes.buttonDisabled : classes.button}
            type="submit"
            aria-label="Add todo"
          >
            +
          </button>
        </form>

        <TodoList
          onClick={toggleTodoHandler}
          alert={showAlertHandler}
          alertStatus={showAlert}
        />
      </div>
      <TodoStatus />
      {showAlert && (
        <div 
          className={classes.alert} 
          role="dialog" 
          aria-modal="true"
          aria-labelledby="delete-dialog-title"
        >
          <div className={classes.alertBox}>
            <p id="delete-dialog-title">
              This item will be deleted permanently. Do you want to continue?
            </p>
            <div className={classes.buttonsContainer}>
              <button 
                className={classes.buttonDelete} 
                onClick={deleteHandler}
                aria-label="Confirm delete"
              >
                Delete
              </button>
              <button 
                className={classes.buttonReturn} 
                onClick={returnHandler}
                aria-label="Cancel and return"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoForm;
