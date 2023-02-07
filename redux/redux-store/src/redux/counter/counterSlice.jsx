import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease:(state)=>{
        state.value -=1;
    },
    increaseByAmount:(state, action)=>{
        state.value+= Number (action.payload);
    }
  },
});


export const {decrease, increase, increaseByAmount} = counterSlice.actions;
export default counterSlice.reducer;
