import React from 'react';
import ExpensiveCalculation from './Optimizing-Performance-with-useMemo/ExpensiveCalculation';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>useMemo Test</h1>
      <ExpensiveCalculation />
    </div>
  );
}

export default App;
