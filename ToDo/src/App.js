import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDoList from "./components/ToDoList";
import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [toDos, setToDos] = useState([
    { id: uuidv4(), title: "task 1", isDone: true },
    { id: uuidv4(), title: "task 2", isDone: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {
    if (newTask) {
      const toDo = { id: uuidv4(), title: newTask, isDone: false };
      setToDos([...toDos, toDo]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newTasks = toDos.filter((task) => task.id !== id);
    setToDos(newTasks);
  };

  const markDone = (id) => {
    let newTasks = toDos.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setToDos(newTasks);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      isDone: updateData.isDone,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDos].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDos(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <br></br>
      <br></br>
      <h2>To Do List App</h2>
      <br></br>

      {updateData ? (
        <UpdateForm
          updateData={updateData}
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
        <ToDoList
          toDos={toDos}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
        />
      ) : (
        "No tasks...!"
      )}
    </div>
  );
}

export default App;
