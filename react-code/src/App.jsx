import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Navigation-with-React-Router/Home';
import Profile from './Navigation-with-React-Router/Profile';
import Debugging from './Practise-React-Debugging-in-a-Test-Repo/Debugging';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>React Router Demo</h1>

        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/profile" style={{ marginRight: '1rem' }}>Profile</Link>
          <Link to="/debugging">Debugging</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/debugging" element={<Debugging />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
