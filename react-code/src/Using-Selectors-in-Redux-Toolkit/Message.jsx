import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounter } from './store';

const Message = () => {
  const count = useSelector(selectCounter);

  let message = "Let's get started!";
  if (count > 5) message = "You're doing great!";
  else if (count < 0) message = "Try to stay positive!";

  return (
    <div>
      <h3>Message:</h3>
      <p>{message}</p>
    </div>
  );
};

export default Message;
