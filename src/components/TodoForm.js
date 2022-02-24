import React, { useEffect, useState, useRef, createRef } from "react";
import classes from "./TodoForm.module.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../redux/slices/todoSlice";
import TodoStatus from "./TodoStatus";

const TodoForm = (props) => {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  // const ref = useRef(todos.map(() => createRef()));

  // console.log(ref);
  // useEffect(() => {
  //   console.log(ref);
  // });
  // console.log(ref.current.parentElement.id);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const [selectedItem, setSelectedItem] = useState();

  console.log(selectedItem);
  // console.log(selectedItem.parentElement.id);

  const [showAlert, setShowAlert] = useState(false);

  const showAlertHandler = (e) => {
    e.stopPropagation();

    setShowAlert(true);
    setSelectedItem(e.currentTarget);
  };
  const returnHandler = () => {
    setSelectedItem(null);
    setShowAlert(false);
    // setSelectedItem(null);
  };

  const toggleTodoHandler = (e) => {
    dispatch(toggleTodo({ id: e.currentTarget.id }));
    // setSelectedItem(null);
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
          // ref={ref}
          onClick={toggleTodoHandler}
          // delete={deleteHandler}
          alert={showAlertHandler}
          alertStatus={showAlert}
          // return={returnHandler}
        />
      </div>
      <TodoStatus />
      {showAlert && (
        <div className={classes.alert}>
          <div className={classes.alertBox}>
            <p>
              The item will be deleted permanently. Do you with to continue?
            </p>
            <div className={classes.buttonsContainer}>
              <button className={classes.buttonDelete} onClick={deleteHandler}>
                DELETE
              </button>
              <button className={classes.buttonReturn} onClick={returnHandler}>
                Return
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoForm;
