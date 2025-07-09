// src/api.js
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

export { api, controller };
