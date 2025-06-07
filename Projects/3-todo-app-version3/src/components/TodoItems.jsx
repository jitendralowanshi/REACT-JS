import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeletClick }) => {
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDueDate={item.dueDate}
          onDeletClick={onDeletClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
