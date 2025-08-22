import React, { useState } from 'react';

function App() {
  // State for input box
  const [input, setInput] = useState('');
  // State for list of items
  const [items, setItems] = useState([]);

  // Add current input to the list if it’s not empty
  const handleAdd = () => {
    if (input.trim() !== '') {
      setItems([...items, input]); // update list immutably
      setInput(''); // reset input field
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Simple Form List</h1>

      {/* Input field controlled by state */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter something..."
        style={{ marginRight: '1rem', padding: '0.5rem' }}
      />

      {/* Button triggers add logic */}
      <button onClick={handleAdd} style={{ padding: '0.5rem' }}>
        Add
      </button>

      {/* Render list of items */}
      <ul style={{ marginTop: '1rem' }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
