import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Home Page</h2>
      <p>Welcome to the homepage!</p>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};

export default Home;
