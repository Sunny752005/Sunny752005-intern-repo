import React, { useState } from 'react';

const Greeting = () => {
  const [greeted, setGreeted] = useState(false);

  return (
    <div>
      <h1>{greeted ? 'Hello Sunny!' : 'Welcome!'}</h1>
      <button onClick={() => setGreeted(true)}>Greet</button>
    </div>
  );
};

export default Greeting;
