import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    totalMoney: 100000,
    items: [
      {
        id: 1001,
        title: "Flip Flops",
        price: 3,
        amount: 6,
      },
      {
        id: 1012,
        title: "Family Home",
        price: 300000,
        amount: 3,
      },
    ],
  },
  reducers: {},
});

export default basketSlice.reducer;
