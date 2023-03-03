import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";
import itemSlice from "./itemSlice";

export const store = configureStore({
  reducer: {
    products: itemSlice,
    basket: basketSlice,
  },
});
