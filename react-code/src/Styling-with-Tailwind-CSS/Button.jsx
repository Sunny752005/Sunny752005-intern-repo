import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:scale-95 transition-all"
    >
      {children}
    </button>
  );
};

export default Button;
