import "./App.css";
import TodoForm from "./components/TodoForm";
// import store from "./redux/store";
// import TodoList from './components/TodoList';

function App() {
  // console.log(store.getState());

  // store.dispatch({
  //   type: "BUG_ADDED",
  //   payload: {
  //     description: "BUG 2",
  //   },
  // });

  // store.dispatch({
  //   type: "BUG_REMOVED",
  //   payload: {
  //     id: 1,
  //   },
  // });
  // console.log(store.getState());
  return (
    <div className="App">
      <h1 className="title" style={{ textDecoration: "underline" }}>
        To do app with Redux
      </h1>
      <TodoForm />
      {/* <TodoList/> */}
    </div>
  );
}

export default App;
