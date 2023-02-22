import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const toDosSlice = createSlice({
  name: "toDos",
  initialState: {
    items: [
      { id: uuidv4(), title: "task 1", isDone: true, colour: "green" },
      { id: uuidv4(), title: "task 2", isDone: false, colour: "red" },
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const id = action.payload;
      const task = state.items.find((task) => task.id === id);
      task.isDone = !task.isDone;
    },
    deleteToDo: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((task) => task.id !== id);
    },
    updateToDo: (state, action) => {
      const updatedToDo = action.payload;
      const filterToDo = state.items.filter(
        (task) => task.id !== updatedToDo.id
      );
      state.items = [...filterToDo, updatedToDo];
    },
  },
});

export const { addToDo, toggle, deleteToDo, updateToDo } = toDosSlice.actions;
export default toDosSlice.reducer;
