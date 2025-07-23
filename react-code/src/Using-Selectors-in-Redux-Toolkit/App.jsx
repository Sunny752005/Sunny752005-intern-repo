import React from 'react';
import Counter from './Counter';
import Message from './Message';

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Redux Selector Demo</h1>
      <Counter />
      <Message />
    </div>
  );
};

export default App;
