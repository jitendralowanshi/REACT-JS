import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "buy ghee",
  //     dueDate: "23/04/3045",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added : ${itemName} Date : ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeletItems = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItems);
    console.log(`item deleted : ${todoItemName}`);
  };

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
        <TodoItems
          todoItems={todoItems}
          onDeletClick={handleDeletItems}
        ></TodoItems>
      </center>
    </>
  );
}

export default App;
