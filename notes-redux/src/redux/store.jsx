import { configureStore } from "@reduxjs/toolkit";
import toDosSlice from "./toDos/toDosSlice";
export const store = configureStore({
  reducer: {
    toDos: toDosSlice,
  },
});
