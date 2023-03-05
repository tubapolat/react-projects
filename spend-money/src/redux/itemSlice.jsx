import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "products",
  initialState: {
    totalMoney: 1000000,
    items: [
      {
        id: 1001,
        url: "https://neal.fun/spend/images/flip-flops.jpg",
        title: "Flip Flops",
        price: 3,
        amount: 0,
      },
      {
        id: 1002,
        url: "https://neal.fun/spend/images/movie-ticket.jpg",
        title: "Movie Ticket",
        price: 12,
        amount: 0,
      },
      {
        id: 1003,
        url: "https://neal.fun/spend/images/book.jpg",
        title: "Book",
        price: 15,
        amount: 0,
      },
      {
        id: 1004,
        url: "https://neal.fun/spend/images/amazon-echo.jpg",
        title: "Amazon Echo",
        price: 100,
        amount: 0,
      },
      {
        id: 1005,
        url: "https://neal.fun/spend/images/smartphone.jpg",
        title: "Smart Phone",
        price: 600,
        amount: 0,
      },
      {
        id: 1006,
        url: "https://neal.fun/spend/images/bike.jpg",
        title: "Bike",
        price: 1000,
        amount: 0,
      },
      {
        id: 1007,
        url: "https://neal.fun/spend/images/acre-of-farmland.jpg",
        title: "Acre of Farmland",
        price: 3000,
        amount: 0,
      },
      {
        id: 1008,
        url: "https://neal.fun/spend/images/luxury-wine.jpg",
        title: "Luxury Wine",
        price: 5000,
        amount: 0,
      },
      {
        id: 1009,
        url: "https://neal.fun/spend/images/jet-ski.jpg",
        title: "Jet-Ski",
        price: 10000,
        amount: 0,
      },
      {
        id: 1010,
        url: "https://neal.fun/spend/images/ford-f-150.jpg",
        title: "Ford-F-150",
        price: 30000,
        amount: 0,
      },
      {
        id: 1011,
        url: "https://neal.fun/spend/images/tesla.jpg",
        title: "Tesla",
        price: 75000,
        amount: 0,
      },
      {
        id: 1012,
        url: "https://neal.fun/spend/images/single-family-home.jpg",
        title: "Family Home",
        price: 300000,
        amount: 0,
      },
    ],
  },
  reducers: {
    buy: (state, action) => {
      const productId = action.payload;
      const productToBuy = state.items.find((item) => item.id === productId);
      if (state.totalMoney >= productToBuy.price) {
        productToBuy.amount += 1;
        state.totalMoney -= productToBuy.price;
      } else {
        alert(`You don't have enough money to buy ${productToBuy.title}.`);
      }
    },
    sell: (state, action) => {
      const productId = action.payload;
      const productToSell = state.items.find((item) => item.id === productId);
      if (productToSell.amount > 0) {
        productToSell.amount -= 1;
        state.totalMoney += productToSell.price;
      } else {
        alert(`You don't have ${productToSell.title} to sell.`);
      }
    },
  },
});

export const { buy, sell } = itemSlice.actions;
export default itemSlice.reducer;
