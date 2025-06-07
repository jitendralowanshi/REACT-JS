function TodoItem({ todoName, todoDueDate, onDeletClick }) {
  return (
    <>
      <div className="container kg-margin">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDueDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger text-center kg-button"
              onClick={() => onDeletClick(todoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
