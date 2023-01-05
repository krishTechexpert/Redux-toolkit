import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';
const Counter = () => {
  const dispatch = useDispatch();
  const count =useSelector((state) => state.myCounter.value)
  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
};
export default Counter;
