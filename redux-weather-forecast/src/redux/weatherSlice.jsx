import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: { forecast: {} },
  reducers: {
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
  },
});

export const { setForecast } = weatherSlice.actions;
export default weatherSlice.reducer;
