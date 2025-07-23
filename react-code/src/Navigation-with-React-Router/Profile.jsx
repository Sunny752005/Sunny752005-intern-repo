import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Profile Page</h2>
      <p>This is your profile.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Profile;
