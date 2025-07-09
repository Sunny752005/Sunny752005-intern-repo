import React, { useEffect, useState } from 'react';
import { api } from './api'; // Make sure you have api.js in src/

function TestApi() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const res = await api.post('/posts', {
          title: 'Focus Bear Test',
          body: 'Test Body from Vite + React',
          userId: 1
        });
        setResponse(res.data);
      } catch (err) {
        setError(err.message);
      }
    };

    sendRequest();
  }, []);

  return (
    <div>
      <h3>API Response:</h3>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}

export default TestApi;
