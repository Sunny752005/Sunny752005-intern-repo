import React from 'react';
import Counter from './Counter';
import Message from './Message';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Redux Counter App</h1>
      <Counter />
      <Message />
    </div>
  );
}

export default App;
