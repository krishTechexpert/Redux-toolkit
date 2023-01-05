import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'myCounter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

//imp point:1
//createSlice automatically generates action creators with the same names as the reducer functions ///we wrote.
console.log(counterSlice.actions.increment());
// {type: "myCounter/increment"}

//imp point:2
//It also generates the slice reducer function that knows how to respond to all these action types:

export default counterSlice.reducer;

/*
const newState = counterSlice.reducer(
  { value: 10 },
  counterSlice.actions.increment()
)
console.log(newState)
// {value: 11}
*/
