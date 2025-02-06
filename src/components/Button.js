// src/components/Button.js
import React from 'react';

const Button = ({ onClick, isReading }) => {
  return (
    <button 
      onClick={onClick}
      className={isReading ? 'button reading' : 'button'}
    >
      {isReading ? 'Stop Reading' : 'Read My Resume'}
    </button>
  );
};

export default Button;