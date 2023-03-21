import { createSlice } from "@reduxjs/toolkit";

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    markdownText: "",
  },
  reducers: {
    setMarkdownText: (state, action) => {
      state.markdownText = action.payload;
    },
  },
});

export const { setMarkdownText } = markdownSlice.actions;
export default markdownSlice.reducer;
