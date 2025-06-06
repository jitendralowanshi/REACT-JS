import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDueDate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;
