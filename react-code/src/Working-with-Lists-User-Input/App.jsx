import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Simple Form List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter something..."
        style={{ marginRight: '1rem', padding: '0.5rem' }}
      />
      <button onClick={handleAdd} style={{ padding: '0.5rem' }}>
        Add
      </button>

      <ul style={{ marginTop: '1rem' }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
