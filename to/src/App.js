import React, { useState } from "react";
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo';
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "task 1", status: false },
    { id: 2, title: "task 2", status: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  const markDone = (id) => {
    let newTasks = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTasks);
  };

  const cancelUpdate = () => {
    setUpdateData('');
  };

  const changeTask = (e) => {
    let newEntry= {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter ( task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  };

  return (
    <div className="container App">
      <br></br>
      <br></br>
      <h2>To Do List App</h2>
      <br></br>

      {updateData && updateData ? (
       <UpdateForm
       updateData= {updateData}
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
  

      {toDo && toDo.length ? "" : "No tasks...!"}
<ToDo
toDo={toDo}
markDone={markDone}
setUpdateData={setUpdateData}
deleteTask={deleteTask}
/>
      
    </div>
  );
}

export default App;
