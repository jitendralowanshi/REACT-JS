function AddTodo() {
  return (
    <>
      <div className="container text-center kg-row kg-margin">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter to do here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
