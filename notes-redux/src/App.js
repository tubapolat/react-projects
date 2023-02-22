import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDoList from "./components/ToDoList";
import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, updateToDo } from "./redux/toDos/toDosSlice";

function App() {
  const toDos = useSelector((state) => state.toDos.items);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState({ title: "" });
  const [updatedToDo, setUpdatedToDo] = useState({ title: "" });

  const addTask = () => {
    if (newTask) {
      const toDo = { id: uuidv4(), title: newTask.title, isDone: false };
      dispatch(addToDo(toDo));
      setNewTask({ title: "" });
    }
  };

  const cancelUpdate = () => {
    setUpdatedToDo({ title: "" });
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updatedToDo.id,
      title: e.target.value,
      isDone: updatedToDo.isDone,
    };
    setUpdatedToDo(newEntry);
  };

  const updateTask = () => {
    dispatch(updateToDo(updatedToDo));
    setUpdatedToDo({});
  };

  return (
    <div className="container App">
      <br></br>
      <br></br>
      <h2>To Do List App</h2>
      <br></br>

      {updatedToDo.title ? (
        <UpdateForm
          updateData={updatedToDo}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      <br />

      {toDos && toDos.length ? (
        <ToDoList toDos={toDos} setUpdateData={setUpdatedToDo} />
      ) : (
        "No tasks...!"
      )}
    </div>
  );
}

export default App;
