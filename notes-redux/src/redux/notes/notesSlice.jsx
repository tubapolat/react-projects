import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      { id: uuidv4(), title: "Note 1", isDone: true, colour: "green" },
      { id: uuidv4(), title: "Note 2", isDone: false, colour: "red" },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const id = action.payload;
      const task = state.items.find((task) => task.id === id);
      task.isDone = !task.isDone;
    },
    /*changeColor: (state,action)=>{
      const id= action.payload;
      const task = state.items.find((task) => task.id === id); 
    }*/

    deleteNote: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((task) => task.id !== id);
    },
    updateNote: (state, action) => {
      const updatedNote = action.payload;
      const filterNote = state.items.filter(
        (task) => task.id !== updatedNote.id
      );
      state.items = [...filterNote, updatedNote];
    },
  },
});

export const { addNote, toggle, deleteNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
