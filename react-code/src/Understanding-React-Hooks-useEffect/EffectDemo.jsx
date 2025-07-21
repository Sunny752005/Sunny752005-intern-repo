import React, { useEffect, useState } from 'react';

const EffectDemo = () => {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(true);

  // Logs on mount and unmount
  useEffect(() => {
    console.log('✅ Component mounted');

    return () => {
      console.log('❌ Component unmounted');
    };
  }, []);

  // Fetch function triggered on button click
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!show) return <p>Component hidden</p>;

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
      <h2>useEffect Demo</h2>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={() => setShow(false)} style={{ marginLeft: '1rem' }}>Unmount Component</button>

      {data && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Title:</strong> {data.title}
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default EffectDemo;
