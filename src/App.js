import "./App.css";
import TodoForm from "./components/TodoForm";
// import store from "./redux/store";
// import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1 className="title">To do app with Redux</h1>
      <TodoForm />
      {/* <TodoList/> */}
    </div>
  );
}

export default App;
