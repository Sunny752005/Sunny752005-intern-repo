import React, { useEffect } from 'react';
import { api, controller } from './api';

function TestApi() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.post('/posts', {
          title: 'Focus Bear Test',
          body: 'Hello world!',
          userId: 1
        });
        console.log('Response:', res.data);
      } catch (err) {
        console.error('Request failed:', err.message);
      }
    };

    fetchData();

    return () => controller.abort(); // Cancel if component unmounts
  }, []);

  return <div>POST request sent. Check the console!</div>;
}

export default TestApi;
