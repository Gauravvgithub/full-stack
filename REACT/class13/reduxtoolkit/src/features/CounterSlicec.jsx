import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByValue: (state, action) => {
      state.value = state.value + action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
export const { increment, decrement, incrementByValue, reset } =
  CounterSlice.actions;

export default CounterSlice.reducer;
