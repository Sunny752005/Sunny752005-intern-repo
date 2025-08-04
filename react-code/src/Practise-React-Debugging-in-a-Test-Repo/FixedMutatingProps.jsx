import React, { useState } from 'react';

function Child({ state }) {
  const copy = { ...state }; //Safe clone
  return (
    <div>
      <p>count + 5 = {copy.count + 5}</p>
    </div>
  );
}

export default function FixedMutatingProps() {
  const [state, setState] = useState({ count: 0 });

  function increment() {
    setState(prev => ({ ...prev, count: prev.count + 1 }));
  }

  return (
    <div>
      <h2>Fixed Component</h2>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <Child state={state} />
    </div>
  );
}
