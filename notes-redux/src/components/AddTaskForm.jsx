const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="row">
      <div className="col">
        <input
          value={newTask.title}
          onChange={(e) => setNewTask({ title: e.target.value })}
          className="form-control form-control-lg"
        ></input>
      </div>
      <div className="col-auto">
        <button onClick={addTask} className="btn btn-lg btn-success mr-20">
          Add task
        </button>
      </div>
    </div>
  );
};

export default AddTaskForm;
