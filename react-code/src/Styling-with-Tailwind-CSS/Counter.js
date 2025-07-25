import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center py-10 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-white">Tailwind Styled Counter</h1>
      <p className="text-2xl text-white mb-4">Count: {count}</p>
      <div className="flex justify-center gap-4">
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
