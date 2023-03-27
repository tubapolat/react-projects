import { configureStore } from "@reduxjs/toolkit";
import covidTrackerSlice from "./covidTrackerSlice";

export const store = configureStore({
  reducer: {
    covidTracker: covidTrackerSlice,
  },
});
