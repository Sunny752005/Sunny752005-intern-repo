import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounter } from './store';

const Message = () => {
  const count = useSelector(selectCounter);

  let message = 'Let’s get started!';
  if (count > 5) message = 'Wow! You clicked a lot!';
  else if (count < 0) message = 'Going backwards, huh?';

  return <p style={{ marginTop: '1rem' }}>{message}</p>;
};

export default Message;
