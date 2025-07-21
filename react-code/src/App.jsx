import React from 'react';
import ParentComponent from './Preventing-Unnecessary-Renders-with-useCallback/ParentComponent';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>useCallback Test</h1>
      <ParentComponent />
    </div>
  );
}

export default App;
