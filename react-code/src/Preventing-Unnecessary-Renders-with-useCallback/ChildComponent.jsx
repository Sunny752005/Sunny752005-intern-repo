import React from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('🔄 ChildComponent rendered');
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

export default ChildComponent;
