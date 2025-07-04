import React, { useEffect } from 'react';
import axios from 'axios';

const generateRequestId = () => `req-${Date.now()}`;
const controller = new AbortController();

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    Accept: '*/*',
    'X-Request-ID': generateRequestId()
  },
  signal: controller.signal
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.message);
    return Promise.reject(error);
  }
);


function TestApi() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.post('/posts', {
          title: 'Test Post',
          body: 'Hello from Focus Bear!',
          userId: 123
        });
        console.log('Response:', res.data);
      } catch (err) {
        console.error('Request failed:', err.message);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return <div>Sent POST request (check console)</div>;
}


function App() {
  return (
    <div className="App">
      <h2>Axios Test</h2>
      <TestApi />
    </div>
  );
}

export default App;