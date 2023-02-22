import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import NoteList from "./components/NoteList";
import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addNote, updateNote } from "./redux/notes/notesSlice";

function App() {
  const notes = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState({ title: "", colour: "red" });
  const [updatedNote, setUpdatedNote] = useState({ title: "" });

  const addTask = () => {
    if (newTask) {
      const note = {
        id: uuidv4(),
        title: newTask.title,
        isDone: false,
        colour: newTask.colour,
      };
      dispatch(addNote(note));
      setNewTask({ title: "", colour: "red" });
    }
  };

  const cancelUpdate = () => {
    setUpdatedNote({ title: "" });
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updatedNote.id,
      title: e.target.value,
      isDone: updatedNote.isDone,
    };
    setUpdatedNote(newEntry);
  };

  const updateTask = () => {
    dispatch(updateNote(updatedNote));
    setUpdatedNote({});
  };

  return (
    <div className="container text-center">
      <br></br>
      <br></br>
      <h2>My Notes</h2>
      <br></br>

      {updatedNote.title ? (
        <UpdateForm
          updateData={updatedNote}
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

      {notes && notes.length ? (
        <NoteList notes={notes} setUpdateData={setUpdatedNote} />
      ) : (
        "No tasks...!"
      )}
    </div>
  );
}

export default App;
