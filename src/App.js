import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoStatus from "./components/TodoStatus";

function App() {
  return (
    <div className="App">
      <h1 className="title">To do app with Redux</h1>

      <TodoForm />
    </div>
  );
}

export default App;
