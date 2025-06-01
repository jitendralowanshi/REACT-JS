import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2025",
    },
    {
      name: "Go to clg",
      dueDate: "04/10/2025",
    },

    {
      name: "Go to home",
      dueDate: "04/10/2026",
    },
    {
      name: "travlling",
      dueDate: "04/10/2026",
    },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItems}></TodoItems>
      </center>
    </>
  );
}

export default App;
