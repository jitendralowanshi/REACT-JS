import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItems2 from "./components/TodoItems2";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>

        <div className="item-container">
          <TodoItem1></TodoItem1>
          <TodoItems2></TodoItems2>
        </div>
      </center>
    </>
  );
}

export default App;
