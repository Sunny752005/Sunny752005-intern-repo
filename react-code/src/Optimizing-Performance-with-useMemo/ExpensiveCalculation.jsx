import React, { useMemo, useState } from 'react';

const ExpensiveCalculation = () => {
  const [number, setNumber] = useState(1000);
  const [darkMode, setDarkMode] = useState(false);


  const expensiveResult = useMemo(() => {
    console.log('⏳ Running expensive calculation...');
    let result = 0;
    for (let i = 0; i <= number * 1000; i++) {
      result += i;
    }
    return result;
  }, [number]); 

  const themeStyle = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
    padding: '1rem',
    marginTop: '1rem',
    transition: '0.3s',
  };

  return (
    <div style={themeStyle}>
      <h2>useMemo Demo</h2>
      <div>
        <label>Number: </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value) || 0)}
        />
      </div>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
      <p>Result of expensive calc: {expensiveResult}</p>
    </div>
  );
};

export default ExpensiveCalculation;
