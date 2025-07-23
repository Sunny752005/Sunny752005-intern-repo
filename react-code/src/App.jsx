import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Navigation-with-React-Router/Home';
import Profile from './Navigation-with-React-Router/Profile';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>React Router Demo</h1>

        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
