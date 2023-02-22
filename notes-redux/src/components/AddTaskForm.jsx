const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="row">
      <div className="col">
        <input
          maxLength={200}
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="form-control form-control-lg"
        ></input>
      </div>
      <div className="col-auto">
        <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          value={newTask.colour}
          onChange={(e) => setNewTask({ ...newTask, colour: e.target.value })}
        >
          <option value={"red"}>Red</option>
          <option value={"green"}>Green</option>
          <option value={"yellow"}>Yellow</option>
        </select>
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
