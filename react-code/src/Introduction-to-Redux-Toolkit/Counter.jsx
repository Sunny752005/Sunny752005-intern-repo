import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, selectCounter } from './store';

const Counter = () => {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())} style={{ marginRight: '1rem' }}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
