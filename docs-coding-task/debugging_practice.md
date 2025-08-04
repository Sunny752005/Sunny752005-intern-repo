Debugging Practice – Mutating Props

//////🐛 What was the issue?/////

The issue wass in the component `BuggyMutatingProps`, where the child component directly chnaged the `state` object received from its parent. 

```jsx
function Child({ state }) {
  //Directly mutating props
  state.count += 5;

  return (
    <div>
      <p>count + 5 = {state.count}</p>
    </div>
  );
}
```

This is a React anti-pattern. Since JavaScript objects are passed by reference, mutating the `state.count` inside the child coponentt was altering the parent’s state object. Thus as a result, with every click on the “Increment” button caused unexpected chnages in the numbers, like increasing the count by 10 or more instead of 1.



/////////🔍 What debugging method did you use?//////////

1. Visual inspection – I clicked the "Increment" button and noticed the count increased way more than expected.
2. Console logging – I added `console.log(state)` inside the child component to confirm that `state.count` was being mutated directly.
3. React DevTools – Inspected the component tree and props to verify that the mutation was being passed back up to the parent.


//////How did you resolve the problem?///////

I rewrote the code in the child component to ridden of this direct mutation i did it by cloning the prop using the spread operator and then performing the calculation on the cloned data:

```jsx
function Child({ state }) {
  const copy = { ...state };
  return (
    <div>
      <p>count + 5 = {copy.count + 5}</p>
    </div>
  );
}
```

This stops the original `state` object from being chnaged, keeping the parent’s state untouched.



///////////Final Working Components///////////

`BuggyMutatingProps.jsx`

```jsx
import React, { useState } from 'react';

function Child({ state }) {
  state.count += 5; // Mutating props
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
```

`FixedMutatingProps.jsx`

```jsx
import React, { useState } from 'react';

function Child({ state }) {
  const copy = { ...state }; //Safe copy
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
```

`Debugging.jsx`

```jsx
import React from 'react';
import BuggyMutatingProps from './BuggyMutatingProps';
import FixedMutatingProps from './FixedMutatingProps';

export default function Debugging() {
  return (
    <div>
      <h2>Debugging: Mutating Props</h2>
      <BuggyMutatingProps />
      <FixedMutatingProps />
    </div>
  );
}




////What I learned Lesson learned////

-Never mutate props annd to treat them immutable.
-To lways clone objects if I need to transform them inside a child component.
-JavaScript object references can cause errors if I am not carefull when using them.
- Debugging tools like console.log and React DevTools are really helpful for finding state/prop bugs in React.


