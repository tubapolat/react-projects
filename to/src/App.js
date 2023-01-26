import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTasks,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "task 1", satus: false },
    { id: 2, title: "task 2", satus: false },
  ]);

  const [newTask, setNewtask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const AddTask = () => {};

  const deleteTask = () => {};

  const markDone = (id) => {};

  const cancelUpdate = () => {};

  const changeTask = (e) => {};

  const updateTask = () => {};

  return (
    <div className="container App">
      <br></br>
      <br></br>
      <h2>To Do List App</h2>
      <br></br>

      {toDo && toDo.length ? "" : "No tasks...!"}

      {toDo &&
        toDo.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span> <FontAwesomeIcon icon={faCircleCheck}/></span>
                  <span> <FontAwesomeIcon icon={faPen}/> </span>
                  <span> <FontAwesomeIcon icon={faTrashCan}/></span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default App;
