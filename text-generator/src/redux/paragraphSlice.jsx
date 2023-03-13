import { createSlice } from "@reduxjs/toolkit";

export const paragraphSlice = createSlice({
  name: "paragraphs",
  initialState: { items: [] },
  reducers: {
    setParagraphs: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setParagraphs } = paragraphSlice.actions;
export default paragraphSlice.reducer;
