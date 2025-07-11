import React, { useEffect, useState } from 'react';
import { fetchUsers } from './api';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data))
      .catch(err => setError('Failed to load users'));
  }, []);

  if (error) return <div>{error}</div>;
  if (!users.length) return <div>Loading...</div>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default UserList;
