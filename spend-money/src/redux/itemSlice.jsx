import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "products",
  initialState: {
    items: [
      {
        id: 1001,
        url: "https://neal.fun/spend/images/flip-flops.jpg",
        title: "Flip Flops",
        price: "3",
      },
      {
        id: 1002,
        url: "https://neal.fun/spend/images/movie-ticket.jpg",
        title: "Movie Ticket",
        price: "12",
      },
      {
        id: 1003,
        url: "https://neal.fun/spend/images/book.jpg",
        title: "Book",
        price: "15",
      },
      {
        id: 1004,
        url: "https://neal.fun/spend/images/amazon-echo.jpg",
        title: "Amazon echo",
        price: "100",
      },
      {
        id: 1005,
        url: "https://neal.fun/spend/images/smartphone.jpg",
        title: "Smart Phone",
        price: "600",
      },
      {
        id: 1006,
        url: "https://neal.fun/spend/images/bike.jpg",
        title: "Bike",
        price: "1000",
      },
    ],
  },
  reducers: {
    buy: (state, action) => {},
    sell: (state, action) => {},
  },
});

export const { buy, sell } = itemSlice.actions;
export default itemSlice.reducer;
