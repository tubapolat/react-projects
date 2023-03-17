import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "cards",
  initialState: {
    score: 0,
    items: [
      { src: "/img/angel.jpg", matched: false },
      { src: "/img/children.jpg", matched: false },
      { src: "/img/cassatt.jpg", matched: false },
      { src: "/img/gwen.jpg", matched: false },
      { src: "/img/maurice.jpg", matched: false },
      { src: "/img/monet.jpg", matched: false },
      { src: "/img/morrisot.jpg", matched: false },
      { src: "/img/starry.jpg", matched: false },
      { src: "/img/sun.jpg", matched: false },
      { src: "/img/sunflowers.jpg", matched: false },
      { src: "/img/suzanne.jpg", matched: false },
      { src: "/img/van-gogh.jpg", matched: false },
      { src: "/img/angel.jpg", matched: false },
      { src: "/img/children.jpg", matched: false },
      { src: "/img/cassatt.jpg", matched: false },
      { src: "/img/gwen.jpg", matched: false },
      { src: "/img/maurice.jpg", matched: false },
      { src: "/img/monet.jpg", matched: false },
      { src: "/img/morrisot.jpg", matched: false },
      { src: "/img/starry.jpg", matched: false },
      { src: "/img/sun.jpg", matched: false },
      { src: "/img/sunflowers.jpg", matched: false },
      { src: "/img/suzanne.jpg", matched: false },
      { src: "/img/van-gogh.jpg", matched: false },
    ],
  },
  reducers: {
    setCards: (state, action) => {
      state.items = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { setCards, setScore } = cardSlice.actions;
export default cardSlice.reducer;
