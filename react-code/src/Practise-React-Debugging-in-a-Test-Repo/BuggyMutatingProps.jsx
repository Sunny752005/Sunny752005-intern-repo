import React, { useState } from 'react';

function Child({ state }) {
  // Mutating prop directly
  state.count += 5;

  return (
    <div>
      <p>count + 5 = {state.count}</p>
    </div>
  );
}

export default function BuggyMutatingProps() {
  const [state, setState] = useState({ count: 0 });

  function increment() {
    setState(prev => ({ ...prev, count: prev.count + 1 }));
  }

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Buggy Component</h2>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <Child state={state} />
    </div>
  );
}
